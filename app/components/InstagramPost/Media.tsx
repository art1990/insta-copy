// react
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
// components
import Carousel from 'components/Carousel';
import VideoView from '../VideoView';
// assets
import Styles from 'assets/styles/styles';
// interface
import { IInstagramPostProps } from './index';

interface IMediaProps {
  children: IInstagramPostProps['children'];
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CARUSEL_ALBUM';
  mediaList: IMediaProps['media_url'][];
}

const Media: React.FC<IMediaProps> = ({
  children,
  mediaList,
  media_url,
  media_type,
}) => {
  return (
    <View style={styles.mediaWrapper}>
      {children ? (
        <Carousel mediaList={mediaList} />
      ) : (
        <>
          {media_type === 'VIDEO' ? (
            <VideoView media_url={media_url} />
          ) : (
            <Image
              source={{ uri: media_url }}
              style={[Styles.fullScreen, styles.mediaContainer]}
              resizeMode="cover"
            />
          )}
        </>
      )}
    </View>
  );
};

export default Media;

const styles = StyleSheet.create({
  mediaWrapper: {
    marginTop: 10,
    height: 300,
  },
  mediaContainer: { height: '100%' },
});
