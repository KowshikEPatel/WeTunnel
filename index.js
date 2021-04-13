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

function pinger(){

  
  fetch('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=AIzaSyBZBpp5F7A7C9q38arfOfGr209ZTfWIhUc')
  .then(response=>console.log(response.json()))
}

function pingerPostAuthorization(){
  console.log(window.location.href)
  let x=window.location.href
  let y = x.split("&")
  console.log(y)
  let access_token = y[1].split("=")[1]
  console.log(access_token);
  fetch(`https://www.googleapis.com/youtube/v3/channels?access_token=${access_token}&part=snippet&mine=true`)
  .then(response=>response.json())
  .then(data=>console.log(data))

  fetch(`https://www.googleapis.com/youtube/v3/channels?access_token=${access_token}&part=contentDetails&mine=true`)
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
    console.log(data.contentDetails)
    console.log(data.contentDetails.relatedPlaylists)
    console.log(data.contentDetails.relatedPlaylists.likes)

    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?access_token=${access_token}&part=contentDetails&playlistId=${data.contentDetails.relatedPlaylists.likes}`)
    .then(response=>console.log(response.json()))
  })

  fetch(`https://www.googleapis.com/youtube/v3/playlists?access_token=${access_token}&part=snippet&mine=true`)
  .then(response=>console.log(response.json()))

  
}





