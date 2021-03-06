// react
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// components
import Spinner from 'components/Spinner';

import FlatList from './FlatList';
// hooks
import useFetchData from 'hooks/useFetchData';
// api
import { getAll } from 'utils/services/api/post';
// colors
import { Colors } from 'assets/styles/constants';

const Home: React.FC = () => {
  const { resource, fetchResource, isLoading, paging } = useFetchData({
    api: getAll,
  });
  const loadMore = useCallback(() => {
    if (isLoading || !paging?.next) {
      return;
    }
    fetchResource({ isLoadMore: true });
  }, [isLoading, fetchResource, paging?.next]);

  const onRefresh = async (
    setRefreshing: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setRefreshing(true);
    await fetchResource();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchResource();
  }, []);

  return (
    <View style={styles.container}>
      {resource && (
        <FlatList
          postsList={resource}
          loadMore={loadMore}
          onRefresh={onRefresh}
          renderFooter={() => isLoading && <Spinner />}
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
