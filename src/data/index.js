const videoA = {
  id: 'a',
  title: 'video one',
  duration: 120,
  watched: true
};

const videoB = {
  id: 'b',
  title: 'video two',
  duration: 240,
  watched: false
};

const videos = [videoA, videoB];
const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  })

  resolve(video);
});

exports.getVideoById = getVideoById;
