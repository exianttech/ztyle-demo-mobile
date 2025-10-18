import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome,FontAwesome6 } from '@expo/vector-icons';

// styles
import styles from '@/styles/componentStyles'

const Header = ({toggleNot}) => {

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity>
          <View style={[styles.headerIconsole]}>
            <FontAwesome6 name='comment-dots' size={24} />
            {/* <Text style={styles.headerIconText}> Service</Text> */}      
      
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.headerIconsole]}>
            <FontAwesome name='heart-o' size={24} />
            {/* <Text style={styles.headerIconText}> Service</Text> */}      
      
          </View>
        </TouchableOpacity>
        <>
          {/* Avatar */}
          <TouchableOpacity onPress={toggleNot}>
            <View style={[styles.headerIconsole]}>
              <FontAwesome name='bell-o' size={24} />
              <View style={styles.notificationDot} />
            </View>
          </TouchableOpacity>
        </>
       
        
      </View>
      
    </View>
  )
}

export default Header