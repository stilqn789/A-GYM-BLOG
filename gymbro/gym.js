function toggle(){
    var burgerM = document.getElementById("burger");
    if (burgerM.style.display == "none") {
        burgerM.style.display = "block";
    } else {
        burgerM.style.display = "none";
    }        
}

// function FilterMenu(){
//     var filterM = document.getElementById("filterMenu");
//     if (filterM.style.display == "none") {
//         filterM.style.display = "block";
//         filterM.style.position = "relative"
        
//     } else {
//         filterM.style.display = "none";
//     }        
// }

function toggleSecond(){
    var dropdownM = document.getElementById("dropDownMenu" );
    if (dropdownM.style.display == "none") {
        dropdownM.style.display = "block";
    } else {
        dropdownM.style.display = "none";
    } 
}

$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'vertical',
        auto: true,
        pause: 3000
    });
  });