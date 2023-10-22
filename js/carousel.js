var imgSrc, imgList, imgId;

$(document).ready(function(){
    $('img').click(function(){
        imgSrc = this.getAttribute('src');
        imgList = document.getElementById('main-content-body').getElementsByTagName('img');

        document.getElementById('display').setAttribute('src', imgSrc);
        document.getElementById('carousel').style.display= 'initial';

        for (let i = 0; i <= imgList.length; i++) {
            if (imgList[i].getAttribute('src') == imgSrc){
                imgId = i;
                break;
            }
        }

        document.getElementById('num').innerHTML = imgId + 1 + ' / ' + imgList.length;
    });
});

function setImage(id){
    if(id > imgList.length - 1) {
        imgId = 0;
    }
    else if (id < 0) {
        imgId = imgList.length - 1;
    }

    var src = imgList[imgId].getAttribute('src');
    document.getElementById('display').setAttribute('src', src);

    document.getElementById('num').innerHTML = imgId + 1 + ' / ' + imgList.length;

}

function changeImg(iterator) {
    imgId += iterator;
    setImage(imgId);
}

function closeCarousel() {
    document.getElementById('carousel').style.display= 'none';
}

document.onkeydown = function(e) {
    switch(e.which) {
        case 37:
            changeImg(-1);
            break;

        case 39:
            changeImg(1);
            break;

        case 27:
            closeCarousel();
            break;

        default: return;
    }
};