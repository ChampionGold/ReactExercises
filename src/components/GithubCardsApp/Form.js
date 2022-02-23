import React from 'react';
import { GetGithubProfile } from './../../scripts/calls';

class Form extends React.Component{
    state = { userName : '' };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await GetGithubProfile(this.state.userName);
        this.props.onSubmit(resp.data);
        this.setState({ userName : ''});
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
             
                <input 
                    type="text" 
                    placeholder="Github Username" 
                    value = {this.state.userName}
                    onChange = {event => this.setState({userName: event.target.value})}
                    required/>
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;