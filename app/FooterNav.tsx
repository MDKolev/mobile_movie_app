import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const FooterNav: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/MoviesList')}>
        <Ionicons name='film' style={styles.icon} ></Ionicons>
        <Text style={styles.navText}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/Profile')}>
        <Ionicons name='person' style={styles.icon} ></Ionicons>
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  navText: {
    color: '#fff',
    fontSize: 22,
  },
  icon: {
    fontSize: 30,
    color: 'yellow',
    marginRight: 10
  }
});

export default FooterNav;
