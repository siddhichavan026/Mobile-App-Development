import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomHeader from '../Exp05/CustomHeader';
import CustomInput from '../Exp05/CustomInput';
import CustomButton from '../Exp05/CustomButton';
import CustomProfileCard from './CustomProfileCard';

const SettingScreen = () => {
  const [theme, setTheme] = useState('');
  const [language, setLanguage] = useState('');

  const [updatedTheme, setUpdatedTheme] = useState('');
  const [updatedLanguage, setUpdatedLanguage] = useState('');

  const handleUpdate = () => {
    setUpdatedTheme(theme);
    setUpdatedLanguage(language);
  };

  return (
    <View style={styles.container}>

      <CustomHeader title="Settings" />

      <CustomInput placeholder="Enter Theme" value={theme} onChangeText={setTheme}/>

      <CustomInput placeholder="Enter Language" value={language} onChangeText={setLanguage}/>

      <CustomButton title="Update" onPress={handleUpdate}/>

      <View style={styles.cardContainer}>
        <CustomProfileCard>

          <Text style={styles.text}>
            Theme : {updatedTheme}
          </Text>

          <Text style={styles.text}>
            Language : {updatedLanguage}
          </Text>

        </CustomProfileCard>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingLeft: 10,
    paddingRight: 10,
  },

  cardContainer: {
    marginTop: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
});

export default SettingScreen;