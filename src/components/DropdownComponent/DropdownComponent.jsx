import { useState } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './dropdownStyles';
    

const DropdownComponent = ({ dataListStatusAndSpecies, lableForDropdown, getDropdownValue, value }) => {

console.log(value)
    const renderItem = item => {
    return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
        </View>
        );
    };

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={dataListStatusAndSpecies}
            labelField="label"
            valueField="value"
            placeholder={lableForDropdown}
            value={'value'}
            onChange={(e) => getDropdownValue(e)}
            renderItem={renderItem}
        />
    );
};

export default DropdownComponent;