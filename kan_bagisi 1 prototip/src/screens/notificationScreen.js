import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  { id: 1, type: 'AB+', date: '15/05/2024', message: 'Eşlesen bir kan var.' },
  { id: 2, type: 'AB+', date: '22/04/2024', message: 'Eşlesen bir kan var.' },
  { id: 3, type: 'A+', date: '20/04/2024', message: 'Eşlesen bir kan var.' },
  { id: 4, type: 'AB+', date: '15/05/2024', message: 'Eşlesen bir kan var.' },
  { id: 5, type: 'AB+', date: '22/04/2024', message: 'Eşlesen bir kan var.' },
  { id: 6, type: 'A+', date: '20/04/2024', message: 'Eşlesen bir kan var.' },
];

const NotificationCard = ({ type, date, message }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>{type}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text>{message}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  </View>
);

export default function NotificationScreen({navigation}) {
  return (
    <SafeAreaView >
      <ScrollView style={styles.container}>
      <View style={styles.navigation}>
          <Text style={styles.headerText}>Bildirimler</Text>
       
      </View>

      <View style={styles.separator} />

        {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          type={notification.type}
          date={notification.date}
          message={notification.message}
        />
      ))}
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  container: {
    height: "100%",
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  card: {
    marginVertical: 5,
    backgroundColor: '#EDEDED',
    borderRadius:22,
  },
 

  headerText: {
    marginTop:50,
    marginBottom:10,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign:'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#c62828',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  iconText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#E9E9E9",
    marginVertical: 15,
  },
});
