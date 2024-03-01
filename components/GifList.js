import React, { useEffect, useState } from 'react';
import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-animatable';
import GlobalApi from '../styles/GlobalApi';
import { useNavigation } from '@react-navigation/native';

export default function GifList({ }) {
  const [gifs, setGifs] = useState([]);
  const navigation=useNavigation();

  useEffect(() => {
    fetchGifs();
  }, []);

  const fetchGifs = async () => {
    try {
      const response = await GlobalApi.getGif(); // Assuming getGif returns the provided data
      if (response && response.data && Array.isArray(response.data.data)) {
        console.log("HK data:", response.data.data[0].attributes)
        const gifsData = response.data.data.map((item) => ({
          id: item.id,
          image: item.attributes.image.data[0].attributes.url,
          name: item.attributes.Gif[0].name,
          gifLink: item.attributes.Gif[0].gifLink
  
        }));
        setGifs(gifsData);

      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  const onPressGif = (gif) => {
    // Navigate to the GIF details screen and pass the selected GIF data
    navigation.navigate('gif-details', { gifData:gif });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={gifs}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressGif(item)} style={styles.gifContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.gifImage}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  gifContainer: {
    marginBottom: 5,
    alignItems: 'center',
  },
  gifImage: {
    width: Dimensions.get('screen').width * 0.9,
    height: 200,
    borderRadius: 10,
  },
});

