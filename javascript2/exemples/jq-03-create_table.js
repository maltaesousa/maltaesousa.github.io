// un tableau d'objets
const tableData = [
  {
    firstName: "Jane",
    lastName: "Does",
    age: "32",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: "46",
  },
  {
    firstName: "James",
    lastName: "Blanc",
    age: "24",
  },
];

let tableTemplate = `<table class="table">
  <tr>
    <th>Prénom</th>
    <th>Nom</th>
    <th>Age</th>
  </tr>
`;

// pour chaque objet dans notre tableau
for (let i = 0; i < tableData.length; i++) {
  tableTemplate += '<tr>';
  // pour Object.values transforme un objet en tableau de ses valeurs
  for (let j = 0; j < Object.values(tableData[i]).length; j++) {
    tableTemplate += `<td> ${Object.values(tableData[i])[j]} </td>`;
  }
  tableTemplate += '</tr>';
}
tableTemplate += '</table>';
// innerHTML permet d'insérer du HTML
$('#main').append(tableTemplate);
