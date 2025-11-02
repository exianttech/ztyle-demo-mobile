import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

import styles from '@/styles/styles'

const Error = ({ children, ...props }) => {
  return (
      <View
          style={styles.errorContainer}
          {...props}
      >    
          <Text style={styles.errorText} >{children}</Text>
      </View>
    )
    
}

export default Error