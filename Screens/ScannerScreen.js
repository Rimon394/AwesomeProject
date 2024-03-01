import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CameraScreen from './CameraScreen';

const ScannerScreen = ({ navigation }) => {
    return (

      <View>
        <Text style={{ fontSize: wp(6.5), fontWeight: 'bold', color: '#374151',marginLeft:130 }}>Features</Text>
        <TouchableOpacity style={{ height: hp(60), paddingVertical: hp(2), paddingHorizontal: wp(4) }}onPress={() => navigation.navigate('Camera')}>
           
            <View style={styles.featureContainer}>
                <View style={styles.featureItem}>
                    <Image source={require('../assets/images/chatboat.png')} style={styles.icon} />
                    <Text style={styles.featureTitle}>ChatGPT</Text>
                </View>
                <Text style={styles.featureDescription}>hgjdjghdjghjdgjbjgsbgdsgjdgjdsjkgsdgjdhgjhbdjghsdhgdhgdhghgdgdgkdskgdgldkldvdv</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    featureContainer: {
        backgroundColor: '#6EE7B7',
        padding: wp(4),
        borderRadius: wp(5),
        marginTop: hp(2),
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(1),
    },
    icon: {
        height: hp(4),
        width: hp(4),
        marginRight: wp(1),
    },
    featureTitle: {
        fontSize: wp(4.8),
        fontWeight: 'bold',
        color: '#374151',
    },
    featureDescription: {
        fontSize: wp(3.8),
        fontWeight: 'normal',
        color: '#374151',
    },
});

export default ScannerScreen;
