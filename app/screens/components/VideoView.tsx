// react
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text} from 'react-native';
// components
import DarkBgContainer from '../../components/DarkBgContainer';
// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// video
import Video from 'react-native-video';
// utils
import {formatToTimer} from 'utils/date';
// assets
import Styles from 'assets/styles/styles';
// colors
import {Colors} from 'assets/styles/constants';

let timer: number | null = null;

const VideoView: React.FC<{media_url: string}> = ({media_url}) => {
  const [isSound, setIsSound] = useState(false);
  const [isSoundIconVisible, setIsSoundIconVisible] = useState(false);
  const [restTime, setRestTime] = useState<string | null>(null);
  const toggleSound = () => {
    timer && clearTimeout(timer);
    setIsSound((prev) => !prev);
  };
  const onProgress = (e): void => {
    const duration = Math.floor(e.playableDuration - e.currentTime);
    if (duration) {
      return setRestTime(formatToTimer(duration));
    }

    setRestTime(null);
  };

  useEffect(() => {
    setIsSoundIconVisible(true);
    timer = setTimeout(() => {
      setIsSoundIconVisible(false);
    }, 3000);

    () => timer && clearTimeout(timer);
  }, [isSound]);

  const volume = isSound ? 1 : 0;
  const soundIconName = `volume-${isSound ? 'high' : 'off'}`;

  return (
    <TouchableWithoutFeedback onPress={toggleSound}>
      <View style={styles.container}>
        <DarkBgContainer
          style={[styles.iconContainer, isSoundIconVisible && styles.visible]}>
          <MaterialCommunityIcons
            name={soundIconName}
            style={styles.icon}
            size={18}
          />
        </DarkBgContainer>
        <Text style={styles.restTime}>{restTime}</Text>
        <Video
          source={{uri: media_url}}
          style={[Styles.fullScreen, styles.mediaContainer]}
          paused={false}
          repeat={true}
          resizeMode="cover"
          volume={volume}
          onProgress={onProgress}
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
    opacity: 0,
  },
  restTime: {
    position: 'absolute',
    top: 10,
    right: 0,
    color: Colors.WHITE,
    zIndex: 999,
  },
  visible: {
    opacity: 1,
  },
  icon: {
    color: Colors.WHITE,
  },
});
