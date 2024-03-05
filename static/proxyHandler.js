import StrShuffler from "/lib/StrShuffler.js";
import Api from "/lib/api.js";
const api = new Api();
const shuffleDict = await api.shuffleDict(id);
var shuffler = new StrShuffler(shuffleDict);
var sessionId = localStorage.getItem("");
function endsWith(string, string2){
  if(string.slice(string.length - string2.length, string.length) == string2){
    return true;
  } else{
    return false;
  }
}
if(__uv$config){
  var mainUrl = new URL(__uv$config.decodeUrl(location.href.slice(location.origin.length + __uv$config.prefix.length, location.href.length)));
  if(endsWith(mainUrl.hostname, ".nvidia.com") || endsWith(mainUrl.hostname, ".geforcenow.com") || endsWith(mainUrl.hostname, ".now.gg") || mainUrl.hostname == "now.gg"){
    
  }
}
