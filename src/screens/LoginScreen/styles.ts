import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    formContainer: {
        backgroundColor: Colors.cardBackground,
        padding: 30,
        borderRadius: 12,
        shadowColor: Colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.textSecondary,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
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