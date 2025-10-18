import { View, Text, ScrollView } from 'react-native';
import React from 'react'

// data
import { beauticianBookingsData } from '@/data/beauticianBookingsData';

// styles
import styles from '@/styles/generalStyles';

// components
import PageTitleBeautician from '@/components/PageTitleBeautician';
import SingleBookingList from '@/components/SingleBookingListBeautician';
import FooterBeautician from '@/components/FooterBeautician';


const ServiceBookings = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <PageTitleBeautician activeMenu="All Bookings" motherMenu="Service"/>
      <View style={{ paddingVertical: 16, flex: 1 }}>
        {
          1 ? // replace with redux/backend
            beauticianBookingsData.map((booking, idx) => (
              <SingleBookingList key={idx} booking={booking} />
            )) :
            <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>You don't have any bookings now. Please wait a while for service request.</Text>
        }
      </View>
      <FooterBeautician />
    </ScrollView>
  )
}

export default ServiceBookings