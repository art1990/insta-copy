// react
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// components
import ProfileCard from 'components/ProfileCard';
// colors
import { Colors } from 'assets/styles/constants';

const cardsList: {
  type: 'name' | 'bio' | 'photo' | 'find-people';
  description: string;
  isPerfomed: boolean;
}[] = [
  {
    type: 'bio',
    description: 'Tell your followers a little bit about yourself.',
    isPerfomed: false,
  },
  {
    type: 'name',
    description: 'Add your full name so your friends know its you.',
    isPerfomed: true,
  },
  {
    type: 'photo',
    description: 'Choose a profile photo to respent yourself on instagram.',
    isPerfomed: true,
  },
  {
    type: 'find-people',
    description: 'Follow people and interests you care about.',
    isPerfomed: true,
  },
];

const CardsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.completeSection}>
        <Text style={styles.title}>Complete your profile</Text>
        <View style={styles.completeContainer}>
          <Text style={[styles.completeText, styles.completeTextAcceptColors]}>
            3 of 4{' '}
          </Text>
          <Text style={styles.completeText}>complete</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cardsList.map((card) => (
          <ProfileCard
            type={card.type}
            key={card.type}
            description={card.description}
            isPerfomed={card.isPerfomed}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CardsSection;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  completeSection: { paddingVertical: 10 },
  title: { fontWeight: '700', fontSize: 16 },
  completeContainer: { flexDirection: 'row' },
  completeText: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: Colors.TEXT_GREY,
  },
  completeTextAcceptColors: {
    color: Colors.ACCEPT,
  },
});
