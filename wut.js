var data = ["ldjsaf;lkjsdf;lksjdf;lkje;oewjfpiuwh098h3489h098n0f820q589u2q098230ju5g058u0g98u40r489eut0w98rguwwk3490gu5390"];
var blob = new Blob(data, {"type": "image\/png"});
window.URL = window.webkitURL;
var img = document.createElement('img');
img.src = window.URL.createObjectURL(blob);
document.body.appendChild(img);
