import { View, Text } from 'react-native'
import React from 'react'

// styles 
import styles from '@/styles/componentStyles';

const PageTitleUser = ({ activeMenu, motherMenu }) => {
    return (
        <View style={styles.pageTitleContainer}>
            <Text style={styles.motherMenuUser}>{motherMenu}</Text>
            <Text style={styles.menuSeparator}>/</Text>
            <Text style={styles.activeMenu}>{activeMenu}</Text> 
        </View>
    )
}

export default PageTitleUser