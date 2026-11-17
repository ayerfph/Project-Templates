import { Image, StyleSheet, Text, View, Pressable } from 'react-native';

import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-dark.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>TANAW</Text>
      <Text style={styles.subtitle}>
        Malawak na tanaw, Mulat na pamayanan
      </Text>

	  	<View style={styles.links}>
			<Pressable onPress={() => router.push('/login')}>
				<Text style={styles.link}>Login</Text>
			</Pressable>

			<Pressable onPress={() => router.push('/register')}>
				<Text style={styles.link}>Register</Text>
			</Pressable>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d1c23',
  },
  logo: {
    width: 190,
    height: 190,
    marginBottom: 42,
  },
  title: {
    color: '#fff',
    fontSize: 64,
    fontWeight: '900',
    letterSpacing: 1,
  },
  subtitle: {
    color: '#fff',
    fontSize: 13,
    marginTop: 10,
  },

  links: {
  flexDirection: 'row',
  gap: 20,
  marginTop: 28,
  },
	link: {
	color: '#fff',
	fontSize: 14,
	textDecorationLine: 'underline',
	},
});