import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('./assets/kanlogoyeni.png')} style={styles.logo} />
            <Text style={styles.text}>KAN BAĞIŞI YAP</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Image source={require('./assets/email.png')} style={styles.iconInside} />
              <TextInput
                style={styles.input}
                placeholder="E-posta"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Image source={require('./assets/şifreyeni.png')} style={styles.iconInside} />
              <TextInput
                style={styles.input}
                placeholder="Şifre"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => { setEmail(''); setPassword(''); }} style={styles.clearAllButton}>
            <Text style={styles.clearAllText}>Temizle</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.registerButton]}>
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgotPassword} onPress={() => console.log("Şifremi unuttum")}>
            <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000000',
    marginTop: 20,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'stretch',
    
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    flex: 1,
    height: 60, // Yüksekliği artırdık
    marginBottom: 10,
  },
  iconInside: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize:18,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 15,
  },
  button: {
    backgroundColor: '#880808',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    margin: 10,
    justifyContent: 'center',
  },
  registerButton: {
    backgroundColor: '#880808',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginLeft: 102,
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#000000',
    fontSize: 14,
  },
  clearAllButton: {
    alignSelf: 'center',
    marginTop: 5,
  },
  clearAllText: {
    color: '#000000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});