document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('change-name');
  const name = document.getElementById('student-name');

  button.addEventListener('click', () => {
    if (name.textContent === "Manuela Soares Pacheco") {
      name.textContent = "Frutinhas";
    } else {
      name.textContent = "Manuela Soares Pacheco";
    }
  });
});
