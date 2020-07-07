// react
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
// components
import AvatarButton from 'components/AvatarButton';
// assets
import Styles from 'assets/styles/styles';

interface IStoryFeedProps {
  storyArr: any[];
}

const StoryFeed: React.FC<IStoryFeedProps> = ({ storyArr }) => {
  return (
    <View style={[Styles.fullScreen, styles.container]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storyArr.map((el, i) => (
          <View key={i} style={styles.avatarContainer}>
            <AvatarButton
              onPress={() => {}}
              source={el}
              withBorder
              username="Profile name"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default StoryFeed;

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    borderBottomColor: 'rgba(0,0,0, 0.2)',
    borderBottomWidth: 0.2,
    marginBottom: 10,
  },
  avatarContainer: {
    margin: 10,
  },
});
