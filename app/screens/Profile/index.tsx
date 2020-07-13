// react
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// components
import ViewAndAddAvatar from 'components/ViewAndAddAvatar';
import Button from 'components/Button';
import TabView from './TabView';
import CardsSection from './CardsSection';
// colors
import { Colors } from 'assets/styles/constants';

const headerData: { [key: string]: number } = {
  posts: 10,
  followers: 10,
  following: 10,
};

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ViewAndAddAvatar onPress={() => {}} />
        {Object.entries(headerData).map(([key, value]: [string, number]) => (
          <View key={key} style={styles.headerSection}>
            <Text style={styles.headerValueText}>{value}</Text>
            <Text style={styles.headerKeyText}>{key}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.nameSection}>Testing Testingggg</Text>
      <Button onPress={() => {}} style={styles.editButton}>
        Edit Profile
      </Button>
      <TabView />
      <CardsSection />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.WHITE, paddingTop: 10 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerSection: {
    alignItems: 'center',
  },
  headerValueText: {
    fontWeight: '700',
    fontSize: 18,
  },
  headerKeyText: {
    textTransform: 'capitalize',
  },
  nameSection: {
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  editButton: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
