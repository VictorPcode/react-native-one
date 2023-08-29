import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, SectionList, Button, TouchableOpacity } from 'react-native'; // Importa TouchableOpacity
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Modal from 'react-native-modal';

const dummyData = [
  {
    title: 'Zapatos',
    data: [
      {
        id: '1',
        image: 'https://i.pinimg.com/564x/a6/f5/e9/a6f5e9aabebdedec1f4e397a5dd20c84.jpg',
        name: 'Zapatos Nike',
        price: '100',
      },
      {
        id: '2',
        image: 'https://i.pinimg.com/564x/ce/6d/c7/ce6dc7341c4bb3a2356faac89e896c6a.jpg',
        name: 'Shoes',
        price: '300',
      },
    ],
  },
  {
    title: 'Smarthphone',
    data: [
      {
        id: '1',
        image: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Samsung_Galaxy_S23_Ultra_concept_7.jpg',
        name: 'Samsung s23',
        price: '100',
      },
      {
        id: '2',
        image: 'https://th.bing.com/th/id/OIP.TCyQbDsA8m5XEDZ9BJJsfgHaFQ?pid=ImgDet&rs=1',
        name: 'Iphone 13',
        price: '300',
      },
    ],
  },
  // Agrega más categorías y datos ficticios según sea necesario
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000000',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  centerPosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  categoryButtonText: {
    color: 'white',
  },
});

export default function Home(props) {
  const { navigation } = props;
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);

  const goToSettings = () => {
    navigation.navigate('Configuraciones');
  };

  const toggleCategoryModal = () => {
    setCategoryModalVisible(!isCategoryModalVisible);
  };

  return (
    <View style={styles.wrapper}>
      <Button  variant={'outlined'} color={'orange'}  title="CATEGORIAS" onPress={toggleCategoryModal} />
      <Modal isVisible={isCategoryModalVisible}>
        <View>
          <TouchableOpacity onPress={toggleCategoryModal}>
            <Text>Close</Text>
          </TouchableOpacity>
          {dummyData.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedCategoryIndex(index);
                toggleCategoryModal();
              }}
              style={styles.categoryButton}
            >
              <Text style={styles.categoryButtonText}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <SectionList
        style={styles.wrapper}
        stickySectionHeadersEnabled={false}
        sections={dummyData.map(category => ({
          title: category.title,
          data: category.data,
        }))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button  variant={'outlined'} color={'orange'} className={styles.centerPosition} title="Ver Detalles" onPress={goToSettings} />
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text>{section.title}</Text>
        )}
      />
    </View>
  );
}
