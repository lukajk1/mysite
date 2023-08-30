var linksArt = ["https://hollywoodmoviecostumesandprops.blogspot.com/", "https://tituslunter.com/"];
var linksMath = ["https://www.a1k0n.net/2011/07/20/donut-math.html", "https://simblob.blogspot.com/2019/12/outlining-experiments.html"];
var linksThoughts = ["https://slatestarcodex.com/2014/07/30/meditations-on-moloch/", "https://www.hplovecraft.com/writings/texts/fiction/og.aspx"];
var linkPool = [];
var random1, random2, link;


function concat() {
    if (document.getElementById("thoughts").checked) {
        linkPool.push(linksThoughts);
    }
    if (document.getElementById("math").checked) {
        linkPool.push(linksMath);
    }
    if (document.getElementById("art").checked) {
        linkPool.push(linksArt);
    }
    random1 = Math.floor(Math.random() * linkPool.length);
    var ff = linkPool[random1];
    random2 = Math.floor(Math.random() * ff.length);
    link = linkPool[random1][random2];
    
}

document.getElementById("go-button").addEventListener("click", go);

function go() {
    linkPool = [];
    concat();
    window.open(link, '_blank');
}

export { linksArt };