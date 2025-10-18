import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

// data
import { beauticiansData } from '@/data/beauticiansData';

// styles
import styles from '@/styles/generalStyles';

// components
import PageTitleUser from '@/components/PageTitleUser';
import BeauticianDetailTabs from '@/components/BeauticianDetailTabs';
import FloatingBackButton from '@/components/FloatingBackButton';
import FooterUser from '@/components/FooterUser';

const BeauticianDetails = () => {
  const { id } = useLocalSearchParams();
  const currentBeautician = beauticiansData.find(beautician => beautician._id === id)
  const { fullName, profilePic } = currentBeautician;
  

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
                        <Link href='/'><Text style={[styles.textInfo,styles.textCenter]}>Be the first one to review this beautician</Text></Link>
                    }
                    {
                      currentBeautician.clientRating ? 
                        <Link href='/'>
                          <Text style={[styles.cardBodySubHeading,styles.textCenter]}> Rate and review this beautician</Text>
                        </Link>
                        : ""
                    }
                  </View>
                </View>
                <View style={styles.cardShadow}>
                  <View style={styles.cardBody}>
                    <Image
                      source={profilePic}
                      style={styles.profilePicPhoto}
                      resizeMode='cover'
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

export default BeauticianDetails