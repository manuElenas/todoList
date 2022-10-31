/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  //   TouchableOpacity,
} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';

import Check from './Check';
import {useAppState} from '../../overmind';

const width = Dimensions.get('window').width / 1.15;

interface Props {
  id: number;
  title: string;
  status: boolean | string;
}

const Todo = ({id, title}: Props) => {
  const {data} = useAppState();
  //   const {handleDelete} = useAction();
  return (
    <>
      <View style={styles.todoContainer}>
        <Check id={id} />
        <Text
          style={{
            ...styles.todoText,
            marginLeft: 20,
            textDecorationLine:
              data[id].status === undefined
                ? 'none'
                : data[id].status
                ? 'line-through'
                : 'none',
          }}>
          {title}
        </Text>
      </View>
      {/* {data[id].status === true && (
        <View style={styles.IconTrash}>
          <TouchableOpacity onPress={() => handleDelete(id)}>
            <Icon name="trash-outline" size={25} />
          </TouchableOpacity>
        </View>
      )} */}
    </>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: '#fff',
    width,
    padding: 5,
    marginBottom: 5,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoTextContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
  todoText: {
    fontSize: 20,
    color: '#000',
  },
  IconTrash: {
    position: 'absolute',
    right: 30,
    top: 5,
  },
});
