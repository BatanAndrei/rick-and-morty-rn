import { createContext, useContext, useState, useEffect } from "react"; 
import { getCharacters } from '../api/getCharacters';
import NetInfo from "@react-native-community/netinfo";
import RNRestart from 'react-native-restart';
import { Alert } from "react-native";
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

    let numberPage = 1;

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

        useEffect(() => {
            getStoreTheme();
            //clearAllData();
        }, []);
    
        const setStoreTheme = async () => {
            try {
                await AsyncStorage.setItem('otherTheme', JSON.stringify(!otherTheme));
                
            } catch (e) {
                console.log(e);
            }
        };
    
        const toggleOtherTheme = () => {
            setStoreTheme();
            setOtherTheme(otherTheme => !otherTheme);
        };
        /* const clearAllData = () => {
            AsyncStorage.getAllKeys()
                .then(keys => AsyncStorage.multiRemove(keys))
                .then(() => alert('success'));
        } */

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            if(state.isConnected === false) {
                Alert.alert("No internet", "Please check your internet connection and try again", [{
                    text: "Try again", 
                    onPress: () => RNRestart.restart()
                }])
            }
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
                }
            });
        }, [selectedStatusCharacter, selectedSpeciesCharacter]);

        const loadingMoreCharacters = async () => {
            setIsLoading(true);
            numberPage = (listCharacters.length / 20) + 1;

            const newCharacters = await getCharacters(numberPage, selectedStatusCharacter, selectedSpeciesCharacter);
            const moreCharacter = newCharacters.data.results;

            if(moreCharacter) {
                setIsLoading(false);
            }
            setListCharacters(prevCharacters => [...prevCharacters, ...moreCharacter]);
        };

    return <Context.Provider value={{ listCharacters, isLoading, getDropdownStatus, getDropdownSpecies, loadingMoreCharacters, toggleOtherTheme, otherTheme }}>
                {children }
            </Context.Provider>
}