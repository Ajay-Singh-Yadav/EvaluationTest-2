import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import { View, Text, StyleSheet } from 'react-native';

const AddressDisplayComp = () => {
    const address = useSelector((state: RootState) => state.address);

    const isAddressFilled =
    address.firstName || address.lastName || address.address || address.city || address.state || address.zipCode || address.phoneNumber;

  if (!isAddressFilled) {
    return null;
  }

  return(
    <View style = {{ marginTop: 15, marginRight: 100}}>
        
      <Text style={styles.text}>{address.firstName} {address.lastName}</Text>
      <Text style={styles.text2}>{address.address}</Text>
      <Text style={styles.text2}>{address.city}, {address.state} {address.zipCode}</Text>
      <Text style={styles.text2}>Phone: {address.phoneNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 600,
        fontFamily: 'TenorSans-Regular',
        marginBlock:4
      },
      text2: {
        fontSize: 15,
        fontFamily: 'TenorSans-Regular',
      },
  });
  
  export default AddressDisplayComp;

