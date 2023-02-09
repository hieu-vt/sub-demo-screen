import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/Home';

const App = () => {
  return (
    <SafeAreaView>
      <Home
        title="VU THANH HIEU"
        subtitle="Novus-fintech"
        onGetData={async () => [
          {
            completed: true,
            id: 1,
            title: 'Title',
            userId: 2,
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default App;
