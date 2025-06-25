import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  backIcon: {
    position: 'absolute',
    top: 30,
    
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 14,
    flex: 0.3,
    justifyContent: 'center', 
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
  },
  inputContainer: {
    flex: 0.7,
    gap: 16,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 7,
    fontSize: 16,

  },


  checkboxContainer: {
    marginVertical: 24,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 14,
    marginBottom: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
