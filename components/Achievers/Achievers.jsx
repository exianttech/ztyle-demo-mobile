import { View, Text } from 'react-native'
import React from 'react'

// data
import { achieversData } from '@/data/achieversData';

// styles
import styles from '@/styles/componentStyles';

// components
import SingleAchiever from './SingleAchiever';


const Achievers = () => {
    return (
        <View
            style={{ paddingVertical: 16 }}
        >
            {
                1 ? // replace with redux/backend 
                    achieversData.map((achiever, idx) => (
                        <SingleAchiever key={idx} achiever={achiever} />
                    ))
                    :
                    <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Achievers Recently</Text>

            }
        </View>
    )
}


export default Achievers