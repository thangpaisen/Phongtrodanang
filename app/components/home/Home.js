import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import React, { useState } from 'react'
import NewPost from './newPost/NewPost'
import SharedRoom from './sharedRoom/SharedRoom'
import ManyViews from './manyViews/ManyViews'
import Header from './../common/Header'

const Home = () => {

  const [name, setName] = useState("")

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header title='Tìm phòng trọ' />
      <NewPost />
      <ManyViews />
      <SharedRoom />
    </ScrollView>
  );
};

export default Home;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});