import React from 'react';
import StarMatchGameContainer from './components/StarMatch/StarMatchGameContainer';
import GithubCardsApp from './components/GithubCardsApp/GithubCardsApp';



class App extends React.Component {
  render(){
    return(
      <>
        {/* <GithubCardsApp /> */}
        <StarMatchGameContainer/>
      </>
    );
  };
}

export default App;
