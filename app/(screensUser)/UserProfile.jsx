import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

// images
import landingpageimage from '@/assets/images/pages/landingpageimage.jpg';

// data
import { userProfileData } from '@/data/userProfileData';

// styles
import styles from '@/styles/generalStyles';

// utils
import getInitials from '@/utils/getInitials';

// components
import PageTitleUser from '@/components/PageTitleUser';
import UserProfileTabs from '@/components/UserProfileTabs';
import FooterUser from '@/components/FooterUser';


const UserProfile = () => {

    const { fullName, email } = userProfileData;
    
    const initials = getInitials(fullName);
    

    if (!1) { // replace with redux/backend for profile
        return (
            <ScrollView style={styles.container}>
                <PageTitleUser activeMenu='Profile' motherMenu='User' />
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={[styles.cardShadow, { marginTop: 50 }]}>
                            <View style={[styles.cardBody, styles.center]}>
                                <View style={[styles.initialsBg, styles.mediaGray, styles.initialsBgShadow]}>
                                    <Text style={[styles.initialsBgText, styles.textGray, styles.textShadow]}>{initials}</Text>
                                </View>
                                <View style={{ marginTop: 40 }}>
                                    <Text style={[styles.cardBodyHeading,styles.textSecondary]}>{fullName}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                    <Text style={[styles.fieldHeading,styles.textGray]}>email Id</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{email}</Text>
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
                                <UserProfileTabs profile={userProfileData} />
                            </View>
                        </View>
                    </View>
                </View>
                <FooterUser />
            </ScrollView>
        )

    } 
    else {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <PageTitleUser activeMenu='Profile' motherMenu='User' />
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
                                    <Link href='/(formsUser)/AddBasicProfile'>
                                        <Text style={styles.textGray}>Click Here to Fill up Profile</Text>
                                    </Link>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <FooterUser />
            </ScrollView>
        )
    }
    
}


export default UserProfile