import React,{useEffect, useState} from "react";
import NumberButton from "./NumberButton";
import StarsContainer from "./StarsContainer";
import utils from "../scripts/utils";

const StarMatchGame = () => {
    const defaultSecondsOfGame = 12;
    const [stars,setStars] = useState(utils.random(1,9));
    const [availableNums,setAvailableNums] = useState(utils.range(1,9));
    const [candidateNums,setCandidateNums] = useState([]);
    const [secondsLeft,setSecondsLeft] = useState(defaultSecondsOfGame);
    

    useEffect(() => {
        if(secondsLeft > 0){
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
        if(currentStatus === 'used')
            return; //do nothing
        
        const newCandidateNums = 
            currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);

        if(utils.sum(newCandidateNums) !== stars){
            setCandidateNums(newCandidateNums);
        }
        else {
            const newAvailableNums = availableNums.filter( n => !newCandidateNums.includes(n));
            setStars(utils.randomSumIn(newAvailableNums,9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }

    };

    //Restart game function
    const restartGame = () => {
        setAvailableNums(utils.range(1,9));
        setCandidateNums([]);
        setStars(utils.random(1,9));
        setSecondsLeft(defaultSecondsOfGame);
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
                <StarsContainer stars={stars} gameStatus={gameStatus} onEnd={restartGame} />
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