import { View, ScrollView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

// images
import ztyleSvg from '@/assets/images/ztyle_svg.png'

// styles 
import styles from '@/styles/generalStyles'

// components
import Error from '@/components/Error'

const RegisterUser = () => {

  // field accessories
  const [focusField, setfocusField] = useState(null);
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  

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
            <Text style={styles.subHeading}>Sign up your account</Text>
          </View>
          {/* <Error>Error Text</Error> */}
          
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
                
              />
              {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
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
                
              />
              {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
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
                  autoCapitalize='words'
                  autoCorrect={false}
                  onFocus={() => setfocusField('password')}
                  onBlur={() => setfocusField(null)}
                
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
              {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
            </View>
            {/* Submit section*/ }
            <View style={{ marginVertical: 40 }}>
              <TouchableOpacity style={[styles.buttonLarge, styles.secondary]}>
                <Text style={styles.buttonText}> Sign me up </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textGray}>
              Already have an account?{" "}
              <Link href='/(auth)/LoginUser'>
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