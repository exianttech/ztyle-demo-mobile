import { View, Text } from 'react-native'
import React from 'react'

// styles
import styles from '@/styles/componentStyles';

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