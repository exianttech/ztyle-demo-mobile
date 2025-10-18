import { View, Text, Image } from 'react-native';
import React from 'react';

// styles
import styles from '@/styles/componentStyles';


const SingleAchiever = ({achiever}) => {
  return (
      <View style={styles.largeListCardContainer}>
          <View style={styles.largeListCardRow}>
              <Image
                  source={achiever.avatar}
                  style={styles.squareAvatar}
                  resizeMode='cover'
              />
              <View style={styles.listCardContent}>
                  <Text style={[styles.listCardTitle, styles.textSecondaryBeautician]}>{achiever.name}</Text>
                  <Text style={[styles.textGray, { marginBottom: 8 }]}>Monthly Service : {achiever.servicesMonth}</Text>
                  <Text >Reward : {achiever.reward }</Text>
              </View>
          </View>
          <View style={styles.largeListCardRow}>
              <Text style={[styles.textGray, styles.largeListCardDescription]}>{ achiever.description}</Text>
          </View>
          
          
      </View>
      
  )
}

export default SingleAchiever