import { createContext, useContext, useState, useEffect } from "react"; 
import axios from "axios";


const context = {
    dataCharacters: [], 
    getDropdownStatus: () => {}, 
    getDropdownSpecies: () => {}
};

export const Context = createContext(context);
export const useGlobalContext = () => useContext(Context);

const characters = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character/`,
});


export const ContextWrapper = ({ children }) => {

    const [listCharacters, setListCharacters] = useState([]);
    const [selectedStatusCharacter, setSelectedStatusCharacter] = useState('');
    const [selectedSpeciesCharacter, setSelectedSpeciesCharacter] = useState('');
    const [numberPage, setNumberPage] = useState(1);
    
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

        const getDropdownStatus = (e) => {
            setSelectedStatusCharacter(e.label);

                if(e.label === 'All status') 
                    setSelectedStatusCharacter('');
            };

        const getDropdownSpecies = (e) => {
            setSelectedSpeciesCharacter(e.label);

                if(e.label === 'All species') 
                    setSelectedSpeciesCharacter('');
            };

        useEffect(() => {
            setTimeout(() => {
                getCharacters(numberPage, selectedStatusCharacter, selectedSpeciesCharacter);
            }, 1000)
        }, [numberPage, selectedStatusCharacter, selectedSpeciesCharacter]);

    return <Context.Provider value={{ listCharacters, getDropdownStatus, getDropdownSpecies, selectedStatusCharacter, selectedSpeciesCharacter }}>
                {children }
            </Context.Provider>
}