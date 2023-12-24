export const OWNERS = {
  FAMILIA: "familia",
  FITA: "fita",
  GRISEL: "grisel",
  FLOR: "flor",
  GABY: "gaby",
  CASA: "casa",
};

export const MONTHS_KEYS = {
  ENERO: "enero",
  FEBRERO: "febrero",
  MARZO: "marzo",
  ABRIL: "abril",
  MAYO: "mayo",
  JUNIO: "junio",
  JULIO: "julio",
  AGOSTO: "agosto",
  SEPTIEMBRE: "septiembre",
  OCTUBRE: "octubre",
  NOVIEMBRE: "noviembre",
  DICIEMBRE: "diciembre",
};

export const YEAR = '2024'

export const DAYS = [
  {
    es: "lunes",
    en: "monday",
  },
  {
    es: "martes",
    en: "tuesday",
  },
  {
    es: "miércoles",
    en: "wednesday",
  },
  {
    es: "jueves",
    en: "thursday",
  },
  {
    es: "viernes",
    en: "friday",
  },
  {
    es: "sábado",
    en: "saturday",
  },
  {
    es: "domingo",
    en: "sunday",
  },
];

export const MONTHS = [
  {
    key: MONTHS_KEYS.ENERO,
    es_name: "Enero",
    en_name: "January",
    first: 1,
    days: 31,
    feriados: [1],
  },
  {
    key: MONTHS_KEYS.FEBRERO,
    es_name: "Febrero",
    en_name: "February",
    first: 4,
    days: 29,
    feriados: [12, 13],
  },
  {
    key: MONTHS_KEYS.MARZO,
    es_name: "Marzo",
    en_name: "March",
    first: 5,
    days: 31,
    feriados: [24, 28, 29],
  },
  {
    key: MONTHS_KEYS.ABRIL,
    es_name: "Abril",
    en_name: "April",
    first: 1,
    days: 30,
    feriados: [2, 7],
  },
  {
    key: MONTHS_KEYS.MAYO,
    es_name: "Mayo",
    en_name: "May",
    first: 3,
    days: 31,
    feriados: [1, 25],
  },
  {
    key: MONTHS_KEYS.JUNIO,
    es_name: "Junio",
    en_name: "June",
    first: 6,
    days: 30,
    feriados: [20],
  },
  {
    key: MONTHS_KEYS.JULIO,
    es_name: "Julio",
    en_name: "July",
    first: 1,
    days: 31,
    feriados: [9],
  },
  {
    key: MONTHS_KEYS.AGOSTO,
    es_name: "Agosto",
    en_name: "August",
    first: 4,
    days: 31,
    feriados: [17],
  },
  {
    key: MONTHS_KEYS.SEPTIEMBRE,
    es_name: "Septiembre",
    en_name: "September",
    first: 7,
    days: 30,
    feriados: [],
  },
  {
    key: MONTHS_KEYS.OCTUBRE,
    es_name: "Octubre",
    en_name: "October",
    first: 2,
    days: 31,
    feriados: [12],
  },
  {
    key: MONTHS_KEYS.NOVIEMBRE,
    es_name: "Noviembre",
    en_name: "November",
    first: 5,
    days: 30,
    feriados: [20],
  },
  {
    key: MONTHS_KEYS.DICIEMBRE,
    es_name: "Diciembre",
    en_name: "December",
    first: 7,
    days: 31,
    feriados: [8, 25],
  },
];

export const OPTIONS = {
  [OWNERS.FAMILIA]: {
    [MONTHS_KEYS.ENERO]: {
      cumples: [
        {
          number: 11,
          name: "Simón",
        },
        {
          number: 13,
          name: "Flor",
        },
        {
          number: 23,
          name: "Nala",
        },
      ],
    },
    [MONTHS_KEYS.FEBRERO]: {
      cumples: [
        {
          number: 7,
          name: "Donatella",
        },
      ],
    },
    [MONTHS_KEYS.MARZO]: {
      cumples: [
        {
          number: 21,
          name: "Fita",
        },
      ],
    },
    [MONTHS_KEYS.JUNIO]: {
      cumples: [
        {
          number: 8,
          name: "Mamá",
        },
      ],
    },
    [MONTHS_KEYS.JULIO]: {
      cumples: [
        {
          number: 10,
          name: "Juan",
        },
      ],
    },
    [MONTHS_KEYS.SEPTIEMBRE]: {
      cumples: [
        {
          number: 6,
          name: "Noah",
        },
      ],
    },
    [MONTHS_KEYS.DICIEMBRE]: {
      cumples: [
        {
          number: 7,
          name: "Papá",
        },
      ],
    },
  },
  [OWNERS.GRISEL]: {
    [MONTHS_KEYS.ENERO]: {
      cumples: [
        {
          number: 11,
          name: "Simón",
        },
        {
          number: 13,
          name: "Flor",
        },
        {
          number: 23,
          name: "Nala",
        },
      ],
    },
    [MONTHS_KEYS.FEBRERO]: {
      cumples: [
        {
          number: 7,
          name: "Donatella",
        },
      ],
    },
    [MONTHS_KEYS.MARZO]: {
      cumples: [
        {
          number: 21,
          name: "Fita",
        },
      ],
      dates: [
        {
          number: 1,
          name: "Comienzo del Ciclo Lectivo",
        },
      ],
    },
    [MONTHS_KEYS.MAYO]: {
      dates: [
        {
          number: 27,
          name: "Día de la Prevención de la Violencia en el Noviazgo",
        },
        {
          number: 28,
          name: "Día de los jardines de infantes y de la maestra jardinera",
        },
        {
          number: 30,
          name: "Día Internacional del desaparecido",
        },
        {
          number: 31,
          name: "Fin del primer trimestre",
        },
      ],
    },
    [MONTHS_KEYS.JUNIO]: {
      cumples: [
        {
          number: 8,
          name: "Mi cumple!",
        },
      ],
    },
    [MONTHS_KEYS.JULIO]: {
      cumples: [
        {
          number: 10,
          name: "Juan",
        },
      ],
      dates: [
        {
          number: 2,
          name: "Día del asistente social",
        },
        {
          number: [17, 28],
          name: "Receso escolar de invierno",
        },
      ],
    },
    [MONTHS_KEYS.AGOSTO]: {
      dates: [
        {
          number: 2,
          name: "Día la escuela pública digna",
        },
        {
          number: 20,
          name: "Día del niño",
        },
        {
          number: 25,
          name: "Día del auxiliar",
        },
        {
          number: 31,
          name: "Fin del segundo trimestre",
        },
      ],
    },
    [MONTHS_KEYS.SEPTIEMBRE]: {
      cumples: [
        {
          number: 6,
          name: "Noah",
        },
      ],
      dates: [
        {
          number: 2,
          name: "Día del profe de inglés",
        },
        {
          number: 4,
          name: "Día del secretario/prosecretario",
        },
        {
          number: 11,
          name: "Día del maestro",
        },
        {
          number: 13,
          name: "Día del bibliotecario/a",
        },
        {
          number: 17,
          name: "Día del profesor y de la psicopedagoga",
        },
        {
          number: 19,
          name: "Día del preceptor",
        },
        {
          number: 20,
          name: "Día del EOE",
        },
        {
          number: 28,
          name: "Día del director/vicedirector",
        },
      ],
    },
    [MONTHS_KEYS.OCTUBRE]: {
      dates: [
        {
          number: 8,
          name: "Día del Profesor de Educación Física",
        },
        {
          number: 15,
          name: "Día de la familia y de las cooperadoras escolares",
        },
      ],
    },
    [MONTHS_KEYS.NOVIEMBRE]: {
      dates: [
        {
          number: 11,
          name: "Día del Escultor y las Artes Plásticas",
        },
        {
          number: 22,
          name: "Día de la música",
        },
        {
          number: 30,
          name: "Fin del tercer trimestre",
        },
      ],
    },
    [MONTHS_KEYS.DICIEMBRE]: {
      cumples: [
        {
          number: 7,
          name: "Gaby",
        },
      ],
      dates: [
        {
          number: 26,
          name: "Fin del Ciclo Lectivo",
        },
      ],
    },
  },
  [OWNERS.FITA]: {
    [MONTHS_KEYS.ENERO]: {
      cumples: [
        {
          number: 11,
          name: "Simón",
        },
        {
          number: 13,
          name: "Flor",
        },
        {
          number: 23,
          name: "Nala",
        },
      ],
    },
    [MONTHS_KEYS.FEBRERO]: {
      cumples: [
        {
          number: 7,
          name: "Donatella",
        },
      ],
    },
    [MONTHS_KEYS.MARZO]: {
      cumples: [
        {
          number: 21,
          name: "My b-day!",
        },
      ],
    },
    [MONTHS_KEYS.ABRIL]: {
      cumples: [
        {
          number: 29,
          name: "Veroh",
        },
      ],
    },
    [MONTHS_KEYS.JUNIO]: {
      cumples: [
        {
          number: 8,
          name: "Mamá",
        },
      ],
    },
    [MONTHS_KEYS.JULIO]: {
      cumples: [
        {
          number: 10,
          name: "Juan",
        },
      ],
    },
    [MONTHS_KEYS.SEPTIEMBRE]: {
      cumples: [
        {
          number: 6,
          name: "Noah",
        },
      ],
    },
    [MONTHS_KEYS.NOVIEMBRE]: {
      cumples: [
        {
          number: 25,
          name: "Marta",
        },
      ],
    },
    [MONTHS_KEYS.DICIEMBRE]: {
      cumples: [
        {
          number: 7,
          name: "Papá",
        },
      ],
    },
  },
  [OWNERS.FLOR]: {
  },
  [OWNERS.CASA]: {
    [MONTHS_KEYS.ENERO]: {
      cumples: [
        {
          number: 3,
          name: "Milo",
        },
        {
          number: 11,
          name: "Simón",
        },
        {
          number: 13,
          name: "Flor",
        },
        {
          number: 23,
          name: "Nala",
        },
      ],
    },
    [MONTHS_KEYS.FEBRERO]: {
      cumples: [
        {
          number: 6,
          name: "Abu Vivi",
        },
        {
          number: 7,
          name: "Aniversario - Donatella",
          love: true,
        },
        {
          number: 14,
          name: "Pamela",
        },
      ],
    },
    [MONTHS_KEYS.MARZO]: {
      cumples: [
        {
          number: 7,
          name: "Mauro",
        },
        {
          number: 13,
          name: "Mica",
        },
        {
          number: 15,
          name: "Fabi",
        },
        {
          number: 20,
          name: "Lucía",
        },
        {
          number: 21,
          name: "Fita",
        },
        {
          number: 23,
          name: "Agustín",
        },
        {
          number: 28,
          name: "Facu",
        },
      ],
    },
    [MONTHS_KEYS.ABRIL]: {
      cumples: [
        {
          number: 12,
          name: "Romi",
        },
      ],
    },
    [MONTHS_KEYS.MAYO]: {
      cumples: [
        {
          number: 2,
          name: "Cuba",
        },
        {
          number: 12,
          name: "Daiana",
        },
        {
          number: 13,
          name: "Karina",
        },
        {
          number: 23,
          name: "Silvia de Hugo - Rochi",
        },
      ],
    },
    [MONTHS_KEYS.JUNIO]: {
      cumples: [
        {
          number: 8,
          name: "Mamá Gri",
        },
        {
          number: 14,
          name: "Rocco",
        },
        {
          number: 17,
          name: "Sofi F.",
        },
        {
          number: 28,
          name: "Natu",
        },
      ],
    },
    [MONTHS_KEYS.JULIO]: {
      cumples: [
        {
          number: 3,
          name: "Silvia M.",
        },
        {
          number: 10,
          name: "Juan",
        },
        {
          number: 16,
          name: "Papá Leo",
        },
        {
          number: 18,
          name: "Pipe",
        },
        {
          number: 26,
          name: "Cami (Natu)",
        },
      ],
    },
    [MONTHS_KEYS.SEPTIEMBRE]: {
      cumples: [
        {
          number: 1,
          name: "Dante",
        },
        {
          number: 3,
          name: "Mamá Luci",
        },
        {
          number: 6,
          name: "Noah",
        },
        {
          number: 13,
          name: "Nahuel",
        },
        {
          number: 14,
          name: "Lautaro - Patri",
        },
        {
          number: 20,
          name: "Juli",
        },
        {
          number: 26,
          name: "Carla",
        },
      ],
    },
    [MONTHS_KEYS.NOVIEMBRE]: {
      cumples: [
        {
          number: 3,
          name: "Armando",
        },
        {
          number: 19,
          name: "Tina",
        },
        {
          number: 26,
          name: "Mel",
        },
        {
          number: 29,
          name: "Mariana",
        },
      ],
    },
    [MONTHS_KEYS.DICIEMBRE]: {
      cumples: [
        {
          number: 7,
          name: "Papá Gabi",
        },
        {
          number: 23,
          name: "Tío",
        },
        {
          number: 26,
          name: "Eli",
        },
      ],
    },
  },
};
