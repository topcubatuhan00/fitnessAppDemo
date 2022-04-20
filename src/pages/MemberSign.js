/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

const App = ({navigation}) => {

    const [userName, setuserName] = useState('');
    const [userSurame, setuserSurame] = useState('');
    const [userAge, setuserAge] = useState('');
    const [userEmail, setuserEmail] = useState('');

    const handleSubmit = () => {

        if (!userName ||
            !userSurame ||
            !userAge ||
            !userEmail){
                Alert.alert('Tüm Boşlukları Doldurunuz');
            } else {
                const user = {
                    userName,
                    userSurame,
                    userAge,
                    userEmail,
                };
                navigation.navigate('MainlyFirst', {user: user});
            }
    };

    return (
        <View style={styles.container}>
            <Input label="Üye Adı" placeholder="Üyenin Adını Giriniz..." onChangeText={setuserName} />
            <Input label="Üye Soyadı" placeholder="Üyenin Soydını Giriniz..." onChangeText={setuserSurame} />
            <Input label="Üye Yaşı" placeholder="Üyenin Yaşını Giriniz..." onChangeText={setuserAge} />
            <Input label="Üye E-Postası" placeholder="Üyenin E-Posta Adresini Giriniz..." onChangeText={setuserEmail} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default App;
