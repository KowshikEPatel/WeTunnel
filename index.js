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
     

function authorize(){
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': '590286321652-8q6ovcufajo6n018aogjgaeq8r5ji9be.apps.googleusercontent.com',
                  'redirect_uri': 'https://wetunnelutube.netlify.app',
                  'response_type': 'token',
                  'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                  'include_granted_scopes': 'true',
                  'state': 'pass-through value'};
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
    console.log(form);
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();

}

function pingerPostAuthorization(){
 
  let x=window.location.href
  let y = x.split("&")
  
  let access_token = y[1].split("=")[1]
  console.log(access_token);
const myHeaders = new Headers();

const myRequest = new Request(`https://www.googleapis.com/youtube/v3/channels?access_token=${access_token}&part=snippet&mine=true`, {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});
 
 fetch(myRequest)
 .then(response=>{return response.json()})
 .then(data=>console.log(data))

 const myHeaders1 = new Headers();

const myRequest1 = new Request(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyBZBpp5F7A7C9q38arfOfGr209ZTfWIhUc`, {
  method: 'GET',
  headers: myHeaders1,
  mode: 'cors',
  cache: 'default',                     
});
 
 fetch(myRequest1)
 .then(response=>{return response.json()})
 .then(data=>{
  
  console.log(data)
  console.log(data.kind)
  })

  const myHeaders2 = new Headers();
  const myRequest2 = new Request(`https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&q=GoogleDevelopers&type=playlist`, {
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

 
}

function searchFunction(){

  /*determine the serach key and search type in the options and input type */
  /* pick the correct corresponding api to ping and ping it  */
  // decide a way to show the results other than just embedding 
console.log("in construction")

}

function pingForActivity(){
  
  console.log("in construction")
  let baseApi = `https://www.googleapis.com/youtube/v3/` 
  let extensionForActivity = `activities?part=snippet,contentDetails&mine=true&publishedAfter=2021-04-01T00%3A00%3A00Z&publishedBefore=2013-04-16T00%3A00%3A00Z`
  let x=window.location.href
  let y = x.split("&")
  
  let access_token = y[1].split("=")[1]
  let callApi = baseApi + extensionForActivity + `&access_token=${access_token}` 
  console.log(callApi);
  const myHeaders1 = new Headers();
  const myRequest1 = new Request(callApi, {
    method: 'GET',
    headers: myHeaders1,
    mode: 'cors',
    cache: 'default',                     
  });
   
   fetch(myRequest1)
   .then(response=>{return response.json()})
   .then(data=>{
    console.log(data)
})

  extensionForActivity = `activities?part=snippet,contentDetails&home=true`;
  callApi = baseApi + extensionForActivity + `&access_token=${access_token}`;
  const myHeaders2 = new Headers();
  const myRequest2 = new Request(callApi, {
    method: 'GET',
    headers: myHeaders2,
    mode: 'cors',
    cache: 'default',                     
  });
   
   fetch(myRequest2)
   .then(response=>{return response.json()})
   .then(data=>{
    console.log(data)
})
}

let baseApi = `https://www.googleapis.com/youtube/v3/` 

function pingForSubscription(){
let extensionForSubs = `subscriptions?part=snippet`
let x=window.location.href
let y = x.split("&")

let access_token = y[1].split("=")[1]
let callapi = baseApi + extensionForSubs + `&access_token=${access_token}`;
 
 fetch(callapi,{
  method:'POST',
  body:{
    'snippet': {
      'resourceId': {
        'kind': 'youtube#channel',
        'channelId': 'UCknLrEdhRCp1aegoMqRaCZg' 
       }
     }
  },

 })
 .then(response=>response.json())
 .then(data=>console.log(data))
  console.log("in construction")

}

function uploadAVideo(){

  console.log("in construction")

}

function uploadAPlaylist(){
  console.log("in construction")

}

// Load auth2 library
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Init API client library and set up sign in listeners
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
      signoutButton.onclick = handleSignoutClick;
    });
}

// Options
/*
const CLIENT_ID = '590286321652-8q6ovcufajo6n018aogjgaeq8r5ji9be.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');

const defaultChannel = 'techguyweb';

// Form submit and change channel
channelForm.addEventListener('submit', e => {
  e.preventDefault();

  const channel = channelInput.value;

  getChannel(channel);
});

// Load auth2 library
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Init API client library and set up sign in listeners
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
      signoutButton.onclick = handleSignoutClick;
    });
}

// Update UI sign in state changes
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    content.style.display = 'block';
    videoContainer.style.display = 'block';
    getChannel(defaultChannel);
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
    content.style.display = 'none';
    videoContainer.style.display = 'none';
  }
}

// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

// Display channel data
function showChannelData(data) {
  const channelData = document.getElementById('channel-data');
  channelData.innerHTML = data;
}

// Get channel from API
function getChannel(channel) {
  gapi.client.youtube.channels
    .list({
      part: 'snippet,contentDetails,statistics',
      forUsername: channel
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
}

// Add commas to number
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function requestVideoPlaylist(playlistId) {
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
      videoContainer.innerHTML = output;
    } else {
      videoContainer.innerHTML = 'No Uploaded Videos';
    }
  });
}*/







