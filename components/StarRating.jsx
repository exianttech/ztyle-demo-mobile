import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';

// styles
import styles from '@/styles/styles';

const StarRating = ({ rating, setRating, error }) => {

    const totalStars = 5;
    const [hover, setHover] = useState(0);
    
    return (
        <View>
            <View style={styles.ratingContainer}>
                {[...Array(totalStars)].map((_, idx) => {
                    const currentRating = idx + 1;
                    return (
                        <Pressable
                            key={idx}
                            onPress={() => setRating(currentRating)}
                            onPressIn={() => setHover(currentRating)}
                            onPressOut={() => setHover(0)}
                        >
                            <Text
                                style={[
                                    styles.rateStar,
                                    {
                                        color:
                                            currentRating <= (hover || rating)
                                                ? "#ffc107"
                                                : "#e4e5e9",
                                    },
                                ]}
                            >
                                ★
                            </Text>
                        </Pressable>
                    );

                })}
            </View>
            {error ? <Text style={[styles.textDanger, { fontSize: 12 }]}>{error}</Text> : null}
        </View>
    )
    
}

export default StarRating