import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import * as RootNavigation from '../constants/RootNavigation';
import TextInANest from '../components/TextInANest';
import { useDispatch } from 'react-redux';
import { logout } from '../app/reducers/loginSlice'

export default function HomeScreen() {
    const dispatch = useDispatch();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TextInANest></TextInANest>
        <Button
          title="Go to Details"
          onPress={() => RootNavigation.navigate('Details')}
        />
        <Button
          title="Logout"
          onPress={() => dispatch(logout())}
        />
        <StatusBar style="auto" />
      </View>
    );
  }