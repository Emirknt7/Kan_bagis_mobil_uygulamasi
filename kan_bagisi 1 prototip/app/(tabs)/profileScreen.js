import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SupportScreen from '@/src/screens/SupportScreen';
import SettingScreen from '@/src/screens/SettingScreen';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
      initialRouteName='ProfileScreen'
        screenOptions={{
          headerShown: false,
          navigationBarHidden: false,
        }}>
        <Stack.Screen name="SupportScreen" component={SupportScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({
    firstName: 'Emre',
    lastName: 'Konak',
    email: 'emze.konak@gmail.com',
  });

  const { firstName, lastName, email } = user;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/src/ProfilResimi.png')}
            style={styles.profileImage}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.email}>{email}</Text>
          </View>

          <View style={styles.box}>
            <View style={[styles.box1, styles.spacing]}></View>
            <View style={[styles.box2, styles.spacing]}></View>
            <View style={[styles.box3, styles.spacing]}></View>
          </View>
        </View>

        <Image
          source={require('../../assets/images/src/Konum.png')}
          style={styles.Konum}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SupportScreen')}
          >
            <Text style={styles.buttonText}>Destek</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SettingScreen')}
          >
            <Text style={styles.buttonText}>Ayarlar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EDEDED',
    marginTop: 30,
    height: 340,
    width: 380,
    marginLeft: 15,
    borderRadius: 10,
  },
  Konum: {
    width: 380,
    height: 150,
    marginLeft: 15,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 15,
  },
  button: {
    backgroundColor: '#EDEDED',
    width: 380,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  box1: {
    backgroundColor: '#D9D9D9',
    height: 70,
    width: 80,
    borderRadius: 10,
    marginTop: 15,
  },
  box2: {
    backgroundColor: '#D9D9D9',
    height: 70,
    width: 80,
    borderRadius: 10,
    marginTop: 15,
  },
  box3: {
    backgroundColor: '#D9D9D9',
    height: 70,
    width: 80,
    borderRadius: 10,
    marginTop: 15,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    marginHorizontal: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  userInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
});
