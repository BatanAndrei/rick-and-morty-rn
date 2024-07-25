import { createContext, useContext, useState, useEffect } from "react"; 
import axios from "axios";


const context = {
    dataCharacters: [],
};

export const Context = createContext(context);
export const useGlobalContext = () => useContext(Context);

const characters = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character/`,
});


export const ContextWrapper = ({ children }) => {

    const [listCharacters, setListCharacters] = useState([]);

    const saveStorage = (keyName, valueName) => {
        localStorage.setItem(keyName, JSON.stringify(valueName));
    };

    const getCharacters = async (numberPage, statusCharacter, speciesCharacter) => { 

        try {
                const response = await characters.get(`/?page=${numberPage}&status=${statusCharacter}&species=${speciesCharacter}`);
        
                if(response.status !== 200) {
                    throw new Error('Something went wrong!');
                }
                
                const data = response;
                setListCharacters(data.data.results);
                return data;
        
        }catch(err) {
            console.error(err.message)
                }
        };

        useEffect(() => {
            getCharacters(1, '', '');
        }, []);
        
    return <Context.Provider value={{ listCharacters }}>
                {children }
            </Context.Provider>
}