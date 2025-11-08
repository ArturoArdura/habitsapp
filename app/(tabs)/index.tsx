import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import "../../global.css";

export default function HomeScreen() {
  return (
    <LinearGradient 
      colors={['rgba(200, 255, 200, 0.3)', 'rgba(255, 255, 255, 0)', 'rgba(200, 255, 200, 0.4)']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.4, 1]}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1" contentContainerClassName="gap-6 p-6">
          <Text className="text-4xl font-bold text-black text-center">Tus hábitos de hoy</Text>
          
          {/* Stats Cards */}
          <View className="flex-row gap-4">
            <View className="flex-1 flex-row bg-white rounded-2xl p-6 items-center shadow-sm">
              <View className="rounded-full bg-green-100 w-10 h-10 items-center justify-center">
                <FontAwesome name="diamond" size={24} color="green" />
              </View>
              <View className="ml-3 items-center justify-center">
                <Text className="text-gray-600 font-semibold mb-2">Puntos</Text>
                <Text className="text-4xl font-bold text-green-600">1,280</Text>
              </View>
              
            </View>
            <View className="flex-1 flex-row bg-white rounded-2xl p-6 items-center shadow-sm">
              <View className="rounded-full bg-green-100 w-10 h-10 items-center justify-center">
                <AntDesign name="fire" size={24} color="green" />
              </View>

              <View className="ml-3 items-center justify-center">
                <Text className="text-gray-600 font-semibold">Racha</Text>
                <Text className="text-4xl font-bold text-green-600">15</Text>
                <Text className="text-gray-500 text-sm">días</Text>
              </View>
            </View>
          </View>

          <Text className="text-2xl font-bold text-black mt-4">Lista de hábitos</Text>

          {/* Habit Cards */}
          <View className="bg-white rounded-2xl p-5 gap-3 shadow-sm">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
                <Text className="text-2xl">💧</Text>
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-black">Beber agua</Text>
                <Text className="text-gray-600">Progreso: 1.5/2L</Text>
              </View>
              <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center">
                <Text className="text-green-600 font-bold">75%</Text>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-2xl p-5 gap-3 shadow-sm">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-purple-100 rounded-full items-center justify-center">
                <Text className="text-2xl">🧘</Text>
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-black">Meditar 10 min</Text>
                <Text className="text-gray-600">Racha actual: 4 días</Text>
              </View>
              <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center">
                <Text className="text-green-600 font-bold">✓</Text>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-2xl p-5 gap-3 shadow-sm">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-orange-100 rounded-full items-center justify-center">
                <Text className="text-2xl">📖</Text>
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-black">Leer 1 capítulo</Text>
                <Text className="text-gray-600">¡A por ello!</Text>
              </View>
              <View className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center">
                <Text className="text-gray-400 font-bold">○</Text>
              </View>
            </View>
          </View>

          {/* Add Habit Button */}
          <Pressable className="bg-green-400 rounded-full w-16 h-16 items-center justify-center self-end">
              <Text className="text-4xl">+</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
