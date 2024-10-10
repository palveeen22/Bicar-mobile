import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { GlobalStyle } from '../../styles';

const ProfileScreen = () => {
  return (
   <SafeAreaView style={GlobalStyle.Container}>
     <View>
      <Text>ProfileScreen</Text>
    </View>
   </SafeAreaView>
  );
};

export default ProfileScreen;
