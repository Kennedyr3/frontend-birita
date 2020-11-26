import React from "react";
import { FlatList, StyleSheet, Text, View, } from "react-native";
import {
  Product, CardFooter, Details, Value, Actions,
  Option, DollarSign, Img,
} from './styles';

import Star from '../../icons/star.svg';

import product from '../../imagens/jack.jpg';
import { TouchableOpacity } from "react-native-gesture-handler";

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns); // [A]
  let lastRowElements = data.length - rows * columns; // [B]

  while (lastRowElements !== columns) { // [C]
    data.push({ // [D]
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1; // [E]
  }
  return data; // [F]
}

class App extends React.Component {
  state = {
    data: [
      { id: "00", name: "Whiskey Jack..." },
      { id: "01", name: "Martini" },
    ]
  };
  render() {

    const columns = 2;

    return (
      <FlatList
        data={createRows(this.state.data, columns)}
        keyExtractor={item => item.id}
        numColumns={columns}
        renderItem={({ item }) => {
          if (item.empty) {
            return <View style={[styles.item, styles.itemEmpty]} />;
          }

          return (
            <View style={styles.item}>
              <TouchableOpacity>

                <Product>
                  <Img source={product} />
                </Product>

                <Text style={styles.text}>{item.name}</Text>

                <CardFooter>
                  <Details>
                    <DollarSign>R$ </DollarSign>
                    <Value>200,00</Value>
                  </Details>

                  <Actions>
                    <Option>
                      <Star width="16" height="16" fill="#FFC107" color="#FFC107" />
                      <Star width="16" height="16" fill="#FFC107" color="#FFC107" />
                      <Star width="16" height="16" fill="#FFC107" color="#FFC107" />
                      <Star width="16" height="16" fill="#FFC107" color="#FFC107" />
                      <Star width="16" height="16" fill="#FFC107" color="#FFC107" />
                    </Option>
                  </Actions>
                </CardFooter>

              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    flexGrow: 1,
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    flexBasis: 0,
    width: 155,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0,
  }
});
export default App;