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
/*<script src="https://apis.google.com/js/api.js"></script>
    <h1>WeTunnel </h1>
    <h2>Ease your YouTube journey</h2>

    <a href="privacypolicy.html">Privacy policy</a>
    <a href="termsofservice.html">Terms of service</a>
     */

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
}

function pingForSubscription(){

  console.log("in construction")

}

function uploadAVideo(){

  console.log("in construction")

}

function uploadAPlaylist(){
  console.log("in construction")

}






