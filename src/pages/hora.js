export default function hora() {
  const ahora = new Date();

  const martes = ahora >= new Date('2022-10-04 19:30:00 GMT-03:00');
  const miercoles = ahora >= new Date('2022-10-05 10:00:00 GMT-03:00');
  const jueves = ahora >= new Date('2022-10-06 10:00:00 GMT-03:00');

  return (
    <div>
      <h1>Fecha y hora</h1>
      <p>Ahora: { ahora.toString() }</p>
      <p>Martes: { martes.toString() }</p>
      <p>Miércoles: { miercoles.toString() }</p>
    </div>
  )
}
