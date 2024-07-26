import { createContext, useContext, useState, useEffect } from "react"; 
import { getCharacters } from '../api/getCharacters';


const context = {
    dataCharacters: [], 
    getDropdownStatus: () => {}, 
    getDropdownSpecies: () => {},
    loadingMoreCharacters: () => {}
};

export const Context = createContext(context);
export const useGlobalContext = () => useContext(Context);


export const ContextWrapper = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [listCharacters, setListCharacters] = useState([]);
    const [selectedStatusCharacter, setSelectedStatusCharacter] = useState('');
    const [selectedSpeciesCharacter, setSelectedSpeciesCharacter] = useState('');
    const [numberPage, setNumberPage] = useState(1);

    const saveStorage = (keyName, valueName) => {
        localStorage.setItem(keyName, JSON.stringify(valueName));
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
            getCharacters(numberPage, selectedStatusCharacter, selectedSpeciesCharacter).then(newCharacter => {
                setListCharacters(newCharacter.data.results);
                setIsLoading(false);
            });
        }, [selectedStatusCharacter, selectedSpeciesCharacter]);

        const loadingMoreCharacters = async () => {
            const newCharacters = await getCharacters((listCharacters.length / 20) + 1, selectedStatusCharacter, selectedSpeciesCharacter);
            const moreCharacter = newCharacters.data.results;
            setListCharacters(prevCharacters => [...prevCharacters, ...moreCharacter]);
        };

    return <Context.Provider value={{ listCharacters, isLoading, getDropdownStatus, getDropdownSpecies, loadingMoreCharacters }}>
                {children }
            </Context.Provider>
}