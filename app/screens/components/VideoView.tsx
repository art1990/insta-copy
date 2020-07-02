// react
import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
// components
import DarkBgContainer from '../../components/DarkBgContainer';
// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// video
import Video from 'react-native-video';
// assets
import Styles from 'assets/styles/styles';
// colors
import {Colors} from 'assets/styles/constants';

const VideoView: React.FC<{media_url: string}> = ({media_url}) => {
  const [isSound, setIsSound] = useState(false);

  const toggleSound = () => {
    setIsSound((prev) => !prev);
  };

  const volume = isSound ? 1 : 0;
  const soundIconName = `volume-${isSound ? 'high' : 'off'}`;

  return (
    <TouchableWithoutFeedback onPress={toggleSound}>
      <View style={styles.container}>
        <DarkBgContainer style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={soundIconName}
            style={styles.icon}
            size={18}
          />
        </DarkBgContainer>
        <Video
          source={{uri: media_url}}
          style={[Styles.fullScreen, styles.mediaContainer]}
          paused={false}
          repeat={true}
          resizeMode="cover"
          volume={volume}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoView;

const styles = StyleSheet.create({
  container: {position: 'relative'},
  mediaContainer: {height: '100%'},
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    zIndex: 999,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 100,
  },
  icon: {
    color: Colors.WHITE,
  },
});
