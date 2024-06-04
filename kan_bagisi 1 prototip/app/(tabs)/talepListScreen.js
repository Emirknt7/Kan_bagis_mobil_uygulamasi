
import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const boxWidth = screenWidth - 50;
const boxHeight = screenHeight * 0.22;

// NotificationCard bileşeni
const NotificationCard = ({ type, location, message }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>{type}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{message}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  </View>
);

const YourComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;
  

  

  const data = [
    { key: '0', image: require('../../assets/images/src/pic1.jpg') },
    { key: '1', image: require('../../assets/images/src/pic2.jpg') },
    { key: '2', image: require('../../assets/images/src/pic3.jpg') },
    { key: '3', image: require('../../assets/images/src/pic4.jpg') },
    { key: '4', image: require('../../assets/images/src/pic5.jpg') }
  ];

  const initialNotifications = [
    { id: '1', type: 'Kan Grubu', location: 'Bildirim Yeri', message: 'Bildirim Mesajı' },
    { id: '2', type: 'Kan Grubu', location: 'Bildirim Yeri', message: 'Bildirim Mesajı' }
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const viewSizeWidth = event.nativeEvent.layoutMeasurement.width;
    const pageNum = Math.round(contentOffsetX / viewSizeWidth);
    setCurrentPage(pageNum);
  };

  const handleImagePress = (imageIndex) => {
    console.log(`Image ${imageIndex} Pressed`);
  };

  const handleNotificationImagePress = () => {
    const newNotification = { id: Date.now().toString(), type: 'Kan Grubu', location: 'Bildirim Yeri', message: 'Bildirim Mesajı' };
    setNotifications([...notifications, newNotification]);
  };

 

  const renderItem = ({ item }) => (
    <View style={[styles.pageContainer, { width: boxWidth, height: 200 }]}>
      <Image source={item.image} style={styles.pageImage} />
      <View style={styles.pagination}>
        {data.map((_, dotIndex) => (
          <View
            key={dotIndex}
            style={[
              styles.dot,
              { backgroundColor: currentPage === dotIndex ? 'black' : 'gray' }
            ]}
          />
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.flatListContent}
          />
          <Text style={styles.headerText}>Taleplerim</Text>
          <View style={styles.footerLine} />
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              type={notification.type}
              location={notification.location}
              message={notification.message}
            />
          ))}
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={handleNotificationImagePress}>
            <Icon name="plus" size={36} color="#ededed" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative"
  },
  scrollViewContent: {
    height: "100%"
  },
  flatListContent: {
    marginTop: 30,
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: (screenWidth - boxWidth) / 2,
    marginTop: 20,
  },
  pageImage: {
    width: "100%",
    height: boxHeight,
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  headerText: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  footerLine: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    height: 0.5,
    backgroundColor: 'gray',
    marginBottom: 10,
  },
  card: {
    marginVertical: 5,
    width: '90%',
    height: screenHeight * 0.15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#B41010',
    borderRadius: 25,
    padding: 10,
    margin: 5,
    marginHorizontal: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    flexWrap: 'wrap',
  },
  location: {
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  imageContainer: {
    padding:8,
    borderRadius:10,
    backgroundColor: "red",
    width: 50,
    height: 50,
    alignItems: 'center',
    marginLeft:150,
    position:'absolute',
    bottom:0,
  },
  image: {
    width: 75,
    height: 75,
    marginLeft: 10,
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:10,
    position:'fixed',
    bottom: 0,
    backgroundColor: 'white',
   
  },
});

export default YourComponent;