import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/HomeScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search1" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Favorite" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="hearto" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Trips" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="car" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Inbox" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="message1" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Others" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="appstore-o" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;