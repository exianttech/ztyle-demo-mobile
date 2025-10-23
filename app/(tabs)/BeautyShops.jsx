import React from 'react';
import { ScrollView, Text, View } from 'react-native';

// data
import { shopData } from '@/data/shopData';

// styles
import styles from '@/styles/styles';

// components
import FooterUser from '@/components/Footer';
import PageTitleUser from '@/components/PageTitle';
import SingleShopList from '@/components/SingleShopList';

const BeautyShops = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <PageTitleUser activeMenu="Near Shops" motherMenu=" Shops" />
      
      <View style={{ paddingVertical: 16, flex: 1 }}>
        {
          1 ? // replace with redux/ actual recent shop data
            shopData.map((shop, idx) => (
              <SingleShopList key={idx} shop={shop} />
            ))
            :
            <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Shops To Show</Text>
        }

      </View>
      <FooterUser />
    </ScrollView>
  )
}

export default BeautyShops