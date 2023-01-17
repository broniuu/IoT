import { Text, StyleSheet, View, TextInput, Button, Dimensions } from "react-native";
import {useState} from 'react';

const windowWidth = Dimensions.get('window').width;
export default function NewDevice({route, navigation}) {
  const [name, onChangeName] = useState('');
  const [place, onChangePlace] = useState('');
  const [command, onChangeCommand] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePlace}
        value={place}
        placeholder="Place"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeCommand}
        value={command}
        placeholder="Command"
      />
      <View style={styles.buttonContainer}>
        <Button
          title={'Cancel'}
          onPress={() => navigation.navigate('Devices')}
        />
        <Button title={'Save'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    flex: 0.5,
    height: 50,
  },
});
