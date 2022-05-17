import {StyleSheet, Text} from 'react-native';
import React from 'react';

import {ScreenWrapper} from '../components';
import {useTypedSelector} from '../state';

const Chats = () => {
  const comments = useTypedSelector(state => state.comments);
  console.log(comments);

  return (
    <ScreenWrapper>
      <Text>Chats</Text>
    </ScreenWrapper>
  );
};

export default Chats;

const styles = StyleSheet.create({});
