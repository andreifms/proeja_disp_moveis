import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function Perfil() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');

    const salvarDados = () => {
        console.log('Dados salvos;', { nome, cpf, endereco });
        alert('Dados salvos com sucesso!');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.label}>CPF:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu CPF"
                value={cpf}
                onChangeText={setCpf}
            />
            <text style={styles.label}>Endereço:</text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu endereco"
                value={endereco}
                onChangeText={setEndereco}
            />
            <Button title="Salvar"onPress={salvarDados} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});