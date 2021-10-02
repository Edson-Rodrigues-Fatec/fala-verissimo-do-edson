import React from 'react';
import {SafeAreaView, Text, StyleSheet} from  'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.Principal}>
      <Text style={styles.Titulo}> Fala Veríssimo!Bacana?</Text>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
Principal: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
},Titulo: {
  fontSize: 30,
  color: "#1A237E"

}

}
)

