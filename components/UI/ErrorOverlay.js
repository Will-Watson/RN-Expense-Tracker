import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text>An error occured!</Text>
      <Text>{message}</Text>
      <Button>Okay</Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ErrorOverlay;
