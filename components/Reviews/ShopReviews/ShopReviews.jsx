import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// styles
import styles from '@/styles/styles';

// components
import Spinner from '@/components/Spinner';
import SingleReview from './SingleReview';

// actions
import { getShopReviews } from '@/store/review/reviewActions';


const ShopReviews = () => {
    const dispatch = useDispatch();

    // shop redux
    const { currentShop } = useSelector(state => state.shop);
    
    // get reviews
    useEffect(() => {
		if (currentShop) {
			const id = currentShop.shopId;
			dispatch(getShopReviews({ id }))
    }
    }, [currentShop, dispatch]);

    const { loading, shopReviews } = useSelector(state => state.review);
    
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
                currentShop ?
                shopReviews?    
                    shopReviews.map((review, idx) => (
                        <SingleReview key={idx} review={review} />
                    ))
                    :
                    <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Reviews Till Now</Text>
                    : <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No shop exists for this shop Id.</Text>
            }

        </View>
    )
}

export default ShopReviews