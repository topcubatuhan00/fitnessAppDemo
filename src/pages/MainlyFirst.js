/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainlyFirst = ({ route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.immerContainer}>
                <Text style={styles.text}>User Name : {route.params.user.userName}</Text>
                <Text style={styles.text}>User Surname : {route.params.user.userSurame}</Text>
                <Text style={styles.text}>User Age : {route.params.user.userAge}</Text>
                <Text style={styles.text}>User E-Mail : {route.params.user.userEmail}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    immerContainer: {
        backgroundColor: '#1976d2',
        padding: 30,
        borderRadius: 20,
    },
});

export default MainlyFirst;
