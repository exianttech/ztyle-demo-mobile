import React from 'react';
import { View } from 'react-native';

// styles
import styles from '@/styles/styles';

// components
import SingleMenu from './SingleMenu';

const ShopMenu = ({ menu }) => {
    

    return (
        <View style={styles.grayCardContainer}>
            {
                menu && menu.map((item, idx) => (
                    <SingleMenu key={idx} item={item} />
                ))
            }
            
        </View>
    )
}

export default ShopMenu