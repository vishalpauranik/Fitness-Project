document.addEventListener('DOMContentLoaded', function() {
  const medicationYes = document.getElementById('medication_yes');
  const medicationNo = document.getElementById('medication_no');
  const medicationListLabel = document.querySelector('label[for="medicationList"]');
  const medicationListTextarea = document.getElementById('medicationList');

  function toggleMedicationFields() {
      medicationListLabel.style.display = medicationYes.checked ? 'block' : 'none';
      medicationListTextarea.style.display = medicationYes.checked ? 'block' : 'none';
  }

  medicationYes.addEventListener('change', toggleMedicationFields);
  medicationNo.addEventListener('change', toggleMedicationFields);

  toggleMedicationFields();

  const smokeYes = document.getElementById('smoke_yes');
  const smokeNo = document.getElementById('smoke_no');
  const cigarettesLabel = document.querySelector('label[for="cigarettesPerDay"]');
  const cigarettesInput = document.getElementById('cigarettesPerDay');

  function toggleSmokingFields() {
      cigarettesLabel.style.display = smokeYes.checked ? 'block' : 'none';
      cigarettesInput.style.display = smokeYes.checked ? 'block' : 'none';
  }

  smokeYes.addEventListener('change', toggleSmokingFields);
  smokeNo.addEventListener('change', toggleSmokingFields);

  toggleSmokingFields();

  const alcoholYes = document.getElementById('alcohol_yes');
  const alcoholNo = document.getElementById('alcohol_no');
  const alcoholFrequencyLabel = document.querySelector('label[for="alcoholFrequency"]');
  const alcoholFrequencySelect = document.getElementById('alcoholFrequency');

  function toggleAlcoholFields() {
      alcoholFrequencyLabel.style.display = alcoholYes.checked ? 'block' : 'none';
      alcoholFrequencySelect.style.display = alcoholYes.checked ? 'block' : 'none';
  }

  alcoholYes