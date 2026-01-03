import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// styles
import styles from '@/styles/styles';

// images
import defaultProfilePic from '@/assets/images/avatar/defaultProfilePic.png';


const SingleBeauticianSelectList = ({ beautician,
    mongoShopId,
    shopId,
    shopName,
    serviceName,
    servicePrice }) => {
    
    const router = useRouter();

    // destructure
    const {
        _id,
        profilePic,
        fullName,
        position,
        specialty
    } = beautician;

    // beautician image  display handling
    const [imageFailed, setImageFailed] = useState(false);
       
    const resolvedProfilePic = imageFailed
        ? defaultProfilePic :
        profilePic
            ?
            { uri: profilePic }
            : defaultProfilePic;
    
    
    const handleBeauticianSelect = () => {
        router.push({
            pathname: '/(screens)/SelectDate',
            params: {
                mongoShopId,
                shopId,
                shopName,
                serviceName,
                servicePrice,
                mongoBeauticianId: _id,
                beauticianName: fullName
            }
        })
    }
    

    return (
        <View style={styles.listContainer}>
             <Image
                source={resolvedProfilePic}
                style={styles.listImage}
                resizeMode='cover'
                onError={() => {
                    // fallback to default picture
                    console.log("Image failed — switching to default");
                    setImageFailed(true);
                }}

            />
            <Text style={[styles.listTitle, styles.textSecondary]}>{fullName}</Text>
            <Text style={[styles.listText, styles.textGray, styles.textShadow]}>Position : {position}</Text>
            <Text style={[styles.listText, styles.textBold]}>Specialty : {specialty}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.buttonLarge, styles.secondary]}
                    onPress={handleBeauticianSelect}
                >
                    <FontAwesome5
                        name="arrow-alt-circle-right"
                        size={24}
                        color="#fff" 
                        solid={false}  // FAR regular icon
                    />
                    <Text style={[styles.buttonText, { paddingLeft: 8 }]}>Select </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default SingleBeauticianSelectList