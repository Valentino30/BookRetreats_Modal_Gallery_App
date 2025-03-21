const VideoPlayer = ({ video }) => {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <video className="rounded-2xl max-h-full max-w-full" controls preload={video.metadata}>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
