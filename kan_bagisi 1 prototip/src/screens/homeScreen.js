import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Text, Dimensions, Keyboard} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RadioButton = ({ checked, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.radioButton}>
      {checked && <View style={styles.radioButtonInner} />}
    </View>
  </TouchableOpacity>
);


export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("location1");
  const [searchTerm, setSearchTerm] = useState('');

  const locationOptions = [
    { key: "location1", title: "Mevcut Konum", locationText: "Yeni Mahalle, 1165 sokak, no: 105/D Balıkesir/Bandırma" },
    { key: "location2", title: "Ev" , locationText: "Yeni Mahalle, 1165 sokak, no: 105/D Balıkesir/Bandırma" },
    { key: "location3", title: "İş" , locationText: "Yeni Mahalle, 1165 sokak, no: 105/D Balıkesir/Bandırma" }
  ];

  const data = [
    {
      id: 1,
      bloodType: 'B',
      rh: '-',
      hospitalLocation: 'Giresun  Bulancak',
      description: 'Bulancak Devlet Hastanesinde B RH- kan aranmaktadır.'
    },
    {
      id: 2,
      bloodType: 'B',
      rh: '-',
      hospitalLocation: 'Yalova Merkez',
      description: 'Yalova Devlet Hastanesinde B RH- kan aranmaktadır.'
    },
    {
      id: 3,
      bloodType: '0',
      rh: '+',
      hospitalLocation: 'Ankara Mamak',
      description: 'Mamak Devlet Hastanesinde 0 RH+ kan aranmaktadır.'
    },
    {
      id: 4,
      bloodType: 'A',
      rh: '+',
      hospitalLocation: 'Ankara Mamak',
      description: 'Mamak Devlet Hastanesinde A RH+ kan aranmaktadır.'
    },
    {
      id: 5,
      bloodType: 'A',
      rh: '+',
      hospitalLocation: 'Ankara Mamak',
      description: 'Mamak Devlet Hastanesinde A RH+ kan aranmaktadır.'
    },
    {
      id: 6,
      bloodType: 'A',
      rh: '+',
      hospitalLocation: 'Ankara Mamak',
      description: 'Mamak Devlet Hastanesinde A RH+ kan aranmaktadır.'
    }
  ];


  return (
    <SafeAreaView>
      <ScrollView 
        style={styles.body}
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.componentOne}>
          <TouchableOpacity style={styles.konum} onPress={() => setModalVisible(true)}>
            <Text numberOfLines={1} ellipsizeMode='tail'>
              <Text style={{fontSize: 20,fontWeight:"bold",color:"#880808"}}>{locationOptions.filter((val) => val.key == selectedLocation)[0].title}</Text>
              <Text style={{fontSize: 18}}> ({locationOptions.filter((val) => val.key == selectedLocation)[0].locationText})</Text>
            </Text>
          </TouchableOpacity>
          <Image 
            source={require('../../assets/images/src/location.png')}
            style={styles.locationLogo}
          />
          <TouchableOpacity style={styles.notificationBox}
          onPress={() => navigation.navigate('notificationScreen')}>
            <Image 
              style={styles.notificationImage}
              source={require('../../assets/images/src/notification.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.componentTwo}>
          <View style={styles.componentTwo}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inputContainer}>
                <TextInput 
                  placeholder='Ara' 
                  style={styles.input} 
                  onChangeText={(text) => setSearchTerm(text)}
                />
                <Image 
                  source={require('../../assets/images/src/search.png')}
                  style={styles.searchLogo}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        
        
        <View>
        {data.filter(item => 
          (item.hospitalLocation && item.hospitalLocation.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
          ).map((item) => (
            <View key={item.id} style={styles.bloodRequestContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('talepInfoScreen', {bloodType: item.bloodType, rh: item.rh, hospitalLocation: item.hospitalLocation, description: item.description})}>
                <View style={styles.bloodRequestContent}>
                  <View style={[styles.bloodTypeBox, { backgroundColor: '#B41010' }]}>
                    <Text style={styles.bloodTypeText}>{item.bloodType}</Text>
                    <Text style={styles.bloodTypeRh}>{item.rh}</Text>
                  </View>
                  <View>
                    <Text style={styles.hospitallocationText}>{item.hospitalLocation}</Text>
                    <Text style={styles.descriptionText} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                {/* KONUMLAR */}
                <View style={styles.locations}>
                  <View style={styles.availableLocation}>
                    <View>
                      <Image
                        style={{ width: "100%", borderRadius: 10 }}
                        source={require('../../assets/images/src/map.png')}
                      ></Image>
                    </View>
                    <View style={styles.availableLocationText}>
                      {locationOptions.map(option => (
                        <TouchableOpacity key={option.key} onPress={() => setSelectedLocation(option.key)}>
                          <View style={styles.locationItem}>
                            <RadioButton checked={selectedLocation === option.key} onPress={() => setSelectedLocation(option.key)} />
                            <View>
                              <Text style={styles.locationText}>{option.title}</Text>
                              <Text style={styles.locationTextInfo} numberOfLines={1} ellipsizeMode='tail'>{option.locationText}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                </View>

                {/* KONUM EKLEME */}
                <View>
                  <TouchableOpacity>
                    <View style={styles.newAdressAdd}>
                      <Image
                        source={require('../../assets/images/src/add.png')}
                        style={styles.newAdressAddLogo}>
                      </Image>
                      <Text style={{ fontSize: 18 }}>Yeni adres ekle</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const konumWidth = windowWidth - 125;
const inputWidth = windowWidth - 50;
const textWidth = windowWidth - 170;
const konumtextWidth = windowWidth - 100;

const styles = StyleSheet.create({
  body: {
    marginTop: 10,
    marginHorizontal: 25,
    minHeight: "100%"
  },
  componentOne: {
    flexDirection: "row",
    height: 55,
  },
  konum: {
    height: 55,
    width: konumWidth,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    alignItems:"center",
    paddingLeft: 50,
    flexDirection: "row"
  },
  locationLogo: {
    position: "absolute",
    top: 10,
    left: 5,
    width: 35,
    height: 35,
  },
  notificationBox: {
    width: 55,
    height: 55,
    backgroundColor: "#D9D9D9",
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  notificationImage: {
    height: 35,
    width: 35,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#E9E9E9",
    marginVertical: 15,
  },
  componentTwo: {
    flexDirection: "row",
    height: 50,
    position: "relative",
    marginBottom: 25,
  },
  input: {
    width: inputWidth,
    height: 50,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingLeft: 50,
  },
  searchLogo: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 10,
    left: 10,
  },
  bloodRequestContainer: {
    backgroundColor: "#D8D8D8",
    height: "auto",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  bloodRequestContent: {
    flexDirection: "row",
  },
  bloodTypeBox:{
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  bloodTypeText:{
    position: "relative",
    fontSize: 30,
    color: "white"
  },
  bloodTypeRh:{
    position: "absolute",
    fontSize: 20,
    right: 10,
    top: 7,
    color: "white"
  },
  hospitallocationText:{
    fontWeight: "bold",
    fontSize: 25,
    width: textWidth+5,
  },
  descriptionText: {
    width: textWidth,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0,0,0,0.5)', // bar açılınca ekranı opaklaştırır
  },
  modalView: {
    width: '100%',
    height: "auto",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    paddingTop: 20,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
  },
  locations: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    padding: 7,
  },
  availableLocation:{
    backgroundColor: "#F4EDEE",
    width: "100%",
    height: "auto",
    borderRadius: 10,
    padding: 7,
  },
  availableLocationText:{
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginTop: 10,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  locationText: {
    fontSize: 16,
  },
  locationTextInfo:{
    maxWidth: konumtextWidth,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#B41010',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#B41010',
  },
  addedLocation: {
    width: "100%",
    height: 50,
    backgroundColor: "#F4EDEE",
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 15
  },
  newAdressAdd: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  newAdressAddLogo: {
    width: 40,
    height: 40,
  },
});
