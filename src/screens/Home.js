import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Modal from "react-native-modal";
import api from "../services/api";
import Card from "../components/PapperLike";

const Conexion = {
  async Conect() {
    await api.get("catalogo/productos/");
  },
};

const dummyData = [
  {
    id: "1",
    category: "Zapatos",
    image:
      "https://i.pinimg.com/564x/a6/f5/e9/a6f5e9aabebdedec1f4e397a5dd20c84.jpg",
    name: "Zapatos Nike",
    price: "100",
  },
  {
    id: "2",
    category: "Zapatos",
    image:
      "https://i.pinimg.com/564x/ce/6d/c7/ce6dc7341c4bb3a2356faac89e896c6a.jpg",
    name: "Shoes",
    price: "300",
  },
  {
    id: "3",
    category: "Celulares",
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Samsung_Galaxy_S23_Ultra_concept_7.jpg",
    name: "Samsung s23",
    price: "100",
  },
  {
    id: "4",
    category: "Celulares",
    image:
      "https://th.bing.com/th/id/OIP.TCyQbDsA8m5XEDZ9BJJsfgHaFQ?pid=ImgDet&rs=1",
    name: "Iphone 13",
    price: "300",
  },
  {
    id: "5",
    category: "Celulares",
    image:
      "https://th.bing.com/th/id/OIP.TCyQbDsA8m5XEDZ9BJJsfgHaFQ?pid=ImgDet&rs=1",
    name: "Iphone 13",
    price: "300",
  },
  {
    id: "6",
    category: "Celulares",
    image:
      "https://th.bing.com/th/id/OIP.TCyQbDsA8m5XEDZ9BJJsfgHaFQ?pid=ImgDet&rs=1",
    name: "Iphone 13",
    price: "300",
  },
  {
    id: "7",
    category: "Computadoras",
    image:
      "https://th.bing.com/th/id/OIP.TCyQbDsA8m5XEDZ9BJJsfgHaFQ?pid=ImgDet&rs=1",
    name: "Iphone 13",
    price: "300",
  },
  {
    id: "8",
    category: "Computadoras",
    image:
      "https://th.bing.com/th/id/OIP.TCyQbDsA8m5XEDZ9BJJsfgHaFQ?pid=ImgDet&rs=1",
    name: "Iphone 13",
    price: "300",
  },
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productImage: {
    width: 150,
    height: 150,
  },
  itemList: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    backgroundColor: "#cccc",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      width: 0,
      height: 2,
    },
  },
  details: {
    color: "black",
  },
  centerPosition: {
    justifyContent: "center",
    alignItems: "center",
  },
  categoryButton: {
    backgroundColor: "#2e716e",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
  },
  categoryButtonText: {
    color: "white",
  },
});

export default function Home(props) {
  const { navigation } = props;
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const windowDimensions = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(2);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Agrega el elemento al carrito
    setCart([...cart, item]);
    console.log(cart)
  };

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((error) => console.error("Error fetching data:", error));

  useEffect(() => {
    const newNumColumns = Math.floor(windowDimensions.width / 150); // 150 es el ancho deseado de cada elemento
    setNumColumns(newNumColumns);
  }, [windowDimensions]);

  const goToSettings = () => {
    Conexion.Conect().then((response) => {
      console.log(response);
    });
  };

  const toggleCategoryModal = (selectedItem) => {
    setSelectedItem(selectedItem);
    setCategoryModalVisible(!isCategoryModalVisible);
  };

  return (
    <View style={styles.wrapper}>
     <Modal isVisible={isCategoryModalVisible}>
        <View>
          <TouchableOpacity onPress={() => toggleCategoryModal(null)}>
            <Text>Close</Text>
          </TouchableOpacity>
          {selectedItem && (
            <Card
              category={selectedItem.category}
              image={selectedItem.image}
              name={selectedItem.name}
              price={selectedItem.price}
              onAddToCart={addToCart}
            ></Card>
          )}
        </View>
      </Modal>


      <FlatList
        numColumns={numColumns}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemList}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.details}>{item.name}</Text>
            <Text style={styles.details}>{item.price}</Text>
            <Button
              title="Ver mas"
              onPress={() => toggleCategoryModal(item)}
              color={"#2e716e"}
            />
          </View>
        )}
        ListHeaderComponent={() => <Text style={styles.details}></Text>}
      />
    </View>
  );
}
