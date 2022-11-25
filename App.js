import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView } from 'react-native';

/* Components */
import Header from './components/Header';
import Currency from './components/Currency';

export default function App() {

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

  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
});
