import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation, resetUser }) => {
  return (
    <View>
      <Text>WELCOME</Text>

      <TouchableOpacity onPress={() => {
        resetUser();
        navigation.navigate('Login');
      }}>
        <Text>Navigate to Login </Text>
      </TouchableOpacity>
      {/*
      <TouchableOpacity onPress={() => {
        navigation.navigate('Form');
      }}>
        <Text>Navigate to Form </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Entries');
      }}>
        <Text>Navigate to Entries </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Search');
      }}>
        <Text>Navigate to Search Bar </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Analysis');
      }}>
        <Text>Navigate to Analysis of Entries </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Home;