import StrShuffler from "/lib/StrShuffler.js";
import Api from "/lib/api.js";
async function checkForRedirect(){
const api = new Api();
var mainArray = JSON.parse(atob(location.hash.slice(1)));
var sessionId = localStorage.getItem("sessionId");
const shuffleDict = await api.shuffleDict(sessionId);
var shuffler = new StrShuffler(shuffleDict);
function endsWith(string, string2){
  if(string.slice(string.length - string2.length, string.length) == string2){
    return true;
  } else{
    return false;
  }
}
if(mainArray[1]){
  var mainUrl = new URL(__uv$config.decodeUrl(mainArray[0].slice(location.origin.length + __uv$config.prefix.length, mainArray[0].length)));
  if(endsWith(mainUrl.hostname, ".nvidia.com") || endsWith(mainUrl.hostname, ".geforcenow.com") || endsWith(mainUrl.hostname, ".now.gg") || mainUrl.hostname == "now.gg"){
    location.href = "/" + sessionId + "/" + shuffler.shuffle(mainUrl.href);
  }
} else{
  var mainUrl = new URL(shuffler.unshuffle(mainArray[0].replace(location.origin + "/" + sessionId + "/", "")));
  if(!(endsWith(mainUrl.hostname, ".nvidia.com") || endsWith(mainUrl.hostname, ".geforcenow.com") || endsWith(mainUrl.hostname, ".now.gg") || mainUrl.hostname == "now.gg")){
  let x = await fetch("/uv/uv.bundle.js");
  let y = await x.text();
  eval(y);
  let a = await fetch("/uv/uv.config.js");
  let b = await a.text();
  eval(b);
  document.querySelector("iframe").location.href = __uv$config.prefix + __uv$config.encodeUrl(mainUrl.href);
  }
}
}
checkForRedirect();
