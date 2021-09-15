
// let i = 0;
// const imageDiv = document.getElementById('images')
// const timeId = setInterval( function(){
//     i++
//     const url = `./images/${i}.jpg`
//     imageDiv.setAttribute('src',url);

//     if(i>=5){
//         i = 0
//     }
// }, 1000)


const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
];

let i = 0;
const imageDiv = document.getElementById('images')
setInterval(()=>{
    let img = images[i]
    i++
    if(i>=5){
        i = 0
    }
   imageDiv.setAttribute('src',img)

},1000)