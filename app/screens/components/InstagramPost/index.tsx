// react
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// components
import AvatarButton from 'components/AvatarButton';
import IconButton from 'components/IconButton';
import IconButtonOnPressAnimation from 'components/IconButtonOnPressAnimation';
// assets
import Styles from 'assets/styles/styles';

const InstagramPost: React.FC = ({username, caption, media_url}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <AvatarButton size="sm" />
          <Text style={styles.username}>{username}</Text>
        </View>
        <IconButton name="dots-vertical" />
      </View>
      <Image
        source={{uri: media_url}}
        style={[Styles.fullScreen, styles.mediaContainer]}
        resizeMode="cover"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSection}>
          <IconButtonOnPressAnimation
            nameArr={['hearto', 'heart']}
            style={styles.iconButton}
          />
          <IconButton name="comment" style={styles.iconButton} />
          <IconButton name="send" />
        </View>
        <IconButtonOnPressAnimation nameArr={['bookmark', 'bookmark-alt']} />
      </View>
    </View>
  );
};

export default InstagramPost;

const styles = StyleSheet.create({
  container: {marginBottom: 15},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0,
  },

  username: {fontWeight: 'bold', marginLeft: 15},
  mediaContainer: {height: 300, marginVertical: 10},
  buttonSection: {flexDirection: 'row'},
  buttonContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  iconButton: {marginRight: 15},
});
