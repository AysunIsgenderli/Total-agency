'use strict'

const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
let index = 1;

prevBtn.addEventListener("click", function () {
  console.log(index);

  document.querySelector(`.carousel-item${index}`).style.display = "none";
//   document.querySelector(`.card${index}`).style.display = "none";
  if (index > 1) {
    index--;
  } else {
    index = 3;
  }
  document.querySelector(`.carousel-item${index}`).style.display = "block";
//   document.querySelector(`.card${index}`).style.display = "block";
});

nextBtn.addEventListener("click", function () {
  console.log(index);
  document.querySelector(`.carousel-item${index}`).style.display = "none";
//   document.querySelector(`.card${index}`).style.display = "none";
  if (index < 3) {
    index++;
  } else {
    index = 1;
  }
  
  document.querySelector(`.carousel-item${index}`).style.display = "block";
//   document.querySelector(`.card${index}`).style.display = "block";

});

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let item = 1;
leftBtn.addEventListener('click', function(){
  document.querySelector(`.card${index}`).style.display = "none";
  if (index >1 ) {
    index++;
  } else {
    index = 3;
  }
    document.querySelector(`.card${index}`).style.display = "block";

})
rightBtn.addEventListener('click', function(){
    document.querySelector(`.card${index}`).style.display = "none";
    if (index < 3) {
      index++;
    } else {
      index = 1;
    }
      document.querySelector(`.card${index}`).style.display = "block";
  
  })
