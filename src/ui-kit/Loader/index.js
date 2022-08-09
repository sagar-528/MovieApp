import React from 'react';
import {View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../../themes';

export function Loader(props) {
  return (
    <Modal transparent={true} visible={props.visible} animationType="none">
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.lightgreen} />
        <Text style={{color: colors.text, fontSize: 18, marginTop: 10}}>
          Loading...
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#rgba(0,0,0,0.2)',
  },
});
