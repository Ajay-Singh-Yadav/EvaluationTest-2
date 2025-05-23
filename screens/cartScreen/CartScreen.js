import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TopBarComp from './components/TopBarComp';
import CheckoutComp from './components/CheckoutComp';

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TopBarComp />
      <View style={{flex: 1}}>
        <CheckoutComp />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
