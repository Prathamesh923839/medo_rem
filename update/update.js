// update.js - Handles dynamic medicine form for update.html

let medicines = [
  { name: 'Lisinopril', dose: '10mg - 1 tablet', time: '08:00', note: 'With breakfast' },
  { name: 'Metformin', dose: '500mg - 1 tablet', time: '09:30', note: 'With breakfast' },
  { name: 'Atorvastatin', dose: '20mg - 1 tablet', time: '13:00', note: 'After lunch' },
  { name: 'Ibuprofen', dose: '200mg - 1-2 tablets', time: '', note: 'For pain relief' },
  { name: 'Metoprolol', dose: '25mg - 1 tablet', time: '17:00', note: 'Before dinner' },
  { name: 'Amlodipine', dose: '5mg - 1 tablet', time: '19:00', note: 'With dinner' },
  { name: 'Simvastatin', dose: '20mg - 1 tablet', time: '21:00', note: 'Before bed' }
];

function renderMedicines() {
  const list = document.getElementById('medicines-list');
  list.innerHTML = '';
  medicines.forEach((med, idx) => {
    const medDiv = document.createElement('div');
    medDiv.className = 'med-card left-border';
    medDiv.style.marginBottom = '1rem';
    medDiv.innerHTML = `
      <input type="text" name="name" placeholder="Medicine Name" value="${med.name}" required />
      <input type="text" name="dose" placeholder="Dose (e.g. 10mg - 1 tablet)" value="${med.dose}" required />
      <input type="time" name="time" placeholder="Time (e.g. 08:00)" value="${med.time}" />
      <input type="text" name="note" placeholder="Note (e.g. With breakfast)" value="${med.note}" />
      <button type="button" class="btn red" onclick="removeMedicineField(${idx})">Remove</button>
    `;
    list.appendChild(medDiv);
  });
}

function addMedicineField() {
  medicines.push({ name: '', dose: '', time: '', note: '' });
  renderMedicines();
}

function removeMedicineField(idx) {
  medicines.splice(idx, 1);
  renderMedicines();
}

window.addEventListener('DOMContentLoaded', function() {
  renderMedicines();
  document.getElementById('medicine-form').onsubmit = function(e) {
    e.preventDefault();
    const fields = document.querySelectorAll('#medicines-list > .med-card');
    medicines = Array.from(fields).map(div => {
      const inputs = div.querySelectorAll('input');
      return {
        name: inputs[0].value,
        dose: inputs[1].value,
        time: inputs[2].value,
        note: inputs[3].value
      };
    });
    alert('Medicines updated!');
    // Here you would typically send the updated medicines to your backend
  };
});
