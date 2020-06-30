// react
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
// components
import InstagramPost from '../components/InstagramPost/index';
import StoryFeed from './StoryFeed';
// hooks
import useFetchData from 'hooks/useFetchData';
// api
import {getAll} from 'utils/services/api/post';
// colors
import {Colors} from 'assets/styles/constants';

const a1 = require('assets/img/fake/a1.jpg');
const a2 = require('assets/img/fake/a2.jpg');

const storyArr = [a1, a2, a1, a2, a1, a2, a1, a2];

const Home: React.FC = () => {
  const {resource} = useFetchData({api: getAll});
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <StoryFeed storyArr={storyArr} />
          {resource &&
            resource?.map((postData: any) => (
              <InstagramPost {...postData} key={postData.id} />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, backgroundColor: Colors.WHITE},
});
