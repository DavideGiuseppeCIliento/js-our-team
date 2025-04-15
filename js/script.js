// # DATI

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// # ACQUISIZIONE DATI DOM
const cardRow = document.getElementById("card-row");

const memberName = document.getElementById("inputName");
const memberRole = document.getElementById("inputRole");
const memberEmail = document.getElementById("inputEmail");
const memberImg = document.getElementById("inputImmagine");

const addMember = document.getElementById("add-Member");

const modalMember = document.getElementById("member-modal");

// # ALGORITMO

addMemberFunction();

// # FUNZIONE COMPOSIZIONE GRIGLIA CARDS
function addMemberFunction() {
  let cardHTML = ``;

  for (const member of teamMembers) {
    console.log(member.name);
    cardHTML += `
            <!---------------COLONNA CARD -->
            <div class="col-4">
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="./assets/${member.img}" class="img-fluid rounded-start" alt="immagine" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${member.name}</h5>
                      <p class="card-text">${member.role}</p>
                      <p class="card-text"><small class="text-body-secondary">${member.email}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;
  }

  cardRow.innerHTML = cardHTML;
}

// # ACQUISIZIONE MEMBRO

addMember.addEventListener("submit", function (e) {
  e.preventDefault();

  // Costruzione oggetto membro
  const newMember = {
    name: memberName.value,
    role: memberRole.value,
    email: memberEmail.value,
    img: memberImg.value,
  };

  // Inserimento nel team
  teamMembers.push(newMember);

  // Aggiunta alla griglia
  addMemberFunction();

  // Reset form
  addMember.reset();

  const modal = bootstrap.Modal.getInstance(modalMember);
  modal.hide();
});
