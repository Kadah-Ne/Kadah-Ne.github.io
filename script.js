/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "330px";
    document.getElementById("main").style.marginRight = "3000px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  }

function moveTo(identifiant,item)
{
  var elements = document.getElementById(identifiant);
  elements.scrollIntoView({behavior: "smooth", block: "nearest"});
  item.style.backgroundColor = "orange";
}
