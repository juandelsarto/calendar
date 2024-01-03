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
