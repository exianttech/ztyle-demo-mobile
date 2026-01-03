import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams,useRouter } from 'expo-router';

// style 
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import DatePickerInput from '@/components/DatePickerInput';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';


const SelectDate = () => {
    const router = useRouter();

    const { mongoShopId,
        shopId,
        shopName,
        serviceName,
        servicePrice,
        mongoBeauticianId,
        beauticianName } = useLocalSearchParams();
    
     // error object for validation
    let errorsObj = { dobook: '' };
    const [errors, seterrors] = useState(errorsObj);

    // fields
    const [dobook, setdobook] = useState('');

    const handleProceed = () => {
        let error = false;
        const errorObj = { ...errorsObj };
        if (dobook === '') {
            errorObj.dobook = 'Please Select A Date To Book A Slot';
            error = true;
        }

        seterrors(errorObj);

        if (error) {
            return
        }
        router.push({
            pathname: '/(screens)/SelectSlot',
            params: {
                mongoShopId,
                shopId,
                shopName,
                serviceName,
                servicePrice,
                mongoBeauticianId,
                beauticianName,
                dobook
            }
        })

    }
    
    return (
        <View style={{ flex: 1 }}>
           <KeyboardAwareScrollView
                style={[{ flex: 1 }, styles.container]}
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={50} // pushes input above keyboard
                enableOnAndroid={true}
            >
                <PageTitle activeMenu='Select Date Of Booking' motherMenu='Booking' />
                <View style={{ paddingVertical: 16, flex: 1 }}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.cardShadow}>
                                <View style={[styles.cardHeader, styles.center]}>
                                    <Text style={[styles.largeHeading, styles.textSecondary,styles.textCenter]}>You Are Nearly There</Text>
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
                                        <Text style={styles.fieldText}>{serviceName}</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                        <Text style={styles.fieldHeading}>Beautician</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={styles.fieldText}>{beauticianName}</Text>
                                    </View>
                                    {/* section */}
                                    <View style={{ marginBottom: 8 }}>
                                        <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Select The Date</Text>
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Booking Date<Text style={styles.textDanger}>*</Text></Text>
                                        <DatePickerInput
                                            value={dobook}
                                            onChange={setdobook}
                                            minDate={new Date()}
                                        />
                                        {errors.dobook && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.dobook}</Text>}
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            onPress={handleProceed}
                                            style={[styles.buttonLarge, styles.primary]}
                                        >
                                             <FontAwesome5
                                                name="arrow-alt-circle-right"
                                                size={24}
                                                color="#fff"
                                                solid={false}  // FAR regular icon
                                            />
                                            <Text style={styles.buttonText}>Proceed </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <Footer />
            </KeyboardAwareScrollView>
            <FloatingBackButton fallback='/(tabs)/Dashboard' />
        </View>
    )
}

export default SelectDate