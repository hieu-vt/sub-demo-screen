import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
interface Props {
  title: string;
  subtitle?: string;

  onGetData: () => Promise<Array<TodoItem>>;
}

const HomeComponent: React.FC<Props> = ({title, subtitle, onGetData}) => {
  // state
  const [todos, setTodos] = useState<Array<TodoItem>>([]);

  // func
  const renderItem = ({item}: {item: TodoItem}) => {
    return (
      <View>
        <Text>Todo: {item.title}</Text>
        <Text>Completed: {item.completed}</Text>
      </View>
    );
  };

  // effect
  useEffect(() => {
    (async () => {
      const data = await onGetData();
      console.log('data', data);
      setTodos(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('todos', todos);

  // render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      <View style={styles.space} />
      {todos.length <= 0 && <ActivityIndicator size={'large'} />}
      <FlatList data={todos} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  space: {
    flex: 1,
    height: 5,
    width: '100%',
    backgroundColor: 'black',
  },
});

export default HomeComponent;
