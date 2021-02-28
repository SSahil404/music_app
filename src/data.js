import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Sleepover",
      artist: "Nymano, JK the Sage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      id: uuidv4(),
      color: ["#65547C", "#926793"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
      active: true,
    },
    {
      name: "Wildlife",
      artist: "Philanthrope, chromonicci",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      color: ["#301A1B", "#D47E5F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
      active: false,
    },
    {
      name: "The End",
      artist: "Philanthrope, Fujitsu",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      id: uuidv4(),
      color: ["#384A70", "#A6E7F8"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8518",
      active: false,
    },
    {
      name: "Flushing the Stairs",
      artist: "Leavv",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
      id: uuidv4(),
      color: ["#053742", "#3F7778"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10315",
      active: false,
    },
  ];
}

export default chillHop;
