import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from "./axios.config";

export default function CheckTokenScreen(){
    const [meter_number, setMeterNumber] = useState('');
    const [tokens, setTokens] = useState([]);
    const [error, setError] = useState('');

    
    const fetchTokens = async () => {
        try {
           const response = await axios.get(`/meter/${meter_number}`);
           console.log(response)
            setTokens(response.data);
            setError(null);
        } catch (err) {
          setError(err.response?.data?.message || 'Something went wrong');
          console.log(err)
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Check Tokens by Meter Number</Text>
             <TextInput
             className="rounded-md border border-gray-300 p-2 w-[85%] ml-[20px] "
             value={meter_number}
             keyboardType="numeric"
             onChangeText={setMeterNumber}
           />
   
            <Button title="Check Tokens" onPress={fetchTokens} />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <FlatList
                data={tokens}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.tokenItem}>
                        <Text>Token: {item.token}</Text>
                        <Text>Status: {item.token_status}</Text>
                        <Text>Days: {item.token_value_days}</Text>
                        <Text>Purchased Date: {new Date(item.purchased_date).toLocaleDateString()}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    }
   
    })