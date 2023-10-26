import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ category, image, name, price, navigation, style, onAddToCart }) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={{ uri: String(image) }} style={styles.image} />
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity onPress={() => onAddToCart({ category, image, name, price })}>
        <Text style={styles.price}>Agregar al carrito</Text>
      </TouchableOpacity>
      {/* Agrega cualquier otro contenido que necesites */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  category: {
    fontSize: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
  },
});

export default Card;
