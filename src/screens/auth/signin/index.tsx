import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, CustomButton, CustomInput, Label } from '../../../component'
import { SF, SH, SW, Colors } from '../../../utils'

const SignIn = () => {
  return (
    <Container isScrollable>
      <View
        style={{
          marginTop: SH(50),
          backgroundColor: Colors.white,
          padding: SW(15),
          borderRadius: SW(5),
        }}>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Label
            text="Welcome,"
            style={{ fontSize: SF(30), fontWeight: '700' }}
          />
          <Pressable onPress={() => { }}>
            <Label
              text="Sign Up"
              style={{
                fontSize: SF(14),
                fontWeight: '500',
                color: Colors.primary,
              }}
            />
          </Pressable>
        </View>
        <View style={{ paddingVertical: SH(15) }}>
          <Label
            text="Sign in to Continue"
            style={{
              fontSize: SF(16),
              //fontWeight: '500',
              color: Colors.darkGray,
            }}
          />
        </View>
        <View style={{ paddingVertical: SH(10) }}>
          <CustomInput
            onChangeText={() => { }}
            value={'john@doe.com'}
            keyboardType="email-address"
            label="Email"
            placeholder="john@doe.com"
          />
        </View>
        <View style={{paddingVertical: SH(10)}}>
          <CustomInput
            value='sdasdas'
            onChangeText={(text) => {}}
            secureTextEntry
            label="Password"
            placeholder="Password"
            // value="*******"
          />
        </View>
        <Pressable
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: SH(10),
          }}>
          <Label
            text="Forgot password"
            style={{
              fontSize: SF(14),
              // fontWeight: '500',
            }}
          />
        </Pressable>
        <CustomButton isLoading={false}  onPress={()=>{}} label="Sign in" />
      </View>
    </Container>
  )
}

export default SignIn

const styles = StyleSheet.create({

})