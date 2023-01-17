import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Devices from '../components/Devices';
import NewDevice from '../components/NewDevice';

const DevicesStack = createNativeStackNavigator();

export default function DevicesStackScreen({route}) {
  return (
    <DevicesStack.Navigator>
      <DevicesStack.Screen
        name="Devices"
        component={Devices}
        initialParams={route.params.devices}
      />
      <DevicesStack.Screen name="NewDevice" component={NewDevice} />
    </DevicesStack.Navigator>
  );
}
