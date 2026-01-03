import { ScrollView, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// styles
import styles from '@/styles/styles';

// components
import SingleNotification from './SingleNotification';

// actions
import { readNotifications } from '@/store/notification/notificationActions';


const Notifications = () => {
   const dispatch = useDispatch();

  // profile redux
  const { userInfo } = useSelector(state => state.auth);
  
  useEffect(() => {
    if (userInfo) {
      dispatch(readNotifications({ id: userInfo._id }))
    }
  }, [dispatch, userInfo]);
  
  // notification redux 
  const { notifications } = useSelector(state => state.notification);


  return (
      <ScrollView
        style={styles.notContainer}
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {
      
        notifications ? 
          notifications.notifications?.map((not, idx) => (
              <SingleNotification key={idx} not={not} />
            ))
            : <Text style={[styles.textCenter, styles.textBold]}>No New Notifications</Text>
          
        }
        
      </ScrollView>    
    )
}

export default Notifications