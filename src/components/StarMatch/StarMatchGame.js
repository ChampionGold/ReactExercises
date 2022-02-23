import React,{useEffect, useState} from "react";
import NumberButton from "./NumberButton";
import StarsContainer from "./StarsContainer";
import utils from "./../../scripts/utils"

const StarMatchGame = (props) => {
    const defaultSecondsOfGame = 12; //Default number of seconds for the game (just to not write this number all over the code)
    const [stars,setStars] = useState(utils.random(1,9)); //Stars
    const [availableNums,setAvailableNums] = useState(utils.range(1,9)); //Available numbers
    const [candidateNums,setCandidateNums] = useState([]); //Candidate Nunbers
    const [secondsLeft,setSecondsLeft] = useState(defaultSecondsOfGame); //Time
    
    //This side effect has the responsability of the timer
    useEffect(() => {
        if(secondsLeft > 0 && gameStatus !== 'won'){
           const timerId = setTimeout(() => {setSecondsLeft(secondsLeft-1)},1000);
           return () => clearTimeout(timerId);
        }
    });

    //Checks if selected numbers by user are greater than the number of shown stars.
    const candidatesAreWrong = (candidateNums) => {
        return utils.sum(candidateNums) > stars;
    };

    //Checks the current game status
    const gameStatus = 
        availableNums.length === 0 ? 'won' 
        : secondsLeft === 0 ? 'lost' : 'active';
        

    //Return current status of the number 
    const numberStatus = (number) => {
        if(!availableNums.includes(number))
            return 'used';

        if(candidateNums.includes(number)) 
            return candidatesAreWrong(candidateNums) ? 'wrong' : 'candidate';
        
        return 'available';
    };

    //Function that defines what happens when you click on a number button
    const onClickNumber = (number,currentStatus) => {
        
        if(currentStatus === 'used' || gameStatus !== 'active')
            return; //If number is already used or game is over, do nothing
        
        //Add number to candidate number temp list
        const newCandidateNums = 
            currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);

        
        if(utils.sum(newCandidateNums) !== stars){
            //If candidate numbers still doesnt sum up the exact number of stars, just set up as candidate numbers
            setCandidateNums(newCandidateNums);
        }
        else {
            //This means that candidate numbers sums up the exact number of stars, so we can mark them as 'used' and upd all other states.
            const newAvailableNums = availableNums.filter( n => !newCandidateNums.includes(n));
            setStars(utils.randomSumIn(newAvailableNums,9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }

    };
    
    //Render components
    return(                    
        <div className="container">

        {/*Title and instructions*/}
        <div className="row">
            <div className="col-md-12">
                <h1>Star Game Match!</h1>
                <h2>Pick 1 or more numbers that sum to the number of stars</h2>
            </div>
        </div>

        {/*Game*/}
        <div className="row">

            <div className="col-md-6 star-match-container">
                <StarsContainer stars={stars} gameStatus={gameStatus} onEnd={props.startNewGame} />
            </div>
            <div className="col-md-6 star-match-container">
                <div className="number-container">
                    {utils.range(1,9).map(number => 
                    <NumberButton 
                    key={number} 
                    number={number} 
                    status={numberStatus(number)} 
                    onClick={onClickNumber}/>)}
                </div>
            </div>
        </div>

        {/*Timer*/}
        <div className="row">
            <div className="col-md-12">
                <div className="star-match-timer">Time left: {secondsLeft} seconds, my dude.</div>
            </div>
        </div>

    </div>
    );
};

export default StarMatchGame;