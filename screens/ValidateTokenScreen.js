import React, {useEffect,useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from "./axios.config";

export default function TokenValidator({navigation}){

  const [token, setToken] = useState();
  const [days, setDays] = useState(null);
  const [error, setError] = useState(null);

  const handleValidateToken = async () => {
    try {
      const response = await axios.post('/validate-token', { token });
      setDays(response.data.days);
      setError(null);
    } catch (err) {
      setDays(null)
      setError(err.response?.data?.message || 'Token unvalid');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Token"
        value={token}
        onChangeText={setToken}
        maxLength={8}
      />
      <Button title="Validate Token" onPress={handleValidateToken} />
      {days !== null && <Text>Days: {days}</Text>}
      {error && <Text style={styles.error}>{error}</Text>}


      <TouchableOpacity
          className="py-4 items-center justify-center rounded-lg bg-blue-500 text-white mt-[20px] w-[300px] ml-[20px]"
          onPress={() => navigation.navigate("Check")}
        >
          <Text className="text-white font-bold">Check Token</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  error: {
    color: 'red',
  },
});

