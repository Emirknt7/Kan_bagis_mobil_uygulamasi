import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle:{
          backgroundColor:'white',
          borderTopWidth:2,
          margin:5,
          height:75,
          borderRadius:100,
          padding:0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop:-10,
         
        },

        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="talepListScreen"
        options={{
          title: 'Taleplerim',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
          name="index"
          options={{
            title: 'anasayfa',
            tabBarIcon:({color})=>(
              <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,borderRadius:10,width:75,height:58,marginLeft:15,}}>
                 <Entypo name="drop" size={36} color={'#880808'} />
              </View>
              
      
            )
          }}
        />
      <Tabs.Screen
        name="profileScreen"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="user" size={28} color="" />
           ),
        }}
      />
        
      
    </Tabs>
  );
}
