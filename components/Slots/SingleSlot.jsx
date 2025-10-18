import { View, Text } from 'react-native'
import React from 'react'

// styles
import styles from '@/styles/componentStyles';

// utils
import getStandardTime from '@/utils/getStandardTime';

const SingleSlot = ({ slot }) => {
    
    const stdStart = getStandardTime(slot.start)
    const stdEnd = getStandardTime(slot.end)
    
    return (
        <View style={styles.grayCard}>
            <View style={{ marginBottom: 8 }}>
                <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Time Slot</Text>
            </View>
            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                <Text style={styles.fieldHeading}>Starting Time </Text>
                <Text style={styles.textSecondary}> : </Text>
                <Text style={styles.fieldText}>{stdStart}</Text>
            </View>
            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                <Text style={styles.fieldHeading}>Ending Time </Text>
                <Text style={styles.textSecondary}> : </Text>
                <Text style={styles.fieldText}>{stdEnd}</Text>
            </View>

        </View>
    )
    
}

export default SingleSlot