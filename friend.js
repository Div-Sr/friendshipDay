var names = localStorage.getItem('name');
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("post_name").innerHTML = names;
});
