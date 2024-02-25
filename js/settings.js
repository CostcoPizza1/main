var themeSetting = document.getElementById("theme-selector");

themeSetting.addEventListener("change", () => {
  console.log("Changed theme to " + themeSetting.value);
  document.body.setAttribute("theme", themeSetting.value);
  localStorage.setItem("theme", themeSetting.value);
});

document.body.setAttribute("theme", localStorage.getItem("theme"));
console.log("Theme: " + localStorage.getItem("theme"));
