import React, { useState, useEffect, useRef } from "react";
import {
  FileText,
  PlayCircle,
  HelpCircle,
  CheckCircle2,
  Circle,
  Square,
  CheckSquare,
  RotateCcw,
  ChevronRight,
  BookOpen,
  Link2,
  ListChecks,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* CONTENIDO DEL CURSO                                                 */
/* ------------------------------------------------------------------ */

const COURSE = {
  title: "Ficha APA",
  subtitle: "Curso de autogestión · Normas APA 7.ª edición",
  modules: [
    {
      id: "m1",
      label: "Módulo 1",
      title: "Bienvenida y fundamentos",
      lessons: [
        {
          id: "l1-1",
          type: "texto",
          title: "Acerca del curso",
          duration: "4 min",
          paragraphs: [
            "Este curso de autogestión está dirigido a estudiantes universitarios que necesitan aplicar las normas APA en su séptima edición para trabajos, ensayos y tesis. No requiere conocimientos previos.",
            "Está organizado en seis módulos que avanzan de lo general a lo específico: fundamentos del estilo, formato del documento, niveles de títulos y subtítulos, citas en el texto, lista de referencias y tablas y figuras. Cada módulo cierra con un cuestionario breve de autoevaluación y una lista de chequeo.",
            "La duración estimada es de aproximadamente 3 horas, distribuidas en lecturas cortas, videos de apoyo y ejercicios de comprobación. Puedes avanzar a tu propio ritmo: tu progreso se guarda automáticamente en este sitio.",
          ],
          tip: "Sugerencia: ten a mano un trabajo académico propio (o uno de ejemplo) para ir aplicando cada norma mientras avanzas.",
        },
        {
          id: "l1-2",
          type: "texto",
          title: "¿Qué es APA y para qué sirve?",
          duration: "6 min",
          paragraphs: [
            "APA son las siglas de American Psychological Association (Asociación Estadounidense de Psicología), institución que publicó por primera vez su manual de estilo en 1929. Hoy es uno de los sistemas de citación más usados en ciencias sociales, salud, educación y administración.",
            "Su función principal es doble: por un lado, dar crédito a las ideas y datos de otros autores de forma clara y verificable; por otro, evitar el plagio académico al distinguir explícitamente qué es aporte propio y qué proviene de una fuente.",
            "Además, estandariza la presentación de los trabajos —márgenes, tipografía, citas, referencias— para que cualquier lector especializado pueda ubicar rápidamente la información, sin importar quién escribió el documento ni en qué institución.",
          ],
          example: {
            kind: "contrast",
            label: "Ejemplo: la diferencia entre citar y no citar",
            items: [
              {
                heading: "Con cita",
                text: "Según Tobón (2013), la evaluación por competencias exige evidencias de desempeño observables, no solo conocimiento teórico.",
                good: true,
              },
              {
                heading: "Sin cita (plagio)",
                text: "La evaluación por competencias exige evidencias de desempeño observables, no solo conocimiento teórico.",
                good: false,
              },
            ],
            note: "La idea es exactamente la misma en ambos casos. La diferencia es que la primera versión da crédito a su autor y la segunda la presenta como propia: eso es plagio, aunque no se copien las palabras textuales.",
          },
        },
        {
          id: "l1-3",
          type: "video",
          title: "Video introductorio: el espíritu de las normas APA",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video introductorio (YouTube). Puede ser uno propio o uno de referencia institucional; el enlace queda guardado en este sitio.",
        },
        {
          id: "l1-4",
          type: "quiz",
          title: "Autoevaluación diagnóstica",
          duration: "4 preguntas",
          questions: [
            {
              q: "¿Qué institución creó originalmente el estilo APA?",
              options: [
                "American Psychological Association",
                "American Philological Association",
                "Asociación de Editores Universitarios",
                "Modern Language Association",
              ],
              correct: 0,
              explanation:
                "APA corresponde a la American Psychological Association, que publicó su primer manual de estilo en 1929.",
            },
            {
              q: "¿Cuál es el propósito principal de citar una fuente?",
              options: [
                "Alargar el trabajo académico",
                "Dar crédito a las ideas de otros y permitir verificarlas",
                "Cumplir un requisito sin función real",
                "Mostrar cuántos libros leyó el autor",
              ],
              correct: 1,
              explanation:
                "Citar da crédito al autor original y permite que cualquier lector rastree la fuente de una idea o dato.",
            },
            {
              q: "El estilo APA se utiliza principalmente en...",
              options: [
                "Literatura y bellas artes",
                "Derecho penal comparado",
                "Ciencias sociales, salud y educación",
                "Ingeniería civil exclusivamente",
              ],
              correct: 2,
              explanation:
                "Aunque se usa en distintas disciplinas, APA es predominante en ciencias sociales, salud y educación.",
            },
            {
              q: "Estandarizar el formato de un documento sirve principalmente para...",
              options: [
                "Que todos los trabajos se vean idénticos por estética",
                "Que un lector especializado ubique la información con rapidez",
                "Reducir el número de páginas del trabajo",
                "Evitar el uso de citas textuales",
              ],
              correct: 1,
              explanation:
                "La estandarización facilita que cualquier lector encuentre rápidamente portada, citas y referencias, sin importar quién escribió el texto.",
            },
          ],
        },
        {
          id: "l1-5",
          type: "checklist",
          title: "Lista de chequeo: fundamentos del estilo APA",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad. Si te queda alguno sin marcar, vale la pena repasar la lección correspondiente.",
          items: [
            "Puedo explicar qué significa la sigla APA y qué institución la publica.",
            "Sé para qué sirve citar una fuente dentro de un trabajo académico.",
            "Entiendo la diferencia entre dar crédito a un autor y cometer plagio.",
            "Reconozco en qué disciplinas se usa principalmente el estilo APA.",
            "Comprendo por qué un formato estandarizado facilita la lectura de un trabajo.",
            "Tengo claro cómo está organizado este curso (6 módulos + autoevaluaciones).",
          ],
        },
      ],
    },
    {
      id: "m2",
      label: "Módulo 2",
      title: "Formato general del documento",
      lessons: [
        {
          id: "l2-1",
          type: "texto",
          title: "Márgenes, tipografía y espaciado",
          duration: "6 min",
          paragraphs: [
            "APA 7 exige márgenes de 2.54 cm (1 pulgada) en los cuatro lados de la página, en toda la extensión del documento, incluida la portada y la lista de referencias.",
            "El manual permite varias tipografías: Times New Roman a 12 puntos, Calibri a 11 puntos, Arial a 11 puntos o Georgia a 11 puntos. Lo importante es usar una sola fuente de manera consistente en todo el documento.",
            "Todo el texto va a doble espacio: título, resumen, cuerpo, citas en bloque y lista de referencias, sin espacios extra entre párrafos. El primer renglón de cada párrafo lleva sangría de 1.27 cm (0.5 pulgadas), y el número de página se ubica en la esquina superior derecha desde la portada.",
          ],
          tip: "Sugerencia: configura estos parámetros como estilo predeterminado en tu procesador de texto antes de empezar a escribir, así evitas corregirlo al final.",
        },
        {
          id: "l2-2",
          type: "texto",
          title: "La portada: versión estudiantil y profesional",
          duration: "6 min",
          paragraphs: [
            "APA 7 distingue dos tipos de portada. La portada estudiantil —la que usarás en la mayoría de tus trabajos de curso— incluye: título del trabajo, nombre del autor o autores, departamento y universidad, número y nombre de la asignatura, nombre del docente, y fecha de entrega. No requiere encabezado (running head).",
            "La portada profesional, propia de artículos que se enviarán a revistas científicas, agrega un encabezado con el título abreviado en mayúsculas (máximo 50 caracteres) junto al número de página, además de una nota del autor con afiliación y datos de contacto.",
            "Para trabajos universitarios de curso, salvo indicación distinta del docente, la versión correcta es la portada estudiantil.",
          ],
          example: {
            kind: "titlepage",
            label: "Ejemplo de portada estudiantil",
            lines: [
              { text: "Uso de Recursos Audiovisuales en la Enseñanza Universitaria", style: "title" },
              { text: "Betty Meneses Ayllón", style: "normal" },
              { text: "Facultad de Ingeniería, Universidad Privada Domingo Savio", style: "normal" },
              { text: "MAT-0200: Estadística Descriptiva", style: "normal" },
              { text: "Prof. [Nombre del docente]", style: "normal" },
              { text: "15 de agosto de 2026", style: "normal" },
            ],
          },
        },
        {
          id: "l2-3",
          type: "video",
          title: "Video: cómo armar tu portada paso a paso",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video demostrativo del armado de portada en Word o Google Docs.",
        },
        {
          id: "l2-4",
          type: "quiz",
          title: "Cuestionario: formato del documento",
          duration: "4 preguntas",
          questions: [
            {
              q: "¿Cuál es el margen exigido por APA 7 en los cuatro lados de la página?",
              options: ["1.5 cm", "2 cm", "2.54 cm", "3 cm"],
              correct: 2,
              explanation: "El margen estándar en APA 7 es de 2.54 cm (1 pulgada) en los cuatro lados.",
            },
            {
              q: "¿Cuál de estas combinaciones de tipografía es válida en APA 7?",
              options: [
                "Comic Sans 14 pt",
                "Calibri 11 pt",
                "Times New Roman 10 pt",
                "Arial 8 pt",
              ],
              correct: 1,
              explanation: "Calibri 11 pt es una de las tipografías aceptadas explícitamente por el manual.",
            },
            {
              q: "En un trabajo universitario de curso, la portada correcta es normalmente...",
              options: [
                "La portada profesional con running head",
                "La portada estudiantil, sin running head",
                "No se requiere portada en APA 7",
                "Cualquier portada libre, sin normas",
              ],
              correct: 1,
              explanation: "Para trabajos de curso se usa la portada estudiantil, que no lleva encabezado (running head).",
            },
            {
              q: "¿Dónde se ubica el número de página en un documento APA 7?",
              options: [
                "Esquina inferior izquierda",
                "Centrado al pie de página",
                "Esquina superior derecha, desde la portada",
                "No se numera la portada",
              ],
              correct: 2,
              explanation: "El número de página va en la esquina superior derecha, en todas las páginas incluida la portada.",
            },
          ],
        },
        {
          id: "l2-5",
          type: "checklist",
          title: "Lista de chequeo: formato del documento",
          duration: "6 ítems",
          intro:
            "Usa esta lista para revisar tu propio documento antes de entregarlo. Marca cada opción que ya cumple tu trabajo.",
          items: [
            "Mi documento tiene márgenes de 2.54 cm (1 pulgada) en los cuatro lados.",
            "Uso una sola tipografía permitida (Times New Roman 12, Calibri 11, Arial 11 o Georgia 11) en todo el texto.",
            "Todo el documento está a doble espacio, sin espacios extra entre párrafos.",
            "La primera línea de cada párrafo tiene sangría de 1.27 cm.",
            "Mi portada corresponde al formato estudiantil (o profesional, si el docente lo indicó así).",
            "El número de página aparece en la esquina superior derecha desde la portada.",
          ],
        },
      ],
    },
    {
      id: "m2b",
      label: "Módulo 3",
      title: "Niveles de títulos y subtítulos",
      lessons: [
        {
          id: "l6-1",
          type: "texto",
          title: "Los cinco niveles de encabezado",
          duration: "6 min",
          paragraphs: [
            "APA 7 organiza los encabezados en cinco niveles, cada uno con un formato visual distinto que indica su jerarquía dentro del documento. Los niveles 1, 2 y 3 se escriben en una línea propia, con el texto del párrafo comenzando en la línea siguiente; los niveles 4 y 5 se integran en la misma línea que el texto, funcionando como una oración introductoria.",
            "Nivel 1: centrado, en negrita, con mayúscula tipo título (por ejemplo, Método). Nivel 2: alineado a la izquierda, en negrita, con mayúscula tipo título (Participantes). Nivel 3: alineado a la izquierda, en negrita y cursiva, con mayúscula tipo título (Instrumentos de recolección).",
            "Nivel 4: con sangría de párrafo, en negrita, mayúscula tipo título y termina en punto; el texto continúa en la misma línea (Procedimiento de recolección.). Nivel 5: igual que el Nivel 4, pero en negrita y cursiva (Análisis estadístico.).",
          ],
          example: {
            kind: "headings",
            label: "Ejemplo: los cinco niveles en un mismo documento",
            levels: [
              { level: 1, heading: "Método", body: null },
              { level: 2, heading: "Participantes", body: null },
              { level: 3, heading: "Instrumentos de Recolección", body: null },
              {
                level: 4,
                heading: "Procedimiento de recolección.",
                body: " Se aplicó un cuestionario en línea durante dos semanas, previa firma del consentimiento informado.",
              },
              {
                level: 5,
                heading: "Análisis estadístico.",
                body: " Se utilizó estadística descriptiva para caracterizar la muestra y pruebas no paramétricas para comparar grupos.",
              },
            ],
          },
        },
        {
          id: "l6-2",
          type: "texto",
          title: "Reglas de uso y jerarquía",
          duration: "6 min",
          paragraphs: [
            "Los niveles se usan en orden ascendente y sin saltos: si tu trabajo solo necesita dos niveles de encabezado, usa el Nivel 1 y el Nivel 2; nunca empieces directamente en el Nivel 2 o el Nivel 3.",
            "El título del trabajo, ubicado al inicio del cuerpo del documento (centrado y en negrita), no cuenta como un nivel de encabezado dentro de esta jerarquía: es un elemento aparte que antecede al primer encabezado de Nivel 1.",
            "Los encabezados no llevan numeración (1., 1.1, a.) ni viñetas, y nunca deben quedar como la última línea de una página: si esto ocurre, se ajusta el salto de página para que el encabezado quede acompañado de al menos una línea de texto debajo.",
          ],
          tip: "Sugerencia: la mayoría de los trabajos de curso solo necesitan Nivel 1 y, como mucho, Nivel 2. Reserva los niveles 3 a 5 para tesis o artículos con secciones muy detalladas (por ejemplo, dentro de 'Método').",
        },
        {
          id: "l6-3",
          type: "video",
          title: "Video: cómo aplicar los niveles de encabezado en Word",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre cómo configurar los estilos de encabezado (Nivel 1 a 5) en Word o Google Docs.",
        },
        {
          id: "l6-4",
          type: "quiz",
          title: "Cuestionario: niveles de encabezado",
          duration: "5 preguntas",
          questions: [
            {
              q: "¿Cuántos niveles de encabezado define APA 7?",
              options: ["3", "4", "5", "6"],
              correct: 2,
              explanation: "APA 7 define cinco niveles de encabezado, cada uno con un formato específico.",
            },
            {
              q: "¿Cómo se formatea un encabezado de Nivel 1?",
              options: [
                "Alineado a la izquierda, en cursiva",
                "Centrado, en negrita, con mayúscula tipo título",
                "Con sangría, termina en punto",
                "Subrayado, sin negrita",
              ],
              correct: 1,
              explanation: "El Nivel 1 va centrado, en negrita y con mayúscula tipo título, en su propia línea.",
            },
            {
              q: "¿Qué diferencia a los encabezados de Nivel 4 y 5 de los niveles 1 a 3?",
              options: [
                "Van únicamente en cursiva",
                "Se integran en la misma línea del texto y terminan en punto",
                "No llevan negrita",
                "Van centrados",
              ],
              correct: 1,
              explanation:
                "Los niveles 4 y 5 funcionan como una oración introductoria: comparten línea con el texto y terminan en punto.",
            },
            {
              q: "El título del trabajo, al inicio del cuerpo del documento...",
              options: [
                "Es el encabezado de Nivel 1",
                "No cuenta como un nivel de encabezado; es un elemento aparte",
                "Debe omitirse si hay encabezados de Nivel 1",
                "Va en cursiva",
              ],
              correct: 1,
              explanation:
                "El título del trabajo antecede a la jerarquía de encabezados y no se cuenta como Nivel 1.",
            },
            {
              q: "Si un encabezado quedaría como la última línea de una página...",
              options: [
                "Se deja así, no tiene importancia",
                "Se ajusta el salto de página para que quede con al menos una línea de texto debajo",
                "Se elimina el encabezado",
                "Se cambia automáticamente a un nivel superior",
              ],
              correct: 1,
              explanation:
                "Un encabezado nunca debe quedar huérfano al final de una página; se ajusta el salto de página.",
            },
          ],
        },
        {
          id: "l6-5",
          type: "checklist",
          title: "Lista de chequeo: niveles de encabezado",
          duration: "6 ítems",
          intro:
            "Revisa la jerarquía de encabezados de tu trabajo con esta lista antes de entregarlo.",
          items: [
            "Uso los niveles de encabezado en orden, sin saltar del Nivel 1 directamente al Nivel 3.",
            "Mis encabezados de Nivel 1 están centrados, en negrita y con mayúscula tipo título.",
            "Mis encabezados de Nivel 2 están alineados a la izquierda, en negrita y con mayúscula tipo título.",
            "No numero mis encabezados ni les agrego viñetas.",
            "El título de mi trabajo no lo cuento como un encabezado de Nivel 1 dentro de la jerarquía.",
            "Ningún encabezado queda solo al final de una página, sin texto debajo.",
          ],
        },
      ],
    },
    {
      id: "m3",
      label: "Módulo 4",
      title: "Citas en el texto",
      lessons: [
        {
          id: "l3-1",
          type: "texto",
          title: "Cita narrativa y cita entre paréntesis",
          duration: "6 min",
          paragraphs: [
            "Existen dos formas básicas de citar una fuente dentro del texto. La cita narrativa integra el apellido del autor en la redacción de la oración: Tobón (2013) sostiene que la evaluación por competencias exige evidencias de desempeño.",
            "La cita entre paréntesis ubica el apellido y el año al final de la idea, entre paréntesis: La evaluación por competencias exige evidencias de desempeño (Tobón, 2013).",
            "Ambas formas son igualmente correctas; la elección depende de si quieres dar protagonismo al autor dentro de la oración (narrativa) o mantener el foco en la idea (entre paréntesis).",
          ],
        },
        {
          id: "l3-2",
          type: "texto",
          title: "Citas textuales cortas y citas en bloque",
          duration: "7 min",
          paragraphs: [
            "Una cita textual corta —menos de 40 palabras— se incorpora directamente en el párrafo, entre comillas, seguida del autor, año y número de página: 'el aprendizaje autónomo requiere autorregulación constante' (Meneses, 2024, p. 12).",
            "Cuando la cita textual alcanza 40 palabras o más, se presenta como cita en bloque: en párrafo aparte, sin comillas, con sangría completa de 1.27 cm desde el margen izquierdo, a doble espacio, y con la referencia (autor, año, página) después del punto final.",
            "Si la fuente no tiene numeración de página (por ejemplo, un sitio web), se puede usar el número de párrafo, como (Meneses, 2024, párr. 3).",
          ],
          tip: "Sugerencia: usa la cita en bloque solo cuando el texto original sea imprescindible; en general se prefiere parafrasear.",
        },
        {
          id: "l3-3",
          type: "texto",
          title: "Parafraseo y múltiples autores",
          duration: "6 min",
          paragraphs: [
            "Parafrasear es reformular una idea ajena con tus propias palabras, sin copiar la redacción original, y siempre acompañada de la cita correspondiente (autor, año).",
            "Con dos autores, ambos apellidos aparecen siempre: en cita entre paréntesis se usa el símbolo '&' (Pérez & Gómez, 2022); en cita narrativa se usa 'y' (Pérez y Gómez, 2022).",
            "Con tres o más autores, desde la primera cita se escribe solo el apellido del primer autor seguido de 'et al.': (Rojas et al., 2021). Este es un cambio respecto a APA 6, que exigía nombrar a todos los autores la primera vez.",
          ],
        },
        {
          id: "l3-4",
          type: "video",
          title: "Video: ejemplos prácticos de citación",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video con ejemplos de cita narrativa, entre paréntesis y en bloque.",
        },
        {
          id: "l3-5",
          type: "quiz",
          title: "Cuestionario: citas en el texto",
          duration: "4 preguntas",
          questions: [
            {
              q: "'Tobón (2013) sostiene que...' es un ejemplo de:",
              options: ["Cita entre paréntesis", "Cita narrativa", "Cita en bloque", "Nota al pie"],
              correct: 1,
              explanation: "Es cita narrativa porque el apellido del autor forma parte de la oración.",
            },
            {
              q: "¿A partir de cuántas palabras una cita textual debe presentarse en bloque?",
              options: ["20 palabras", "30 palabras", "40 palabras", "60 palabras"],
              correct: 2,
              explanation: "APA 7 exige formato de bloque para citas textuales de 40 palabras o más.",
            },
            {
              q: "Con tres o más autores, ¿cómo se cita desde la primera vez en APA 7?",
              options: [
                "Nombrando a todos los autores siempre",
                "Solo el primer autor seguido de 'et al.'",
                "Solo el último autor",
                "Con el nombre de la institución únicamente",
              ],
              correct: 1,
              explanation: "APA 7 simplificó la regla: desde la primera cita se usa 'et al.' con tres o más autores.",
            },
            {
              q: "En una cita entre paréntesis con dos autores, ¿qué símbolo se usa entre los apellidos?",
              options: ["'y'", "'&'", "'/'", "'+'"],
              correct: 1,
              explanation: "En la cita entre paréntesis se usa '&'; en la narrativa se usa 'y' (en español).",
            },
          ],
        },
        {
          id: "l3-6",
          type: "checklist",
          title: "Lista de chequeo: citas en el texto",
          duration: "6 ítems",
          intro:
            "Revisa cada idea tomada de otra fuente en tu trabajo y marca lo que ya aplicas correctamente.",
          items: [
            "Cada idea o dato que tomé de otra fuente tiene su cita correspondiente.",
            "En mis citas textuales cortas (menos de 40 palabras) uso comillas y número de página.",
            "Mis citas de 40 palabras o más están en formato de bloque, sin comillas y con sangría completa.",
            "Con dos autores, uso '&' en la cita entre paréntesis y 'y' en la cita narrativa.",
            "Con tres o más autores, uso 'et al.' desde la primera cita.",
            "Mis parafraseos están escritos con mis propias palabras y llevan su cita, no son una copia disfrazada del original.",
          ],
        },
      ],
    },
    {
      id: "m4",
      label: "Módulo 5",
      title: "Lista de referencias",
      lessons: [
        {
          id: "l4-1",
          type: "texto",
          title: "Estructura general de la lista de referencias",
          duration: "6 min",
          paragraphs: [
            "La lista de referencias se ubica al final del documento, en una página nueva, bajo el título 'Referencias' centrado y en negrita.",
            "Las entradas se ordenan alfabéticamente por el apellido del primer autor y llevan sangría francesa: la primera línea va al margen izquierdo y las siguientes se sangran 1.27 cm.",
            "Toda la lista va a doble espacio, sin espacios extra entre entradas. El orden general de los datos es: autor, año, título de la obra y fuente (editorial, revista, DOI o URL).",
          ],
        },
        {
          id: "l4-2",
          type: "texto",
          title: "Ejemplos por tipo de fuente",
          duration: "7 min",
          paragraphs: [
            "Libro: Tobón, S. (2013). Formación integral y competencias: Pensamiento complejo, currículo, didáctica y evaluación (4.ª ed.). ECOE Ediciones.",
            "Artículo de revista con DOI: Pérez, J., & Gómez, L. (2022). Autorregulación del aprendizaje en entornos virtuales. Revista de Educación Superior, 15(2), 45–60. https://doi.org/10.xxxx/xxxxx",
            "Página web: Organización Mundial de la Salud. (2021, 15 de marzo). Salud mental de los adolescentes. https://www.who.int/es/news-room/fact-sheets/detail/adolescent-mental-health",
          ],
          tip: "Sugerencia: en el título de libros y artículos solo se escribe con mayúscula la primera palabra (y los nombres propios); esto se llama 'mayúscula tipo oración'.",
        },
        {
          id: "l4-3",
          type: "video",
          title: "Video: armado de la lista de referencias",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre el uso de sangría francesa y el orden alfabético en Word.",
        },
        {
          id: "l4-4",
          type: "quiz",
          title: "Cuestionario final e integrador",
          duration: "5 preguntas",
          questions: [
            {
              q: "¿Cómo se ordena la lista de referencias en APA 7?",
              options: [
                "Por orden de aparición en el texto",
                "Alfabéticamente por apellido del primer autor",
                "Por año, de más reciente a más antiguo",
                "Por tipo de fuente (libros, luego artículos)",
              ],
              correct: 1,
              explanation: "El orden alfabético por apellido del primer autor es la regla general en APA 7.",
            },
            {
              q: "¿Qué es la 'sangría francesa' en la lista de referencias?",
              options: [
                "Sangrar solo la primera línea de cada entrada",
                "Sangrar todas las líneas excepto la primera",
                "No usar sangría en absoluto",
                "Centrar cada entrada",
              ],
              correct: 1,
              explanation: "La sangría francesa deja la primera línea al margen y sangra 1.27 cm las líneas siguientes.",
            },
            {
              q: "¿Cómo se capitalizan los títulos de libros y artículos en la lista de referencias?",
              options: [
                "Con mayúscula en cada palabra importante",
                "Todo en mayúsculas",
                "Solo la primera palabra y nombres propios (mayúscula tipo oración)",
                "Todo en minúsculas, sin excepción",
              ],
              correct: 2,
              explanation: "APA 7 usa mayúscula tipo oración: solo la primera palabra del título y los nombres propios.",
            },
            {
              q: "Un DOI en la lista de referencias se presenta como...",
              options: [
                "Un código interno que no se incluye",
                "Una URL: https://doi.org/...",
                "Un número de página adicional",
                "El ISBN del libro",
              ],
              correct: 1,
              explanation: "El DOI se muestra como enlace en formato URL: https://doi.org/xxxx.",
            },
            {
              q: "¿En qué página del documento se ubica la lista de referencias?",
              options: [
                "En la misma página que la conclusión",
                "En una página nueva, al final del documento",
                "Justo después de la portada",
                "APA 7 no exige una ubicación fija",
              ],
              correct: 1,
              explanation: "La lista de referencias siempre inicia en una página nueva al final del documento.",
            },
          ],
        },
        {
          id: "l4-5",
          type: "checklist",
          title: "Lista de chequeo: lista de referencias",
          duration: "6 ítems",
          intro:
            "Antes de entregar tu trabajo final, revisa tu lista de referencias con esta guía.",
          items: [
            "Todas mis referencias están ordenadas alfabéticamente por el apellido del primer autor.",
            "Cada entrada tiene sangría francesa (la primera línea al margen, las siguientes a 1.27 cm).",
            "Toda la lista está a doble espacio, sin espacios extra entre entradas.",
            "Los títulos de libros y artículos usan mayúscula tipo oración (solo la primera palabra y nombres propios).",
            "Cada fuente citada en el texto aparece en la lista de referencias, y viceversa.",
            "Los DOI están escritos en formato de enlace (https://doi.org/...).",
          ],
        },
      ],
    },
    {
      id: "m5",
      label: "Módulo 6",
      title: "Tablas y figuras en APA 7",
      lessons: [
        {
          id: "l5-1",
          type: "texto",
          title: "Componentes de una tabla o figura",
          duration: "6 min",
          paragraphs: [
            "En APA 7, las tablas y las figuras comparten la misma estructura básica: un número (Tabla 1, Figura 1…), un título breve que describe el contenido, el cuerpo —los datos organizados en filas y columnas, o la imagen, gráfico o diagrama— y, cuando corresponde, una o más notas al pie.",
            "El número va en negrita en la línea superior; debajo se escribe el título en cursiva. A diferencia de los títulos de la lista de referencias (que usan mayúscula tipo oración), el título de una tabla o figura se escribe con mayúscula inicial en cada palabra principal (title case).",
            "Las tablas y las figuras se numeran en dos secuencias independientes, según el orden en que se citan por primera vez en el texto: la primera tabla mencionada es 'Tabla 1' y la primera figura mencionada es 'Figura 1', cada una dentro de su propia numeración.",
          ],
        },
        {
          id: "l5-2",
          type: "texto",
          title: "Formato y buenas prácticas",
          duration: "7 min",
          paragraphs: [
            "El formato de una tabla en APA 7 es minimalista: se usan únicamente líneas horizontales (en la parte superior de la tabla, debajo de los encabezados de columna y al final de la tabla). Nunca se usan líneas verticales ni bordes alrededor de cada celda.",
            "Existen tres tipos de notas, todas opcionales según lo que necesite tu tabla o figura: la nota general explica abreviaturas o brinda información global; la nota específica usa letras en superíndice para aclarar un dato puntual; y la nota de probabilidad usa asteriscos para indicar niveles de significancia estadística (por ejemplo, *p < .05).",
            "Toda tabla o figura debe citarse en el texto antes de aparecer (por ejemplo, 'como se observa en la Tabla 1…') y se ubica lo más cerca posible de esa primera mención, o se agrupa en un apéndice si son numerosas.",
          ],
          example: {
            kind: "table",
            label: "Ejemplo de tabla con formato APA 7",
            number: "Tabla 1",
            title: "Puntajes Promedio de Autorregulación por Grupo de Estudio",
            columns: ["Grupo", "n", "M", "DE"],
            rows: [
              ["Experimental", "30", "8.4", "1.2"],
              ["Control", "28", "6.1", "1.5"],
            ],
            note: "Nota. M = media; DE = desviación estándar. Los puntajes se midieron en una escala de 0 a 10.",
          },
          tip: "Sugerencia: antes de insertar una tabla o figura, pregúntate si el lector entendería la información igual de bien en una oración. Si la respuesta es sí, probablemente no necesitas el recurso visual.",
        },
        {
          id: "l5-3",
          type: "video",
          title: "Video: cómo armar una tabla o figura en Word",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre la inserción y el formato de una tabla o figura en Word: líneas horizontales, numeración y título en cursiva.",
        },
        {
          id: "l5-4",
          type: "quiz",
          title: "Cuestionario: tablas y figuras",
          duration: "5 preguntas",
          questions: [
            {
              q: "¿Qué elementos componen una tabla o figura en APA 7?",
              options: [
                "Número, título, cuerpo (datos o imagen) y notas",
                "Solo número y título",
                "Únicamente el cuerpo de la tabla",
                "Título y pie de página solamente",
              ],
              correct: 0,
              explanation:
                "Toda tabla o figura APA 7 se compone de número, título, cuerpo y, cuando corresponde, notas.",
            },
            {
              q: "¿Qué tipo de líneas se usan en una tabla APA 7?",
              options: [
                "Líneas horizontales y verticales en todas las celdas",
                "Solo líneas horizontales (arriba, bajo los encabezados y al final)",
                "Ninguna línea en absoluto",
                "Bordes completos alrededor de cada celda",
              ],
              correct: 1,
              explanation:
                "APA 7 usa un formato minimalista: solo líneas horizontales en puntos clave de la tabla, nunca verticales.",
            },
            {
              q: "¿Cómo se capitaliza el título de una tabla o figura?",
              options: [
                "Con mayúscula tipo oración, igual que en las referencias",
                "Con mayúscula en cada palabra principal (title case), en cursiva",
                "Todo en mayúsculas",
                "Todo en minúsculas",
              ],
              correct: 1,
              explanation:
                "A diferencia de las referencias, el título de tablas y figuras usa mayúscula en cada palabra principal y va en cursiva.",
            },
            {
              q: "Las tablas y las figuras se numeran…",
              options: [
                "En una sola secuencia conjunta (1, 2, 3…)",
                "En dos secuencias independientes: Tabla 1, 2… y Figura 1, 2…",
                "Solo con letras (A, B, C)",
                "No llevan numeración en APA 7",
              ],
              correct: 1,
              explanation:
                "Las tablas y las figuras tienen cada una su propia secuencia numérica, independiente entre sí.",
            },
            {
              q: "¿Para qué se usa la nota de probabilidad en una tabla?",
              options: [
                "Es obligatoria en toda tabla, sin excepción",
                "Indica niveles de significancia estadística, con asteriscos (por ejemplo, *p < .05)",
                "Reemplaza el título de la tabla",
                "Solo se usa en figuras, nunca en tablas",
              ],
              correct: 1,
              explanation:
                "La nota de probabilidad es opcional y se usa cuando la tabla reporta resultados estadísticos con niveles de significancia.",
            },
          ],
        },
        {
          id: "l5-5",
          type: "checklist",
          title: "Lista de chequeo: tablas y figuras con estilo APA 7",
          duration: "6 ítems",
          intro:
            "Usa esta lista para revisar las tablas y figuras de tu trabajo antes de entregarlo. Marca las opciones que apliquen a tu texto.",
          items: [
            "Uso una tabla o figura solo cuando aporta información que se entiende mejor de forma visual que en texto corrido.",
            "Cada tabla o figura tiene su número en negrita (Tabla 1, Figura 1…) y un título breve en cursiva, en el orden en que se citan.",
            "Mi tabla usa únicamente líneas horizontales, sin líneas verticales ni bordes de celda.",
            "Incluyo una nota al pie cuando es necesario explicar abreviaturas, la fuente de los datos o la significancia estadística.",
            "Cada tabla y figura está mencionada en el texto antes de su aparición (por ejemplo, 'como se observa en la Tabla 1…').",
            "Las tablas y las figuras llevan numeración independiente entre sí (Tabla 1, 2… por un lado; Figura 1, 2… por otro).",
          ],
        },
      ],
    },
  ],
};

const FLAT_LESSONS = COURSE.modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title }))
);
const TOTAL_LESSONS = FLAT_LESSONS.length;
const STORAGE_KEY = "ficha-apa-progress-v1";

/* ------------------------------------------------------------------ */
/* HELPERS                                                             */
/* ------------------------------------------------------------------ */

function youTubeEmbedUrl(raw) {
  if (!raw) return null;
  try {
    const url = new URL(raw.trim());
    let id = null;
    if (url.hostname.includes("youtu.be")) {
      id = url.pathname.replace("/", "");
    } else if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") id = url.searchParams.get("v");
      else if (url.pathname.startsWith("/embed/")) id = url.pathname.split("/embed/")[1];
    }
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

const TYPE_META = {
  texto: { label: "TEXTO", Icon: FileText },
  video: { label: "VIDEO", Icon: PlayCircle },
  quiz: { label: "CUESTIONARIO", Icon: HelpCircle },
  checklist: { label: "LISTA DE CHEQUEO", Icon: ListChecks },
};

/* ------------------------------------------------------------------ */
/* APP                                                                  */
/* ------------------------------------------------------------------ */

export default function App() {
  const [activeId, setActiveId] = useState(FLAT_LESSONS[0].id);
  const [completed, setCompleted] = useState(new Set());
  const [videoLinks, setVideoLinks] = useState({});
  const [checklistState, setChecklistState] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState("idle"); // idle | saving | saved
  const [confirmReset, setConfirmReset] = useState(false);
  const saveTimer = useRef(null);

  // Cargar progreso guardado
  useEffect(() => {
    (async () => {
      try {
        const result = await window.storage.get(STORAGE_KEY);
        if (result && result.value) {
          const parsed = JSON.parse(result.value);
          setCompleted(new Set(parsed.completed || []));
          setVideoLinks(parsed.videoLinks || {});
          setChecklistState(parsed.checklistState || {});
          if (parsed.activeId && FLAT_LESSONS.some((l) => l.id === parsed.activeId)) {
            setActiveId(parsed.activeId);
          }
        }
      } catch {
        // no hay progreso guardado todavía
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  // Guardar progreso (con debounce breve)
  useEffect(() => {
    if (!loaded) return;
    setSaveState("saving");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      try {
        await window.storage.set(
          STORAGE_KEY,
          JSON.stringify({
            completed: Array.from(completed),
            videoLinks,
            checklistState,
            activeId,
          }),
          false
        );
        setSaveState("saved");
      } catch {
        setSaveState("idle");
      }
    }, 400);
    return () => clearTimeout(saveTimer.current);
  }, [completed, videoLinks, checklistState, activeId, loaded]);

  const markComplete = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const resetProgress = async () => {
    setCompleted(new Set());
    setVideoLinks({});
    setChecklistState({});
    setActiveId(FLAT_LESSONS[0].id);
    setConfirmReset(false);
    try {
      await window.storage.delete(STORAGE_KEY);
    } catch {
      // ignorar si no existía
    }
  };

  const activeIndex = FLAT_LESSONS.findIndex((l) => l.id === activeId);
  const active = FLAT_LESSONS[activeIndex];
  const nextLesson = FLAT_LESSONS[activeIndex + 1];
  const progressPct = Math.round((completed.size / TOTAL_LESSONS) * 100);

  const goTo = (id) => setActiveId(id);
  const goNext = () => {
    if (nextLesson) setActiveId(nextLesson.id);
  };

  if (!loaded) {
    return (
      <div className="fa-root fa-loading">
        <div className="fa-spinner" />
        <p>Cargando tu progreso…</p>
        <Fonts />
      </div>
    );
  }

  return (
    <div className="fa-root">
      <Fonts />

      {/* -------- Encabezado -------- */}
      <header className="fa-header">
        <div className="fa-header-left">
          <BookOpen size={20} strokeWidth={2} />
          <div>
            <div className="fa-title">{COURSE.title}</div>
            <div className="fa-subtitle">{COURSE.subtitle}</div>
          </div>
        </div>
        <div className="fa-header-right">
          <div className="fa-progress-wrap">
            <div className="fa-progress-track">
              <div className="fa-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="fa-progress-label">
              {completed.size}/{TOTAL_LESSONS} lecciones · {progressPct}%
            </span>
          </div>
        </div>
      </header>

      <div className="fa-body">
        {/* -------- Sidebar -------- */}
        <nav className="fa-sidebar" aria-label="Contenido del curso">
          {COURSE.modules.map((mod) => (
            <div key={mod.id} className="fa-module">
              <div className="fa-module-heading">
                <span className="fa-module-label">{mod.label}</span>
                <span className="fa-module-title">{mod.title}</span>
              </div>
              <ol className="fa-lesson-list">
                {mod.lessons.map((lesson) => {
                  const meta = TYPE_META[lesson.type];
                  const isActive = lesson.id === activeId;
                  const isDone = completed.has(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <button
                        className={`fa-lesson-item${isActive ? " is-active" : ""}${
                          isDone ? " is-done" : ""
                        }`}
                        onClick={() => goTo(lesson.id)}
                      >
                        <span className="fa-lesson-check">
                          {isDone ? (
                            <CheckCircle2 size={17} strokeWidth={2} />
                          ) : (
                            <Circle size={17} strokeWidth={1.6} />
                          )}
                        </span>
                        <span className="fa-lesson-text">
                          <span className="fa-lesson-title">{lesson.title}</span>
                          <span className="fa-lesson-meta">
                            <meta.Icon size={12} strokeWidth={2} />
                            {meta.label} · {lesson.duration}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}

          <div className="fa-sidebar-footer">
            <span className="fa-save-indicator">
              {saveState === "saving" ? "Guardando…" : "Progreso guardado en este sitio"}
            </span>
            {confirmReset ? (
              <div className="fa-reset-confirm">
                <span>¿Reiniciar todo el progreso?</span>
                <div>
                  <button className="fa-btn-ghost-sm" onClick={() => setConfirmReset(false)}>
                    Cancelar
                  </button>
                  <button className="fa-btn-danger-sm" onClick={resetProgress}>
                    Sí, reiniciar
                  </button>
                </div>
              </div>
            ) : (
              <button className="fa-reset-btn" onClick={() => setConfirmReset(true)}>
                <RotateCcw size={13} strokeWidth={2} />
                Reiniciar progreso
              </button>
            )}
          </div>
        </nav>

        {/* -------- Contenido principal -------- */}
        <main className="fa-main">
          {active && (
            <LessonCard
              key={active.id}
              lesson={active}
              index={activeIndex}
              moduleTitle={active.moduleTitle}
              isDone={completed.has(active.id)}
              videoLink={videoLinks[active.id] || ""}
              onSetVideoLink={(url) =>
                setVideoLinks((prev) => ({ ...prev, [active.id]: url }))
              }
              checkedItems={checklistState[active.id] || []}
              onToggleItem={(itemIndex) =>
                setChecklistState((prev) => {
                  const current = prev[active.id] || [];
                  const next = [...current];
                  next[itemIndex] = !next[itemIndex];
                  return { ...prev, [active.id]: next };
                })
              }
              onComplete={() => markComplete(active.id)}
              onNext={goNext}
              hasNext={Boolean(nextLesson)}
            />
          )}
        </main>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TARJETA DE LECCIÓN                                                   */
/* ------------------------------------------------------------------ */

function LessonCard({
  lesson,
  index,
  moduleTitle,
  isDone,
  videoLink,
  onSetVideoLink,
  checkedItems,
  onToggleItem,
  onComplete,
  onNext,
  hasNext,
}) {
  const meta = TYPE_META[lesson.type];

  return (
    <article className="fa-card">
      <div className="fa-card-folio">
        <span>{moduleTitle}</span>
        <span className="fa-folio-page">p. {String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="fa-card-punch" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="fa-card-head">
        <span className="fa-card-type">
          <meta.Icon size={13} strokeWidth={2} />
          {meta.label}
        </span>
        <h1 className="fa-card-title">{lesson.title}</h1>
      </div>

      <div className="fa-card-body">
        {lesson.type === "texto" && <TextLesson lesson={lesson} />}
        {lesson.type === "video" && (
          <VideoLesson lesson={lesson} link={videoLink} onSetLink={onSetVideoLink} />
        )}
        {lesson.type === "quiz" && (
          <QuizLesson
            lesson={lesson}
            onPassed={onComplete}
            onNext={onNext}
            hasNext={hasNext}
            isDone={isDone}
          />
        )}
        {lesson.type === "checklist" && (
          <ChecklistLesson
            lesson={lesson}
            checkedItems={checkedItems}
            onToggleItem={onToggleItem}
          />
        )}
      </div>

      {lesson.type !== "quiz" && (
        <div className="fa-card-footer">
          {isDone && (
            <span className="fa-done-badge">
              <CheckCircle2 size={15} strokeWidth={2} /> Completada
            </span>
          )}
          <button
            className="fa-btn-primary"
            onClick={() => {
              onComplete();
              if (hasNext) onNext();
            }}
          >
            {hasNext ? "Completar y continuar" : "Completar curso"}
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </article>
  );
}

function TextLesson({ lesson }) {
  return (
    <div className="fa-text-lesson">
      {lesson.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {lesson.example && <ExampleBlock example={lesson.example} />}
      {lesson.tip && <div className="fa-tip">{lesson.tip}</div>}
    </div>
  );
}

function ExampleBlock({ example }) {
  return (
    <div className="fa-example">
      <span className="fa-example-tag">Ejemplo</span>
      <p className="fa-example-label">{example.label}</p>

      {example.kind === "contrast" && (
        <div className="fa-example-contrast">
          {example.items.map((item, i) => (
            <div
              key={i}
              className={`fa-example-contrast-item${item.good ? " is-good" : " is-bad"}`}
            >
              <span className="fa-example-contrast-heading">{item.heading}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {example.kind === "titlepage" && (
        <div className="fa-example-titlepage">
          {example.lines.map((line, i) => (
            <p key={i} className={line.style === "title" ? "is-title" : ""}>
              {line.text}
            </p>
          ))}
        </div>
      )}

      {example.kind === "headings" && (
        <div className="fa-example-headings">
          {example.levels.map((lvl) => (
            <div key={lvl.level} className={`fa-heading-spec fa-heading-spec-${lvl.level}`}>
              <span className="fa-heading-spec-tag">Nivel {lvl.level}</span>
              <span className="fa-heading-spec-text">
                <span className="fa-heading-spec-heading">{lvl.heading}</span>
                {lvl.body && <span className="fa-heading-spec-body">{lvl.body}</span>}
              </span>
            </div>
          ))}
        </div>
      )}

      {example.kind === "table" && (
        <div className="fa-example-table-wrap">
          <p className="fa-example-table-caption">
            <strong>{example.number}</strong>
            <br />
            <em>{example.title}</em>
          </p>
          <table className="fa-example-table">
            <thead>
              <tr>
                {example.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {example.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {example.note && <p className="fa-example-table-note">{example.note}</p>}
        </div>
      )}

      {example.note && example.kind === "contrast" && (
        <p className="fa-example-note">{example.note}</p>
      )}
    </div>
  );
}

function VideoLesson({ lesson, link, onSetLink }) {
  const [draft, setDraft] = useState(link);
  const embed = youTubeEmbedUrl(link);

  useEffect(() => setDraft(link), [link]);

  return (
    <div className="fa-video-lesson">
      <p className="fa-video-desc">{lesson.description}</p>

      {embed ? (
        <div className="fa-video-frame">
          <iframe
            src={embed}
            title={lesson.title}
            allowFullScreen
            frameBorder="0"
          />
        </div>
      ) : (
        <div className="fa-video-placeholder">
          <PlayCircle size={28} strokeWidth={1.5} />
          <span>Aún no se ha agregado un video para esta lección.</span>
        </div>
      )}

      <div className="fa-video-input-row">
        <Link2 size={15} strokeWidth={2} />
        <input
          type="text"
          placeholder="Pega aquí el enlace de YouTube…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button className="fa-btn-secondary" onClick={() => onSetLink(draft.trim())}>
          Guardar enlace
        </button>
      </div>
    </div>
  );
}

function ChecklistLesson({ lesson, checkedItems, onToggleItem }) {
  const checkedCount = lesson.items.filter((_, i) => checkedItems[i]).length;
  const allChecked = checkedCount === lesson.items.length;

  return (
    <div className="fa-checklist">
      <p className="fa-checklist-intro">{lesson.intro}</p>

      <div className="fa-checklist-progress">
        <div className="fa-checklist-track">
          <div
            className="fa-checklist-fill"
            style={{ width: `${(checkedCount / lesson.items.length) * 100}%` }}
          />
        </div>
        <span>
          {checkedCount}/{lesson.items.length} marcados
        </span>
      </div>

      <ul className="fa-checklist-items">
        {lesson.items.map((item, i) => {
          const checked = Boolean(checkedItems[i]);
          return (
            <li key={i}>
              <button
                className={`fa-checklist-item${checked ? " is-checked" : ""}`}
                onClick={() => onToggleItem(i)}
              >
                <span className="fa-checklist-box">
                  {checked ? (
                    <CheckSquare size={18} strokeWidth={2} />
                  ) : (
                    <Square size={18} strokeWidth={1.6} />
                  )}
                </span>
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {allChecked && (
        <div className="fa-checklist-done">
          <CheckCircle2 size={15} strokeWidth={2} />
          Has revisado todos los puntos de esta lista.
        </div>
      )}
    </div>
  );
}

function QuizLesson({ lesson, onPassed, onNext, hasNext, isDone }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = lesson.questions.every((_, i) => answers[i] !== undefined);
  const score = lesson.questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0),
    0
  );
  const pct = Math.round((score / lesson.questions.length) * 100);

  const submit = () => {
    setSubmitted(true);
    onPassed();
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="fa-quiz">
      {lesson.questions.map((q, qi) => (
        <div className="fa-quiz-q" key={qi}>
          <p className="fa-quiz-question">
            {qi + 1}. {q.q}
          </p>
          <div className="fa-quiz-options">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              let stateClass = "";
              if (submitted) {
                if (oi === q.correct) stateClass = "is-correct";
                else if (selected && oi !== q.correct) stateClass = "is-wrong";
              } else if (selected) {
                stateClass = "is-selected";
              }
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  className={`fa-quiz-option ${stateClass}`}
                  onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                >
                  <span className="fa-option-bullet">{String.fromCharCode(97 + oi)}</span>
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="fa-quiz-explanation">
              {answers[qi] === q.correct ? "Correcto. " : "No es correcto. "}
              {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button className="fa-btn-primary" disabled={!allAnswered} onClick={submit}>
          Enviar respuestas
          <ChevronRight size={16} strokeWidth={2.2} />
        </button>
      ) : (
        <div className="fa-quiz-result">
          <div className="fa-quiz-score">
            Resultado: {score}/{lesson.questions.length} ({pct}%)
          </div>
          {isDone && (
            <span className="fa-done-badge">
              <CheckCircle2 size={15} strokeWidth={2} /> Completada
            </span>
          )}
          <button className="fa-btn-secondary" onClick={retry}>
            <RotateCcw size={14} strokeWidth={2} />
            Intentar de nuevo
          </button>
          <button className="fa-btn-primary" onClick={onNext} disabled={!hasNext}>
            {hasNext ? "Continuar" : "Fin del curso"}
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ESTILOS Y TIPOGRAFÍA                                                 */
/* ------------------------------------------------------------------ */

function Fonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

      :root {
        --ink: #0B3D42;
        --ink-soft: #1B4C52;
        --paper: #F6F1E7;
        --paper-card: #FCFAF4;
        --gold: #C98A2E;
        --wine: #7A2E3B;
        --sage: #4F7A5D;
        --line: #DDD3BE;
        --text: #29291F;
        --text-soft: #6b6b5f;
      }

      * { box-sizing: border-box; }

      .fa-root {
        font-family: 'Inter', sans-serif;
        color: var(--text);
        background: var(--paper);
        background-image:
          radial-gradient(circle at 1px 1px, rgba(11,61,66,0.05) 1px, transparent 0);
        background-size: 22px 22px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .fa-loading {
        align-items: center;
        justify-content: center;
        gap: 12px;
        color: var(--ink);
        font-family: 'Source Serif 4', serif;
        padding: 60px 20px;
      }
      .fa-spinner {
        width: 26px; height: 26px;
        border: 3px solid var(--line);
        border-top-color: var(--gold);
        border-radius: 50%;
        animation: fa-spin 0.8s linear infinite;
      }
      @keyframes fa-spin { to { transform: rotate(360deg); } }

      .fa-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 22px;
        background: var(--ink);
        color: var(--paper);
        flex-wrap: wrap;
      }
      .fa-header-left { display: flex; align-items: center; gap: 10px; }
      .fa-title {
        font-family: 'Source Serif 4', serif;
        font-weight: 700;
        font-size: 19px;
        letter-spacing: 0.2px;
        line-height: 1.1;
      }
      .fa-subtitle {
        font-size: 11.5px;
        color: #CFE0DD;
        margin-top: 2px;
      }
      .fa-header-right { display: flex; align-items: center; }
      .fa-progress-wrap { display: flex; flex-direction: column; gap: 4px; min-width: 170px; }
      .fa-progress-track {
        width: 100%; height: 6px; border-radius: 3px;
        background: rgba(255,255,255,0.18);
        overflow: hidden;
      }
      .fa-progress-fill {
        height: 100%;
        background: var(--gold);
        transition: width 0.4s ease;
      }
      .fa-progress-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: #CFE0DD;
        text-align: right;
      }

      .fa-body {
        display: flex;
        flex: 1;
        min-height: 0;
        align-items: flex-start;
      }

      /* ---- Sidebar ---- */
      .fa-sidebar {
        width: 300px;
        flex-shrink: 0;
        background: var(--paper-card);
        border-right: 1px solid var(--line);
        padding: 18px 0 0 0;
        max-height: 82vh;
        overflow-y: auto;
      }
      .fa-module { padding: 0 18px 14px 18px; border-bottom: 1px dashed var(--line); margin-bottom: 6px; }
      .fa-module:last-of-type { border-bottom: none; }
      .fa-module-heading { margin-bottom: 8px; }
      .fa-module-label {
        display: block;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        letter-spacing: 1px;
        color: var(--gold);
        text-transform: uppercase;
      }
      .fa-module-title {
        display: block;
        font-family: 'Source Serif 4', serif;
        font-weight: 600;
        font-size: 15px;
        color: var(--ink);
      }
      .fa-lesson-list { list-style: none; margin: 0; padding: 0; }
      .fa-lesson-item {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 9px;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        padding: 7px 8px;
        border-radius: 6px;
        /* sangría francesa: la segunda línea del título queda alineada al texto, no al icono */
        padding-left: 8px;
        text-indent: 0;
      }
      .fa-lesson-item:hover { background: rgba(11,61,66,0.06); }
      .fa-lesson-item.is-active { background: rgba(201,138,46,0.14); }
      .fa-lesson-check { margin-top: 2px; color: var(--text-soft); flex-shrink: 0; }
      .fa-lesson-item.is-done .fa-lesson-check { color: var(--sage); }
      .fa-lesson-item.is-active .fa-lesson-title { color: var(--ink); font-weight: 600; }
      .fa-lesson-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding-left: 14px;
        border-left: 1px solid transparent;
      }
      .fa-lesson-item.is-active .fa-lesson-text { border-left-color: var(--gold); }
      .fa-lesson-title { font-size: 13.2px; line-height: 1.35; color: var(--text); }
      .fa-lesson-meta {
        display: flex; align-items: center; gap: 4px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        color: var(--text-soft);
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      .fa-sidebar-footer {
        padding: 14px 18px 20px 18px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-top: 1px solid var(--line);
      }
      .fa-save-indicator { font-size: 10.5px; color: var(--text-soft); font-family: 'IBM Plex Mono', monospace; }
      .fa-reset-btn {
        display: flex; align-items: center; gap: 6px;
        background: none; border: 1px solid var(--line); border-radius: 6px;
        padding: 7px 10px; font-size: 12px; color: var(--wine);
        cursor: pointer; width: fit-content;
      }
      .fa-reset-btn:hover { background: rgba(122,46,59,0.06); }
      .fa-reset-confirm { display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: var(--wine); }
      .fa-btn-ghost-sm, .fa-btn-danger-sm {
        border: 1px solid var(--line); background: none; border-radius: 5px;
        padding: 5px 9px; font-size: 11.5px; cursor: pointer; margin-right: 6px;
      }
      .fa-btn-danger-sm { background: var(--wine); color: #fff; border-color: var(--wine); }

      /* ---- Contenido principal ---- */
      .fa-main {
        flex: 1;
        min-width: 0;
        padding: 26px 30px 40px 30px;
        max-height: 82vh;
        overflow-y: auto;
      }

      .fa-card {
        background: var(--paper-card);
        border: 1px solid var(--line);
        border-radius: 10px;
        max-width: 760px;
        margin: 0 auto;
        padding: 26px 32px 30px 32px;
        position: relative;
        box-shadow: 0 1px 0 var(--line), 0 8px 22px -18px rgba(11,61,66,0.5);
      }

      .fa-card-punch {
        position: absolute;
        left: 14px; top: 22px;
        display: flex; flex-direction: column; gap: 46px;
      }
      .fa-card-punch span {
        width: 9px; height: 9px; border-radius: 50%;
        background: var(--paper);
        border: 1px solid var(--line);
      }

      .fa-card-folio {
        display: flex; justify-content: space-between; align-items: baseline;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: var(--text-soft);
        text-transform: uppercase;
        letter-spacing: 0.6px;
        border-bottom: 1px solid var(--line);
        padding-bottom: 10px;
        margin-bottom: 18px;
        margin-left: 26px;
      }
      .fa-folio-page { color: var(--gold); }

      .fa-card-head { margin-left: 26px; margin-bottom: 18px; }
      .fa-card-type {
        display: inline-flex; align-items: center; gap: 6px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px; letter-spacing: 1px;
        color: var(--wine);
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      .fa-card-title {
        font-family: 'Source Serif 4', serif;
        font-weight: 700;
        font-size: 26px;
        color: var(--ink);
        line-height: 1.2;
        margin: 0;
      }

      .fa-card-body { margin-left: 26px; }

      .fa-text-lesson p {
        font-size: 15px; line-height: 1.75; margin: 0 0 14px 0; color: var(--text);
      }
      .fa-tip {
        margin-top: 6px;
        padding: 12px 14px;
        background: rgba(201,138,46,0.1);
        border-left: 3px solid var(--gold);
        border-radius: 4px;
        font-size: 13.5px;
        color: var(--ink-soft);
      }

      /* ---- Bloque de ejemplos ---- */
      .fa-example {
        position: relative;
        margin: 6px 0 16px 0;
        padding: 18px 18px 16px 18px;
        border: 1px dashed var(--line);
        border-radius: 8px;
        background: rgba(122,46,59,0.035);
      }
      .fa-example-tag {
        display: inline-block;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 9.5px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #fff;
        background: var(--wine);
        padding: 2px 8px;
        border-radius: 3px;
        margin-bottom: 8px;
      }
      .fa-example-label {
        font-family: 'Source Serif 4', serif;
        font-weight: 600;
        font-size: 14.5px;
        color: var(--ink);
        margin: 0 0 12px 0;
      }

      /* contraste (cita vs. plagio) */
      .fa-example-contrast { display: flex; flex-direction: column; gap: 10px; }
      .fa-example-contrast-item {
        border-radius: 6px; padding: 10px 12px;
        border: 1px solid var(--line);
        background: var(--paper-card);
      }
      .fa-example-contrast-item.is-good { border-left: 3px solid var(--sage); }
      .fa-example-contrast-item.is-bad { border-left: 3px solid var(--wine); }
      .fa-example-contrast-heading {
        display: block;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px; letter-spacing: 0.5px; text-transform: uppercase;
        margin-bottom: 4px;
      }
      .fa-example-contrast-item.is-good .fa-example-contrast-heading { color: var(--sage); }
      .fa-example-contrast-item.is-bad .fa-example-contrast-heading { color: var(--wine); }
      .fa-example-contrast-item p { margin: 0; font-size: 13.5px; line-height: 1.55; color: var(--text); }
      .fa-example-note {
        margin: 10px 0 0 0; font-size: 12.5px; color: var(--text-soft); line-height: 1.55;
      }

      /* portada de ejemplo */
      .fa-example-titlepage {
        background: var(--paper-card);
        border: 1px solid var(--line);
        border-radius: 6px;
        padding: 28px 24px;
        text-align: center;
      }
      .fa-example-titlepage p {
        margin: 0 0 6px 0; font-size: 12.5px; color: var(--text);
      }
      .fa-example-titlepage p.is-title {
        font-weight: 700; font-size: 14px; color: var(--ink);
        margin-bottom: 22px; line-height: 1.4;
      }

      /* niveles de encabezado */
      .fa-example-headings {
        background: var(--paper-card);
        border: 1px solid var(--line);
        border-radius: 6px;
        padding: 18px 20px;
        display: flex; flex-direction: column; gap: 12px;
      }
      .fa-heading-spec { display: flex; align-items: baseline; gap: 10px; }
      .fa-heading-spec-tag {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 9.5px; color: var(--text-soft);
        border: 1px solid var(--line); border-radius: 3px;
        padding: 1px 6px; flex-shrink: 0; white-space: nowrap;
      }
      .fa-heading-spec-text { font-size: 13.5px; color: var(--text); }
      .fa-heading-spec-heading { font-weight: 700; color: var(--ink); }
      .fa-heading-spec-body { color: var(--text-soft); }
      .fa-heading-spec-1 .fa-heading-spec-heading { text-align: center; }
      .fa-heading-spec-3 .fa-heading-spec-heading { font-style: italic; }
      .fa-heading-spec-5 .fa-heading-spec-heading { font-style: italic; }
      .fa-heading-spec-1 { justify-content: center; }
      .fa-heading-spec-1 .fa-heading-spec-text { text-align: center; }

      /* tabla de ejemplo */
      .fa-example-table-wrap {
        background: var(--paper-card);
        border: 1px solid var(--line);
        border-radius: 6px;
        padding: 16px 18px;
      }
      .fa-example-table-caption {
        font-size: 13px; color: var(--text); margin: 0 0 10px 0; line-height: 1.5;
      }
      .fa-example-table {
        width: 100%; border-collapse: collapse; font-size: 13px;
      }
      .fa-example-table thead tr { border-top: 1.5px solid var(--ink); border-bottom: 1px solid var(--ink); }
      .fa-example-table tbody tr:last-child { border-bottom: 1.5px solid var(--ink); }
      .fa-example-table th, .fa-example-table td {
        padding: 7px 10px; text-align: left; color: var(--text);
      }
      .fa-example-table-note {
        margin: 10px 0 0 0; font-size: 11.5px; color: var(--text-soft); font-style: italic;
      }

      .fa-video-desc { font-size: 14px; color: var(--text-soft); margin-bottom: 14px; line-height: 1.6; }
      .fa-video-frame {
        position: relative; width: 100%; padding-top: 56.25%;
        border-radius: 8px; overflow: hidden; background: #000; margin-bottom: 16px;
      }
      .fa-video-frame iframe {
        position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
      }
      .fa-video-placeholder {
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
        height: 200px; border: 1px dashed var(--line); border-radius: 8px;
        color: var(--text-soft); font-size: 13px; margin-bottom: 16px; background: rgba(11,61,66,0.03);
      }
      .fa-video-input-row {
        display: flex; align-items: center; gap: 8px;
        border: 1px solid var(--line); border-radius: 7px; padding: 6px 10px;
        background: var(--paper);
      }
      .fa-video-input-row input {
        flex: 1; border: none; background: none; outline: none; font-size: 13px; color: var(--text);
        font-family: 'Inter', sans-serif;
      }

      .fa-btn-primary {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--ink); color: var(--paper);
        border: none; border-radius: 7px;
        padding: 10px 18px; font-size: 13.5px; font-weight: 600;
        cursor: pointer;
      }
      .fa-btn-primary:hover { background: var(--ink-soft); }
      .fa-btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }

      .fa-btn-secondary {
        display: inline-flex; align-items: center; gap: 6px;
        background: none; color: var(--ink);
        border: 1px solid var(--ink); border-radius: 7px;
        padding: 7px 13px; font-size: 12.5px; font-weight: 500;
        cursor: pointer; white-space: nowrap;
      }
      .fa-btn-secondary:hover { background: rgba(11,61,66,0.06); }

      .fa-card-footer {
        margin-left: 26px; margin-top: 22px; padding-top: 18px;
        border-top: 1px solid var(--line);
        display: flex; align-items: center; gap: 14px;
      }
      .fa-done-badge {
        display: inline-flex; align-items: center; gap: 5px;
        color: var(--sage); font-size: 12.5px; font-weight: 600;
      }

      /* ---- Checklist ---- */
      .fa-checklist-intro { font-size: 14px; color: var(--text-soft); line-height: 1.65; margin: 0 0 16px 0; }
      .fa-checklist-progress {
        display: flex; align-items: center; gap: 10px;
        margin-bottom: 16px;
      }
      .fa-checklist-track {
        flex: 1; height: 6px; border-radius: 3px; background: var(--line); overflow: hidden;
      }
      .fa-checklist-fill { height: 100%; background: var(--sage); transition: width 0.3s ease; }
      .fa-checklist-progress span {
        font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-soft); white-space: nowrap;
      }
      .fa-checklist-items { list-style: none; margin: 0 0 6px 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      .fa-checklist-item {
        width: 100%;
        display: flex; align-items: flex-start; gap: 10px;
        text-align: left;
        border: 1px solid var(--line); border-radius: 8px;
        padding: 11px 14px; font-size: 14px; line-height: 1.5;
        background: var(--paper); cursor: pointer; color: var(--text);
      }
      .fa-checklist-item:hover { border-color: var(--gold); }
      .fa-checklist-item.is-checked {
        border-color: var(--sage); background: rgba(79,122,93,0.09); color: var(--ink);
      }
      .fa-checklist-box { color: var(--text-soft); flex-shrink: 0; margin-top: 1px; }
      .fa-checklist-item.is-checked .fa-checklist-box { color: var(--sage); }
      .fa-checklist-done {
        display: flex; align-items: center; gap: 7px;
        margin-top: 14px; font-size: 13px; color: var(--sage); font-weight: 600;
      }

      /* ---- Quiz ---- */
      .fa-quiz-q { margin-bottom: 22px; }
      .fa-quiz-question { font-size: 14.5px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
      .fa-quiz-options { display: flex; flex-direction: column; gap: 7px; }
      .fa-quiz-option {
        display: flex; align-items: center; gap: 10px;
        text-align: left;
        border: 1px solid var(--line); border-radius: 7px;
        padding: 9px 12px; font-size: 13.5px;
        background: var(--paper); cursor: pointer;
      }
      .fa-quiz-option:hover:not(:disabled) { border-color: var(--gold); }
      .fa-quiz-option.is-selected { border-color: var(--gold); background: rgba(201,138,46,0.1); }
      .fa-quiz-option.is-correct { border-color: var(--sage); background: rgba(79,122,93,0.12); }
      .fa-quiz-option.is-wrong { border-color: var(--wine); background: rgba(122,46,59,0.1); }
      .fa-option-bullet {
        width: 20px; height: 20px; border-radius: 50%;
        border: 1px solid var(--line); background: var(--paper-card);
        display: flex; align-items: center; justify-content: center;
        font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; flex-shrink: 0;
        text-transform: uppercase;
      }
      .fa-quiz-explanation {
        margin-top: 8px; font-size: 12.5px; color: var(--text-soft);
        padding-left: 2px; line-height: 1.5;
      }
      .fa-quiz-result {
        display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        border-top: 1px solid var(--line); padding-top: 16px; margin-top: 6px;
      }
      .fa-quiz-score {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px; color: var(--ink); font-weight: 600;
      }

      @media (max-width: 780px) {
        .fa-body { flex-direction: column; }
        .fa-sidebar { width: 100%; max-height: none; border-right: none; border-bottom: 1px solid var(--line); }
        .fa-main { max-height: none; padding: 20px 16px 32px 16px; }
        .fa-card { padding: 22px 18px 26px 18px; }
        .fa-card-punch { display: none; }
        .fa-card-folio, .fa-card-head, .fa-card-body, .fa-card-footer { margin-left: 0; }
        .fa-card-title { font-size: 21px; }
      }
    `}</style>
  );
}
