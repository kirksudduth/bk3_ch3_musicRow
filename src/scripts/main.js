console.log("Keepit whunhunnid");
import API from "./data.js";
const jumpStop = [];
const polar = [];
const chatten = [];

API.getArtists();
console.log("JumpStop: ", jumpStop);
console.log("Polar: ", polar);
console.log("Chatten: ", chatten);

export { jumpStop, polar, chatten };
