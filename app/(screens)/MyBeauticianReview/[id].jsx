import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SpinnerWhite from '@/components/SpinnerWhite';
import StarRating from '@/components/StarRating';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

// actions
import {
    getMyBeauticianReview,
    addBeauticianReview,
    editBeauticianReviewById
} from '@/store/review/reviewActions'

const MyBeauticianReview = () => {
    const dispatch = useDispatch();
    const { id } = useLocalSearchParams();

    // auth redux
    const { userInfo } = useSelector(state => state.auth);

    // load profile on pressing screen
    useFocusEffect(
        useCallback(() => {
            dispatch(getMyBeauticianReview({ searchData: { beauticianId: id, userId: userInfo._id } }))
        }, [dispatch, id, userInfo])
    );
    
    // review states
    const { loading, currentBeauticianReview, error, success } = useSelector(state => state.review);
    
    useEffect(() => {
        if (currentBeauticianReview) {
            setRating(currentBeauticianReview.rating)
            setreviewText(currentBeauticianReview.reviewText)
        }
    }, [currentBeauticianReview]);


    // error object for validation
    let errorsObj = { rating: '', reviewText: '' };
    const [errors, setErrors] = useState(errorsObj);

    // field accessories
    const [focusField, setfocusField] = useState(null);
    
    // fields
    const [rating, setRating] = useState('');
    const [reviewText, setreviewText] = useState('');

    const handleSubmit = () => {
        let error = false;
        const errorObj = { ...errorsObj };
        if (rating === '') {
            errorObj.rating = 'Rating is Required';
            error = true;
        }
        if (reviewText === '') {
            errorObj.reviewText = 'Review is Required';
            error = true;
        }
        
        setErrors(errorObj)
        if (error) {
            return
        }
        const reviewData = { userId: userInfo._id, beauticianId: id, rating, reviewText }
         
        if (currentBeauticianReview) {
            dispatch(editBeauticianReviewById({ reviewData, id: currentBeauticianReview._id, }))
        }
        else {
            dispatch(addBeauticianReview({ reviewData}))
        }
    }

     useEffect(() => {
            if (success) {
                showMessage({
                    message: "Your Review Submitted Succefully",
                    type: 'success'
                })
            }
    
            if (error) {
                showMessage({
                    message: error || 'An error occured',
                    type: 'danger'
                })
            }
     }, [error, success]);
    
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

    else if (currentBeauticianReview) {
        
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <PageTitle activeMenu='Rating & Review' motherMenu='Shop' />
                    <View style={{ paddingVertical: 16, flex: 1 }}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <View style={[styles.card, { marginTop: 8 }]}>
                                    <View style={[styles.cardBody, styles.center]}>
                                        <Text style={[styles.largeHeading, styles.textSecondary, styles.textCenter]}>Rating And Review Of Beautician</Text>
                                        <Text style={[styles.textInfo, styles.textCenter]}>You Have Already Submitted A Review To This Beautician. Edit The Review</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <View style={[styles.card, { marginTop: 8 }]}>
                                    <View style={[styles.cardHeader]}>
                                        <Text style={styles.subHeading}>Purpose Of This Review</Text>
                                    </View>
                                    <View style={styles.cardBody}>
                                        <Text style={[styles.textGray, { marginBottom: 16 }]}>We can understand the experience you have obtained from this beautician.</Text>
                                        <Text style={styles.textGray}>This will enable us to improve the service offered to you.</Text>
                                    </View>
                                    <View style={[styles.cardHeader]}>
                                        <Text style={styles.subHeading}>How To Review A Beautician</Text>
                                    </View>
                                    <View style={styles.cardBody}>
                                        <Text style={[styles.textGray, { marginBottom: 16 }]}>share your experience with the services, cleanliness, staff professionalism, and overall atmosphere, providing specific details about what stood out to you.</Text>
                                        <Text style={styles.textGray}>Be honest and constructive in your feedback, mentioning any areas for improvement and whether you'd recommend the salon to others.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.column}>
                                <View style={[styles.card, { marginTop: 8 }]}>
                                    <View style={[styles.cardHeader]}>
                                        <Text style={styles.subHeading}>Please Rate This Beautician </Text>
                                    </View>
                                    <StarRating
                                        rating={rating}
                                        setRating={setRating}
                                        error={errors.rating}
                                    />
                                    <View style={[styles.cardHeader]}>
                                        <Text style={styles.subHeading}>Please Review This Beautician</Text>
                                    </View>
                                    <TextInput
                                        style={[styles.formGroupTextInput, styles.textArea, focusField === 'reviewText' && styles.formGroupTextInputFocused]}
                                        placeholder='write your opinion about this beautician'
                                        placeholderTextColor="#999"
                                        multiline={true}
                                        numberOfLines={5}
                                        onFocus={() => setfocusField('address')}
                                        onBlur={() => setfocusField(null)}
                                        value={reviewText}
                                        onChangeText={setreviewText}
                                    />
                                    {errors.reviewText && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.reviewText}</Text>}
                                    <View style={{ marginVertical: 16 }}>
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity
                                                style={[styles.buttonLarge, styles.secondary, { paddingHorizontal: 24, minWidth: 120 }]}
                                                onPress={handleSubmit}
                                            >
                                                {
                                                    !1 ? // replace with loading
                                                        <SpinnerWhite />
                                                        :
                                                        <Text style={styles.buttonText}>Submit</Text>
                                                }
                                            
                                            
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Footer />
                </ScrollView>
                <FloatingBackButton fallback='/(tabs)/Dashboard' />
            </View>
        )
    }
    else {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <PageTitle activeMenu='Add A Review' motherMenu='Shop' />
                    <View style={{ paddingVertical: 16, flex: 1 }}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <View style={[styles.card, { marginTop: 8 }]}>
                                    <View style={[styles.cardBody, styles.center]}>
                                        <Text style={[styles.largeHeading, styles.textSecondary, styles.textCenter]}>Rating And Review Of Beautician</Text>
                                        <Text style={[styles.textInfo, styles.textCenter]}>You Haven't Submit Any Review To This Beautician. Add A Review</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <View style={[styles.card, { marginTop: 8 }]}>
                                    <View style={[styles.cardHeader]}>
                                        <Text style={styles.subHeading}>Purpose Of This Review</Text>
                                    </View>
                                    <View style={styles.cardBody}>
                                        <Text style={[styles.textGray, { marginBottom: 16 }]}>We can understand the experience you have obtained from this beautician.</Text>
                                        <Text style={styles.textGray}>This will enable us to improve the service offered to you.</Text>
                                    </View>
                                    <View style={[styles.cardHeader]}>
                                        <Text style={styles.subHeading}>How To Review A Beautician</Text>
                                    </View>
                                    <View style={styles.cardBody}>
                                        <Text style={[styles.textGray, { marginBottom: 16 }]}>share your experience with the services, cleanliness, staff professionalism, and overall atmosphere, providing specific details about what stood out to you.</Text>
                                        <Text style={styles.textGray}>Be honest and constructive in your feedback, mentioning any areas for improvement and whether you'd recommend the salon to others.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.column}>
                                <View style={[styles.card, { marginTop: 8 }]}>
                                    <View style={[styles.cardHeader]}>
                                        <Text style={styles.subHeading}>Please Rate This Beautician</Text>
                                    </View>
                                    <StarRating
                                        rating={rating}
                                        setRating={setRating}
                                        error={errors.rating}
                                    />
                                    <View style={[styles.cardHeader]}>
                                        <Text style={styles.subHeading}>Please Review This Beautician</Text>
                                    </View>
                                    <TextInput
                                        style={[styles.formGroupTextInput, styles.textArea, focusField === 'reviewText' && styles.formGroupTextInputFocused]}
                                        placeholder='write your opinion about this beautician'
                                        placeholderTextColor="#999"
                                        multiline={true}
                                        numberOfLines={5}
                                        onFocus={() => setfocusField('address')}
                                        onBlur={() => setfocusField(null)}
                                        value={reviewText}
                                        onChangeText={setreviewText}
                                    />
                                    {errors.reviewText && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.reviewText}</Text>}
                                    <View style={{ marginVertical: 16 }}>
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity
                                                style={[styles.buttonLarge, styles.secondary, { paddingHorizontal: 24, minWidth: 120 }]}
                                                onPress={handleSubmit}
                                            >
                                                {
                                                    !1 ? // replace with loading
                                                        <SpinnerWhite />
                                                        :
                                                        <Text style={styles.buttonText}>Submit</Text>
                                                }
                                            
                                            
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Footer />
                </ScrollView>
                <FloatingBackButton fallback='/(tabs)/Dashboard' />
            </View>
        )
    }
}

export default MyBeauticianReview