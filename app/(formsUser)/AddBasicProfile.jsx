import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useMemo } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RadioGroup from 'react-native-radio-buttons-group';

// styles
import styles from '@/styles/generalStyles';

// components
import PageTitleUser from '@/components/PageTitleUser';
import FloatingBackButton from '@/components/FloatingBackButton';
import DatePickerInput from '@/components/DatePickerInput';
import FooterUser from '@/components/FooterUser';

const AddBasicProfile = () => {

    // error fields
    const [errors, seterrors] = useState({});
    

    // fields
    const [gender, setgender] = useState();
    const [dob, setdob] = useState();

    
    // field accessories
    const [focusField, setfocusField] = useState(null);
    

    // values rendered in radio for gender
    const radioButtonsGender = useMemo(() => ([
        {

            id: "male",
            label: 'Male',
        },
        {
            id: "femmle",
            label: 'Female',
        },
  
    ]), []);

   
    return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView
                style={[{ flex: 1 }, styles.container]}
                contentContainerStyle={{ paddingBottom: 8 }}
                extraScrollHeight={50} // pushes input above keyboard
                enableOnAndroid={true}
            >
                <PageTitleUser activeMenu='User' motherMenu='Profile' />
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.cardShadow}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardBodyHeading}>Please Enter Following Details</Text>
                            </View>
                            <View style={styles.cardBody}>
                                {/* section*/ }
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
                                    />
                                    {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
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
                                    />
                                    {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
                                </View>
                                <View style={styles.formGroup}>
                                    <Text style={[styles.formGroupLabel, styles.textShadow]}>Gender<Text style={styles.textDanger}>*</Text></Text>
                                    <RadioGroup
                                        radioButtons={radioButtonsGender}
                                        onPress={setgender}
                                        selectedId={gender}
                                        layout='row'
                                    />
                                </View>
                                <View style={styles.formGroup}>
                                    <Text style={[styles.formGroupLabel, styles.textShadow]}>Date Of Birth<Text style={styles.textDanger}>*</Text></Text>
                                    <DatePickerInput dob={dob} setdob={setdob} />
                                </View>
                                <View style={styles.formGroup}>
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
                                    {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
                                </View>
                                <View style={styles.formGroup}>
                                    <Text style={[styles.formGroupLabel, styles.textShadow]}>Mobile Number<Text style={styles.textDanger}>*</Text></Text>
                                    <TextInput
                                        placeholder='enter your phone number'
                                        placeholderTextColor="#999"
                                        style={[styles.formGroupTextInput,focusField === 'mobile' && styles.formGroupTextInputFocused]}
                                        keyboardType='phone-pad'
                                        // value={contactNumber}
                                        // onChangeText={setcontactNumber}
                                        onFocus={() => setfocusField('mobile')}
                                        onBlur={() => setfocusField(null)}
                                    />
                                </View>
                                 <View style={styles.formGroup}>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={[styles.buttonLarge, styles.secondary]}>
                                            <Text style={styles.buttonText}>Submit</Text>
                                        </TouchableOpacity>
                                   </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <FooterUser />
            </KeyboardAwareScrollView>
            <FloatingBackButton fallback='/(tabsUser)/Dashboard' />
        </View>
  )
}

export default AddBasicProfile