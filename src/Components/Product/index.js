import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {
  Product, CardFooter, Details, Value,
  Actions, Option, DollarSign, Img, Views
} from './styles';

import product from '../../imagens/jack.jpg';
import Star from '../../icons/star.svg';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Whiskey Jack', code: '#000' },
    { name: 'Martini' },

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
        <Views>

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

        </Views>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    alignItems: 'center',

  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 20,
    height: 150,
  },

  text: {
    color: '#000',
    fontSize: 18,
  }
});