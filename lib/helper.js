// esta funcion  de utilidad me ayuda  transformaar una rreglo de objetos (enntries) en un loque de texto en formato markdown

export function entriesToMarkdown(enntries, type) {
    if(!enntries.length) return ""
    // si entries noe xiste o esta vacio retorna un string vacio, evitando errores cuandos e llame sin datos

      return (
    `## ${type}\n\n` +
    entries
      .map((entry) => {
        const dateRange = entry.current
          ? `${entry.startDate} - Present`
          : `${entry.startDate} - ${entry.endDate}`;
        return `### ${entry.title} @ ${entry.organization}\n${dateRange}\n\n${entry.description}`;
      })
      .join("\n\n")
  );
}

// 1- ## ${type} -> Titulo 2 en Markdown porejmeplo ## Experiencia
//  entries.map(...) Recorre cada entrada y arma un bloque de texto con formato markdow 
// 2- ### ${entry.title} @ ${entry.organization} -> titulo 3 en Markdown
// 3- ${dateRange} -> ranggo de fechas si current es true. pone "Present, si no, usa la fecha de fin
// 4- ${entry.description} -> descripcion del trabajo

// .join("\n\n") separa cada entrada con 2 saltos de linea para que amrkdown lo renderize bien

// Ejemplo

// const entries = [
//   {
//     title: "Frontend Developer",
//     organization: "TechCorp",
//     startDate: "Jan 2022",
//     endDate: "Dec 2023",
//     current: false,
//     description: "Desarrollo de aplicaciones web en React."
//   },
// ]

// ### Frontend Developer @ TechCorp
// Jan 2022 - Dec 2023

// Desarrollo de aplicaciones web en React.