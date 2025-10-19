const jobForm = document.getElementById('jobForm');
const workerList = document.getElementById('workerList');


const workers = [
  { name: "Lerato M.", skill: "Cleaner", location: "Cape Town" },
  { name: "Thabo K.", skill: "Electrician", location: "Johannesburg" },
  { name: "Aisha P.", skill: "Babysitter", location: "Durban" },
];

function renderWorkers() {
  workerList.innerHTML = '';
  workers.forEach(worker => {
    const card = document.createElement('div');
    card.classList.add('worker-card');
    card.innerHTML = `
      <h3>${worker.name}</h3>
      <p><strong>Skill:</strong> ${worker.skill}</p>
      <p><strong>Location:</strong> ${worker.location}</p>
      <button onclick="alert('Contacting ${worker.name}...')">Contact</button>
    `;
    workerList.appendChild(card);
  });
}

jobForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('jobTitle').value;
  const location = document.getElementById('location').value;
  const details = document.getElementById('jobDetails').value;

  alert(`Job posted successfully!\n\nTitle: ${title}\nLocation: ${location}`);

  jobForm.reset();
});

renderWorkers();
