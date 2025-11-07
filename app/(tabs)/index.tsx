import { SafeAreaView, Text, View } from 'react-native';
import "../../global.css";

export default function HomeScreen() {
  return (
    <>
    <SafeAreaView className="flex-1 items-center justify-between p-8 bg-white">
      <Text>Tus hábitos de hoy</Text>
      
      <View>
        <Text>Puntos</Text>
        <Text>1280</Text>
      </View>
      <View>
        <Text>Racha</Text>
        <Text>15 días</Text>
      </View>


      <Text>Lista de hábitos</Text>

      <View>
        <Text>Beber agua</Text>
        <Text>Progreso: 1.5/2L</Text>
      </View>

      <View>
        <Text>Meditar 10 min</Text>
        <Text>Racha actual: 4 días</Text>
      </View>

      <View>
        <Text>Leer 1 capitulo</Text>
        <Text>A por ello!</Text>
      </View>

    {/* Boton para agregar nuevo hábito */}
      <View>
        <Text>+ Agregar nuevo hábito</Text>
      </View>
    </SafeAreaView>
    </>
  );
}
