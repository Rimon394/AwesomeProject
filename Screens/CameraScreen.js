import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'react-native-vision-camera';

const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = async () => {
    if (isRecording) {
      await cameraRef.current.stopRecording();
    } else {
      const recording = await cameraRef.current.startRecording({
        // You can provide recording options here
      });
      console.log('Recording started:', recording.uri);
    }
    setIsRecording(!isRecording);
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.preview}
        cameraType={Camera.Type.Back}
        autoFocus={Camera.Constants.AutoFocus.On}
        flash={Camera.Constants.FlashMode.Auto}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleRecording} style={styles.button}>
          <Text style={styles.buttonText}>{isRecording ? 'Stop' : 'Start'} Recording</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CameraScreen;






/*
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Platform, Text, StyleSheet, View, PermissionsAndroid } from 'react-native';
import { Camera, getCameraPermissionStatus, useCameraDevices } from 'react-native-vision-camera';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';
import Canvas from 'react-native-canvas';

const TensorCamera = cameraWithTensors(Camera);

const { width, height } = Dimensions.get('window');

export default function CameraScreen() {
  const [model, setModel] = useState(null);
  const context = useRef(null);
  const canvas = useRef(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    (async () => {
      await tf.ready();
      setModel(await cocoSsd.load());
    })();
  }, []);

  useEffect(() => {
    console.log('Available Devices:', devices);
  }, [devices]);

  async function requestCameraPermission() {
    try {
      const status = await getCameraPermissionStatus();
      setCameraPermission(status);
      if (status !== 'authorized') {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setCameraPermission('authorized');
        } else {
          setCameraPermission('denied');
        }
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
    }
  }

  function handleCameraStream(images) {
    const loop = async () => {
      const nextImageTensor = images.next().value;

      if (!model || !nextImageTensor) throw new Error('no model');

      model
        .detect(nextImageTensor)
        .then((predictions) => {
          drawRectangle(predictions, nextImageTensor);
        })
        .catch((err) => {
          console.log(err);
        });

      requestAnimationFrame(loop);
    };
    loop();
  }

  function drawRectangle(predictions, nextImageTensor) {
    if (!context.current || !canvas.current) {
      console.log('no context or canvas');
      return;
    }

    console.log(predictions);

    const scaleWidth = width / nextImageTensor.shape[1];
    const scaleHeight = height / nextImageTensor.shape[0];

    const flipHorizontal = Platform.OS === 'ios' ? false : true;

    context.current.clearRect(0, 0, width, height);

    for (const prediction of predictions) {
      const [x, y, width, height] = prediction.bbox;

      const boundingBoxX = flipHorizontal
        ? canvas.current.width - x * scaleWidth - width * scaleWidth
        : x * scaleWidth;
      const boundingBoxY = y * scaleHeight;

      context.current.strokeRect(
        boundingBoxX,
        boundingBoxY,
        width * scaleWidth,
        height * scaleHeight
      );

      context.current.fillText(
        prediction.class,
        boundingBoxX - 5,
        boundingBoxY - 5
      );
    }
  }

  const handleCanvas = async (can) => {
    if (can) {
      can.width = width;
      can.height = height;
      const ctx = can.getContext('2d');
      context.current = ctx;
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
      ctx.lineWidth = 3;
      canvas.current = can;
    }
  };

  let textureDims;
  Platform.OS === 'ios'
    ? (textureDims = { height: 1920, width: 1080 })
    : (textureDims = { height: 1200, width: 1600 });

  if (cameraPermission !== 'authorized') {
    return <View style={styles.container}><Text>Camera permission not granted</Text></View>;
  }

  return (
    <View style={styles.container}>
      <TensorCamera
        style={styles.camera}
        type={Platform.OS === 'ios' ? Camera.Constants.Type.back : 'back'}
        device={device}
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={true}
        useCustomShadersToResize={false}
      />

      <Canvas style={styles.canvas} ref={handleCanvas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  canvas: {
    position: 'absolute',
    zIndex: 1000000,
    width: '100%',
    height: '100%',
  },
});
*/