import "./App.css";
import Video from "./pages/Video";

const videoList = [
  {
    id: 1,
    url: "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z",
    alt: "Video of a cat jumping",
    userName: "Juca",
    description: "Brecker mostrando suas habilidades de goleiro.",
    music: "Epic music - Random artist",
    likeCount: 100,
    chatCount: 200,
    shareCount: 300,
  },
  {
    id: 2,
    url: "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z",
    alt: "Video of a cute cat",
    userName: "JuliaK",
    description: "Julia mostrando o seu charme",
    music: "X - Random artist",
    likeCount: 1000,
    chatCount: 2,
    shareCount: 30,
  },
];

function App() {
  return (
    <div className="App">
      <div className="app_video">
        {videoList.map((video) => (
          <Video key={video.id} videoInfo={video} />
        ))}
      </div>
    </div>
  );
}

export default App;
