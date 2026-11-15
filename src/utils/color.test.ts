import { describe, expect, it } from 'vitest';

import { getContrastedFontColor } from './color';

describe('getContrastedFontColor', () => {
  it('returns dark for light backgrounds', () => {
    expect(getContrastedFontColor('#ffffff')).toBe('#1b1b1b');
    expect(getContrastedFontColor('#f0f0f0')).toBe('#1b1b1b');
    expect(getContrastedFontColor('#ffff00')).toBe('#1b1b1b');
  });

  it('returns white for dark backgrounds', () => {
    expect(getContrastedFontColor('#000000')).toBe('#ffffff');
    expect(getContrastedFontColor('#222222')).toBe('#ffffff');
    expect(getContrastedFontColor('#0000ff')).toBe('#ffffff');
  });

  it('handles hex without hash prefix', () => {
    expect(getContrastedFontColor('ffffff')).toBe('#1b1b1b');
    expect(getContrastedFontColor('000000')).toBe('#ffffff');
  });

  it('returns white fallback for invalid input', () => {
    expect(getContrastedFontColor('')).toBe('#ffffff');
    expect(getContrastedFontColor('#')).toBe('#ffffff');
  });
});
