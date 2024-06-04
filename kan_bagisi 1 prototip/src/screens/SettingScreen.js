import { StyleSheet, View, Text, SafeAreaView, Dimensions, Switch, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const { height, width } = Dimensions.get('window');

const SettingScreen = ({ navigation }) => {
  const [isVibrationEnabled, setIsVibrationEnabled] = useState(true);
  const [isLanguageEnabled, setIsLanguageEnabled] = useState(true);
  const [vibrationText, setVibrationText] = useState('');
  const [languageText, setLanguageText] = useState('');

  const toggleVibrationSwitch = () => {
    setIsVibrationEnabled(previousState => !previousState);
    setVibrationText(isVibrationEnabled ? 'Inactive' : 'Active');
  };

  const toggleLanguageSwitch = () => {
    setIsLanguageEnabled(previousState => !previousState);
    setLanguageText(isLanguageEnabled ? 'TR' : 'EN');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.rowContainer}>
          <View style={styles.containerKucuktur}>
           
          </View>
          <View style={styles.containerAyarlar}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>Ayarlar</Text>
          </View>
        </View>

        <View style={styles.underline} />

        <View style={styles.TitresimContainer}>
          <View style={styles.titresimTextContainer}>
            <Text style={styles.titresim}>Titreşim</Text>
          </View>
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: 'grey', true: '#a80800' }}
              thumbColor='#f4f3f4'
              ios_backgroundColor='grey'
              onValueChange={toggleVibrationSwitch}
              value={isVibrationEnabled}
            />
          </View>
        </View>

        <View style={styles.DilContainer}>
          <View style={styles.dilTextContainer}>
            <Text style={styles.dil}>Uygulama Dili</Text>
          </View>
          <View style={styles.switchContainer}>
            <View style={styles.languageSwitchContainer}>
              <Text style={styles.switchText}>{isLanguageEnabled ? 'TR' : 'EN'}</Text>
              <Switch
                trackColor={{ false: 'grey', true: '#a80800' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='grey'
                onValueChange={toggleLanguageSwitch}
                value={isLanguageEnabled}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: height * 0.03,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: height * 0.035,
    alignItems: 'center'
  },
  containerKucuktur: {
    paddingLeft: width * 0.1
  },
  containerAyarlar: {
    paddingLeft: width * 0.28
  },
  underline: {
    marginTop: 5,
    height: 0.3,
    backgroundColor: '#a7a8a7',
    width: '84%',
    marginLeft: '8%',
    marginRight: '8%'
  },
  TitresimContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.05,
    width: '84%',
    height: '10%',
    marginLeft: '8%',
    marginRight: '8%',
    backgroundColor: '#e9ebe8',
    borderRadius: 7,
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  titresimTextContainer: {
    flex: 1
  },
  titresim: {
    fontSize: 20
  },
  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  DilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.03,
    width: '84%',
    height: '10%',
    marginLeft: '8%',
    marginRight: '8%',
    backgroundColor: '#e9ebe8',
    borderRadius: 7,
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  dilTextContainer: {
    flex: 1
  },
  dil: {
    fontSize: 20
  },
  languageSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switchText: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold'
  }
});

export default SettingScreen;
