import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { GlobalStyle } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
    const [searchText, setSearchText] = useState<string>('');
    
    const handleTextChange = (text: string) => {
        if (text.length <= 30) {
            setSearchText(text);
        }
    };

    return (
      <SafeAreaView style={GlobalStyle.Container}>
          <View style={styles.Head}>
            <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.Input}
                            placeholder="Найти...."
                            placeholderTextColor="#888"
                            onChangeText={handleTextChange}
                            value={searchText}
                            maxLength={30}
                        />
                    <Icon name="search1" size={20} color="#888" style={styles.SearchIcon} />
                    </View>
        </View>
      </SafeAreaView>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({
    Head: {
        paddingHorizontal: 20,
    },
    Text: {
        color: '#000',
    },
    InputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 4,
    },
    Input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        padding: 5,
    },
    TextMedium: {
        fontSize: 18,
    },
    SearchIcon: {
        marginLeft: 20,
    },
});
