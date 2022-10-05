export function getEnVivo() {
  const ahora = (new Date()).getTime();
  const martes = ahora >= (new Date('2022-10-04T18:30:00.000-03:00')).getTime() && ahora <= (new Date('2022-10-04T19:30:00.000-03:00')).getTime();
  const miercoles = ahora >= (new Date('2022-10-05T18:30:00.000-03:00')).getTime() && ahora <= (new Date('2022-10-05T19:30:00.000-03:00')).getTime();
  const jueves = ahora >= (new Date('2022-10-06T18:30:00.000-03:00')).getTime() && ahora <= new (Date('2022-10-06T19:30:00.000-03:00')).getTime();
  const viernes = ahora >= (new Date('2022-10-07T18:30:00.000-03:00')).getTime() && ahora <= (new Date('2022-10-07T19:30:00.000-03:00')).getTime();
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