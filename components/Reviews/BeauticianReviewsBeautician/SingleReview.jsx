import { View, Text } from 'react-native'
import React from 'react'

// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/componentStyles';

// utils
import getInitials from '@/utils/getInitials';
import getStandardTime from '@/utils/getStandardTime';
// components
import Rating from '@/components/Rating';

const SingleReview = ({ review }) => {
  
  const { userFullName, rating, reviewText, updatedAt } = review
  
  const initials = getInitials(userFullName);

  // access slit date
  const date = new Date(updatedAt);
  const Day = date.getDate();
  const Month = date.getMonth();
  const Year = date.getFullYear();

  // access time from date 
  let result = updatedAt.match(/\d\d:\d\d/);  
  const time = getStandardTime(result[0]);

  
  return (
    <View style={styles.largeListCardContainer}>
      <View style={styles.largeListCardRow}>
        <View style={[styles.squareInitials, styles.mediaSecondaryBeautician, { marginHorizontal: 12 }]}>
          <Text style={[styles.notInitialsText, styles.textSecondaryBeautician]}>{initials}</Text>
        </View>
        <View style={styles.listCardContent}>
          <Text style={[styles.listCardTitle, styles.textInfo]}>{userFullName}</Text>
          <Rating rating={rating} />
          <Text style={styles.listCardDate}>Review submitted on {Day}{" "}{monthdata[Month]}{" "},{" "} {Year} {" "} at {time }</Text>
        </View>
      </View>
      <View style={styles.largeListCardRow}>
        <Text style={[styles.textGray, styles.largeListCardDescription]}>{reviewText }</Text>
      </View>
    </View>
  )
}

export default SingleReview