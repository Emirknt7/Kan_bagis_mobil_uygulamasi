import { Image, StyleSheet, View, Text, Alert, TextInput, SafeAreaView, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

export default function App() {
  
  const [selectedValue, setSelectedValue] = useState("");
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [hastane, setHastane] = useState("");
  const [aciklama, setAciklama] = useState("");

  const handleSubmit = () => {
    if (il.trim() === "") {
      Alert.alert("Hata", "Lütfen 'İl' kısmını doldurun.");
      return;
    }
    if (ilce.trim() === "") {
      Alert.alert("Hata", "Lütfen 'İlçe' kısmını doldurun.");
      return;
    }
    if (hastane.trim() === "") {
      Alert.alert("Hata", "Lütfen 'Hastane' kısmını doldurun.");
      return;
    }
    if (selectedValue === "") {
      Alert.alert("Hata", "Lütfen bir'Kan Grubu' seçin.");
      return;
    }
    Alert.alert('Tebrikler', 'Talep Gönderildi', [{ text: 'OK' }]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
      
        <View style={styles.resimContainer}>
          <Image source={require('@/assets/images/kan.png')} style={styles.resim} resizeMode='contain' />
        </View>

      <View style={styles.container}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Kan İhbar Talebi</Text>
      </View>

      <View style={styles.rowContainer}>
        <TextInput 
          style={styles.input}
          placeholder='İl'
          value={il}
          onChangeText={setIl}
          multiline={true} 
          numberOfLines={1}
        />
        
        <View style={{ width: width * 0.1 }}></View> 
        
        <TextInput
          style={styles.input}
          placeholder='İlçe'
          value={ilce}
          onChangeText={setIlce}
        />
      </View>

      <View style={styles.Hastane}>
        <TextInput 
          style={[styles.input, { width: width * 0.84, paddingLeft: width * 0.02, height: height * 0.08 }]}
          placeholder='Hastane'
          value={hastane}
          onChangeText={setHastane}
          multiline={true} 
          numberOfLines={4}
        />
      </View>
      
      <View style={styles.KanGrubu}>
        <View style={[styles.pickerContainer, { width: width * 0.84, paddingLeft: width * 0.05 }]}>

          <View style={styles.artiresimContainer}>
            <Image source={require('@/assets/images/artikan.png')} style={styles.artiresim} resizeMode='contain'/>
          </View>

          <Picker
            selectedValue={selectedValue}
            style={[styles.picker ]}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Kan Grubu" value="" />
            <Picker.Item label="AB Rh+" value="AB Rh+" />
            <Picker.Item label="AB Rh-" value="AB Rh-" />
            <Picker.Item label="A Rh+" value="A Rh+" />
            <Picker.Item label="A Rh-" value="A Rh-" />
            <Picker.Item label="B Rh+" value="B Rh+" />
            <Picker.Item label="B Rh-" value="B Rh-" />
            <Picker.Item label="0 Rh+" value="0 Rh+" />
            <Picker.Item label="0 Rh-" value="0 Rh-" />
          </Picker>
        </View>
      </View>

      <View style={styles.AciklamaContainer}>
        <TextInput 
          style={styles.AciklamaInput}
          placeholder='Açıklama'
          value={aciklama}
          onChangeText={setAciklama}
          multiline={true} 
          numberOfLines={1}
        />
      </View>
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Talebi İlet</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: height * 0.03, 
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '1%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '7%',
    alignItems: 'center'
  },
  input: {
    borderWidth: 0,
    backgroundColor: '#fff',
    width: width * 0.37,
    height: height * 0.08,
    borderRadius: 13,
    borderColor: '#ccc',
    paddingLeft: width * 0.02,
  },
  Hastane: {
    alignItems: 'center',
    paddingTop: '7%',
  },
  KanGrubu: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '6%',
    width: width * 1,
    flexDirection: 'row'
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 13,
    overflow: 'hidden',
    flexDirection: 'row'
  },
  picker: {
    height: height * 0.08,
    width: '100%',
  },
  AciklamaContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  AciklamaInput: {
    borderWidth: 0,
    backgroundColor: '#fff',
    width: width * 0.84,
    height: height * 0.20,
    borderRadius: 13,
    paddingLeft: width * 0.02,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#a80800',
    padding: '3%',
    borderRadius: 10,
    marginTop: height * 0.02
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  resimContainer: {
    marginTop: height * 0.02,
    alignItems: 'center'
  },
  resim: {
    width: width * 0.17,
    height: height * 0.17
  },
  artiresimContainer: {
    marginTop: height * 0.02,
    alignItems: 'center',
    marginLeft: 0,
    paddingLeft: 0,
    paddingTop: 0,
  },
  artiresim: {
    width: width * 0.08,
    height: height * 0.05,
    marginLeft: 0,
    paddingLeft:0,
    marginTop: 0,
  }
  
});
