var links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseover", function(e) {
       e.target.offsetParent.childNodes[3].style.display = "block";
    });
});