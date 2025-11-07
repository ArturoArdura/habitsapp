
import { useRouter } from 'expo-router';
import { Image, Pressable, SafeAreaView, Text } from 'react-native';
import "../global.css";



export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 items-center justify-between gap-4 mx-4">
      <Text className="text-2xl font-bold">colHabits</Text>
      <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgG3Bb0NwcapcPRoMUCfT-Nx3J6vs366Zl2BuCSx50gQhEHfA-plQXkY_WqhTPPi6Ka-tBnjuP8PCSY3OSYKNcHCtTJaTp7wMNlCgRIEQ6QgcDkGMihpYf4fNDpBnNiT1RPqFiSsItuyKVA1BFJo0BiKrTNlkix_aVMJwB7udWZahgvDcX-AC5hxx-wgkAlbPHgvYl5hqif7CGsK2MpycGS_LGlMHdlWOt7lrhYRgZ_dIFXjFUkiO4ESFji20eqITQ9d8IrPFhmRuu" }} className="w-full h-80 px-6" />
      <Text className="text-3xl font-semibold px-4 text-center">Build Better Habits, Together</Text>
      <Text className="text-gray-500 px-5 text-center font-semibold">Track your progress, conquer goals with your crew, and level up your life</Text>
      {/* multi screen component */}
      <Pressable className="bg-green-600 rounded-2xl p-4 w-80"
        onPress={() => {
          router.push('/login');
        }}
      >
        <Text className="text-white font-bold text-center text-lg">Get Started</Text>
      </Pressable>
      <Text className="text-black font-semibold">Already have an account? <Text className="text-green-500 font-semibold">Log In</Text></Text>


    </SafeAreaView>
  );
}
