import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import Logo from '../../assets/logo.svg';
import { UserPhoto} from '../UserPhoto';

export function Header() {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.logoutButton}>
        <UserPhoto imageUri={'https://github.com/anaventura1811.png'} />
        <TouchableOpacity>
          <Text style={styles.logoutText}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
