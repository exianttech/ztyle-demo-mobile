import { View, Text } from 'react-native';
import React from 'react';

// data
import { shopData } from '@/data/shopData';

// styles 
import styles from '@/styles/componentStyles';

// components
import SingleRec from './SingleRec';

const Recommendations = () => {
  return (
    <View
      style={{ paddingVertical: 16 }}
    >
      {
        1 ? // replace with recommendation
          shopData.map((shop, idx) => (
          <SingleRec key={idx} shop={shop} />
        ))
          :
          <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Recommendations For Now</Text>
        
      }
    </View>
  )
}

export default Recommendations