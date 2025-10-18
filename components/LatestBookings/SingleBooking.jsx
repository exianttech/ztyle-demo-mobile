import { View, Text } from 'react-native'
import React from 'react'

// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/componentStyles';

// utils 
import getStandardTime from '@/utils/getStandardTime';
import getInitials from '@/utils/getInitials';


const SingleBooking = ({ book }) => {
  
   // access slit date
  const date = new Date(book.bookDate);
  const Day = date.getDate();
  const Month = date.getMonth();
  const Year = date.getFullYear();

  // manage time
  const stdStart = getStandardTime(book.slot.start);
  const stdEnd = getStandardTime(book.slot.end);
  
  // initials
  const initials = getInitials(book.userFullName);
  

  return (
    <View style={styles.smallListCardContainer}>
      <View style={[styles.squareInitials, styles.mediaSecondaryBeautician, { marginHorizontal: 12 }]}>
        <Text style={[styles.notInitialsText, styles.textSecondaryBeautician]}>{initials}</Text>
      </View>
      <View style={styles.listCardContent}>
        <Text style={styles.listCardTitle}>Service : {book.service}</Text>
        <Text style={styles.listCardDate}>{Day}{" "}{monthdata[Month]}{" "},{" "} {Year} {" "}  </Text>
        <Text style={styles.textInfo}>From: {stdStart} To : {stdEnd}</Text>
      </View>
      
    </View>
  )
}

export default SingleBooking