import {ScrollView, View, Text } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SingleMenuList from '@/components/SingleMenuList';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

// actions
import {
    getShopById,
    getShopMenu
} from '@/store/shop/shopActions'


const ShopMenu = () => {
    const { id } = useLocalSearchParams();
    const dispatch = useDispatch();

    // load selected shop and menu on pressing screen
    useFocusEffect(
        useCallback(() => { 
            dispatch(getShopById({ id }))
            dispatch(getShopMenu({ searchData: { id } }))
        }, [dispatch, id])
    );


    // redux states
    const { loading, menuLoading, menu, currentShop, error } = useSelector(state => state.shop);
    

    useEffect(() => {
        if (error) {
            showMessage({
                message: error || 'An error occured',
                type: 'danger'
            })   
        }
    }, [error]);
    
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

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <PageTitle activeMenu="Select Service" motherMenu="Menu" />
                    <View style={{ paddingVertical: 16, flex: 1 }}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <View style={styles.card}>
                                    <Text style={[styles.largeHeading, styles.textSecondary, styles.textCenter]}>{currentShop.shopName}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                {
                                    menuLoading ? (
                                        <Spinner/>
                                    ) :
                                        menu.length > 0 ?(
                                            menu.map((item, idx) => (
                                                <SingleMenuList
                                                    key={idx}
                                                    item={item}
                                                    shopId={currentShop.shopId}
                                                    shopName={currentShop.shopName}
                                                />
                                            ))) :
                                            <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No services for this shop</Text>
                                }
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

export default ShopMenu