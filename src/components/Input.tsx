import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAction, useAppState} from '../overmind';

interface Props {
  addItem: () => void;
}

const Input = ({addItem}: Props) => {
  const {handleChange} = useAction();
  const {text} = useAppState();
  return (
    <View style={styles.inputContainer}>
      <TextInput
        multiline
        placeholder="Add new Todo..."
        style={styles.input}
        autoCorrect={false}
        onChangeText={texto => handleChange(texto)}
        value={text}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={addItem}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#70BBBA',
    padding: 5,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingLeft: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    fontSize: 18,
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 13.5,
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 10,
  },
});
