let shade1 = document.querySelectorAll(".shade1");
let shade2 = document.querySelectorAll(".shade2");
let shade3 = document.querySelectorAll(".shade3");
let shade4 = document.querySelectorAll(".shade4");
let shade5 = document.querySelectorAll(".shade5");





function generatecolor1(){
    const r =  Math.floor(Math.random()*256) + 100;
    const g =  Math.floor(Math.random()*256) + 100;
    const b =  Math.floor(Math.random()*256) + 100;
    const alpha = Math.floor(Math.random() *10);
        function componentToHex1(c) {
                let hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
    return "#" + componentToHex1(r) + componentToHex1(g) + componentToHex1(b) + alpha;
}

function generatecolor2(){
    const r =  Math.floor(Math.random()*256) + 100;
    const g =  Math.floor(Math.random()*256) + 100;
    const b =  Math.floor(Math.random()*256) + 100;
    const alpha = Math.floor(Math.random() *10);
        function componentToHex(c) {
                let hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + alpha;
}

function generatecolor3(){
    const r =  Math.floor(Math.random()*256) + 100;
    const g =  Math.floor(Math.random()*256) + 100;
    const b =  Math.floor(Math.random()*256) + 100;
    const alpha = Math.floor(Math.random() *10);
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + alpha;
}

function generatecolor4(){
    const r =  Math.floor(Math.random()*256) + 100;
    const g =  Math.floor(Math.random()*256) + 100;
    const b =  Math.floor(Math.random()*256) + 100;
    const alpha = Math.floor(Math.random() *10);
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + alpha;
}

function generatecolor5(){
    const r =  Math.floor(Math.random()*256) + 100;
    const g =  Math.floor(Math.random()*256) + 100;
    const b =  Math.floor(Math.random()*256) + 100;
    const alpha = Math.floor(Math.random() *10);
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) +alpha;
}




document.addEventListener('keydown', function(event){
    if (event.code === 'Space'){
        let color = generatecolor1();
        console.log(color)
    shade1.forEach(shade =>{
        shade.style.backgroundColor = color;
        document.getElementById('colorCode1').innerHTML = generatecolor1();
    });
}
    if (event.code === 'Space'){
        let color = generatecolor2();
    shade2.forEach(shade =>{
        shade.style.backgroundColor = color;
        document.getElementById('colorCode2').innerHTML = generatecolor2();

    });
}
    if (event.code === 'Space'){
        let color = generatecolor3();
    shade3.forEach(shade =>{
        shade.style.backgroundColor = color;
        document.getElementById('colorCode3').innerHTML = generatecolor3();

    });
}
    if (event.code === 'Space'){
        let color = generatecolor4();
    shade4.forEach(shade =>{
        shade.style.backgroundColor = color;
        document.getElementById('colorCode4').innerHTML = generatecolor4();

    });
}
    if (event.code === 'Space'){
        let color = generatecolor5();
    shade5.forEach(shade =>{
        shade.style.backgroundColor = color;
        document.getElementById('colorCode5').innerHTML = generatecolor5();

    });
}
})



// function generatecolor1(){
//     const r =  Math.floor(Math.random()*256) + 100;
//     const g =  Math.floor(Math.random()*256) + 100;
//     const b =  Math.floor(Math.random()*256) + 100;

//     function componentToHex(c) {
//                 let hex = c.toString(16);
//                 return hex.length == 1 ? "0" + hex : hex;
//             }
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            
// }

// document.addEventListener('keydown', function(event){
//     if (event.code === 'Space'){
//         let color = generatecolor1();
//         console.log(color)
//     shade1.forEach(shade =>{
//         shade.style.backgroundColor = color;
//         document.getElementById('colorCode1').innerHTML = generatecolor1();
//     });
// }
// });