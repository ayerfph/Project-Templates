import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!email.trim() || !password || !confirmPassword) {
      Alert.alert('Error', 'Complete all fields.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert('Registration Failed', error.message);
      return;
    }

    if (!data?.session) {
      Alert.alert('Success', 'Account created! Please verify your email.');
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

      <Text style={styles.title}>Welcome Ka Dito!</Text>

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

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Pressable
          style={styles.button}
          onPress={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#0d1c23" />
          ) : (
            <Text style={styles.buttonText}>Register</Text>
          )}
        </Pressable>
      </View>

      <Pressable
        style={styles.loginLink}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.loginText}>
          Already Joined?{' '}
          <Text style={styles.loginHighlight}>Click Here!</Text>
        </Text>
      </Pressable>
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
    marginBottom: 38,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 50,
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
    marginBottom: 25,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  button: {
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#70d6c1',
    borderRadius: 6,
    marginTop: 14,
  },
  buttonText: {
    color: '#0d1c23',
    fontSize: 17,
  },
  loginLink: {
    marginTop: 58,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
  loginHighlight: {
    color: '#e3ad4c',
  },
});