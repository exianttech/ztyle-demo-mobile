import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';


// images
import ztyleSvg from '@/assets/images/ztyle_svg.png';

// styles 
import styles from '@/styles/styles';

// components
import Error from '@/components/Error';
import EmailValidator from '@/components/EmailValidator';
import Spinner from '@/components/SpinnerWhite';

// actions
import { registerUser } from '@/store/auth/authActions';


const RegisterUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // redux states
  const { loading, userInfo, error, success } = useSelector(state => state.auth);


  // field accessories
  const [focusField, setfocusField] = useState(null);
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  
  // fields
  const [fullName, setfullName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  // error field for validation
  let errorsObj = { fullName: '', email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  
  const handleRegister = () => {
    // front end validation
    let error = false;
    const errorObj = { ...errorsObj };

    if (fullName === '') {
      errorObj.fullName = "Full name is required";
      error =true
    }
    if (email === '') {
      errorObj.email = "email is required";
      error =true
    }
    if (password === '') {
      errorObj.password = "Password is required";
      error =true
    }
    if (email && !EmailValidator(email)) {
      errorObj.email = "Invalid email format";
      error =true
    }

    setErrors(errorObj)
    if (error) {
      return;
    }

    const data = { fullName, email, password };
    dispatch(registerUser(data))
    
  }

  useEffect(() => {
    if (userInfo) {
      showMessage({
        message: "User Exists Already",
        type: 'info'
      })
      router.push('/(tabs)/Dashboard');
    }

    if (success && !error) {
      showMessage({
        message: "Registration Success",
        type: 'success'
      })
      router.push('/(auth)/RegisterSuccessNext')
    }
    
  }, [error, router, success, userInfo]);
  

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <ScrollView
        contentContainerStyle={[{ flex: 1 }, styles.container, styles.center, styles.authBackground, { paddingHorizontal: 14 }]}
      >
        <View style={[styles.authContent, styles.whiteBackground, styles.shadow]}>
          <View style={styles.center}>
            <Image
              source={ztyleSvg}
              style={styles.authBgImage}
            />
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={[styles.subHeading, styles.textCenter, { color: '#777' }, styles.textShadow]}>Sign up your account</Text>
              <View style={styles.line} />
            </View>
            
          </View>
          <Error>{ error}</Error>
          
          <View style={styles.authFormContainer}>
            <View style={styles.formGroup}>
              <Text style={[styles.formGroupLabel, styles.textShadow]}>Full Name </Text>
              <TextInput
                style={[styles.formGroupTextInput, focusField === 'fullName' && styles.formGroupTextInputFocused]}
                placeholder='Your Full Name'
                placeholderTextColor='gray'
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
              <Text style={[styles.formGroupLabel, styles.textShadow]}>Email </Text>
              <TextInput
                style={[styles.formGroupTextInput, focusField === 'email' && styles.formGroupTextInputFocused]}
                placeholder='hello@example.com'
                placeholderTextColor='gray'
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
                onFocus={() => setfocusField('email')}
                onBlur={() => setfocusField(null)}
                value={email}
                onChangeText={setemail}  
              />
              {errors.email && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.email}</Text>}
            </View>
            <View style={styles.formGroup}>
              <Text style={[styles.formGroupLabel, styles.textShadow]}>Password </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.formGroupTextInput,
                    focusField === 'password' && styles.formGroupTextInputFocused,
                    styles.inputWithIcon
                  ]}
                  placeholder='**************'
                  placeholderTextColor='gray'
                  secureTextEntry={!isPasswordVisible}
                  autoCapitalize='none'
                  autoCorrect={false}
                  onFocus={() => setfocusField('password')}
                  onBlur={() => setfocusField(null)}
                  value={password}
                  onChangeText={setpassword}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => setisPasswordVisible(!isPasswordVisible)}
                >
                  <FontAwesome
                    name={isPasswordVisible ? 'eye' : 'eye-slash'}
                    size={18}
                    color='#969ba0'
                  />
                </TouchableOpacity>
              </View>
              {errors.password && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.password}</Text>}
            </View>
            {/* Submit section*/ }
            <View style={{ marginVertical: 40 }}>
              <TouchableOpacity
                style={[styles.buttonLarge, styles.secondary]}
                activeOpacity={0.8}
                onPress={handleRegister}
              >
                {
                  loading ?
                    <Spinner /> :
                    <Text style={styles.buttonText}>
                      Sign me up
                    </Text>
                }
                
              </TouchableOpacity>
            </View>
            <Text style={styles.textGray}>
              Already have an account?{" "}
              <Link href='/(auth)/Login'>
                <Text style={styles.textSecondary}> Log in</Text>
              </Link>
            </Text>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}


export default RegisterUser