import { React, useState } from 'react';
import {
  TextInput, TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';
import axios from 'axios';

function SignUpForm() {
  const [phone, setPhone] = useState('');
  const handleSubmit = async () => {
    try {
      await axios.post('https://createuser-be7txxgqsq-uc.a.run.app', {
        phone,
      });

      await axios.post('https://requestotp-be7txxgqsq-uc.a.run.app', {
        phone,
      });

      console.log("Test");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <View style={styles.signUpContainerStyle}>
      <TextInput
        value={phone}
        placeholder="Please Enter Phone Number"
        onChangeText={(number) => {
          const formattedPhone = number.replace(/[^0-9]/g, '');
          setPhone(formattedPhone);
        }}
        style={styles.signUpInputStyle}
      />
      <TouchableOpacity
        style={styles.signUpButtonStyle}
        onPress={handleSubmit}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.dividerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signUpContainerStyle: { alignItems: 'center', justifyContent: 'center' },
  signUpInputStyle: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
  },
  signUpButtonStyle: {
    height: 25,
    width: '50%',
    backgroundColor: 'blue',
    marginTop: 10,
  },
  dividerStyle:{
    borderWidth: 0.5, borderColor: 'black', width: '100%', marginTop: 10,
  }
});

export default SignUpForm;
