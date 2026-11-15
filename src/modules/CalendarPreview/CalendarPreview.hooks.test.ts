import { describe, expect, it } from 'vitest';

import { FeriadoType } from '@/hooks/useFeriados';

import { getDayList, getParsedSpecialDates } from './CalendarPreview.hooks';

describe('getParsedSpecialDates', () => {
  it('maps single-day entries by day number', () => {
    const result = getParsedSpecialDates([{ number: 5 }, { number: 20 }]);
    expect(result[5]).toBe(true);
    expect(result[20]).toBe(true);
    expect(result[6]).toBeUndefined();
  });

  it('expands range entries', () => {
    const result = getParsedSpecialDates([{ number: [3, 7] }]);
    for (let i = 3; i <= 7; i++) expect(result[i]).toBe(true);
    expect(result[2]).toBeUndefined();
    expect(result[8]).toBeUndefined();
  });

  it('handles empty input', () => {
    expect(getParsedSpecialDates([])).toEqual([]);
    expect(getParsedSpecialDates()).toEqual([]);
  });
});

describe('getDayList', () => {
  it('generates 35 positions by default when month fits', () => {
    const list = getDayList({ days: 30, firstDay: 1, defaultInit: false });
    expect(list.length).toBe(35);
  });

  it('marks positions before firstDay as disabled with prev-month numbers', () => {
    const list = getDayList({
      days: 30,
      firstDay: 3,
      prevMonth: 28,
      defaultInit: true,
    });
    expect(list[0].disabled).toBe(true);
    expect(list[1].disabled).toBe(true);
    expect(list[2].disabled).toBe(true);
    expect(list[3].disabled).toBeUndefined();
    expect(list[3].number).toBe(1);
  });

  it('attaches cumple name to matching day', () => {
    const list = getDayList({
      days: 30,
      firstDay: 0,
      cumples: [{ number: 15, name: 'Juan' }],
      defaultInit: true,
    });
    const day15 = list.find((d) => d.number === 15 && !d.disabled);
    expect(day15?.cumple).toBe('Juan');
  });

  it('flags love cumples separately', () => {
    const list = getDayList({
      days: 30,
      firstDay: 0,
      cumples: [{ number: 10, name: 'Aniversario', love: true }],
      defaultInit: true,
    });
    const day10 = list.find((d) => d.number === 10 && !d.disabled);
    expect(day10?.love).toBe('Aniversario');
  });

  it('attaches feriado object to matching day', () => {
    const feriado = {
      dia: 9,
      tipo: FeriadoType.INAMOVIBLE,
      nombre: 'Día de la Independencia',
    };
    const list = getDayList({
      days: 31,
      firstDay: 0,
      feriados: [feriado],
      defaultInit: true,
    });
    const day9 = list.find((d) => d.number === 9 && !d.disabled);
    expect(day9?.feriado).toEqual(feriado);
  });

  it('marks overflow days beyond grid limit', () => {
    const list = getDayList({ days: 31, firstDay: 0, defaultInit: false });
    const overflowDays = list.filter((d) => d.overflow);
    expect(overflowDays.length).toBeGreaterThan(0);
  });
});
