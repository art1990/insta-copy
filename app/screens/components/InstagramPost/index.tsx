// react
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// components
import AvatarButton from 'components/AvatarButton';
import IconButton from 'components/IconButton';
import IconButtonOnPressAnimation from 'components/IconButtonOnPressAnimation';
// assets
import Styles from 'assets/styles/styles';
import {Colors} from 'assets/styles/constants';
// utils
import {formatToHumanReadable} from '../../../utils/date';

interface IInstagramPostProps {
  username: string;
  id: string;
  caption: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CARUSEL_ALBUM';
  timestamp: any;
}

const InstagramPost: React.FC<IInstagramPostProps> = ({
  username,
  caption,
  media_url,
  timestamp,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <AvatarButton size="sm" style={styles.iconButton} />
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
      <View style={styles.captionSection}>
        <Text style={styles.username}>{username}</Text>
        <Text>{caption}</Text>
      </View>
      <Text style={styles.timestamp}>{formatToHumanReadable(timestamp)}</Text>
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

  username: {fontWeight: 'bold', marginRight: 15},
  mediaContainer: {height: 300, marginTop: 10},
  buttonSection: {flexDirection: 'row'},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  iconButton: {marginRight: 15},
  captionSection: {
    flexDirection: 'row',
  },
  timestamp: {
    color: Colors.TEXT_GREY,
    fontSize: 12,
  },
});
