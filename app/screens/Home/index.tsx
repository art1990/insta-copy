// react
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
// components
import Spinner from 'components/Spinner';

import FlatList from './FlatList';
// hooks
import useFetchData from 'hooks/useFetchData';
// api
import {getAll} from 'utils/services/api/post';
// colors
import {Colors} from 'assets/styles/constants';

const Home: React.FC = () => {
  const {resource, fetchResource, isLoading} = useFetchData({api: getAll});

  const loadMore = useCallback(() => {
    if (isLoading) {
      return;
    }
    fetchResource({loadMore: true});
  }, [isLoading, fetchResource]);

  const onRefresh = async (setRefreshing) => {
    setRefreshing(true);
    await fetchResource();
    setRefreshing(false);
  };
  return (
    <View style={styles.container}>
      {resource && (
        <FlatList
          postsList={resource}
          loadMore={loadMore}
          onRefresh={onRefresh}
          renderFooter={isLoading && <Spinner />}
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
