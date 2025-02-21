import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <Text style={styles.label}>Usuário</Text>
      <TextInput style={styles.input}placeholder="Digite seu usuário" />
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input}placeholder="Digite sua senha" secureTextEntry />
      <Button title="Entrar" onPress={() => alert('Login realizado!')} />
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
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray' ,
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },

});
