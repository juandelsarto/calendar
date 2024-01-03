# Calendar

## Features:

- Habilitar: feriados, cumples, dias especiales
- Elegir dia de inicio: lunes / domingo
- Elegir idioma: inglés / español
- Elegir colores
- Elegir bg para cumpleaños (Mostrar bg love para Aniversario y Fecha de casamiento)
- Elegir listado de fechas: Mamá, Papá, Fiamma, Familia, Casa, Flor
- Elegir tamano de hoja: A4, A5, Oficio, Carta
- Vista previa
- Guardar PDF

### Color mapping:

| Color     | used in                   |
| --------- | ------------------------- |
| Primary   | fontColor, bgFeriado      |
| Secondary | border, fontBirthdayColor |
| Third     | bgCumple                  |

### Pending tasks:

- [x] Renderear drawer con las customizaciones
- [x] Funcionalidad para renderear vista previa de impresion
- [x] Tomar las customizaciones para renderear la vista previa via useContext
- [ ] Aplicación de configs restantes del customizer
  - [x] Agregar el background en los cumples (setear un default)
  - [x] Agregar los colores elegidos
  - [ ] Editar tamaño de la hoja de impresión
- [ ] Editar cumpleaños y fechas especiales
- [x] Guardar la config en el localStorage o Cookies
- [x] Ajustar UI
  - [x] revisar Customizer
  - [ ] agregar Drawer para edición de fechas
  - [x] backgrounds y spacing del CalendarPreview


### Releases:

#### v1.0:
- Opciones de fechas preseteadas
  - Feriados
  - Cumpleaños
  - Fechas especiales (para mamá)
- Otras opciones preseteadas:
  - Backgrounds
  - Tamaños (A4, Agenda, Medium)
  - Idiomas (Inglés / Español)
  - Dia de inicio (Domingo / Lunes)
- Eleccion de 3 tipos de colores que se utilizan en el calendario
- Guardado de customizaciones en LocalStorage para no perder la edición actual
- Export de PDF para imprimir

#### v1.#:
(Deuda tecnica)
- Corrección de typado
- Reordenamiento de files

#### v1.2:
- Guardado de opciones preseteadas en el LocalStorage en una key adicional que corresponda al owner para mantener las configuraciones de cada owner.

#### v1.3:
- Previsualización de fechas y edición de la misma

#### v2.0:
- Crear un calendario desde un Easy Onboarding:
  - Elegir un preset de fechas desde un owner
  - Elegir las opciones basicas para ese owner
  - Elegir theming de 3 colores
  - Editar colores para cada elemento (borders, titles, feriados, cumples, especialDates) y previsualizar