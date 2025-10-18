import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';


// images
import serviceimage from '@/assets/images/pages/serviceimage.jpg';
import defaultProfilePic from '@/assets/images/avatar/defaultProfilePic.png';

// data
import { beauticianProfileData } from '@/data/beauticianProfileData';

// style
import styles from '@/styles/generalStyles';
import compStyles from '@/styles/componentStyles';


// components
import PageTitleBeautician from '@/components/PageTitleBeautician';
import BeauticianProfileTabs from '@/components/BeauticianProfileTabs';
import FooterBeautician from '@/components/FooterBeautician';


const BeauticianProfile = () => {
  if (1) {

    // destrucuture
    const { fullName, email, profilePic, clientRating } = beauticianProfileData;
    
    // toggle
    const [showMenu, setshowMenu] = useState(false);
    const toggleMenu = () => setshowMenu(prev => !prev);
    
    // input fields
    const [currentProfilePic, setcurrentProfilePic] = useState('');
    
    const handleProfilePicImage = async () => {

      // Ask for permission (required on physical devices)
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert('Permission to access media library is required!')
        return
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
      const originalUri = result.assets[0].uri;

      // Resize to 1024x1024 and compress to 50%

      const manipulatedImage = await ImageManipulator.manipulateAsync(
        originalUri,
        [{
          resize: {
            width: 1024,
            height:1024
          }
        }],
        {
          compress: 0.5,
          format: ImageManipulator.SaveFormat.JPEG
        }
         )
         
         const imageObj = {
           uri: manipulatedImage.uri,
           name: 'profilePic.jpg',
           type: 'image/jpeg'
         }
         setcurrentProfilePic(imageObj);      
      }


    }

    

    return (
      <ScrollView style={styles.container}>
        <PageTitleBeautician activeMenu="Profile" motherMenu="Beautician" />
        {/* row */}
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={[styles.cardShadow, { marginTop: 50 }]}>
              <View style={[styles.cardBody, styles.center]}>
                {/* dropdown header */}
                <TouchableOpacity
                  onPress={toggleMenu}
                  style={styles.profilePicAccessButton}
                >
                  <FontAwesome name='ellipsis-h' size={20 } color="#888" />
                </TouchableOpacity>
                {/* Dropdown Menu  */}
                {
                  showMenu && (
                    <Pressable
                      style={compStyles.overlay}
                      onPress={() => setshowMenu(false)}
                    >
                      <Pressable
                        style={compStyles.profileDropdownMenu}
                        onPress={(e) => e.stopPropagation()}
                      >
                        <TouchableOpacity
                          style={compStyles.dropdownItem}
                        >
                          <FontAwesome name='user-circle' size={16} color='#17a2b8' />
                          <Text style={[compStyles.dropdownText]}>change  profile pic </Text>
                          
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={compStyles.dropdownItem}
                        >
                          <FontAwesome name='trash' size={16} color='#222' />
                          <Text style={[compStyles.dropdownText]}>Delete profile pic </Text>
                          
                        </TouchableOpacity>
                      </Pressable>
                    </Pressable>
                    
                  )
                }
                <View style={[styles.profileAvatarWrapper, styles.profileAvatarShadow]}>
                  <Image
                    source={profilePic || defaultProfilePic}
                    style={styles.profileAvatar}
                    resizeMode='cover'
                  />
                </View>
                <View style={{ marginTop: 40 }}>
                  <Text style={[styles.cardBodyHeading, styles.textSecondaryBeautician]}>{fullName}</Text>
                </View>
                <View style={[styles.serialRow, { marginBottom: 8 }]}>
                  <Text style={[styles.fieldHeading,styles.textGray]}>email Id</Text>
                  <Text style={styles.textSecondary}> : </Text>
                  <Text style={styles.fieldText}>{email}</Text>
                </View>
                
              </View>
              {
                1 ? // replace with isProfilepicEdit
                  <View style={styles.cardBody}>
                    <View style={styles.formGroup}>
                      <Text style={[styles.formGroupLabel, styles.textShadow]}> Select Profile Pic<Text style={styles.textDanger}>*</Text></Text>
                      <Pressable
                        style={[styles.formGroupTextInput]}
                        onPress={handleProfilePicImage}
                      >
                          <Text style={styles.textGray}>Choose Image</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity style={[styles.buttonLarge, styles.secondaryBeautician]}>
                        <FontAwesome name='upload' size={16} color='#fff' />
                        <Text style={[styles.buttonText, { marginLeft: 8 }]}>Upload</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.buttonLarge, styles.primary, { marginLeft: 8 }]}>
                        <FontAwesome name='close' size={16} color='#fff' />
                        <Text style={[styles.buttonText, { marginLeft: 8 }]}>Cancel</Text>
                      </TouchableOpacity>
                    </View>  
                  </View>
                  : ""
                  
              }
            </View>
    
          </View>
          <View style={styles.column}>
            <View style={styles.cardShadow}>
              <View style={styles.cardBody}>
                <Text style={[styles.cardBodyHeading, styles.textSecondaryBeautician,styles.textCenter]}>Quick Info</Text>
                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 48 }]}>
                  <Text style={styles.fieldHeading}>Overall Rating </Text>
                  <Text style={styles.textSecondary}> : </Text>
                  <Text style={styles.fieldText}>{clientRating }</Text>
                </View>
                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 48 }]}>
                  <Text style={styles.fieldHeading}>Monthly Services </Text>
                  <Text style={styles.textSecondary}> : </Text>
                  <Text style={styles.fieldText}>100</Text>
                </View>
                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 48 }]}>
                  <Text style={styles.fieldHeading}>Target for month </Text>
                  <Text style={styles.textSecondary}> : </Text>
                  <Text style={styles.fieldText}>250</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* row */}
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.cardShadow}>
              <View style={styles.cardBody}>
                <Text style={styles.cardBodySubHeading}>Today Highlights</Text>
                <Image
                  source={serviceimage}
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
        {/* row */}
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.cardShadow}>
              <View style={styles.cardBody}>
                <BeauticianProfileTabs profile={beauticianProfileData} />
              </View>
            </View>
          </View>
        </View>
        <FooterBeautician />
      </ScrollView>
    )
  }
  else {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <PageTitleBeautician activeMenu="Profile" motherMenu="Beautician" />
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
                  <Link href='/(formsBeautician)/AddBasicProfile'>
                    <Text style={styles.textGray}>Click Here to Fill up Basic Profile</Text>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </View>
        <FooterBeautician />
      </ScrollView>
    )
  }
  
}

export default BeauticianProfile