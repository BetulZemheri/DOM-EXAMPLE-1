const diller = document.querySelector(".diller");
const sil = document.getElementById("sil");
const ekle = document.getElementById("ekle");
const dilSection =document.querySelector("#dil-section");

const ul = document.createElement("ul");
dilSection.appendChild(ul);

// const h1 = ul.closest(".container").firstChild;  // en yakın parent bulur.
// console.log(h1);
// const h1 = ul.closest('.container').firstElementChild;
// console.log(h1);
// h1.style.color = 'red';


ekle.onclick = function () {
    if (!diller.value) {
        alert("Enter A Language");
    } else {
        ul.innerHTML += `<li>${diller.value}</li>`;
        diller.value = "";
        javascriptKontrol();
    }
};

const javascriptKontrol = () => {
    document.querySelectorAll('ul li').forEach((dil) => {
      const kucukHarf = dil.textContent.toLowerCase();
      if (kucukHarf === 'javascript') {
        // dil.className = 'red';
        //?Alternatif yöntem
        dil.setAttribute('class', 'red');
      }
    });
  };

  sil.onclick = function () {
      ul.childElementCount > 0 
      ? ul.removeChild(ul.lastElementChild)
      : alert("There is not item to delete")
  };

  diller.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
          ekle.onclick();
      }
    //   if (e.code === "Enter") {
    //       ekle.click();     // aynı fonk. çağırdık.
    //   }
      if (e.code === "Delete") {
          sil.onclick();
      }
  });

  window.onload = () => {
      javascriptKontrol();
      diller.focus();
  }

 