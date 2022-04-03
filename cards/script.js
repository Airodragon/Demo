let all_box = document.querySelectorAll('.box');
all_box.forEach(box => {
    box.addEventListener('mouseover', function () { 
        let class_name = box.classList[1];
        // console.log(class_name);  
        box.style.border = `1px solid ${class_name}`;
        box.style.transform = 'scale(1.02)';
    })
    box.addEventListener('mouseout', function () {
        let class_name = box.classList[1];
        box.style.border = `0px`;
        box.style.borderTop = `3px solid ${class_name}`;
        box.style.transform = 'scale(1)';
    })
});
let all_i = document.querySelectorAll('i');
all_i.forEach(i => {
    i.addEventListener('mouseover', function () {
        i.style.transform = 'scale(1.5)';
    })
    i.addEventListener('mouseout', function () {
        i.style.transform = 'scale(1)';
    })
});


// CURSOR

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})