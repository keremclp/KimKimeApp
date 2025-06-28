import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'red',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 100,
        height: 100,
    },
    formContainer: {
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.textSecondary,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
        gap: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        backgroundColor: Colors.inputBackground,
        color: Colors.textPrimary,
        width: '100%',
    },
    loginButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 20,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    loginButtonText: {
        color: Colors.buttonText,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberMeCheckbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    rememberMeText: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: '600',
    },
    
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        fontSize: 16,
        color: Colors.textSecondary,
    },
    registerLink: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: '600',
    },
})