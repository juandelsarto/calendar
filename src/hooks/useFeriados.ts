import { useEffect, useState } from 'react';
import { MONTHS } from '../constants/Enums';

export enum FeriadoType {
  INAMOVIBLE = 'inamovible',
  TRASLADABLE = 'trasladable',
  PUENTE = 'puente',
}

export interface IFeriado {
  dia: number;
  tipo: FeriadoType;
}

interface FeriadoAPI {
  fecha: string;
  tipo: string;
  nombre: string;
}

export type FeriadosByMonth = Partial<Record<MONTHS, IFeriado[]>>;

const MONTH_BY_NUMBER: MONTHS[] = [
  MONTHS.JANUARY,
  MONTHS.FEBRUARY,
  MONTHS.MARCH,
  MONTHS.APRIL,
  MONTHS.MAY,
  MONTHS.JUNE,
  MONTHS.JULY,
  MONTHS.AUGUST,
  MONTHS.SEPTEMBER,
  MONTHS.OCTOBER,
  MONTHS.NOVEMBER,
  MONTHS.DECEMBER,
];

const parseTipo = (tipo: string): FeriadoType => {
  switch (tipo) {
    case 'inamovible':
      return FeriadoType.INAMOVIBLE;
    case 'trasladable':
      return FeriadoType.TRASLADABLE;
    case 'puente':
      return FeriadoType.PUENTE;
    default:
      return FeriadoType.INAMOVIBLE;
  }
};

const API_BASE = 'https://api.argentinadatos.com/v1/feriados';

const cache = new Map<number, Promise<FeriadosByMonth>>();

const fetchFeriados = (year: number, signal: AbortSignal) => {
  const cached = cache.get(year);
  if (cached) return cached;

  const promise = fetch(`${API_BASE}/${year}`, { signal })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json() as Promise<FeriadoAPI[]>;
    })
    .then((data) => {
      const byMonth: FeriadosByMonth = {};
      data.forEach(({ fecha, tipo }) => {
        const [, mesStr, diaStr] = fecha.split('-');
        const mes = parseInt(mesStr, 10);
        const dia = parseInt(diaStr, 10);
        const key = MONTH_BY_NUMBER[mes - 1];
        if (!key) return;
        if (!byMonth[key]) byMonth[key] = [];
        byMonth[key]!.push({ dia, tipo: parseTipo(tipo) });
      });
      return byMonth;
    })
    .catch((err: Error) => {
      cache.delete(year);
      throw err;
    });

  cache.set(year, promise);
  return promise;
};

export function useFeriados(year: number): {
  feriadosByMonth: FeriadosByMonth;
  loading: boolean;
  error: string | null;
} {
  const [feriadosByMonth, setFeriadosByMonth] = useState<FeriadosByMonth>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchFeriados(year, controller.signal)
      .then((byMonth) => {
        if (controller.signal.aborted) return;
        setFeriadosByMonth(byMonth);
      })
      .catch((err: Error) => {
        if (controller.signal.aborted) return;
        setError(err.message);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setLoading(false);
      });

    return () => controller.abort();
  }, [year]);

  return { feriadosByMonth, loading, error };
}
