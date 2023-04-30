const chapter_concrete = document.querySelector(".chapter_concrete");
const tabel_columns_concrete = document.querySelector(".tabel_columns_concrete");

const chapter_polystyrene = document.querySelector(".chapter_polystyrene");
const tabel_columns_polystyrene = document.querySelector(".tabel_columns_polystyrene");

const chapter_solution = document.querySelector(".chapter_solution");
const tabel_columns_solution = document.querySelector(".tabel_columns_solution");

const chapter_vermiculite = document.querySelector(".chapter_vermiculite");
const tabel_columns_vermiculite = document.querySelector(".tabel_columns_vermiculite");

const chapter_claydite_concrete = document.querySelector(".chapter_claydite_concrete");
const tabel_columns_claydite_concrete = document.querySelector(".tabel_columns_claydite_concrete");

chapter_concrete.addEventListener("click", function() {
    this.style.background = "linear-gradient(180deg, #FF8540 29.17%, #FFB36D 100%)";
    tabel_columns_concrete.style.display = "block";

    chapter_polystyrene.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_polystyrene.style.display = "none";

    chapter_solution.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_solution.style.display = "none";

    chapter_vermiculite.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_vermiculite.style.display = "none";

    chapter_claydite_concrete.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_claydite_concrete.style.display = "none";
}); 

chapter_polystyrene.addEventListener("click", function() {
    this.style.background = "linear-gradient(180deg, #FF8540 29.17%, #FFB36D 100%)";
    tabel_columns_polystyrene.style.display = "block";

    chapter_concrete.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_concrete.style.display = "none";

    chapter_solution.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_solution.style.display = "none";

    chapter_vermiculite.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_vermiculite.style.display = "none";

    chapter_claydite_concrete.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_claydite_concrete.style.display = "none";
});

chapter_solution.addEventListener("click", function() {
    this.style.background = "linear-gradient(180deg, #FF8540 29.17%, #FFB36D 100%)";
    tabel_columns_solution.style.display = "block";

    chapter_concrete.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_concrete.style.display = "none";

    chapter_polystyrene.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_polystyrene.style.display = "none";

    chapter_vermiculite.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_vermiculite.style.display = "none";

    chapter_claydite_concrete.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_claydite_concrete.style.display = "none";
});

chapter_vermiculite.addEventListener("click", function() {
    this.style.background = "linear-gradient(180deg, #FF8540 29.17%, #FFB36D 100%)";
    tabel_columns_vermiculite.style.display = "block";

    chapter_concrete.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_concrete.style.display = "none";

    chapter_polystyrene.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_polystyrene.style.display = "none";

    chapter_solution.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_solution.style.display = "none";

    chapter_claydite_concrete.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_claydite_concrete.style.display = "none";
});

chapter_claydite_concrete.addEventListener("click", function() {
    this.style.background = "linear-gradient(180deg, #FF8540 29.17%, #FFB36D 100%)";
    tabel_columns_claydite_concrete.style.display = "block";

    chapter_concrete.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_concrete.style.display = "none";

    chapter_polystyrene.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_polystyrene.style.display = "none";

    chapter_solution.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_solution.style.display = "none";

    chapter_vermiculite.style.background = "linear-gradient(180deg, #FFC544 31.25%, #FFE385 100%)";
    tabel_columns_vermiculite.style.display = "none";
});

function downloadFile() {
    const link = document.createElement("a");
    link.href = "file/прайс-20-10-21.pdf";
    link.target = "_blank";
    link.download = true;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

