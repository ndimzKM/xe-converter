import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, TouchableOpacity, Modal, Text, View, SafeAreaView, Platform, ScrollView } from 'react-native';

/* Components */
import Header from './components/Header';
import Currency from './components/Currency';

export default function App() {

  const [ showModal, setShowModal ] = useState(false);
  const [ currencies, setCurrencies ] = useState([
    {
      code: 'GMD',
      rate: 61.57,
      amount: 100,
    },
    {
      code: 'USD',
      rate: 0.6157,
      amount: 1,
    },{
      code: 'GBP',
      rate: 0.557,
      amount: 1,
    },{
      code: 'EURO',
      rate: 0.576,
      amount: 1,
    },{
      code: 'CFA',
      rate: 750,
      amount: 1,
    },
  ]);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header showModal={showModal} setShowModal={setShowModal} />
      <ScrollView>
        <Text style={styles.updateText}>
          <Ionicons name="reload-outline" size={15}/>
          {' '}Last updated: 26 Jan 2021, 09:06
        </Text>
        {currencies.map(currency => {
          return (
            <Currency currency={currency} key={currency.code}/>
          )
        })}
      </ScrollView> 
      <Modal visible={showModal} transparent={false}>
        <View style={styles.modal}>
            <TouchableOpacity style={styles.remove} onPress={closeModal}>
              <Text style={{color:"#ccc"}}>x</Text>
            </TouchableOpacity>
            <TextInput placeholder="Search a currency" style={styles.input}/>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingHorizontal:15,
  },
  updateText: {
    paddingTop: 25,
    paddingBottom:10,
  },
  modal: {
    marginTop:100,
    marginHorizontal:20,
    borderRadius:10
  },
  remove: {
    width:30,
    height: 30,
    borderColor: "#ccc",
    borderWidth:1,
    borderRadius: 15,
    justifyContent:"center",
    alignItems:"center",
    background:"#fff"
  },
  input:{
    borderWidth:1,
    borderColor: "#ccc",
    padding:15,
    marginTop: 20,
    borderRadius:5
  }
});
