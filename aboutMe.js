
    // function handleClick(id){
    // document.getElementById(id).style.color="red";
    // }


    // const toggleButton = document.getElementById("switch");

    // let darkModeEnabled = false;

    // function toggleButton() {
    // darkModeEnabled=!darkModeEnabled;

    // }

    // if (darkModeEnabled) {
    //     document.body.style.backgroundColor = "black";
    //     document.body.style.color = "white";
    //   } else {
    //     document.body.style.backgroundColor = "white";
    //     document.body.style.color = "black";
    //   }

    // function toggleButton(){
    //   let flag = document.getElementById('darkMode').value;
    //   if (flag===off){
    //     document.getElementById('darkMode').value='on';
    //     document.body.style.backgroundColor = "black";
    //     document.body.style.color = "white";
    //   }
    //   if(flag===on){
    //     document.getElementById('darkMode').value='off';
    //     document.body.style.backgroundColor = "white";
    //     document.body.style.color = "black";
    //   }
    // }
// function foodList(){
//   let listOpener = "<ul>";
//   let foodList = [Falalfel, Pasta, Pizza, Salad]
//   for(let i=0;i<=3;i++){
//     foodList[i]
//   }



//   let listCloser = "</ul>"}
//     let list<ul>

  

    const foods = ["Falalfel", "Pasta", "Pizza", "Salad"];
let makeList = `<ul> My favorite food`;
for (let i=0; i< foods.length; i++) {
  let element = foods[i];
  makeList +=`<li class="foodList">${element}</li>`;
}
// makeList += `</ul>`;
// console.log(makeList);
// //output: "<ul><li>Django</li><li>Seven</li><li>Batman</li></ul>"
// document.getElementById("my-id").outerHTML = makeList;
// document.getElementsByClassName("foodList").setAttribute()
// // document.getElementById("my-id").outerHTML = "<p>Hello</p><p>Hello2</p>";



let imageArray = [
  {
    description:"dogs pappy",
    src:'"/aboutMeProject/assets/puppy.jpg"',
    alt:'alt="pappy"',
  },
  {
    description:"football scored to the goal",
    src:'"/aboutMeProject/assets/soccer-ball-goal.webp"',
    alt:'alt="football"',
  },
  {
    description:"beautiful calming nature",
    src:'"/aboutMeProject/assets/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg"',
    alt:'alt="nature picture"',
}
]


function imagesFunction(array=[]) {
  let makeList = ``;
  for (let i = 0; i < imageArray.length; i++) {
    makeList += `<img src=${array[i].src} alt=${array[i].alt}>
     <p>${array[i].description},</p>
    </div>`;

  }
  let images = document.getElementById('images');
  images.setAttribute('class','images')
  return makeList;
}

// imagesPresentation.setAttribute("class", "imagesPresentation");

document.getElementById("images").innerHTML=imagesFunction(imageArray);
// We have a div element with id "images-description" (in the HTML file)
// document.getElementById("images-description").innerHTML =
//   renderImageList(imageArr);














