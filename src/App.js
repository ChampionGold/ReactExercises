import React from 'react';
import CardContainer from './components/CardContainer';
import Form from './components/Form';



class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        profileListSuper :[] ,
      };
    }

    addNewProfile = (profileData) => {
        //this.setState(prevState => (prevState.profileListSuper.push(profileData)));
        this.setState(prevState => ({
          profileListSuper : [...prevState.profileListSuper,profileData],
        }));

    }

    render(){
      
      return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className="header">{this.props.title}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
              <CardContainer profileList={this.state.profileListSuper} title="List of users"/>
          </div>
          <div className="col-md-6">
              <Form onSubmit={this.addNewProfile} />
          </div>
        </div>

      </div>
      );
    }
}

export default App;
