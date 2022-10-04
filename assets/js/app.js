// alert("hello")
let cl=console.log;

const moviesoptionRow=document.getElementById("moviesOption");

const searchBarInput=document.getElementById("searchBar");

//<<<<<<<<<<<function>>>>>>>>>>

function moviearray(array){
    let result="";
    array.forEach(function(ele,i) {
        
        result+=`<div class="col-md-3">
        <div class="card">
            <figure class="imgfig">
                 <img src= ${IMG_PATH}${ele.poster_path} alt=${ele.title} title=${ele.title}  class="img-fluid img-resize">
                <figcaption class="p-2">
                    <div class="row">
                    <div class="col-sm-9 text-white">
                    <p>${ele.title}</p>
                    </div>
                    <div class="col-sm-3">
                    <p class="ratingVal font-weight-bold ${ratingavg(ele.vote_average )} text-center align-items-center">${ele.vote_average}</p>
                    
                    </div>
                    </div>
                </figcaption>
                    <div class="overview p-2">
                        <h5>overview</h5>
                         <p>${ele.overview}</p>
                    </div>
            </figure>
        </div>
    </div>  `
 });


 return result
}

moviesoptionRow.innerHTML=moviearray(results);


function keyUpInput(event){

        // cl("trig")
    let getLength=event.target.value;
    // cl(getLength)  

    let pusharr=[];
    
    if(getLength.length){

    if(event.keyCode===13){
        // cl(event)

        results.forEach(function(ele){

      if(ele.title.toLowerCase().includes(getLength.toLowerCase())){
        // cl(ele);
           pusharr.push(ele)

           cl(pusharr);

           moviesoptionRow.innerHTML=moviearray(pusharr);

      }
        
        })



    }
    }else{
        moviesoptionRow.innerHTML=moviearray(results);

    }
}



function ratingavg(ele) {
    if (ele >= 8) {

      return "text-success";
    } 
    else if (ele >= 5) {
    return "text-warning";
    } 
    else {
     return "text-danger";
    }
  }


//>>>>>>>>>>>>event Binding<<<<<<<<<<<<<<<<<

searchBarInput.addEventListener("keyup",keyUpInput)
