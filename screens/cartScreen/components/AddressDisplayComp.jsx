import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddressDisplayComp = () => {
  const addresses = useSelector(state => state.address.addresses);

  if (!addresses || addresses.length === 0) {
    return <Text style={styles.noAddress}>No address added yet</Text>;
  }

  const renderItem = ({item}) => (
    <View style={styles.addressContainer}>
      <View style={styles.addressTextContainer}>
        <Text style={styles.name}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.text}>{item.address}</Text>
        <Text style={styles.text}>
          {item.city}, {item.state} {item.zipCode}
        </Text>
        <Text style={styles.text}>Phone: {item.phoneNumber}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="gray" />
    </View>
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={addresses}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={{paddingBottom: 20, width: 450}}
    />
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addressTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'TenorSans-Regular',
    marginBottom: 4,
  },
  text: {
    fontSize: 15,
    fontFamily: 'TenorSans-Regular',
  },
});

export default AddressDisplayComp;
