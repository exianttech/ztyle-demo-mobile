import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';


// styles
import styles from '@/styles/styles';

// components
import BasicModal from '@/components/Modals/BasicModal';

// utils
import getStandardTime from '@/utils/getStandardTime';

// actions
import { addBookingByUser } from '@/store/booking/bookingActions';
import { addNotification } from '@/store/notification/notificationActions';
import { resetBooking } from '@/store/booking/bookingSlice';


const SingleSlotList = ({ slot,
    mongoShopId,
    shopId,
    shopName,
    serviceName,
    servicePrice,
    mongoBeauticianId,
    beauticianName,
    dobook }) => {
    
    const dispatch = useDispatch();
    const router = useRouter();

    // destructure
    const {
        start,
       end,
       status
    } = slot;

    // user redux 
    const { userInfo } = useSelector(state => state.auth);

    // 🔐 AUTH GUARD
    if (!userInfo?._id) {
        router.replace('/(auth)/Login');
        return null; // ⬅️ important
    }


    const stdStart = getStandardTime(start);
    const stdEnd = getStandardTime(end);
    

    const renderSlotAction = () => {
        switch (status) {
            case "pending":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.secondary]}
                            disabled={loading}
                            onPress={() => setBasicModal(true)}
                        >
                            <FontAwesome
                                name="thumbs-up"
                                size={24}
                                color="#fff"
                            />
                            <Text style={[styles.buttonText,{marginLeft:8}]}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "confirmed":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.danger]}
                            disabled={true}
                        >
                            <FontAwesome5
                                name="ban"
                                size={24}
                                color="#fff"
                            />
                            <Text style={[styles.buttonText, { marginLeft: 8 }]}>Already Booked</Text>
                        </TouchableOpacity>
                    </View>
                )
            
            case "canceled":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.secondary]}
                            disabled={true}
                            onPress={() => setBasicModal(true)}
                        >
                            <FontAwesome
                                name="thumbs-up"
                                size={24}
                                color="#fff"
                            />
                            <Text style={[styles.buttonText, { marginLeft: 8 }]}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                )
            default:
                return null; 
             
        }
    }

    // states for modals
    const [basicModal, setBasicModal] = useState(false);

    const handleBookNow = () => {
        setBasicModal(false);
        const newBooking = {
            userId: userInfo._id,
            beauticianId: mongoBeauticianId,
            shopId,
            date: dobook,
            slot,
            service: serviceName
        }
        const notification = {
            senderName: userInfo.fullName,
            senderId: userInfo._id,
            receiverId: mongoBeauticianId,
            message: "Service Booking Requested",
            notificationType: 'secondary'
        }
        dispatch(addNotification({ notification }))
        dispatch(addBookingByUser({ newBooking }))

    }

    // booking redux 
    const { loading, currentBooking, error } = useSelector(state => state.booking);

    // navigation
    useEffect(() => {
        if (currentBooking && !error) {
            router.push(`(screens)/CurrentBooking/${currentBooking._id}`)
            // 🔥 clear old booking so next booking doesn't auto-redirect
            dispatch(resetBooking())
        }
    }, [currentBooking, error, router]);
    

    useEffect(() => {
            if (error) {
                showMessage({
                    message: error || 'An error occured',
                    type: 'danger'
                })   
            }
    }, [error]);
    

    return (
        <View style={styles.listContainer}>
            <Text style={[styles.listTitle, styles.textSecondary]}>Time Slot </Text>
            <View style={{ marginBottom: 8, alignItems: 'center' }}>
                <Text style={[styles.fieldHeading,]}>Start : {stdStart}</Text>
            </View>
             <View style={{ marginBottom: 16, alignItems: 'center' }}>
                <Text style={[styles.fieldHeading,]}>End : {stdEnd}</Text>
            </View>
            {
                renderSlotAction()
            }
            <BasicModal
                visible={basicModal}
                onClose={() => setBasicModal(false)}
                onConfirm={handleBookNow}
                title="Book The Slot "
                message="Click Book if you still want to book this slot .. . otherwise click cancel"
                confirmText='Book'
                cancelText='Cancel'
            />
        </View>
    )
}


export default SingleSlotList