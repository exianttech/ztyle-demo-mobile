import { View, Text, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

// style
import styles from '@/styles/componentStyles';


const FooterUser = () => {
  var d = new Date();
  
  return (
    <View style={styles.footerContainer}>
      <View style={styles.copyright}>
        <Text
        >
          Copyright © {d.getFullYear()} Designed &amp; Developed by{" "} 
          
        </Text>
        <Text
          style={styles.copyrightComp}
          onPress={()=>Linking.openURL('http://exianttech.com/')}
        >
          Exiant Tech Private Limited
        </Text>  
        <Text>
          

        </Text>  

      </View>
      <View style={styles.footerLinkContainer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            <Link href='/'>privacy policy
            </Link>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            <Link href='/'>terms of use
            </Link>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            <Link href='/'>refund policy
            </Link>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            <Link href='/'>contact
            </Link>
          </Text>
        </TouchableOpacity>

      </View>
    </View>
    
  )
}

export default FooterUser