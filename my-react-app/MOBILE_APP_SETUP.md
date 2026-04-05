# DocAssist - Mobile App Setup Guide

This guide will help you convert your React web app into native iOS and Android mobile apps using Capacitor.

## Prerequisites

- Node.js and npm installed
- For iOS: macOS with Xcode installed (free from Mac App Store)
- For Android: Android Studio installed (free)

## Step 1: Install Dependencies

First, install all the Capacitor dependencies:

```bash
npm install
```

This will install:
- `@capacitor/core` - Core Capacitor functionality
- `@capacitor/ios` - iOS platform support
- `@capacitor/android` - Android platform support

## Step 2: Build Your Web App

Build your React app for production:

```bash
npm run build
```

This creates an optimized build in the `build/` folder that will be used by the mobile apps.

## Step 3: Initialize Native Projects

### For iOS (macOS only):

```bash
npm run cap:add:ios
```

This creates the `ios/` folder with a native Xcode project.

### For Android:

```bash
npm run cap:add:android
```

This creates the `android/` folder with a native Android Studio project.

## Step 4: Sync Your Web Build to Native Projects

After building, sync your web app to the native projects:

```bash
npm run cap:sync
```

This command:
- Copies your `build/` folder to native projects
- Updates native dependencies
- Syncs configuration

**Important**: Always run `npm run build` before `npm run cap:sync` when you make changes!

## Step 5: Open in Native IDEs

### For iOS:

```bash
npm run cap:ios
```

This opens the project in Xcode where you can:
- Run on iOS Simulator
- Run on a connected iPhone/iPad
- Build for App Store

### For Android:

```bash
npm run cap:android
```

This opens the project in Android Studio where you can:
- Run on Android Emulator
- Run on a connected Android device
- Build APK or AAB for Play Store

## Development Workflow

1. **Make changes** to your React code
2. **Build** the web app: `npm run build`
3. **Sync** to native: `npm run cap:sync`
4. **Run** in Xcode/Android Studio or use live reload

## Testing on Devices

### iOS:
1. Connect your iPhone/iPad via USB
2. Open in Xcode: `npm run cap:ios`
3. Select your device from the device dropdown
4. Click the Run button (▶️)

### Android:
1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect via USB
4. Open in Android Studio: `npm run cap:android`
5. Click Run (▶️)

## Building for Production

### iOS (App Store):
1. Open in Xcode: `npm run cap:ios`
2. Product → Archive
3. Follow App Store submission process

### Android (Play Store):
1. Open in Android Studio: `npm run cap:android`
2. Build → Generate Signed Bundle / APK
3. Follow Play Store submission process

## Configuration

The app is configured in `capacitor.config.json`:
- **App ID**: `com.docassist.app` (change if needed)
- **App Name**: `DocAssist`
- **Web Directory**: `build` (your React build output)

## Troubleshooting

### Build fails:
- Make sure you ran `npm run build` first
- Check that the `build/` folder exists

### Sync fails:
- Delete `ios/` and `android/` folders
- Re-run `npm run cap:add:ios` and `npm run cap:add:android`
- Then `npm run cap:sync`

### App doesn't load:
- Check that you built the app: `npm run build`
- Re-sync: `npm run cap:sync`
- Check browser console for errors

## Available Scripts

- `npm run build` - Build React app for production
- `npm run cap:sync` - Sync web build to native projects
- `npm run cap:ios` - Open iOS project in Xcode
- `npm run cap:android` - Open Android project in Android Studio
- `npm run cap:add:ios` - Add iOS platform (first time only)
- `npm run cap:add:android` - Add Android platform (first time only)

## Next Steps

1. Test the app on real devices
2. Customize app icons and splash screens
3. Configure app signing for distribution
4. Prepare for App Store/Play Store submission

For more details, visit: https://capacitorjs.com/docs

