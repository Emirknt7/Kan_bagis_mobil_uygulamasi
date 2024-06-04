import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const TalepInfoScreen = ({route}) => {
  const { bloodType, rh, hospitalLocation, description } = route.params;
  // bi önceki sayfadan değerler geldi 
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Kan Talep Detayı</Text>
      <View style={styles.card}>
        <View style={styles.kand}>
          <Text style={styles.kantipi}>AB</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.hospital }>Balıkesir Bandırma</Text>
          <View style={{width:225,marginLeft:20,}}>
          <Text style={styles.description}
          >Bandırma Devlet Hastanesinde AB RH- kan aranmaktadır.
          </Text>
          </View>

          <View style={styles.acv}>
          <Text style={styles.explanation}>Açıklama</Text>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  backButton: {
    fontSize:36,
    marginTop:40,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  header: {

    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
    padding: 16,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  kand: {
    width:75,
    height:75,
    backgroundColor: '#880808',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop:10,
  },
 kantipi: {
 
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 16,
  },
  hospital: {
    marginTop:-10,
    marginLeft:20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E989F',
  },
  description: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginTop: 8,
    fontSize: 16,
  },
  explanation: {
    marginLeft:10,
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#999',
  },
  acv:{
    width:320,
    height:250,
    backgroundColor:'white',
    marginTop:20,
    marginLeft:-82,
    borderRadius:20,
  },
});

export default TalepInfoScreen;

