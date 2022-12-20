import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export const ContadorScreen = () => {

    const [ contador, setContador ] = useState(5);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>

            <Button
                title="Sumar"
                onPress={() => setContador(contador + 1)}
            />
            <Button
                title="Restar"
                onPress={() => setContador(contador - 1)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ' black',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -100,
    },
});
