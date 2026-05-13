# DocAssist - App Store Publishing Guide

Complete guide to publish DocAssist on Google Play Store and Apple App Store.

---

## 📋 Prerequisites

### For Both Stores:
- ✅ Completed mobile app setup (Capacitor configured)
- ✅ App tested on real devices
- ✅ Privacy Policy URL (REQUIRED)
- ✅ App icons and screenshots ready

### iOS App Store:
- **Apple Developer Account**: $99/year
  - Sign up: https://developer.apple.com/programs/
- **macOS computer** with Xcode installed
- **Test device** (iPhone/iPad)

### Google Play Store:
- **Google Play Developer Account**: $25 one-time fee
  - Sign up: https://play.google.com/console/signup
- **Android Studio** installed
- **Test device** (Android phone/tablet)

---

## 🤖 Google Play Store Publishing

### Step 1: Prepare Your App

#### 1.1 Build Your App
```bash
npm run build
npm run cap:add:android
npm run cap:sync
```

#### 1.2 Open in Android Studio
```bash
npm run cap:android
```

#### 1.3 Configure App Details
In `android/app/build.gradle`, verify:
- `applicationId`: `com.docassist.app`
- `versionCode`: `1` (increment for each update)
- `versionName`: `"1.0.0"`

#### 1.4 Create App Icon
- Create a 512x512 PNG icon
- Use Android Studio's Image Asset Studio:
  - Right-click `res` folder → New → Image Asset
  - Select "Launcher Icons"
  - Upload your 512x512 icon
  - Generate all required sizes automatically

### Step 2: Generate Signed Bundle (AAB)

**⚠️ CRITICAL: Save your keystore file and passwords securely! You'll need them for ALL future updates.**

1. In Android Studio: **Build → Generate Signed Bundle / APK**
2. Select **Android App Bundle** (required for Play Store)
3. Click **Create new keystore**:
   - **Key store path**: Save as `docassist-keystore.jks` (save in a secure location!)
   - **Password**: Create a strong password (SAVE IT!)
   - **Key alias**: `docassist-key`
   - **Key password**: Create password (SAVE IT!)
   - **Validity**: 25 years
   - **Certificate info**: Fill in your details
     - First and Last Name: Your name
     - Organizational Unit: Your organization
     - Organization: Your organization name
     - City: Your city
     - State: Your state
     - Country Code: Your country code (e.g., IN for India)
4. Click **OK**
5. Select **release** build variant
6. Click **Finish**
7. Your AAB file is created: `android/app/release/app-release.aab`

### Step 3: Create Google Play Developer Account

1. Go to: https://play.google.com/console/signup
2. Pay $25 one-time registration fee
3. Complete account setup
4. Accept Developer Distribution Agreement

### Step 4: Create Your App in Play Console

1. Go to: https://play.google.com/console
2. Click **Create app**
3. Fill in:
   - **App name**: `DocAssist`
   - **Default language**: English
   - **App or game**: App
   - **Free or paid**: Free
   - **Declarations**: Complete all required checkboxes
4. Click **Create app**

### Step 5: Complete Store Listing

#### 5.1 Main Store Listing

**App name**: `DocAssist`

**Short description** (80 characters max):
```
Clinical decision support tool for Rabies PEP assessment
```

**Full description** (4000 characters max):
```
DocAssist is a clinical decision support tool designed to assist healthcare professionals in determining whether Rabies Vaccine and/or Rabies Immunoglobulin (RIG) are required following an animal exposure when the patient presents for the first time after exposure.

This support tool is based on the National Guidelines for Rabies Prophylaxis 2019 issued by MOHFW, Govt of India.

Features:
• Step-by-step clinical assessment workflow
• Clear categorization of exposure types (Category I, II, III)
• Evidence-based recommendations
• Detailed clinical information and guidelines
• Easy-to-use interface for healthcare professionals
• Pre-exposure prophylaxis assessment
• Vaccination history evaluation

Developed by medical professionals and software engineers to support clinical decision-making in rabies prophylaxis.

Credits:
Conceptualized and created by:
- Dr. Nitin Sinha, Professor, Department of Medicine, ABVIMS & Dr. RML Hospital
- Mr. Pranav Nigam, Senior Software Engineer

With contributions from:
- Dr. Mala Chhabra, Senior Consultant, Microbiology, ABVIMS & Dr. RML Hospital
```

**App icon**: 512x512 PNG (transparent background recommended)

**Feature graphic**: 1024 x 500 pixels (required)
- This appears at the top of your Play Store listing
- Should be visually appealing and represent your app

**Screenshots** (Required):
- **Phone**: At least 2, up to 8 screenshots
  - Minimum: 320px
  - Maximum: 3840px
  - Aspect ratio: 16:9 or 9:16
- **Tablet** (7-inch and 10-inch): At least 1, up to 8 screenshots each
  - Recommended for better visibility

**How to take screenshots:**
1. Run your app on a device/emulator
2. Navigate through key screens
3. Take screenshots (Power + Volume Down on Android)
4. Edit/crop to required sizes
5. Upload to Play Console

#### 5.2 Categorization

- **App category**: Medical
- **Tags**: Healthcare, Medical, Clinical Decision Support

#### 5.3 Content Rating

1. Click **Content rating**
2. Complete the questionnaire:
   - Does your app collect user data? (Likely "No" for DocAssist)
   - Does your app contain medical/health information? (Yes)
   - Complete all questions honestly
3. Submit for rating
4. Typically gets "Everyone" or "Teen" rating

#### 5.4 Privacy Policy (MANDATORY)

**You MUST provide a privacy policy URL!**

1. Create a privacy policy (see Privacy Policy section below)
2. Host it on a publicly accessible URL
3. Enter the URL in Play Console

**Privacy Policy Template for DocAssist:**
```
Privacy Policy for DocAssist

Last updated: [Date]

DocAssist ("we", "our", or "us") operates the DocAssist mobile application.

Information Collection and Use

DocAssist does not collect, store, or transmit any personal information or user data. All clinical assessments and data entered by users remain on the device and are not transmitted to any external servers.

Data Storage

All data entered in the app is stored locally on your device. We do not have access to this information.

Third-Party Services

DocAssist does not integrate with any third-party services that collect user data.

Children's Privacy

Our app is designed for healthcare professionals. We do not knowingly collect information from children.

Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

Contact Us

If you have any questions about this Privacy Policy, please contact us at [your email].
```

**Free Privacy Policy Hosting Options:**
- GitHub Pages (free)
- Netlify (free)
- Your own website
- Privacy policy generators: https://www.freeprivacypolicy.com/

#### 5.5 Data Safety

1. Go to **Data safety** section
2. Declare what data you collect:
   - For DocAssist: Select "No data collected" if app is fully offline
   - If you add analytics later, update this section

### Step 6: Upload Your App Bundle

1. Go to **Production** (or **Testing** for beta testing first)
2. Click **Create new release**
3. Upload your `.aab` file (`app-release.aab`)
4. **Release name**: `1.0.0` (or `Version 1.0`)
5. **Release notes** (500 characters max):
```
Initial release of DocAssist

Features:
- Clinical decision support for Rabies PEP
- Based on National Guidelines for Rabies Prophylaxis 2019
- Step-by-step assessment workflow
- Pre-exposure prophylaxis evaluation
- Vaccination history assessment
- Clear recommendations with detailed explanations
```

### Step 7: Review and Submit

1. Review all sections (should have green checkmarks):
   - ✅ Store listing
   - ✅ Content rating
   - ✅ Privacy policy
   - ✅ Data safety
   - ✅ App access (if applicable)
   - ✅ Ads (if applicable)
   - ✅ Target audience
   - ✅ News apps (if applicable)
   - ✅ COVID-19 contact tracing (if applicable)

2. Click **Start rollout to Production**

3. Your app is submitted for review
   - Review typically takes 1-7 days
   - You'll receive email notifications

### Step 8: After Approval

- App goes live automatically
- Monitor reviews and analytics in Play Console
- Respond to user reviews
- Plan updates and improvements

---

## 🍎 iOS App Store Publishing

### Step 1: Prepare Your App

#### 1.1 Build Your App
```bash
npm run build
npm run cap:add:ios
npm run cap:sync
```

#### 1.2 Open in Xcode
```bash
npm run cap:ios
```

#### 1.3 Configure App Details
In Xcode:
1. Select your project in the left sidebar
2. Select the **DocAssist** target
3. Go to **General** tab:
   - **Display Name**: `DocAssist`
   - **Bundle Identifier**: `com.docassist.app` (or your custom one)
   - **Version**: `1.0.0`
   - **Build**: `1`
   - **Deployment Target**: iOS 13.0 or higher (recommended)

#### 1.4 App Icons
1. In Xcode, go to **Assets.xcassets**
2. Click **AppIcon**
3. Add icons in required sizes:
   - 20x20 (2x, 3x)
   - 29x29 (2x, 3x)
   - 40x40 (2x, 3x)
   - 60x60 (2x, 3x)
   - 76x76 (1x, 2x)
   - 83.5x83.5 (2x)
   - 1024x1024 (1x) - **Required for App Store**

**Tip**: Create one 1024x1024 icon, then use online tools to generate all sizes:
- https://www.appicon.co/
- https://www.makeappicon.com/

#### 1.5 Launch Screen (Splash Screen)
1. In **Assets.xcassets**, create or edit **LaunchImage**
2. Add launch screen images or use storyboard

### Step 2: Signing & Certificates

1. In Xcode, go to **Signing & Capabilities** tab
2. Select your **Team** (your Apple Developer account)
3. Enable **Automatically manage signing**
4. Xcode will automatically:
   - Create development certificates
   - Create provisioning profiles
   - Handle code signing

**Note**: You need an Apple Developer account ($99/year) for this.

### Step 3: Test on Device

1. Connect your iPhone/iPad via USB
2. Select your device from the device dropdown in Xcode
3. Click **Run** (▶️) button
4. App installs and runs on your device
5. Test all features thoroughly

### Step 4: Create Archive

1. In Xcode: **Product → Destination → Any iOS Device**
2. **Product → Archive**
3. Wait for archive to complete (may take a few minutes)
4. **Window → Organizer** opens automatically
5. Your archive appears in the list

### Step 5: Upload to App Store Connect

1. In Organizer, select your archive
2. Click **Distribute App**
3. Select **App Store Connect**
4. Click **Next**
5. Select **Upload**
6. Click **Next**
7. Select your distribution certificate (usually auto-selected)
8. Click **Next**
9. Review and click **Upload**
10. Wait for upload to complete (10-30 minutes)
11. You'll see "Upload Succeeded"

### Step 6: App Store Connect Setup

#### 6.1 Create App
1. Go to: https://appstoreconnect.apple.com
2. Click **My Apps → + (New App)**
3. Fill in:
   - **Platform**: iOS
   - **Name**: `DocAssist`
   - **Primary Language**: English
   - **Bundle ID**: `com.docassist.app` (must match Xcode)
   - **SKU**: `docassist-001` (unique identifier, can be anything)
   - **User Access**: Full Access
4. Click **Create**

#### 6.2 App Information
- **Category**: 
  - Primary: Medical
  - Secondary: Health & Fitness
- **Content Rights**: Yes (you own the content)
- **Age Rating**: Complete questionnaire
  - Medical/Treatment Information: Yes
  - Unrestricted Web Access: No (if app is offline)
  - Typically results in 4+ rating

#### 6.3 Pricing and Availability
- **Price**: Free (recommended for medical app)
- **Availability**: All countries or select specific ones

#### 6.4 Prepare for Submission

**Version Information:**

1. **Screenshots** (Required):
   - **iPhone 6.7" Display** (1290 x 2796 pixels): 3-10 screenshots
   - **iPhone 6.5" Display** (1242 x 2688 pixels): 3-10 screenshots
   - **iPad Pro 12.9"** (2048 x 2732 pixels): 3-10 screenshots (optional but recommended)

   **How to take screenshots:**
   - Run app on simulator: Device → Screenshot
   - Or use real device: Screenshot (Power + Volume Up)
   - Edit to required sizes

2. **Description**:
```
DocAssist is a clinical decision support tool designed to assist healthcare professionals in determining whether Rabies Vaccine and/or Rabies Immunoglobulin (RIG) are required following an animal exposure when the patient presents for the first time after exposure.

This support tool is based on the National Guidelines for Rabies Prophylaxis 2019 issued by MOHFW, Govt of India.

Features:
• Step-by-step clinical assessment workflow
• Clear categorization of exposure types
• Evidence-based recommendations
• Detailed clinical information and guidelines
• Easy-to-use interface for healthcare professionals
• Pre-exposure prophylaxis assessment
• Vaccination history evaluation

Developed by medical professionals and software engineers to support clinical decision-making in rabies prophylaxis.
```

3. **Keywords** (100 characters max, comma-separated):
```
rabies, PEP, prophylaxis, vaccine, clinical decision, healthcare, medical, RIG, immunoglobulin
```

4. **Support URL**: Your website or GitHub repository URL

5. **Marketing URL**: (Optional) Your website

6. **Privacy Policy URL**: **REQUIRED** - Must be publicly accessible
   - Use the same privacy policy as Play Store
   - Must be a valid URL

7. **Promotional Text** (170 characters, optional):
```
Clinical decision support for Rabies PEP. Based on National Guidelines 2019. Free for healthcare professionals.
```

8. **What's New in This Version** (4000 characters):
```
Initial release of DocAssist

Features:
- Clinical decision support for Rabies PEP
- Based on National Guidelines for Rabies Prophylaxis 2019
- Step-by-step assessment workflow
- Pre-exposure prophylaxis evaluation
- Vaccination history assessment
- Clear recommendations with detailed explanations
```

#### 6.5 Build Selection
1. Wait for your uploaded build to appear (may take 10-30 minutes)
2. Select the build from the dropdown
3. Build must show "Ready to Submit"

#### 6.6 App Review Information
- **Contact Information**: Your contact details
- **Demo Account**: Not required if app doesn't need login
- **Notes**: Any special instructions for reviewers

#### 6.7 Version Release
- **Automatically release this version**: Yes (or set a specific date)
- **Manually release this version**: If you want to control when it goes live

### Step 7: Submit for Review

1. Review all sections (should be complete)
2. Click **Submit for Review**
3. Confirm submission
4. Status changes to "Waiting for Review"

### Step 8: Review Process

- **Typical review time**: 24-48 hours
- You'll receive email notifications:
  - "Waiting for Review"
  - "In Review"
  - "Ready for Sale" (approved) or "Rejected" (with reasons)

### Step 9: After Approval

- App goes live automatically (or on your scheduled date)
- Monitor reviews and analytics in App Store Connect
- Respond to user reviews
- Plan updates and improvements

---

## 📋 Required Assets Checklist

### App Icons:
- [ ] iOS: 1024x1024 PNG (generates all sizes)
- [ ] Android: 512x512 PNG (Android Studio generates others)

### Screenshots:
- [ ] iOS: iPhone 6.7" (1290 x 2796) - 3-10 screenshots
- [ ] iOS: iPhone 6.5" (1242 x 2688) - 3-10 screenshots
- [ ] iOS: iPad Pro 12.9" (2048 x 2732) - 3-10 screenshots (optional)
- [ ] Android: Phone (2-8 screenshots, 16:9 or 9:16)
- [ ] Android: Tablet 7" and 10" (1-8 each, recommended)

### Store Assets:
- [ ] Android: Feature graphic (1024 x 500 pixels)
- [ ] App descriptions (short and full)
- [ ] Keywords
- [ ] Release notes

### Legal Documents:
- [ ] Privacy Policy (MANDATORY for both stores)
- [ ] Terms of Service (Recommended)
- [ ] Medical Disclaimer (Important for healthcare apps)

---

## ⚠️ Important Notes

### Privacy Policy
- **MANDATORY** for both stores
- Must be publicly accessible URL
- Should clearly state data collection (likely "none" for DocAssist)
- Can use free hosting (GitHub Pages, Netlify)

### Medical App Considerations
- Add clear medical disclaimer in app
- State it's a decision support tool, not replacement for professional judgment
- Consider regulatory requirements in your region

### Testing
- **Always test on real devices** before submitting
- Test all flows and edge cases
- Check on different screen sizes
- Verify offline functionality

### Updates
- For updates: Increment version number
- Build new bundle/archive
- Upload and submit for review again
- **Android**: Keep same keystore (never lose it!)
- **iOS**: Xcode handles certificates automatically

### Costs
- **Google Play**: $25 one-time
- **Apple App Store**: $99/year
- Both are required to publish

---

## ⏱️ Timeline Estimate

- **Setup & Configuration**: 2-4 hours
- **Asset Creation**: 2-3 hours (icons, screenshots)
- **First Submission**: 1-2 hours
- **Review Time**: 
  - iOS: 24-48 hours
  - Android: 1-7 days
- **Total**: ~1 week from start to live

---

## 🆘 Support Resources

- **Apple Developer Support**: https://developer.apple.com/support/
- **Google Play Help**: https://support.google.com/googleplay/android-developer
- **Capacitor Docs**: https://capacitorjs.com/docs
- **App Store Review Guidelines**: https://developer.apple.com/app-store/review/guidelines/
- **Play Store Policies**: https://play.google.com/about/developer-content-policy/

---

## ✅ Final Checklist Before Submission

### Both Stores:
- [ ] App tested on real devices
- [ ] All features working correctly
- [ ] Privacy Policy created and hosted
- [ ] App icons ready (all sizes)
- [ ] Screenshots taken and edited
- [ ] App description written
- [ ] Keywords selected
- [ ] Release notes prepared

### iOS Specific:
- [ ] Apple Developer account active
- [ ] App signed and archived
- [ ] Build uploaded to App Store Connect
- [ ] All metadata filled in App Store Connect

### Android Specific:
- [ ] Google Play Developer account created
- [ ] Signed AAB generated
- [ ] Keystore file saved securely
- [ ] All store listing information complete

---

Good luck with your app launch! 🚀

If you need help with any specific step, refer to the official documentation or reach out for assistance.

