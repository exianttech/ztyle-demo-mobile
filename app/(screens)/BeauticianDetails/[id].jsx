import { Image, ScrollView, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';

// images
import defaultProfilePic from '@/assets/images/avatar/defaultProfilePic.png';

// components
import PageTitleUser from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import BeauticianDetailTabs from '@/components/BeauticianDetailTabs';
import FloatingBackButton from '@/components/FloatingBackButton';
import FooterUser from '@/components/Footer';

// actions
import {
  getBeauticianById
} from '@/store/beautician/beauticianActions';


const BeauticianDetails = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();


  // load shops on pressing screen
    useFocusEffect(
      useCallback(() => {    
        dispatch(getBeauticianById({ id }))
      }, [dispatch, id])
  );


  

  const { loading, currentBeautician, error } = useSelector(state => state.beautician);
  
  // image accessory states
  const [imageFailed, setImageFailed] = useState(false);


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


  else if (currentBeautician) {
    const { fullName, profilePic } = currentBeautician;

    const resolvedProfilePic = imageFailed
      ? defaultProfilePic :
      profilePic
        ?
        { uri: profilePic }
        : defaultProfilePic;
    

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <PageTitleUser activeMenu="Details" motherMenu="Beautician" />
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.card}>
                <View style={styles.cardBody}>
                  <View style={styles.cardShadow}>
                    <View style={[styles.cardBody, styles.center]}>
                      <Text style={[styles.largeHeading, styles.textSecondary]}>{fullName}</Text>
                      {
                        currentBeautician.clientRating ?
                          <View style={styles.rating}>
                            <Text style={styles.ratingText}>{currentBeautician.clientRating}</Text>
                            <FontAwesome name='star' size={16} color='#fff' />
                          </View>
                          :
                          <Link href={`/(screens)/MyBeauticianReview/${currentBeautician._id}`}><Text style={[styles.textInfo, styles.textCenter]}>Be the first one to review this beautician</Text></Link>
  
                      }
                      {
                        currentBeautician.clientRating ?
                          <Link href={`/(screens)/MyBeauticianReview/${currentBeautician._id}`}>
                            <Text style={[styles.cardBodySubHeading, styles.textCenter]}> Rate and review this beautician</Text>
                          </Link>
                          : ""
                      }
                    </View>
                  </View>
                  <View style={styles.cardShadow}>
                    <View style={styles.cardBody}>
                      <Image
                        source={resolvedProfilePic}
                        style={styles.profilePicPhoto}
                        resizeMode='cover'
                        onError={() => {
                          // fallback to default picture
                          console.log("Image failed — switching to default");
                          setImageFailed(true);
                        }}
                        
                      />
                    </View>
                  </View>
                  <View style={styles.cardShadow}>
                    <View style={styles.cardBody}>
                      <BeauticianDetailTabs beautician={currentBeautician} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <FooterUser />
        </ScrollView>
        <FloatingBackButton fallback='/(tabsUser)/Dashboard' />
      </View>
    )
  }
   else {
        return (
            <View style={[styles.container, { flex: 1 }]}>
                <View style={[styles.center, { flex: 1 }]}>
                    <View style={styles.centerAlertContainer}>
                        <View style={[styles.alert, styles.warning]}>
                            <Text style={[styles.alertText, styles.alertTextBold]}>Beautician not found !!!  </Text>
                    
                            <Text style={styles.alertText}>Now this beautician does not exist</Text>
                           
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default BeauticianDetails