import {View, ActivityIndicator} from 'react-native';

const LoadingOverlay = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="white" />
    </View>
  )
};

export default LoadingOverlay;
