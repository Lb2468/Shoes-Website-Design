function showMenu(){
    let menulist = document.getElementById("menu-list");
    menulist.classList.toggle("open");
}
function displayImg( small){
    let big = document.getElementById("big-img");
   big.src = small.src ;

}