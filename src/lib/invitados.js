const ahora = (new Date()).getTime();

const martes = ahora >= (new Date('2022-10-04T19:30:00.000-03:00')).getTime();
const miercoles = ahora >= (new Date('2022-10-05T10:00:00.000-03:00')).getTime();
const jueves = ahora >= (new Date('2022-10-06T10:00:00.000-03:00')).getTime();
const viernes = ahora >= (new Date('2022-10-07T10:00:00.000-03:00')).getTime();
const sabado = ahora >= (new Date('2022-10-08T10:00:00.000-03:00')).getTime();

export const slides = [
  {
    name: 'Entrevista a los jóvenes en el Workshop LOCUS',
    slug: 'entrevista-a-los-jovenes-en-el-workshop-locus',
    country: 'CHILE',
    desc: '',
    imgd: '/img/fotos/congreso/5-invitados-especiales-banner-1.jpg',
    imgm: '/img/fotos/congreso/invitados-especiales-7.png',
    youtube: 'B_8vhmn9bCc',
    published: martes,
    new: martes && !miercoles,
  },
  {
    name: 'Marta Román',
    slug: 'marta-román',
    country: 'ESPAÑA',
    desc: 'Marta Román es geógrafa de la infancia. Su trabajo va dirigido a que niñas y niños puedan recuperar las calles y plazas donde jugar, encontrarse con sus iguales, formar parte de la sociedad y crecer con autonomía. Es socia consultora de Gea21 y ha escrito varios libros sobre esta temática, entre los que destaca: "¡Hagan sitio, por favor! La reintroducción de la infancia en la ciudad"',
    imgd: '/img/fotos/congreso/5-invitados-especiales-banner-2.jpg',
    imgm: '/img/fotos/congreso/invitados-especiales-1.png',
    youtube: '6hKwjxvNp1Y',
    published: miercoles,
    new: miercoles && !jueves,
  },
  {
    name: 'Tim Gill',
    slug: 'tim-gill',
    country: 'INGLATERRA',
    desc: 'Tim Gill es académico, escritor y consultor independiente, vive en Londres y es defensor mundial del juego al aire libre y la movilidad infantil. Es autor de "Urban Playground: How child-friendly planning and design can save cities" y "No Fear: Growing up in a risk-averse society".',
    imgd: '/img/fotos/congreso/5-invitados-especiales-banner-3.jpg',
    imgm: '/img/fotos/congreso/invitados-especiales-5.png',
    youtube: 'ScRMIilFdP8',
    published: miercoles,
    new: miercoles && !jueves,
  },
  {
    name: 'Cecilia Vaca Jones',
    slug: 'cecilia-vaca-jones',
    country: 'ECUADOR',
    desc: 'Cecilia Vaca-Jones es consultora en materia de políticas sociales, ex-Directora Ejecutiva de la Fundación Bernard van Leer. Ex Ministra Coordinadora de Desarrollo Social en Ecuador. Posee amplia experiencia en la gestión de políticas y programas de desarrollo social. En su trayectoria profesional el principal enfoque de Cecilia ha sido mejorar las condiciones de vida de la niñez, las mujeres y las poblaciones indígenas. Máster en Ciudades de London School of Economics. Máster en Políticas Sociales para el Desarrollo Sostenible de la Universidad de Bolonia. Licenciada en Relaciones Internacionales de la Pontificia Universidad Católica de Ecuador.', 
    imgd: '/img/fotos/congreso/5-invitados-especiales-banner-4.jpg',
    imgm: '/img/fotos/congreso/invitados-especiales-4.png',
    youtube: 'txXe5V056wY',
    published: jueves,
    new: jueves && !viernes,
  },
  {
    name: 'Rodrigo Mayorga',
    slug: 'rodrigo-mayorga',
    country: 'CHILE',
    desc: 'Rodrigo Mayorga es historiador, profesor y antropólogo educacional. Es académico UC, investigador postdoctoral del Centro de Justicia Educacional, y Director General de la Fundación “Momento Constituyente”, cuyo objetivo es entregar educación constituyente, contribuyendo al debate público y a los procesos de construcción colectiva que Chile vive hoy',
    imgd: '/img/fotos/congreso/5-invitados-especiales-banner-7.jpg',
    imgm: '/img/fotos/congreso/invitados-especiales-3.png',
    youtube: 'cFo5_3jDRHc',
    published: jueves,
    new: jueves && !viernes,
  },
  {
    name: 'Matías Knust',
    slug: 'matias-knust',
    country: 'CHILE',
    desc: 'Matias Knust es sociólogo de las infancias y director de la Fundación CIFREP. Sociólogo por la Universidad Alberto Hurtado y Magíster en estudios de la infancia por la Universidad de Ciencias y Tecnología de Noruega (NTNU). Hoy es miembro del Núcleo de Investigación en Primera Infancia y Política Pública de la Universidad de Chile.',
    imgd: '/img/fotos/congreso/5-invitados-especiales-banner-5.jpg',
    imgm: '/img/fotos/congreso/invitados-especiales-2.png',
    youtube: 'vLPO-MfyvnA',
    published: viernes,
    new: viernes && !sabado,
  },
  {
    name: 'Felipe Lecannelier',
    slug: 'felipe-lecannelier',
    country: 'CHILE',
    desc: 'Felipe es psicólogo clínico de formación, magíster en Epistemología y Filosofía de las Ciencias de la Universidad de Chile, y doctor en Psicología de la Universidad Autónoma de Madrid. Se ha especializado en temas relativos al apego infantil, el trauma, infancia y salud mental. Actualmente se desempeña como académico de la Facultad de Medicina de la Universidad de Santiago, asesor nacional e internacional, y es autor de libros como “A.M.A.R Hacia un cuidado respetuoso de apego en la infancia”, “El trauma oculto en la infancia” y “Volver a Mirar”.',
    imgd: '/img/fotos/congreso/5-invitados-especiales-banner-6.jpg',
    imgm: '/img/fotos/congreso/invitados-especiales-6.png',
    youtube: 'oaq-C3eKmb8',
    published: viernes,
    new: viernes && !sabado,
  },
]