//const { response } = require("express");

function createDomMani(ele,elementClass="",...arr){
    var element1=document.createElement(ele);
    element1.setAttribute("class",elementClass);
    for(let iter=0;iter<arr.length;iter++){
        if(arr[iter].includes("=")){
        let attreibute,attributename;
        [attreibute,attributename]=arr[iter].split("=");
        element1.setAttribute(attreibute,attributename);
        }
        else{
            element1.innerHTML=arr[iter];
       }    
    }
    return element1;
}
const CLIENT_ID = '590286321652-8q6ovcufajo6n018aogjgaeq8r5ji9be.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');

const carouselElement = document.getElementById("carouselExampleIndicators");
const videoCardElement = document.getElementById("videoContent");
const searchCardElement = document.getElementById("searchedContent");      

function handleClientLoad(){
  console.log("auth btn clicked")
  gapi.load('client:auth2', initClient);
  
}

function initClient() {
  gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
    .then(() => {
      // Listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle initial sign in state
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = signOutOfYoutbe;
    });
}

function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    carouselElement.style.display="none";
    signoutButton.style.display = 'block';
    videoCardElement.style.display = 'block';
    searchCardElement.style.display = 'none';
    getUserData();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
    carouselElement.style.display="block";
    videoCardElement.style.display = 'none';
    searchCardElement.style.display = 'none';
  }
}

function signOutOfYoutbe(){
  
  handleSignoutClick();
  searchCardElement.style.display = "none";
  videoCardElement.style.display = "none";
  carouselElement.style.display = "block";

}

function getUserData(){
console.log("i got user data");
const myHeaders2 = new Headers();
  const myRequest2 = new Request(`/activities?part=snippet,contentDetails&home=true`, {
  method: 'GET',
  headers: myHeaders2,
  mode: 'no-cors',
  cache: 'default',                     
});
 
fetch(myRequest2)
 .then(response=>{return response.json()})
 .then(data=>{
  
  console.log(data)
  
  })
  console.log(gapi.auth2.AuthResponse.id_token)


  gapi.client.youtube.channels.list({
    part : 'snipper,contentDetails,statistics'
  })
  .then(response=>{
    console.log(response);
  })

}

function searchelement()
{
  console.log("search btn clicked")

}