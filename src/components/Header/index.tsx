import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>
        Sair
      </Text>
    </View>
  )
}
