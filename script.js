document.addEventListener("mousemove", e => {
  let dot = document.createElement("div");
  dot.style.position = "fixed";
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  dot.style.width = "6px";
  dot.style.height = "6px";
  dot.style.borderRadius = "50%";
  dot.style.background = "#4da3ff";
  dot.style.boxShadow = "0 0 10px #4da3ff";
  document.body.appendChild(dot);

  setTimeout(() => dot.remove(), 400);
});
