import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { router } from 'expo-router';

import { supabase } from '../../lib/supabase';
import { useAuth } from '../../providers/AuthProvider';

export default function HomeScreen() {
  const { session } = useAuth();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert('Logout Failed', error.message);
      return;
    }

    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <Text>You are successfully logged in.</Text>

      <Text style={styles.email}>
        {session?.user.email}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#DC2626',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
