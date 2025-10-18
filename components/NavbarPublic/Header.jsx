import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// styles
import styles from '@/styles/componentStyles' 

const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity
          onPress={() => router.replace('/(public)/AboutUs')}
        >
          <View style={styles.headerIcon}>
            <FontAwesome name='users' size={24} />
            <Text style={styles.headerIconText}> About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace('/(public)/Services')}
        >
          <View style={styles.headerIcon}>
            <FontAwesome name='wrench' size={24} />
            <Text style={styles.headerIconText}> Service</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace('/(public)/ContactUs')}
        >
          <View style={styles.headerIcon}>
            <FontAwesome name='tty' size={24} />
            <Text style={styles.headerIconText}> Contact </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header