console.log("Keepit whunhunnid");
// import API from "./data.js";
import { artistPush, createArtist } from "./createArtist.js";
const jumpStop = [];
const polar = [];
const chatten = [];

console.log("Artist Created: ", createArtist("Tinsel Green", "pop", 57));
artistPush(createArtist("Bruce Atikins", "country", 23));
artistPush(createArtist("Jensen Brown", "pop", 20));
artistPush(createArtist("Dre Funkz", "funk", 25));
artistPush(createArtist("Dusta Grimes", "rap", 21));
artistPush(createArtist("Bartholomew Danielson", "bluegrass", 23));
artistPush(createArtist("Avilee Dallas", "country", 19));
artistPush(createArtist("Austin Kinkaid", "pop", 22));
artistPush(createArtist("Loyoncé Branis", "rap", 27));

// API.getArtists();
console.log("JumpStop: ", jumpStop);
console.log("Polar: ", polar);
console.log("Chatten: ", chatten);

export { jumpStop, polar, chatten };
