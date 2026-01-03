import { useLocalSearchParams } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';


// styles
import styles from '@/styles/styles';

// actions
import {
    getBeauticiansByShopId
} from '@/store/beautician/beauticianActions';


// components
import PageTitleUser from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import FloatingBackButton from '@/components/FloatingBackButton';
import SingleBeauticianList from '@/components/SingleBeauticianList';
import FooterUser from '@/components/Footer';

const BeauticiansByShopId = () => {
    const { shopId } = useLocalSearchParams();
    const dispatch = useDispatch();


    // load shops on pressing screen
    useFocusEffect(
        useCallback(() => {
            const searchData = { shopId }
            dispatch(getBeauticiansByShopId({ searchData }))
        }, [dispatch, shopId])
    );
    
    // redux states
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
                    <PageTitleUser activeMenu="Selected Shop" motherMenu="Beauticians" />
                    <View style={{ paddingVertical: 16, flex: 1 }}>
                        {
                            beauticians?.length ?
                                beauticians.map((beautician, idx) => (
                                    <SingleBeauticianList key={idx} beautician={beautician} />
                                ))
                                :
                                <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Beauticians In Shop</Text>
                            
                        }
                    </View>
                    <FooterUser />
                </ScrollView>
                <FloatingBackButton fallback='/(tabsUser)/Dashboard' />
            </View>
        
        )
    }
}

export default BeauticiansByShopId