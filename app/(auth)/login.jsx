import { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email.trim() || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert('Login Failed', error.message);
      return;
    }

    router.replace('/home');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo-dark.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Hello! Kamusta Ka?</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="#0d1c23" />
          ) : (
            <Text style={styles.buttonText}>Sign-In</Text>
          )}
        </Pressable>

        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>

      <View style={styles.registerRow}>
        <Text style={styles.registerText}>Join the community, </Text>
        <Pressable onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Register Here!</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#0d1c23',
  paddingTop: 85,
  paddingHorizontal: 24,
},
logo: {
  width: 155,
  height: 155,
  marginBottom: 48,
},
title: {
  color: '#fff',
  fontSize: 28,
  fontWeight: '800',
  marginBottom: 58,
},
form: {
  width: '100%',
  maxWidth: 360,
},
label: {
  color: '#fff',
  fontSize: 12,
  marginBottom: 7,
},
input: {
  height: 48,
  borderWidth: 1,
  borderColor: '#31505a',
  borderRadius: 6,
  backgroundColor: '#192f37',
  color: '#fff',
  marginBottom: 28,
  paddingHorizontal: 14,
  fontSize: 16,
},
button: {
  height: 58,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#70d6c1',
  borderRadius: 6,
  marginTop: 18,
},
buttonText: {
  color: '#0d1c23',
  fontSize: 17,
},
forgot: {
  color: '#e3ad4c',
  textAlign: 'center',
  fontSize: 12,
  marginTop: 36,
},
registerRow: {
  flexDirection: 'row',
  marginTop: 100,
},
registerText: {
  color: '#fff',
  fontSize: 14,
},
registerLink: {
  color: '#70d6c1',
  fontSize: 14,
},
});