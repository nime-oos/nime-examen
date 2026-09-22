import { Question } from '../types/exam';

export const questions: Question[] = [
  {
    id: 1,
    topic: 'Ley 431',
    question: '¿Qué es accidente de tránsito, según la ley 431?',
    options: [
      'La colisión o los vuelcos de los vehículos en la vía',
      'Un choque donde resultan personas lesionadas o muertas',
      'Acción u omisión culposa cometida por cualquier conductor, pasajero o peatón en la vía pública o privada causando daños materiales, lesiones o muerte de personas',
      'Todas las anteriores',
    ],
    correctAnswer: 2,
    explanation:
      'Según la ley 431, un accidente de tránsito es cualquier acción u omisión culposa cometida en la vía pública o privada que cause daños materiales, lesiones o muerte.',
  },
  {
    id: 2,
    topic: 'Ley 431',
    question: '¿Quiénes deben usar el Arcén?',
    options: [
      'Vehículos de tracción animal, bicicletas, vehículos para discapacitados y carretones halados por personas',
      'Los vehículos de transporte pesado',
      'Cualquier automotor',
    ],
    correctAnswer: 0,
    explanation:
      'El arcén está destinado para vehículos no motorizados y de tracción humana o animal.',
  },
  {
    id: 3,
    topic: 'Ley 431',
    question:
      '¿Cuál de las siguientes conductas se establece como Conducción temeraria?',
    options: [
      'Avanzar en pendientes, curvas o puentes de forma temeraria',
      'Realizar o participar en competencias de velocidad ilegales',
      'Realizar maniobras acrobáticas con el vehículo en la vía pública',
      'Todas las anteriores',
    ],
    correctAnswer: 3,
    explanation:
      'Todas estas conductas están clasificadas como conducción temeraria según la ley.',
  },
  {
    id: 4,
    topic: 'Ley 431',
    question: '¿Qué significa vía de un solo sentido de circulación?',
    options: [
      'Que los vehículos están autorizados a circular en el mismo sentido de circulación',
      'Que los vehículos están autorizados a circular en sentidos opuestos',
      'Que los vehículos pueden transitar autos y transporte pesado',
    ],
    correctAnswer: 0,
    explanation:
      'En una vía de un solo sentido, todos los vehículos deben circular en el mismo sentido.',
  },
  {
    id: 5,
    topic: 'Ley 431',
    question: '¿Qué significa vía de doble sentido de circulación?',
    options: [
      'Que los vehículos están autorizados a circular en el mismo sentido de circulación',
      'Que los vehículos están autorizados a circular en sentidos opuestos',
      'Que solo se desplazan autobuses y transporte pesado',
    ],
    correctAnswer: 1,
    explanation:
      'Una vía de doble sentido permite la circulación de vehículos en direcciones opuestas.',
  },
  {
    id: 6,
    topic: 'Ley 431',
    question:
      '¿Cuándo deben realizar las condiciones técnicas y mecánicas del vehículo?',
    options: ['Cada seis meses', 'Cada año', 'Antes de ponerlo en marcha'],
    correctAnswer: 2,
    explanation:
      'La revisión de las condiciones mecánicas debe hacerse antes de poner el vehículo en marcha.',
  },
  {
    id: 7,
    topic: 'Ley 431',
    question: '¿Qué es el ángulo de visibilidad al conducir un vehículo?',
    options: [
      'Es el área máxima de visión que debe de tener todo conductor al desplazarse sobre la vía',
      'Área de amplia visibilidad en una vía pública',
      'Área de desplazamiento de los automotores',
    ],
    correctAnswer: 0,
    explanation:
      'El ángulo de visibilidad es el área máxima de visión que el conductor debe tener para circular con seguridad.',
  },
  {
    id: 8,
    topic: 'Ley 431',
    question: '¿Cuál es la inpección técnica de vehículos?',
    options: [
      'Es la verificación de las características del vehículo',
      'Es la verificación que reúna las condiciones mínimas de seguridad para su funcionamiento y circulación',
      'Todas las anteriores',
      'Ninguna de las anteriores',
    ],
    correctAnswer: 2,
    explanation:
      'La refracción técnica evalúa las condiciones de seguridad y características del vehículo, por lo que todas las anteriores son correctas.',
  },
  {
    id: 9,
    topic: 'Ley 431',
    question: '¿Qué es una Intersección?',
    options: [
      'Punto de convergencia de dos o más vías públicas o privadas para su unión o cruce entre sí',
      'Una pista para automotores',
      'Es una calle de una sola dirección',
    ],
    correctAnswer: 0,
    explanation:
      'Una intersección es el punto donde convergen dos o más vías públicas o privadas.',
  },
  {
    id: 10,
    topic: 'Ley 431',
    question: '¿Quién es Peatón?',
    options: [
      'El usuario de la vía que transita en carretones',
      'Aquellos ciclistas que hacen uso de la vía',
      'Todo ser humano que transita por la vía pública y no conduce un vehículo automotor',
    ],
    correctAnswer: 2,
    explanation:
      'El peatón es toda persona que circula a pie por la vía pública y no conduce vehículo automotor.',
  },
  {
    id: 11,
    topic: 'Ley 431',
    question: '¿Qué es Paso peatonal?',
    options: [
      'Es el área señalizada y destinada para el paso exclusivo de peatones',
      'Es el área del peatón selecciona para cruzar la vía',
      'Es un área señalada para esperar el autobús',
    ],
    correctAnswer: 0,
    explanation:
      'El paso peatonal es el espacio destinado y señalizado exclusivamente para el tránsito de peatones.',
  },
  {
    id: 12,
    topic: 'Ley 431',
    question: '¿Qué es conducción temeraria?',
    options: [
      'Realizar o participar en competencias de velocidad ilegales',
      'Conducir con temor en la vía',
      'Conducir con licencia vencida',
    ],
    correctAnswer: 0,
    explanation:
      'Conducción temeraria es realizar o participar en competencias ilegales de velocidad.',
  },
  {
    id: 13,
    topic: 'Ley 431',
    question: '¿Cuáles son los vehículos de régimen preferente?',
    options: [
      'Las pipas de gasolinas, los recolectores de basura',
      'Los de traslado de valores bancarios',
      'Caravanas presidenciales, militares, de gobierno, cruz roja, auto patrullas de la Policía Nacional',
    ],
    correctAnswer: 2,
    explanation:
      'Los vehículos de régimen preferente son los autorizados como caravanas presidenciales, militares y patrullas de la Policía Nacional.',
  },
  {
    id: 14,
    topic: 'Ley 431',
    question: '¿Qué es régimen preferente?',
    options: [
      'Es el régimen de preferencia de circulación para los vehículos autorizados por la ley 431',
      'Permiso que se solicita ante la autoridad de aplicación',
      'Los que usen dispositivos sonoros comerciales',
    ],
    correctAnswer: 0,
    explanation:
      'El régimen preferente da prioridad de circulación a vehículos autorizados por la ley 431.',
  },
  {
    id: 15,
    topic: 'Ley 431',
    question: '¿Qué es infracción de tránsito?',
    options: [
      'La acción u omisión contraria a la ley 431 y su reglamento',
      'La multa a pagar establecida en el arto 26',
      'Desconocimiento de la ley 431',
    ],
    correctAnswer: 0,
    explanation:
      'Una infracción de tránsito es la acción u omisión contraria a la Ley 431 y su reglamento.',
  },
  {
    id: 16,
    topic: 'Ley 431',
    question: '¿Qué es Suspensión de licencia?',
    options: [
      'Las multas que se aplica a conductores que violan o infringen la ley',
      'Es la acción administrativa que ejerce Seguridad de Tránsito de la Policía Nacional por infracciones de mayor peligrosidad y peligrosas',
      'La retención del vehículo',
    ],
    correctAnswer: 1,
    explanation:
      'La suspensión de licencia es una acción administrativa aplicada por Seguridad de Tránsito por infracciones graves.',
  },
  {
    id: 17,
    topic: 'Ley 431',
    question:
      '¿A qué están obligados los medios de transporte de tracción humana o animal?',
    options: [
      'Colocar señales lumínicas, cintas adhesivas reflexivas, en la parte delantera y trasera del medio de transporte',
      'Si hacen infracciones se les aplicará lo establecido en el artículo 26 de la ley 431',
      'Deben pagar sus multas en sesenta días o se les duplica',
    ],
    correctAnswer: 0,
    explanation:
      'Los medios de transporte de tracción humana o animal deben llevar señales lumínicas o cintas reflectivas para seguridad vial.',
  },
  {
    id: 18,
    topic: 'Ley 431',
    question: '¿Cuándo se establece la reincidencia de infracciones?',
    options: [
      'Al acumular en un año, 3 infracciones de mayor peligrosidad, 6 peligrosas o una combinación de 4 de los dos tipos de infracciones',
      'Al no respetar las señales e invadir carril al mismo tiempo',
      'Cuando el agente así lo considere',
    ],
    correctAnswer: 0,
    explanation:
      'La reincidencia se establece al acumular en un año 3 infracciones de mayor peligrosidad, 6 peligrosas o una combinación de ambas.',
  },
  {
    id: 19,
    topic: 'Ley 431',
    question:
      '¿Por cuánto tiempo se suspenderá la licencia de conducir cuando se determine la primera reincidencia?',
    options: ['Tres meses', 'Seis meses', 'Un año'],
    correctAnswer: 0,
    explanation:
      'La primera reincidencia conlleva suspensión de la licencia por tres meses.',
  },
  {
    id: 20,
    topic: 'Ley 431',
    question: '¿Qué otra sanción causa la reincidencia por infracciones?',
    options: [
      'Curso de Adiestramiento vial',
      'Seminario para conductores ebrios',
      'Solo se pagará las multas',
    ],
    correctAnswer: 0,
    explanation:
      'La reincidencia por infracciones obliga al conductor a llevar un curso de adiestramiento vial.',
  },
  {
    id: 21,
    topic: 'Ley 431',
    question:
      '¿Qué período de suspensión se aplica en los casos de las infracciones establecidas en los numerales 1), 2), 3), 4), 5) y 6) del artículo 26?',
    options: [
      'De tres meses hasta a un hasta un año',
      'Segunda ocasión 6 meses',
      'Tercera ocasión 1 año',
    ],
    correctAnswer: 0,
    explanation:
      'El período de suspensión en estas infracciones puede ir de tres meses hasta un año.',
  },
  {
    id: 22,
    topic: 'Ley 431',
    question: '¿Qué sanciones se aplican a los conductores temerarios?',
    options: [
      'Serán responsables de infracción de conducción temeraria y se les aplicará la multa correspondiente',
      'Responderán por la responsabilidad penal y civil que corresponda',
      'Responderán por la debida transgresión a las normas de tránsito',
      'Todas las anteriores',
    ],
    correctAnswer: 3,
    explanation:
      'El conductor temerario es responsable de la infracción, penal y civilmente, además de transgredir las normas de tránsito.',
  },
  {
    id: 23,
    topic: 'Ley 431',
    question:
      '¿Cuántas infracciones puede aplicar el agente de tránsito a un conductor en un mismo momento?',
    options: [
      'Solamente una infracción',
      'A las infracciones cometidas',
      'No más de tres',
    ],
    correctAnswer: 1,
    explanation:
      'El agente de tránsito puede aplicar todas las infracciones cometidas por el conductor en ese momento.',
  },
  {
    id: 24,
    topic: 'Ley 431',
    question: '¿Qué es la prueba de concentración de alcohol en sangre?',
    options: [
      'Es el examen al que están obligados los conductores de vehículos automotores, cuando se vean involucrados en accidentes de tránsito',
      'Los pasajeros, peatones pueden hacerse la prueba en la cruz roja',
      'Es la prueba de sangre para saber el tipo de sangre',
    ],
    correctAnswer: 0,
    explanation:
      'La prueba de concentración de alcohol en sangre es obligatoria para conductores de vehículos involucrados en accidentes de tránsito.',
  },
  {
    id: 25,
    topic: 'Ley 431',
    question:
      '¿Con cuántos grados de alcohol se establece el estado de embriaguez ligera, según la tasa de alcoholemia?',
    options: [
      'Concentración superior de 0.5 a hasta 1 gramo de alcohol por litro de sangre',
      'Concentración de 0.00 a 0.3 gramos de alcohol',
      'Concentración de 1 a 2 grados de alcohol',
    ],
    correctAnswer: 0,
    explanation:
      'La embriaguez ligera se establece con una concentración de alcohol en sangre superior a 0.5 y hasta 1 gramo por litro.',
  },
  {
    id: 26,
    topic: 'Ley 431',
    question:
      '¿Con cuántos gramos de alcohol se establece el estado de embriaguez, según la tasa de alcoholemia?',
    options: [
      'Concentración de 5 gramos de alcohol.',
      'Concentración de más de 1 gramo hasta 2 gramos de alcohol por litro de sangre.',
      'Concentración de 3 gramos a 12 gramos de alcohol.',
    ],
    correctAnswer: 1,
    explanation:
      'La embriaguez se establece con una concentración de más de 1 gramo hasta 3 gramos de alcohol por litro de sangre.',
  },
  {
    id: 27,
    topic: 'Ley 431',
    question:
      '¿Qué boleta me sirve de licencia provisional cuando me multan? ',
    options: [
      'La boleta azul con un período de 72 horas.',
      'La boleta amarilla por un período de treinta días.',
      'La boleta roja por 24 horas.',
    ],
    correctAnswer: 1,
    explanation:
      'El boleto a presentar es la boleta amarilla, la cual otorga un período de treinta días.',
  },
  {
    id: 28,
    topic: 'Ley 431',
    question:
      '¿Con cuántos gramos de alcohol se establece el estado de embriaguez extrema?',
    options: [
      'Concentración superior a 2 gramos de alcohol por litro de sangre.',
      'Concentración de 0.5 gramos de alcohol.',
      'Concentración superior de 1 gramo hasta 2 gramos de alcohol por litro de sangre.',
    ],
    correctAnswer: 0,
    explanation:
      'La embriaguez extrema se establece con una concentración superior a 3 gramos de alcohol por litro de sangre.',
  },
  {
    id: 29,
    topic: 'Ley 431',
    question:
      '¿Qué ocurre cuando el conductor se niegue a la realización del examen de alcoholemia?',
    options: [
      'Levantará un acta con la presencia de dos testigos plenamente identificados por la autoridad en el lugar y se deberá armar el expediente.',
      'Se le duplicará la multa.',
      'Se suspenderá por peligros de desobediencia civil.',
    ],
    correctAnswer: 0,
    explanation:
      'La negativa a la prueba obliga a levantar un acta con testigos y a armar el expediente correspondiente.',
  },
  {
    id: 30,
    topic: 'Ley 431',
    question:
      '¿Cuál de estos supuestos se cumple cuando se aplica la retención por embriaguez?',
    options: [
      'Se retendrá al conductor hasta por 12 horas y será ubicado separado de las personas detenidas por otras circunstancias.',
      'El afectado puede pagar una fianza o salir libre de cargos sin perjuicio de aplicar las sanciones administrativas que correspondan.',
      'Levantará un acta con la presencia de dos testigos en el lugar y se deberá anexar el expediente.',
    ],
    correctAnswer: 0,
    explanation:
      'La retención por embriaguez implica que se levante un acta con la presencia de dos testigos en el lugar y se anexe el expediente.',
  },
  {
    id: 31,
    topic: 'Ley 431',
    question:
      '¿A qué está obligado el conductor, que se vea involucrado, en accidente de tránsito, con muertos y lesionados?',
    options: [
      'Permanecer en el lugar en espera de la Policía Nacional.',
      'Buscar un arreglo de mediación.',
      'Denunciar al inspector a cargo de la mediación.',
    ],
    correctAnswer: 0,
    explanation:
      'El conductor involucrado en accidentes graves está obligado a permanecer en el lugar en espera de la Policía Nacional.',
  },
  {
    id: 32,
    topic: 'Ley 431',
    question: '¿Para qué le sirve la resolución de accidente de tránsito?',
    options: [
      'Ésta tendrá carácter de sentencia firme.',
      'Sostendrá su presentación para su debido reclamo por parte interesada.',
      'Se debe presentar en los talleres autorizados.',
    ],
    correctAnswer: 1,
    explanation:
      'La reincidencia obliga al conductor a sostener su presentación para el reclamo de la parte interesada.',
  },
  {
    id: 33,
    topic: 'Ley 431',
    question:
      '¿Cuál es la instancia competente para la investigación de los accidentes de tránsito?',
    options: [
      'La especialidad de seguridad de tránsito de la policía nacional.',
      'La policía preventiva.',
      'Las compañías aseguradoras.',
    ],
    correctAnswer: 0,
    explanation:
      'La instancia competente es la especialidad de seguridad de tránsito de la Policía Nacional.',
  },
  {
    id: 34,
    topic: 'Ley 431',
    question: '¿Para quiénes es obligatorio el uso del cinturón de seguridad?',
    options: [
      'Ocupantes del asiento delantero.',
      'Niños de hasta doce años en el asiento trasero.',
      'Los ocupantes de asientos delanteros y los niños menores de siete años en el asiento trasero.',
    ],
    correctAnswer: 2,
    explanation:
      'El uso del cinturón es obligatorio para los ocupantes de los asientos delanteros y para los niños menores de siete años en el asiento trasero.',
  },
  {
    id: 35,
    topic: 'Ley 431',
    question: '¿Para quiénes es exigido el uso del casco de seguridad?',
    options: [
      'Conductores de motocicleta.',
      'Ciclistas en competencias de velocidad.',
      'Conductores y pasajeros de motocicleta.',
    ],
    correctAnswer: 2,
    explanation:
      'El uso del casco de seguridad es obligatorio tanto para el conductor como para los pasajeros de motocicleta.',
  },
  {
    id: 36,
    topic: 'Ley 431',
    question:
      '¿Qué medidas de seguridad establece la ley para niños menores de siete años al ser transportados?',
    options: [
      'Uso de sillas adecuadas o sistemas de retención infantil solo en el asiento trasero.',
      'Se permite transportar niños menores de siete años en el asiento delantero si van en sillas especiales.',
      'Los niños pueden viajar en asientos delanteros si usan el cinturón.',
    ],
    correctAnswer: 0,
    explanation:
      'La ley exige el uso de sillas adecuadas o sistemas de retención infantil (SRI) y solo en el asiento trasero.',
  },
  {
    id: 37,
    topic: 'Ley 431',
    question:
      '¿Cuáles son los tipos de licencia de conducir establecidos en Nicaragua?',
    options: [
      'Menor de edad, ordinaria y profesional.',
      'Ordinaria o profesional.',
      'Profesional, especial, ordinaria y de menor de edad.',
    ],
    correctAnswer: 2,
    explanation:
      'Los tipos de licencia son: Profesional, Especial, Ordinaria y de Menor de edad.',
  },
  {
    id: 38,
    topic: 'Ley 431',
    question:
      '¿Cuáles de los abajo mencionados son Infracciones de Mayor Peligrosidad?',
    options: [
      'Conducir en estado de embriaguez extrema.',
      'Estacionarse frente a hidrantes.',
      'Conducir sin portar el seguro.',
    ],
    correctAnswer: 0,
    explanation:
      'Conducir sin portar la póliza de seguro del vehículo es clasificada como Infracción de Mayor Peligrosidad.',
  },
  {
    id: 39,
    topic: 'Ley 431',
    question:
      '¿Cuáles de los siguientes vehículos deben circular en el carril derecho?',
    options: [
      'Bomberos y vehículos híbridos.',
      'Transporte de carga y pasajeros y vehículos lentos.',
      'Los conductores empujando a remolque en las carreteras.',
    ],
    correctAnswer: 1,
    explanation:
      'Los vehículos de transporte de carga, pasajeros y vehículos lentos deben circular por el carril derecho.',
  },
  {
    id: 40,
    topic: 'Ley 431',
    question: ' ¿Cuál de las mencionadas es una de las técnicas para aventajar?',
    options: [
      'Observar si el vehículo que está atrás y el de adelante no van a realizar la misma maniobra.',
      'Observar si en el carril derecho existe suficiente espacio para aventajar.',
      'Calcular la posición de mi vehículo con respecto al espacio.',
    ],
    correctAnswer: 0,
    explanation:
      'Aventajar implica asegurarse de que ningún vehículo trasero o delantero esté a punto de realizar una maniobra de adelantamiento.',
  },
  {
    id: 41,
    topic: 'Ley 431',
    question: '¿En qué lugares se aplica multa por aventajar?',
    options: [
      'En puentes, pasos y tramos estrechos.',
      'En intersecciones, curvas, cuestas y puentes.',
      'En pendientes, curvas y cuestas.',
    ],
    correctAnswer: 2,
    explanation:
      'La Ley 431 prohíbe y multa aventajar en intersecciones, curvas, cuestas y puentes.',
  },
  {
    id: 42,
    topic: 'Ley 431',
    question: '¿Cómo se clasifican los vehículos según su naturaleza?',
    options: [
      'Vehículos de Tracción mecánica y delantera.',
      'Vehículos de Tracción humana y mecánica.',
      'Vehículos de Tracción animal, Tracción humana y vehículo automotor.',
    ],
    correctAnswer: 2,
    explanation:
      'Según su naturaleza, los vehículos se clasifican en: Tracción animal, Tracción humana y vehículo automotor.',
  },
  {
    id: 43,
    topic: 'Ley 431',
    question:
      ' ¿Qué infracción se comete si circula a un diez por ciento más del límite?',
    options: [
      'Exceso de velocidad.',
      'Manejo temerario.',
      'Exposición de personas al peligro.',
    ],
    correctAnswer: 0,
    explanation:
      'Conducir al óvalo o en vías por un porcentaje superior al límite de velocidad es considerado Exceso de velocidad.',
  },
  {
    id: 44,
    topic: 'Ley 431',
    question:
      '¿Cuál es la velocidad máxima permitida para conducir en zonas escolares, con alumnos presentes?',
    options: ['15 Km/h.', '25 Km/h.', '30 Km/h.'],
    correctAnswer: 1,
    explanation:
      'La velocidad máxima permitida en zonas escolares, con alumnos presentes, es de 25 Km/h.',
  },
  {
    id: 45,
    topic: 'Ley 431',
    question:
      '¿Qué debo hacer cuando el peatón está usando la zona de seguridad o cruce peatonal?',
    options: [
      'Reducir la velocidad y tener cuidado.',
      'Detenerse.',
      'Conservar la velocidad y pitarle.',
    ],
    correctAnswer: 1,
    explanation:
      'Ante la presencia de un peatón en la zona de seguridad o cruce peatonal, el conductor debe Detenerse.',
  },
  {
    id: 46,
    topic: 'Ley 431',
    question:
      '¿Cuándo puedo adelantar excepcionalmente con línea continua amarilla?',
    options: [
      'Cuando el otro vehículo va en sentido contrario.',
      'Siempre que lo haga con precaución.',
      'Nunca debo adelantar en línea amarilla continua.',
    ],
    correctAnswer: 2,
    explanation:
      'La línea amarilla continua indica que está prohibido adelantar en cualquier circunstancia.',
  },
  {
    id: 47,
    topic: 'Ley 431',
    question: '¿Puedo girar a la derecha con el semáforo en luz roja?',
    options: [
      'No, se debe respetar siempre a la luz.',
      'Sí, en todas las circunstancias.',
      'Solo que esté autorizado según la ley.',
    ],
    correctAnswer: 2,
    explanation:
      'Se permite girar a la derecha con luz roja, a menos que exista un rótulo o señal que lo prohíba.',
  },
  {
    id: 48,
    topic: 'Ley 431',
    question:
      '¿Por cuáles de estas situaciones me pueden suspender la Licencia de Conducir?',
    options: [
      'Conducir en estado de ebriedad.',
      'Provocar accidentes y darse a la fuga.',
      'Exceso de Velocidad.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todas las infracciones mencionadas son causales de suspensión de la licencia de conducir.',
  },
  {
    id: 49,
    topic: 'Ley 431',
    question:
      '¿Cuáles son los períodos de suspensión de la licencia de conducir por reincidencia?',
    options: [
      'La primera vez 3 meses; segunda vez 6 meses; tercera vez 1 año; cuarta vez definitiva.',
      'La primera vez 3 meses; segunda vez 6 meses; tercera vez definitiva.',
      'Desde la primera vez se suspende por un año.',
    ],
    correctAnswer: 0,
    explanation:
      'Los períodos de suspensión por reincidencia son: 3 meses (1.ª), 6 meses (2.ª), 1 año (3.ª) y definitiva (4.ª).',
  },
  {
    id: 50,
    topic: 'Ley 431',
    question: '¿Cuál es la velocidad máxima permitida en carreteras?',
    options: ['80 Km/h.', '100 Km/h o lo que indique la señal.', '60 Km/h.'],
    correctAnswer: 1,
    explanation:
      'La velocidad máxima permitida en carreteras (sin señales que indiquen lo contrario) es de 80 Km/h.',
  },
  {
    id: 51,
    topic: 'Ley 431',
    question: '¿Cuál es la velocidad máxima permitida en calles y avenidas?',
    options: [
      '60 Km/h.',
      'Varía según la corriente del tráfico.',
      '45 Km/h o lo que indique la señal.',
    ],
    correctAnswer: 2,
    explanation:
      'La velocidad máxima permitida en calles y avenidas (zonas urbanas) es de 45 Km/h o lo que indique la señal.',
  },
  {
    id: 52,
    topic: 'Ley 431',
    question: '¿Cuál es la velocidad máxima permitida en pistas?',
    options: [
      '60 Kph o lo que indique la señal ',
      'Varía según la corriente del tráfico.',
      '45 Km/h o lo que indique la señal.',
    ],
    correctAnswer: 0,
    explanation:
      'La velocidad máxima permitida en pistas (vías urbanas) es de 45 Km/h o lo que indique la señal. (Nota: Se considera la primera opción como la respuesta correcta resaltada, aunque las opciones a y c son idénticas).',
  },
  {
    id: 53,
    topic: 'Ley 431',
    question:
      '¿Cuáles son las conductas temerarias señaladas en el arto. 26, bis?',
    options: [
      'Participar en competencias de velocidad ilegales.',
      'Circular a una velocidad que exceda el 30% del límite permitido.',
      'Realizar aventajamientos de forma indebida.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todas las acciones mencionadas (competencias ilegales, exceder el límite en más del 30% y aventajamientos indebidos) son conductas temerarias.',
  },
  {
    id: 54,
    topic: 'Ley 431',
    question:
      '¿Qué vehículos están obligados a circular en las vías de dos carriles de un solo sentido, siempre en el carril derecho?',
    options: [
      'Carga o pasajeros y vehículos lentos.',
      'Camiones, taxis y escuelas de manejo.',
      'Vehículos de tracción animal.',
    ],
    correctAnswer: 0,
    explanation:
      'El transporte de carga, pasajeros y vehículos lentos están obligados a usar siempre el carril derecho en vías de dos carriles de un solo sentido.',
  },
  {
    id: 55,
    topic: 'Ley 431',
    question: '¿Quiénes están obligados a circular por la derecha del arcén?',
    options: [
      'Peatones para no entorpecer el tráfico.',
      'Los vehículos de tracción animal y humana.',
      'Las motocicletas.',
    ],
    correctAnswer: 1,
    explanation:
      'Los vehículos de tracción animal y humana están obligados a circular por la derecha del arcén (berma).',
  },
  {
    id: 56,
    topic: 'Ley 431',
    question: '¿Cuándo puede un vehículo automotor circular por el arcén?',
    options: [
      'Si va circulando para rebasar al mismo.',
      'Excepción hecha cuando algún vehículo va a girar a la derecha.',
      'Si es vía de un solo carril, cuando un vehículo está inmovilizado en el carril.',
    ],
    correctAnswer: 2,
    explanation:
      'Un vehículo automotor puede circular por el arcén en una vía de un solo carril si otro vehículo se encuentra inmovilizado en el carril, permitiendo el paso.',
  },
  {
    id: 57,
    topic: 'Ley 431',
    question: '¿Qué documentos debe portar el conductor?',
    options: [
      'Licencia de conducir.',
      'Licencia de Circulación.',
      'Seguro de responsabilidad civil.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'El conductor debe portar la Licencia de conducir, la Licencia de Circulación del vehículo y la Póliza de responsabilidad civil.',
  },
  {
    id: 58,
    topic: 'Ley 431',
    question:
      '¿Qué tipo de luces se deben de usar en horas de la noche, en las zonas urbanas?',
    options: ['Luces altas.', 'Luces bajas.', 'Depende de las circunstancias.'],
    correctAnswer: 1,
    explanation:
      'En zonas urbanas (calles y avenidas), se deben utilizar las luces bajas en horas de la noche.',
  },
  {
    id: 59,
    topic: 'Ley 431',
    question:
      '¿En cuáles momentos se deben utilizar las luces bajas en carreteras?',
    options: [
      'Cuando circule vehículos en sentido opuesto.',
      'Cuando me acerco a poblados o peatones de frente.',
      'Cuando circule en un carril en sentido contrario al normalmente utilizado.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Se deben utilizar las luces bajas en todas las situaciones mencionadas para evitar encandilar a otros conductores y peatones.',
  },
  {
    id: 60,
    topic: 'Ley 431',
    question:
      '¿Qué debo hacer cuando circulo en un carril en sentido contrario al normalmente utilizado, que excepcionalmente esté señalizado para circular?',
    options: [
      'Tocar la bocina y pitar.',
      'Conducir con precaución.',
      'Usar el sistema de luces.',
    ],
    correctAnswer: 2,
    explanation:
      'En carriles de sentido contrario de uso excepcional, se debe usar el sistema de luces para indicar la posición del vehículo.',
  },
  {
    id: 61,
    topic: 'Ley 431',
    question:
      '¿En cuáles de estas situaciones el conductor deberá ser detenido según el arto 122?',
    options: [
      'Cuando resulten personas fallecidas.',
      'Cuando las personas resulten con lesiones gravísimas y graves.',
      'Cuando los accidentes que no lleven consecuencia de lesiones graves, los involucrados serán puestos bajo arresto domiciliar.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'El conductor deberá ser detenido en todas las situaciones mencionadas, incluyendo fallecidos y lesiones graves, según el artículo 122.',
  },
  {
    id: 62,
    topic: 'Ley 431',
    question:
      '¿Por cuánto tiempo se podrá retener a un conductor que se movilice en estado de embriaguez?',
    options: ['8 horas.', '12 horas.', '13 horas.'],
    correctAnswer: 1,
    explanation:
      'El tiempo máximo de retención para un conductor en estado de embriaguez es de 12 horas.',
  },
  {
    id: 63,
    topic: 'Ley 431',
    question: '¿Cuáles límites de velocidad prevalecen en carreteras?',
    options: [
      'Los que indiquen las señales de tránsito.',
      'Los que indiquen los agentes de tránsito.',
      '100 Km/h.',
    ],
    correctAnswer: 0,
    explanation:
      'En carretera, prevalecen los límites indicados por las señales de tránsito.',
  },
  {
    id: 64,
    topic: 'Ley 431',
    question:
      '¿En qué situaciones la Policía Nacional puede retener un vehículo?',
    options: [
      'Cuando circula sin placas.',
      'Cuando circula sin seguro.',
      'Cuando circula sin licencia de circulación.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'La Policía Nacional puede retener un vehículo si circula sin placas, sin seguro o sin licencia de circulación.',
  },
  {
    id: 65,
    topic: 'Ley 431',
    question:
      '¿De qué forma se determina cuando se tiene la preferencia en una intersección?  ',
    options: [
      'Cuando circula sobre avenidas ',
      'De acuerdo a la señal que regula.',
      'Cuando circula en las pistas.',
    ],
    correctAnswer: 1,
    explanation:
      'La preferencia de paso siempre se establece de acuerdo a la señal de tránsito (semáforo, alto, ceda el paso, etc.) que regule la intersección.',
  },
  {
    id: 66,
    topic: 'Ley 431',
    question:
      '¿Qué debo de realizar para cambiar de carril o para doblar en una esquina?',
    options: [
      'Señalar para avisar al que circula en el carril contiguo.',
      'Calcular la velocidad, la trayectoria y distancia, chequear el retrovisor y el punto ciego.',
      'Aumentar la aceleración para ocupar rápido el carril.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todas las acciones mencionadas (señalar, calcular y verificar) son necesarias para realizar un cambio de carril o un giro de manera segura.',
  },
  {
    id: 67,
    topic: 'Ley 431',
    question: '¿Qué medidas de advertencia debo considerar al estacionarme?',
    options: [
      'Encender las luces de parqueo y hacerme a la derecha gradualmente.',
      'Hacer la maniobra en el primer espacio disponible.',
      'Poner el pide vía solamente.',
    ],
    correctAnswer: 0,
    explanation:
      'Al estacionar, se deben encender las luces de parqueo (estacionamiento/intermitentes) y realizar la maniobra gradualmente hacia la derecha.',
  },
  {
    id: 68,
    topic: 'Ley 431',
    question:
      '¿Qué debo hacer ante la presencia de un vehículo de régimen preferente?',
    options: [
      'Hacerme a la derecha o izquierda y cederle el paso.',
      'Tocar la bocina y seguirlo para aprovechar.',
      'Bajar la velocidad.',
    ],
    correctAnswer: 0,
    explanation:
      'Ante un vehículo de régimen preferente (ambulancia, bomberos, policía), se debe ceder el paso haciéndose a la derecha.',
  },
  {
    id: 69,
    topic: 'Ley 431',
    question: '¿Cuáles de los mencionados son vehículos de régimen preferente?',
    options: [
      'Las grúas, los traslados de valores, los transportes de tóxicos y explosivos.',
      'Las caravanas oficiales del gobierno.',
      'Las carrozas.',
    ],
    correctAnswer: 1,
    explanation:
      'Los vehículos de régimen preferente son aquellos destinados a servicios de urgencia o de especial relevancia, como las carrozas oficiales del gobierno.',
  },
  {
    id: 70,
    topic: 'Ley 431',
    question: '¿Se puede aventajar a un vehículo que va lento en la carretera?',
    options: [
      'Solamente si él se hace a un lado y cede el paso.',
      'Siempre que el carril contrario esté libre.',
      'Se puede aventajar con precaución.',
    ],
    correctAnswer: 0,
    explanation:
      'Se puede aventajar a un vehículo lento solo si este cede el paso y se orilla, facilitando la maniobra.',
  },
  {
    id: 71,
    topic: 'Ley 431',
    question:
      '¿Cuál es el factor determinante para prevenir accidentes de tránsito?',
    options: ['La vía.', 'El ser humano.', 'El vehículo.'],
    correctAnswer: 1,
    explanation:
      'El factor humano (el ser humano) es el determinante principal en la prevención de accidentes, ya que es quien toma las decisiones de conducción.',
  },
  {
    id: 72,
    topic: 'Ley 431',
    question: '¿Qué es la distancia de frenado?',
    options: [
      'La que recorre el vehículo desde que se le aplican los frenos hasta detenerse.',
      'La que recorre desde el peligro o riesgo hasta que presiona el freno.',
      'La suma de la distancia de parada y de la distancia de frenado.',
    ],
    correctAnswer: 0,
    explanation:
      'La distancia de frenado es el espacio que recorre el vehículo desde el momento en que se pisa el freno hasta que se detiene por completo.',
  },
  {
    id: 73,
    topic: 'Ley 431',
    question:
      '¿Quién tiene la preferencia de paso, donde no existan señales de tránsito?',
    options: [
      'El vehículo que continúe en la vía por la cual circula tendrá preferencia de paso sobre los vehículos que vayan a ingresar a dicha vía ',
      'El que ya se desplazaba en la avenida.',
      'El que llega primero a la esquina.',
    ],
    correctAnswer: 0,
    explanation:
      'Tiene preferencia el vehículo que mantiene su vía principal, prevaleciendo sobre aquellos que intentan ingresar o cruzar.',
  },
  {
    id: 74,
    topic: 'Ley 431',
    question:
      '¿Qué pasos debo ejecutar cuando voy a ocupar otro carril distinto al que yo circulo?',
    options: [
      'Poner el pide vía o luces anticipadas.',
      'Ceder el paso a los respectivos conductores.',
      'Respetar la prioridad del que circule por el carril que pretendo ocupar.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Para cambiar de carril es necesario: señalizar, ceder el paso a los demás conductores, y respetar la prioridad del carril al que se desea ingresar.',
  },
  {
    id: 75,
    topic: 'Ley 431',
    question:
      '¿Cuál señal de tránsito es la de prevalecer en una intersección?',
    options: [
      'El semáforo.',
      'El agente de tránsito.',
      'Las altos y líneas de pare.',
    ],
    correctAnswer: 1,
    explanation:
      "La señal del Agente de Tránsito siempre prevalece sobre cualquier otra señal, incluyendo semáforos y señales de 'Alto'.",
  },
  {
    id: 76,
    topic: 'Ley 431',
    question:
      '¿Quién tiene preferencia de paso cuando dos vehículos que circulen en sentido contrario van a tomar la misma vía en el mismo sentido de circulación, y no hay señales?',
    options: [
      'El que va a girar a la izquierda.',
      'El que gira a la derecha.',
      'El que va a ingresar.',
    ],
    correctAnswer: 1,
    explanation:
      'En ausencia de señales que regulen la intersección, el vehículo que gira a la derecha tiene preferencia de paso sobre el que gira a la izquierda.',
  },
  {
    id: 77,
    topic: 'Ley 431',
    question: '¿Qué es paso a desnivel?',
    options: [
      'Aquel punto en donde se interceptan, una por encima de la otra para que la circulación se realice a diferentes niveles de la superficie.',
      'Punto de convergencia de dos o más vías.',
      'Paso de seguridad de peatones y vehículos.',
    ],
    correctAnswer: 0,
    explanation:
      'Un paso a desnivel es un punto de intercepción de vías a diferentes alturas para una circulación continua y sin cruces al mismo nivel.',
  },
  {
    id: 78,
    topic: 'Ley 431',
    question: '¿Quién tiene preferencia en un sitio estrecho?',
    options: [
      'El que entra primero.',
      'Es el vehículo de pasajeros.',
      'El que tenga menor peso tiene preferencia.',
    ],
    correctAnswer: 0,
    explanation:
      'En un sitio estrecho, la preferencia la tiene el vehículo que ingresa primero.',
  },
  {
    id: 79,
    topic: 'Ley 431',
    question: '¿Cuándo se puede efectuar el aventajamiento por la derecha?',
    options: [
      'Únicamente cuando se encuentre inmovilizado un vehículo.',
      'Bajo ninguna circunstancia se puede aventajar por la derecha en vías de un solo carril.',
      'Cuando hay reductores de velocidad.',
    ],
    correctAnswer: 0,
    explanation:
      'Solo se puede aventajar por la derecha de forma excepcional, cuando un vehículo está inmovilizado y obstruyendo el carril.',
  },
  {
    id: 80,
    topic: 'Ley 431',
    question: '¿Qué precauciones debe tener al incorporarse al tráfico?',
    options: [
      'Señalar para ser visto.',
      'Verificar con los retrovisores.',
      'Esperar a que la circulación lo permita.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Para incorporarse al tráfico de forma segura, se debe señalar, verificar espejos y esperar el momento oportuno (todas las anteriores).',
  },
  {
    id: 81,
    topic: 'Ley 431',
    question:
      '¿Qué no se debe entrar a la intersección con luz verde, si previsiblemente no llegare al otro lado?',
    options: [
      'Para que no obstaculice la circulación.',
      'Para no obstaculizar la circulación trasversal.',
      'Porque si espero atrazo el tráfico.',
    ],
    correctAnswer: 1,
    explanation:
      'No se debe entrar a una intersección si no se puede salir de ella, para evitar obstaculizar la circulación en sentido trasversal cuando el semáforo cambie.',
  },
  {
    id: 82,
    topic: 'Ley 431',
    question: '¿Para qué maniobras está indicado la marcha en reversa?',
    options: [
      'Para ingresar o garajes y maniobras de parqueo.',
      'Para retomar en la vía.',
      'Para jugar en el tráfico siempre.',
    ],
    correctAnswer: 0,
    explanation:
      'La marcha en reversa solo está indicada para maniobras de estacionamiento (parqueo) o ingreso/salida de garajes, y en tramos muy cortos.',
  },
  {
    id: 83,
    topic: 'Ley 431',
    question: '¿Cuándo se puede aventajar por el carril izquierdo?',
    options: [
      'Nunca se debe aventajar por la izquierda.',
      'Cuando se presenten las condiciones.',
      'Siempre se aventaja por el carril izquierdo.',
    ],
    correctAnswer: 2,
    explanation:
      'Por regla general, el adelantamiento (aventajamiento) se debe realizar siempre por el carril izquierdo, cuando las condiciones lo permitan.',
  },
  {
    id: 84,
    topic: 'Ley 431',
    question: '¿Por qué no debe adelantar en línea continua amarilla?',
    options: [
      'Porque hay un vehículo en carril contrario.',
      'Por la vía de los sentidos, posiblemente no pase.',
      'Porque es peligroso un choque de frente.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'La línea continua amarilla prohíbe el adelantamiento debido al riesgo de colisión frontal (choque de frente) y la posible falta de visibilidad o espacio (todas las anteriores).',
  },
  {
    id: 85,
    topic: 'Ley 431',
    question: '¿Qué es lo primero antes de iniciar la marcha con un vehículo?',
    options: [
      'Colocarse el cinturón de seguridad.',
      'Ajustar los espejos retrovisores.',
      'Adoptar una postura correcta, para lo cual debe acomodar el asiento.',
    ],
    correctAnswer: 2,
    explanation:
      'Lo primero que debe hacer el conductor antes de iniciar la marcha es colocarse el cinturón de seguridad.',
  },
  {
    id: 86,
    topic: 'Ley 431',
    question:
      '¿A qué velocidad se debe circular al aproximarse a un paso a desnivel?',
    options: [
      'A la misma velocidad que se desplaza en la calle.',
      'Se debe tomar el impulso necesario.',
      'Por debajo de la velocidad máxima permitida.',
    ],
    correctAnswer: 2,
    explanation:
      'Al aproximarse a un paso a desnivel se debe reducir la velocidad y circular por debajo del límite máximo permitido para la vía.',
  },
  {
    id: 87,
    topic: 'Ley 431',
    question:
      '¿Cuál es el límite de velocidad máximo permitido según la ley 431 para calles y avenidas?',
    options: ['45 Km/h.', '50 Km/h.', '40 Km/h.'],
    correctAnswer: 0,
    explanation:
      'El límite de velocidad máximo permitido en calles y avenidas (zonas urbanas) es de 45 Km/h.',
  },
  {
    id: 88,
    topic: 'Ley 431',
    question: '¿Cuál es el límite de velocidad permitido para pistas?',
    options: [
      '45 kilómetros por hora.',
      '50 kilómetros por hora.',
      '60 kilómetros por hora.',
    ],
    correctAnswer: 2,
    explanation:
      'El límite de velocidad máximo permitido para pistas es de 60 kilómetros por hora.',
  },
  {
    id: 89,
    topic: 'Ley 431',
    question: '¿Por qué no se debe aventajar en pendientes?',
    options: [
      'Por la falta de pericia, lo que hace peligrosa la maniobra.',
      'Porque la ley lo prohíbe.',
      'Porque el vehículo pierde potencia.',
    ],
    correctAnswer: 1,
    explanation:
      'Aventajar en pendientes está prohibido por ley debido a la falta de visibilidad y el riesgo de colisión frontal.',
  },
  {
    id: 90,
    topic: 'Ley 431',
    question: '¿Por qué está prohibido aventajar en puentes?',
    options: [
      'Por falta de visibilidad y porque la ley lo prohíbe.',
      'Por reducción del espacio y la ley lo prohíbe.',
      'Porque todos los puentes son angostos.',
    ],
    correctAnswer: 1,
    explanation:
      'Aventajar en puentes está prohibido por ley debido a la reducción del espacio y el riesgo de choque.',
  },
  {
    id: 91,
    topic: 'Ley 431',
    question: '¿Por qué está prohibido aventajar en curvas?',
    options: [
      'Por falta de visibilidad.',
      'Por no hay visibilidad y se invade el carril contrario.',
      'Porque la ley lo prohíbe.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Aventajar en curvas está prohibido porque la ley lo prohíbe, hay falta de visibilidad y se invade el carril contrario (Todas las anteriores).',
  },
  {
    id: 92,
    topic: 'Ley 431',
    question: '¿Cuál es la velocidad máxima al circular dentro de la rotonda?',
    options: [
      '45 km por hora.',
      '30 km por hora o lo que la señal indique.',
      '35 km por hora.',
    ],
    correctAnswer: 1,
    explanation:
      'La velocidad máxima permitida al circular dentro de la rotonda es de 35 km/h o la velocidad que indique la señal.',
  },
  {
    id: 93,
    topic: 'Ley 431',
    question: '¿A quién se le otorga la licencia de tipo profesional?',
    options: [
      'A quienes ostentan título profesional.',
      'A quienes ejercen de forma permanente la labor de la conducción, haciendo de ello una labor profesional.',
      'Aquellos conductores con más de un año de tener la ordinaria.',
    ],
    correctAnswer: 1,
    explanation:
      'La licencia profesional se otorga a quienes ejercen la conducción como su labor u oficio permanente.',
  },
  {
    id: 94,
    topic: 'Ley 431',
    question: '¿Cuándo es retenido la licencia de conducir por la autoridad?',
    options: [
      'Cuando se aplica infracción o multa.',
      'En casos de cambio de cambio de domicilio.',
      'Conducir con el cinturón desabrochado.',
    ],
    correctAnswer: 0,
    explanation:
      'La licencia de conducir es retenida por la autoridad cuando se aplica una infracción o multa, para garantizar el pago o el trámite correspondiente.',
  },
  {
    id: 95,
    topic: 'Ley 431',
    question:
      '¿En qué otros casos la licencia de conducir es retenida por la autoridad?',
    options: [
      'Suspensión temporal o cancelación de la misma.',
      'Cambio de domicilio.',
      'Cambio de dueño del vehículo.',
    ],
    correctAnswer: 0,
    explanation:
      'La licencia de conducir es retenida cuando existe una orden de suspensión temporal o cancelación de la misma.',
  },
  {
    id: 96,
    topic: 'Ley 431',
    question:
      '¿Qué debe hacer si el vehículo sufre un desperfecto mecánico en el paso a desnivel?',
    options: [
      'Avisar a la Policía para que lo resguarden.',
      'Colocar los triángulos de seguridad y buscar la forma de desalojar la vía.',
      'Avisar al seguro y a la Policía.',
    ],
    correctAnswer: 1,
    explanation:
      'Ante un desperfecto en un paso a desnivel, se debe señalizar con triángulos de seguridad y desalojar la vía lo antes posible.',
  },
  {
    id: 97,
    topic: 'Ley 431',
    question:
      '¿A qué distancia debo colocar los triángulos de seguridad en el perímetro urbano?',
    options: [
      'A diez metros del vehículo, aproximadamente.',
      'A 50 metros del vehículo, aproximadamente.',
      'Por el costado del mismo vehículo.',
    ],
    correctAnswer: 0,
    explanation:
      'En el perímetro urbano (ciudad), los triángulos de seguridad deben colocarse a una distancia aproximada de diez metros del vehículo averiado.',
  },
  {
    id: 98,
    topic: 'Ley 431',
    question: '¿Por qué se debe apagar el motor cuando se carga combustible?',
    options: [
      'Para ahorrar combustible.',
      'Para evitar ruidos innecesarios.',
      'Porque la ley lo establece.',
    ],
    correctAnswer: 2,
    explanation:
      'Se debe apagar el motor al cargar combustible porque la ley lo establece como medida de seguridad para prevenir incendios o explosiones.',
  },
  {
    id: 99,
    topic: 'Ley 431',
    question:
      '¿En qué situaciones el conductor tiene derecho de paso preferencial?',
    options: [
      'Cuando cruza cualquier calle en los lugares señalizado',
      'Donde haya semáforo peatonal en luz verde.',
      'Cuando el agente de tránsito lo indique.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'El derecho de paso preferencial aplica en todas las situaciones mencionadas, incluyendo semáforos peatonales y la indicación del agente de tránsito.',
  },
  {
    id: 100,
    topic: 'Ley 431',
    question: '¿Qué significa estacionarse?',
    options: [
      'Detener un vehículo en la vía pública con o sin el conductor dentro de él ',
      'Ubicar el vehículo en un lugar determinado.',
      'Paralizar un vehículo en la vía pública, con o sin el conductor, por un período mayor que el necesario para dejar o recibir pasajeros.',
    ],
    correctAnswer: 0,
    explanation:
      'Estacionar es inmovilizar el vehículo por un tiempo más largo del necesario para la simple detención de ascenso o descenso de pasajeros.',
  },
  {
    id: 101,
    topic: 'Ley 431',
    question: '¿Qué es intersección?',
    options: [
      'El área común de calzadas que no se cruzan o divergen',
      'Punto de convergencia de dos o más vías, para su unión o cruce entre si. ',
      'La línea perpendicular a la calzada, demarcada o imaginaria que determina las áreas con    sentido de tránsito opuesto ',
    ],
    correctAnswer: 1,
    explanation:
      'Una intersección es el área donde dos o más calzadas se unen, cruzan o dividen.',
  },
  {
    id: 102,
    topic: 'Ley 431',
    question: '¿Qué es línea de pare o de detención?',
    options: [
      'Lugar donde los vehículos deben de parar, para ceder el paso a los vehículos o peatones.',
      'El paso de cebra.',
      'Es la línea paralela al vehículo, a menos de un metro después del paso de peatones.',
    ],
    correctAnswer: 0,
    explanation:
      'La línea de pare o de detención indica el lugar donde el conductor debe detener completamente el vehículo para ceder el paso, ya sea a otros vehículos o a peatones.',
  },
  {
    id: 103,
    topic: 'Ley 431',
    question: ' ¿Cuáles prohibiciones normativas son correctas para las intersecciones?',
    options: [
      'No aventajar, no girar en U, no estacionar, no cambiar de carril.',
      'No aventajar, no girar a la izquierda, solo a la derecha',
      'No cruzar en rojo, no aventajar, no hay paso de autos',
    ],
    correctAnswer: 0,
    explanation:
      'En intersecciones está prohibido aventajar, girar en U, estacionar y cambiar de carril (se elige la opción que agrupa correctamente varias acciones prohibidas).',
  },
  {
    id: 104,
    topic: 'Ley 431',
    question:
      '¿De qué color deben ser las luces bajas o altas que proyectan hacia adelante los vehículos?',
    options: ['Blancas.', 'Blancas o amarillas.', 'Rojos o amarillas.'],
    correctAnswer: 0,
    explanation:
      'Las luces delanteras (bajas o altas) deben ser de color blanco o amarillo.',
  },
  {
    id: 105,
    topic: 'Ley 431',
    question: '¿De qué color deben ser las luces de pide vía?',
    options: ['Blancas.', 'Amarillas.', 'Rojas.'],
    correctAnswer: 1,
    explanation:
      'Las luces de pide vía (direccionales) deben ser de color amarillo.',
  },
  {
    id: 106,
    topic: 'Ley 431',
    question:
      '¿Qué luces no pueden llevar por la noche el vehículo en las carreteras al circular por un poblado?',
    options: ['Luces altas.', 'Luces bajas.', 'Cualquier tipo de luz.'],
    correctAnswer: 0,
    explanation:
      'En poblados (zonas urbanas) no se deben usar las luces altas para evitar encandilar a otros conductores y peatones.',
  },
  {
    id: 107,
    topic: 'Ley 431',
    question:
      '¿En qué horario se deben encender las luces cuando se está circulando?',
    options: [
      'Entre las seis de la mañana y seis de la tarde.',
      'Entre las cinco de la mañana y seis de la tarde.',
      'Entre las seis de la tarde y seis de la mañana.',
    ],
    correctAnswer: 2,
    explanation:
      'Las luces deben encenderse durante el periodo comprendido entre las seis de la tarde y las seis de la mañana.',
  },
  {
    id: 108,
    topic: 'Ley 431',
    question:
      '¿Qué debe de hacer el conductor ante la presencia de régimen preferente en el mismo sentido?',
    options: [
      'Acelerar y circular delante del vehículo de emergencia.',
      'Frenar bruscamente.',
      'Conducir el vehículo lo más a la izquierda o a la derecha posible, con el objeto de despejar la vía.',
    ],
    correctAnswer: 2,
    explanation:
      'El conductor debe facilitar el paso a los vehículos de régimen preferente moviéndose lo más posible a un lado de la vía.',
  },
  {
    id: 109,
    topic: 'Ley 431',
    question:
      '¿En qué circunstancias es obligatorio el uso del sistema de luces?',
    options: [
      'En cuanto las condiciones meteorológicas lo exijan.',
      'En tiempos de lluvia, humo y polvo.',
      'Cuando circule en sentido contrario de manera autorizada.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'El uso del sistema de luces es obligatorio en todas las circunstancias mencionadas que reduzcan la visibilidad.',
  },
  {
    id: 110,
    topic: 'Ley 431',
    question: '. ¿En qué lugares es prohibido estacionarse? ',
    options: [
      'Frente a garaje, hidrante, frente a hospitales.',
      'De siete pm a 6 pm en las vías principales ',
      'Donde los CPF lo impidan .',
    ],
    correctAnswer: 0,
    explanation:
      'Está prohibido estacionar en zonas residenciales y cerca de hospitales (entre otros lugares).',
  },
  {
    id: 111,
    topic: 'Ley 431',
    question: '¿Cómo debe estacionarse en una carretera?',
    options: [
      'Fuera de la calzada, dejando libre el arcén.',
      'Por el lado izquierdo, sin obstaculizar la libre circulación.',
      'Si no voy a tardar lo hago un poco a la orilla ',
    ],
    correctAnswer: 0,
    explanation:
      'En carretera, el estacionamiento debe ser fuera de la calzada, sin invadir el arcén.',
  },
  {
    id: 112,
    topic: 'Ley 431',
    question:
      ' ¿En cuáles de las circunstancias el vehículo será trasladado al depósito?',
    options: [
      'Por exceso de pasajero.',
      'Cuando sea estacionado en lugares no autorizado',
      'Por no andar luces de pide vía. ',
      'Todas las anteriores.',
    ],
    correctAnswer: 1,
    explanation:
      'El vehículo puede ser retenido y trasladado al depósito por cualquiera de las infracciones o situaciones graves mencionadas (exceso de pasajeros, embriaguez, falta de seguro, entre otras).',
  },
  {
    id: 113,
    topic: 'Ley 431',
    question:
      '¿De cuánto es el término de Ley 431, para inscripción de cambio de propietario?',
    options: ['90 días.', '60 días.', '30 días.'],
    correctAnswer: 1,
    explanation:
      'El término establecido por la Ley 431 para inscribir el cambio de propietario de un vehículo es de 30 días.',
  },
  {
    id: 114,
    topic: 'Ley 431',
    question: '¿En qué circunstancia debo apagar el motor del vehículo?',
    options: [
      'Cuando estoy a la bahía de buses.',
      'En lugares cerrados.',
      'Cuando abordo un pasajero.',
    ],
    correctAnswer: 1,
    explanation:
      'Se debe apagar el motor del vehículo cuando se esté en lugares cerrados para evitar la acumulación de gases tóxicos.',
  },
  {
    id: 115,
    topic: 'Ley 431',
    question: '. ¿Cuándo puedo circular en retroceso?',
    options: [
      'Cuando me equivoque de paso en una intersección. ',
      'Para cambiar de carril.',
      'Para estacionarse.',
    ],
    correctAnswer: 0,
    explanation:
      'Un vehículo pierde la preferencia de paso en la rotonda cuando cede el paso en una intersección dentro de ella.',
  },
  {
    id: 116,
    topic: 'Ley 431',
    question: '¿Qué es acera?',
    options: [
      'Espacio para que caminen los niños en bicicleta.',
      'Parte superior de la vía destinada a la circulación peatonal.',
      'Espacio para que circulen los patinadores. ',
    ],
    correctAnswer: 1,
    explanation:
      'La acera es la parte superior de la vía destinada exclusivamente a la circulación peatonal.',
  },
  {
    id: 117,
    topic: 'Ley 431',
    question: '¿Cuál es la velocidad máxima al circular en una zona escolar?',
    options: ['45 km por hora.', '30 km por hora.', '25 km por hora.'],
    correctAnswer: 2,
    explanation:
      'La velocidad máxima permitida al circular en una zona escolar, con presencia de alumnos, es de 25 km por hora.',
  },
  {
    id: 118,
    topic: 'Ley 431',
    question: '¿Cuál es la velocidad máxima al circular en cuestas?',
    options: [
      '50 km por hora.',
      '35 km por hora.',
      'No hay velocidad establecida.',
    ],
    correctAnswer: 2,
    explanation:
      'La velocidad máxima al circular en cuestas es de 35 km por hora.',
  },
  {
    id: 119,
    topic: 'Ley 431',
    question:
      '¿Qué carril debe circular si usted conduce a una velocidad inferior a la establecida por la  de tránsito?',
    options: ['Carril izquierdo.', 'Carril derecho.', 'Carril del centro.'],
    correctAnswer: 1,
    explanation:
      'Si se conduce a una velocidad inferior a la establecida, se debe circular siempre por el carril derecho.',
  },
  {
    id: 120,
    topic: 'Ley 431',
    question: '¿Cuáles de estas reglas debe aplicar para circular en rotonda?',
    options: [
      'No Cambiar de Carril.',
      'No Estacionarse.',
      'No Retroceder.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'En las rotondas, se debe cumplir con todas las reglas mencionadas: no cambiar de carril, no estacionar y no retroceder.',
  },
  {
    id: 121,
    topic: 'Ley 431',
    question: '¿A qué lado se debe de bajar el pasajero?',
    options: ['Puerta izquierda.', 'Puerta derecha.'],
    correctAnswer: 1,
    explanation:
      'El pasajero debe bajar del vehículo siempre por la puerta derecha (lado de la acera o berma) para garantizar su seguridad y no exponerse al tráfico.',
  },
  {
    id: 122,
    topic: 'Ley 431',
    question: '¿Al bajar de los vehículos, qué deben hacer los peatones?',
    options: [
      'Deben cruzar inmediatamente por delante del vehículo que bajó.',
      'Deben cruzar inmediatamente por detrás del vehículo que bajó.',
      'Debe esperar que el vehículo del que bajó avance hasta tener la suficiente visibilidad para cruzar la vía.',
    ],
    correctAnswer: 2,
    explanation:
      'El peatón debe esperar a que el vehículo se retire para asegurar la visibilidad total antes de cruzar la vía.',
  },
  {
    id: 123,
    topic: 'Ley 431',
    question:
      '¿Quién tiene preferencia en una pendiente estrecha y hacia arriba?',
    options: [
      'El que va subiendo.',
      'El que va bajando.',
      'El que entró primero.',
    ],
    correctAnswer: 0,
    explanation:
      'En una pendiente estrecha, el vehículo que va subiendo tiene preferencia sobre el que va bajando.',
  },
  {
    id: 124,
    topic: 'Ley 431',
    question:
      '¿Cuándo puede aventajar a un vehículo lento que ya ocasionó una fila y hay línea continua?',
    options: [
      'Cuando él se hace a un lado y permite el paso.',
      'Cuando usted percibe que no hay peligro.',
      'Debe esperar a que la señal lo permita.',
    ],
    correctAnswer: 0,
    explanation:
      'A pesar de la línea continua (que prohíbe adelantar), se permite aventajar a un vehículo lento si este se orilla voluntariamente y cede el paso.',
  },

  {
    id: 125,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debe hacer usted si su automóvil, se desvía hacia un lado cuando frena?',
    options: [
      'Revisar el sistema de dirección, presión de llantas y darle alinear.',
      'Bombear el pedal al frenar.',
      'Frenar con más suavidad para evitar que se haga a un lado.',
    ],
    correctAnswer: 0,
    explanation:
      'Si el vehículo se desvía al frenar, se debe revisar la presión de los neumáticos, la alineación y el sistema de dirección.',
  },
  {
    id: 126,
    topic: 'Vehiculo Liviano',
    question:
      '¿A qué se debe que su camioneta se desvía hacia un lado cuando usted frena?',
    options: [
      'Severo desgaste de friccion.',
      'Desperfecto en el sistema de dirección.',
      'Desgaste de llanta.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'El desvío al frenar puede deberse a problemas con el servofreno, la dirección o el desgaste de las llantas (Todas las anteriores).',
  },
  {
    id: 127,
    topic: 'Vehiculo Liviano',
    question: '¿Qué cosas debe revisar diario a su vehículo?',
    options: [
      'Nivel de aceite, nivel líquido de frenos, nivel hidráulico, batería, enfriamiento, correas.',
      'Los vehículos nuevos no se revisan diariamente.',
      'Las pistones, válvulas, líquido de frenos.',
    ],
    correctAnswer: 0,
    explanation:
      'Diariamente se deben revisar los fluidos esenciales como aceite, líquido de frenos, hidráulico, el estado de la batería, enfriamiento y las correas.',
  },
  {
    id: 128,
    topic: 'Vehiculo Liviano',
    question:
      '¿En qué orden se realizan los ajustes previos que debe hacer al subir al vehículo?',
    options: [
      'Espejos retrovisores, cinturón de seguridad, reposa cabezas, asiento.',
      'Cinturón de seguridad, espejos retrovisores, asiento, reposa cabeza.',
      'Asiento, reposa cabeza, espejos retrovisores, cinturón de seguridad.',
    ],
    correctAnswer: 2,
    explanation:
      'El orden correcto para realizar los ajustes es: Asiento, reposa cabezas, espejos retrovisores y, finalmente, el cinturón de seguridad.',
  },
  {
    id: 129,
    topic: 'Vehiculo Liviano',
    question: '¿Cuáles son elementos de seguridad activa en la conducción?',
    options: [
      'Bola de aire, cinturón de seguridad, espejos retrovisores, parabrisas.',
      'Llantas en buen estado, parabrisas, sistema de luces.',
      'Un asiento con apoya-cabeza ajustado en forma apropiada.',
    ],
    correctAnswer: 1,
    explanation:
      'Los elementos de seguridad activa buscan prevenir accidentes. Estos incluyen llantas, parabrisas y el sistema de luces.',
  },
  {
    id: 130,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuáles son los principales indicadores (testigos) a los que debe prestar atención el tablero del vehículo?',
    options: [
      'Tacómetro, velocímetro, combustible, temperatura, carga, aceite, frenos.',
      'Aire acondicionado, temperatura, bolsa de aire, batería, odómetro.',
      'Manos libras, temperatura, GPS, control de volumen y frenos, odómetro.',
    ],
    correctAnswer: 0,
    explanation:
      'Los indicadores esenciales son tacómetro, velocímetro, combustible, temperatura, carga, aceite y frenos.',
  },
  {
    id: 131,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuál es la forma correcta de comprobar que el vehículo se encuentra en neutro o punto muerto?',
    options: [
      'Halar y empujar la palanca de velocidades, hacia atrás y adelante y posicionarla al centro del recorrido.',
      'Halar la palanca de velocidades, hacia izquierda y derecha y si recorre libre está en el lugar indicado.',
      'Cualquier forma es igual, la segunda es mejor.',
    ],
    correctAnswer: 1,
    explanation:
      'Se comprueba moviendo la palanca libremente de izquierda a derecha. Si recorre libremente, está en neutro.',
  },
  {
    id: 132,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuáles de las siguientes afirmaciones son verdaderas en el uso de los frenos, en los vehículos livianos?',
    options: [
      'Los frenos ABS tienen impiden que las ruedas se bloqueen al frenar y aseguran una frenada más eficiente',
      'El consumo del líquido de frenos depende de la cantidad e intensidad de las frenadas.',
      'El freno hidráulico bloquea las llantas y permite detenerse en menos espacio.',
    ],
    correctAnswer: 0,
    explanation:
      'Las tres afirmaciones son correctas: el ABS evita el bloqueo, el consumo de líquido depende de las frenadas y el freno hidráulico es eficiente (Todas las anteriores).',
  },
  {
    id: 133,
    topic: 'Vehiculo Liviano',
    question:
      '¿En qué circunstancias debe utilizar el freno de mano, en un vehículo liviano?',
    options: [
      'Al estacionar en pendiente, Al estacionarse, Al estacionarse en bajada.',
      'Al esperar en un semáforo, cuando fallan los frenos de servicio.',
      'Todas las anteriores.',
    ],
    correctAnswer: 2,
    explanation:
      'El freno de mano se usa siempre al estacionar (en pendiente o no) y como auxiliar si fallan los frenos de servicio (Todas las anteriores).',
  },
  {
    id: 134,
    topic: 'Vehiculo Liviano',
    question: '¿En qué lugares está prohibido utilizar la bocina (pito)?',
    options: [
      'En hospitales, En zonas de escuelas, iglesias, cementerios.',
      'En zonas comerciales, iglesias, cementerios.',
      'En los desfiles patrios, y caminos solitarios.',
    ],
    correctAnswer: 0,
    explanation:
      'Está prohibido utilizar la bocina en zonas de sensibilidad acústica como escuelas, iglesias y cementerios.',
  },
  {
    id: 135,
    topic: 'Vehiculo Liviano',
    question: '¿Cuáles son las tres funciones básicas del aceite?',
    options: [
      'Limpia, lubrica y ayuda al enfriamiento.',
      'Solamente lubrica las piezas del motor.',
      'Lubrica y auxilia la combustión.',
    ],
    correctAnswer: 0,
    explanation:
      'Las tres funciones principales del aceite son limpiar, lubricar y contribuir a la refrigeración (enfriamiento) del motor.',
  },
  {
    id: 136,
    topic: 'Vehiculo Liviano',
    question: '¿Qué es y cuál es la función del cinturón de seguridad?',
    options: [
      'Un dispositivo de seguridad activa que se usa para evitar multas.',
      'Es un elemento de seguridad pasiva que evita que las personas se lesionen en una colisión.',
      'Es un dispositivo de seguridad que se acciona solo cuando se conduce en carreteras.',
    ],
    correctAnswer: 1,
    explanation:
      'El cinturón de seguridad es un elemento de seguridad pasiva diseñado para evitar o reducir las lesiones de los ocupantes en caso de colisión.',
  },
  {
    id: 137,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuál es la función de los espejos retrovisores externos y cómo deben ajustarse?',
    options: [
      'Mirar cuando se va a cambiar de carril, se deben poner lo más abiertos posible para ver mejor y se observan solo en caso necesario.',
      'Permiten una visión trasera lateral, se ajustan con un punto de referencia del vehículo y se deben revisar al menos cada 30 segundos.',
      'Sirven para observar a los lados y se deben regular cerrados para observar lo más cerca del vehículo.',
    ],
    correctAnswer: 1,
    explanation:
      'Los espejos retrovisores externos se ajustan con una pequeña referencia del vehículo y deben revisarse frecuentemente para mantener una visión trasera lateral constante.',
  },
  {
    id: 138,
    topic: 'Vehiculo Liviano',
    question: '¿Qué espejo retrovisor debo usar primero al cambiar de carril?',
    options: [
      'Cualquiera, no es importante usar uno u otro.',
      'El interno, es más preciso, los otros son opcionales.',
      'Los externos, proporcionan la presencia más cercana a nuestro vehículo.',
    ],
    correctAnswer: 2,
    explanation:
      'Los espejos retrovisores externos son los más importantes al cambiar de carril, ya que proporcionan información sobre los vehículos que están más cerca de nosotros.',
  },
  {
    id: 139,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuál es la posición de las manos que más se sugiere en el uso de las manos en el timón?',
    options: [
      'La posición 10-10 con el método de hale y empuje para evitar cruzar las manos.',
      'La posición 09 y 15 sobre el eje del timón, sobre todo si tiene bolsa de aire.',
      'Cada quien lo toma como se siente más cómodo eso garantiza pericia en el uso del timón.',
    ],
    correctAnswer: 0,
    explanation:
      'La posición de las manos a las 9 y 3 (o 9 y 15 en formato horario) sobre el timón es la más segura, especialmente en vehículos con bolsa de aire.',
  },
  {
    id: 140,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debe hacer si estaciona su vehículo en pendiente hacia abajo?',
    options: [
      'Girar las ruedas delanteras al borde de la acera o cuneta.',
      'Apagar el motor y ubicar el cambio en retroceso.',
      'Dejar puesto el freno de mano o emergencia.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Para estacionar en pendiente hacia abajo, se deben realizar todas las acciones mencionadas: girar las ruedas, poner el motor en retroceso (o la marcha más baja) y usar el freno de mano.',
  },
  {
    id: 141,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debe hacer si estaciona el vehículo en pendiente hacia arriba?',
    options: [
      'Girar las ruedas delanteras hacia la izquierda.',
      'Apagar motor y ubicar cambio en primera.',
      'Dejar puesto el freno de mano o emergencia.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Para estacionar en pendiente hacia arriba, se deben realizar todas las acciones mencionadas: girar las ruedas, poner el motor en primera y usar el freno de mano.',
  },
  {
    id: 142,
    topic: 'Vehiculo Liviano',
    question:
      '¿A qué se le llama puntos ciegos o puntos muertos en el vehículo?',
    options: [
      'Son los que genera la velocidad y se refiere a los detalles que se nos escapan.',
      'Son áreas a los lados y atrás del vehículo que no logramos ver con los retrovisores.',
      'Son los defectos que generan los espejos convencionales, por eso se deben cámaras de retroceso.',
    ],
    correctAnswer: 1,
    explanation:
      'Los puntos ciegos son las áreas alrededor del vehículo que no son visibles directamente a través de los espejos retrovisores.',
  },
  {
    id: 143,
    topic: 'Vehiculo Liviano',
    question: '¿Cuál es la forma más segura de frenar a alta velocidades?',
    options: [
      'Siempre para frenar y evitar que el vehículo se apague se debe presionar el clucht y después el freno.',
      'Cuando se va rápido se debe presionar el clucht bajar un cambio y después presionar el freno.',
      'Aplico el freno suavemente, al percibir reducción de velocidad se presiona el clucht y se aprovecha para bajar un cambio a la vez.',
    ],
    correctAnswer: 2,
    explanation:
      'La técnica más segura es frenar suavemente, reducir la velocidad y presionar el embrague (clutch) mientras se aprovecha para bajar un cambio a la vez.',
  },
  {
    id: 144,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué conductas hacen a un buen conductor de un vehículo liviano?',
    options: [
      'Conduce con prudencia y hace todo lo posible por evitar accidentes.',
      'Es considerado y amable con los demás conductores y con los peatones.',
      'Respeta la Ley de tránsito, es cortés.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Un buen conductor debe tener todas las conductas mencionadas: prudencia, consideración, amabilidad y respeto a la ley (Todas las anteriores).',
  },
  {
    id: 145,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué medidas de seguridad se deben adoptar al momento que el vehículo liviano sufre desperfecto mecánico que lo imposibilite sacarlo de la vía?',
    options: [
      'Activar luces laterales y llamar al mecánico.',
      'Colocar triángulos detrás y delante del vehículo a 10 metros y luces de emergencia.',
      'Activar luces delanteras y esperar el rescate.',
    ],
    correctAnswer: 1,
    explanation:
      'Se deben utilizar los triángulos de seguridad (colocados a 10 metros en zonas urbanas) y activar las luces de emergencia.',
  },
  {
    id: 146,
    topic: 'Vehiculo Liviano',
    question: '¿Qué acciones contribuyen a la seguridad vial de un conductor?',
    options: [
      'Respetar el derecho de paso de los peatones.',
      'Respetar las señales de tránsito.',
      'No conducir utilizando manualmente teléfonos móviles.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todas las acciones mencionadas son fundamentales para contribuir a la seguridad vial (Todas las anteriores).',
  },
  {
    id: 147,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué medidas de seguridad se deben adoptar al cambiar una llanta?',
    options: [
      'Motor apagado, vehículo con cambio, freno de mano activado, llantas aseguradas.',
      'Poner la señalización, ciudad 10 mts al lado de la circulación, carretera 30-50 mts.',
      'Trabajar frente a la circulación vehicular.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todas las medidas mencionadas son necesarias: asegurar el vehículo y señalizar correctamente la zona (Todas las anteriores).',
  },
  {
    id: 148,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué tipo de zapatos son adecuados para conducir, en el uso de los pedales?',
    options: [
      'Chinelasy sandalias, evitar tacones.',
      'Zapatos de tacones altos, zapatos de vaquetas, tenis.',
      'No existe un zapato específico, todo depende de las habilidades de la persona.',
    ],
    correctAnswer: 2,
    explanation:
      'La elección del calzado para conducir depende de la persona, ya que no existe un zapato específico prohibido por ley.',
  },
  {
    id: 149,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debería hacer para ayudar a controlar la velocidad de su vehículo cuando desciende una pendiente prolongada?',
    options: [
      'Sujetar el timón firmemente.',
      'Utilizar freno y cambio bajo.',
      'Seleccionar neutro.',
    ],
    correctAnswer: 1,
    explanation:
      'Para controlar la velocidad en pendientes prolongadas se debe utilizar una combinación de frenado y el uso de marchas bajas (freno de motor).',
  },
  {
    id: 150,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debería hacer usted cuando las ruedas traseras de su vehículo resbalan hacia la izquierda?',
    options: [
      'Girar suavemente el timón, hacia la izquierda para retomar la dirección.',
      'Usar el embrague y frenar firmemente.',
      'Girar hacia la derecha.',
    ],
    correctAnswer: 0,
    explanation:
      'Para corregir un derrape donde la parte trasera (ruedas) se va a la izquierda, debes girar el timón suavemente hacia el lado del resbalón, es decir, a la izquierda.',
  },
  {
    id: 151,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debería hacer usted para corregir un coletazo de las ruedas traseras?',
    options: [
      'No girar el volante del vehículo para nada.',
      'Girar el volante hacia el lado opuesto al coletazo.',
      'Girar el volante hacia el lado que se desplaza la cola del vehículo.',
    ],
    correctAnswer: 2,
    explanation:
      'Para corregir un coletazo (derrape), debes girar el volante rápidamente hacia el mismo lado que se desplaza la cola del vehículo (dirección del derrape).',
  },
  {
    id: 152,
    topic: 'Vehiculo Liviano',
    question: '¿En qué afecta la visión conducir a exceso de velocidad?',
    options: [
      'A la mayoría de los conductores se les cansa la vista después de conducir más o menos media hora.',
      'El campo visual se reduce.',
      'Resulta más fácil percibir movimientos en la carretera.',
    ],
    correctAnswer: 1,
    explanation:
      'A medida que la velocidad aumenta, el campo de visión del conductor se reduce (efecto túnel), dificultando la percepción lateral y el entorno.',
  },
  {
    id: 153,
    topic: 'Vehiculo Liviano',
    question: '¿Cuáles son los síntomas más comunes del cansancio?',
    options: [
      'Calor y agresividad.',
      'Dificultad para mantener la dirección.',
      'Los párpados se cierran.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Los síntomas comunes del cansancio incluyen dificultad para mantener la dirección, somnolencia (párpados pesados), y puede llevar a la irritabilidad (Todas las anteriores).',
  },
  {
    id: 154,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debería hacer usted ante un conductor agresivo o temerario?',
    options: [
      'Hacerle saber cómo se siente.',
      'Encender y apagar sus luces delanteras repetidamente.',
      'No reaccionar a la provocación.',
    ],
    correctAnswer: 2,
    explanation:
      'La mejor acción es mantener la calma, no reaccionar a la provocación, y evitar el contacto visual para desescalar la situación.',
  },
  {
    id: 155,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debería hacer usted, cuando es cegado por las luces de otro vehículo que viene en sentido contrario?',
    options: [
      'Observar fijamente las luces.',
      'Acelerar para pasar rápido la situación.',
      'Disminuir la velocidad hasta detenerse si la ceguera fue total.',
    ],
    correctAnswer: 2,
    explanation:
      'Ante el deslumbramiento, se debe disminuir la velocidad y, si es necesario, detenerse por completo para recuperar la visión y evitar un accidente.',
  },
  {
    id: 156,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debería hacer usted, cuando el vehículo que viene en sentido contrario le invade el carril?',
    options: [
      'Bajar la velocidad y hacerse a la derecha lo más pronto posible, si es posible salirse de la vía.',
      'Hacerme en el carril de él para evitar chocar de frente.',
      'Alertar realizando cambio de luces.',
    ],
    correctAnswer: 0,
    explanation:
      'La prioridad es reducir la velocidad y desviarse hacia la derecha, incluso saliéndose de la vía si es necesario para evitar la colisión frontal.',
  },
  {
    id: 157,
    topic: 'Vehiculo Liviano',
    question:
      'Las personas civiles (abanderados), que regulan el paso vehicular en zonas donde se realizan obras se consideran como:',
    options: [
      'Reguladores de tránsito.',
      'Inspectores de obras.',
      'Constructores.',
    ],
    correctAnswer: 0,
    explanation:
      'Las personas civiles que regulan el tráfico en zonas de obras se consideran **Reguladores de Tránsito** y sus indicaciones deben ser acatadas.',
  },
  {
    id: 158,
    topic: 'Vehiculo Liviano',
    question:
      'La regulación vial y el control de documentos del vehículo y del conductor, le corresponde a:',
    options: [
      'Seguridad Pública.',
      'Agentes de tránsito.',
      'Toda la Policía Nacional.',
    ],
    correctAnswer: 2,
    explanation:
      'La regulación vial y el control de documentos es responsabilidad de **Toda la Policía Nacional**.',
  },
  {
    id: 159,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuándo es más probable que usted pierda concentración al conducir?',
    options: [
      'Cuando va conversando o escuchando música a alto volumen.',
      'Cuando viaja solo a altas horas de la noche.',
      'Cuando utiliza un teléfono celular.',
    ],
    correctAnswer: 2,
    explanation:
      'El uso del teléfono celular es la causa más probable de pérdida de concentración, ya que requiere atención visual, manual y cognitiva.',
  },
  {
    id: 160,
    topic: 'Vehiculo Liviano',
    question:
      '¿En qué situación puede usted hacer uso de la bocina del vehículo?',
    options: [
      'Cuando saluda a otros usuarios de la vía.',
      'Cuando considero que otro vehículo no me ha visto o estoy en su punto ciego.',
      'Cuando desea manifestar su disgusto.',
    ],
    correctAnswer: 1,
    explanation:
      'La bocina (pito) debe usarse exclusivamente para prevenir accidentes o para advertir a otros usuarios que no nos han visto.',
  },
  {
    id: 161,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuándo los conductores de vehículos deben ceder el paso a los conductores de buses?',
    options: [
      'Cuando salen de la bahía.',
      'Siempre que vayan circulando por la vía.',
      'Cuando cursan las intersecciones.',
    ],
    correctAnswer: 0,
    explanation:
      'Los demás vehículos deben ceder el paso a los autobuses que están saliendo de una bahía o parada designada.',
  },
  {
    id: 162,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuándo debe tener usted especial cuidado con los motociclistas?',
    options: [
      'Todo el tiempo.',
      'Cuando circulan sin casco.',
      'Cuando viajan dos en la moto.',
    ],
    correctAnswer: 0,
    explanation:
      'Se debe tener especial cuidado con los motociclistas en todo momento, debido a su menor visibilidad y protección.',
  },
  {
    id: 163,
    topic: 'Vehiculo Liviano',
    question:
      '¿Qué debe hacer usted cuando un ciclista va adelante, y los dos van girar a la derecha?',
    options: [
      'Adelanta al ciclista antes del cruce.',
      'Rodea al ciclista en el cruce.',
      'Se mantiene detrás del ciclista hasta que éste haya girado.',
    ],
    correctAnswer: 2,
    explanation:
      'Debe mantenerse detrás del ciclista y cederle el paso hasta que haya completado su giro o se haya apartado, para garantizar su seguridad.',
  },
  {
    id: 164,
    topic: 'Vehiculo Liviano',
    question:
      '¿Cuáles son las medidas de seguridad, que debe incrementar en un lugar por donde transitan carretas o carretones?',
    options: [
      'Conducir a velocidad baja, e ir atento en la conducción.',
      'Acelerar para pasar rápido.',
      'Pitar para que se aparten.',
    ],
    correctAnswer: 0,
    explanation:
      'En áreas con carretas o carretones, se debe reducir la velocidad y aumentar la atención debido a la imprevisibilidad de estos vehículos.',
  },
  {
    id: 165,
    topic: 'Vehiculo Liviano',
    question:
      '¿En qué circunstancia usted detendría su vehículo sobre el paso peatonal?',
    options: [
      'Cuando no hay peatones esperando para cruzar.',
      'Durante la noche.',
      'Cuando ello sea necesario para evitar un accidente.',
    ],
    correctAnswer: 2,
    explanation:
      'La única circunstancia válida para detenerse sobre un paso peatonal es una emergencia que implique evitar un accidente.',
  },
  {
    id: 166,
    topic: 'Manejo Defensivo',
    question: '¿Cuál es elemento determinante en la prevención del accidente?',
    options: [
      'El ser humano y su educación.',
      'La vía y su correcta construcción.',
      'Las nuevas tecnologías en los vehículos.',
    ],
    correctAnswer: 0,
    explanation:
      'El factor humano y su educación son los elementos más determinantes en la prevención de accidentes, ya que las decisiones del conductor son clave.',
  },
  {
    id: 167,
    topic: 'Manejo Defensivo',
    question: '¿Qué es manejo defensivo?',
    options: [
      'Es conducir evitando accidentes a pesar de las acciones incorrectas de los demás usuarios y las condiciones adversas.',
      'Es salir a manejar confiando en nuestras destrezas sin importar el destino.',
      'Es protegerse con dispositivos especiales electrónicos que nos ayudan a evitar accidentes.',
    ],
    correctAnswer: 0,
    explanation:
      'El manejo defensivo es un conjunto de técnicas para conducir de forma segura, evitando accidentes a pesar de los errores de otros y las condiciones desfavorables.',
  },
  {
    id: 168,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles pueden ser las etapas de respuesta para evitar un accidente de tránsito?',
    options: [
      'Valorar la situación, ir atento a lo que se presente y hacer uso de la bocina.',
      'Reconocer el peligro, entender (organizar) la defensa, Actuar a tiempo.',
      'Conservar la calma y decidir lo más pronto posible.',
    ],
    correctAnswer: 1,
    explanation:
      'Las etapas clave son la detección del peligro, la comprensión de la amenaza (organizar la defensa), y la ejecución de la acción evasiva a tiempo.',
  },
  {
    id: 169,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles son los factores en el ser humano que ayudan a desarrollar una conducción defensiva?',
    options: [
      'Conocimiento, Alerta, Buen Juicio, Previsión, Agilidad.',
      'Buena salud, buena educación, cortesía todo el tiempo.',
      'Sentido común y un poco de suerte.',
    ],
    correctAnswer: 0,
    explanation:
      'Una conducción defensiva se basa en el conocimiento de las reglas, el estado de alerta constante, el buen juicio, la previsión de riesgos y la agilidad para responder.',
  },
  {
    id: 170,
    topic: 'Manejo Defensivo',
    question: '¿Por qué ocurre el choque con el vehículo que va adelante?',
    options: [
      'Por andar los frenos bajos e ir de prisa.',
      'Por no guardar la distancia, distraerse y no anticipar lo que pasa más adelante.',
      'Por el que el otro se detiene de pronto.',
    ],
    correctAnswer: 1,
    explanation:
      'El choque por alcance ocurre por la combinación de no mantener la distancia de seguridad adecuada, la distracción y la falta de anticipación a los eventos del tráfico.',
  },
  {
    id: 171,
    topic: 'Manejo Defensivo',
    question: '¿Qué es distancia de seguridad?',
    options: [
      'La que nos permite seguir un auto sin ser vistos.',
      'La que se guarda entre nosotros y el de adelante y que permita realizar las maniobras de forma segura.',
      'La que recorre el vehículo desde que lo freno hasta que se detiene.',
    ],
    correctAnswer: 1,
    explanation:
      'La distancia de seguridad es el espacio que permite realizar maniobras de frenado o evasión de manera segura respecto al vehículo de adelante.',
  },
  {
    id: 172,
    topic: 'Manejo Defensivo',
    question: '¿Qué es distancia de Reacción?',
    options: [
      'La que se recorre sin que me dé cuenta mientras hablo por teléfono.',
      'La que recorre el vehículo mientras estoy buscando aplicar el freno.',
      'La que se recorre mientras me anticipo viendo hacia adelante.',
    ],
    correctAnswer: 2,
    explanation:
      'La distancia de reacción es el espacio recorrido desde que el conductor percibe el peligro hasta que comienza a aplicar el freno (tiempo de reacción).',
  },
  {
    id: 173,
    topic: 'Manejo Defensivo',
    question: '¿Qué es distancia de frenado?',
    options: [
      'Espacio que recorre el vehículo desde que aplico el freno hasta que se detiene totalmente.',
      'Espacio determinado para detener el vehículo según la ley.',
      'La cantidad de metros que recorre la llanta dejando la huella cuando freno.',
    ],
    correctAnswer: 0,
    explanation:
      'La distancia de frenado es el espacio recorrido desde que se aplica el freno hasta la detención total del vehículo.',
  },
  {
    id: 174,
    topic: 'Manejo Defensivo',
    question: '¿De qué factores depende la distancia de frenado?',
    options: [
      'De la destreza del conductor para aplicar el freno a tiempo.',
      'De la proporción relativa entre el estado de los frenos y las condiciones del tránsito.',
      'Del peso, carga, velocidad y del estado de las llantas y la superficie sobre la que se frena.',
    ],
    correctAnswer: 2,
    explanation:
      'La distancia de frenado depende directamente de factores físicos del vehículo (peso, carga, velocidad, estado de llantas) y del entorno (superficie de frenado).',
  },
  {
    id: 175,
    topic: 'Manejo Defensivo',
    question:
      '¿Qué método es fácil y seguro para guardar la distancia de seguridad entre vehículos?',
    options: [
      'Calcular los metros entre vehículo y vehículo y acomodarnos según nuestra experiencia.',
      'Dejar el espacio necesario para que el que viene atrás no le dé por aventajarnos.',
      'Aplicar la regla del espacio (o método de los dos segundos).',
    ],
    correctAnswer: 2,
    explanation:
      'El método de los dos segundos es el más fácil y seguro para mantener la distancia de seguridad, adaptándose a la velocidad y las condiciones de la vía.',
  },

  {
    id: 176,
    topic: 'Manejo Defensivo',
    question:
      '¿Cómo se describe la regla del espacio o método de los dos segundos?',
    options: [
      'Apoyándonos en un punto de referencia calcular un tiempo mínimo de dos segundos entre los dos autos.',
      'Contar dos segundos por cada vehículo que circula cercano al nuestro.',
      'Aplicar un espacio delante de nuestro vehículo que podamos observar las llantas.',
    ],
    correctAnswer: 0,
    explanation:
      'El método de los dos segundos se calcula usando un punto de referencia en la vía (como un poste o letrero) y contando dos segundos después de que el vehículo de adelante pase por él. Si tu vehículo pasa antes de los dos segundos, estás demasiado cerca.',
  },
  {
    id: 177,
    topic: 'Manejo Defensivo',
    question:
      '¿Cómo evitar el choque con el vehículo que viene detrás del nuestro?',
    options: [
      'Guardando la distancia, haciendo las señales y no permitir se acerque mucho.',
      'Siempre le puedo culpar si anda las luces de freno en mal estado.',
      'No distraerme hablando por celular.',
    ],
    correctAnswer: 0,
    explanation:
      'Para evitar un choque por alcance trasero, la mejor defensa es mantener una distancia de seguridad apropiada con el vehículo de adelante para no frenar bruscamente, y señalizar todas las maniobras.',
  },
  {
    id: 178,
    topic: 'Manejo Defensivo',
    question: '¿Qué debemos hacer si un auto o moto nos sigue muy de cerca?',
    options: [
      'Acelerar para alejarnos.',
      'Hacernos a un lado, promoviendo nos aventaje.',
      'Frenar para asustarlo y que guarde distancia.',
    ],
    correctAnswer: 1,
    explanation:
      'Si otro vehículo te sigue muy de cerca (tailgating), la opción más segura es promover que te adelante (hacerte a un lado o reducir ligeramente la velocidad) para evitar la presión y el riesgo de choque trasero.',
  },
  {
    id: 179,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles son las medidas de seguridad para abordar con seguridad una intersección?',
    options: [
      'Bajar la velocidad, señalizar con tiempo si va a girar.',
      'Ubicar el carril según el giro y la vía, observar y atender la señal que regula.',
      'No confiar en la preferencia, fijarse en la circulación y pasar rápido.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todas las acciones son esenciales para abordar una intersección de manera segura: reducir la velocidad, señalizar, ubicarse correctamente, observar las señales y nunca asumir la preferencia (Todas las anteriores).',
  },
  {
    id: 180,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles son las causas que ocasión accidentes en una intersección?',
    options: [
      'Desatender el alto, querer cruzar en amarillo.',
      'Giro indebidos, invasión de carril, imprudencia peatonal, interceptar el paso.',
      'Cambios de carril y adelantamientos en intersecciones.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Los accidentes en intersecciones se deben a múltiples factores, incluyendo la desatención a señales (alto/amarillo), maniobras incorrectas (giros, invasión) y no ceder el paso (Todas las anteriores).',
  },
  {
    id: 181,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles son las reglas básicas para realizar giros a la derecha con alto?',
    options: [
      'Pongo la señal, observo y ejecuto.',
      'Señalizo, tomo mi carril con tiempo, atiendo la señal que regula, observo el área de la intersección y ejecuto.',
      'Pongo la señal, me ubico para doblar y doblo hacia donde haya espacio.',
    ],
    correctAnswer: 1,
    explanation:
      'El proceso correcto para un giro a la derecha es señalizar con anticipación, ubicarse correctamente en el carril derecho, atender cualquier señal de alto o ceda el paso, verificar el área y ejecutar el giro con seguridad.',
  },
  {
    id: 182,
    topic: 'Manejo Defensivo',
    question:
      '¿Qué carril debo usar si voy a girar a la izquierda desde una calle de dos carriles en el mismo sentido de circulación?',
    options: [
      'El carril derecho o el carril izquierdo da lo mismo.',
      'Debo ubicar el carril izquierdo con anticipación y desde allí realizar la maniobra.',
      'No debo seguir ninguna regla solo debo fijarme y ejecutar el giro.',
    ],
    correctAnswer: 1,
    explanation:
      'Para girar a la izquierda, siempre se debe usar el carril más cercano al eje central de la vía o el carril izquierdo, para no obstruir el tráfico que continúa recto o gira a la derecha.',
  },
  {
    id: 183,
    topic: 'Manejo Defensivo',
    question:
      '¿Hacia qué carril debo dirigirme en un giro a la izquierda si la vía a la que me dirijo tiene dos o más carriles en el mismo sentido?',
    options: [
      'Hacia el carril izquierdo siempre.',
      'Hacia el carril del centro.',
      'Hacia el carril derecho.',
    ],
    correctAnswer: 0,
    explanation:
      'Al completar un giro a la izquierda, se debe ingresar al carril más cercano al eje central de la nueva vía, que generalmente es el carril izquierdo.',
  },
  {
    id: 184,
    topic: 'Manejo Defensivo',
    question: '¿Por qué el choque de frente es el más destructivo?',
    options: [
      'Porque los conductores no miden las consecuencias.',
      'Porque las fuerzas de ambos vehículos se encuentran y se convierten en fuerzas destructivas de A hacia B y viceversa.',
      'Porque generalmente uno de los vehículos es el que invade carril.',
    ],
    correctAnswer: 1,
    explanation:
      'El choque frontal es el más destructivo porque la energía cinética de ambos vehículos se suma, resultando en un impacto de fuerza extrema.',
  },
  {
    id: 185,
    topic: 'Manejo Defensivo',
    question: '¿Cuál es la causa por las que produce un choque frontal?',
    options: [
      'Siempre sucede cuando el espacio es estrecho.',
      'La inestabilidad de las llantas al ir a velocidad alta.',
      'La invasión del carril contrario, por cualquier causa que originó la invasión de carril.',
    ],
    correctAnswer: 2,
    explanation:
      'La causa principal de un choque frontal es la invasión del carril contrario.',
  },
  {
    id: 186,
    topic: 'Manejo Defensivo',
    question:
      '¿Qué causales pueden llevar a un conductor invadir el carril contrario?',
    options: [
      'Ebriedad, somnolencia, aventajar sin visibilidad, estallido de llanta.',
      'Abordar mal una curva, adelantamientos prohibidos, defectuosos, o sin visibilidad, etc.',
      'Comportamientos temerarios, falta de control emocional.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todas las opciones mencionadas pueden ser causas que provocan la invasión del carril contrario (Todas las anteriores).',
  },
  {
    id: 187,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles son los pasos básicos para abordar con un vehículo, una curva a la derecha asfaltada?',
    options: [
      'Todas las curvas se abordan a baja velocidad y con cautela.',
      'Bajar la velocidad, colocarse cerca del borde derecho, al salir acelerar para estabilizar.',
      'Bajar la velocidad, ubicarse al centro de la carretera y salir al centro del carril y acelerando.',
    ],
    correctAnswer: 1,
    explanation:
      'En una curva a la derecha, se debe reducir la velocidad, ceñirse al borde derecho del carril y acelerar suavemente a la salida para estabilizar el vehículo.',
  },
  {
    id: 188,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles son los pasos básicos para abordar una curva a la derecha que no es pavimentada?',
    options: [
      'Todas las curvas se abordan a baja velocidad y con cautela.',
      'Bajar la velocidad, colocarse cerca del borde derecho, al romper el arco acelerar para estabilizar.',
      'Bajar la velocidad, ubicarse al centro de la carretera y romper hacia el centro del carril para salir acelerando.',
    ],
    correctAnswer: 2,
    explanation:
      'En curvas no pavimentadas a la derecha, se recomienda bajar la velocidad, ubicarse hacia el centro y acelerar hacia el centro del carril al salir para una mejor estabilidad.',
  },
  {
    id: 189,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles son los pasos básicos para abordar una curva a la izquierda que esta pavimentada?',
    options: [
      'Todas las curvas se abordan a baja velocidad y con cautela.',
      'Bajar la velocidad, colocarse al centro del carril, al romper el arco acelerar para estabilizar.',
      'Bajar la velocidad, ubicarse al centro de la carretera y romper hacia el centro del carril para salir acelerando.',
    ],
    correctAnswer: 1,
    explanation:
      'En curvas pavimentadas a la izquierda, se debe reducir la velocidad, ubicarse hacia el centro o el borde izquierdo del carril y acelerar a la salida (romper el arco).',
  },
  {
    id: 190,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles son los pasos básicos para abordar una curva a la izquierda que esta no es pavimentada?',
    options: [
      'Todas las curvas se abordan a baja velocidad y con cautela.',
      'Bajar la velocidad, parte derecha del carril, buscar el centro del carril y estabilizar al salir de la curva.',
      'Bajar la velocidad, ubicarse al centro de la vía y buscar el centro del carril para salir acelerando.',
    ],
    correctAnswer: 1,
    explanation:
      'En curvas no pavimentadas a la izquierda, la técnica recomendada es bajar la velocidad, mantener la parte derecha del carril y buscar el centro del carril para estabilizar el vehículo al salir.',
  },
  {
    id: 191,
    topic: 'Manejo Defensivo',
    question: '¿Cuáles son los errores más frecuentes al adelantar?',
    options: [
      'Salir muy de cerca del auto que deseamos adelantar, evita una buena visibilidad o regresar en caso necesario.',
      'No tomar en cuenta la potencia de nuestro vehículo en relación al que vamos adelantar.',
      'No considerar las prohibiciones por velocidad, empalmes, visibilidad, puentes, etc.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todos los puntos son errores frecuentes al adelantar: falta de visibilidad, cálculo incorrecto de potencia y no respetar las prohibiciones (Todas las anteriores).',
  },
  {
    id: 192,
    topic: 'Manejo Defensivo',
    question: '¿Qué debemos hacer cuando nos adelantan?',
    options: [
      'Bajar la velocidad, cargarnos a la derecha y facilitar la maniobra al que adelanta.',
      'Acelerar para evitar nos rebasen porque es peligroso.',
      'Nada, cada quien sabe los riesgos que asume al manejar.',
    ],
    correctAnswer: 0,
    explanation:
      'Cuando un vehículo te adelanta, debes reducir la velocidad, mantenerte a la derecha y facilitar su maniobra para que la ejecución sea lo más rápida y segura posible.',
  },
  {
    id: 193,
    topic: 'Manejo Defensivo',
    question:
      '¿Qué debo suponer cuando en sentido contrario circula un equipo agrícola o un vehículo lento?',
    options: [
      'Detrás de él vienen más vehículos similares a él y será una caravana.',
      'Detrás de él, vendrá seguramente algún vehículo más rápido y conductor impaciente y va aventajar.',
      'Nada, en las carreteras siempre hay espacio y no pasa nada con los tractores.',
    ],
    correctAnswer: 1,
    explanation:
      'Se debe suponer que detrás de un vehículo lento podría venir un conductor impaciente que intentará adelantarlo, aumentando el riesgo de un choque frontal o una maniobra inesperada.',
  },
  {
    id: 194,
    topic: 'Manejo Defensivo',
    question:
      '¿Por qué el peatón es más susceptible de sufrir un accidente grave?',
    options: [
      'Por la baja percepción de riesgo de conductores y peatones.',
      'Porque no todos los peatones conocen la ley y no se multan.',
      'Por indisciplinados, impredecibles, imprudentes y frágiles al ser golpeados.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      "El peatón es más susceptible debido a su vulnerabilidad física ('frágiles') y a los comportamientos erráticos ('indisciplinados, impredecibles') que contribuyen a los accidentes.",
  },
  {
    id: 195,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles de estas situaciones de riesgo usted identifica como situaciones de accidentes con peatones?',
    options: [
      'Usted se acerca a la parada del autobús en el carril contrario o detrás del mismo.',
      'Fila de autos estacionados en zona comercial.',
      'Peatón caminando de espaldas al trafico ya sea en carretera o en ciudad.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Todas estas situaciones representan un riesgo de accidente, ya que el peatón puede aparecer sorpresivamente por detrás de un autobús o un vehículo estacionado, o puede estar de espaldas al tráfico (Todas las anteriores).',
  },
  {
    id: 196,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuáles de estas situaciones de riesgo usted identifica como situaciones de accidentes con peatones?',
    options: [
      'Peatón detenido sobre la doble línea amarilla.',
      'Peatón caminando sobre la acera de frente al trafico.',
      'Peatón esperando en el semáforo peatonal.',
    ],
    correctAnswer: 0,
    explanation:
      'Un peatón detenido sobre la doble línea amarilla se encuentra en la vía de circulación, lo que es una situación de alto riesgo y potencial de accidente.',
  },
  {
    id: 197,
    topic: 'Manejo Defensivo',
    question: '¿Cuáles son las reglas básicas que debe aplicar en una rotonda?',
    options: [
      'Guiarse por las maniobras de otros conductores experimentados.',
      'Ser audaz para ingresar rápido y cuando está adentro ya lleva la preferencia.',
      'Anticipar el carril según su destino, ceder el paso a los que ya están adentro, respetar las reglas para intersecciones.',
    ],
    correctAnswer: 2,
    explanation:
      'Las reglas básicas son planificar la entrada (carril), ceder el paso a los vehículos que ya están dentro y respetar las normas generales de intersección.',
  },
  {
    id: 198,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuál es la función del carril de la derecha en una rotonda que tiene tres carriles de ingreso, dos de circulación interna y dos de salida?',
    options: [
      'Permite doblar hacia la derecha y continuar de frente.',
      'Solamente doblar a la derecha.',
      'Solamente continuar de frente.',
    ],
    correctAnswer: 1,
    explanation:
      'El carril de la derecha en una rotonda permite a los conductores tomar la primera salida a la derecha o continuar recto.',
  },
  {
    id: 199,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuál es la función del carril del centro en una rotonda que tiene tres carriles de ingreso, dos de circulación interna y dos de salida?',
    options: [
      'Solamente doblar a la derecha.',
      'Solamente doblar a la izquierda o retornar.',
      'Solamente pasar de frente por la parte externa de la rotonda.',
    ],
    correctAnswer: 2,
    explanation:
      'En este tipo de rotonda, el carril central se utiliza para pasar de frente (continuar recto) por la parte externa de la rotonda.',
  },
  {
    id: 200,
    topic: 'Manejo Defensivo',
    question:
      '¿Cuál es la función del carril izquierdo en una rotonda que tiene tres carriles de ingreso, dos de circulación interna y dos de salida?',
    options: [
      'Solamente para girar a la izquierda.',
      'Solamente para retornar, girar a la izquierda o pasar de frente.',
      'Solamente para retornar.',
    ],
    correctAnswer: 1,
    explanation:
      'El carril más a la izquierda se usa para tomar la salida a la izquierda, retornar o, en algunos diseños de rotonda, para pasar de frente.',
  },
  {
    id: 201,
    topic: 'Manejo Defensivo',
    question: '¿A qué velocidad se debe manejar en la noche?',
    options: [
      'A la velocidad que las luces le permiten ver y en ese espacio que detecta se pueda detener.',
      'A la velocidad que las señales de tránsito le permitan.',
      'A un treinta por ciento menos que la velocidad diurna.',
    ],
    correctAnswer: 0,
    explanation:
      'Se debe manejar a una velocidad que permita detener el vehículo dentro del área iluminada por las luces delanteras (visibilidad limitada).',
  },
  {
    id: 202,
    topic: 'Manejo Defensivo',
    question:
      '¿Qué debe hacer usted en una carretera de noche si encuentro un auto en sentido contrario con luces altas?',
    options: [
      'Pedirle el cambio de luces y si no accede dejarle las luces altas.',
      'Hacer el cambio de luces y continuar en mi carril.',
      'Observar mi carril con la ayuda de las luces de él, bajar la velocidad y luces, mirar a la línea de borde.',
    ],
    correctAnswer: 2,
    explanation:
      'Para evitar el deslumbramiento, se debe mirar brevemente al borde derecho de la vía, reducir la velocidad y utilizar como referencia las luces del otro vehículo.',
  },
  {
    id: 203,
    topic: 'Manejo Defensivo',
    question:
      '¿Por qué se debe ser cauteloso al aventajar un vehículo articulado en la carretera cuando es de noche?',
    options: [
      'Porque no me dejará adelantarlo, a ellos les da pena ser adelantados.',
      'Mis luces se le reflejan en su retrovisor externo y eso le afecta y mi visibilidad delantera es errática.',
      'Porque de noche los furgones caminan más rápido.',
    ],
    correctAnswer: 1,
    explanation:
      'El riesgo principal es que tus luces se reflejen en los espejos del camión, afectando su visión, y el tamaño del vehículo articulado dificulta el cálculo de la distancia y la visibilidad.',
  },
  {
    id: 204,
    topic: 'Manejo Defensivo',
    question: '¿Qué precauciones debo tomar al adelantar una motocicleta?',
    options: [
      'Que mi velocidad sea superior a la de la motocicleta.',
      'Las mismas que aplico cuando aventajo un vehículo de cuatro ruedas.',
      'Ninguna las motos en la carretera siempre se apartan.',
    ],
    correctAnswer: 1,
    explanation:
      'Aunque las motocicletas son más pequeñas, se deben aplicar las mismas precauciones de distancia y visibilidad que al adelantar a cualquier otro vehículo de cuatro ruedas.',
  },
  {
    id: 205,
    topic: 'Manejo Defensivo',
    question: '¿Qué es conductor desde el concepto de manejo defensivo?',
    options: [
      'Persona con la capacidad guiar un vehículo, sin ocasionar; infracciones, accidentes, descortesías, maltrato al vehículo o a los otros usuarios.',
      'Persona natural autorizada mediante licencia a la conducción de vehículos según la categoría autorizada.',
      'Persona que dice que nunca ha tenido un accidente a pesar de haber manejado tomado.',
    ],
    correctAnswer: 0,
    explanation:
      'Un conductor defensivo es aquel que logra guiar su vehículo de manera segura, evitando no solo accidentes sino también infracciones y comportamientos descorteses.',
  },
  {
    id: 206,
    topic: 'Manejo Defensivo',
    question:
      '¿Qué efectos tiene la ingesta de alcohol en la persona, que le impiden conducir un vehículo?',
    options: [
      'Desinhibe la personalidad y le facilita el dominio.',
      'La mayoría de las personas con experiencia toman y manejan y no les pasa nada.',
      'Falsa sensación de confianza, visión y audición defectuosa, pérdida del sentido, error al juzgar las distancias, velocidades, etc.',
    ],
    correctAnswer: 2,
    explanation:
      'El alcohol afecta negativamente las capacidades de conducción, causando una falsa sensación de confianza y deteriorando la visión, el juicio y la capacidad de estimar distancias y velocidades.',
  },
  {
    id: 207,
    topic: 'Manejo Defensivo',
    question: '¿Qué se considera como situación adversa al conducir?',
    options: [
      'Lluvia, iluminación, neblina.',
      'Tráfico excesivo, condiciones extremas de la vía.',
      'Condiciones físicas o sicológicas de la persona.',
      'Todas las anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'Una situación adversa incluye condiciones ambientales (lluvia, neblina), condiciones de tráfico y vía (exceso de tráfico, vía extrema), y el estado del propio conductor (físico/psicológico) (Todas las anteriores).',
  },
  {
    id: 208,
    topic: 'Manejo Defensivo',
    question:
      '¿Por qué existe la siguiente infracción: Arto. 26, No. 24.- Conducir utilizando manualmente teléfonos móviles, o cualquier otro aparato........................................... C$ 250.00?',
    options: [
      'Porque las autoridades son anticuadas, los jóvenes podemos hablar por teléfono y conducir.',
      'El celular en la actualidad es el principal elemento de distracción en la conducción.',
      "Si se usa 'el manos libres' no es peligroso y se pueden hacer ambas cosas.",
    ],
    correctAnswer: 1,
    explanation:
      'El celular es una de las principales causas de distracción cognitiva, visual y manual, elevando drásticamente el riesgo de accidente.',
  },
  {
    id: 209,
    topic: 'Manejo Defensivo',
    question:
      '¿Por qué se dice que la velocidad es uno de los principales factores de riesgo en la conducción?',
    options: [
      'Porque los límites permitidos están desactualizados de acuerdo a los autos de hoy.',
      'A mayor velocidad, más distancia de frenado, mayor será el impacto, menos capacidad de respuesta.',
      'Porque los automóviles son cada vez más rápidos pero la población no lo entiende.',
    ],
    correctAnswer: 1,
    explanation:
      'La velocidad incrementa todos los riesgos: alarga la distancia necesaria para detenerse, aumenta la gravedad del impacto y reduce el tiempo que tiene el conductor para reaccionar.',
  },
  {
    id: 210,
    topic: 'Manejo Defensivo',
    question:
      '¿Sabe usted qué hacer si se le estalla una llanta a alta velocidad?',
    options: [
      'Trabaje con el timón de acuerdo a la situación (llanta trasera o llanta delantera).',
      'Libera el pedal de aceleración, Pasa a una marcha más baja.',
      'Inicie a frenar gradualmente hasta detenerse, si es necesario salga de la vía.',
      'Todas anteriores.',
    ],
    correctAnswer: 3,
    explanation:
      'En caso de estallido de llanta, se deben aplicar todas las medidas: sujetar el timón para controlar la dirección, soltar el acelerador, usar el freno de motor (marcha baja) y luego frenar suavemente hasta detenerse de forma segura (Todas anteriores).',
  },


      /*Señales de transito*/


  {
    id: 211,
    topic: 'Tránsito',
    question: '¿Qué indica esta posición del agente?',
    image:"https://jonathancv.neocities.org/Senalizacion/agente_detener_marcha.png",
    options: [
      'Alto, detenga la marcha',
      'Continúe, siga a marcha',
      'Pare al borde.',
    ],
    correctAnswer: 0,
    explanation:
      'Cuando el agente de tránsito extiende ambos brazos o uno de ellos horizontalmente, indica alto o detención de la marcha para los vehículos que se acercan de frente o por detrás.',
  },
  {
    id: 212,
    topic: 'Tránsito',
    question: '¿Qué indica esta posición del agente?',
    image:
      'https://jonathancv.neocities.org/Senalizacion/agente_continue_marcha.png',
    options: [
      'Alto, detenga la marcha',
      'Continúe, siga a marcha',
      'Pare al borde.',
    ],
    correctAnswer: 1,
    explanation:
      'Cuando el agente de tránsito da la espalda o el frente (sin brazos extendidos) indica que los vehículos pueden continuar la marcha.',
  },
  {
    id: 213,
    topic: 'Tránsito',
    question: '¿Qué indica esta posición del agente?',
    image:
      'https://jonathancv.neocities.org/Senalizacion/agente_detener_al_borde.png',
    options: [
      'Alto, detenga la marcha',
      'Continúe, siga a marcha',
      'Pare al borde.',
    ],
    correctAnswer: 2,
    explanation:
      'Cuando el agente mueve uno de sus brazos hacia el borde de la vía o la acera, está indicando que el conductor debe detenerse al borde de la calzada.',
  },
  {
    id: 214,
    topic: 'Tránsito',
    question:
      '¿En qué lugares tengo permitido circular a esta velocidad? ',
    image:
      'https://jonathancv.neocities.org/Senalizacion/senalizacion_restrictiva_45km.png',
    options: [
      'Calles y avenidas',
      'Caminos y carreteras',
      'Zonas escolares y pistas',
    ],
    correctAnswer: 0,
    explanation:
      'La velocidad máxima permitida de 45 km/h generalmente aplica en zonas urbanas como calles y avenidas.',
  },
  {
    id: 215,
    topic: 'Tránsito',
    question:
      '¿En cuáles de estos lugares se establece esta prohibición?',
    image:
      'https://jonathancv.neocities.org/Senalizacion/senalizacion_resctrictiva_no_adelantar.png',
    options: [
      'Cuestas, puentes y curvas',
      'Bulevares, pistas, avenidas',
      'Carreteras de cuatro carriles',
    ],
    correctAnswer: 0,
    explanation:
      'Está prohibido adelantar en lugares donde la visibilidad es reducida o la maniobra es peligrosa, como cuestas, puentes y curvas.',
  },
  {
    id: 216,
    topic: 'Tránsito',
    question:
      '¿En cuáles de estos lugares se establece la prohibición de estacionar?',
    image:
      'https://jonathancv.neocities.org/Senalizacion/senalizacion_resctrictiva_no_estacionar.png',
    options: [
      'En estacionamientos de discapacitados',
      'Entradas de clínicas, frente a garajes e hidrantes',
      'En rotondas, sobre aceras y paradas de buses',
      'Todas las anteriores',
    ],
    correctAnswer: 3,
    explanation:
      'La prohibición de estacionar se aplica en todos los lugares mencionados por motivos de seguridad o accesibilidad (Todas las anteriores).',
  },





  
  {
    id: 217,
    topic: "Tránsito",
    question: "¿Qué tipo de señal es la que se muestra?",
    image: "https://us.123rf.com/450wm/seetwo/seetwo1903/seetwo190300420/121126558-se%C3%B1al-de-cruce-escolar-sobre-fondo-transparente.jpg?ver=6",
    options: [
      "Reglamentaria vertical",
      "Preventiva vertical",
      "Informativa horizontal"
    ],
    correctAnswer: 1,
    explanation: "La señal con el pictograma de niños es de advertencia o preventiva (rombo amarillo), indicando un riesgo potencial, y es de ubicación vertical."
  },
  {
    id: 218,
    topic: "Tránsito",
    question: "¿Cuál es el significado correcto de esta señal?",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_tSuhAM-rM27V9xjmazgMVqc46bQowQB_O5SMZvRViapQt8oD",
    options: [
      "Zona escolar",
      "Peatones en la vía",
      "Zona comercial"
    ],
    correctAnswer: 1,
    explanation: "Esta señal preventiva (rombo amarillo con figura de peatón) advierte a los conductores sobre la presencia o cruce de peatones en la vía."
  },
  {
    id: 219,
    topic: "Tránsito",
    question: "¿Qué debe hacer el conductor ante la presencia de esta señal?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/CA-QC_road_sign_D-270-17.svg",
    options: [
      "Reducir la velocidad y pitar",
      "Reducir la velocidad y observar la presencia de semovientes",
      "Nada si no hay semovientes"
    ],
    correctAnswer: 1,
    explanation: "Ante la señal de semovientes, se debe reducir la velocidad y estar atento, ya que indica la posible presencia de animales en la vía."
  },
  {
    id: 220,
    topic: "Tránsito",
    question: "¿Qué indica esta señal ensamblada junto al alto?",
    image: "https://t3.ftcdn.net/jpg/00/01/83/44/360_F_1834467_6dsuvxU9XCjk81GvS792vwT81uQb70.webp",
    options: [
      "Que la vía adyacente es de un solo sentido",
      "Que la vía adyacente es de doble sentido",
      "Que no puedo doblar en ningún sentido"
    ],
    correctAnswer: 1,
    explanation: "Una señal de flecha ensamblada junto a la señal de ALTO puede indicar la dirección del tráfico en la vía transversal, en este caso, señalando el doble sentido de la vía adyacente."
  },
  {
    id: 221,
    topic: "Tránsito",
    question: "Según la imagen, este conductor indica:",
    image: "https://o.quizlet.com/B.QdooPLNTw2iY6.3hV8fg.jpg",
    options: [
      "Se dispone a salir de la vía",
      "Va a gira ala derecha",
      "Va a girar a la izquierda"
    ],
    correctAnswer: 2,
    explanation: "El brazo izquierdo extendido horizontalmente indica un giro o cambio de dirección a la izquierda."
  },
  {
    id: 222,
    topic: "Tránsito",
    question: "Según la imagen, este conductor indica:",
    image: "https://www.motorcyclelegalfoundation.com/wp-content/uploads/2019/01/02-right-turn1.jpg",
    options: [
      "Se dispone a adelantar",
      "Va a girar hacia la derecha",
      "Va a girar hacia la izquierda"
    ],
    correctAnswer: 1,
    explanation: "El brazo izquierdo doblado en ángulo hacia arriba (o el brazo derecho extendido, dependiendo de la convención local, pero generalmente el brazo izquierdo en este ángulo) indica giro a la derecha."
  },
  {
    id: 223,
    topic: "Tránsito",
    question: "Esta señal que se muestra, indica:",
    image: "https://www.shutterstock.com/image-vector/forbidden-do-not-turn-left-260nw-1556203919.jpg",
    options: [
      "Se permite el giro a la izquierda",
      "Me aproximo a una curva a la derecha",
      "Todo giro derecho, está prohibido",
      "Ninguna de las anteriores"
    ],
    correctAnswer: 3,
    explanation: "La señal prohíbe el giro a la izquierda. Por lo tanto, ninguna de las opciones dadas es una descripción correcta de lo que la señal *indica* (Ninguna de las anteriores)."
  },
  {
    id: 224,
    topic: "Tránsito",
    question: "Esta señal preventiva que se muestra, indica: ",
    image: "https://www.shutterstock.com/image-vector/isolated-yellow-transit-signal-turn-260nw-421397845.jpg",
    options: [
      "Me aproximo a un tope",
      "Me aproximo a una curva a la derecha",
      "Todo giro derecho, está prohibido"
    ],
    correctAnswer: 1,
    explanation: "Esta señal preventiva (rombo amarillo) indica que el conductor se aproxima a una curva peligrosa a la derecha."
  },
  {
    id: 225,
    topic: "Tránsito",
    question: "¿Cómo se define esta señal que se muestra?",
    image: "https://static.vecteezy.com/system/resources/thumbnails/011/188/957/small/traffic-light-icon-clipart-in-realistic-3d-illustration-style-isolated-on-white-background-vector.jpg",
    options: [
      "Dispositivo luminosos que regula la circulación vial",
      "Me aproximo a un semáforo peatonal",
      "Cualquier giro, está prohibido"
    ],
    correctAnswer: 0,
    explanation: "El semáforo es un dispositivo luminoso que utiliza colores para regular el flujo y la circulación del tráfico en las intersecciones."
  },
  {
    id: 226,
    topic: "Tránsito",
    question: "¿Qué indica esta señal reglamentaria?",
    image: "https://i.pinimg.com/564x/c6/80/95/c68095234350af6e6a32f0b23ca989e6.jpg",
    options: [
      "Cualquier giro de retorno es legal",
      "No podía bajo ninguna circunstancia hacer giro en 'U'",
      "La señal indica que sí se puede girar en 'U'"
    ],
    correctAnswer: 1,
    explanation: "La señal reglamentaria prohíbe el giro de 180 grados (giro en 'U') para cambiar la dirección de la marcha."
  },
  {
    id: 227,
    topic: "Tránsito",
    question: "Esta señal que se le muestra, indica:",
    image: "https://media.istockphoto.com/id/2201645792/vector/no-left-turn-regulatory-traffic-sign-vector.jpg?s=612x612&w=is&k=20&c=A7ykfswlKvws_rT8mox1NGU7T61lsXGobBwKc-46Cho=",
    options: [
      "Me aproximo a un giro a la derecha",
      "Me aproximo a una curva a la izquierda",
      "Todo giro izquierdo está prohibido"
    ],
    correctAnswer: 2,
    explanation: "Esta señal reglamentaria indica que el giro a la izquierda está completamente prohibido en ese punto de la vía."
  },
  {
    id: 228,
    topic: "Tránsito",
    question: "¿Qué tipo de vehículo representa la imagen?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKOlAWqg4Le-JB9xXBjz2SDZUSHDSEIxqfn2QghSFVgmmnbmb",
    options: [
      "Un vehículo de régimen preferente",
      "Un vehículo de circulación normal",
      "Un vehículo que no es de ningún régimen"
    ],
    correctAnswer: 0,
    explanation: "Los camiones de bomberos, junto con ambulancias y vehículos policiales, son vehículos de régimen preferente o de emergencia y tienen prioridad de paso."
  },
  {
    id: 229,
    topic: "Tránsito",
    question: "Esta señal reglamentaria que se le muestra, indica:",
    image: "https://20blogs.pe/wp-content/uploads/senal_prohibido_el_uso_de_la_bocina_r29.jpg",
    options: [
      "Use la bocina",
      "Use luces bajas",
      "Zona de silencio"
    ],
    correctAnswer: 2,
    explanation: "La señal con la palabra 'SILENCIO' indica una zona de prohibición de usar la bocina (pito), usualmente cerca de hospitales, escuelas o iglesias."
  },
  {
    id: 230,
    topic: "Tránsito",
    question: "Esta señal que se le muestra, indica:",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/IE_road_sign_RUS-012.svg/250px-IE_road_sign_RUS-012.svg.png",
    options: [
      "Prohibido girar izquierdo",
      "Me aproximo a una curva a la izquierda",
      "Todo giro derecho, está prohibido"
    ],
    correctAnswer: 2,
    explanation: "Esta señal reglamentaria indica que el giro a la derecha está prohibido en esa intersección."
  },

  /*---------------------------*/
  {
    id: 231,
    topic: "Tránsito",
    question: "¿Qué indica esta señal que le muestra?",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0WrAaNwh7GrH3QC0CyzaxhV07tpnGTriqW5zajtMUwCa5yxpb",
    options: [
      "Se trata de una vía de doble sentido",
      "Me aproximo a un paso peatonal",
      "Me aproximo a una calle transitada"
    ],
    correctAnswer: 0,
    explanation: "La señal reglamentaria con dos flechas verticales en sentido opuesto indica que la vía por la que se circula tiene doble sentido de tránsito."
  },
  {
    id: 232,
    topic: "Tránsito",
    question: "¿Qué maniobra permite esta señal que se muestra?",
    image: "https://static.vecteezy.com/system/resources/thumbnails/022/207/725/small/road-traffic-sign-of-straight-symbol-isolated-on-white-background-free-vector.jpg",
    options: [
      "Siga de frente",
      "No hay paso",
      "Una sola vía"
    ],
    correctAnswer: 0,
    explanation: "Esta señal reglamentaria indica que el conductor solo tiene permitido continuar la marcha en línea recta o de frente."
  },
  {
    id: 233,
    topic: "Tránsito",
    question: "¿Qué significado representa esta señal?",
    image: "https://www.shutterstock.com/image-photo/school-crossing-sign-260nw-2360766.jpg",
    options: [
      "Cuidado, poblado próximo",
      "Zona escolar",
      "Todo giro izquierdo, está permitido"
    ],
    correctAnswer: 1,
    explanation: "La señal preventiva con la silueta de niños cruzando la calle indica la proximidad de una zona escolar."
  },
  {
    id: 234,
    topic: "Tránsito",
    question: "¿Qué significan estas líneas que se muestran?",
    image: "https://tubarco.news/segundos-que-cuestan-la-vida-el-motorizado-quedo-entre-los-vehiculos-imprudencias-de-los-conductores-que-terminan-en-tragedia/captura-de-pantalla-2023-03-22-a-las-4-23-52-p-m/",
    options: [
      "Vía de doble sentido",
      "Se puede aventajar",
      "Vía es de un solo sentido"
    ],
    correctAnswer: 0,
    explanation: "La línea central discontinua amarilla indica que la vía es de doble sentido, y que el adelantamiento está permitido siempre y cuando sea seguro."
  },
  {
    id: 235,
    topic: "Tránsito",
    question: "Esta señal que se muestra, indica:",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCFTUf2uY8hAuKnCto44jYFtRWrk2nMMyJojmKB1OfFzhIzBCe",
    options: [
      "Debo detenerme y ceder el paso al que circula en vía preferencial",
      "Debo pasar con cuidado sonando el pito para advertir",
      "Solo debo bajar velocidad y continuar siempre"
    ],
    correctAnswer: 0,
    explanation: "La señal 'CEDA EL PASO' obliga al conductor a reducir la velocidad y detenerse si es necesario, cediendo el derecho de vía a los vehículos que circulan por la vía principal o preferencial."
  },
  {
    id: 236,
    topic: "Tránsito",
    question: "Esta señal que se muestra, indica:",
    image: "https://o.quizlet.com/11vPwzVZhpluuStjiolvXw.jpg",
    options: [
      "Vía de doble sentido",
      "El que circula en la banda izquierda puede aventajar.",
      "El que circula en la banda derecha no puede aventajar.",
      "Todas las anteriores"
    ],
    correctAnswer: 3,
    explanation: "La línea doble (una continua y una discontinua) indica que es una vía de doble sentido. El adelantamiento está permitido solo para el tráfico que tiene la línea discontinua a su lado (banda izquierda en la imagen, si circulan por la derecha) y prohibido para el que tiene la línea continua (banda derecha en la imagen) (Todas las anteriores)."
  },
  {
    id: 237,
    topic: "Tránsito",
    question: "Esta señal que se muestra, indica:",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/QBC5VNMRPZAZBBAPJLD2ME4YTA.jpg",
    options: [
      "Vía de doble sentido y No puedo aventajar",
      "Vía de un solo sentido",
      "Sí se puede aventajar"
    ],
    correctAnswer: 0,
    explanation: "La doble línea central continua amarilla indica que la vía es de doble sentido y que el adelantamiento está prohibido para ambos sentidos de circulación."
  },
  

  /*-----------------------------*/

  {
    id: 238,
    topic: "Tránsito",
    question: "Esta señal que se muestra, indica:",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQsJg5yxUuEyRQjaH3ErP-R6mxty5aEKaR-7_nkAK1vZFiBFM1",
    options: [
      "Vía de doble sentido y puede aventajar con precaución",
      "No Puedo aventajar",
      "Todo giro izquierdo, está permitido"
    ],
    correctAnswer: 0,
    explanation: "Una línea central discontinua indica que la vía es de doble sentido y que el adelantamiento (aventajar) está permitido si se toman las precauciones necesarias y es seguro."
  },
  {
    id: 239,
    topic: "Tránsito",
    question: "Estas señales que se muestran, indican:",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3XVrIsFyLq3zj0qJlQyZVhuMeTfY2rqk_xk8g_heuhv5oYQ5",
    options: [
      "Carril de centro para aventajar",
      "Carril izquierdo, siga de frente",
      "Carril derecho, solo puede girar derecho",
      "Todas las anteriores",
      "Ninguna de las anteriores"
    ],
    correctAnswer: 4,
    explanation: "Las flechas direccionales pintadas en el carril indican las únicas direcciones permitidas. Si no hay una opción que describa correctamente todas las flechas (que parecen indicar seguir de frente y girar), la respuesta es Ninguna de las anteriores, aunque lo más probable es que se refiera a que cada carril tiene una función específica."
  },
  {
    id: 240,
    topic: "Tránsito",
    question: "¿Qué indican las flechas direccionales?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3XVrIsFyLq3zj0qJlQyZVhuMeTfY2rqk_xk8g_heuhv5oYQ5",
    options: [
      "Que se permite la maniobra que el símbolo indica",
      "Líneas que canalizan el tráfico",
      "Que no se puede girar a la derecha"
    ],
    correctAnswer: 0,
    explanation: "Las flechas direccionales en el pavimento obligan a los conductores a realizar solo las maniobras indicadas por el símbolo de la flecha."
  },
  {
    id: 241,
    topic: "Tránsito",
    question: "¿Qué indica este señal preventiva?",
    image: "https://img.freepik.com/vector-premium/reverse-turn_567804-1894.jpg",
    options: [
      "Vía de doble sentido y puedo aventajar",
      "Curva y contra curva",
      "Todo giro izquierdo, está permitido"
    ],
    correctAnswer: 1,
    explanation: "Esta señal preventiva (rombo amarillo con una S en la flecha) advierte al conductor sobre una sucesión de dos curvas en sentidos opuestos, la primera hacia la izquierda y la segunda hacia la derecha (o viceversa)."
  },
  {
    id: 242,
    topic: "Tránsito",
    question: "¿Qué indican estas marcas horizontales, que se muestran:",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQYxBdQe6ooCNU39CzhK-gkFXjuWQMkz2aLOPcWOWfB7REck",
    options: [
      "Peatones tienen preferencia",
      "Zona de seguridad peatonal",
      "Obligado a detenerme",
      "Todas las anteriores"
    ],
    correctAnswer: 3,
    explanation: "Las marcas de paso peatonal (cebra) indican una **Zona de seguridad peatonal**, donde los **Peatones tienen preferencia** de paso, y obligan al conductor a **detenerse** para ceder el paso si hay peatones cruzando. Por lo tanto, Todas las anteriores."
  },
  {
    id: 243,
    topic: "Tránsito",
    question: "¿Qué indica para los conductores la señal de tránsito que a continuación se presenta en la figura? ",
    image: "https://www.dmv-written-test.com/images-car/indiana-turn_left_or_go_through.png",
    options: [
      "Curva a la izquierda",
      "Una vía de tres carriles",
      "Puede continuar y girar desde ese carril"
    ],
    correctAnswer: 2,
    explanation: "Esta señal direccional indica que el carril actual permite continuar recto, además de realizar un giro a la derecha."
  },
  {
    id: 244,
    topic: "Tránsito",
    question: "¿Qué indica para los conductores la señal de tránsito que se presenta en la figura? ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSaDqmVtllVze_KmsNO0ojwv-K0XcmclQZLjxxYBEQ9yQ1T5R",
    options: [
      "Curva pronunciada hacia la derecha",
      "Rotonda próxima",
      "Ingreso controlado"
    ],
    correctAnswer: 0,
    explanation: "Esta es una señal preventiva (rombo amarillo) que advierte de una curva pronunciada y peligrosa hacia la derecha."
  },

  /*---------------------------------------------*/
  {
    id: 245,
    topic: "Tránsito",
    question: "¿Qué indica para Ud. la señal de tránsito que a continuación se presenta en la figura?",
    image: "https://img.freepik.com/vector-premium/ilustracion-vectorial-signo-advertencia-curva-derecha-aislada-sobre-fondo-blanco_1044048-162.jpg",
    options: [
      "Curva a la derecha",
      "Giro obligatorio a la derecha",
      "Pendiente pronunciada a la derecha"
    ],
    correctAnswer: 0,
    explanation: "Esta es una señal preventiva (rombo amarillo) que advierte de una curva a la derecha, obligando al conductor a reducir la velocidad y conducir con precaución."
  },
  {
    id: 246,
    topic: "Tránsito",
    question: "¿Qué mensaje es el de la señal de tránsito preventiva que a continuación se presenta en la figura? ",
    image: "https://dmv-practice-test.com/storage/images-car/connecticut-roundabout_circle.png",
    options: [
      "Curva a la derecha",
      "Rotonda próxima",
      "Pendiente pronunciada a la derecha"
    ],
    correctAnswer: 1,
    explanation: "Esta señal preventiva (rombo amarillo) indica al conductor que se aproxima a una rotonda o glorieta y debe prepararse para ceder el paso."
  },
  {
    id: 247,
    topic: "Tránsito",
    question: "¿Qué debo entender ante esta señal vertical? ",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpDYDhcEFkjgOkx3wbWQ00HrLNU9Cayswcgv1gkXGjr14Qqq4j",
    options: [
      "Puente angosto",
      "Poblado a la orilla",
      "Reducción de carril"
    ],
    correctAnswer: 2,
    explanation: "Esta señal preventiva (rombo amarillo) advierte que la vía por la que se circula se reduce en el número de carriles disponibles."
  },
  {
    id: 248,
    topic: "Tránsito",
    question: "¿Qué indica para los conductores la señal de tránsito que a continuación se presenta en la figura? ",
    image: "https://senalesindustriales.com/imagenes/transito/reglamentario/R%20(40).jpg",
    options: [
      "Está prohibido conducir un vehículo a una velocidad mayor de 45 Km/h",
      "La limitación de velocidad está destinada sólo a vehículos públicos.",
      "La limitación de velocidad está destinada sólo a vehículos de dos ruedas y carretilla de mano."
    ],
    correctAnswer: 0,
    explanation: "La señal reglamentaria de límite de velocidad máxima prohíbe a todos los conductores circular a una velocidad superior a la indicada (45 km/h)."
  },
  {
    id: 249,
    topic: "Tránsito",
    question: "¿Cuál es la maniobra correcta al observar la señal? ",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD8WdjHglfeBzEhqJGVE9Ye9GRhqr-FW6HrLi_WMUHPIAq0AWz",
    options: [
      "Seguir la marcha sin parar si no viene otro vehículo",
      "Detenerse.",
      "Solamente observar a ambos lados izquierda derecha y seguir la marcha"
    ],
    correctAnswer: 1,
    explanation: "La señal reglamentaria de ALTO indica la obligación de detener completamente el vehículo antes de la línea de detención y solo avanzar cuando sea seguro."
  },
  {
    id: 250,
    topic: "Tránsito",
    question: "¿Cuál es la función de la señal vertical que a continuación se presenta en la figura? ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPqs3YcCDOU5LtT_m3QlGGhZWKbVSBYlGak8SGLnsvYl-pkoW",
    options: [
      "Indica a los conductores la obligación de Detenerse.",
      "Se puede bajar velocidad y continuar",
      "Puedo seguir la marcha con seguridad sin parar."
    ],
    correctAnswer: 0,
    explanation: "La señal de ALTO obliga a la detención total del vehículo, sin excepciones, en el lugar indicado (generalmente antes del paso peatonal o de la línea de detención)."
  },
  {
    id: 251,
    topic: "Tránsito",
    question: "¿En qué lugar debo parar según la gráfica que se muestra? ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQYxBdQe6ooCNU39CzhK-gkFXjuWQMkz2aLOPcWOWfB7REck",
    options: [
      "Antes del paso peatonal.",
      "En motocicleta sobre la señal de tránsito.",
      "Por lo menos 10 metros antes del cruce."
    ],
    correctAnswer: 0,
    explanation: "La detención debe realizarse siempre antes de invadir las marcas del paso peatonal (la cebra) para no obstaculizar el cruce de los peatones."
  },
  /*----------------------------------*/

  {
    id: 252,
    topic: "Tránsito",
    question: "¿Cuál de estas señales de tránsito tiene por objeto advertir a los usuarios trabajo en la vía?",
    optionImages: [
      "https://static.vecteezy.com/system/resources/thumbnails/047/428/797/small/rhomboid-traffic-signal-in-yellow-and-black-isolated-on-white-background-warning-of-narrow-road-ahead-on-left-side-vector.jpg",
      "https://www.zuldigital.com.br/blog/wp-content/uploads/2021/07/placa_desvio_Easy-Resize.com_-300x144.jpg",
      "https://cdn.goconqr.com/uploads/multiple_choice_question/image/4185469/desktop_f5bb9e95-27b6-4853-a006-d522c8a4ba53.jpeg"
    ],
    options: ["Figura 1", "Figura 2", "Figura 3"],
    correctAnswer: 0,
    explanation: "La señal de color naranja o amarilla que indica 'DESVÍO' (opción 2) es la que se utiliza específicamente para advertir a los conductores sobre obras y trabajos en la vía."
  },
  {
    id: 253,
    topic: "Tránsito",
    question: "¿Cuál de estas señales, tiene por objeto notificar a conductores, las limitaciones y restricciones?",
    optionImages: [
      "https://www.dmv-written-test.com/images-car/arkansas-school_zone.png",
      "https://practicatest.cl/static/img/test/CL/15f1a1736361045916d5d3451de0a093.jpg",
      "https://st4.depositphotos.com/1001800/40861/i/450/depositphotos_408619302-stock-photo-roadside-sign-passing-tourists-directions.jpg"
    ],
    options: ["Figura 1", "Figura 2", "Figura 3"],
    correctAnswer: 0,
    explanation: "Las señales reglamentarias (círculo rojo) indican prohibiciones, restricciones y limitaciones. La señal de 'NO ADELANTAR' (opción 2) es la que establece una restricción."
  },
  {
    id: 254,
    topic: "Tránsito",
    question: "¿Cuáles de las siguientes señales es informativa?",
    optionImages: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizyTt7LLVx_nQqsL3BIp_xW1Aj2Xuv4ApJNTADajCQdzmG1Bolup6OROEEXj3YAVmpu1237Rxx9PZsElBLCDEjZKC-MPyHYuk2ZKBJXiTOJFNfOP4QbrsEeBSJ0MZ-Px0jNewTqiSVaix4XVEbWLKSpXHhuuJndUErG91uwb2gPakI0aqcQqxwoY82/s2000/275927495_5081907105189031_7604343551727391896_n.jpg",
      "https://cloud.educaplay.com/recursos/66/2121206/imagen_1_1445473651.jpg",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRAVajKJnIkLYaT1HWQcb6mKSueG6vuwn-ZHFS7bOiM1glMcD20"
    ],
    options: ["Figura 1", "Figura 2", "Figura 3"],
    correctAnswer: 0,
    explanation: "Las señales informativas son generalmente rectangulares y de color azul o verde (opción 3), mientras que las reglamentarias (CEDA EL PASO, opción 1) y preventivas (Curva, opción 2) tienen formas y colores distintos."
  },
  {
    id: 255,
    topic: "Tránsito",
    question: "Seleccione cuál de las señales de tránsito advierte antes de un cruce en T.",
    optionImages: [
      "https://t4.ftcdn.net/jpg/08/46/75/95/360_F_846759522_IebW5z8x0p51STZSf0ikP6AuVbpYClVG.jpg",
      "https://la100.cienradios.com/resizer/v2/GF2FZ6SOEVFPNDRXTVICXPWYGA.jpg?th=701f662a88b43984f936dd3ca665f2adc222b7d99c62a33b1f5ed457c1f2607a",
      "https://dmv-practice-test.com/storage/images-car/alabama-divided_highway_ahead.png"
    ],
    options: ["Figura 1", "Figura 2", "Figura 3"],
    correctAnswer: 0,
    explanation: "La señal preventiva con la forma de 'T' (Opción Uno) advierte que la vía principal por la que se circula será intersectada por otra vía lateral, formando un cruce en T."
  },
  {
    id: 256,
    topic: "Tránsito",
    question: "En cuál de las siguientes figuras puedo adelantar con precaución y tomando en cuenta las técnicas para un aventajamiento seguro?",
    optionImages: [
      "https://jonathancv.neocities.org/Senalizacion/1.png",
      "https://jonathancv.neocities.org/Senalizacion/2.png",
      "https://jonathancv.neocities.org/Senalizacion/3.png"
    ],
    options: ["Figura 1", "Figura 2", "Figura 3"],
    correctAnswer: 1,
    explanation: "El adelantamiento solo está permitido en la **Figura 2**, que muestra una línea central discontinua (punteada), indicando que es seguro adelantar si las condiciones de tráfico lo permiten."
  },
  {
    id: 257,
    topic: "Tránsito",
    question: "¿Seleccione cuál de las señales de tránsito, marcada en la vía señala un paso peatonal?",
    optionImages: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhrSrOlMGSfIbuzdJyM44sKlqxLj0oScWwDgP8j_EUVaDDKRoo",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin9GMQVKCo7QcW_ZE0sp0x4_LTWyUWSl_N6xOyOcxWaLRXsqPRl4beIxOLu3j2THIEepG3NOIUeb7WYXzQCI5If6xpQ4KPOw3LSy7oXd_Plk0pO35u629ShjdqQjQy9PQjWrACw0W_KjM/?imgmax=800",
      "https://media.istockphoto.com/id/897128492/pt/vetorial/isolated-transit-signal.jpg?s=170x170&k=20&c=slOArzg9Oe3IjmEwIKKRUhtHk4EszFdiF8eJQLt4_vk="
    ],
    options: ["Figura 1", "Figura 2", "Figura 3"],
    correctAnswer: 0,
    explanation: "La señal preventiva de color amarillo con el peatón caminando (Figura 1) es la que se utiliza para advertir que hay un cruce peatonal marcado en la vía."
  },
  {
    id: 258,
    topic: "Tránsito",
    question: "¿En cuáles de las siguientes figuras no puedo adelantar en ninguno de los dos sentidos?",
    optionImages: [
      "https://jonathancv.neocities.org/Senalizacion/1.png",
      "https://jonathancv.neocities.org/Senalizacion/2.png",
      "https://jonathancv.neocities.org/Senalizacion/3.png"
    ],
    options: ["Figura 1", "Figura 2", "Figura 3"],
    correctAnswer: 0,
    explanation: "La **Doble Línea Continua** (Figura 1) prohíbe el adelantamiento (aventajamiento) en ambos sentidos de circulación."
  },
  /*------------------------*/
  {
    id: 259,
    topic: "Tránsito",
    question: "¿Cuál es la diferencia entre la línea amarilla discontinua y línea blanca discontinua?",
    options: [
      "En ambas se puede aventajar",
      "Ambas indican que se tratan de vías de doble sentido",
      "El color amarillo indica doble sentido de circulación y el color blanco un solo sentido."
    ],
    correctAnswer: 2,
    explanation: "La línea amarilla se utiliza para separar carriles de tráfico que se mueven en direcciones opuestas (doble sentido), mientras que la línea blanca separa carriles que se mueven en la misma dirección (un solo sentido)."
  },
  {
    id: 260,
    topic: "Tránsito",
    question: "La línea continua de color blanco, me indica que:",
    options: [
      "La calle es de doble vía",
      "No debo hacer cambio de carril, es de una sola vía",
      "Puedo hacer cambio de carril"
    ],
    correctAnswer: 1,
    explanation: "Una línea continua blanca indica que el cambio de carril está prohibido o restringido, y que la circulación es en un solo sentido."
  },
  {
    id: 261,
    topic: "Tránsito",
    question: "El 'alto' es una señal que se clasifica como:",
    options: [
      "Preventiva",
      "Reglamentaria o Restrictivas",
      "Informativa"
    ],
    correctAnswer: 1,
    explanation: "La señal de 'ALTO' es una señal reglamentaria que establece la obligación o la restricción de detenerse completamente."
  },
  {
    id: 262,
    topic: "Tránsito",
    question: "El semáforo es una señal que se clasifica como:",
    options: [
      "Preventiva",
      "Lumínica que regula la circulación vial.",
      "Informativa"
    ],
    correctAnswer: 1,
    explanation: "El semáforo es un dispositivo luminoso que regula la circulación, siendo una señal de tipo lumínica o de regulación."
  },
  {
    id: 263,
    topic: "Tránsito",
    question: "¿Qué es Regulación a brazos?",
    options: [
      "Movimientos coordinados y coherentes que realiza el agente Transito sobre la vía, para el desplazamiento de los vehículos y el ordenamiento peatonal.",
      "Las señales de brazos que realiza el conductor",
      "Señales que debemos ejecutar cuando tenemos desperfecto en luces direccionales."
    ],
    correctAnswer: 0,
    explanation: "La regulación a brazos se refiere a las indicaciones manuales o gestos que realiza el agente de tránsito para dirigir y controlar el flujo vehicular y peatonal."
  },
  {
    id: 264,
    topic: "Tránsito",
    question: "¿Qué se entiende por señales informativas?",
    options: [
      "Son aquellas que tienen por objeto identificar las vías y lugares por donde se va circulando, así como guiar los conductores y peatones de manera correcta y segura.",
      "Las que anuncian las vueltas de la carretera.",
      "Las que se colocan en las esquinas."
    ],
    correctAnswer: 0,
    explanation: "Las señales informativas tienen el propósito de orientar a los usuarios de la vía sobre rutas, destinos, servicios y puntos de interés."
  },

  /*-------------------*/
  {
    id: 265,
    topic: "Tránsito",
    question: "¿Cuáles son las Señales verticales?",
    options: [
      "Están pintadas en la vía",
      "Los semáforos que regulan la circulación vial",
      "Son aquellas que contienen símbolos ubicados en parales y que se ubican a la orilla de las vías, a fin de regular e informar y prevenir la circulación."
    ],
    correctAnswer: 2,
    explanation: "Las señales verticales son aquellas colocadas en postes o parales al lado de la vía, incluyendo las reglamentarias, preventivas e informativas."
  },
  {
    id: 266,
    topic: "Tránsito",
    question: "¿Cuáles son las señales horizontales?",
    options: [
      "Son marcas y símbolos pintados en el pavimento, con fines de regulación e informar el tránsito.",
      "Son aquellas que contienen símbolos ubicados en parales y que la finalidad de regular e informar sobre el tránsito.",
      "Los semáforos que regulan la circulación vial"
    ],
    correctAnswer: 0,
    explanation: "Las señales horizontales, o marcas viales, son las líneas, símbolos y palabras pintadas directamente sobre la superficie de la calzada para regular o informar el tráfico."
  },
  {
    id: 267,
    topic: "Tránsito",
    question: "En una rotonda de tres carriles de entrada, usted circula en el carril del centro, ¿Cuál de las siguientes maniobras es permitida?",
    options: [
      "Girar a la izquierda",
      "Seguir de frente",
      "Girar a la derecha"
    ],
    correctAnswer: 1,
    explanation: "En rotondas con múltiples carriles, el carril central de entrada generalmente se utiliza para seguir de frente (o tomar las salidas intermedias), no para giros extremos (izquierda o retorno)."
  },
  {
    id: 268,
    topic: "Tránsito",
    question: "En una rotonda de tres carriles de entrada, usted circula en el carril izquierdo, ¿Cuál de las siguientes maniobras es permitida?",
    options: [
      "Girar a la derecha",
      "Seguir de frente",
      "Retornar"
    ],
    correctAnswer: 2,
    explanation: "El carril más a la izquierda en una rotonda está destinado para las maniobras más largas, que son girar a la izquierda o dar la vuelta completa (retornar)."
  },
  {
    id: 269,
    topic: "Tránsito",
    question: "El semáforo amarillo intermitente permanente, ¿qué indica al conductor?",
    options: [
      "Siempre tengo la preferencia con la luz amarilla",
      "Preferencia de paso y bajar la velocidad cuando la luz roja es intermitente",
      "Reducir la velocidad e incluso parar si es necesario, debo observar los otros sentidos de circulación"
    ],
    correctAnswer: 2,
    explanation: "La luz amarilla intermitente advierte de un peligro o intersección donde se debe extremar la precaución, reducir la velocidad y ceder el paso si es necesario."
  },
  {
    id: 270,
    topic: "Tránsito",
    question: "¿Cuál es la función de las señales preventivas?",
    options: [
      "Nos advierten de peligros en la vía y la naturaleza de ese peligro",
      "Nos suministran valiosa información sobre la proximidad de gasolineras, hospitales y otros",
      "Nos suministran información sobre la proximidad de estacionamientos, áreas de restaurantes u otros."
    ],
    correctAnswer: 0,
    explanation: "Las señales preventivas (o de advertencia) son de color amarillo y tienen como función principal alertar a los conductores sobre riesgos potenciales o condiciones peligrosas en la vía."
  }













  /*{
    id: 300,
    topic: "Señalización",
    question: "¿Cuál de estas señales de tránsito tiene por objeto advertir a los usuarios trabajo en la vía?",
    optionImages: [
      "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      "https://images.pexels.com/photos/8828756/pexels-photo-8828756.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      "https://images.pexels.com/photos/7876051/pexels-photo-7876051.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    ],
    options: ["Señal 1", "Señal 2", "Señal 3"],
    correctAnswer: 1,
    explanation: "La señal de 'DESVÍO' (opción 2) es la que advierte sobre trabajos en la vía y indica una ruta alternativa."
  }
*/
];
