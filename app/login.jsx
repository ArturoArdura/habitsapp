import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import "../global.css";

export default function Login() {
    const router = useRouter();
  return (
    <LinearGradient 
      colors={['rgba(200, 255, 200, 0.3)', 'rgba(255, 255, 255, 0)', 'rgba(200, 255, 200, 0.4)']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.4, 1]}
      style={{ flex: 1 }}
    >
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center gap-4 mx-7">
        <Text className="text-4xl font-bold text-black text-center mb-4">colHabits</Text>
        
        <View className="bg-white/10 rounded-2xl p-1 flex-row mb-4">
          <Pressable className="flex-1 bg-white rounded-2xl p-3">
            <Text className="text-black font-bold text-center">Login</Text>
          </Pressable>
          <Pressable className="flex-1 rounded-2xl p-3 bg-green-500/10">
            <Text className="text-green-600 font-bold text-center">Sign up</Text>
          </Pressable>
        </View>

        <View className="gap-2">
          <Text className="text-black font-semibold">Email</Text>
          <TextInput 
            placeholder='Enter your email' 
            placeholderTextColor="#999"
            className="bg-white rounded-xl p-4 text-green-600"
          />
        </View>

        <View className="gap-2">
          <Text className="text-black font-semibold">Password</Text>
          <TextInput 
            placeholder='Enter your password' 
            placeholderTextColor="#999"
            secureTextEntry
            className="bg-white rounded-xl p-4 text-green-600"
          />
        </View>

        <Pressable>
          <Text className="text-green-600 font-semibold text-right">Forgot your password?</Text>
        </Pressable>

        <Pressable className="bg-green-400 rounded-3xl p-4 w-full mt-4"
        onPress={() => {
            router.push('(tabs)');
        }}
        >
          <Text className="text-black font-bold text-center text-lg">Log In</Text>
        </Pressable>

        <View className="flex-row items-center gap-4 my-4">
          <View className="flex-1 h-px bg-white/30" />
          <Text className="text-green-600 font-semibold">Or</Text>
          <View className="flex-1 h-px bg-white/30" />
        </View>

        <Pressable className="bg-white rounded-2xl p-4 w-full flex-row items-center justify-center gap-2">
          <Text className="text-black font-bold text-center">Continue with Google</Text>
        </Pressable>

        <Pressable className="bg-black rounded-2xl p-4 w-full flex-row items-center justify-center gap-2">
          <Text className="text-white font-bold text-center">Continue with Apple</Text>
        </Pressable>
      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}