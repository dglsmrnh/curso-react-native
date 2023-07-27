# curso-react-native
Repositório com projeto do curso de React Native

# Criando mobile app utilizando React Native
## Follow instructions to install
- Follow this installation instructions: https://docs.expo.dev/get-started/installation/ (only the first time)
- Run on terminal: 
  - `cd my-app`
  - `npm install`
  - `$npx expo start` on Powershell
  - or `set NODE_OPTIONS=--openssl-legacy-provider && npx expo start` on Command Prompt
- or follow instructions on https://docs.expo.dev/get-started/create-a-new-app/ to run on emulator or any device on the same network as your pc.

## Important notes
- Universal Components style used: **NativeBase** - docs here: https://docs.nativebase.io/getting-started
- To build the app follow this instructions:
  - Download and install eas: https://docs.expo.dev/build/setup/
  - Run on terminal:
    - `npx eas build -p android --profile preview` - this will generate a apk for android
  - More on this docs: https://docs.expo.dev/build-reference/apk/
- Using **React Navigation** to moving between screens - docs here: https://reactnavigation.org/docs/hello-react-navigation
- Using **Redux Toolkit** to manage global data - docs here: https://redux-toolkit.js.org/tutorials/quick-start
- Using **@expo/vector-icon** to icons: https://icons.expo.fyi/