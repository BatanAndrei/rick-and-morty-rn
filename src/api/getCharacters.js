import axios from "axios";


const characters = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character/`,
});

export const getCharacters = async (numberPage, statusCharacter, speciesCharacter) => { 
    try {
            const response = await characters.get(`/?page=${numberPage}&status=${statusCharacter}&species=${speciesCharacter}`);
    
            if(response.status !== 200) {
                throw new Error('Something went wrong!');
            }
            
            const data = response;

            return data;
    
    }catch(error) {
        if (error.response) {
        
            const { data, status, headers } = error.response;

            console.error(data);

        } else if (error.request) {
            
            console.error(error.request);
        } else {
            
            console.error(error.message);
        }
        
            console.error(error.config);
            console.error(error.toJSON());
        }
    };