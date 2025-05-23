import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addAddress} from '../../../store/slice/addressSlice';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddressComp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
  });

  const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSave = () => {
    const newAddress = {
      id: Date.now(),
      ...formData,
    };

    dispatch(addAddress(newAddress));
    ToastAndroid.show('Address added successfully!', ToastAndroid.SHORT);

    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
    });

    navigation.goBack();
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>ADD SHIPPING ADDRESS</Text>
      <Image
        source={require('../../../assets/images/designNewArrival.png')}
        style={{width: 150, height: 15, marginTop: 7, marginBottom: 20}}
      />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TextInput
          placeholder="First name"
          value={formData.firstName}
          onChangeText={text => handleChange('firstName', text)}
          style={[styles.textInput, {marginEnd: 25, marginLeft: 20}]}
        />
        <TextInput
          placeholder="Last name"
          value={formData.lastName}
          onChangeText={text => handleChange('lastName', text)}
          style={[styles.textInput, {marginEnd: 40}]}
        />
      </View>
      <TextInput
        placeholder="Address"
        value={formData.address}
        onChangeText={text => handleChange('address', text)}
        style={[styles.textInput2, {marginEnd: 25, marginTop: 40}]}
      />
      <TextInput
        placeholder="City"
        value={formData.city}
        onChangeText={text => handleChange('city', text)}
        style={[styles.textInput2, {marginEnd: 25, marginTop: 40}]}
      />
      <View style={{flexDirection: 'row', marginTop: 40}}>
        <TextInput
          placeholder="State"
          value={formData.state}
          onChangeText={text => handleChange('state', text)}
          style={[styles.textInput, {marginEnd: 25, marginLeft: 20}]}
        />
        <TextInput
          placeholder="ZIP code"
          value={formData.zipCode}
          onChangeText={text => handleChange('zipCode', text)}
          style={[styles.textInput, {marginEnd: 40}]}
        />
      </View>
      <TextInput
        placeholder="Phone number"
        value={formData.phoneNumber}
        onChangeText={text => handleChange('phoneNumber', text)}
        style={[styles.textInput2, {marginEnd: 25, marginTop: 40}]}
      />
      <TouchableOpacity onPress={handleSave} style={styles.addView}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'TenorSans-Regular',
            fontSize: 17,
          }}>
          ADD NOW
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressComp;

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    letterSpacing: 2,
    marginTop: 30,
    fontFamily: 'TenorSans-Regular',
    marginLeft: 25,
  },
  textInput: {
    fontSize: 17,
    fontFamily: 'TenorSans-Regular',
    borderBottomWidth: 1,
    width: '42%',
    opacity: 0.7,
  },
  textInput2: {
    fontSize: 17,
    fontFamily: 'TenorSans-Regular',
    borderBottomWidth: 1,
    width: 440,
    opacity: 0.7,
  },
  addView: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    backgroundColor: 'black',
    marginTop: 428,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
