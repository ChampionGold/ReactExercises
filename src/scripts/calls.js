import axios from 'axios';

export async function GetGithubProfile(userName){
    let response = [];

    response = 
        await axios.get(`https://api.github.com/users/${userName}`)
        .catch((error) => {
            if(error.response){

            }
            else if(error.request){

            }
            else{

            }
            console.log(error.config);
        });
   
    return response; 
}

