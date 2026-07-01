// 1. JSON como string → objeto con JSON.parse
let text = '{ "empleados" : [' +
'{ "nom":"John" , "cognoms":"Doe" },' +
'{ "nom":"Anna" , "cognoms":"Smith" },' +
'{ "nom":"Peter" , "cognoms":"Jones" } ]}';

const obj = JSON.parse(text);

// Bug corregido: "empleados" (no "empleats")
document.getElementById("demo").innerHTML =
    "Nom: " + obj.empleados[1].nom + " | Cognoms: " + obj.empleados[1].cognoms;

// 2. Fetch: cargar JSON externo de forma asíncrona
async function carregaDades() {
    try {
        const resposta = await fetch("../json/empleados.json");
        const dades = await resposta.json();

        let html = "<ul>";
        dades.empleados.forEach(emp => {
            html += `<li>${emp.nom} ${emp.cognoms} — ${emp.departament}</li>`;
        });
        html += "</ul>";

        document.getElementById("resultat").innerHTML = html;
    } catch (error) {
        document.getElementById("resultat").innerHTML = "Error carregant dades: " + error.message;
    }
}

// 3. Open Data Barcelona — Padró d'habitants (immigració 2024)
async function carregaOpenData() {
    const div = document.getElementById("opendata");
    div.innerHTML = "Carregant dades...";

    try {
        const URL = "https://opendata-ajuntament.barcelona.cat/resources/bcn/EstadisticaPadro/imm/2024/2024_pad_imm_mdbas.json";
        const resposta = await fetch(URL);
        const dades = await resposta.json();

        const registres = Array.isArray(dades) ? dades : Object.values(dades)[0];

        if (!registres || registres.length === 0) {
            div.innerHTML = "No s'han trobat dades.";
            return;
        }

        const columnes = Object.keys(registres[0]);
        let html = `<p><strong>${registres.length} registres trobats</strong></p>`;
        html += "<div style='overflow-x:auto'><table border='1' cellpadding='6' cellspacing='0'>";
        html += "<thead><tr>" + columnes.map(c => `<th>${c}</th>`).join("") + "</tr></thead>";
        html += "<tbody>";
        registres.slice(0, 50).forEach(fila => {
            html += "<tr>" + columnes.map(c => `<td>${fila[c] ?? ""}</td>`).join("") + "</tr>";
        });
        html += "</tbody></table></div>";
        if (registres.length > 50) {
            html += `<p><em>Mostrant 50 de ${registres.length} registres</em></p>`;
        }

        div.innerHTML = html;
    } catch (error) {
        div.innerHTML = "Error carregant dades: " + error.message;
    }
}
