import React from 'react';
import { Image, Text, View } from 'react-native';

// styles
import styles from '@/styles/styles';

// components
import Rating from '../Rating';

const SingleShop = ({ shop }) => {
  return (
      <View style={styles.largeListCardContainer}>
          <View style={styles.largeListCardRow}>
              <Image
                  source={shop.shopImage}
                  style={styles.squareAvatar}
                  resizeMode='cover'
              />
              <View style={styles.listCardContent}>
                  <Text style={[styles.listCardTitle, styles.textSecondary]}>{shop.shopName}</Text>
                  <Text style={{ marginBottom: 8 }}>{shop.category}</Text>
                  <Rating rating={shop.clientRating} />
              </View>
          </View>
          <View style={styles.largeListCardRow}>
              <Text style={[styles.textGray,styles.largeListCardDescription ]}>{shop.description}</Text>
          </View>
      </View>
    )
}

export default SingleShop