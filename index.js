const jumpUp = (event) => {
  if (document.querySelector("#upbutton").style.display == "block") {
    event.stopPropagation()
  }
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scroll(0, 0);
      setTimeout(jumpUp, 10);
  }
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 0) {
    document.querySelector("#upbutton").style.display = "block";
  } else {
    document.querySelector("#upbutton").style.display = "none";
  }
}

function attachEvent (event, handler, node) {
  node.addEventListener(event, handler);
  return () => {
    node.removeEventListener(event, handler);
  };
};

attachEvent("click", jumpUp, document.querySelector("#upbutton"))


const SliderСomponent = (function() {
  var image = 0;
  const arrImages = [
    "images/Rectangle3.png",
    "images/Rectangle2.png",
    "images/Rectangle4.png",
  ]
  const imgElement = document.createElement("img");
  imgElement.setAttribute("style", "height: 100%; width: 100%; object-fit: cover;");
  const domElement = document.querySelector("#slideEl");
  imgElement.src = arrImages[image]
  domElement.appendChild(imgElement)
  const labelPrvBtnElement = document.getElementsByName("labelPrvBtn")
  const labelNxtBtnElement = document.getElementsByName("labelNxtBtn")
  const nextButtonElement = document.querySelector("#nextButton")
  const prevButtonElement = document.querySelector("#prevButton")
  labelPrvBtnElement[0].style.opacity = 0.5
  labelPrvBtnElement[0].style.cursor = "default"
  prevButtonElement.style.disabled = true 

  return {
    nextSlide: function() {
      if (image == arrImages.length - 1) {
        labelNxtBtnElement[0].style.opacity = 0.5
        labelNxtBtnElement[0].style.cursor = "default"
        nextButtonElement.style.disabled = true
      }
      else {
        image++;
        if (image == arrImages.length - 1) {
          labelNxtBtnElement[0].style.opacity = 0.5
          labelNxtBtnElement[0].style.cursor = "default"
          nextButtonElement.style.disabled = true
        }
      }
      labelPrvBtnElement[0].style.opacity = 1
      labelPrvBtnElement[0].style.cursor = "pointer"
      prevButtonElement.style.disabled = false 
      imgElement.src = arrImages[image];
    },
    prevSlide: function() {
      if (image == 0) {
        labelPrvBtnElement[0].style.opacity = 0.5
        labelPrvBtnElement[0].style.cursor = "default"
        prevButtonElement.style.disabled = true 
      }
      else {
        image--;
        if (image == 0) {
          labelPrvBtnElement[0].style.opacity = 0.5
          labelPrvBtnElement[0].style.cursor = "default"
          prevButtonElement.style.disabled = true 
        }
      }
      labelNxtBtnElement[0].style.opacity = 1
      labelNxtBtnElement[0].style.cursor = "pointer"
      nextButtonElement.style.disabled = false
      imgElement.src = arrImages[image];
    },
  }
})()

attachEvent("click", SliderСomponent.nextSlide, document.querySelector("#nextButton"))
attachEvent("click", SliderСomponent.prevSlide, document.querySelector("#prevButton"))

function initMap() {
  const location = { lat: 49.98577607, lng: 36.22865885 };
  const map = new google.maps.Map(document.querySelector("#googleMap"), {
    zoom: 9,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}



