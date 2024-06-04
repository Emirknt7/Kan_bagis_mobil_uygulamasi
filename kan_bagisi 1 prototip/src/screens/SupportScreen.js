import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, Alert } from 'react-native';

const SupportScreen = ({ navigation }) => {
  const btn_tıklama = () => {
    Alert.alert('Bildirim', 'Sorununuz bildirildi.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Destek Birimi</Text>
        </View>
        <TextInput
          style={styles.textArea}
          placeholder="Sorunuzu Yazınız"
          multiline={true}
          numberOfLines={4}
        />
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/images/src/KisiBilgisi.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="İsim"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/images/src/mail.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
          />
        </View>
        <View style={styles.buttonv}>
          <TouchableOpacity style={styles.button} onPress={btn_tıklama}>
            <Text style={styles.buttonText}>Bildir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
 
  textArea: {
    height: 250,
    borderColor: '#ddd',
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 3,
    borderRadius: 7,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#880808',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '30%'
  },
  buttonv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerText: {
    marginTop:20,
    marginBottom:15,
    marginLeft:50,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign:'center',
  },
});

export default SupportScreen;
