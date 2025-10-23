import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

//data
import { beauticiansData } from '@/data/beauticiansData';

// styles
import styles from '@/styles/styles';

// components
import FloatingBackButton from '@/components/FloatingBackButton';
import FooterUser from '@/components/Footer';
import PageTitleUser from '@/components/PageTitle';
import SingleBeauticianList from '@/components/SingleBeauticianList';

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