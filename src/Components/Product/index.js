import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {
  Product, CardFooter, Details, Value,
  Actions, Option, DollarSign, Img,
} from './styles';

import product from '../../imagens/jack.jpg';
import Star from '../../icons/star.svg';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Whiskey Jack', code: '#000' },
    { name: 'Martini' },
    { name: 'Vodka' },
    { name: 'Ceveja' },
    { name: 'Vodka' },
    { name: 'Ceveja' },
  ]);

  return (

    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={20}
      renderItem={({ item }) => (
        <View>

          <Product>
            <Img source={product} />
          </Product>

          <Text style={styles.text}>{item.name}</Text>

          <CardFooter>
            <Details>
              <Value><DollarSign>R$ </DollarSign>200,00</Value>
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

        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 0,
    justifyContent: 'center',
    padding: 5,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 30,
    height: 150,
  },

  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0,
  }
});