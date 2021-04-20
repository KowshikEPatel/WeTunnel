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
  const myRequest2 = new Request(`https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&home=true`, {
  method: 'GET',
  headers: myHeaders2,
  mode: 'no-cors',
  cache: 'default',                     
});
 
fetch(myRequest2)
 .then(response=> response.json())
 .then(data=>{
  console.log(data)
  })
  console.log(gapi.auth2)//.AuthResponse.id_token
  gapi.client.youtube.channels.list({
    "part": [
      "id"
    ],
    "mine": true
  })
.then(function(response){
     // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
      console.log( "id",response.result.items[0].id);


  },
  function(err) { console.error("Execute error", err); });


  gapi.client.youtube.channels.list({
  part: 'snippet,contentDetails,statistics',
  forUsername: 'Kowshik E Patel'
  })
  .then(response => {
      console.log(response);
      const channel = response.result.items[0];
      const output = `
        <ul class="collection">
          <li class="collection-item">Title: ${channel.snippet.title}</li>
          <li class="collection-item">ID: ${channel.id}</li>
          <li class="collection-item">Subscribers: ${numberWithCommas(
            channel.statistics.subscriberCount
          )}</li>
          <li class="collection-item">Views: ${numberWithCommas(
            channel.statistics.viewCount
          )}</li>
          <li class="collection-item">Videos: ${numberWithCommas(
            channel.statistics.videoCount
          )}</li>
        </ul>
        <p>${channel.snippet.description}</p>
        <hr>
        <a class="btn grey darken-2" target="_blank" href="https://youtube.com/${
          channel.snippet.customUrl
        }">Visit Channel</a>
      `;
      showChannelData(output);

      const playlistId = channel.contentDetails.relatedPlaylists.uploads;
      requestVideoPlaylist(playlistId);

    })
    .catch(err => alert('No Channel By That Name'));
    console.log('authresponse',GoogleUser.getAuthResponse(true))
}

function searchelement()
{
  searchUiModifier();
  console.log("search btn clicked")
  let searchType = document.getElementById("searchtype").value;
  let searchKey = document.getElementById("searchelement").value;
  console.log(searchType,searchKey);
  
  let apiKey = 'AIzaSyBZBpp5F7A7C9q38arfOfGr209ZTfWIhUc';
  let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=${searchType}&part=snippet&maxResults=10&q=${searchKey}`;
  fetch(url)
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      let containerElement = document.getElementById("searchedContent");

      let rowElement = createDomMani("div","row");
        let input1Element = createDomMani("input","text","type=text");
        input1Element.value = searchKey;
        let buttonElement = document.getElementById("search-button");
        let searchTypeElement = document.getElementById("searchtype");
        rowElement.append(searchTypeElement,input1Element,buttonElement);
        let row2Element = createDomMani("div","row");
        data.items.forEach(element => {
          let columnElement = createDomMani("div","col-sm-4")
          let cardElement = createDomMani("div","card");
          let cardBodyElement = createDomMani("div","card-body");
          let iframe1Element = createDomMani("iframe","card-img-top",`src=https://www.youtube.com/embed/${element.id.videoId}`);
          let cardTitleElement = createDomMani("h5","card-title",`${element.snippet.title}`);
          let cardTextElement = createDomMani("p","card-text",`${element.snippet.channelTitle}`);
          cardBodyElement.append(cardTitleElement,cardTextElement);
          cardElement.append(iframe1Element,cardBodyElement);
          
          columnElement.append(cardElement);
          row2Element.append(columnElement);
        });
       containerElement.append(rowElement,row2Element);
    })

}

function searchUiModifier(){
  authorizeButton.style.display = 'none';
    carouselElement.style.display="none";
    signoutButton.style.display = 'none';
    videoCardElement.style.display = 'none';
    searchCardElement.style.display = 'block';
}

function showChannelData(data) {
  const channelData = document.getElementById('userActivity');
  channelData.innerText = data;
}


function requestVideoPlaylist(playlistId){

  let videorow=document.getElementById("usersChannels")
  const requestOptions = {
  playlistId: playlistId,
  part: 'snippet',
  maxResults: 10
};

const request = gapi.client.youtube.playlistItems.list(requestOptions);

request.execute(response => {
  console.log(response);
  const playListItems = response.result.items;
  if (playListItems) {
    let output = '<br><h4 class="center-align">Latest Videos</h4>';

    // Loop through videos and append output
    playListItems.forEach(item => {
      const videoId = item.snippet.resourceId.videoId;

      output += `
        <div class="col s3">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      `;
    });

    // Output videos
    videorow.innerHTML = output;
  } else {
    videorow.innerHTML = 'No Uploaded Videos';
  }
});
}