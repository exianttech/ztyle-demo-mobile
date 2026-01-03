import { ScrollView, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';

// components
import PageTitleUser from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SingleShopList from '@/components/SingleShopList';
import FooterUser from '@/components/Footer';

// actions
import { getShops } from '@/store/shop/shopActions';



const BeautyShops = () => {
  const dispatch = useDispatch();

  // load shops on pressing screen
  useFocusEffect(
    useCallback(() => {    
      dispatch(getShops())
    }, [dispatch])
  );

  // shop redux
  const { loading, shops, error } = useSelector(state => state.shop);

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
  
  else if (shops) {
  
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <PageTitleUser activeMenu="Near Shops" motherMenu=" Shops" />
      
        <View style={{ paddingVertical: 16, flex: 1 }}>
          {
            shops ?
              shops.map((shop, idx) => (
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
}

export default BeautyShops