import { Pressable, Text, TextInput, View } from 'react-native';
import "../global.css";

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>colHabits</Text>
      <Pressable className="bg-white rounded-lg p-4 mt-4">
        <Text>Login / Sign up</Text>
        </Pressable>
        <Text>Email</Text>
        <TextInput placeholder='Enter your email'></TextInput>
        <Text>Password</Text>
        <TextInput placeholder='Enter your password'></TextInput>
        <Text>Forgot your password?</Text>

        <Pressable className="bg-white rounded-lg p-4 mt-4">
        <Text>Log In</Text>
        </Pressable>

        <Text>Or</Text>
        <Pressable className="bg-white rounded-lg p-4 mt-4">
        <Text>Continue with Google</Text>
        </Pressable>
        <Pressable className="bg-white rounded-lg p-4 mt-4">
        <Text>Continue with Apple</Text>
        </Pressable>    
    </View>
  )
}