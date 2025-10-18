import { View, Text ,Image} from 'react-native'
import React from 'react'

// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/componentStyles';

const SingleRec = ({ shop }) => {
  
  // access slit date
  const date = new Date(shop.lastVisited);
  const Day = date.getDate();
  const Month = date.getMonth();
  const Year = date.getFullYear();

  return (
    <View style={styles.smallListCardContainer}>
      <Image
        source={shop.shopImage}
        style={styles.squareAvatar}
        resizeMode='cover'
      />
      <View style={styles.listCardContent}>
        <Text style={[styles.listCardTitle, styles.textSecondary]}>{shop.shopName}</Text>
        <Text style={styles.listCardDate}>Last Visited : {Day}{" "}{monthdata[Month]}{" "},{" "} {Year}</Text>
        <Text>{shop.category}</Text>
      </View>
    </View>

  )
}

export default SingleRec