const ahora = new Date();
const ensayo = ahora >= new Date('2022-09-29 18:45:00 GMT-03:00') && ahora <= new Date('2022-09-29 19:00:00 GMT-03:00');
const martes = ahora >= new Date('2022-10-04 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-04 19:30:00 GMT-03:00');
const miercoles = ahora >= new Date('2022-10-05 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-05 19:30:00 GMT-03:00');
const jueves = ahora >= new Date('2022-10-06 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-06 19:30:00 GMT-03:00');
const viernes = ahora >= new Date('2022-10-07 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-07 19:30:00 GMT-03:00');
export const enVivo = ensayo || martes || miercoles || jueves || viernes;