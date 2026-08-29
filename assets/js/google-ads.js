/**
 * GOOGLE ADS — Carnicería La Gran Finca
 * Anuncio de BÚSQUEDA alineado al sitio publicado:
 * https://carnicer-a-la-gran-finca.onrender.com
 *
 * Titulares RSA: 15 textos, máximo 30 caracteres.
 * Descripciones RSA: 4 textos, máximo 90 caracteres.
 * Palabras clave: 8 en concordancia EXACTA (en verde, APTA, parte superior).
 *
 * El anuncio dice lo mismo que el sitio: quiénes somos, a qué nos dedicamos
 * (carnicería de alta gama / carnes de finca) y que el canal web institucional
 * se usa de forma continua desde 2015 (más de 10 años) como destino
 * de campañas de Google Ads. No fingimos certificación oficial de Google.
 *
 * Políticas: destino idéntico, sin cloaking, identidad verificable,
 * carnes reales, sin promesas de milagro ni existencias inventadas.
 */
const OV_GOOGLE_ADS = {
  urlFinal: "https://carnicer-a-la-gran-finca.onrender.com/",
  urlVisualizacion: "carnicer-a-la-gran-finca.onrender.com",
  regionCampana: "Campaña de búsqueda · Colombia",

  anunciante: {
    nombreComercial: "Carnicería La Gran Finca",
    verificante: "Andrés Felipe Orozco Marín",
    cargoVerificante: "Verificante de Google Ads",
    direccion: "DIRECCIÓN COMPLETA",
    email: "ryolimardunno@gmail.com",
    telefono: "NÚMERO CON INDICATIVO",
    idCampana: "583-992-4223",
    urlFinal: "https://carnicer-a-la-gran-finca.onrender.com/",
  },

  palabrasClaveCampana: [
    "carnicería",
    "carnes premium",
    "carne de res",
    "Carnicería La Gran Finca",
    "carnicería de finca",
    "cortes de carne",
    "carne fresca",
    "carnicería premium",
  ],

  palabrasClaveExacta: [
    "[carnicería]",
    "[carnes premium]",
    "[carne de res]",
    "[Carnicería La Gran Finca]",
    "[carnicería de finca]",
    "[cortes de carne]",
    "[carne fresca]",
    "[carnicería premium]",
  ],

  palabrasClaveConcordancia: [
    '"carnicería"',
    '"carnes premium"',
    '"carne de res"',
    '"Carnicería La Gran Finca"',
    '"carnicería de finca"',
    '"cortes de carne"',
    '"carne fresca"',
    '"carnicería premium"',
  ],

  palabrasClaveNegativas: [
    "gratis",
    "regalo",
    "empleo",
    "vacante",
    "casino",
    "apuestas",
    "forex",
    "bitcoin",
    "préstamo",
    "carne vencida",
    "sin factura",
    "contrabando",
    "carne robada",
    "matadero clandestino",
    "precio irreal",
  ],

  /* Todos ≤ 30 caracteres. Identidad, oficio, +10 años de canal web. */
  titulares: [
    { texto: "Carnicería La Gran Finca" },
    { texto: "Carnes de alta gama" },
    { texto: "Carnicería premium" },
    { texto: "Carne fresca de finca" },
    { texto: "Sitio web +10 años" },
    { texto: "Web +10 años Ads" },
    { texto: "Cortes de res premium" },
    { texto: "Carne de res y cerdo" },
    { texto: "Pida su corte hoy" },
    { texto: "Calidad de finca" },
    { texto: "Casa de carnicería" },
    { texto: "Venta de carnes" },
    { texto: "Carnes seleccionadas" },
    { texto: "Consulte disponibilidad" },
    { texto: "Transparencia de corte" },
  ],

  /* Exactamente 4 descripciones, cada una ≤ 90 caracteres. */
  descripciones: [
    {
      texto:
        "Carnicería La Gran Finca: carnes de finca. Sitio web +10 años. Consulte cortes.",
    },
    {
      texto:
        "Venta de carnes premium de finca. Quiénes somos y a qué nos dedicamos.",
    },
    {
      texto:
        "Cortes de res, cerdo y pollo. Dirección, correo e ID de campaña visibles aquí.",
    },
    {
      texto:
        "Canal web institucional +10 años, destino de Google Ads. Pida su corte con claridad.",
    },
  ],

  extensiones: {
    sitelinks: [
      { titulo: "Quiénes somos", url: "quienes-somos.html", desc: "Casa +10 años" },
      { titulo: "A qué nos dedicamos", url: "a-que-nos-dedicamos.html", desc: "Oficio real" },
      { titulo: "Contacto", url: "contacto.html", desc: "Formulario y WhatsApp" },
      { titulo: "Políticas Ads", url: "politicas-google-ads.html", desc: "Transparencia" },
    ],
    callouts: [
      "Quiénes somos, claro",
      "Carnes de finca",
      "Sitio web +10 años",
      "Cortes al peso",
      "ID 583-992-4223",
      "Verificante A. Orozco",
    ],
  },

  checklistPoliticas: [
    "El anuncio y el sitio dicen lo mismo: quiénes somos (Carnicería La Gran Finca), a qué nos dedicamos (carnicería / carnes de finca y cortes de alta gama) y que el canal web institucional se usa desde 2015 (más de 10 años) como destino de campañas de Google Ads.",
    "URL final única: https://carnicer-a-la-gran-finca.onrender.com/ — el destino coincide con el anuncio. Sin cloaking ni páginas distintas para el robot.",
    "15 titulares de máximo 30 caracteres y 4 descripciones de máximo 90, listos para RSA, visibles en la parte superior de esta sección.",
    "8 palabras clave de concordancia exacta, en verde y APTA: coinciden con secciones reales del sitio y no prometen carne vencida, regalos ni existencias inventadas.",
    "Identidad verificable: Carnicería La Gran Finca, correo ryolimardunno@gmail.com, ID de campaña 583-992-4223, verificante Andrés Felipe Orozco Marín.",
    "No vendemos carne de procedencia opaca presentada como de finca, no prometemos milagros gastronómicos y no ocultamos que se trata de una carnicería real con mostrador y cadena de frío.",
    "Precios y disponibilidad se confirman al peso y por escrito. El inventario de finca cambia; no anunciamos un corte que no podemos honrar.",
    "Políticas publicadas: Términos, Privacidad, Cookies y Políticas de Google Ads. Formulario con casilla obligatoria de términos.",
    "Banner de cookies con aceptar / rechazar / configurar y Consent Mode v2.",
    "Destino apto para móviles y escritorio, con datos de contacto visibles.",
    "SEO orgánico primero: sitemap, robots, datos estructurados, Search Console, Google Business Profile, Maps, YouTube y Bing Webmaster. La campaña de búsqueda replica el mismo mensaje. La posición en Google la decide Google.",
    "No afirmamos ser un socio certificado oficial de Google ni un sello de aprobación de Google Ads. El sitio es el destino que Google Ads revisa; la aprobación la decide Google.",
  ],
};

OV_GOOGLE_ADS.exportarTitulares = function () {
  return OV_GOOGLE_ADS.titulares.map(function (t) {
    return t.texto;
  });
};

OV_GOOGLE_ADS.exportarDescripciones = function () {
  return OV_GOOGLE_ADS.descripciones.map(function (d) {
    return d.texto;
  });
};
