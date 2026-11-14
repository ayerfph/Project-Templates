import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/android-icon-background.png'

const About = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>This Is Another Page</Text>

      <Link href='/login' style={styles.card}>Click Here to Go to The First Page Setup.</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 50
    },
    image: {
      marginVertical: 0,
      width: '80%',
      height: 200,
      marginBottom: 50
    },
    card: {
      backgroundColor: '#eee',
      padding: 20,
      borderRadius: 15,
      boxShadow: '2px 2px rgba(0,0,0,0.1)',
      marginBottom: 50
    },
    context: {
      fontSize: 16,
      marginBottom: 50,
      textAlign: 'center'
    }
})