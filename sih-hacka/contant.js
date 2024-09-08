function back(e) {
    window.location.href = "course.html"
}
function next(e) {
    window.location.href = "#"  // add thr database logic    
}
document.getElementById("back").onclick = function(){
    back();
}


 // On window load, start the progress animation
window.onload = function() {
  const progressBar = document.getElementById("courseProgress");
  progressBar.classList.add("fill"); // Start the progress bar animation
};

