import { View, Text, StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'
import { useState, useEffect } from 'react'
import { Pressable, TextInput } from 'react-native-gesture-handler'

export default function SignUp(props: any) {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [validEmail, setValidEmail] = useState<boolean>(false)
    const [validPassword, setValidPassword] = useState<boolean>(false)


    useEffect(() => {
        if (email.indexOf('@') > 0) {
            setValidEmail(true)
        }
        else {
            setValidEmail(false)
        }
    }, [email])

    useEffect(() => {
        if (password.length >= 8) {
            setValidPassword(true)
        }
        else {
            setValidPassword(false)
        }
    }, [password])

    return (
        <ThemedView style={styles.container}>
            <View style={styles.form}>
                <ThemedText style={styles.title}>Sign Up</ThemedText>

                <ThemedText>Email</ThemedText>
                <TextInput
                    style={styles.input}
                    placeholder='you@example.com'
                    onChangeText={(val => console.log(val))}
                    value={email} />

                <ThemedText>Password</ThemedText>
                <TextInput
                    style={styles.input}
                    placeholder='minimum 8 characters'
                    secureTextEntry={true}
                    onChangeText={(val => console.log(val))}
                    value={password} />


                <Pressable
                    style={(validEmail && validPassword) ? styles.button : styles.buttonDisabled}
                    disabled={!(validEmail && validPassword)}>
                    <ThemedText style={styles.buttonText}>Sign Up</ThemedText>
                </Pressable>


                {/* <Link href="/(tabs)">
                    <ThemedText>Go to Home</ThemedText>
                </Link> */}
            </View>
        </ThemedView >
    )
}

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 50,
        marginTop: 20,
        marginBottom: 15,
        padding: 15,
        fontSize: 15
    },
    input: {
        backgroundColor: "#e5d5ed",
        padding: 6,
        borderRadius: 16,
        marginBottom: 15,
    }
    ,
    title: {
        fontSize: 32,
        color: "lavender",
        textAlign: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        marginTop: 20,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "lavender",
        padding: 5,
        borderRadius: 20,
    },
    buttonDisabled: {
        marginTop: 20,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        padding: 5,
        borderRadius: 20,
    },
    buttonText: {
        justifyContent: "center"
    }
})