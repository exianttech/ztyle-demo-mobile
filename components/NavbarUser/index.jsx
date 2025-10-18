import { View, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';

// styles
import styles from '@/styles/componentStyles'

// components
import NavHader from './NavHader';
import Header from './Header';
import UserInfo from './UserInfo';
import Notifications from '@/components/Notification/Notifications';

const index = () => {

    // toggle
    const [showNot, setshowNot] = useState(false);
    const toggleNot = () => setshowNot(prev => !prev);

    return (
        <View>
            <View style={[styles.navBarContainer]}>
                <NavHader />
                <Header toggleNot={toggleNot} />
                <UserInfo />
            </View>

            {/* Dropdown Menu */}
            {
                showNot && (
                    
                    <View
                        style={styles.notDropMenu}    
                    >
                        <Notifications />
                    </View>
                           
                )
            }
        </View>
        
    )
    
}

export default index