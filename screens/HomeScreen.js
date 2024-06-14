import React, { useState } from 'react'
import { View,Text,TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {



  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={() => navigation.navigate("Token")}>
        <Text className=" font-bold text-[20px] text-blue-300">Token Meter</Text>

      </TouchableOpacity>
    </View>
  )
}
