# Reel Insight - Movies at Your Fingertips

## Description
Reel Insight is an simple tool that enables users to discover and manage movies in a simple and intuitive way. Designed with movie enthusiasts in mind, the application provides easy access to detailed movie information and allows users to create their own watchlists.

![reel-insight-graphic](https://github.com/Pako2425/Reel-Insight-Movie-Details-at-Your-Fingertips/assets/84390058/4d80076a-0a2f-4164-af3a-2db75e984454)

Video presentation: [https://studio.youtube.com/video/EBraC-pFicc/edit](https://www.youtube.com/watch?v=EBraC-pFicc&ab_channel=PatrykKoci%C5%84ski)
<br/>
<br/>
## Main features
### Data download
The app uses OMDb API (The Open Movie Database) https://www.omdbapi.com. The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by its users.

### Movie searching
As a user, you must enter the title of the movie/series or a keyword related to it.

### To watch list
When you find interesting title you could add it to your 'to watch' list. Every movie could be added only once. You could delete selected position whenever you want.
<br/>
<br/>
## Technology stack
-React Native<br/>
-Node.js<br/>
-Android Studio<br/>
<br/>
<br/>

## Some screen-shots
![main](https://github.com/Pako2425/Reel-Insight-Movie-Details-at-Your-Fingertips/assets/84390058/1f19d8c8-9f18-4db7-9c3c-5deb21347eea)
![main-search](https://github.com/Pako2425/Reel-Insight-Movie-Details-at-Your-Fingertips/assets/84390058/0363fdbb-1cf4-405e-8427-0be6cc235686)
![results](https://github.com/Pako2425/Reel-Insight-Movie-Details-at-Your-Fingertips/assets/84390058/24aff9ac-d30f-40d5-b3cb-4d053aa06044)
![details](https://github.com/Pako2425/Reel-Insight-Movie-Details-at-Your-Fingertips/assets/84390058/70349453-a370-4cd1-847d-935c5e516407)
![add-to-watch-list](https://github.com/Pako2425/Reel-Insight-Movie-Details-at-Your-Fingertips/assets/84390058/dba74365-2520-42ef-a194-9b0eea4c95d1)
![towatch-list](https://github.com/Pako2425/Reel-Insight-Movie-Details-at-Your-Fingertips/assets/84390058/f502c257-663f-4234-8680-ec4d45d62676)

<br/>
<br/>
# How to run on your device
### First way - download zip file, un-zip and transfer .apk file on your phone.
[apk-release.zip](https://github.com/user-attachments/files/15568393/apk-release.zip)

### Second way - download repository and build apk file.


## 1. Required tools:
  1. Node.js - necessary for running React Native commands and managing dependencies with npm. Install [Node.js](https://nodejs.org/en/download/package-manager/current)
  2. React Native CLI - could you install `npm install -g react-native-cli`
  3. Android Studio - Android Studio is essential for building Android applications. Install [Android Studio](https://developer.android.com/studio?hl=pl) and configure SDK.

## 2. Installing dependencies.
  Go to main project directory `Reel-Insight-Movie-Details-at-Your-Fingertips`.

## 3. Building the project.
  Place your terminal directory to `android`.
  
  cd android
  
  For Windows: gradlew assembleRelease
  For Linux: ./gradlew assembleRelease

