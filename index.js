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

let url_youtubeapi = 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true' 


fetch(url_youtubeapi,{
    headers:{
        "Authorization": "Bearer oauth2-token"
    }
})
.then(response=>response.json())
.then(data=>{
  console.log(data)
  
})
.catch(err=>console.log(err));