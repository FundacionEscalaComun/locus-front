export function getEnVivo() {
  const ahora = new Date();
  const martes = ahora >= new Date('2022-10-04 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-04 19:30:00 GMT-03:00');
  const miercoles = ahora >= new Date('2022-10-05 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-05 19:30:00 GMT-03:00');
  const jueves = ahora >= new Date('2022-10-06 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-06 19:30:00 GMT-03:00');
  const viernes = ahora >= new Date('2022-10-07 18:30:00 GMT-03:00') && ahora <= new Date('2022-10-07 19:30:00 GMT-03:00');
  return martes || miercoles || jueves || viernes;
}

export function getEnVivoUrl() {
  const martes = 'https://www.youtube.com/watch?v=bOsEkXVhqkI';
  const miercoles = 'https://www.youtube.com/watch?v=hNEHkS0dadc';
  const jueves = 'https://www.youtube.com/watch?v=WVA4MDo_y6g';
  const viernes = 'https://www.youtube.com/watch?v=yzaf9JIi5NE';
  const ahora = new Date();
  switch (ahora.getDay()) {
    case 2:
      return martes;
      break;
    case 3:
      return miercoles;
      break;
    case 4:
      return jueves;
      break;
    case 5:
      return viernes;
      break;
    default:
      return '';
  }
}