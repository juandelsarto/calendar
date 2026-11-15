# Calendario

Generador de calendarios anuales personalizables en React + TypeScript. Diseñado para imprimir en distintos formatos de hoja con fechas propias (cumpleaños, aniversarios, feriados y días especiales) por titular.

## Características

- **Listados por titular** — cada persona (Grisel, Gaby, Fiamma, Familia, Casa, Flor, Abu Vivi) tiene su propio conjunto de fechas y configuración persistida.
- **Feriados argentinos automáticos** — se obtienen en tiempo real desde [argentinadatos.com](https://argentinadatos.com) con caché por año.
- **Año actual + siguiente** — selector para alternar entre ambos.
- **Personalización visual**
  - Tres colores (primario, secundario, terciario) con picker en tiempo real.
  - Contraste de fuente auto-calculado sobre el color base.
  - Fondo elegible para los cumpleaños (confetti, globos, unicornio, gatos).
  - Fondo especial de corazones para aniversarios (`love: true`).
- **Idioma** — español o inglés.
- **Día de inicio** — domingo o lunes.
- **Tamaños de hoja** — A4, Medium, Agenda.
- **Toggles** — mostrar/ocultar feriados, cumpleaños, días especiales independientemente.
- **Vista previa en vivo** — todo cambio se refleja al instante.
- **Exportar a PDF** — impresión directa vía `react-to-print`.
- **Persistencia** — toda la configuración por titular se guarda en `localStorage`.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Chakra UI 2** — componentes de UI (Drawer, Accordion, Button, Select, Checkbox)
- **Sass** — estilos con CSS custom properties para theming dinámico
- **react-colorful** — pickers de color
- **react-to-print** — exportación a PDF
- **classnames** — composición de clases
- **Vitest** — tests unitarios

## Puesta en marcha

```bash
npm install --legacy-peer-deps
npm run dev          # servidor Vite en localhost:5173
```

## Scripts

| Comando                | Descripción                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Dev server con HMR                            |
| `npm run build`        | Build de producción (tsc + vite build)        |
| `npm run preview`      | Preview del build                             |
| `npm test`             | Corre tests una vez                           |
| `npm run test:watch`   | Tests en modo watch                           |
| `npm run check:tsc`    | Typecheck sin emitir                          |
| `npm run check:lint`   | Lint (ESLint, errores)                        |
| `npm run check:prettier` | Verificar formato                           |
| `npm run fix:lint`     | Auto-fix de reglas ESLint (incluye orden de imports) |
| `npm run fix:prettier` | Auto-formato Prettier                         |

## Estructura

```
src/
├── App.tsx
├── main.tsx
├── assets/              # Imágenes de fondo (cumples, hearts, etc)
├── components/          # Componentes reutilizables
│   ├── Layout/
│   └── RadioCard/
├── constants/
│   ├── Data.ts          # CALENDAR por owner, MONTHS_LIST, helpers de año
│   ├── Enums.ts         # OPTIONS, OWNERS, DAYS, MONTHS, LANGUAGES, SIZES
│   ├── Translations.ts  # Strings traducidos
│   └── index.ts
├── context/
│   └── useCalendar.tsx  # Provider dividido: CalendarContext + CalendarUIContext
├── hooks/
│   └── useFeriados.ts   # Fetch + caché de feriados argentinos
├── modules/
│   ├── CalendarPreview/ # Grid del calendario, Day, Month
│   ├── Customizer/      # Drawer con todas las opciones
│   ├── Header/
│   └── Selector/        # RadioGroup wrapper
├── styles/
│   ├── main.scss        # Estilos del calendario (consume CSS vars)
│   └── _variables.scss
└── utils/
    └── color.ts         # getContrastedFontColor
```

Alias `@/*` apunta a `src/*` (configurado en `tsconfig.json` y `vite.config.ts`).

## Agregar un nuevo titular

1. Agregar el enum en `src/constants/Enums.ts`:
   ```ts
   export enum OWNERS { ..., NUEVO = 'nuevo' }
   ```
2. Agregar la entrada en `src/constants/Data.ts`:
   ```ts
   [OWNERS.NUEVO]: mergeOwnerData({
     [MONTHS.MARCH]: { cumples: [{ number: 15, name: 'X' }] },
   }),
   ```
   El helper `mergeOwnerData` combina los cumpleaños compartidos (`SHARED_CUMPLES`) con los overrides.
3. Agregar la opción en `src/modules/Customizer/Options.ts`:
   ```ts
   { value: OWNERS.NUEVO, label: 'Nombre' }
   ```

## Theming

El `.calendar` expone CSS variables inline:

- `--primary-color`, `--secondary-color`, `--third-color`
- `--contrast-primary`, `--contrast-secondary` (texto legible sobre el color base)
- `--cumple-bg` (url del fondo de cumpleaños seleccionado)

El SCSS las consume, evitando estilos inline por día. Cambiar colores no re-renderiza componentes, solo re-pinta.

### Mapeo de colores

| Color     | Uso                                                   |
| --------- | ----------------------------------------------------- |
| Primary   | Bordes del grid, fondo de días especiales             |
| Secondary | Títulos, día de la semana, fondo de feriados          |
| Third     | Fondo de cumpleaños                                   |

## Persistencia

Cada cambio se guarda en `localStorage` bajo la clave `calendarSettings` con forma:

```json
{
  "familia": { "primaryColor": "...", "year": 2026, ... },
  "grisel":  { ... }
}
```

Al cambiar de titular se carga su configuración si existe; si no, se usan los defaults. Las claves desconocidas se filtran al leer (defensivo contra cambios de shape).

## CI

GitHub Actions corre en cada push y PR a `main`: typecheck, lint, prettier, tests, build. Ver `.github/workflows/ci.yml`.

## Changelog técnico

### v1.3 — Refactor estructural (actual)

- Context split en `CalendarContext` (data) + `CalendarUIContext` (drawer/printer) para reducir re-renders.
- Hook `useCalendar()` + `useCalendarUI()`.
- CSS variables para theming dinámico — eliminado `getStyles` por día (~420 llamadas/render → 0).
- `getContrastedFontColor` memoizado en el provider.
- `CALENDAR` normalizado con helper `mergeOwnerData` + `SHARED_CUMPLES` (−63% en `Data.ts`).
- Tests con Vitest (13 tests, `getDayList`, `getParsedSpecialDates`, `getContrastedFontColor`).
- Alias `@/*` consistente en todos los imports.
- Workflow CI.
- Validación defensiva de `localStorage` (shape + try/catch).

### v1.2

- Guardado de configuración por titular en `localStorage`.

### v1.1

- Feriados vía API en lugar de constantes.
- Selector de año (actual + siguiente).
- Nombre del feriado visible en el día.

### v1.0

- Vista previa live, exportación a PDF.
- 3 colores + fondos de cumpleaños.
- Toggles de feriados / cumpleaños / días especiales.
- Idioma, día de inicio, tamaño de hoja.

## Roadmap

- Editor de fechas desde la UI.
- Onboarding: preset de theming + fechas en pocos pasos.
- Code-split del Customizer (lazy load).
- Agregar feriados de más países.
