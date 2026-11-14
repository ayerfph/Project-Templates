import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from "../constants/Colors"

const RootLayout = () => {
    const colorScheme= useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
    <StatusBar value="auto" />
    <View style={{ flex: 1}}>
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title
        }}>
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }}/>
            <Stack.Screen name="about" options={{ title: 'About'}}/>
        </Stack>
    </View>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})