import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GridFlatList from 'grid-flatlist-react-native';

const halfWindowsWidth = Dimensions.get('window').width / 2;
export default function Devices({route, navigation}) {
  const [devices, setDevices] = useState(route.params.devices);
  console.log('DEVICES ', route);
  function AddDevice() {
    return (
      <TouchableOpacity
        style={styles.addDevice}
        onPress={() => navigation.navigate('NewDevice')}>
        <Text style={styles.devicePlus}>+</Text>
      </TouchableOpacity>
    );
  }

  function SingleDevice(item) {
    return (
      <TouchableOpacity style={styles.device}>
        <Text style={styles.deviceName}>{item.item.name}</Text>
        <Text style={styles.roomName}>{item.item.roomName}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <GridFlatList
        contentContainerStyle={{display: 'flex'}}
        data={devices}
        renderItem={item => <SingleDevice item={item} />}
        keyExtractor={item => item.id}
        paddingHorizontal={10}
        numColumns={2}
        gap={10}
        ListFooterComponent={() => <AddDevice />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  device: {
    backgroundColor: 'pink',
    height: 150,
    borderWidth: 5,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  roomName: {
    fontStyle: 'normal',
  },
  devicePlus: {
    fontSize: 80,
  },
  addDevice: {
    paddingHorizontal: 10,
    width: halfWindowsWidth,
    backgroundColor: 'pink',
    height: 120,
    borderWidth: 5,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
