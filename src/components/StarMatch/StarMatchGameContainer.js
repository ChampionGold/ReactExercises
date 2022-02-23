import React,{useState} from 'react';
import StarMatchGame from './StarMatchGame';

const StarMatchGameContainer = () => {
    const [gameId,setGameId] = useState(1);

    return (
    <StarMatchGame key={gameId} 
    startNewGame={() => setGameId(gameId+1)}/>);
}

export default StarMatchGameContainer;