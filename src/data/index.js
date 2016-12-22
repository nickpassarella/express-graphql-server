const videoA = {
  id: 'a',
  title: 'video one',
  duration: 120,
  released: true,
};

const videoB = {
  id: 'b',
  title: 'video two',
  duration: 240,
  released: false,
};

const videos = [videoA, videoB];

const getVideos = () => new Promise((resolve) => resolve(videos));

const createVideo = ({ title, duration, released }) => {
  const video = {
    id: (new Buffer(title, 'utf8')).toString('base64'),
    title,
    duration,
    released,
  };

  videos.push(video);

  return video;
}

const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  })

  resolve(video);
});

const getObjectById = (type, id) => {
  const types = {
    video: getVideoById,
  };

  return types[type](id);
};

exports.getVideos = getVideos;
exports.getVideoById = getVideoById;
exports.createVideo = createVideo;
exports.getObjectById = getObjectById;
