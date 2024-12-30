import { LANGUAGES, MONTHS, OWNERS } from './Enums';

export const YEAR: number = 2025;

export interface IEvent {
  number: number | number[];
  name: string;
  love?: boolean;
}

export interface IMonthData {
  cumples?: IEvent[];
  dates?: IEvent[];
}

export interface ICalendar {
  [owner: string]: {
    [key in MONTHS]?: IMonthData;
  };
}

interface MonthName {
  [name: string]: string;
}

export interface IMonth {
  key: MONTHS;
  name: MonthName;
  feriados: number[];
}

export interface IParsedMonth extends IMonth {
  firstDay: number;
  days: number;
  prevMonth: number;
  dates?: IEvent[];
}

export const MONTHS_LIST: IMonth[] = [
  {
    key: MONTHS.JANUARY,
    name: {
      [LANGUAGES.SPANISH]: 'Enero',
      [LANGUAGES.ENGLISH]: 'January',
    },
    feriados: [1],
  },
  {
    key: MONTHS.FEBRUARY,
    name: { [LANGUAGES.SPANISH]: 'Febrero', [LANGUAGES.ENGLISH]: 'February' },
    feriados: [],
  },
  {
    key: MONTHS.MARCH,
    name: {
      [LANGUAGES.SPANISH]: 'Marzo',
      [LANGUAGES.ENGLISH]: 'March',
    },
    feriados: [3, 4, 24],
  },
  {
    key: MONTHS.APRIL,
    name: { [LANGUAGES.SPANISH]: 'Abril', [LANGUAGES.ENGLISH]: 'April' },
    feriados: [2, 18],
  },
  {
    key: MONTHS.MAY,
    name: { [LANGUAGES.SPANISH]: 'Mayo', [LANGUAGES.ENGLISH]: 'May' },
    feriados: [1, 2, 25],
  },
  {
    key: MONTHS.JUNE,
    name: { [LANGUAGES.SPANISH]: 'Junio', [LANGUAGES.ENGLISH]: 'June' },
    feriados: [16, 20],
  },
  {
    key: MONTHS.JULY,
    name: { [LANGUAGES.SPANISH]: 'Julio', [LANGUAGES.ENGLISH]: 'July' },
    feriados: [9],
  },
  {
    key: MONTHS.AUGUST,
    name: { [LANGUAGES.SPANISH]: 'Agosto', [LANGUAGES.ENGLISH]: 'August' },
    feriados: [15, 17],
  },
  {
    key: MONTHS.SEPTEMBER,
    name: {
      [LANGUAGES.SPANISH]: 'Septiembre',
      [LANGUAGES.ENGLISH]: 'September',
    },
    feriados: [],
  },
  {
    key: MONTHS.OCTOBER,
    name: { [LANGUAGES.SPANISH]: 'Octubre', [LANGUAGES.ENGLISH]: 'October' },
    feriados: [12],
  },
  {
    key: MONTHS.NOVEMBER,
    name: { [LANGUAGES.SPANISH]: 'Noviembre', [LANGUAGES.ENGLISH]: 'November' },
    feriados: [21, 24],
  },
  {
    key: MONTHS.DECEMBER,
    name: { [LANGUAGES.SPANISH]: 'Diciembre', [LANGUAGES.ENGLISH]: 'December' },
    feriados: [8, 24, 25, 31],
  },
];

export const CALENDAR: ICalendar = {
  [OWNERS.FAMILIA]: {
    [MONTHS.JANUARY]: {
      cumples: [
        {
          number: 11,
          name: 'Simón',
        },
        {
          number: 13,
          name: 'Flor',
        },
        {
          number: 23,
          name: 'Nala',
        },
      ],
    },
    [MONTHS.FEBRUARY]: {
      cumples: [
        {
          number: 7,
          name: 'Donatella',
        },
      ],
    },
    [MONTHS.MARCH]: {
      cumples: [
        {
          number: 21,
          name: 'Fita',
        },
      ],
    },
    [MONTHS.JUNE]: {
      cumples: [
        {
          number: 8,
          name: 'Mamá',
        },
        { number: 27, name: '33º aniversrio - Gri y Gabi', love: true },
      ],
    },
    [MONTHS.JULY]: {
      cumples: [
        {
          number: 10,
          name: 'Juan',
        },
      ],
    },
    [MONTHS.SEPTEMBER]: {
      cumples: [
        {
          number: 6,
          name: 'Noah',
        },
      ],
    },
    [MONTHS.NOVEMBER]: {
      cumples: [{ number: 2, name: '1º aniversrio - Flor y Juan', love: true }],
    },
    [MONTHS.DECEMBER]: {
      cumples: [
        {
          number: 7,
          name: 'Papá',
        },
      ],
    },
  },
  [OWNERS.GRISEL]: {
    [MONTHS.JANUARY]: {
      cumples: [
        {
          number: 11,
          name: 'Simón',
        },
        {
          number: 13,
          name: 'Flor',
        },
        {
          number: 23,
          name: 'Nala',
        },
      ],
    },
    [MONTHS.FEBRUARY]: {
      cumples: [
        {
          number: 7,
          name: 'Donatella',
        },
      ],
      dates: [
        {
          number: 11,
          name: 'Retorno a la actividad',
        },
      ],
    },
    [MONTHS.MARCH]: {
      cumples: [
        {
          number: 21,
          name: 'Fita',
        },
      ],
      dates: [
        {
          number: 5,
          name: 'Inicio de clases',
        },
      ],
    },
    [MONTHS.APRIL]: {
      dates: [
        {
          number: 2,
          name: 'Dia Internacional del Autismo',
        },
        {
          number: [7, 11],
          name: 'Semana de la Educación Física',
        },
      ],
    },
    [MONTHS.MAY]: {
      dates: [
        {
          number: 27,
          name: 'Día de la Prevención de la Violencia en el Noviazgo',
        },
        {
          number: 28,
          name: 'Día de los jardines de infantes y de la maestra jardinera',
        },
        {
          number: 30,
          name: 'Día Internacional del desaparecido',
        },
        {
          number: 31,
          name: 'Fin del primer trimestre',
        },
      ],
    },
    [MONTHS.JUNE]: {
      cumples: [
        {
          number: 8,
          name: 'Mi cumple!',
        },
      ],
    },
    [MONTHS.JULY]: {
      cumples: [
        {
          number: 10,
          name: 'Juan',
        },
      ],
      dates: [
        {
          number: 2,
          name: 'Día del asistente social',
        },
        {
          number: [21, 31],
          name: 'Receso escolar de invierno',
        },
      ],
    },
    [MONTHS.AUGUST]: {
      dates: [
        {
          number: 1,
          name: 'Receso escolar de invierno',
        },
        {
          number: 2,
          name: 'Día la escuela pública digna',
        },
        {
          number: 17,
          name: 'Día del niño',
        },
        {
          number: 23,
          name: 'Día del auxiliar',
        },
        {
          number: 31,
          name: 'Fin del segundo trimestre',
        },
      ],
    },
    [MONTHS.SEPTEMBER]: {
      cumples: [
        {
          number: 6,
          name: 'Noah',
        },
      ],
      dates: [
        {
          number: 2,
          name: 'Día del profe de inglés',
        },
        {
          number: 4,
          name: 'Día del secretario/prosecretario',
        },
        {
          number: 11,
          name: 'Día del maestro',
        },
        {
          number: 13,
          name: 'Día del bibliotecario/a',
        },
        {
          number: 17,
          name: 'Día del profesor y de la psicopedagoga',
        },
        {
          number: 19,
          name: 'Día del preceptor',
        },
        {
          number: 20,
          name: 'Día del EOE',
        },
        {
          number: [22, 30],
          name: 'Semana de las Artes',
        },
        {
          number: 28,
          name: 'Día del director/vicedirector',
        },
      ],
    },
    [MONTHS.OCTOBER]: {
      dates: [
        {
          number: [1, 3],
          name: 'Semana de las Artes',
        },
        {
          number: 8,
          name: 'Día del Profesor de Educación Física',
        },
        {
          number: 19,
          name: 'Día de la familia y de las cooperadoras escolares',
        },
      ],
    },
    [MONTHS.NOVEMBER]: {
      dates: [
        {
          number: 11,
          name: 'Día del Escultor y las Artes Plásticas',
        },
        {
          number: 22,
          name: 'Día de la música',
        },
        {
          number: 30,
          name: 'Fin del tercer trimestre',
        },
      ],
    },
    [MONTHS.DECEMBER]: {
      cumples: [
        {
          number: 7,
          name: 'Gaby',
        },
      ],
      dates: [
        {
          number: 22,
          name: 'Cierre de ciclo',
        },
      ],
    },
  },
  [OWNERS.FITA]: {
    [MONTHS.JANUARY]: {
      cumples: [
        {
          number: 11,
          name: 'Simón',
        },
        {
          number: 13,
          name: 'Flor',
        },
        {
          number: 23,
          name: 'Nala',
        },
      ],
    },
    [MONTHS.FEBRUARY]: {
      cumples: [
        {
          number: 7,
          name: 'Donatella',
        },
      ],
    },
    [MONTHS.MARCH]: {
      cumples: [
        {
          number: 21,
          name: 'My b-day!',
        },
      ],
    },
    [MONTHS.JUNE]: {
      cumples: [
        {
          number: 8,
          name: 'Mamá',
        },
      ],
    },
    [MONTHS.JULY]: {
      cumples: [
        {
          number: 10,
          name: 'Juan',
        },
      ],
    },
    [MONTHS.SEPTEMBER]: {
      cumples: [
        {
          number: 6,
          name: 'Noah',
        },
      ],
    },
    [MONTHS.DECEMBER]: {
      cumples: [
        {
          number: 7,
          name: 'Papá',
        },
      ],
    },
  },
  [OWNERS.FLOR]: {},
  [OWNERS.CASA]: {
    [MONTHS.JANUARY]: {
      cumples: [
        {
          number: 3,
          name: 'Milo',
        },
        {
          number: 11,
          name: 'Simón',
        },
        {
          number: 13,
          name: 'Flor',
        },
        {
          number: 23,
          name: 'Nala',
        },
      ],
    },
    [MONTHS.FEBRUARY]: {
      cumples: [
        {
          number: 6,
          name: 'Abu Vivi',
        },
        {
          number: 7,
          name: 'Donatella',
        },
        {
          number: 14,
          name: 'Pamela',
        },
      ],
    },
    [MONTHS.MARCH]: {
      cumples: [
        {
          number: 7,
          name: 'Mauro',
        },
        {
          number: 13,
          name: 'Mica',
        },
        {
          number: 15,
          name: 'Fabi',
        },
        {
          number: 20,
          name: 'Lucía',
        },
        {
          number: 21,
          name: 'Fita',
        },
        {
          number: 23,
          name: 'Agustín',
        },
        {
          number: 28,
          name: 'Facu',
        },
      ],
    },
    [MONTHS.APRIL]: {
      cumples: [
        {
          number: 12,
          name: 'Romi',
        },
      ],
    },
    [MONTHS.MAY]: {
      cumples: [
        {
          number: 2,
          name: 'Cuba',
        },
        {
          number: 12,
          name: 'Daiana',
        },
        {
          number: 13,
          name: 'Karina',
        },
        {
          number: 23,
          name: 'Silvia (Hugo) - Rochi',
        },
      ],
    },
    [MONTHS.JUNE]: {
      cumples: [
        {
          number: 8,
          name: 'Mamá Gri',
        },
        {
          number: 14,
          name: 'Rocco',
        },
        {
          number: 17,
          name: 'Sofi F.',
        },
        {
          number: 28,
          name: 'Natu',
        },
      ],
    },
    [MONTHS.JULY]: {
      cumples: [
        {
          number: 3,
          name: 'Silvia M.',
        },
        {
          number: 10,
          name: 'Juan',
        },
        {
          number: 16,
          name: 'Papá Leo',
        },
        {
          number: 18,
          name: 'Pipe',
        },
        {
          number: 26,
          name: 'Cami (Natu)',
        },
      ],
    },
    [MONTHS.SEPTEMBER]: {
      cumples: [
        {
          number: 1,
          name: 'Dante',
        },
        {
          number: 3,
          name: 'Mamá Luci',
        },
        {
          number: 6,
          name: 'Noah',
        },
        {
          number: 13,
          name: 'Nahuel',
        },
        {
          number: 14,
          name: 'Lautaro - Patri',
        },
        {
          number: 20,
          name: 'Juli',
        },
        {
          number: 26,
          name: 'Carla',
        },
      ],
    },
    [MONTHS.NOVEMBER]: {
      cumples: [
        { number: 1, name: 'Aniversario', love: true },
        { number: 2, name: 'Aniversario - Armando', love: true },
        {
          number: 9,
          name: 'Santino',
        },
        {
          number: 19,
          name: 'Tina',
        },
        {
          number: 26,
          name: 'Mel',
        },
        {
          number: 29,
          name: 'Mariana',
        },
      ],
    },
    [MONTHS.DECEMBER]: {
      cumples: [
        {
          number: 7,
          name: 'Papá Gabi',
        },
        {
          number: 19,
          name: 'Agus',
        },
        {
          number: 23,
          name: 'Tío Martín',
        },
      ],
    },
  },
  [OWNERS.VIVI]: {
    [MONTHS.JANUARY]: {
      cumples: [
        {
          number: 13,
          name: 'Flor',
        },
      ],
    },
    [MONTHS.FEBRUARY]: {
      cumples: [
        {
          number: 6,
          name: 'Mi cumple!',
        },
      ],
    },
    [MONTHS.MARCH]: {
      cumples: [
        {
          number: 21,
          name: 'Fabio',
        },
      ],
    },
    [MONTHS.JULY]: {
      cumples: [
        {
          number: 10,
          name: 'Juan',
        },
        {
          number: 16,
          name: 'Leo',
        },
      ],
    },
    [MONTHS.SEPTEMBER]: {
      cumples: [
        {
          number: 3,
          name: 'Lucia',
        },
        {
          number: 20,
          name: 'Juli',
        },
      ],
    },
    [MONTHS.NOVEMBER]: {
      cumples: [{ number: 2, name: 'Se casan Flor y Juan!!!', love: true }],
    },
  },
};
