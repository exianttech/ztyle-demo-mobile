import { View, Text, ScrollView } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';


// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SingleSlotList from '@/components/SingleSlotList';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

// data
import { monthdata } from '@/data/monthData';


// actions
import {
    getSlots
} from '@/store/booking/bookingActions';


const SelectSlot = () => {
    const dispatch = useDispatch();
    
    const { mongoShopId,
        shopId,
        shopName,
        serviceName,
        servicePrice,
        mongoBeauticianId,
        beauticianName,
        dobook } = useLocalSearchParams();
    
    
    // load slots of the selected beautician on load
    useFocusEffect(
        useCallback(() => {
            dispatch(getSlots({ searchData: { beauticianId: mongoBeauticianId, date: dobook } }))
        }, [dispatch, mongoBeauticianId, dobook])
    );
    
    // booking redux
    const { loading, slotDetails, error } = useSelector(state => state.booking);

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
    else if (shopId && shopName && beauticianName && dobook) {

        const dateOfBook=new Date(dobook);
		const dobookDay = dateOfBook.getDate();
		const dobookMonth = dateOfBook.getMonth();
		const dobookYear = dateOfBook.getFullYear();
        

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <PageTitle activeMenu="Select Slot" motherMenu="Book" />
                    <View style={{ paddingVertical: 16, flex: 1 }}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <View style={styles.card}>
                                    <View style={styles.cardBody}>
                                        <Text style={[styles.largeHeading, styles.textSecondary, styles.textCenter]}>{shopName}</Text>
                                        <Text style={[styles.subHeading, styles.textCenter]}>Beautician : {beauticianName}</Text>
                                        <Text style={[styles.textInfo, styles.textCenter,{paddingVertical:8}]}>Booking Date : {dobookDay} - {monthdata[dobookMonth]} - {dobookYear}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                {
                                    slotDetails?.slots?.length ?
                                        slotDetails.slots.map((slot, idx) => (
                                            <SingleSlotList
                                                key={idx}
                                                slot={slot}
                                                mongoShopId={mongoShopId}
                                                shopId={shopId}
                                                shopName={shopName}
                                                serviceName={serviceName}
                                                servicePrice={servicePrice}
                                                mongoBeauticianId={mongoBeauticianId}
                                                beauticianName={beauticianName}
                                                dobook={dobook}
                                            />
                                        )) :
                                        <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No slots for this beautician</Text>
                                }
                            </View>
                        </View>
                        
                    </View>
                    <Footer />
                </ScrollView>
                <FloatingBackButton fallback='/(tabs)/Dashboard' />
            </View>
        )
    }
    else {
        return (
            <View style={[styles.container, { flex: 1 }]}>
                <View style={[styles.center, { flex: 1 }]}>
                    <View style={styles.centerAlertContainer}>
                        <View style={[styles.alert, styles.danger]}>
                            <Text style={[styles.alertText, styles.alertTextBold]}>something went wrong  </Text>
                            <Text style={styles.alertText}>please refresh the app  </Text>                      
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

export default SelectSlot