import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Netflix from './src/screens/Components/Netflix';
import Counter from './src/screens/Components/Counter';

const styles = StyleSheet.create({

  header: {
    fontSize: 30,
    fontWeight: '500',
    marginTop: 50,
    marginLeft: 10,
  },
});

const App = () => {
  const data = [
    { key: '1', url: 'http://surl.li/oqtli', title: 'The Mother', description: 'While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter, whom she left earlier in life' },
    { key: '2', url: 'http://surl.li/oqtuk', title: 'Movie 2', description: 'Description for Movie 2' },
    { key: '3', url: 'http://surl.li/oqtuk', title: 'Movie 3', description: 'Description for Movie 3' },
    { key: '4', url: 'http://surl.li/oqtuk', title: 'Movie 4', description: 'Description for Movie 4' },
    { key: '5', url: 'http://surl.li/oqtuk', title: 'Movie 5', description: 'Description for Movie 5' },
  ];

  return (
//     <View>
//     <View style={styles.container}>
//       <Text style={styles.header}>Netflix Card</Text>
//       <FlatList
//         data={data}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={(elements) => {
//           return <Netflix url={elements.item.url} title={elements.item.title} description={elements.item.description} />;
//         }}
//       />
//  </View>

//  <View>
//       <FlatList
//         data={data}
//         renderItem={(elements) => {
//           return <Netflix url={elements.item.url} title={elements.item.title} description={elements.item.description} />;
//         }}
//       />
//       </View>
//    </View>




      <View>
        <Counter />
      </View>
  );
};

export default App;
