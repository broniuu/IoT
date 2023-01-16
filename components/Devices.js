import {Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
function Section({selectedItem}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text>+</Text>
    </View>
  );
}

export default function Devices({route, navigation}: Props) {
  const [items, setItems] = route.items;
}
