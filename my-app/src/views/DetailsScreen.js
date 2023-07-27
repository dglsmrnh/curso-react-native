import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import * as RootNavigation from '../constants/RootNavigation';

export default function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => RootNavigation.navigate('Home')}
        />
        <StatusBar style="auto" />
      </View>
    );
  }