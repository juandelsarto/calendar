export enum OPTIONS {
  OWNER = 'owner',
  LANGUAGE = 'language',
  STARTING_DAY = 'startingDay',
  SIZE = 'size',
  BACKGROUND = 'background',
  PRIMARY_COLOR = 'primaryColor',
  SECONDARY_COLOR = 'secondaryColor',
  THIRD_COLOR = 'thirdColor',
  ENABLED_FERIADOS = 'enabledFeriados',
  ENABLED_BIRTHDAYS = 'enabledBirthdays',
  ENABLED_ESPECIAL_DAYS = 'enabledEspecialDays',
}

export enum OWNERS {
  FAMILIA = 'familia',
  FITA = 'fita',
  GRISEL = 'grisel',
  GABY = 'gaby',
  FLOR = 'flor',
  CASA = 'casa',
  VIVI = 'vivi'
}

export enum MONTHS {
  JANUARY = 'january',
  FEBRUARY = 'february',
  MARCH = 'march',
  APRIL = 'april',
  MAY = 'may',
  JUNE = 'june',
  JULY = 'july',
  AUGUST = 'august',
  SEPTEMBER = 'september',
  OCTOBER = 'october',
  NOVEMBER = 'november',
  DECEMBER = 'december',
}

export enum DAYS {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export enum LANGUAGES {
  ENGLISH = 'english',
  SPANISH = 'spanish',
}

export enum SIZES {
  A3 = 'a3',
  A4 = 'a4',
  A5 = 'a5',
  OFICIO = 'oficio',
  CARTA = 'carta',
  AGENDA = 'agenda',
  MEDIUM = 'medium',
}

export enum BACKGROUND {
  BALLONS = 'bgBallons.png',
  CUMPLE = 'bgCumple.png',
  UNICORN = 'bgUnicorn.png',
  CATS = 'bgCats.png',
}

export const DAYS_LIST = [
  {
    id: DAYS.MONDAY,
    [LANGUAGES.SPANISH]: 'Lunes',
    [LANGUAGES.ENGLISH]: 'Monday',
  },
  {
    id: DAYS.TUESDAY,
    [LANGUAGES.SPANISH]: 'Martes',
    [LANGUAGES.ENGLISH]: 'Tuesday',
  },
  {
    id: DAYS.WEDNESDAY,
    [LANGUAGES.SPANISH]: 'Miércoles',
    [LANGUAGES.ENGLISH]: 'Wednesday',
  },
  {
    id: DAYS.THURSDAY,
    [LANGUAGES.SPANISH]: 'Jueves',
    [LANGUAGES.ENGLISH]: 'Thursday',
  },
  {
    id: DAYS.FRIDAY,
    [LANGUAGES.SPANISH]: 'Viernes',
    [LANGUAGES.ENGLISH]: 'Friday',
  },
  {
    id: DAYS.SATURDAY,
    [LANGUAGES.SPANISH]: 'Sábado',
    [LANGUAGES.ENGLISH]: 'Saturday',
  },
];

export const MONDAY_FIRST = [
  ...DAYS_LIST,
  {
    id: DAYS.SUNDAY,
    [LANGUAGES.SPANISH]: 'Domingo',
    [LANGUAGES.ENGLISH]: 'Sunday',
  },
];

export const SUNDAY_FIRST = [
  {
    id: DAYS.SUNDAY,
    [LANGUAGES.SPANISH]: 'Domingo',
    [LANGUAGES.ENGLISH]: 'Sunday',
  },
  ...DAYS_LIST,
];
