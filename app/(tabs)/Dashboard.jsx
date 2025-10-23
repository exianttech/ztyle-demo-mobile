import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// styles
import styles from '@/styles/styles';

// components
import FooterUser from '@/components/Footer';
import RadialDonut from '@/components/RadialDonut';
import RecentShops from '@/components/RecenShops/RecentShops';
import Recommendations from '@/components/Recommendations/Recommendations';

const Dashboard = () => {
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={styles.row}>
        {/* card 1 */}
        <View style={styles.column}>
          <TouchableOpacity>
            <View style={[styles.dashCard, styles.dashBg1]}>
              <View style={[styles.cardBody, styles.serialRow, styles.between]}>
                <View style={{marginBottom:8}}>
                  <Text style={[styles.dashCardCount, styles.textWhite]}>10</Text>
                  <Text style={[styles.textWhite, styles.textBold]}>Upcoming Appointments</Text>
                </View>
                <View style={{marginBottom:8}}>
                  <FontAwesome5 name='calendar-check' size={36} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* card 2 */}
        <View style={styles.column}>
          <TouchableOpacity>
            <View style={[styles.dashCard, styles.dashBg2]}>
              <View style={[styles.cardBody, styles.serialRow, styles.between]}>
                <View style={{marginBottom:8}}>
                  <Text style={[styles.dashCardCount, styles.textWhite]}>4</Text>
                  <Text style={[styles.textWhite, styles.textBold]}>Pending Approvals</Text>
                </View>
                <View style={{marginBottom:8}}>
                  <FontAwesome5 name='hourglass-half' size={36} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          
        </View>
        {/* card 3 */}
        <View style={styles.column}>
          <TouchableOpacity>
            <View style={[styles.dashCard, styles.dashBg3]}>
              <View style={[styles.cardBody, styles.serialRow, styles.between]}>
                <View style={{marginBottom:8}}>
                  <Text style={[styles.dashCardCount, styles.textWhite]}>8</Text>
                  <Text style={[styles.textWhite, styles.textBold]}>Offers & Discounts</Text>
                </View>
                <View style={{marginBottom:8}}>
                  <FontAwesome5 name='tags' size={36} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>      
        </View>
         {/* card 4 */}
        <View style={styles.column}>
          <TouchableOpacity>
            <View style={[styles.dashCard, styles.dashBg4]}>
              <View style={[styles.cardBody, styles.serialRow, styles.between]}>
                <View style={{marginBottom:8}}>
                  <Text style={[styles.dashCardCount, styles.textWhite]}>15</Text>
                  <Text style={[styles.textWhite, styles.textBold]}>Favorite Salons</Text>
                </View>
                <View style={{marginBottom:8}}>
                  <FontAwesome name='heart' size={36} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.card}>
            <View style={[styles.cardBody, styles.center]}>
              <RadialDonut profileCompletion="50" />
              <Text> Profile Completion</Text>
              <View style={{ marginTop: 16 }}>
                <Text style={[styles.cardBodyHeading, styles.textDanger]}>Your Profile is empty</Text>
                <Link href='/(formsUser)/AddBasicProfile'>
                  <Text style={[styles.textGray,styles.textCenter]}> Click Here to Fill up Your Profile </Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <Text style={styles.cardBodySubHeading}>Recommended for You</Text>
              <Recommendations />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <Text style={styles.cardBodySubHeading}>Recently Visited Shops</Text>
              <RecentShops />
            </View>
          </View>
        </View>
      </View>
      <FooterUser />
    </ScrollView>
  )
}


export default Dashboard