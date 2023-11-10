import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {height, width} = Dimensions.get('window');

const isSmallDevice = width <= 375 && !DeviceInfo.hasNotch();

function guidelinesBaseWidth() {
  if (isSmallDevice) {
    return 330;
  }

  return 350;
}

function guidelinesBaseHeight() {
  if (isSmallDevice) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
}

function guidelinesBaseFont() {
  if (width > 410) {
    return 430;
  }

  return 400;
}

function horizontalScale(size) {
  return (width / guidelinesBaseWidth()) * size;
}

function verticalScale(size) {
  return (height / guidelinesBaseHeight()) * size;
}

function scaleFontSize(size) {
  return Math.round((width / guidelinesBaseFont()) * size);
}

export {horizontalScale, verticalScale, scaleFontSize};
