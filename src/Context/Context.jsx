import { createContext, useContext, useState, useEffect } from "react"; 
import axios from "axios";


const context = {
    listCharacters: [],
};

export const Context = createContext(context);
export const useGlobalContext = () => useContext(Context);

const character = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character/`,
});


export const ContextWrapper = ({ children }) => {

    const [listCharacters, setListCharacters] = useState([]);

    const saveStorage = (keyName, valueName) => {
        localStorage.setItem(keyName, JSON.stringify(valueName));
    };

    const getCharacter = async (quantity) => { 

        try {
                const response = await character.get(`/?page=${quantity}`);
        
                if(response.status !== 200) {
                    throw new Error('Something went wrong!');
                }
                
                const data = response;
                setListCharacters(data);
                return data;
        
        }catch(err) {
            console.error(err.message)
                }
        };

        useEffect(() => {
            getCharacter(5);
        }, []);
        
    return <Context.Provider value={{}}>
                {children }
            </Context.Provider>
}