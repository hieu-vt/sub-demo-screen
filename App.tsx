import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/Home';

const App = () => {
  const onGetToDo = async () => {
    const data = await (
      await fetch('https://jsonplaceholder.typicode.com/todos')
    ).json();

    return data;
  };

  return (
    <SafeAreaView>
      <Home
        title="VU THANH HIEU"
        subtitle="Novus-fintech"
        onGetData={onGetToDo}
      />
    </SafeAreaView>
  );
};

export default App;
