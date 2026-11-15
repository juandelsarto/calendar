import { useEffect, useState } from 'react';

import { MONTHS_LIST } from '@/constants/Data';
import { MONTHS } from '@/constants/Enums';

export enum FeriadoType {
  INAMOVIBLE = 'inamovible',
  TRASLADABLE = 'trasladable',
  PUENTE = 'puente',
}

export interface IFeriado {
  dia: number;
  tipo: FeriadoType;
  nombre: string;
}

interface FeriadoAPI {
  fecha: string;
  tipo: string;
  nombre: string;
}

export type FeriadosByMonth = Partial<Record<MONTHS, IFeriado[]>>;

const VALID_TIPOS = Object.values(FeriadoType) as string[];

const parseTipo = (tipo: string): FeriadoType =>
  VALID_TIPOS.includes(tipo) ? (tipo as FeriadoType) : FeriadoType.INAMOVIBLE;

const API_BASE = 'https://api.argentinadatos.com/v1/feriados';

const cache = new Map<number, Promise<FeriadosByMonth>>();

const fetchFeriados = (year: number): Promise<FeriadosByMonth> => {
  const cached = cache.get(year);
  if (cached) return cached;

  const promise = fetch(`${API_BASE}/${year}`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json() as Promise<FeriadoAPI[]>;
    })
    .then((data) => {
      const byMonth: FeriadosByMonth = {};
      data.forEach(({ fecha, tipo, nombre }) => {
        const [, mesStr, diaStr] = fecha.split('-');
        const mes = parseInt(mesStr, 10);
        const dia = parseInt(diaStr, 10);
        const key = MONTHS_LIST[mes - 1]?.key;
        if (!key) return;
        if (!byMonth[key]) byMonth[key] = [];
        byMonth[key]!.push({ dia, tipo: parseTipo(tipo), nombre });
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
    let ignore = false;
    setLoading(true);
    setError(null);

    fetchFeriados(year)
      .then((byMonth) => {
        if (ignore) return;
        setFeriadosByMonth(byMonth);
      })
      .catch((err: Error) => {
        if (ignore) return;
        setError(err.message);
      })
      .finally(() => {
        if (ignore) return;
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [year]);

  return { feriadosByMonth, loading, error };
}
