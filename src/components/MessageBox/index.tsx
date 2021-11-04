import React from 'react';
import { View, Text } from 'react-native';
import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

export function MessageBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Mensagem - texto
      </Text>

      <View style={styles.footer}>
        <UserPhoto imageUri={'https://github.com/anaventura1811.png'}sizes="SMALL"/>

        <Text style={styles.userName}>
          Username
        </Text>
      </View>
    </View>
  );
}
