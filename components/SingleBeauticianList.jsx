import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// styles
import styles from '@/styles/styles';

const SingleBeauticianList = ({ beautician }) => {
    const router = useRouter();

    // destructure
    const { _id,
        profilePic,
        fullName,
        position,
        mobile
    } =beautician

    
    return (
        <View style={styles.listContainer}>
            <Image
                source={profilePic}
                style={styles.listImage}
                resizeMode='cover'
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