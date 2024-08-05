import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Principal() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo à Tela Principal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
