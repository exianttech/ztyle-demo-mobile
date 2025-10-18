import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/componentStyles';

// utils
import getAddressLines from '@/utils/getAddressLines';

// components
import UserModal from './Modals/UserModal';

const UserProfileTabs = ({ profile }) => {
    
    // destructure
    const { dob,
        fullName,
        email,
        address,
        mobile } = profile;
    
    // format to display
    const dateOfBirth = new Date(dob);
    const dobDay = dateOfBirth.getDate();
    const dobMonth = dateOfBirth.getMonth();
    const dobYear = dateOfBirth.getFullYear();
    const addressLines = getAddressLines(address)
    
    // select tabs
    const [activeTab, setactiveTab] = useState("profile");

    // modal
    const [modalVisible, setmodalVisible] = useState(false);

    const handleDelete = () => {
        setmodalVisible(false);
        console.log("profile deleted")
        // replace backend
    }

    
    const renderedContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            {/* subsection */}
                            <View style={{ marginBottom: 8 }}>
                                <Text style={[styles.cardBodySubHeading,styles.textSecondary]}>Personal Information</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Full Name</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{fullName}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Email</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{email}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Date of Birth</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{dobDay} - {monthdata[dobMonth]} - {dobYear}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8, alignItems: 'flex-start' }]}>
                                <Text style={styles.fieldHeading}>Residential Address</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <View style={{ flexDirection: 'column' }}>
                                    {
                                        addressLines.map((line, idx) => (
                                            <Text key={idx} style={styles.fieldText}>{line},</Text>
                                        ))
                                    }
                                </View>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Mobile Number</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{mobile}</Text>
                            </View>

                        </View>
                    </View>
                )
            case "profileSettings":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            <View style={styles.cardHeader}>
                                <Text style={[styles.textBold,{marginBottom:8}]}>Manage Your Profile</Text>
                                <Text style={[styles.textGray, styles.textShadow]}>here you can manage your  profile  as editing or deleting completely.</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <View style={styles.alertContainer}>
                                    <View style={[styles.alert, styles.secondary]}>
                                        <Text style={[styles.alertText, styles.alertTextBold]}>Edit Your Basic Profile</Text>
                                        <Link href='/(formsUser)/AddBasicProfile'>
                                            <Text style={styles.alertText}>click here to edit your basic profile</Text>
                                        </Link>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.cardBody}>
                                <View style={styles.alertContainer}>
                                    <View style={[styles.alert, styles.primary]}>
                                        <Text style={[styles.alertText, styles.alertTextBold]}>Delete Your Entire Profile</Text>
                                        <TouchableOpacity
                                            onPress={() => setmodalVisible(true)}
                                        >
                                            <Text style={styles.alertText}>click here to delete your profile</Text>
                                        </TouchableOpacity>
                                        {/* Modal */}
                                        <UserModal
                                            visible={modalVisible}
                                            onClose={() => setmodalVisible(false)}
                                            onConfirm={handleDelete}
                                            title="Are you sure you want to delete?"
                                            message="Click Delete if you still want to delete your profile. Otherwise click Close."
                                            confirmText='Delete'
                                            cancelText='Close'
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
                
        }
    }
    return (
        <View style={{ flex: 1 }}>
            {/* Tabs Header */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tabHeader}
            >
                {
                    [
                        { key: 'profile', label: 'Profile' },
                        { key: 'profileSettings', label: 'Profile Settings' }
                    ].map((tab, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => setactiveTab(tab.key)}
                            style={[styles.tab, activeTab === tab.key && styles.activeTabUser]}
                        >
                            <Text style={[styles.tabText, activeTab === tab.key && styles.activeTabTextUser]}>
                                {tab.label}
                            </Text>

                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            {/* Tab Content */}
            <ScrollView style={styles.tabContent}>
                {
                    renderedContent()
                }
            </ScrollView>
        </View>
  )
}

export default UserProfileTabs