// Get the input elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

// Calculate age when the input values change
dayInput.addEventListener('input', calculateAge);
monthInput.addEventListener('input', calculateAge);
yearInput.addEventListener('input', calculateAge);

// Function to calculate the age
function calculateAge() {
  const today = new Date();
  const birthDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
  const age = today.getFullYear() - birthDate.getFullYear();
  const months = today.getMonth() - birthDate.getMonth();
  const days = today.getDate() - birthDate.getDate();

  // Display the age, months, and days on the page
  document.getElementById('years').textContent = age;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
}
