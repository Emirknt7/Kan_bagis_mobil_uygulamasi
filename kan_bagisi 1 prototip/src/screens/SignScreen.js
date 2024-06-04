import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert, Image, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleRegister = () => {
    // Kayıt işlemini gerçekleştir
    console.log("kayıt başarılı !!");
    Alert.alert("mesaj", "kayıt başarılı");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <KeyboardAwareScrollView 
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        extraHeight={150}
      >
        <View style={{ alignItems: "center" }}>
          <View>
            <Image
              source={require('../../assets/images/src/Resim1.png')}
              style={styles.image}
            />
          </View>

          <Text style={styles.title}>Kan Bağışı</Text>

          <View style={styles.inputContainer}>
            <View style={styles.icons}>
              <Image
                source={require('../../assets/images/src/KisiBilgisi.png')}
                style={styles.icon}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="İsim"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.icons}>
              <Image
              source={require('../../assets/images/src/KisiBilgisi.png')}
              style={styles.icon}
            />
            </View>
            
            <TextInput
              style={styles.input}
              placeholder="Soyisim"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.icons}>
             <Image
                source={require('../../assets/images/src/mail.png')}
                style={{width: 35, height:35}}
              />
            </View>
           
            <TextInput
              style={styles.input}
              placeholder="E-posta"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.icons}>
              <Image
                source={require('../../assets/images/src/Sifre.png')}
                style={styles.icon}
              />
            </View>
            
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputContainer}>
          <View style={styles.icons}>
            <Image
              source={require('../../assets/images/src/KanGurubu.png')}
              style={[styles.icon, styles.specialIcon]}
            />
          </View>
            <TextInput
              style={styles.input}
              placeholder="Kan Grubu"
              value={bloodGroup}
              onChangeText={(text) => setBloodGroup(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const inputWidth = windowWidth - 70;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#F8F8F8',
    flexGrow: 1,
  },
  title: {
    marginTop: 180,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 65,
    width: inputWidth,
    
  },
  specialIcon: {
    height: 28,
    width: 24.5,
  
  },
  icons:{
    borderWidth: 1, 
    borderRadius: "50%", 
    width: 45, 
    height: 45, 
    borderColor: "#ddd",
    justifyContent: "center", 
    alignItems :"center"
  },
  icon: {
    width: 40,
    height: 40,
  },
  input: {
    paddingHorizontal: 10,
    flex: 1,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#880808',
    padding: 15,
    alignItems: 'center',
    borderRadius: 12,
    width: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    borderBottomColor: '#880808',
  },
  image: {
    width: 105,
    height: 126.76,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: -190,
  },
});
