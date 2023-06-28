
$(".video-container").mouseover(function () {
  $('.switch-btn').show();
}).mouseout(function () {
  $('.switch-btn').hide();
})

$(".switch-btn").mouseover(function () {
$(this).show();
}).mouseout(function () {
$(this).hide();
})

//about-video

$(".about_video").mouseover(function () {
  $('.about_video_btn').show();
}).mouseout(function () {
  $('.about_video_btn').hide();
})

$(".about_video_btn").mouseover(function () {
$(this).show();
}).mouseout(function () {
$(this).hide();
})

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



const btn = document.querySelector(".switch-btn"),
 btnAbout = document.querySelector(".about_video_btn"),
 video = document.querySelector(".video-container");

 function showVideo() {

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

btnAbout.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

}
 
showVideo()



  /* main-tabs */


   /* about-video */


  //blog-video



  //contacts_tabs

 
 


