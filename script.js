const jobForm = document.getElementById('jobForm');
const jobList = document.getElementById('jobList');
const workerList = document.getElementById('workerList');
const filterInput = document.getElementById('filterLocation');
const scrollBtn = document.getElementById('scrollToForm');

scrollBtn.addEventListener('click', () => {
  document.getElementById('post-job').scrollIntoView({ behavior: 'smooth' });
});

// Sample workers
const workers = [
  { name: "Lerato M.", skill: "Cleaner", location: "Cape Town" },
  { name: "Thabo K.", skill: "Electrician", location: "Johannesburg" },
  { name: "Aisha P.", skill: "Babysitter", location: "Durban" },
  { name: "John D.", skill: "Plumber", location: "Johannesburg" },
];

// Render workers
function renderWorkers(filtered = workers) {
  workerList.innerHTML = '';
  filtered.forEach(worker => {
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

// Filter workers by location
filterInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = workers.filter(w => w.location.toLowerCase().includes(term));
  renderWorkers(filtered);
});

// Add new job
function addJob(title, location, details) {
  const card = document.createElement('div');
  card.classList.add('job-card');
  card.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Location:</strong> ${location}</p>
    <p>${details}</p>
    <button class="delete-btn">Delete</button>
  `;

  // delete
  card.querySelector('.delete-btn').addEventListener('click', () => card.remove());
  jobList.prepend(card);
}

jobForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('jobTitle').value;
  const location = document.getElementById('jobLocation').value;
  const details = document.getElementById('jobDetails').value;

  addJob(title, location, details);
  jobForm.reset();
});

renderWorkers();
