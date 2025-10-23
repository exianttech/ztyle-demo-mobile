import React from 'react';
import { ScrollView, Text, View } from 'react-native';

// data
import { userBookingsData } from '@/data/userBookingsData';

// styles
import styles from '@/styles/styles';

// components
import FooterUser from '@/components/Footer';
import PageTitleUser from '@/components/PageTitle';
import SingleBookingList from '@/components/SingleBookingList';

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