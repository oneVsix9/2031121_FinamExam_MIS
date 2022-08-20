function meal_api () {
  var searchText = document.getElementById("search").value ; 

  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 

  fetch (url)
  .then(res => res.json()   )
  .then(data => display(data)   ); 

// clearing search box and prev. content 
   document.getElementById("search").value = " "; 
   document.getElementById("result").textContent = " ";

}

function display (data){
  var stop = parseInt(document.getElementById('limit').value) ; 
  document.getElementById("limit").value = " "; 
    var oldcontent = document.getElementById('result'); 
    for (var i = 0; i<stop; i++)
    {
      var newDiv = document.createElement("div");
   newDiv.innerHTML = `
   <div class="card class="col-12 col-md-6 col-lg-4">
  <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.meals[i].strMeal}</h5>
    
    
  </div>
</div> ` ;

    oldcontent.appendChild(newDiv);

  
    }
}