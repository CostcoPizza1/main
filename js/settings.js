var themeSetting = document.getElementById("theme-selector");

themeSetting.addEventListener("change", () => {
  document.body.setAttribute("theme", themeSetting.value);
  localStorage.setItem("theme", themeSetting.value);
  console.log("Changed theme to " + themeSetting.value);
});
