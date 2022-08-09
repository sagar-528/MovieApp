import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../themes/colors';
import {Text} from '../../ui-kit';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: 'pink',flex: 1}}>asdzxczxczxcas</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundShadow,
  },
});
