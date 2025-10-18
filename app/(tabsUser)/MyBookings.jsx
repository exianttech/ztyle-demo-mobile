import { View, Text, ScrollView } from 'react-native';
import React from 'react';

// data
import { userBookingsData } from '@/data/userBookingsData';

// styles
import styles from '@/styles/generalStyles';

// components
import PageTitleUser from '@/components/PageTitleUser';
import SingleBookingList from '@/components/SingleBookingList';
import FooterUser from '@/components/FooterUser';

const MyBookings = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <PageTitleUser activeMenu="Bookings" motherMenu="Service"/>
      <View style={{ paddingVertical: 16, flex: 1 }}>
        {
          1 ? // replace with redux/backend
            userBookingsData.map((booking, idx) => (
              <SingleBookingList key={idx} booking={booking} />
            ))
            :
            <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>You don't have any bookings now. Please feel free to book a beauty service.</Text>
        }
      </View>
      <FooterUser />
    </ScrollView>
  )
}

export default MyBookings