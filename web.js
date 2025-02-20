//this is the javascript for the toggle menu. 
var navLinks = document.getElementById("navLinks");
function showMenu()
{
    navLinks.style.right = "0";
}

function hideMenu()
{
    navLinks.style.right = "-200px";
}


//toggle button for dark and light mode
var icon = document.getElementById("icon");


//toggle button for dark and light mode which saves user settings when user changes page
if(localStorage.getItem("theme") == null)
{
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData == "light")
{
    icon.src = "wd_final_images/moon.png";
    document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
    icon.src = "wd_final_images/sun.png";
    document.body.classList.add ("dark-theme");
}

//toggle button for dark and light mode for when user clicks on icon. Image changes
icon.onclick = function()
{ 
    document.body.classList.toggle("dark-theme");
    
    
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src = "wd_final_images/sun.png";
        localstorage.setItem("theme", "dark");
    }
    
    else
    {
        icon.src = "wd_final_images/moon.png";
        localStorage.setItem("theme", "light");
    }
}




