function navigateTo(url) {
  window.location.href = url;
}

document.addEventListener("mousemove", (e) => {
  const mouseCursor = document.createElement("div");
  mouseCursor.style.position = "absolute";
  mouseCursor.style.width = "10px";
  mouseCursor.style.height = "10px";
  mouseCursor.style.borderRadius = "50%";
  mouseCursor.style.backgroundColor = "#4a90e2";
  mouseCursor.style.pointerEvents = "none";
  mouseCursor.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(mouseCursor);

  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";

  setTimeout(() => {
    mouseCursor.remove();
  }, 100);
});
