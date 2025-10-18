import { View, Text } from 'react-native'
import React from 'react'

// styles
import styles from '@/styles/componentStyles';

// components
import SingleSlot from './SingleSlot';


const Slots = ({ slots }) => {
    
    return (
        <View style={styles.grayCardContainer}>
            {
                slots && slots.map((slot, idx) => (
                    <SingleSlot key={idx} slot={slot} />
                ))
            }
        </View>
    )
}

export default Slots