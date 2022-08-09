import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../themes/colors';

const Splash = props => {
  const navigation = props.navigation;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image
          source={require('../../assets/icons/logo.png')}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundShadow,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
