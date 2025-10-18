import { View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

// styles
import styles from '@/styles/componentStyles';


const Rating = ({ rating = 0, size = 16, color = "#FFBC39" }) => {
    return (
        <View style={styles.startRow}>
            {[...Array(5)].map((_, idx) => {
                const current = idx + 1
                return (
                    <FontAwesome
                        key={idx}
                        name='star'
                        size={size}
                        style={styles.star}
                        color={current <= rating ? color : '#ccc'}
                    />
                )
            })}
        </View>
    )
}

export default Rating