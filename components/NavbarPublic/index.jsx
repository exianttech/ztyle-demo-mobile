import { View } from 'react-native';
import React from 'react';

// styles
import styles from '@/styles/componentStyles';

// components
import NavHader from './NavHader';
import Header from './Header';
import Start from './Start';

const index = () => {
  return (
    <View style={styles.navBarContainer}>
      <NavHader />
      <Header />
      <Start />
    </View>
  )
}

export default index