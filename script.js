let mysta = document.getElementById('mysta');

mysta.addEventListener('mouseout', resetImages)
mysta.addEventListener('mouseover', testClick)

function resetImages() {
    mysta.src = "images/mysta.png"
}

function testClick() {
    mysta.src = "images/mystanew.png"
}

//

let shu = document.getElementById('shu');

shu.addEventListener('mouseout', resetshu)
shu.addEventListener('mouseover', hovershu)

function resetshu() {
    shu.src = "images/shu.png"
}

function hovershu() {
    shu.src = "images/Shunew.png"
}

//

let luca = document.getElementById('luca');

luca.addEventListener('mouseout', resetluca)
luca.addEventListener('mouseover', hoverluca)

function resetluca() {
    luca.src = "images/luca.png"
}

function hoverluca() {
    luca.src = "images/lucanew.png"
}

//

let vox = document.getElementById('vox');

vox.addEventListener('mouseout', resetvox)
vox.addEventListener('mouseover', hovervox)

function resetvox() {
    vox.src = "images/vox.png"
}

function hovervox() {
    vox.src = "images/voxnew.png"
}

//

let ike = document.getElementById('ike');

ike.addEventListener('mouseout', resetike)
ike.addEventListener('mouseover', hoverike)

function resetike() {
    ike.src = "images/ikee.png"
}

function hoverike() {
    ike.src = "images/ikenew.png"
}
