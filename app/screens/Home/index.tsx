// react
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// components
import Spinner from 'components/Spinner';
import FlatList from './FlatList';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectMeta } from 'store/post/selectors';
import { getAllAction } from 'store/post';
// colors
import { Colors } from 'assets/styles/constants';

const Home: React.FC = () => {
  // const { resource, fetchResource, isLoading, paging } = useFetchData({
  //   api: getAll,
  // });

  const posts = useSelector(selectPosts);
  const meta = useSelector(selectMeta);
  const dispatch = useDispatch();
  const loadMore = useCallback(() => {
    if (meta.isLoading || !meta.paging?.next) {
      return;
    }
    dispatch(getAllAction({ paging: meta?.paging }));
  }, [meta, dispatch]);

  const onRefresh = async (
    setRefreshing: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setRefreshing(true);
    await dispatch(getAllAction());
    setRefreshing(false);
  };

  useEffect(() => {
    dispatch(getAllAction());
  }, []);

  return (
    <View style={styles.container}>
      {posts && (
        <FlatList
          postsList={posts}
          loadMore={loadMore}
          onRefresh={onRefresh}
          renderFooter={() => meta.isLoading && <Spinner />}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: Colors.WHITE,
  },
});
