// react
import React, {useState} from 'react';
import {FlatList} from 'react-native';
// components
import InstagramPost from '../components/InstagramPost';
import StoryFeed from './StoryFeed';
import Spinner from 'components/Spinner';
// assets
import Styles from 'assets/styles/styles';

const a1 = require('assets/img/fake/a1.jpg');
const a2 = require('assets/img/fake/a2.jpg');

const storyArr = [a1, a2, a1, a2, a1, a2, a1, a2];

interface ICustomFlatListProps {
  renderFooter: false | Element;
  loadMore: () => void;
  onRefresh: (
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
  postsList: any;
}

const CustomFlatList: React.FC<ICustomFlatListProps> = ({
  renderFooter,
  loadMore,
  postsList,
  onRefresh,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      style={Styles.fullScreen}
      data={postsList}
      keyExtractor={(item) => item.id}
      onEndReached={loadMore}
      onRefresh={() => onRefresh(setRefreshing)}
      refreshing={false}
      bounces={false}
      onEndReachedThreshold={0.001}
      //@ts-ignore
      ListFooterComponent={renderFooter}
      ListHeaderComponent={
        <>
          {refreshing && <Spinner />}
          <StoryFeed storyArr={storyArr} />
        </>
      }
      renderItem={(post) => {
        return <InstagramPost key={post.item.id} {...post.item} />;
      }}
    />
  );
};

export default CustomFlatList;
