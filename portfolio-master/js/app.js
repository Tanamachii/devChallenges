const label = document.querySelectorAll(".filtrado .filtrado__label");
const projects = document.querySelectorAll(".projects__project");
let numero_proyectos = document.querySelector(".num_pro");
numero_proyectos.innerHTML = projects.length;

label.forEach((i) => {
  i.onclick = function () {
    projects.forEach((project) => {
      let tag = project.querySelectorAll(".tags");
      let cont = 0;
      tag.forEach((e) => {
        if (e.getAttribute("value") == i.id) {
          cont += 1;
        }
      });
      if (cont == 0) {
        project.style.display = "none";
      } else {
        project.style.display = "flex";
        cont == 0;
      }
    });
  };
});
