import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <Text style={styles.textStyle}> Parth Narharibhai Maru </Text>
          <Text style={styles.textStyle}> 301209761</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle: {
        fontSize: 30
    }
});
