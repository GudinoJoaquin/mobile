import Screen from '@/components/Screen';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1">
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    console.log('Cambios');
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <Screen>
      <View className="flex-1 items-center justify-start">
        <View className="bg-red-500">
          <CameraView style={styles.camera} facing={facing} />
        </View>
        <View className="width-full flex-row bg-blue-500 px-16">
          <Pressable className="flex-1 items-center" onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    width: 320,
    height: 320,
    borderRadius: 20,
    marginTop: 42,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
