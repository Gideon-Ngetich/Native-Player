module.exports = async function() {
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
    
    // Android-specific requirements
    TrackPlayer.addEventListener('remote-duck', async ({ paused }) => {
      if (paused) await TrackPlayer.pause();
      else await TrackPlayer.play();
    });
  };