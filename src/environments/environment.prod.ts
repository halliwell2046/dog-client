export const environment = {
  production: true
};

export let APIURL = "";
export let MAPAPIKEY = "AIzaSyCWe1USFU9NpbwOkpKsE6X0mlouDBYc-W0";

switch (window.location.hostname) {
  // this is the deployed angular application
  case "doggo-client-server.herokuapp.com":
    // this is the full url of your deployed API
    APIURL = "https://doggo-server-efa.herokuapp.com";

    break;
  default:
    // this is the local host name of your API
    APIURL = "http://localhost:3000";
}
