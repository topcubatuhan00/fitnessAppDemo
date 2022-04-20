/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../components/Button';



const App = ({navigation}) => {
    const memberSign = () => {
        navigation.navigate('MemberSign');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text="Kaydol" onPress={memberSign}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default App;
