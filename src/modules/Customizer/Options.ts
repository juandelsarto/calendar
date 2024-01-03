import Cumple from "../../assets/bgCumple.png";
import Ballons from "../../assets/bgBallons.png";
import Unicorn from "../../assets/bgUnicorn.png";
import Cats from "../../assets/bgCats.png";
import {
  BACKGROUND,
  DAYS,
  LANGUAGES,
  OWNERS,
  SIZES,
} from "../../constants/Enums";

export const OWNER_OPTIONS = [
  {
    value: OWNERS.GRISEL,
    label: "Grisel",
  },
  {
    value: OWNERS.GABY,
    label: "Gaby",
  },
  {
    value: OWNERS.FITA,
    label: "Fiamma",
  },
  {
    value: OWNERS.FAMILIA,
    label: "Familia",
  },
  {
    value: OWNERS.CASA,
    label: "Casa",
  },
  {
    value: OWNERS.FLOR,
    label: "Flor",
  },
];

export const LANGUAGE_OPTIONS = [
  { value: LANGUAGES.ENGLISH, label: "Inglés" },
  { value: LANGUAGES.SPANISH, label: "Español" },
];

export const STARTING_DAY_OPTIONS = [
  { value: DAYS.SUNDAY, label: "Domingo" },
  { value: DAYS.MONDAY, label: "Lunes" },
];

export const SIZE_OPTIONS = [
  // { value: SIZES.A3, label: "A3" },
  { value: SIZES.A4, label: "A4" },
  // { value: SIZES.A5, label: "A5" },
  // { value: SIZES.OFICIO, label: "Oficio" },
  // { value: SIZES.CARTA, label: "Carta" },
  { value: SIZES.MEDIUM, label: "Medium" },
  { value: SIZES.AGENDA, label: "Agenda" },
];

export const BACKGROUND_OPTIONS = [
  { value: BACKGROUND.CUMPLE, label: "Cumple", img: Cumple },
  { value: BACKGROUND.BALLONS, label: "Globos", img: Ballons },
  { value: BACKGROUND.UNICORN, label: "Unicornio", img: Unicorn },
  { value: BACKGROUND.CATS, label: "Cats", img: Cats },
];
