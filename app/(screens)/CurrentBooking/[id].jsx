import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFocusEffect } from '@react-navigation/native';
import {useLocalSearchParams, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/styles';

// config
import { bookingStatusConfig } from '@/config/bookingStatusConfig';

// utils
import getStandardTime from '@/utils/getStandardTime';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SpinnerWhite from '@/components/SpinnerWhite';
// import FloatingBackButton from '@/components/FloatingBackButton';
// import BasicModal from '@/components/Modals/BasicModal';
import WarningModal from '@/components/Modals/WarningModal';
import Footer from '@/components/Footer';

// actions
import { resetBooking } from '@/store/booking/bookingSlice';
import { resetShop } from '@/store/shop/shopSlice';
import { resetBeautician } from '@/store/beautician/beauticianSlice';
import { getBookingById, changeBookingStatusByUserById } from '@/store/booking/bookingActions';
import { getServicePrice } from '@/store/payment/paymentActions';
import { addNotification } from '@/store/notification/notificationActions';
 

const CurrentBooking = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const dispatch = useDispatch();


    // load booking on pressing screen
    useFocusEffect(
        useCallback(() => {
            dispatch(getBookingById({ id }))
        }, [dispatch, id])
    );
    
    // redux states
    const { currentBooking, error } = useSelector(state => state.booking);
    const bookingLoding = useSelector(state => state.booking.loading);
    const paymentLoading = useSelector(state => state.payment.loading);
    const paymentError = useSelector(state => state.payment.error);
    // const { paymentDetails } = useSelector(state => state.payment);


     // field accessories
    const [focusField, setfocusField] = useState(null);
    
    // fields
    const [offerCode, setofferCode] = useState('');

    // states for modals
    const [cancelBookingModal, setcancelBookingModal] = useState(false);

    
    useEffect(() => {
        if (error) {
            showMessage({
                message: error || 'An error occured',
                type: 'danger'
            })
        }
    }, [error]);
    useEffect(() => {
        if (paymentError) {
            showMessage({
                message: paymentError || 'An error occured',
                type: 'danger'
            })
        }
     }, [paymentError]);
    
    
    // clear states on return
    useFocusEffect(
        useCallback(() => {
            return () => {
                dispatch(resetBooking());
                dispatch(resetShop());
                dispatch(resetBeautician());
            };
        }, [dispatch])
    );

    if (bookingLoding) {
        return (
            <View
                style={[styles.container, { flex: 1 }]}
                contentContainerStyle={styles.center}
            >
                <Spinner />
            </View>
        )
    }
    
    // ⛔ safety guard
    if (!currentBooking) {
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }

    if (currentBooking) {
        
        // destructure
        const { date,
            slot,
            shopName,
            service,
            beauticianName,
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

        const handleCancelBooking = () => { 
            setcancelBookingModal(false)
            const notification = {
                senderName: currentBooking.userName,
                senderId: currentBooking.userId,
                receiverId: currentBooking.beauticianId,
                message: "Service Booking Canceled",
                notificationType: 'danger'
            }
            dispatch(addNotification({ notification }));
            dispatch(changeBookingStatusByUserById({ id: currentBooking._id, bookingData: { action: "canceledByUser" } }));
        }

        const handleProceedToPay = async () => {
            const result = await dispatch(getServicePrice({ searchData: { bookingId: currentBooking._id, offerCode } }))
            if (result?.payload) {
                router.push({
                    pathname: '/(screens)/MakePayment',
                    params: {
                        bookingId: id,
                        userId: currentBooking.userId,
                        accountId: result.payload.accountId,
                        amount: result.payload.amount,
                        splitAmount: result.payload.splitAmount
                    }
                });
            }
        } 


        const renderBookingAction = () => {
            switch (status) {
                case "confirmed":
                    return (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.buttonLarge, styles.info]}
                                onPress={handleProceedToPay}
                            >
                                <Text style={styles.buttonText}>{
                                    paymentLoading ? <SpinnerWhite /> : "Proceed To Pay"
                                }</Text>

                            </TouchableOpacity>
                        </View>
                    )
                case "pending":
                    return (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.buttonLarge, styles.danger]}
                                onPress={() => setcancelBookingModal(true)}
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
                                onPress={() => router.push(`/(screens)/PaymentByBookingId/${id}`)}
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
                                    <Text style={[styles.largeHeading, styles.textSecondary, styles.textCenter]}>Status Of Your Booking</Text>
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
                                        <Text style={styles.fieldText}>{beauticianName}</Text>
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
                                        <WarningModal
                                            visible={cancelBookingModal}
                                            onClose={() => setcancelBookingModal(false)}
                                            onConfirm={handleCancelBooking}
                                            title="Are You Sure You want to Cancel Booking"
                                            message="Click Cancel if you still want to calncel this booking .. . otherwise click close"
                                            confirmText='Cancel'
                                            cancelText='Close'
                                        />

                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    <Footer />
                </KeyboardAwareScrollView>
                {/* <FloatingBackButton fallback='/(tabs)/Dashboard' /> */}
            </View>
        )
    }
     
    
    
}

export default CurrentBooking