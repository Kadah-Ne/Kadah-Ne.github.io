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


function scrollToRight()
{
  var scrolling = document.getElementById("InfosAPropos");
  scrolling.scrollLeft += 1672;
  console.log(scrolling.scrollLeft)
}

function scrollPointInfos()
{
  switch (document.getElementById("InfosAPropos").scrollLeft) 
  {
    case 0 :
      makeBold("P1I") ;
      unBold("P2I");
      unBold("P3I");
      break;
    case 1672 :
      makeBold("P2I");
      unBold("P1I");
      unBold("P3I");
      break;
    case 3345 :
      makeBold("P3I");
      unBold("P1I");
      unBold("P2I");
      break;
  }  
}

function scrollPointComps()
{
  switch (document.getElementById("ITSkills").scrollLeft) 
  {
    case 0 :
      makeBold("P1C") ;
      unBold("P2C");
      unBold("P3C");
      unBold("P4C");
      unBold("P6C");
      unBold("P5C");
      break;
    case 1672 :
      makeBold("P2C");
      unBold("P1C");
      unBold("P3C");
      unBold("P4C");
      unBold("P6C");
      unBold("P5C");
      break;
    case 3371 :
      makeBold("P3C");
      unBold("P1C");
      unBold("P2C");
      unBold("P4C");
      unBold("P5C");
      unBold("P6C");
      break;
    case 5070 :
      makeBold("P4C");
      unBold("P1C");
      unBold("P2C");
      unBold("P3C");
      unBold("P5C");
      unBold("P6C");
      break;
    case 6769 :
      makeBold("P5C");
      unBold("P1C");
      unBold("P2C");
      unBold("P4C");
      unBold("P3C");
      unBold("P6C");
      break;
    case 8442 :
      makeBold("P6C");
      unBold("P1C");
      unBold("P2C");
      unBold("P4C");
      unBold("P5C");
      unBold("P3C");
      break;
  }  
}

function scrollPointJobs()
{
  switch (document.getElementById("ExperiencesPro").scrollLeft) 
  {
    case 0 :
      makeBold("P1J") ;
      unBold("P2J");
      unBold("P3J");
      unBold("P4J");
      unBold("P6J");
      unBold("P5J");
      break;
    case 1672 :
      makeBold("P2J");
      unBold("P1J");
      unBold("P3J");
      unBold("P4J");
      unBold("P6J");
      unBold("P5J");
      break;
    case 3371 :
      makeBold("P3J");
      unBold("P1J");
      unBold("P2J");
      unBold("P4J");
      unBold("P5J");
      unBold("P6J");
      break;
    case 5070 :
      makeBold("P4J");
      unBold("P1J");
      unBold("P2J");
      unBold("P3J");
      unBold("P5J");
      unBold("P6J");
      break;
    case 6769 :
      makeBold("P5J");
      unBold("P1J");
      unBold("P2J");
      unBold("P4J");
      unBold("P3J");
      unBold("P6J");
      break;
    case 8442 :
      makeBold("P6J");
      unBold("P1J");
      unBold("P2J");
      unBold("P4J");
      unBold("P5J");
      unBold("P3J");
      break;
  }  
}

function scrollPointSchools()
{
  switch (document.getElementById("Education").scrollLeft) 
  {
    case 0 :
      makeBold("P1S") ;
      unBold("P2S");
      unBold("P3S");
      break;
    case 1672 :
      makeBold("P2S");
      unBold("P1S");
      unBold("P3S");
      break;
    case 3345 :
      makeBold("P3S");
      unBold("P1S");
      unBold("P2S");
      break;
  }  
}

function scrollToPosition(element,pos)
{
  document.getElementById(element).scrollLeft = pos
}

function makeBold(Point)
{
  document.getElementById(Point).style.height = "18px";
  document.getElementById(Point).style.width = "18px";
  document.getElementById(Point).style.borderStyle = 'outset'
}

function unBold(Point)
{
  document.getElementById(Point).style.height = "15px";
  document.getElementById(Point).style.width = "15px";
  document.getElementById(Point).style.borderStyle = 'none'
}