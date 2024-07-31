import { createContext, useContext, useState, useEffect } from "react"; 
import { getCharacters } from '../api/getCharacters';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';


const context = {
    dataCharacters: [], 
    getDropdownStatus: () => {}, 
    getDropdownSpecies: () => {},
    loadingMoreCharacters: () => {},
    toggleOtherTheme: () => {}
};

export const Context = createContext(context);
export const useGlobalContext = () => useContext(Context);


export const ContextWrapper = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [listCharacters, setListCharacters] = useState([]);
    const [selectedStatusCharacter, setSelectedStatusCharacter] = useState('');
    const [selectedSpeciesCharacter, setSelectedSpeciesCharacter] = useState('');
    const [otherTheme, setOtherTheme] = useState(true);
    const [connectInternet, setConnectInternet] = useState(true);

    let numberPage = 1;
    let listCaractersOnline = listCharacters;
	let listCharactersOffline = listCharacters.slice(-10);

        const getStore = async (valueTheme, valueOffline) => {
            try {
                const getValueTheme = await AsyncStorage.getItem(valueTheme);
                if(getValueTheme !== null) {
                    setOtherTheme(JSON.parse(getValueTheme));
                }

                const getValueOffline = await AsyncStorage.getItem(valueOffline);
                if(getValueOffline !== null) {
                    setListCharacters(JSON.parse(getValueOffline));
                }
            } catch (e) {
                console.log(e);
            }
        };

        useEffect(() => {
            getStore('otherTheme', 'listCharactersOffline');
        }, []);
    
        const setStore = async (keyValue, value) => {
            try {
                await AsyncStorage.setItem(keyValue, JSON.stringify(value));
            } catch (e) {
                console.log(e);
            }
        };
    
        const toggleOtherTheme = () => {
            setStore('otherTheme', !otherTheme);
            setOtherTheme(otherTheme => !otherTheme);
        };
    
        useEffect(() =>{
            const unsubscribe = NetInfo.addEventListener((state) => {
                setConnectInternet(state.isConnected);
            });
            
            return () => {
                unsubscribe();
            }
        }, [])
    
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
                if(newCharacter.data.results) {
                    setIsLoading(false);
                    setStore('listCharactersOffline', listCharactersOffline);
                }
            });
        }, [selectedStatusCharacter, selectedSpeciesCharacter]);

        const loadingMoreCharacters = async () => {
            setIsLoading(true);
            numberPage = (listCharacters.length / 20) + 1;
            setStore('listCharactersOffline', listCharactersOffline);

            const newCharacters = await getCharacters(numberPage, selectedStatusCharacter, selectedSpeciesCharacter);
            const moreCharacter = newCharacters.data.results;

            if(moreCharacter) {
                setIsLoading(false);
            }
            setListCharacters(prevCharacters => [...prevCharacters, ...moreCharacter]);
        };

    return <Context.Provider value={{ listCaractersOnline, listCharactersOffline, isLoading, getDropdownStatus, getDropdownSpecies, loadingMoreCharacters, toggleOtherTheme, otherTheme, connectInternet }}>
                {children }
            </Context.Provider>
}