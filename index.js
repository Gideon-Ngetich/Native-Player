import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './App';
import { playbackService } from './services/playbackService';

// 1. Register main component first
AppRegistry.registerComponent('main', () => App);

// 2. Initialize TrackPlayer AFTER app registration
TrackPlayer.registerPlaybackService(() => playbackService);
TrackPlayer.setupPlayer().then(() => {
  TrackPlayer.updateOptions({
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP
    ]
  });
});