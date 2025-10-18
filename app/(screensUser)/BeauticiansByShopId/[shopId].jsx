import { View, Text,ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

//data
import { beauticiansData } from '@/data/beauticiansData';

// styles
import styles from '@/styles/generalStyles'

// components
import PageTitleUser from '@/components/PageTitleUser';
import SingleBeauticianList from '@/components/SingleBeauticianList';
import FloatingBackButton from '@/components/FloatingBackButton';
import FooterUser from '@/components/FooterUser';

const BeauticiansByShopId = () => {
    const { shopId } = useLocalSearchParams();
    
    // beauticians of given shop 
    const currentBeauticians = beauticiansData.filter(beautician => beautician.shopId === shopId);
    
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <PageTitleUser activeMenu="Selected Shop" motherMenu="Beauticians"/>
                <View style={{ paddingVertical: 16, flex: 1 }}>
                    {
                        currentBeauticians.length ?// replace with redux/ actual data
                            currentBeauticians.map((beautician, idx) => (
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

export default BeauticiansByShopId