import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';


// style
import styles from '@/styles/styles';



const SingleMenuList = ({ item, shopId,shopName }) => {
    const router = useRouter();
    const { id } = useLocalSearchParams();


    const { name, price } = item;
    

    const handleBookService = () => {
        router.push({
            pathname: '/(screens)/BeauticianSelect',
            params: {
                mongoShopId: id,
                serviceName: item.name,
                servicePrice: item.price,
                shopId,
                shopName
            }
        })
    }


    return (
        <View style={styles.listContainer}>
            <Text style={[styles.listTitle, styles.textSecondary]}>{name}</Text>
            <View style={{ marginBottom: 8, alignItems: 'center' }}>
                <Text style={[styles.fieldHeading,]}>Price:  &#8377; {price}</Text>
            </View>
            <View style={[styles.buttonContainer, { marginTop: 16 }]}>
                <TouchableOpacity
                    style={[styles.buttonLarge, styles.secondary]}
                    onPress={handleBookService}
                >
                    <FontAwesome5
                        name="arrow-alt-circle-right" 
                        size={24}                
                        color="#fff" 
                        solid={false}  // FAR regular icon
                    />
                    <Text style={[styles.buttonText, { paddingLeft: 8 }]}>Select</Text>
                </TouchableOpacity>
             </View>
        </View>
    )

}

export default SingleMenuList