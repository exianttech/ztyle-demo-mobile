import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams,Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

// data
import { shopData } from '@/data/shopData';

// styles
import styles from '@/styles/generalStyles';

// components
import PageTitleUser from '@/components/PageTitleUser';
import ShopDetailTabs from '@/components/ShopDetailTabs';
import FloatingBackButton from '@/components/FloatingBackButton';
import FooterUser from '@/components/FooterUser';

const ShopDetails = () => {
    const { id } = useLocalSearchParams()
    
    const currentShop = shopData.find(shop => shop._id === id)
    const { shopName, shopImage } = currentShop;
    

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <PageTitleUser activeMenu="Details" motherMenu='Shops' />
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.card}>
                            <View style={styles.cardBody}>
                                <View style={styles.cardShadow}>
                                    <View style={[styles.cardBody, styles.center]}>
                                        <Text style={[styles.largeHeading, styles.textSecondary,styles.textCenter]}>{shopName}</Text>
                                        {
                                            currentShop.clientRating ?
                                                <View style={styles.rating}>
                                                    <Text style={styles.ratingText}>{currentShop.clientRating}</Text>
                                                    <FontAwesome name='star' size={16} color="#fff" />
                                                </View>
                                                
                                                : <Link href='/'><Text style={[styles.textInfo,styles.textCenter]}>Be the first one to review this shop</Text></Link>
                                                
                                        }
                                        {
                                            currentShop.clientRating ? 
                                                <Link href='/'>
                                                    <Text style={styles.cardBodySubHeading}> Rate and review this shop</Text>
                                                </Link>
                                                : ""
                                        }
                                    </View>
                                </View>
                                <View style={styles.cardShadow}>
                                    <View style={styles.cardBody}>
                                        <Image
                                            source={shopImage}
                                            style={styles.shopImage}
                                            resizeMode='cover'
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
                <FooterUser />
            </ScrollView>
            <FloatingBackButton fallback='/(tabsUser)/Dashboard' />
        </View>
    )
}


export default ShopDetails