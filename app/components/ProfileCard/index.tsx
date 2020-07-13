// react
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// components
import Button from 'components/Button';
// icons
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
// colors
import { Colors } from 'assets/styles/constants';

interface ICardProps {
  type: 'bio' | 'name' | 'photo' | 'find-people';
  isPerfomed: boolean;
  description: string;
}

const ProfileCard: React.FC<ICardProps> = ({
  type,
  isPerfomed,
  description,
}) => {
  const names = {
    bio: { name: 'comment-o', buttonText: 'Add Bio', title: 'Add Bio' },
    name: { name: 'user', buttonText: 'Edit Name', title: 'Add Your Name' },
    photo: {
      name: 'user-circle-o',
      buttonText: 'Change Photo',
      title: 'Add Profile Photo',
    },
    'find-people': {
      name: 'users',
      buttonText: 'Find More',
      title: 'Find People to Follow',
    },
  };

  return (
    <View style={styles.container}>
      <View style={[styles.iconSection]}>
        <View
          style={[
            styles.generalIconContainer,
            isPerfomed && { borderColor: Colors.BLACK },
          ]}>
          <FontAwesomeIcons
            name={names[type].name}
            size={30}
            color={isPerfomed ? Colors.BLACK : Colors.TEXT_GREY}
          />
        </View>
        {isPerfomed && (
          <View style={styles.perfomedContainer}>
            <AntDesignIcons
              name="check"
              style={styles.perfomedIcon}
              size={18}
            />
          </View>
        )}
      </View>
      <Text style={styles.title}>{names[type].title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        onPress={() => {}}
        style={styles.button}
        color={!isPerfomed ? 'blue' : undefined}>
        {names[type].buttonText}
      </Button>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 0.1,
    maxWidth: '70%',
    borderColor: Colors.TEXT_GREY,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-between',
    marginRight: 10,
  },
  iconSection: { position: 'relative', alignSelf: 'center' },
  generalIconContainer: {
    borderWidth: 1,
    borderColor: Colors.TEXT_GREY,
    padding: 12,
    borderRadius: 200,
  },
  title: {
    fontWeight: '700',
    marginTop: 10,
  },
  perfomedContainer: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    backgroundColor: Colors.ACCEPT,
    alignSelf: 'flex-start',
    borderRadius: 200,
    padding: 2,
  },
  perfomedIcon: {
    color: Colors.WHITE,
  },
  description: {
    textAlign: 'center',
    color: Colors.TEXT_GREY,
    marginBottom: 20,
  },
  button: { alignSelf: 'center', paddingHorizontal: 5 },
});
