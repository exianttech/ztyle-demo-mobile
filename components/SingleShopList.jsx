import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// images
import defaultShopPic from '@/assets/images/shops/store.png';

// styles
import styles from '@/styles/styles';

const SingleShopList = ({ shop }) => {
    const router = useRouter();

    const {
        _id,
        shopImage,
        shopName,
        shopId,
        ownerFullName
    } = shop;
    
     // shop image  display handling
    const [imageFailed, setImageFailed] = useState(false);

    const resolvedShopPic =imageFailed
        ? defaultShopPic :
        shopImage
            ?
            { uri: shopImage }
            : defaultShopPic;

    return (
        <View style={styles.listContainer}>
            <Image
                source={resolvedShopPic}
                style={styles.listImage}
                onError={() => {
                    // fallback to default picture
                    console.log("Image failed — switching to default");
                    setImageFailed(true);
                    setcurrentProfilePic("");   // reset local state
                }}

            />
            <Text style={[styles.listTitle, styles.textSecondary]}>{shopName}</Text>
            <Text style={[styles.listText, styles.textGray, styles.textShadow]}>Owner : {ownerFullName}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.buttonLarge, styles.secondary]}
                    onPress={() => router.push(`(screens)/ShopMenu/${_id}`)}
                >
                    <FontAwesome5 name='arrow-alt-circle-right' size={16} color="#fff" />
                    <Text style={[styles.buttonText, { paddingLeft: 8 }]}>Book A Service</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonLarge, styles.primary, { marginLeft: 8 }]}
                    onPress={() => router.push(`(screens)/shopDetails/${_id}`)}
                >
                    <FontAwesome name='info' size={16} color="#fff" />
                    <Text style={[styles.buttonText, { paddingLeft: 8 }]}>Shop Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleShopList