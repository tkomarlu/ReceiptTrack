@ECHO OFF
call react-native link react-native-fbsdk &
call react-native link react-native-gesture-handler &
call react-native link react-native-reanimated &
call react-native link react-native-svg &
call react-native link react-native-image-picker &
call react-native run-android
call react-native link react-native-vector-icons
PAUSE