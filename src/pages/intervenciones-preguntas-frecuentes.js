import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IntervencionesFAQ() {
    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <Header />
			<main>

				<section className='color-azul fondo-amarillo' id='sobre'>
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 pb-8 lg:pt-32 lg:text-xl'>
						<h2 className='font-hbold text-xl lg:text-4xl lg:mb-16 bullet'>INTERVENCIONES<br />URBANAS EN VIÑA DEL MAR</h2>
						<p className='mt-10 text-xl lg:text-3xl'>PREGUNTAS FRECUENTES</p>
						<dl>
							<p className='my-8'>
								<dt className='font-bold'>P1. ¿En el caso de los participantes internacionales, sería posible coordinar los trabajos a distancia o sería indispensable una presencia física antes o durante las intervenciones? ¿Cuál es su posición respecto a las participaciones internacionales?</dt>
								<dd>Es necesario que esté alguien del equipo presente en Viña del Mar para coordinar la construcción, si bien tendremos apoyo para la construcción de las intervenciones, el equipo o persona ganadora debe dirigir la construcción insitu. </dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P2. Según las bases se menciona que para inscribir un equipo debe cumplir con paridad de género y debe tener 1 coordinador y 2 ejecutores. Esto quiere decir que, para inscribir equipos, ¿Son mínimo 3 personas? </dt>
								<dd>Un equipo se considerará de 2 o más personas.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P3. Si las intervenciones son temporales, ¿Se pueden utilizar materiales permanentes como pintura de colores?</dt>
								<dd>Pintura de colores se podría utilizar en los lugares que tienen pavimento de hormigón o alguna panderetera. Esto implica que no puede utilizarse en suelos de baldosas como Plaza Parroquia. Así también, hay que considerar que los Jardines del Palacio Carrasco y plaza Parroquia deben quedar sin ninguna intervención permanente post festival.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P4. ¿Se puede sacar o alterar algún elemento del lugar, por ejemplo una planta?</dt>
								<dd>Podría sacarse si es repuesta al final del festival. Los Jardines del Palacio Carrasco no pueden alterarse, al ser Monumento Nacional.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P5. ¿Se debe retirar toda la propuesta una vez terminado el festival y dejar el espacio como estaba originalmente?</dt>
								<dd>Se retira toda la intervención al final del festival, podrán quedar pinturas en algún lugar, lo que también se ajustará en proceso de ajuste técnico, una vez esté seleccionado. Hay que considerar que los Jardines del Palacio Carrasco y plaza Parroquia deben quedar sin ninguna intervención permanente post festival.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P6. Respecto a los materiales, ¿Es posible reciclar materiales de alguna organización, basurero o recinto, o los materiales deben ser nuevos? ¿Los materiales deben adquirirse con boleta?</dt>
								<dd>Pueden usar materiales reciclados. Los materiales serán comprados de manera centralizada por la organización del festival, pudiendo entregar una caja chica al equipo ejecutor para compras más específicas, o de emergencia, lo cual deberá rendirse con boleta.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P7. ¿Tiene algún límite de espacio estricto hasta donde puede ser intervenido el lugar elegido?, por ejemplo ¿es posible proponer un nuevo paso de cebra o pintar uno que ya exista?</dt>
								<dd>La idea es intervenir el espacio propuesto, sin restringir proponer algo adicional para espacio vial o colindante, lo que estará sujeto a autorización municipal.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P8. ¿Es posible incorporar dentro de la propuesta a otras organizaciones que participen como colaboradores externos en caso que la propuesta lo requiera?</dt>
								<dd>Si.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P9. En el caso de que alguno de los elementos que consideramos no estén dentro de las bases, ¿Se pueden dejar por escrito aquellas cosas que consideramos que pueden aportar para el lugar como una futura intervención?</dt>
								<dd>Si, nos parece interesante esa mirada.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P10. Sobre el formulario de postulación: El CV Resumen que debemos presentar es del equipo, recogiendo de forma general lo que tod@s han hecho de forma separada y/o conjunta, o personal, o sea, app 500 palabras dedicadas a cada uno de los integrantes del equipo?</dt>
								<dd>El CV es del equipo, de lo que han hecho en forma conjunta y, si quieren destacar algo de algún integrante en particular, también se puede, pero es un solo CV.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P11. Sobre la construcción de la intervención: Entendemos que por lo menos 1 miembro del equipo deberá ser parte del proceso de construcción de la intervención. ¿Esto significa que esa persona (y las restantes si es posible) deberán ser la mano de obra que ejecute la construcción? ¿Si es así, el valor que se puede atribuir a honorarios puede ser derivado a los miembros del equipo que construyan, o está pensado solamente para elementos externos al equipo que sean necesarios contratar para apoyarnos en la construcción?</dt>
								<dd>Si, las personas que van al lugar son encargados de la ejecución de su propuesta y parte de la mano de obra de esta, pero también la organización del festival ha estado trabajando para contar con grupos de voluntarios para construir todas las intervenciones. Sobre los honorarios, si, estos pueden ser destinados a algún miembro del equipo, respetando el tope.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P12. Sobre los objetivos y el destino de la intervención: ¿Además de materializar las ideas que l@s niñ@s desarrollaron durante el Festival, se pretenden realizar mediciones durante los días de apertura de las intervenciones al público? ¿Si es así, cuales son las preguntas y preocupaciones que se están planteando?</dt>
								<dd>Durante el festival se realizan actividades de participación y de activación, asociada a los lugares y rutas. Se harán consultas en relación a los lugares y a las intervenciones las cuales se definirán en conjunto con la municipalidad una vez seleccionadas las intervenciones.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P13. Cuando termine el festival, cuál será el destino del material y/o estructura construida?</dt>
								<dd>La prioridad es la reutilización, lo que será puesto a disposición de la municipalidad, juntas de vecinos y/o escuelas participantes. En el caso de no requerirse por parte de estas, los participantes pueden quedarse con estas estructuras o parte de estas.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P14. El espacio de la estación de Viña del Mar, en la propuesta ¿Se considera también el sitio eriazo contiguo a la estación? </dt>
								<dd>No, el sitio eriazo no deberá considerarse.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P15. Dentro del presupuesto ¿Se considera el gasto de herramientas como caladoras, taladros, etc.?  y ¿Cuál será su destino luego de su uso? </dt>
								<dd>Si, deben considerarse, también puede considerarse arriendo. El destino aún no se ha definido, en principio quedan en custodia de la Fundación organizadora para su reutilización en otros proyectos.</dd>
							</p>
							<p className='my-8'>
								<dt className='font-bold'>P16. ¿Habrá seguridad en las instalaciones en la noche?</dt>
								<dd>Estamos trabajando de la mano con la Municipalidad para contar con vigilancia en formato de ronda, no punto fijo. También está previsto el desarme diario de instalaciones que así lo requieran, para llevarlas a sitio de resguardo, pero esto deberá ser considerado en el diseño para facilitar el desarme y transporte.</dd>
							</p>
						</dl>
						<p className='my-8'>
							<Link href="/intervenciones-urbanas-en-vina-del-mar"><a className='underline'>VOLVER</a></Link>
						</p>
					</div>
				</section>

			</main>

			<Footer bgClass="fondo-amarillo" />
        </>
    )
}
