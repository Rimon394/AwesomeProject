import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GifList from '../components/GifList';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon.Button
          name='menu'
          size={25}
          backgroundColor='#638467'
          onPress={() => { navigation.openDrawer(); }}
          style={styles.menuButton}
        />
      </View>
      
      <View style={styles.content}>
        <View style={styles.centered}>
          <GifList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3D7B9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#638467',
  },
  menuButton: {
    width: 35,
    height: 35,
    marginTop: 5,
  },
  content: {
    flex: 1,
    backgroundColor: '#C3D7B9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
