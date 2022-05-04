const initState = {
  videos: [
    {
      url: "https://youtu.be/otJmf3pyb1E",
      piece: "Symphonic Dances Op. 45",
      composer: "Sergei Rachmaninoff",
      performer: "Radio Filharmonisch Orkest (Edward Gardner)",
    },
    {
      url: "https://youtu.be/jv2WJMVPQi8",
      piece: "Symphony No. 5",
      composer: "Ludwig van Beethoven",
      performer: "West-Eastern Divan Orchestra (Daniel Barenboim)",
    },
    {
      url: "https://youtu.be/O_tPb4JFgmw",
      piece: "Symphony No. 9 'From the New World'",
      composer: "Antonín Dvořák",
      performer: "Gimnazija Kranj Symphony Orchestra (Nejc Bečan)",
    },
    {
      url: "https://youtu.be/Xplx64LVENg",
      piece: "Symphony No. 3",
      composer: "Gustav Mahler",
      performer: "Lucerne Festival Orchestra (Claudio Abbado)",
    },
    {
      url: "https://youtu.be/o4UScRNrb5M",
      piece: "Symphony No. 4",
      composer: "Johannes Brahms",
      performer: "Oslo Philharmonic (Klaus Mäkelä)",
    },
  ],
};

const VideoReducer = (state = initState, action) => {
  return state;
};

export default VideoReducer;
