// SplashScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={{uri:'https://via.placeholder.com/300x300'}} style={styles.logo} />
      <Text style={styles.title}>Stylish</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
});

export default SplashScreen;