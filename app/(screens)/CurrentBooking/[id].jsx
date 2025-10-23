import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// data
import { monthdata } from '@/data/monthData';
import { userBookingsData } from '@/data/userBookingsData';

// styles
import styles from '@/styles/styles';

// config
import { bookingStatusConfig } from '@/config/bookingStatusConfig';

// utils
import getStandardTime from '@/utils/getStandardTime';

// components
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';


const CurrentBooking = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
   
    const currentBooking = userBookingsData.find(booking => booking._id === id);
    
    // destructure
    const { date,
        slot,
        shopName,
        service,
        beautician,
        status } = currentBooking;
    
    // manage date
    const dobook = date;
    const dateOfBook = new Date(dobook);
    const dobookDay = dateOfBook.getDate();
    const dobookMonth = dateOfBook.getMonth();
    const dobookYear = dateOfBook.getFullYear();
        
    // manage time
    const stdStart = getStandardTime(slot.start);
    const stdEnd = getStandardTime(slot.end);

    // status  access
    const config = bookingStatusConfig[status] || {};
    if (!config.text) return null; // fallback

    // field accessories
    const [focusField, setfocusField] = useState(null);
    
    // fields
    const [offerCode, setofferCode] = useState('');

    const renderBookingAction = () => {
        switch (status) {
            case "confirmed":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge,styles.info]}
                        >
                            <Text style={styles.buttonText}>Proceed To Pay</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "pending":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge,styles.danger]}
                        >
                            <Text style={styles.buttonText}>Cancel Booking</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "completed":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.success]}
                            onPress={() => router.push('/')}
                        >
                            <Text style={styles.buttonText}>View Payment Details</Text>
                        </TouchableOpacity>
                    </View>
                    
                )
        }
    }
    
    return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView
                style={[{ flex: 1 }, styles.container]}
                contentContainerStyle={{ paddingBottom: 10 }}
                extraScrollHeight={50} // pushes input above keyboard
                enableOnAndroid={true}
            >
                <PageTitle activeMenu="Status" motherMenu="Booking" />
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.cardShadow}>
                            <View style={[styles.cardHeader, styles.center]}>
                                <Text style={[styles.largeHeading, styles.textSecondary,styles.textCenter]}>Status Of Your Booking</Text>
                                <Text style={[styles.fieldText, styles.textGray]}>{dobookDay} - {monthdata[dobookMonth]} - {dobookYear}</Text>
                            </View>
                            <View style={styles.cardBody}>
                                {/* section */}
                                <View style={{ marginBottom: 8 }}>
                                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Your Booking Details</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Booked Shop</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{shopName}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Selected Service</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{service}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Beautician</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{beautician}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Status</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles[config.textVariant]}>{config.text}</Text>
                                </View>
                                {/* section */}
                                <View style={{ marginBottom: 8 }}>
                                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Time Slot</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Start</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{stdStart}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>End</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{stdEnd}</Text>
                                </View>
                                {
                                    status === "confirmed" && (  // field for offer when booking confirmed
                                        <>
                                            <View style={{ marginBottom: 8 }}>
                                                <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Offer(If Any)</Text>
                                            </View>
                                            <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                                <Text style={styles.fieldHeading}>Offer Code :</Text>
                                            </View>
                                            <TextInput
                                                style={[styles.formGroupTextInput, focusField === 'offerCode' && styles.formGroupTextInputFocused]}
                                                placeholder='enter code'
                                                placeholderTextColor='#888'
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                                onFocus={() => setfocusField('offerCode')}
                                                onBlur={() => setfocusField(null)}
                                                value={offerCode}
                                                onChangeText={setofferCode}

                                            />
                                        </>
                                    )
                                }
                                <View style={{ marginTop: 16 }}>
                                    {
                                        renderBookingAction()
                                    }

                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <Footer/>
            </KeyboardAwareScrollView>
            <FloatingBackButton fallback='/(tabs)/Dashboard' />
        </View>
    )
}

export default CurrentBooking