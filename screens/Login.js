import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="#8c8c8c"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8c8c8c"
        secureTextEntry={true}
      />
     
      <Text style={styles.agreement}>
        <Text style={styles.registerText}>Forgot Password</Text> 
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>- OR Continue with -</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{
              uri: "https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{
              uri: "https://tse1.mm.bing.net/th?id=OIP.IyXyScHL0JK_GPheuXMWyQHaHa&pid=Api&P=0&h=180",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/019/766/198/non_2x/apple-logo-apple-icon-transparent-free-png.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.signInText}>
        Create an account{" "}
        <Text
          onPress={() => navigation.navigate("SignUp")}
          style={styles.link}
        >
          SignUp
        </Text>
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: "black",
    backgroundColor: "#f9f9f9",
  },
  agreement: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  registerText: {
    color: "red",
    fontWeight: "bold",
    marginRight:10,
  },
  button: {
    backgroundColor: "#ff4d4d",
    borderRadius: 8,
   alignItems: "center",
    marginBottom: 20,
    height:30,
    justifyContent:"center",
   
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginVertical: 15,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconButton: {
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  signInText: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
  },
  link: {
    color: "red",
    fontWeight: "bold",
  },
});
