import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// data
import { monthdata } from '@/data/monthData';

// config
import { bookingStatusConfig } from '@/config/bookingStatusConfig';


// styles
import styles from '@/styles/componentStyles';

// utils
import getStandardTime from '@/utils/getStandardTime';

const SingleBookingList = ({ booking }) => {
    const router = useRouter();
    
    const {
        _id,
        date,
        slot,
        service,
        status
    } = booking;
    
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


    return (
        <View style={styles.listContainer}>
            <Text style={[styles.listTitle, styles.textSecondary]}>Date : {dobookDay}-{monthdata[dobookMonth]}-{dobookYear}</Text>
            <View style={{ marginBottom: 8, alignItems: 'center' }}>
                <Text style={[styles.fieldHeading, styles.textGray]}>From : {stdStart}</Text>
                <Text style={[styles.fieldHeading, styles.textGray]}>To : {stdEnd}</Text>
            </View>
            <Text style={styles.fieldHeading}>Booked Service : {service}</Text>
            <View style={[styles.buttonContainer, { marginTop: 16 }]}>
                <TouchableOpacity
                    style={[styles.buttonLarge, styles[config.variant]]}
                    onPress={() => router.push(`(screensUser)/CurrentBooking/${_id}`)}
                >
                    <FontAwesome5 name={config.icon} size={18} color="#fff" />
                    <Text style={[styles.buttonText, { paddingLeft: 8 }]}>{config.text}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

export default SingleBookingList