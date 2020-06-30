// react
import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
// components
import AvatarButton from 'components/AvatarButton';

interface IStoryFeedProps {
  storyArr: any[];
}

const StoryFeed: React.FC<IStoryFeedProps> = ({storyArr}) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storyArr.map((el, i) => (
          <View key={i} style={styles.avatarContainer}>
            <AvatarButton onPress={() => {}} source={el} withBorder />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default StoryFeed;

const styles = StyleSheet.create({
  avatarContainer: {
    margin: 10,
  },
});
