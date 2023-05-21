var imgSrc, imgList, imgId;

$("img").click(function(){
    
    imgSrc = this.getAttribute("src");
    //imgList = document.getElementsByTagName("img");
    imgList = document.getElementById("pf").getElementsByTagName("img");
    
    document.getElementById("display").setAttribute("src", imgSrc);
    document.getElementById("carousel").style.display= "initial";
    
    for (let i = 0; i <= imgList.length; i++) {
        if (imgList[i].getAttribute("src") == imgSrc){
            imgId = i;
            break;
        }
    }
    
    document.getElementById("num").innerHTML = imgId + 1 + " of " + imgList.length;
});

function setImage(id){
    if(id > imgList.length - 1) {
        imgId = 0;
    }
    else if (id < 0) {
        imgId = imgList.length - 1;
    }
    
    var src = imgList[imgId].getAttribute("src");
    document.getElementById("display").setAttribute("src", src);
    
    document.getElementById("num").innerHTML = imgId + 1 + " of " + imgList.length;
        
}

function nextImg() {
    imgId += 1;
    setImage(imgId);
}

function prevImg() {
    imgId -= 1;
    setImage(imgId);
}

function closeCar() {document.getElementById("carousel").style.display= "none";}

document.onkeydown = function(e) {
    switch(e.which) {
        case 37:
            prevImg();
            break;

        case 39:
            nextImg();
            break;
            
        case 27:
            closeCar();
            break;

        default: return;
    }
};