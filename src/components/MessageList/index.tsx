import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { MessageBox } from '../MessageBox';

export function MessageList() {
  return (
    <ScrollView
      contentContainerStyle={styles.content}keyboardShouldPersistTaps="never"
    >
      <MessageBox />
      <MessageBox />
    </ScrollView>
  )
}
