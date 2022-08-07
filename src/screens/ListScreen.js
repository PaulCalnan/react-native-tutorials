import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 37 },
    { name: 'Friend #5', age: 27 },
    { name: 'Friend #6', age: 53 },
    { name: 'Friend #7', age: 30 },
    { name: 'Friend #8', age: 51 },
    { name: 'Friend #9', age: 50 },
  ];

  return (
    <FlatList
      // pushes list horizontal instead of vertical can be used with ={true} type of format
      horizontal={false}
      // hides default scroll bar from being displayed
      showsHorizontalScrollIndicator={false}
      // keyExtractor provides key for each object data for react native to keep track
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;