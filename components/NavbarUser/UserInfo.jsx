import { View, Text, TouchableOpacity,Pressable } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

//styles
import styles from '@/styles/componentStyles'

const UserInfo = () => {
  const router = useRouter();
  
  // toggle 
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => setshowMenu(prev => !prev);

  

  return (
    <>
      {/* <View style={{ position: 'absolute', right: 12, top: 14 }}> */}
      <View>
        {/* Avatar */}
        <TouchableOpacity onPress={toggleMenu}>
          <View style={[styles.initialsBg, styles.mediaSecondary,styles.shadow]}>
            <Text style={[styles.initialsBgText, styles.textSecondary]}>C K</Text>
          </View>
        </TouchableOpacity>
      </View>
      
        {/* Dropdown Menu */}
        {
          showMenu && (
            <Pressable
              style={styles.overlay}
              onPress={() => setshowMenu(false)}
            >

              <Pressable
                style={styles.dropdownMenu}
                onPress={(e) => e.stopPropagation()}           
              >
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => router.push('(screensUser)/UserProfile')}
              >
                  <FontAwesome name="user" size={16} color="#20c997" />
                  <Text style={styles.dropdownText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.dropdownItem}>
                  <FontAwesome name="inbox" size={16} color="black" />
                  <Text style={styles.dropdownText}>Inbox</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.dropdownItem}>
                  <FontAwesome name="sign-out" size={16} color='#FF6746' />
                  <Text style={styles.dropdownText}>Logout</Text>
                </TouchableOpacity>
              
              </Pressable>
            </Pressable>
          )
        }
      
    </>
  )
}


export default UserInfo