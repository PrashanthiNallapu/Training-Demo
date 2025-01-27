import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingData = [
  {
    id: '1',
    title: 'Choose Products',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: 'https://via.placeholder.com/300x300'
  },
  {
    id: '2',
    title: 'Make Payment',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: 'https://via.placeholder.com/300x300'
  },
  {
    id: '3',
    title: 'Get Your Order',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: 'https://via.placeholder.com/300x300'
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slideContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < OnboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={OnboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width);
          setCurrentIndex(newIndex);
        }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.paginationContainer}>
        {OnboardingData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {currentIndex < OnboardingData.length - 1 ? (
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.replace('SignUp')} style={styles.getStartedButton}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slideContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#ff6666',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#ff6666',
    padding: 15,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;