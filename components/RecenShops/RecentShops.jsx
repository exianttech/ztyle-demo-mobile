import React from 'react';
import { Text, View } from 'react-native';

// data
import { shopData } from '@/data/shopData';

// styles
import styles from '@/styles/styles';

// components
import SingleShop from './SingleShop';


const RecentShops = () => {
  return (
      <View
          style={{ paddingVertical: 16 }}
      >   
          {
              1 ? // replace with redux/ actual recent shop data
                  shopData.map((shop, idx) => (
                      <SingleShop key={idx} shop={shop} />
                  ))
                  :
                  <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Shops Recently</Text>
          }
    </View>
  )
}

export default RecentShops