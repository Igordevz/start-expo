import {  Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="w-full h-screen bg-purple-500 flex items-center justify-center">
      <Text className="text-white text-5xl"> Bem vindo </Text>
        <TouchableOpacity className="bg-purple-400 p-4 rounded-full w-5/6 flex items-center justify-center">
            <Text className="text-3xl text-white">Continuar {">"}</Text>
        </TouchableOpacity>
    </View>
  );
}
