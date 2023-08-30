var linksArt = [
    "https://hollywoodmoviecostumesandprops.blogspot.com/", 
    "http://referenceangle.com/", 
    "https://www.artpad.org/", 
    "https://www.artstation.com/yokell", 
    "http://lingy-0.blogspot.com/", 
    "https://www.adrianwkbush.com/", 
    "http://gurneyjourney.blogspot.com/2009/02/sargents-painting-notes.html"
];

var linksMath = [
    "https://www.a1k0n.net/2011/07/20/donut-math.html", 
    "https://simblob.blogspot.com/2019/12/outlining-experiments.html"
];

var linksThoughts = [
    "https://slatestarcodex.com/2014/07/30/meditations-on-moloch/", 
    "https://www.hplovecraft.com/writings/texts/fiction/og.aspx"
];

var linksMisc = [
    "https://twitter.com/mbrennanchina/status/1072114511212109824?s=20",
    "https://www.youtube.com/watch?v=qIZL5qeEKj0",
    "https://www.youtube.com/watch?v=xQYI9mmcm4k"
];

var linkPool = [];
var random1, random2, link;

function getId(id) {
    return document.getElementById(id);
}

function concat() {
    if (getId("thoughts").checked) {
        linkPool.push(linksThoughts);
    }
    if (getId("math").checked) {
        linkPool.push(linksMath);
    }
    if (getId("art").checked) {
        linkPool.push(linksArt);
    }
    if (getId("misc").checked) {
        linkPool.push(linksMisc);
    }
    random1 = Math.floor(Math.random() * linkPool.length);
    var ff = linkPool[random1];
    random2 = Math.floor(Math.random() * ff.length);
    link = linkPool[random1][random2];
    
}

getId("go-button").addEventListener("click", go);

getId("math-label").innerHTML = "&nbsp;&nbsp;Math/Programming&nbsp;["+ linksMath.length +"]";
getId("thoughts-label").innerHTML = "&nbsp;&nbsp;Writing&nbsp;["+ linksThoughts.length +"]";
getId("art-label").innerHTML = "&nbsp;&nbsp;Art&nbsp;["+ linksArt.length +"]";
getId("misc-label").innerHTML = "&nbsp;&nbsp;Miscellaneous&nbsp;["+ linksMisc.length +"]";

function go() {
    linkPool = [];
    concat();
    window.open(link, '_blank');
}

export default { linksArt, linksMath, linksThoughts };