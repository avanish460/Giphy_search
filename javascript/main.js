//1. Grab input value


document.querySelector(".js-go").addEventListener('click',function(){
    
    var input = document.querySelector("input").value;
  
    search(input);

});

//Grab the input and show it when enter encounter
document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    
    var input = document.querySelector("input").value;


    // when Enter is encounter then it happend
    if(e.which === 13){
    search(input);
    }

});


//2. do the data stuff with the API
function search(sear){
var url = "http://api.giphy.com/v1/gifs/search?q=" + sear + "&api_key=dc6zaTOxFJmzC";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  pushToDom(data);
  

});
}



//3. show me the gifs
function pushToDom(input){
    var response = JSON.parse(input);
  
    var imageUrls = response.data;
   

  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;
    console.log(src);

    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=" + src + " class=\"container-image\">";

  });

}