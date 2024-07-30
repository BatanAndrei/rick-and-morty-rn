import { useState } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './dropdownStyles';
import { useGlobalContext  } from '../../Context/Context';
    

const DropdownComponent = ({ dataListStatusAndSpecies, lableForDropdown, getDropdownValue }) => {

    const { otherTheme } = useGlobalContext();

    const renderItem = item => {
    return (
        <View style={otherTheme ? styles.itemLight : styles.itemDark}>
            <Text style={otherTheme ? styles.textItemLight : styles.textItemDark}>{item.label}</Text>
        </View>
        );
    };

    return (
        <Dropdown
            style={otherTheme ? styles.dropdownLight : styles.dropdownDark}
            placeholderStyle={otherTheme ? styles.placeholderStyleLight : styles.placeholderStyleDark}
            selectedTextStyle={otherTheme ? styles.selectedTextStyleLight : styles.selectedTextStyleDark}
            inputSearchStyle={styles.inputSearchStyle}
            data={dataListStatusAndSpecies}
            labelField='label'
            valueField='value'
            placeholder={lableForDropdown}
            value='value'
            onChange={(e) => getDropdownValue(e)}
            renderItem={renderItem}
        />
    );
};

export default DropdownComponent;