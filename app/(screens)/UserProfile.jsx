import { Link } from 'expo-router';
import React, { useCallback,useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// images
import landingpageimage from '@/assets/images/pages/landingpageimage.jpg';

// styles
import styles from '@/styles/styles';

// utils
import getInitials from '@/utils/getInitials';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import UserProfileTabs from '@/components/UserProfileTabs';
import Footer from '@/components/Footer';

// actions
import { getProfile } from '@/store/profile/profileActions';


const UserProfile = () => {
    const dispatch = useDispatch();

    
    // auth redux states
    const { userInfo } = useSelector(state => state.auth);
   
    // load profile on pressing screen
    useFocusEffect(
        useCallback(() => {
            if (userInfo?.email) {
                dispatch(getProfile({ email: userInfo.email }))
            }
        }, [dispatch, userInfo])
    );

    // profile redux
    const { loading, profile, error } = useSelector(state => state.profile);

    useEffect(() => {
        if (error) {
            showMessage({
                message: error || 'An error occured',
                type: 'danger'
            })
        }
    }, [error]);
    
    
    if (loading || !userInfo) {
        return (
            <View
                style={[styles.container, { flex: 1 }]}
                contentContainerStyle={styles.center}
            >
                <Spinner />
            </View>
        )
    }
    
    else if (profile) { 
        const { fullName, email } = profile;
        const initials = getInitials(fullName);
        
        return (
            <ScrollView style={styles.container}>
                <PageTitle activeMenu='Profile' motherMenu='User' />
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={[styles.cardShadow, { marginTop: 50 }]}>
                            <View style={[styles.cardBody, styles.center]}>
                                <View style={[styles.initialsBg, styles.mediaGray, styles.initialsBgShadow]}>
                                    <Text style={[styles.initialsBgText, styles.textGray, styles.textShadow]}>{initials||"DP"}</Text>
                                </View>
                                <View style={{ marginTop: 40 }}>
                                    <Text style={[styles.cardBodyHeading, styles.textSecondary]}>{fullName || "fullName"}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                    <Text style={[styles.fieldHeading,styles.textGray]}>email Id</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{email||"yourmail@domain"}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.cardShadow}>
                            <View style={styles.cardBody}>
                                <Text style={styles.cardBodySubHeading}>Today Highlights</Text>
                                <Image
                                    source={landingpageimage}
                                    style={styles.imageFluid}
                                    resizeMode='cover'
                                />
                                <Text style={[styles.generalDescription, styles.textGray]}>
                                    Step into style with fresh cuts and vibrant looks. Your confidence deserves the spotlight—let beauty redefine your day today
                                </Text>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.cardShadow}>
                            <View style={styles.cardBody}>
                                <UserProfileTabs profile={profile} />
                            </View>
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        )

    } 
    else {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <PageTitle activeMenu='Profile' motherMenu='User' />
                <View style={{ flex: 1 }}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.textBold}>Profile Status</Text>
                                </View>
                                <View style={styles.cardBody}>
                                    <View style={styles.alertContainer}>
                                        <View style={[styles.alert, styles.danger]}>                                  
                                            <Text style={[styles.alertText, styles.alertTextBold]}>profile not found !!!</Text>
                                            <Text style={styles.alertText}>Please Fill up Your Profile.</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.card}>
                                <View style={styles.cardBody}>
                                    <Link href='/(forms)/AddBasicProfile'>
                                        <Text style={styles.textGray}>Click Here to Fill up Profile</Text>
                                    </Link>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        )
    }
    
}


export default UserProfile