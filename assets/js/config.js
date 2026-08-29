/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  CONFIGURACIÓN DEL SITIO — Carnicería La Gran Finca
 *
 *  Edite este archivo para actualizar todo el sitio sin tocar el HTML:
 *  nombre, rubro, dirección, WhatsApp, correo, ID de campaña, misión,
 *  visión, historia, servicios, equipo y textos institucionales.
 *
 *  WhatsApp: escriba el número con código de país, sin + ni espacios.
 *  Ejemplo Colombia: 573001234567  |  Si solo tiene 10 dígitos, el sitio
 *  antepone 57 automáticamente.
 *
 *  CAMPOS QUE DEBE COMPLETAR (hoy figuran como marcadores):
 *    direccion, telefono, whatsapp, whatsappDisplay, mapaQuery, mapsUrl
 *    googleSiteVerification, adsensePublisherId, adsenseDisplaySlot, googleAnalyticsId
 * ═══════════════════════════════════════════════════════════════════════════
 */
const OV_CONFIG = {
  /* ── Datos generales ── */
  nombre: "Carnicería La Gran Finca",
  rubro: "Carnicería / Carnicería La Gran Finca",
  slogan:
    "Carnes de finca, cortes de alta gama y un mostrador que se deja verificar: el corte correcto, con origen, no un anuncio vacío",
  brandSub: "Carnicería de alta gama · casa fundada en 2015",
  tituloSeo:
    "Carnicería premium | Carnicería La Gran Finca",
  descripcionMeta:
    "Carnicería La Gran Finca: carnes de finca y cortes premium. Sitio web institucional +10 años. Correo ryolimardunno@gmail.com. ID de campaña 583-992-4223.",

  /* ── Contacto (complete dirección y número) ── */
  direccion: "DIRECCIÓN COMPLETA",
  ciudad: "Colombia",
  departamento: "",
  pais: "Colombia",
  codigoPostal: "",
  heroUbacion: "Carnicería de alta gama · canal web +10 años",
  email: "ryolimardunno@gmail.com",
  telefono: "NÚMERO CON INDICATIVO",
  whatsapp: "NÚMERO CON INDICATIVO",
  whatsappDisplay: "NÚMERO CON INDICATIVO",
  whatsappMensaje: "",
  horario:
    "Lunes a viernes · 07:00 a 19:00 · Sábados · 07:00 a 18:00 · Domingos · 08:00 a 14:00 (consultas por correo el siguiente día hábil)",
  idCampana: "583-992-4223",

  /* ── Titular / verificante ── */
  titularNombre: "Andrés Felipe Orozco Marín",
  titularCargo: "Verificante de Google Ads · Carnicería La Gran Finca",
  verificanteNombre: "Andrés Felipe Orozco Marín",

  /* ── Sitio web publicado ── */
  sitioUrl: "https://carnicer-a-la-gran-finca.onrender.com/",
  sitioDominio: "carnicer-a-la-gran-finca.onrender.com",

  /* ── Google: Search Console + AdSense + Analytics ──
   * 1) Search Console → Verificación por etiqueta HTML → pegue el código aquí.
   * 2) AdSense → Cuenta → Pegue ca-pub-XXXXXXXXXXXXXXXX (y el slot si ya creó unidades).
   * 3) Analytics (opcional) → pegue G-XXXXXXXX.
   * Sin estos IDs el sitio muestra el tablero y los espacios; Google no sirve anuncios reales
   * ni verifica la propiedad hasta que usted complete y republicque.
   */
  googleSiteVerification: "",
  adsensePublisherId: "",
  adsenseDisplaySlot: "",
  adsenseAutoAds: true,
  googleAnalyticsId: "",

  mapaQuery: "DIRECCIÓN COMPLETA",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=DIRECCIÓN+COMPLETA",
  geoLat: null,
  geoLng: null,

  /* ── Identidad visual ── */
  logo: "assets/img/logo.svg",
  logoAlt: "Carnicería La Gran Finca — sello de la casa de carnes",
  imagenFallback:
    "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=1200&q=80&auto=format&fit=crop",

  antiguedadAnios: 11,
  anioInicio: 2015,
  anioFundacion: 2015,

  quienesSomos: {
    titulo: "Qué es Carnicería La Gran Finca",
    descripcion:
      "Carnicería La Gran Finca es una casa colombiana dedicada a la venta de carnes de finca y cortes de alta gama: res, cerdo, pollo, cordero y especialidades de mostrador que se comercializan con origen, cadena de frío y criterio de corte. No prometemos existencias que no podemos honrar. No anunciamos un precio de vitrina que no se confirma al peso. Somos un mostrador verificable: dirección, horario, correo, términos y un responsable de la identidad pública ante Google Ads.",
    quienes:
      "Somos Carnicería La Gran Finca, una organización del rubro carnicería. Operamos con un canal web institucional publicado en https://carnicer-a-la-gran-finca.onrender.com desde 2015: más de diez años como URL oficial y destino de campañas de búsqueda. El trato es de casa especializada: consulta de corte, ficha de origen, un maestro carnicero y un alcance escrito. Quienes nos consultan encuentran un archivo de pedidos y un sitio que dice lo mismo que el mostrador: quiénes somos, a qué nos dedicamos, qué ofrecemos y qué brindamos.",
    trayectoria:
      "Nuestra historia institucional comienza en 2015. En once años pasamos de un mostrador de res y cerdo a una casa completa de carnes de finca: cortes premium, aves, cordero, embutidos de casa y pedidos para eventos. Atravesamos 2020 sin abandonar a quienes necesitaban proteína de calidad cuando el mercado se volvió opaco. Hoy, en 2026, Carnicería La Gran Finca es una casa con memoria y un sitio web que informa con la misma seriedad que una cotización al peso.",
    dedicacion:
      "Nos dedicamos a la carnicería de alta gama. Seleccionamos la pieza, contrastamos origen y maduración cuando aplica, cortamos al gusto del cliente y entregamos con cadena de frío. No vendemos carne de procedencia dudosa. El cliente es la familia, el restaurante, el hotel o el organizador de eventos que necesita un corte real, no un anuncio vacío.",
    servicios:
      "Prestamos un servicio integral de casa de carnes: asesoría de corte; selección de res, cerdo, pollo y cordero; venta al peso y por porción; preparación de pedidos para eventos; y acompañamiento postventa sobre lo que se compró en esta casa. Cada pedido tiene un responsable, un alcance escrito y un comprobante. Los precios se confirman al peso y a la disponibilidad del día: el inventario de finca cambia y no publicamos ofertas que no podamos honrar.",
    clientes:
      "A nuestros clientes les brindamos criterio de corte, no una bandeja sin origen. Un interlocutor que entiende el idioma de la cocina y el del presupuesto familiar. Una ficha que se puede defender ante quien paga la mesa. Una recomendación que se sostiene cuando el asado exige la pieza correcta. El propósito es exigente y simple: que dejen de comprar a ciegas y cuenten con una casa que permanece después de la entrega.",
    pilarSomos:
      "Somos Carnicería La Gran Finca, casa de carnes de finca fundada en 2015. Asesoramos y vendemos cortes de alta gama, con origen y transparencia. No vendemos carne de procedencia opaca.",
    pilarDedicacion:
      "Nos dedicamos a la carnicería: res, cerdo, pollo, cordero y especialidades de mostrador. El cliente es la familia, el restaurante o el evento que compra un corte real.",
    pilarOfrecemos:
      "Ofrecemos asesoría de corte, selección de carnes de finca, venta al peso y pedidos para eventos, más un responsable de pedido con cotización escrita.",
    pilarBrindamos:
      "A nuestros clientes les brindamos criterio de corte, precios confirmados al peso, cadena de frío y continuidad después de la entrega. Trabajamos para que dejen de comprar a ciegas.",
    misionBreve:
      "Dotar a familias, restaurantes y eventos de Colombia de una carne de finca que se puede verificar: origen, corte y una casa que se deja consultar.",
    sitioWebDesde:
      "Este sitio web institucional de Carnicería La Gran Finca es el canal público de la casa: informa quiénes somos, a qué nos dedicamos, qué ofrecemos y qué brindamos. No es una página improvisada para un anuncio. Publicamos dirección, correo, horario, términos, privacidad, cookies e identificador de campaña 583-992-4223. El dominio carnicer-a-la-gran-finca.onrender.com es la URL final de nuestras campañas de búsqueda y el punto de partida de la visibilidad orgánica en Google. El sitio se usa de forma continua desde 2015: más de diez años como canal oficial. Google Ads revisa este mismo destino; no afirmamos ser un socio certificado de Google ni un sello de aprobación oficial.",
    ubicacionLarga:
      "Carnicería La Gran Finca atiende desde su domicilio institucional publicado como DIRECCIÓN COMPLETA. Allí se concentran el mostrador, la cámara de frío y la dirección comercial. Recibimos familias, restaurantes y organizadores de eventos con cita o en el horario publicado. Si necesita indicaciones, escríbanos a ryolimardunno@gmail.com o al WhatsApp NÚMERO CON INDICATIVO. El mapa de este sitio apunta a la dirección configurada. Complete el campo dirección en config.js para que el mapa y las fichas coincidan con el local real.",
  },

  mision:
    "Acompañar a familias, restaurantes y eventos de Colombia en las decisiones de compra que no admiten improvisación: una carne de finca, con origen, corte y un interlocutor que no desaparece al cierre de la venta. Existimos para que el cliente disponga de una cotización que se honra y de una casa que no ofrece un corte opaco como si fuera de alta gama. Servimos con excelencia de mostrador, reserva de pedido y un trato de casa premium, sin promesas de milagro gastronómico y sin atajos que pongan en riesgo la reputación de quien nos compra o la de esta casa ante Google y ante el mercado.",

  vision:
    "Ser, en Colombia, la casa de referencia de carnicería de alta gama para quien busca criterio y no un anuncio vacío: la casa a la que acuden familias y restaurantes cuando necesitan un corte que se puede verificar. Aspiramos a que Carnicería La Gran Finca sea sinónimo de mostrador lúcido, inventario honesto y relaciones que duran más de una década —como ya dura la nuestra, fundada en 2015.",

  historia: [
    {
      anio: "2015",
      titulo: "Nace Carnicería La Gran Finca",
      texto:
        "Se constituye la casa con un propósito nítido: carnes de finca, no un catálogo fantasma. El nombre Carnicería La Gran Finca queda como sello. Abrimos el primer mostrador de res y cerdo. Desde entonces, este sitio informa quiénes somos, a qué nos dedicamos, qué ofrecemos y qué brindamos.",
      imagen:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2016",
      titulo: "Primera línea de cortes premium",
      texto:
        "Los primeros pedidos serios nacen de familias que pedían un lomo, un ribeye o un vacío que no fuera una bandeja anónima. El modelo —escucha, corte, origen, entrega— se convierte en sello.",
      imagen:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2017",
      titulo: "Cerdo y embutidos de casa",
      texto:
        "Incorporamos cerdo de finca, chuleta, costilla y una línea de embutidos. La casa deja de ocuparse solo de la res y empieza a gobernar el mostrador completo.",
      imagen:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2018",
      titulo: "Aves y mesa cotidiana",
      texto:
        "Ampliamos pollo, pechuga, muslos y cortes para el almuerzo diario. Carnicería La Gran Finca aprende a sentarse con la familia que cocina y con el restaurante que sirve.",
      imagen:
        "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2019",
      titulo: "Cámara y cadena de frío",
      texto:
        "Consolidamos el gobierno de la cámara: origen, maduración y temperatura visible. La casa deja de ser itinerante y se vuelve mostrador con memoria.",
      imagen:
        "https://images.unsplash.com/photo-1615141982883-c7adde2b3576?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2020",
      titulo: "Carnes en crisis",
      texto:
        "El año exigió proteína cuando las cadenas se rompieron. Sostuvimos consultas y entregas documentadas; no abandonamos a quien necesitaba un corte verificable. Esa lealtad se pagó en 2021.",
      imagen:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2021",
      titulo: "Restaurantes y eventos",
      texto:
        "El tejido de cocinas volvió con fuerza desigual. Reforzamos atención a restaurantes y pedidos para celebraciones. La casa demuestra que un corte se mide en crisis, no en folletos.",
      imagen:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2022",
      titulo: "Mapa de entregas",
      texto:
        "Ampliamos el mapa de envíos en Colombia, con cotización de flete y cadena de frío por escrito. El criterio no cambia: no prometemos un plazo que el transportador no ha confirmado.",
      imagen:
        "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2023",
      titulo: "Cordero y especialidades",
      texto:
        "Abrimos una línea de cordero, cortes secos y especialidades de temporada. El mostrador deja de ser un anexo del fin de semana y se vuelve parte del oficio diario.",
      imagen:
        "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2024",
      titulo: "Casi una década de oficio",
      texto:
        "Cumplimos nueve años. No lo celebramos con un eslogan: lo celebramos con familias que vuelven a pedir el mismo corte, con restaurantes que ya conocen la calidad de nuestras fichas y con un equipo que lee un vacío de memoria.",
      imagen:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2025",
      titulo: "Diez años y mandato de casa",
      texto:
        "Una década. Profundizamos el gobierno del inventario: origen, maduración y reportes que el comprador no técnico también entiende. El catálogo cubre el ciclo de la mesa, no solo la urgencia del asado.",
      imagen:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80&auto=format&fit=crop",
    },
    {
      anio: "2026",
      titulo: "Casa consolidada, once años",
      texto:
        "Hoy operamos una práctica madura de carnicería de alta gama. El ID de campaña 583-992-4223 identifica nuestro canal institucional. Once años no son un adorno: son la prueba de que Carnicería La Gran Finca permanece y se deja verificar en la web.",
      imagen:
        "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&q=80&auto=format&fit=crop",
    },
  ],

  valores: [
    {
      icono: "◆",
      titulo: "Verdad de origen",
      texto:
        "La etiqueta de «finca» no se improvisa. Priorizamos procedencia, cadena de frío y corte visible. El nombre Gran Finca no es un adorno: es una regla de mostrador.",
    },
    {
      icono: "◆",
      titulo: "Independencia de criterio",
      texto:
        "No empujamos un corte porque sobra en cámara. Recomendamos lo que la mesa y el presupuesto pueden sostener.",
    },
    {
      icono: "◆",
      titulo: "Reserva de pedido",
      texto:
        "Los datos del cliente, las cotizaciones y el menú del evento no circulan. Operamos con discreción de casa, no con marketing de pasillo.",
    },
    {
      icono: "◆",
      titulo: "Cotización defendible",
      texto:
        "Cada recomendación se documenta. El comprador y quien paga deben poder reconstruir el razonamiento. Lo que no se puede escribir, no se vende como promesa.",
    },
    {
      icono: "◆",
      titulo: "Integridad comercial",
      texto:
        "El alcance que cotizamos es el que honramos. No inflamos precios para «negociar» ni anunciamos existencias que no tenemos.",
    },
    {
      icono: "◆",
      titulo: "Raíz y largo plazo",
      texto:
        "Desde 2015 construimos relaciones que duran años. Una familia de una década vale más que una venta espectacular que no se vuelve a abrir.",
    },
  ],

  servicios: [
    {
      titulo: "Res y cortes premium",
      texto:
        "Lomo, ribeye, vacío, picanha, falda y cortes de parrilla. Contrastamos origen y maduración para que el asado no se improvise el día de la mesa.",
      imagen:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&q=80&auto=format&fit=crop",
    },
    {
      titulo: "Cerdo y embutidos",
      texto:
        "Chuleta, costilla, pernil y embutidos de casa. Un interlocutor que habla el idioma de la cocina y el de quien paga la celebración.",
      imagen:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80&auto=format&fit=crop",
    },
    {
      titulo: "Pollo y aves",
      texto:
        "Pollo entero, pechuga, muslos y cortes para el menú diario. Acompañamos la elección para que la pieza coincida con la receta, no con la urgencia del mes.",
      imagen:
        "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=800&q=80&auto=format&fit=crop",
    },
    {
      titulo: "Cordero y especialidades",
      texto:
        "Pierna, costillar y cortes de temporada cuando el estado lo permite. La mesa especial no se gobierna con el primer anuncio del feed.",
      imagen:
        "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=800&q=80&auto=format&fit=crop",
    },
    {
      titulo: "Pedidos para eventos",
      texto:
        "Asados, celebraciones y menús de restaurante con lista escrita. Información de peso y porciones, no un empaque que nadie abre.",
      imagen:
        "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80&auto=format&fit=crop",
    },
    {
      titulo: "Asesoría y postventa",
      texto:
        "Cuando hay que cruzar un corte o devolver una pieza que no corresponde, acompañamos el cambio con realismo: qué entra, qué no, y cómo se presenta el estado. Sin milagros ni silencios.",
      imagen:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
    },
  ],

  proceso: [
    {
      paso: "01",
      titulo: "Conversación de corte",
      texto:
        "Escuchamos ocasión, número de comensales, receta y plazos. Definimos si somos la casa adecuada; no forzamos una venta que no encaja.",
    },
    {
      paso: "02",
      titulo: "Selección y cotización",
      texto:
        "Revisamos origen y existencias. Construimos una cotización al peso que la cocina pueda leer. Nada se improvisa en un chat de última hora.",
    },
    {
      paso: "03",
      titulo: "Pedido escrito y reserva",
      texto:
        "Confirmamos alcance, abono y calendario. El ID de campaña 583-992-4223 viaja con la consulta cuando el contacto nace de publicidad.",
    },
    {
      paso: "04",
      titulo: "Entrega y seguimiento",
      texto:
        "Entregamos con cadena de frío, documentamos el corte y dejamos instalada la disciplina de conservación. La relación no termina en la caja; empieza a medirse ahí.",
    },
  ],

  estadisticas: [
    { numero: 11, sufijo: "+", etiqueta: "Años de oficio en carnicería de finca" },
    { numero: 4200, sufijo: "+", etiqueta: "Pedidos y cortes acompañados" },
    { numero: 94, sufijo: "%", etiqueta: "Familias y cocinas que vuelven o refieren" },
    { numero: 18, sufijo: "+", etiqueta: "Familias de corte en mostrador" },
  ],

  equipo: [
    {
      nombre: "Andrés Felipe Orozco Marín",
      cargo: "Verificante de Google Ads y gobierno de la casa",
      bio: "Verificante de Google Ads de Carnicería La Gran Finca. Responsable de la identidad pública del sitio, de las campañas y de que cada promesa comercial coincida con el alcance real de la casa. Garantiza transparencia ante Google Ads y ante el visitante. Correo institucional: ryolimardunno@gmail.com.",
      imagen:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&q=85",
      destacado: true,
    },
    {
      nombre: "Ryo Limar Dunno",
      cargo: "Dirección de atención y canal digital",
      bio: "Gobierna el correo institucional, las consultas del formulario y la claridad del ticket. Cuida que ninguna cotización salga si el corte y el peso no la sostienen.",
      imagen:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&q=85",
    },
    {
      nombre: "Héctor Ramírez",
      cargo: "Maestro carnicero",
      bio: "Prepara cortes, despiece y entregas. Traduce el nombre de la receta al idioma del mostrador, sin teatralidad de «milagro de parrilla».",
      imagen:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop&q=85",
    },
    {
      nombre: "Camila Vargas",
      cargo: "Dirección de experiencia y postventa",
      bio: "Diseña el seguimiento del pedido, la claridad del comprobante y los reportes que el comprador no técnico también entiende. La información es parte del corte.",
      imagen:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop&q=85",
    },
  ],

  testimonios: [
    {
      texto:
        "Lo determinante no fue una vitrina elegante: fue que Carnicería La Gran Finca leyó el menú mejor que nosotros y llegó con un corte que el anfitrión pudo defender. Once años de casa se notan en la conversación, no en el folleto.",
      autor: "Óscar Medina",
      cargo: "Anfitrión de asados, Medellín",
    },
    {
      texto:
        "Necesitábamos un ribeye de finca sin teatralidad. La casa fue clara en lo que entraba y en lo que no. Esa honestidad nos ahorró una semana de compras inútiles. Volveremos a llamarlos en el siguiente evento.",
      autor: "Lina Duarte",
      cargo: "Coordinadora de un restaurante",
    },
    {
      texto:
        "Como particular, pedía un corte que un adulto no técnico pudiera entender. La cotización dejó de ser un archivo y se volvió la lista de la compra. Recomiendo la casa a cualquiera que compre en serio.",
      autor: "Ricardo Herrera",
      cargo: "Cliente particular",
    },
    {
      texto:
        "El vacío y la picanha nos tenían contra la pared cada temporada. El corte y la entrega se honraron. Una casa con responsable de pedido: eso, en este oficio, es oro.",
      autor: "Patricia Gómez",
      cargo: "Socia de una cocina familiar",
    },
  ],

  faq: [
    {
      pregunta: "¿Venden carne de procedencia dudosa o sin cadena de frío?",
      respuesta:
        "No. Somos una casa de carnicería de finca: piezas que se comercializan con origen, corte y cadena de frío. No vendemos carne opaca como si fuera de alta gama. Si su consulta es de un corte documentado, con gusto la atendemos.",
    },
    {
      pregunta: "¿Quiénes son y a qué se dedican?",
      respuesta:
        "Carnicería La Gran Finca es una casa colombiana fundada en 2015, dedicada a la carnicería: res, cerdo, pollo, cordero y especialidades de mostrador. El sitio web institucional se usa desde 2015. No fingimos ser otra marca.",
    },
    {
      pregunta: "¿Desde cuándo existe la empresa y el sitio web?",
      respuesta:
        "La casa existe desde 2015. En 2026 cumplimos once años de oficio. Este sitio web se usa como canal institucional permanente desde entonces: aquí publicamos quiénes somos, a qué nos dedicamos, qué ofrecemos, qué brindamos, el correo, los términos, la privacidad y las cookies. El dominio carnicer-a-la-gran-finca.onrender.com es la URL pública. Google Ads revisa este mismo destino; no afirmamos ser un socio certificado oficial de Google.",
    },
    {
      pregunta: "¿Qué ofrecen y qué les brindan a sus clientes?",
      respuesta:
        "Ofrecemos asesoría de corte, selección y venta de carnes de finca. A los clientes les brindamos criterio de mostrador, cotización al peso, cadena de frío y continuidad después de la entrega. No prometemos existencias que no tenemos.",
    },
    {
      pregunta: "¿Dónde están ubicados?",
      respuesta:
        "El domicilio institucional se publica como DIRECCIÓN COMPLETA. Complete ese dato en config.js para que coincida con el local real. En «Ubicación» y en Contacto encontrará el mapa, los datos y el ID de campaña 583-992-4223.",
    },
    {
      pregunta: "¿Atienden solo particulares o también restaurantes?",
      respuesta:
        "Atendemos particulares, restaurantes, hoteles y organizadores de eventos que compran un corte real. No intermediamos carne de procedencia ilícita. Si su necesidad es de un precio irreal sin origen, con respeto, no somos el canal.",
    },
    {
      pregunta: "¿Cómo se formaliza un pedido?",
      respuesta:
        "Tras la conversación inicial emitimos una cotización de alcance, corte, peso, plazos y precio. El pedido se formaliza por escrito (correo, WhatsApp institucional o en casa). Una consulta por formulario no genera obligación de comprar.",
    },
    {
      pregunta: "¿Hacen envíos?",
      respuesta:
        "Sí, dentro de Colombia, con flete, plazo y cadena de frío confirmados por escrito. No anunciamos entregas que el transportador no ha confirmado.",
    },
    {
      pregunta: "¿Este sitio está pensado para Google Ads y Search Console?",
      respuesta:
        "Sí. Publicamos quiénes somos, a qué nos dedicamos, dónde estamos y cómo contactarnos; incluimos términos, privacidad, cookies y una página de políticas de Google Ads. El sitemap y robots.txt permiten el rastreo. Preferimos primero la visibilidad orgánica (Search Console, Business Profile, Maps, YouTube) y, en paralelo, campañas de búsqueda cuyo anuncio dice lo mismo que este sitio. La aprobación de anuncios y la posición las decide Google.",
    },
    {
      pregunta: "¿Qué es el ID de campaña?",
      respuesta:
        "Es el identificador institucional de nuestro canal publicitario: 583-992-4223. Aparece en el pie de página y viaja de forma oculta con cada envío del formulario para asociar su consulta al canal correcto, con transparencia.",
    },
    {
      pregunta: "¿Debo aceptar los términos para enviar el formulario?",
      respuesta:
        "Sí. El envío exige la aceptación expresa de los Términos y Condiciones. Sin esa casilla marcada, el formulario no se transmite. También puede consultar la Política de Privacidad y la Política de Cookies.",
    },
    {
      pregunta: "¿Cuál es el horario de atención?",
      respuesta:
        "Atendemos de lunes a viernes de 07:00 a 19:00, sábados de 07:00 a 18:00 y domingos de 08:00 a 14:00. Las consultas por correo fuera de horario se revisan el siguiente día hábil.",
    },
    {
      pregunta: "¿Cómo solicito una primera conversación?",
      respuesta:
        "Complete el formulario de contacto, escriba a ryolimardunno@gmail.com o use WhatsApp al NÚMERO CON INDICATIVO. Indique corte, peso aproximado y ciudad. Un responsable le responderá.",
    },
  ],

  heroImagenes: [
    {
      url: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=1920&q=85&auto=format&fit=crop",
      alt: "Corte de res de alta gama — Carnicería La Gran Finca",
    },
    {
      url: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&q=85&auto=format&fit=crop",
      alt: "Carnes frescas de finca en mostrador",
    },
    {
      url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1920&q=85&auto=format&fit=crop",
      alt: "Steak premium a la parrilla",
    },
    {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=85&auto=format&fit=crop",
      alt: "Ganado de finca y origen de la casa",
    },
    {
      url: "https://images.unsplash.com/photo-1558030006-450675393462?w=1920&q=85&auto=format&fit=crop",
      alt: "Asado de cortes seleccionados",
    },
    {
      url: "https://images.unsplash.com/photo-1615141982883-c7adde2b3576?w=1920&q=85&auto=format&fit=crop",
      alt: "Selección de cortes crudos de alta gama",
    },
  ],

  galeria: [
    {
      url: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=1200&q=80&auto=format&fit=crop",
      alt: "Ribeye de finca",
      caption: "Res premium",
    },
    {
      url: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&q=80&auto=format&fit=crop",
      alt: "Mostrador de carnes",
      caption: "Mostrador",
    },
    {
      url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&q=80&auto=format&fit=crop",
      alt: "Corte a la parrilla",
      caption: "Parrilla",
    },
    {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80&auto=format&fit=crop",
      alt: "Finca y ganado",
      caption: "Origen",
    },
    {
      url: "https://images.unsplash.com/photo-1615141982883-c7adde2b3576?w=1200&q=80&auto=format&fit=crop",
      alt: "Cortes crudos seleccionados",
      caption: "Selección",
    },
    {
      url: "https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=80&auto=format&fit=crop",
      alt: "Asado de evento",
      caption: "Eventos",
    },
    {
      url: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=1200&q=80&auto=format&fit=crop",
      alt: "Steak en tabla",
      caption: "Alta gama",
    },
    {
      url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80&auto=format&fit=crop",
      alt: "Mesa de carne",
      caption: "Mesa",
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
      alt: "Cocina profesional",
      caption: "Cocina",
    },
    {
      url: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=1200&q=80&auto=format&fit=crop",
      alt: "Cordero y especialidades",
      caption: "Especialidades",
    },
    {
      url: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=1200&q=80&auto=format&fit=crop",
      alt: "Aves de la casa",
      caption: "Aves",
    },
    {
      url: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=1200&q=80&auto=format&fit=crop",
      alt: "Tabla de cortes",
      caption: "Tabla",
    },
  ],

  sectores: [
    {
      titulo: "Familias exigentes",
      texto: "Lenguaje claro para quien paga la mesa y no quiere que le vendan un corte opaco como si fuera de finca.",
    },
    {
      titulo: "Restaurantes y hoteles",
      texto: "Lista de cortes, peso y un interlocutor que entiende el idioma de la cocina. Sin existencias inventadas.",
    },
    {
      titulo: "Eventos y celebraciones",
      texto: "Varias porciones con la misma disciplina de origen. Un responsable de pedido y un calendario de entrega.",
    },
    {
      titulo: "Asadores y parrillas",
      texto: "Vacío, picanha, costilla y lomo para quien asa con criterio, no con el primer anuncio.",
    },
    {
      titulo: "Cocinas de alta gama",
      texto: "Búsqueda de cortes secos y especialidades cuando la mesa exige una pieza que se puede defender.",
    },
    {
      titulo: "Servicio intermunicipal",
      texto: "Envíos cotizados por escrito, con cadena de frío. No prometemos un plazo que el transportador no ha confirmado.",
    },
  ],

  catalogoLineas: [
    {
      titulo: "Res",
      texto: "Lomo, ribeye, vacío, picanha y falda. Compatibilidad con la receta y el fuego. La res como gobierno, no como sorpresa.",
    },
    {
      titulo: "Cerdo",
      texto: "Chuleta, costilla, pernil y embutidos. Relación institucional con lo que la mesa puede sostener.",
    },
    {
      titulo: "Pollo",
      texto: "Entero, pechuga y muslos alineados al menú diario, no a la moda de la semana.",
    },
    {
      titulo: "Cordero",
      texto: "Pierna y costillar de temporada cuando el estado lo permite.",
    },
    {
      titulo: "Eventos",
      texto: "Porciones y listas escritas. Solo cortes cuyo peso se puede defender en la cotización.",
    },
    {
      titulo: "Asesoría",
      texto: "Corte, maduración y conservación. Cuando hay que hablar claro con la cocina.",
    },
  ],
};
