import { View,ScrollView, Text,TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
// import RazorpayChechout from 'react-native-razorpay';


// styles
import styles from '@/styles/styles';

// data
import { monthdata } from '@/data/monthData';

//config
import { Constants } from '@/config/constants';
 
// components
import PageTitle from '@/components/PageTitle';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

// actions
import { changeBookingStatusByUserById } from '@/store/booking/bookingActions';


const MakePayment = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { bookingId, userId, accountId, amount, splitAmount } = useLocalSearchParams();
    console.log(userId)
    
     // manage date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();


    const handlePayment = () => {
        console.log("payment clicked")
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={[{ flex: 1 }, styles.container]}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <PageTitle activeMenu="Status" motherMenu="Booking" />
                <View style={{ paddingVertical: 16, flex: 1 }}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.cardShadow}>
                                <View style={[styles.cardHeader, styles.center]}>
                                    <Text style={[styles.largeHeading, styles.textSecondary, styles.textCenter]}>Please Feel Free To Make Payement</Text>
                                    <Text style={[styles.fieldText, styles.textGray]}>{day} - {monthdata[month]} - {year}</Text>
                                </View>
                                <View style={styles.cardBody}>
                                    {/* section */}
                                    <View style={{ marginBottom: 8 }}>
                                            <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Your Payment Details</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                        <Text style={styles.fieldHeading}>Purpose Of Payment</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={styles.fieldText}>Service Booking</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                        <Text style={styles.fieldHeading}>Amout</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={styles.fieldText}> &#8377; {splitAmount}</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                        <Text style={styles.fieldHeading}>Service Charge</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={styles.fieldText}> &#8377; {amount - splitAmount}</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8,marginTop:8 , paddingHorizontal: 12 }]}>
                                        <Text style={[styles.subHeading,styles.textSecondary]}>Total</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={[styles.subHeading, styles.textSecondary]}> &#8377; {amount}</Text>
                                    </View>
                                    <View style={{ marginTop: 16 }}>
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity
                                                style={[styles.buttonLarge, styles.success]}
                                                onPress={handlePayment}
                                            >
                                                <Text style={styles.buttonText}>Pay Now</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                </View>
                </View>

                <Footer/>
            </ScrollView>
            <FloatingBackButton fallback='/(tabs)/Dashboard' />
        </View>
    )
}

export default MakePayment