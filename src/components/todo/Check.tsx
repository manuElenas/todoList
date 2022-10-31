import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAction, useAppState} from '../../overmind';

interface Props {
  id: number;
}

const Check = ({id}: Props) => {
  const {handleComplete} = useAction();
  const {data} = useAppState();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleComplete(id)}>
      <Icon
        name={
          data[id] === undefined
            ? 'trash-outline'
            : data[id].status
            ? 'checkmark-outline'
            : 'square-outline'
        }
        size={25}
        color="#000"
      />
    </TouchableOpacity>
  );
};

export default Check;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Inner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: '#444',
  },
});
