import { createContext, useContext, useState, useEffect } from "react"; 
import { getCharacters } from '../api/getCharacters';
import NetInfo from "@react-native-community/netinfo";
import RNRestart from 'react-native-restart';
import { Alert } from "react-native";


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

    let numberPage = 1;

    const unsubscribe = NetInfo.addEventListener((state) => {
        if(state.isConnected === false) {
            Alert.alert("No internet", "Please check your internet connection and try again", [{
                text: "Try again", 
                onPress: () => RNRestart.restart()
            }])
        }else if (state.isConnected === true) {
        
        }
    });

    useEffect(() => {
        unsubscribe();
    }, []);

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
        }, [selectedStatusCharacter, selectedSpeciesCharacter, unsubscribe]);

        const loadingMoreCharacters = async () => {
            numberPage = (listCharacters.length / 20) + 1;
            const newCharacters = await getCharacters(numberPage, selectedStatusCharacter, selectedSpeciesCharacter);
            const moreCharacter = newCharacters.data.results;
            setListCharacters(prevCharacters => [...prevCharacters, ...moreCharacter]);
        };

    return <Context.Provider value={{ listCharacters, isLoading, getDropdownStatus, getDropdownSpecies, loadingMoreCharacters }}>
                {children }
            </Context.Provider>
}