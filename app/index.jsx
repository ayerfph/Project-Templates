import { StyleSheet, Text, View, Image} from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/android-icon-foreground.png'

import Themedview from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedColor from '../components/ThemedText'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <Themedview style={styles.container}>
      <ThemedLogo/>
      <Spacer height={10}/>
      <ThemedText style={styles.title}>This is a Home Screen</ThemedText>
      <Spacer height={10}/>
      <ThemedText style={styles.context}>This project goal is to familiarized React Native and Expo Setups.</ThemedText>
      <Spacer />
      <Link href='/about' style={styles.card}><ThemedText>Click Here to Go to Other Page Setup.</ThemedText></Link>
    </Themedview>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    card: {
      backgroundColor: '#f01234',
      padding: 20,
      borderRadius: 15,
      boxShadow: '2px 2px rgba(0,0,0,0.1)',
    },
    context: {
      fontSize: 16,
      marginBottom: 50,
      textAlign: 'center'
    }
})