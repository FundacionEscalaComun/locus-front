export function getEnVivo() {
  const ahora = new Date();
  const martes = ahora >= new Date('2022-10-04 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-04 19:30:00 GMT-03:00');
  const miercoles = ahora >= new Date('2022-10-05 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-05 19:30:00 GMT-03:00');
  const jueves = ahora >= new Date('2022-10-06 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-06 19:30:00 GMT-03:00');
  const viernes = ahora >= new Date('2022-10-07 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-07 19:30:00 GMT-03:00');
  return martes || miercoles || jueves || viernes;
};