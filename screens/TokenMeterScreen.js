import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
} from "react-native";

import axios from "./axios.config";

export default function HomeScreen({ navigation }) {
  const [amount, setAmount] = useState();
  const [meter_number, setMeterNumber] = useState();

  const handleGenerateToken = async () => {
    const amountInt = parseInt(amount, 10);

    if (!/^\d{6}$/.test(meter_number)) {
      Alert.alert("Error", "Meter number must be exactly 6 digits");
      return;
    }

    if (amountInt <= 100 || amountInt > 182500) {
      Alert.alert("Error", "Amount must be 100 Rwf and not exceed 182500 Rwf");
      return;
    }

    try {
      const response = await axios.post("/tokens", {
        meter_number,
        amount: amountInt,
      });
      Alert.alert(
        "Token Generated",
        `Token: ${response.data.token}\nDays: ${response.data.days}`
      );
    } catch (error) {
      console.log(error);
      Alert.alert("Error", `${error}`);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Text className=" font-bold text-[27px] text-blue-500">
          Token Meter
        </Text>
        <Text className=" font-bold text-[15px]">Welcome to EUCL</Text>
      </View>

      <View className="flex-col w-full  h-[1rem]  mb-[150px] ">
        <Text className="font-bold text-[15px] ml-[20px]">
          Enter Amount (in Rwf):
        </Text>
        <TextInput
          className="rounded-md border border-gray-300 p-2  w-[85%] ml-[20px]"
          value={amount}
          keyboardType="numeric"
          onChangeText={setAmount}
        />
        <Text className="font-bold text-[15px] ml-[20px] mt-[20px]">
          Enter Meter Number:
        </Text>
        <TextInput
          className="rounded-md border border-gray-300 p-2 w-[85%] ml-[20px] "
          value={meter_number}
          keyboardType="numeric"
          onChangeText={setMeterNumber}
        />

        <View>
          <TouchableOpacity
            className="py-4 items-center justify-center rounded-lg bg-blue-500 text-white mt-[20px] w-[300px] ml-[20px]"
            onPress={handleGenerateToken}
          >
            <Text className="text-white font-bold">Generate Token</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="py-4 items-center justify-center rounded-lg bg-blue-500 text-white mt-[20px] w-[300px] ml-[20px]"
          onPress={() => navigation.navigate("Validate")}
        >
          <Text className="text-white font-bold">Validate Token</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
