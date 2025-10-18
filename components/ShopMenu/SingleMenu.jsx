import { View, Text } from 'react-native'
import React from 'react'

// styles
import styles from '@/styles/componentStyles';


const SingleMenu = ({ item }) => {

    return (
        <View style={styles.grayCard}>
            <View style={{ marginBottom: 8 }}>
                <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Menu Item</Text>
            </View>
            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                <Text style={styles.fieldHeading}>Service </Text>
                <Text style={styles.textSecondary}> : </Text>
                <Text style={styles.fieldText}>{item.name}</Text>
            </View>
             <View style={[styles.serialRow, { marginBottom: 8 }]}>
                <Text style={styles.fieldHeading}>Price </Text>
                <Text style={styles.textSecondary}> : </Text>
                <Text style={styles.fieldText}>{'\u20B9'} {item.price}</Text>
            </View>

        </View>
    )
}

export default SingleMenu