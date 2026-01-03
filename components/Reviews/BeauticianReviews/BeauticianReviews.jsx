import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// styles
import styles from '@/styles/styles';

// components
import Spinner from '@/components/Spinner';
import SingleReview from './SingleReview';

// actions
import { getBeauticianReviews } from '@/store/review/reviewActions';



const BeauticianReviews = () => {
    const dispatch = useDispatch();

    // beautician redux
    const { currentBeautician } = useSelector(state => state.beautician);
    
    // get reviews
    useEffect(() => {
        if (currentBeautician) {
            const id = currentBeautician._id;
                dispatch(getBeauticianReviews({ id }))
        }
    }, [currentBeautician, dispatch]);
    
    const { loading, beauticianReviews } = useSelector(state => state.review);

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

    return (
        <View
            style={{ paddingVertical: 16 }}
        >
            {
                currentBeautician ?
                    beauticianReviews ?
                        beauticianReviews.map((review, idx) => (
                            <SingleReview key={idx} review={review} />
                        ))
                    :
                        <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Reviews Till Now</Text>
                    : <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No beautician exists for this shop Id. </Text>
                
            }
        </View>
    )
}

export default BeauticianReviews