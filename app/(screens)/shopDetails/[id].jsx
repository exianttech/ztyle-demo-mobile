import { Image, ScrollView, Text, View } from 'react-native';
import React, { useCallback, useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// images
import defaultShopPic from '@/assets/images/shops/store.png';


// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import ShopDetailTabs from '@/components/ShopDetailTabs';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';


// actions
import {
    getShopById
} from '@/store/shop/shopActions';



const ShopDetails = () => {
    const { id } = useLocalSearchParams();
    const dispatch = useDispatch();

     // load selected shop on pressing screen
      useFocusEffect(
        useCallback(() => {    
            dispatch(getShopById({ id }))
        }, [dispatch, id])
      );

    const { loading, currentShop, error } = useSelector(state => state.shop);
     
    
    useEffect(() => {
        if (error) {
            showMessage({
                message: error || 'An error occured',
                type: 'danger'
            })
        }
    }, [error]);
    
    // image accessory states
    const [imageFailed, setImageFailed] = useState(false);
    
    
    
    if (loading) {
        return (
            <View
                style={[styles.container, { flex: 1 }]}
                contentContainerStyle={styles.center}
            >
                <Spinner />
            </View>
        )
    }

    else if (currentShop) {
       
        const { shopName, shopImage } = currentShop;

        // shop image  display handling
        const resolvedShopPic = imageFailed
            ? defaultShopPic :
            shopImage
                ?
                { uri: shopImage }
                : defaultShopPic;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <PageTitle activeMenu="Details" motherMenu='Shops' />
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.card}>
                                <View style={styles.cardBody}>
                                    <View style={styles.cardShadow}>
                                        <View style={[styles.cardBody, styles.center]}>
                                            <Text style={[styles.largeHeading, styles.textSecondary,styles.textCenter]}>{shopName}</Text>
                                            {
                                                currentShop?.clientRating ?
                                                    <View style={styles.rating}>
                                                        <Text style={styles.ratingText}>{currentShop.clientRating}</Text>
                                                        <FontAwesome name='star' size={16} color="#fff" />
                                                    </View>
                                                    
                                                    : <Link href={`/(screens)/MyShopReview/${currentShop.shopId}`}><Text style={[styles.textInfo,styles.textCenter]}>Be the first one to review this shop</Text></Link>
                                                    
                                            }
                                            {
                                                currentShop?.clientRating ?    
                                                    <Link href={`/(screens)/MyShopReview/${currentShop.shopId}`}>
                                                        <Text style={styles.cardBodySubHeading}> Rate and review this shop</Text>
                                                    </Link>
                                                    : ""
                                            }
                                        </View>
                                    </View>
                                    <View style={styles.cardShadow}>
                                        <View style={styles.cardBody}>
                                            <Image
                                                source={resolvedShopPic}
                                                style={styles.shopImage}
                                                resizeMode='cover'
                                                onError={() => {
                                                    // fallback to default picture
                                                    console.log("Image failed — switching to default");
                                                    setImageFailed(true);
                                                    // setcurrentProfilePic("");   // reset local state
                                                }}
                                            />                                 
                                        </View>
                                    </View>
                                    <View style={styles.cardShadow}>
                                        <View style={styles.cardBody}>
                                            <ShopDetailTabs shop={currentShop} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Footer />
                </ScrollView>
                <FloatingBackButton fallback='/(tabs)/Dashboard' />
            </View>
        )
    }
    else {
        return (
            <View style={[styles.container, { flex: 1 }]}>
                <View style={[styles.center, { flex: 1 }]}>
                    <View style={styles.centerAlertContainer}>
                        <View style={[styles.alert, styles.warning]}>
                            <Text style={[styles.alertText, styles.alertTextBold]}>Shop not found !!!  </Text>
                    
                            <Text style={styles.alertText}>Now this shop does not exist</Text>
                           
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}


export default ShopDetails