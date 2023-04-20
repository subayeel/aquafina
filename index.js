const leftServiceBox = document.querySelectorAll(".my-services-row-left");
const rightServiceBox = document.querySelectorAll(".my-services-row-right");
const servicesRoller = document.querySelectorAll("#services-circle");


window.addEventListener("scroll", animate);

function animate() {
  //For Service boxes
  const trigger = (window.innerHeight / 5) * 4;

  leftServiceBox.forEach((lb) => {
    const blTop = lb.getBoundingClientRect().top;

    if (blTop < trigger) {
      lb.classList.add("my-services-row-left-show");
    } else {
      lb.classList.remove("my-services-row-left-show");
    }
  });
  rightServiceBox.forEach((rb) => {
    const brTop = rb.getBoundingClientRect().top;
    if (brTop < trigger) {
      rb.classList.add("my-services-row-right-show");
    } else {
      rb.classList.remove("my-services-row-right-show");
    }
  });

  //for Rotating the Services SVG
  var theta = (document.documentElement.scrollTop / 100) % Math.PI;

  servicesRoller.forEach((roller) => {
    roller.style.transform =
      "translate3d(0px, 0px, 0px)" + "rotate(" + theta + "rad)";
  });
}
