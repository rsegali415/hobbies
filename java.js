var MyNavBar=document.getElementById("nav")

window.onscroll=function() {
    if (document.body.scrollTop>=280||document.documentElement.scrollTop >= 280){
        MyNavBar.classList.add("scroll");
    }
    else {
        MyNavBar.classList.remove("scroll")
    }
}