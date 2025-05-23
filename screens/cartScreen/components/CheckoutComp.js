import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddressDisplayComp from './AddressDisplayComp';

const CheckoutComp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHECKOUT</Text>
      <Image
        source={require('../../../assets/images/designNewArrival.png')}
        style={{width: 130, height: 15, marginTop: 7, marginBottom: 20}}
      />
      <Text style={styles.text}>SHIPPING ADRESS</Text>

      <AddressDisplayComp />

      <TouchableOpacity onPress={() => navigation.navigate('Address')}>
        <View style={styles.buttonContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text style={styles.text2}>Add shipping adress</Text>
            <Ionicons name="add" size={30} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <Text style={[styles.text, {marginTop: 50}]}>SHIPPING METHOD</Text>
      <View style={styles.buttonContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={styles.text2}>Pickup at store</Text>
          <Text
            style={{
              fontFamily: 'TenorSans-Regular',
              opacity: 0.6,
              marginLeft: 80,
            }}>
            FREE
          </Text>
          <MaterialIcons name="expand-more" size={30} color="black" />
        </View>
      </View>

      <Text style={[styles.text, {marginTop: 50}]}>PAYMENT METHOD</Text>
      <View style={styles.buttonContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={styles.text2}>selct payment method</Text>
          <MaterialIcons name="expand-more" size={30} color="black" />
        </View>
      </View>

      <TouchableOpacity style={styles.addView}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'TenorSans-Regular',
            fontSize: 17,
            marginStart: 40,
          }}>
          PLACE ORDER
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutComp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    letterSpacing: 2,
    marginTop: 30,
    fontFamily: 'TenorSans-Regular',
  },
  text: {
    fontSize: 15,
    fontFamily: 'TenorSans-Regular',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginEnd: 200,
    opacity: 0.6,
  },
  buttonContainer: {
    width: 330,
    height: 55,
    borderRadius: 40,
    backgroundColor: '#F6ACAC1A',
    marginTop: 20,
  },
  text2: {
    fontSize: 15,
    fontFamily: 'TenorSans-Regular',
    opacity: 0.6,
  },
  addView: {
    height: 50,
    width: '100%',
    backgroundColor: 'black',
    marginTop: 230,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
