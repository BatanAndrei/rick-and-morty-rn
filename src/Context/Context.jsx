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

        const getStoreTheme = async () => {
            try {
                const otherThemeGet = await AsyncStorage.getItem('otherTheme');
                if(otherThemeGet !== null) {
                setOtherTheme(JSON.parse(otherThemeGet));
                }
            } catch (e) {
                console.log(e);
            }
        };

        const getStoreOffline = async () => {
            try {
                const listCharactersOfflineGet = await AsyncStorage.getItem('listCharactersOffline');
                if(listCharactersOfflineGet !== null) {
                    setListCharacters(JSON.parse(listCharactersOfflineGet));
                }
            } catch (e) {
                console.log(e);
            }
        };

        useEffect(() => {
            getStoreTheme();
            getStoreOffline();
        }, []);
    
        const setStoreTheme = async () => {
            try {
                await AsyncStorage.setItem('otherTheme', JSON.stringify(!otherTheme));
                
            } catch (e) {
                console.log(e);
            }
        };

        const setStoreOffline = async () => {
            try {
                await AsyncStorage.setItem('listCharactersOffline', JSON.stringify(listCharactersOffline));
                
            } catch (e) {
                console.log(e);
            }
        };
    
        const toggleOtherTheme = () => {
            setStoreTheme();
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
                    setStoreOffline();
                }
            });
        }, [selectedStatusCharacter, selectedSpeciesCharacter]);

        const loadingMoreCharacters = async () => {
            setIsLoading(true);
            numberPage = (listCharacters.length / 20) + 1;
            setStoreOffline();

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