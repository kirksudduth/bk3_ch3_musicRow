import { chatten, jumpStop, polar } from "./main.js";
console.log("create create create");
const artistPush = (artist) => {
  if (artist.genre === "country" || artist.genre === "bluegrass") {
    chatten.push(artist);
  } else if (artist.genre === "pop") {
    polar.push(artist);
  } else if (artist.genre === "funk" || artist.genre === "rap") {
    jumpStop.push(artist);
  }
};
const createArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age,
  };
};
export { artistPush, createArtist };
