import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Alert,
  Button,
} from 'react-native';
import React from 'react';
import {theme} from '../theme/AppTheme';
import Input from '../components/Input';
import Todo from '../components/todo/Todo';
import {useAction, useAppState} from '../overmind';
import {DataArray} from '../interfaces/ObjecData';

const width = Dimensions.get('window').width / 1.13;

interface Props {
  item: DataArray;
}

const HomeScreen = () => {
  const {data, text} = useAppState();
  const {addItem, handleDelete} = useAction();

  const renderItem = ({item}: Props) => {
    return <Todo id={item.id} title={item.todoTitle} status={item.status} />;
  };

  return (
    <View style={theme.container}>
      <View style={styles.homeContainer}>
        <Input
          addItem={() => {
            if (text !== '') {
              addItem({
                id: data.length,
                todoTitle: text,
                status: false,
              });
            } else {
              Alert.alert('¡Alert!', 'Ingrese una tarea');
            }
          }}
        />
        {data.length !== 0 && (
          <View style={styles.listTodoContainer}>
            {/*TITLE TABLE TODO LIST */}
            {/* <Todo id="#" title="Todo Title" status="Status" /> */}
            {/* LIST TODO`S */}
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item: DataArray) => item.id.toString()}
            />
          </View>
        )}
      </View>
      <Button title="Clear" onPress={() => handleDelete([])} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  listTodoContainer: {
    backgroundColor: '#70BBBA',
    width,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
  },
});
