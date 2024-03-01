import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../styles/GlobalApi';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-animatable';

export default function Slider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = async () => {
    const result = (await GlobalApi.getSlider()).data;

    const resp = result.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      image: item.attributes.image.data.attributes.url,
    }));
    setSlider(resp);
  };

  return (
    <View style={{marginTop:20}}>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width:Dimensions.get('screen').width*0.9, height: 200,borderRadius:10,marginRight:10 }}
            />
          </View>
        )}
      />
    </View>
  );
}
