import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


// styles
import styles from '@/styles/styles';

// images
import defaultProfilePic from '@/assets/images/avatar/defaultProfilePic.png';

const SingleBeauticianList = ({ beautician }) => {
    const router = useRouter();

    // destructure
    const { _id,
        profilePic,
        fullName,
        position,
        mobile
    } =beautician

    // beautician image  display handling
    const [imageFailed, setImageFailed] = useState(false);
    
    const resolvedProfilePic = imageFailed
        ? defaultProfilePic :
        profilePic
            ?
            { uri: profilePic }
            : defaultProfilePic;
    
    
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
            <Text style={[styles.listText,styles.textBold]}>Contact Number : {mobile}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.buttonLarge, styles.secondary]}
                    onPress={() => router.push(`(screens)/BeauticianDetails/${_id}`)}
                >
                    <FontAwesome name='info' size={16} color='#fff' />
                    <Text style={[styles.buttonText,{paddingLeft:8}]}>More Info </Text>

                </TouchableOpacity>
            </View>
        </View>
  )
}

export default SingleBeauticianList