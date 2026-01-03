import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RadioGroup from 'react-native-radio-buttons-group';
import { useRouter, Link } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/SpinnerWhite';
import DatePickerInput from '@/components/DatePickerInput';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';


// actions
import {
    getProfile,
    updateProfile
} from '@/store/profile/profileActions';


const EditBasicProfile = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // auth redux states
    const { userInfo } = useSelector(state => state.auth);
    
    // access user profile
    useEffect(() => {
        if (userInfo?.email) {
            dispatch(getProfile({ email: userInfo.email }));
        }
        
    }, [dispatch, userInfo]);
    
    // profile redux states
    const { loading, profile, error, success } = useSelector(state => state.profile);

    // console.log(loading, profile, error, success);
    
    // error object for validation
    let errorsObj = { fullName: '', email: '', gender: '', dob: '', mobile: '' };
    const [errors, seterrors] = useState({ errorsObj });

 
    // fields
    const [id, setid] = useState('');
    const [fullName, setfullName] = useState('');
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('');
    // const [address, setaddress] = useState('');
    const [mobile, setmobile] = useState('');

    // set user details
    useEffect(() => {
        if (userInfo) {
            setfullName(userInfo.fullName)
            setemail(userInfo.email)
        }
    }, [userInfo]);

    // set profile details
    useEffect(() => {
        if (profile) {
            setid(profile._id)
            setgender(profile.gender)
            setdob(profile.dob.split('T')[0])
            setmobile(profile.mobile)
        }
    }, [profile]);
    

    // field accessories
    const [focusField, setfocusField] = useState(null);
    

    // values rendered in radio for gender
    const baseradioButtonsGender = useMemo(() => ([
        {

            id: "male",
            label: 'Male',
        },
        {
            id: "female",
            label: 'Female',
        },

    ]), []);

    // derive active/inactive styles based on selected gender
    const radioButtonsGender = useMemo(() => (
        baseradioButtonsGender.map((btn) => ({
            ...btn,
            color: btn.id === gender ? 'black' : '#999',
            labelStyle: {
                color: btn.id === gender ? 'black' : '#999',
                fontWeight: btn.id === gender ? 'bold' : '#999'
            }
        }))
    ), [gender]);

    const handleSubmit = () => {
        let error = false;
        const errorObj = { ...errorsObj };
        
         if (fullName === '') {
              errorObj.fullName = 'Your Full Name is Required';
              error = true;
          }
          if (email === '') {
            errorObj.email = 'email Id is Required';
            error = true;
          }
          if (gender === '') {
            errorObj.gender = 'Gender is Required';
            error = true;
          }
          if (dob === '') {
            errorObj.dob = 'Date of Birth is Required';
            error = true;
          }
          if (mobile === '') {
            errorObj.mobile = 'Mobile Number is Required';
            error = true;
          }
         
        seterrors(errorObj);

        if (error) {
            return
        }
    
        const profileData = { id, fullName, email, gender, dob, mobile };
        dispatch(updateProfile({ profileData }));


    }

    useEffect(() => {
        if (success) {
            showMessage({
                message: "Profile Edited Successfuly",
                type: 'info'
            })
            router.push('/(screens)/UserProfile')
        }

        if (error) {
            showMessage({
                message: error || 'An error occured',
                type: 'danger'
            })
        }
    }, [error, router, success]);
    
    if (!userInfo) {
        return (
            <View
                style={[styles.container, { flex: 1 }]}
                contentContainerStyle={styles.center}
            >
                <Spinner />
            </View>
        )
    }


    else if (profile) {
        
        return (
            <View style={{ flex: 1 }}>
                <KeyboardAwareScrollView
                    style={[{ flex: 1 }, styles.container]}
                    contentContainerStyle={{ paddingBottom: 8 }}
                    extraScrollHeight={50} // pushes input above keyboard
                    enableOnAndroid={true}
                >
                    <PageTitle activeMenu='User' motherMenu='Profile' />
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.cardShadow}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardBodyHeading}>Please Enter Following Details</Text>
                                </View>
                                <View style={styles.cardBody}>
                                    {/* section*/}
                                    <View style={{ marginBottom: 8 }}>
                                        <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Personal Information </Text>
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Full Name <Text style={styles.textDanger}>*</Text></Text>
                                        <TextInput
                                            style={[styles.formGroupTextInput, focusField === 'fullName' && styles.formGroupTextInputFocused]}
                                            placeholder='Enter your Full Name..'
                                            placeholderTextColor="#999"
                                            autoCapitalize='words'
                                            autoCorrect={false}
                                            onFocus={() => setfocusField('fullName')}
                                            onBlur={() => setfocusField(null)}
                                            value={fullName}
                                            onChangeText={setfullName}
                                        />
                                        {errors.fullName && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.fullName}</Text>}
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={[styles.formGroupLabel, styles.textShadow]}>email Id<Text style={styles.textDanger}>*</Text></Text>
                                        <TextInput
                                            style={[styles.formGroupTextInput, focusField === 'email' && styles.formGroupTextInputFocused]}
                                            placeholder='Enter a Valid email Id..'
                                            placeholderTextColor="#999"
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            keyboardType='email-address'
                                            onFocus={() => setfocusField('email')}
                                            onBlur={() => setfocusField(null)}
                                            value={email}
                                            onChangeText={setemail}
                                        />
                                        {errors.email && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.email}</Text>}
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Gender<Text style={styles.textDanger}>*</Text></Text>
                                        <RadioGroup
                                            radioButtons={radioButtonsGender}
                                            onPress={setgender}
                                            selectedId={gender}
                                            layout='row'
                                        />
                                        {errors.gender && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.gender}</Text>}
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Date Of Birth<Text style={styles.textDanger}>*</Text></Text>
                                        <DatePickerInput
                                            value={dob}
                                            onChange={setdob}
                                            maxDate={new Date()}
                                        />
                                        {errors.dob && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.dob}</Text>}
                                    </View>
                                    {/* refer here for address collection*/}

                                    {/* <View style={styles.formGroup}>
                                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Residential Address<Text style={styles.textDanger}>*</Text></Text>
                                        <TextInput
                                            style={[styles.formGroupTextInput, styles.textArea, focusField === 'address' && styles.formGroupTextInputFocused]}
                                            placeholder='Enter Your Permanent Address'
                                            placeholderTextColor="#999"
                                            multiline={true}
                                            numberOfLines={5}
                                            onFocus={() => setfocusField('address')}
                                            onBlur={() => setfocusField(null)}
                                        />
                                        <Text style={[styles.textDanger,{fontSize:12}]}>error</Text>
                                    </View> */}
                                    <View style={styles.formGroup}>
                                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Mobile Number<Text style={styles.textDanger}>*</Text></Text>
                                        <TextInput
                                            placeholder='enter your phone number'
                                            placeholderTextColor="#999"
                                            style={[styles.formGroupTextInput, focusField === 'mobile' && styles.formGroupTextInputFocused]}
                                            keyboardType='phone-pad'
                                            onFocus={() => setfocusField('mobile')}
                                            onBlur={() => setfocusField(null)}
                                            value={mobile}
                                            onChangeText={setmobile}
                                        />
                                        {errors.mobile && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.mobile}</Text>}
                                    </View>
                                    <View style={styles.formGroup}>
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity
                                                style={[styles.buttonLarge, styles.secondary, { paddingHorizontal: 24, minWidth: 120 }]}
                                                onPress={handleSubmit}
                                            >
                                                {
                                                    loading ?
                                                        <Spinner />
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
                </KeyboardAwareScrollView>
                <FloatingBackButton fallback='/(tabsUser)/Dashboard' />
            </View>
        )
    }
    else {
        return (
            <View style={[styles.container, { flex: 1 }]}>
                <View style={[styles.center, { flex: 1 }]}>
                    <View style={styles.centerAlertContainer}>
                        <View style={[styles.alert, styles.warning]}>
                            <Text style={[styles.alertText, styles.alertTextBold]}>profile does not exist !!!  </Text>
                                <Link href='/(forms)/AddBasicProfile' >
                                <Text style={styles.alertText}>please add a new profile </Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
                
        )
    }
}

export default EditBasicProfile