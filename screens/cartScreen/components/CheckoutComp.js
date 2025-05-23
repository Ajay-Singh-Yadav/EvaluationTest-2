import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddressDisplayComp from './AddressDisplayComp';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

const CheckoutComp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>CHECKOUT</Text>
        <Image
          source={require('../../../assets/images/designNewArrival.png')}
          style={styles.headerImage}
        />
        <Text style={styles.text}>SHIPPING ADDRESS</Text>
        <View>
          <AddressDisplayComp />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Address')}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
              <Text style={styles.text2}>Add shipping address</Text>
              <Ionicons name="add" size={30} color="black" />
            </View>
          </View>
        </TouchableOpacity>

        <Text style={[styles.text, {marginTop: 40}]}>SHIPPING METHOD</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <Text style={styles.text2}>Pickup at store</Text>
            <Text style={styles.freeText}>FREE</Text>
            <MaterialIcons name="expand-more" size={30} color="black" />
          </View>
        </View>

        <Text style={[styles.text, {marginTop: 40}]}>PAYMENT METHOD</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <Text style={styles.text2}>Select payment method</Text>
            <MaterialIcons name="expand-more" size={30} color="black" />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>$240</Text>
        </View>

        <TouchableOpacity style={styles.addView}>
          <Image
            source={require('../../../assets/images/BagWhite.png')}
            style={styles.bagIcon}
          />
          <Text style={styles.addViewText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 150,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    letterSpacing: 2,
    marginTop: 30,
    fontFamily: 'TenorSans-Regular',
    textAlign: 'center',
  },
  headerImage: {
    width: 200,
    height: 15,
    marginTop: 7,
    marginBottom: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'TenorSans-Regular',
    opacity: 0.6,
    marginBottom: 10,
  },
  buttonContainer: {
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  text2: {
    fontSize: 15,
    fontFamily: 'TenorSans-Regular',
    opacity: 0.6,
  },
  freeText: {
    fontFamily: 'TenorSans-Regular',
    opacity: 0.6,
    marginLeft: 200,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 0,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
    fontFamily: 'TenorSans-Regular',
    opacity: 0.7,
  },
  totalAmount: {
    fontSize: 18,
    color: '#DD8560',
    fontFamily: 'TenorSans-Regular',
  },
  addView: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  addViewText: {
    color: 'white',
    fontFamily: 'TenorSans-Regular',
    fontSize: 17,
    marginLeft: 15,
  },
  bagIcon: {
    height: 25,
    width: 25,
  },
});
