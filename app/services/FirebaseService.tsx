import { Button, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import firebase from '@react-native-firebase/app';
import { firebaseConfig } from '@/firebaseConfig';


export default function FirebaseService() {

  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // }
  
  const getFcmToken = async () => {
    try {
      await messaging().requestPermission();
  
      const token = await messaging().getToken();
  
      console.log('FCM Token:', token);
      Alert.alert('FCM Token', `Your FCM token is: ${token}`);
    } catch (error) {
      console.error('Fetching FCM registration token failed', error);
      Alert.alert('Error', 'Failed to retrieve FCM token');
    }
  };
  return (
    <View>
      <Button title='get fmc token' color={'red'} onPress={getFcmToken}></Button>
    </View>
  );
}
