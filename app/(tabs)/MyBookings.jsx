import { ScrollView, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SingleBookingList from '@/components/SingleBookingList';
import Footer from '@/components/Footer';

// actions
import {
  getBookingsByUser
} from '@/store/booking/bookingActions'


const MyBookings = () => {
  const dispatch = useDispatch();


  // auth redux
  const { userInfo } = useSelector(state => state.auth)
  
  // load shops on pressing screen
  useFocusEffect(
    useCallback(() => {   
        dispatch(getBookingsByUser({searchData:{userId:userInfo._id}}))
      }, [dispatch])
  );

  // booking redux
  const { loading, bookings, error } = useSelector(state => state.booking);
 
  useEffect(() => {
      if (error) {
        showMessage({
          message: error || 'An error occured',
          type: 'danger'
        })
      }
    }, [error]);
  
  if (loading) {
    return (
      <View
        style={[styles.container, { flex: 1 }]}
        contentContainerStyle={styles.center}
      >
        <Spinner />
      </View>
    )
  }
  else if (bookings) {
    
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <PageTitle activeMenu="Bookings" motherMenu="Service" />
        <View style={{ paddingVertical: 16, flex: 1 }}>
          {
            bookings ? 
              bookings.map((booking, idx) => (
                <SingleBookingList key={idx} booking={booking} />
              ))
              :
              <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>You don't have any bookings now. Please feel free to book a beauty service.</Text>
          }
        </View>
        <Footer />
      </ScrollView>
    )
  }

}

export default MyBookings