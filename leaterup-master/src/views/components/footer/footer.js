window.onresize = function() {
  if (document.body.onresize<768) {
      document.getElementsByClassName("linkgrid").style.display="none";
  }
};