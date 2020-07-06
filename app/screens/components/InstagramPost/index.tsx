// react
import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
// components
import AvatarButton from 'components/AvatarButton';
import IconButton from 'components/IconButton';
import IconButtonOnPressAnimation from 'components/IconButtonOnPressAnimation';
import Media from './Media';
// modal
import Modal from 'react-native-modal';
// navigation
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'navigation/routes';
// assets
import {Colors} from 'assets/styles/constants';
// utils
import {formatToHumanReadable} from '../../../utils/date';

export interface IInstagramPostProps {
  username: string;
  id: string;
  caption: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CARUSEL_ALBUM';
  timestamp: string;
  children: {data: string[]};
}

const InstagramPost: React.FC<IInstagramPostProps> = ({
  username,
  caption,
  timestamp,
  children,
  ...rest
}) => {
  const mediaList = useMemo(
    () => children && children.data.map((el: any) => el.media_url),
    [children],
  );

  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  const toComment = () => {
    navigation.navigate(Routes.COMMENT);
  };

  const showModal = () => {
    setIsVisible(true);
  };

  const hiddenModal = () => {
    setIsVisible(false);
  };

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = require('react-native-extra-dimensions-android').get(
    'REAL_WINDOW_HEIGHT',
  );

  return (
    <View style={styles.container}>
      <Modal
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        onBackdropPress={hiddenModal}
        isVisible={isVisible}>
        <View style={styles.modalContainer}>
          {[
            'Report...',
            'Turn On Post Notifications',
            'Copy Link',
            'Share to...',
            'Unfollow',
            'Mute',
          ].map((el) => (
            <Text style={styles.modalText} key={el}>
              {el}
            </Text>
          ))}
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <AvatarButton size="sm" style={styles.iconButton} />
          <Text style={styles.username}>{username}</Text>
        </View>
        <IconButton name="dots-vertical" onPress={showModal} />
      </View>
      <Media mediaList={mediaList} children={children} {...rest} />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSection}>
          <IconButtonOnPressAnimation
            nameArr={['hearto', 'heart']}
            style={styles.iconButton}
          />
          <IconButton
            name="comment"
            style={styles.iconButton}
            onPress={toComment}
          />
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
  container: {marginBottom: 15, paddingHorizontal: 15},
  modalContainer: {
    backgroundColor: Colors.WHITE,
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  modalText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingRight: 30,
  },
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
    fontSize: 10,
  },
});
