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
    const [listCharactersOnline, setListCharactersOnline] = useState([]);
    const [listCharactersOffline, setListCharactersOffline] = useState([]);
    const [selectedStatusCharacter, setSelectedStatusCharacter] = useState('');
    const [selectedSpeciesCharacter, setSelectedSpeciesCharacter] = useState('');
    const [otherTheme, setOtherTheme] = useState(true);
    const [connectInternet, setConnectInternet] = useState(true);

    let numberPage = 1;
    
        const getStore = async (valueTheme, valueOffline) => {
            try {
                const getValueTheme = await AsyncStorage.getItem(valueTheme);
                if(getValueTheme !== null) {
                    setOtherTheme(JSON.parse(getValueTheme));
                }

                const getValueOffline = await AsyncStorage.getItem(valueOffline);
                console.log(getValueOffline)
                if(getValueOffline !== null) {
                    setListCharactersOffline(JSON.parse(getValueOffline));
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
                let resultGet = newCharacter.data.results;
                setListCharactersOnline(resultGet);

                if(resultGet) {
                    let resultGetLastTen = resultGet.slice(-10);
                    setListCharactersOffline(resultGetLastTen);
                    setStore('listCharactersOffline', resultGetLastTen);
                    setIsLoading(false);
                }
            });
        }, [selectedStatusCharacter, selectedSpeciesCharacter]);

        const loadingMoreCharacters = async () => {
            setIsLoading(true);
            numberPage = (listCharactersOnline.length / 20) + 1;

            const newCharacters = await getCharacters(numberPage, selectedStatusCharacter, selectedSpeciesCharacter);
            const moreCharacter = newCharacters.data.results;
            const moreCharacterLastTen = moreCharacter.slice(-10);

            if(moreCharacter) {
                setIsLoading(false);
            }
            setListCharactersOnline(prevCharacters => [...prevCharacters, ...moreCharacter]);
            setListCharactersOffline(moreCharacterLastTen);
            setStore('listCharactersOffline', moreCharacterLastTen);
        };

    return <Context.Provider value={{ listCharactersOnline, listCharactersOffline, isLoading, getDropdownStatus, getDropdownSpecies, loadingMoreCharacters, toggleOtherTheme, otherTheme, connectInternet }}>
                {children }
            </Context.Provider>
}