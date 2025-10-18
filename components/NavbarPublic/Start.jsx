import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
// styles
import styles from '@/styles/componentStyles';

const Start = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.headerButton}
      onPress={() => router.replace('/(tabsBeautician)/Dashboard')}
    >
      
      <FontAwesome name='user-circle' color='white' size={12}/>
      <Text style={styles.headerButtonText}>Get Started</Text>
    </TouchableOpacity>
  )
}

export default Start