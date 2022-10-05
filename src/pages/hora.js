export default function hora() {
  const ahora = new Date();

  const martes = ahora.getTime() >= (new Date('2022-10-04 19:30:00 GMT-03:00')).getTime();
  const miercoles = ahora.getTime() >= (new Date('2022-10-05 10:00:00 GMT-03:00')).getTime();
  const jueves = ahora.getTime() >= (new Date('2022-10-06 10:00:00 GMT-03:00')).getTime();

  return (
    <div>
      <h1>Fecha y hora</h1>
      <p>Ahora: { ahora.toString() }</p>
      <p>Martes: { martes.toString() }</p>
      <p>Miércoles: { miercoles.toString() }</p>
      <p>Jueves: { jueves.toString() }</p>
      <p>{ahora.getTime() + '>=' + (new Date('2022-10-04 19:30:00 GMT-03:00')).getTime()}</p>
      <p>{ahora.getTime() + '>=' + (new Date('2022-10-04T19:30:00.000-03:00')).getTime()}</p>
      <p>{ahora.getTime() + '>=' + (new Date('04 Oct 2022 19:30:00 GMT-0300')).getTime()}</p>
    </div>
  )
}
