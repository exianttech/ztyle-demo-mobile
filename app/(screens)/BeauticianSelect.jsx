import { View, Text, ScrollView } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import {useFocusEffect} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SingleBeauticianSelectList from '@/components/SingleBeauticianSelectList';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

import {
    getBeauticiansByShopId
} from '@/store/beautician/beauticianActions'

const BeauticianSelect = () => {
    const dispatch = useDispatch();

    const { mongoShopId, serviceName, servicePrice, shopId, shopName } = useLocalSearchParams();
    
    
    useFocusEffect(
        useCallback(() => { 
            dispatch(getBeauticiansByShopId({ searchData: { shopId } }))
        }, [dispatch, shopId])
    );

    // beautician redux
    const { loading, beauticians, error } = useSelector(state => state.beautician);

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
    else {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <PageTitle activeMenu="Select" motherMenu="Beauticians" />
                    <View style={{ paddingVertical: 16, flex: 1 }}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                {
                                    beauticians?.length ?
                                        beauticians.map((beautician, idx) => (
                                            <SingleBeauticianSelectList
                                                key={idx}
                                                beautician={beautician}
                                                mongoShopId={mongoShopId}
                                                shopId={shopId}
                                                shopName={shopName}
                                                serviceName={serviceName}
                                                servicePrice={servicePrice}
                                            />
                                            
                                        ))
                                        :<Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No beauticians for this shop</Text>
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
    
   
}


export default BeauticianSelect