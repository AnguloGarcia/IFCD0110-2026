      const botonMenu = document.querySelector(".boton-menu");
      const menuPrincipal = document.querySelector("#menu-principal");
      const enlacesMenu = document.querySelectorAll("#menu-principal a");
      const formularioPresupuesto = document.querySelector("#formulario-presupuesto");
      const selectorIdioma = document.querySelector("#selector-idioma");
      const cursorFuego = document.querySelector(".cursor-fuego");
      const permiteMovimiento = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const widgetReseñas = document.querySelector(".widget-automatico-reseñas");

      const textos = {
        es: {
          idiomaLabel: "Idioma",
          menu: "Menu",
          cerrar: "Cerrar",
          navInicio: "Inicio",
          navServicios: "Servicios",
          navProceso: "Proceso",
          navReseñas: "Reseñas",
          navPresupuesto: "Presupuesto",
          navContacto: "Contacto",
          navFaq: "FAQ",
          heroTag: "Mudanzas locales y nacionales",
          heroTitle: "Mudanzas faciles en <span>Vilafranca</span>",
          heroText: "Mudanzas Vilafranca ofrece servicios de mudanzas locales y nacionales para hogares, pisos, oficinas y negocios. Nuestro equipo se encarga del embalaje, desmontaje, carga, transporte, descarga y montaje de muebles con trato cuidadoso y puntual. Trabajamos en Vilafranca del Penedes y alrededores, preparando cada traslado segun la distancia, el volumen y las necesidades del cliente. Si buscas una empresa de mudanzas profesional, rapida y segura, solicita presupuesto sin compromiso. Organizamos cajas, protegemos objetos delicados y planificamos cada detalle para que tu cambio de vivienda o local sea comodo, claro y sin preocupaciones desde el primer contacto hasta la entrega final completa.",
          heroPrimary: "Pide presupuesto",
          heroSecondary: "Ver reseñas",
          mini1: "Respuesta rapida",
          mini2: "Muebles protegidos",
          mini3: "Servicios completos",
          mini4: "Presupuesto sin compromiso",
          demoTitle: "Presupuesto en pocos pasos",
          demoText: "Origen, destino, fecha y volumen para preparar una propuesta clara.",
          serviciosTag: "Servicios",
          serviciosTitle: "Todo lo que necesita una mudanza profesional",
          serviciosText: "Tarjetas limpias, directas y visuales, al estilo de una landing moderna.",
          servicio1Title: "Mudanzas de hogar",
          servicio1Text: "Nuestro servicio de mudanzas de hogar en Vilafranca esta pensado para trasladar pisos, casas y apartamentos con seguridad. Embalamos muebles, electrodomesticos, ropa, vajilla y objetos delicados, desmontamos piezas grandes y protegemos cada caja durante el transporte. Organizamos mudanzas locales y nacionales con planificacion, puntualidad y presupuesto claro. Si necesitas una empresa de mudanzas fiable, rapida y profesional, preparamos el traslado completo para que tu cambio de vivienda sea comodo, ordenado y sin preocupaciones desde el primer dia, en todo momento.",
          servicio2Title: "Oficinas y negocios",
          servicio2Text: "Nuestro servicio de mudanzas de oficinas en Vilafranca ayuda a empresas, despachos y comercios a cambiar de espacio con rapidez y organizacion. Trasladamos mesas, sillas, archivadores, ordenadores, impresoras, documentacion y material corporativo con embalaje seguro y etiquetado claro. Planificamos la mudanza de oficina para reducir paradas, proteger equipos y respetar horarios de trabajo. Si buscas una empresa de mudanzas profesional para negocios, preparamos un presupuesto ajustado y un traslado ordenado, puntual y eficiente de principio a fin completo siempre seguro.",
          servicio3Title: "Embalaje y montaje",
          servicio3Text: "El servicio de embalaje y montaje para mudanzas protege tus muebles y objetos antes, durante y despues del transporte. Utilizamos cajas resistentes, plastico protector, mantas, cinta, etiquetas y materiales adecuados para vajilla, cuadros, electrodomesticos y piezas delicadas. Tambien desmontamos armarios, camas, mesas y estanterias, y los montamos en el nuevo destino. Con un embalaje profesional, la mudanza es mas segura, ordenada y eficiente. Solicita presupuesto para embalaje, desmontaje, montaje y proteccion completa de tus pertenencias, siempre con cuidado profesional garantizado.",
          servicio4Title: "Mudanza con plataforma",
          servicio4Text: "El servicio de mudanza con plataforma elevadora en Vilafranca facilita subir y bajar muebles grandes por fachada, balcon o ventana cuando las escaleras son estrechas o el ascensor no permite el acceso. Usamos plataforma montamuebles para sofás, armarios, electrodomesticos, cajas pesadas y piezas delicadas, reduciendo golpes, tiempos y esfuerzo. Planificamos permisos, altura, acceso y seguridad para una mudanza rapida, profesional y eficiente. Solicita presupuesto para mudanzas con elevador y transporte protegido en viviendas, oficinas y locales sin complicaciones extra siempre.",
          procesoTag: "Funcionamiento",
          procesoTitle: "Como funciona el servicio",
          procesoText: "Nuestro proceso de mudanzas en Vilafranca empieza con una consulta personalizada, continua con presupuesto claro, embalaje seguro, planificacion del transporte y entrega puntual. Coordinamos fechas, volumen, acceso, montaje y proteccion de muebles para que cada mudanza local o nacional sea rapida, ordenada, profesional y sin preocupaciones para hogares y negocios.",
          procesoButton: "Empezar ahora",
          paso1Title: "Consulta",
          paso1Text: "En la consulta de mudanza realizamos una visita a domicilio en Vilafranca para tomar fotos, revisar accesos, escaleras, ascensor, volumen de muebles, objetos delicados y necesidades especiales, preparando un presupuesto de mudanzas preciso, seguro, profesional y adaptado a tu vivienda.",
          paso2Title: "Presupuesto",
          paso2Text: "Con la informacion de la visita preparamos un presupuesto detallado y sin compromiso, desglosado por volumen, distancia, embalaje y servicios adicionales, para que sepas exactamente que incluye tu mudanza y puedas decidir con confianza, sin sorpresas ni costes ocultos al final.",
          paso3Title: "Preparacion",
          paso3Text: "Organizamos cajas, plastico protector, mantas y etiquetas para cada habitacion, desmontamos muebles grandes y coordinamos fechas y horarios de recogida con el equipo, dejando todo listo y protegido para que la carga sea rapida, ordenada y sin imprevistos el dia de la mudanza.",
          paso4Title: "Entrega",
          paso4Text: "Transportamos tus pertenencias con cuidado, descargamos en el nuevo domicilio u oficina y colocamos cada mueble y caja en el lugar acordado, incluyendo montaje si es necesario, para que termines la mudanza con todo en su sitio y sin trabajo pendiente.",
          reseñasTag: "Reseñas",
          reseñasTitle: "Clientes que confian en Mudanzas Vilafranca",
          reseñasText: "Opiniones destacadas para mostrar confianza desde el primer vistazo.",
          widgetAviso: "Aqui se mostrara el widget automatico de reseñas cuando pegues el codigo de la plataforma.",
          googleSubtitle: "Reseñas visibles en esta pagina",
          editable: "Contenido editable",
          notaGoogle: "5 estrellas",
          notaGoogleText: "Mas notas y comentarios actualizados en Google",
          reseña1Title: "Reseña real 1",
          reseña1Text: "\"Pega aqui el texto exacto de la primera reseña de Google.\"",
          reseña2Title: "Reseña real 2",
          reseña2Text: "\"Pega aqui el texto exacto de la segunda reseña de Google.\"",
          reseña3Title: "Reseña real 3",
          reseña3Text: "\"Pega aqui el texto exacto de la tercera reseña de Google.\"",
          notaLegal: "Sustituye estos textos por las reseñas reales copiadas desde Google si quieres mostrar comentarios exactos de clientes.",
          presupuestoTag: "Presupuesto online",
          presupuestoTitle: "Recibe solicitudes desde la web",
          presupuestoText: "El formulario queda visible, moderno y facil de completar desde movil.",
          lista1: "Atencion en Vilafranca y alrededores",
          lista2: "Traslados locales y nacionales",
          lista3: "Opciones con embalaje, desmontaje y montaje",
          labelNombre: "Nombre completo",
          placeholderNombre: "Tu nombre",
          labelTelefono: "Telefono",
          labelEmail: "Email",
          labelCiudadOrigen: "Ciudad de recogida",
          labelCiudadDestino: "Ciudad de entrega",
          labelDireccionOrigen: "Direccion de recogida",
          labelDireccionDestino: "Direccion de entrega",
          labelPisoOrigen: "Piso de recogida",
          labelAscensorOrigen: "Ascensor en recogida",
          labelPisoDestino: "Piso de entrega",
          labelAscensorDestino: "Ascensor en entrega",
          labelFechaMudanza: "Fecha aproximada de la mudanza",
          labelHabitaciones: "Numero de habitaciones",
          labelMueblesGrandes: "Muebles grandes",
          labelNumCajas: "Numero aproximado de cajas",
          labelEmbalaje: "Necesita embalaje?",
          labelDesmontaje: "Necesita desmontaje y montaje?",
          labelFotos: "Fotos o videos de la mudanza",
          labelMensaje: "Observaciones",
          placeholderMensaje: "Cualquier detalle adicional sobre la mudanza",
          opcionSeleccione: "Selecciona",
          opcionSi: "Sí",
          opcionNo: "No",
          submit: "Solicitar presupuesto",
          enviando: "Enviando...",
          envioExito: "Gracias! Hemos recibido tu solicitud, te contactaremos pronto.",
          envioError: "No se ha podido enviar. Prueba de nuevo o contactanos por WhatsApp.",
          contactoTag: "Contacto",
          contactoTitle: "Datos directos del negocio",
          contactoText: "Informacion clara para contactar sin tener que buscar.",
          telefonoTitle: "Telefono",
          whatsapp: "Escribir por WhatsApp",
          emailTitle: "Email",
          gmail: "Enviar Gmail",
          zonaTitle: "Zona",
          zonaText: "Vilafranca del Penedes y toda Espana",
          faqTag: "Preguntas",
          faqTitle: "Resuelve dudas antes de pedir presupuesto",
          faq1Title: "Hacemos mudanzas fuera de Vilafranca?",
          faq1Text: "Si, se pueden preparar mudanzas locales, comarcales y nacionales.",
          faq2Title: "Se puede pedir embalaje?",
          faq2Text: "Si, el servicio puede incluir cajas, protecciones, desmontaje y montaje.",
          faq3Title: "Como se calcula el presupuesto?",
          faq3Text: "Depende de origen, destino, volumen, accesos, fecha y servicios adicionales.",
          faq4Title: "La web funciona bien en movil?",
          faq4Text: "Si, el menu se despliega y las secciones se adaptan a pantallas pequenas.",
          footer: "2026 Mudanzas Vilafranca - Todos los derechos reservados"
        },
        ca: {
          idiomaLabel: "Idioma",
          menu: "Menu",
          cerrar: "Tancar",
          navInicio: "Inici",
          navServicios: "Serveis",
          navProceso: "Proces",
          navReseñas: "Ressenyes",
          navPresupuesto: "Pressupost",
          navContacto: "Contacte",
          navFaq: "FAQ",
          heroTag: "Mudances locals i nacionals",
          heroTitle: "Mudances facils a <span>Vilafranca</span>",
          heroText: "Mudanzas Vilafranca ofereix serveis de mudances locals i nacionals per a llars, pisos, oficines i negocis. El nostre equip s'encarrega de l'embalatge, desmuntatge, carrega, transport, descarrega i muntatge de mobles amb tracte curos i puntual. Treballem a Vilafranca del Penedes i voltants, preparant cada trasllat segons la distancia, el volum i les necessitats del client. Si busques una empresa de mudances professional, rapida i segura, demana pressupost sense compromis. Organitzem caixes, protegim objectes delicats i planifiquem cada detall perque el teu canvi de vivienda o local sigui comode des del primer contacte fins a entrega final amb cura i seguretat.",
          heroPrimary: "Demana pressupost",
          heroSecondary: "Veure ressenyes",
          mini1: "Resposta rapida",
          mini2: "Mobles protegits",
          mini3: "Serveis complets",
          mini4: "Pressupost sense compromis",
          demoTitle: "Pressupost en pocs passos",
          demoText: "Origen, destinacio, data i volum per preparar una proposta clara.",
          serviciosTag: "Serveis",
          serviciosTitle: "Tot el que necessita una mudanca professional",
          serviciosText: "Targetes netes, directes i visuals, amb estil de landing moderna.",
          servicio1Title: "Mudances de llar",
          servicio1Text: "El nostre servei de mudances de llar a Vilafranca esta pensat per traslladar pisos, cases i apartaments amb seguretat. Embalem mobles, electrodomestics, roba, vaixella i objectes delicats, desmuntem peces grans i protegim cada caixa durant el transport. Organitzem mudances locals i nacionals amb planificacio, puntualitat i pressupost clar. Si necessites una empresa de mudances fiable, rapida i professional, preparem el trasllat complet perque el canvi de vivenda sigui comode, ordenat i sense preocupacions des del primer dia, en tot moment.",
          servicio2Title: "Oficines i negocis",
          servicio2Text: "El servei de mudances d'oficines a Vilafranca ajuda empreses, despatxos i comerços a canviar d'espai amb rapidesa i organitzacio. Traslladem taules, cadires, arxivadors, ordinadors, impressores, documentacio i material corporatiu amb embalatge segur i etiquetatge clar. Planifiquem la mudanca d'oficina per reduir aturades, protegir equips i respectar horaris de feina. Si busques una empresa de mudances professional per a negocis, preparem un pressupost ajustat i un trasllat ordenat, puntual i eficient sempre segur per a cada client fidel amb resultat profesional.",
          servicio3Title: "Embalatge i muntatge",
          servicio3Text: "El servei d'embalatge i muntatge per a mudances protegeix els teus mobles i objectes abans, durant i despres del transport. Utilitzem caixes resistents, plastic protector, mantes, cinta, etiquetes i materials adequats per a vaixella, quadres, electrodomestics i peces delicades. Tambe desmuntem armaris, llits, taules i prestatgeries, i els muntem al nou desti. Amb embalatge professional, la mudanca es mes segura, ordenada i eficient. Demana pressupost per embalatge, desmuntatge, muntatge i proteccio completa amb servei de qualitat sempre professional molt segur.",
          servicio4Title: "Mudanca amb plataforma",
          servicio4Text: "El servei de mudanca amb plataforma elevadora a Vilafranca facilita pujar i baixar mobles grans per façana, balco o finestra quan les escales son estretes o l ascensor no permet l acces. Utilitzem plataforma muntamobles per sofas, armaris, electrodomestics, caixes pesades i peces delicades, reduint cops, temps i esforç. Planifiquem permisos, altura, acces i seguretat per a una mudanca rapida, professional i eficient. Demana pressupost per mudances amb elevador i transport protegit en llars, oficines i locals sense complicacions extra.",
          procesoTag: "Funcionament",
          procesoTitle: "Com funciona el servei",
          procesoText: "El proces de mudances a Vilafranca comenca amb una consulta personalitzada, continua amb pressupost clar, embalatge segur, planificacio del transport i entrega puntual. Coordinem dates, volum, acces, muntatge i proteccio de mobles perque cada mudanca local o nacional sigui rapida, ordenada, professional i sense preocupacions per a llars i negocis.",
          procesoButton: "Comencar ara",
          paso1Title: "Consulta",
          paso1Text: "A la consulta de mudanca fem una visita a domicili a Vilafranca per fer fotos, revisar accessos, escales, ascensor, volum de mobles, objectes delicats i necessitats especials, preparant un pressupost de mudances precis, segur, professional i adaptat a la vivienda.",
          paso2Title: "Pressupost",
          paso2Text: "Amb la informacio de la visita preparem un pressupost detallat i sense compromis, desglossat per volum, distancia, embalatge i serveis addicionals, perque sapigues exactament que inclou la teva mudanca i puguis decidir amb confianca, sense sorpreses ni costos ocults al final.",
          paso3Title: "Preparacio",
          paso3Text: "Organitzem caixes, plastic protector, mantes i etiquetes per a cada habitacio, desmuntem mobles grans i coordinem dates i horaris de recollida amb l'equip, deixant-ho tot a punt i protegit perque la carrega sigui rapida, ordenada i sense imprevistos el dia de la mudanca.",
          paso4Title: "Entrega",
          paso4Text: "Transportem les teves pertinences amb cura, descarreguem al nou domicili o oficina i col.loquem cada moble i caixa al lloc acordat, incloent muntatge si cal, perque acabis la mudanca amb tot al seu lloc i sense feina pendent.",
          reseñasTag: "Ressenyes",
          reseñasTitle: "Clients que confien en Mudanzas Vilafranca",
          reseñasText: "Opinions destacades per mostrar confianca des del primer cop d'ull.",
          widgetAviso: "Aqui es mostrara el widget automatic de ressenyes quan enganxis el codi de la plataforma.",
          googleSubtitle: "Ressenyes visibles en aquesta pagina",
          editable: "Contingut editable",
          notaGoogle: "5 estrelles",
          notaGoogleText: "Mes notes i comentaris actualitzats a Google",
          reseña1Title: "Ressenya real 1",
          reseña1Text: "\"Enganxa aqui el text exacte de la primera ressenya de Google.\"",
          reseña2Title: "Ressenya real 2",
          reseña2Text: "\"Enganxa aqui el text exacte de la segona ressenya de Google.\"",
          reseña3Title: "Ressenya real 3",
          reseña3Text: "\"Enganxa aqui el text exacte de la tercera ressenya de Google.\"",
          notaLegal: "Substitueix aquests textos per les ressenyes reals copiades de Google si vols mostrar comentaris exactes de clients.",
          presupuestoTag: "Pressupost online",
          presupuestoTitle: "Rep sol.licituds des de la web",
          presupuestoText: "El formulari queda visible, modern i facil de completar des del mobil.",
          lista1: "Atencio a Vilafranca i voltants",
          lista2: "Trasllats locals i nacionals",
          lista3: "Opcions amb embalatge, desmuntatge i muntatge",
          labelNombre: "Nom complet",
          placeholderNombre: "El teu nom",
          labelTelefono: "Telefon",
          labelEmail: "Email",
          labelCiudadOrigen: "Ciutat de recollida",
          labelCiudadDestino: "Ciutat d'entrega",
          labelDireccionOrigen: "Adreca de recollida",
          labelDireccionDestino: "Adreca d'entrega",
          labelPisoOrigen: "Pis de recollida",
          labelAscensorOrigen: "Ascensor a la recollida",
          labelPisoDestino: "Pis d'entrega",
          labelAscensorDestino: "Ascensor a l'entrega",
          labelFechaMudanza: "Data aproximada de la mudanca",
          labelHabitaciones: "Nombre d'habitacions",
          labelMueblesGrandes: "Mobles grans",
          labelNumCajas: "Nombre aproximat de caixes",
          labelEmbalaje: "Necessita embalatge?",
          labelDesmontaje: "Necessita desmuntatge i muntatge?",
          labelFotos: "Fotos o videos de la mudanca",
          labelMensaje: "Observacions",
          placeholderMensaje: "Qualsevol detall addicional sobre la mudanca",
          opcionSeleccione: "Selecciona",
          opcionSi: "Sí",
          opcionNo: "No",
          submit: "Sol.licitar pressupost",
          enviando: "Enviant...",
          envioExito: "Gracies! Hem rebut la teva sol.licitud, et contactarem aviat.",
          envioError: "No s'ha pogut enviar. Torna-ho a provar o contacta'ns per WhatsApp.",
          contactoTag: "Contacte",
          contactoTitle: "Dades directes del negoci",
          contactoText: "Informacio clara per contactar sense haver de buscar.",
          telefonoTitle: "Telefon",
          whatsapp: "Escriure per WhatsApp",
          emailTitle: "Email",
          gmail: "Enviar Gmail",
          zonaTitle: "Zona",
          zonaText: "Vilafranca del Penedes i tota Espanya",
          faqTag: "Preguntes",
          faqTitle: "Resol dubtes abans de demanar pressupost",
          faq1Title: "Fem mudances fora de Vilafranca?",
          faq1Text: "Si, es poden preparar mudances locals, comarcals i nacionals.",
          faq2Title: "Es pot demanar embalatge?",
          faq2Text: "Si, el servei pot incloure caixes, proteccions, desmuntatge i muntatge.",
          faq3Title: "Com es calcula el pressupost?",
          faq3Text: "Depen d'origen, destinacio, volum, accessos, data i serveis addicionals.",
          faq4Title: "La web funciona be en mobil?",
          faq4Text: "Si, el menu es desplega i les seccions s'adapten a pantalles petites.",
          footer: "2026 Mudanzas Vilafranca - Tots els drets reservats"
        },
        en: {
          idiomaLabel: "Language",
          menu: "Menu",
          cerrar: "Close",
          navInicio: "Home",
          navServicios: "Services",
          navProceso: "Process",
          navReseñas: "Reviews",
          navPresupuesto: "Quote",
          navContacto: "Contact",
          navFaq: "FAQ",
          heroTag: "Local and national moves",
          heroTitle: "Easy moving in <span>Vilafranca</span>",
          heroText: "Mudanzas Vilafranca provides local and national moving services for homes, apartments, offices and businesses. Our team handles packing, disassembly, loading, transport, unloading and furniture assembly with careful and punctual service. We work in Vilafranca del Penedes and nearby areas, planning every move according to distance, volume and each customer need. If you are looking for a professional, fast and secure moving company, request a free quote with no obligation. We organize boxes, protect fragile items and manage every detail so your home or business relocation feels clear, comfortable and stress free from first contact to final delivery, complete and safe.",
          heroPrimary: "Request a quote",
          heroSecondary: "See reviews",
          mini1: "Fast reply",
          mini2: "Protected furniture",
          mini3: "Complete services",
          mini4: "No-obligation quote",
          demoTitle: "Quote in a few steps",
          demoText: "Origin, destination, date and volume to prepare a clear proposal.",
          serviciosTag: "Services",
          serviciosTitle: "Everything a professional move needs",
          serviciosText: "Clean, direct and visual cards with a modern landing page style.",
          servicio1Title: "Home moving",
          servicio1Text: "Our home moving service in Vilafranca is designed to relocate flats, houses and apartments safely. We pack furniture, appliances, clothes, dishes and fragile items, disassemble large pieces and protect every box during transport. We organize local and national moves with planning, punctuality and a clear quote. If you need a reliable, fast and professional moving company, we prepare the complete relocation so your change of home is comfortable, organized and free from worries from the very first day, every step.",
          servicio2Title: "Offices and businesses",
          servicio2Text: "Our office moving service in Vilafranca helps companies, studios and shops relocate quickly and with clear organization. We move desks, chairs, filing cabinets, computers, printers, documents and business equipment with secure packing and careful labeling. We plan each office relocation to reduce downtime, protect devices and respect working hours. If you need a professional moving company for businesses, we prepare a tailored quote and an organized, punctual and efficient move from start to finish with safe handling every time safely.",
          servicio3Title: "Packing and assembly",
          servicio3Text: "Our packing and assembly service for moves protects your furniture and belongings before, during and after transport. We use strong boxes, protective wrap, blankets, tape, labels and suitable materials for dishes, pictures, appliances and fragile pieces. We also disassemble wardrobes, beds, tables and shelving, then assemble them at the new destination. With professional packing, your move is safer, tidier and more efficient. Request a quote for packing, disassembly, assembly and complete protection of your belongings with careful service always safely.",
          servicio4Title: "Moving with lift platform",
          servicio4Text: "Our moving lift platform service in Vilafranca helps raise and lower large furniture through the facade, balcony or window when stairs are narrow or the elevator cannot be used. We use a furniture lift for sofas, wardrobes, appliances, heavy boxes and delicate pieces, reducing knocks, time and effort. We plan permits, height, access and safety for a fast, professional and efficient move. Request a quote for moving with lift platform and protected transport for homes, offices and premises without stress.",
          procesoTag: "How it works",
          procesoTitle: "How the service works",
          procesoText: "Our moving process in Vilafranca starts with a personalized consultation, then a clear quote, secure packing, transport planning and punctual delivery. We coordinate dates, volume, access, assembly and furniture protection so every local or national move is fast, organized, professional and worry free for homes, offices and businesses today safely.",
          procesoButton: "Start now",
          paso1Title: "Request",
          paso1Text: "During the moving consultation, we visit your home in Vilafranca to take photos, check access, stairs, elevator, furniture volume, fragile items and special needs, preparing a precise, safe, professional moving quote adapted to your property and relocation plan today complete.",
          paso2Title: "Quote",
          paso2Text: "Using the information from the visit, we prepare a detailed, no-obligation quote broken down by volume, distance, packing and additional services, so you know exactly what your move includes and can decide with confidence, with no surprises or hidden costs at the end.",
          paso3Title: "Preparation",
          paso3Text: "We organize boxes, protective wrap, blankets and labels for each room, disassemble large furniture and coordinate dates and pickup times with the team, leaving everything ready and protected so loading is fast, orderly and free of surprises on moving day.",
          paso4Title: "Delivery",
          paso4Text: "We transport your belongings with care, unload at the new home or office and place every piece of furniture and box where agreed, including assembly if needed, so you finish the move with everything in place and no work left to do.",
          reseñasTag: "Reviews",
          reseñasTitle: "Customers who trust Mudanzas Vilafranca",
          reseñasText: "Highlighted reviews to show trust at first glance.",
          widgetAviso: "The automatic review widget will appear here when you paste the platform code.",
          googleSubtitle: "Reviews visible on this page",
          editable: "Editable content",
          notaGoogle: "5 stars",
          notaGoogleText: "More updated ratings and comments on Google",
          reseña1Title: "Real review 1",
          reseña1Text: "\"Paste here the exact text of the first Google review.\"",
          reseña2Title: "Real review 2",
          reseña2Text: "\"Paste here the exact text of the second Google review.\"",
          reseña3Title: "Real review 3",
          reseña3Text: "\"Paste here the exact text of the third Google review.\"",
          notaLegal: "Replace these texts with real reviews copied from Google if you want to show exact customer comments.",
          presupuestoTag: "Online quote",
          presupuestoTitle: "Receive requests from the website",
          presupuestoText: "The form is visible, modern and easy to complete on mobile.",
          lista1: "Service in Vilafranca and nearby areas",
          lista2: "Local and national moves",
          lista3: "Options with packing, disassembly and assembly",
          labelNombre: "Full name",
          placeholderNombre: "Your name",
          labelTelefono: "Phone",
          labelEmail: "Email",
          labelCiudadOrigen: "Pickup city",
          labelCiudadDestino: "Delivery city",
          labelDireccionOrigen: "Pickup address",
          labelDireccionDestino: "Delivery address",
          labelPisoOrigen: "Pickup floor",
          labelAscensorOrigen: "Elevator at pickup",
          labelPisoDestino: "Delivery floor",
          labelAscensorDestino: "Elevator at delivery",
          labelFechaMudanza: "Approximate moving date",
          labelHabitaciones: "Number of rooms",
          labelMueblesGrandes: "Large furniture",
          labelNumCajas: "Approximate number of boxes",
          labelEmbalaje: "Do you need packing?",
          labelDesmontaje: "Do you need disassembly and assembly?",
          labelFotos: "Photos or videos of the move",
          labelMensaje: "Comments",
          placeholderMensaje: "Any additional detail about the move",
          opcionSeleccione: "Select",
          opcionSi: "Yes",
          opcionNo: "No",
          submit: "Request quote",
          enviando: "Sending...",
          envioExito: "Thanks! We received your request, we'll contact you soon.",
          envioError: "Could not send. Please try again or contact us on WhatsApp.",
          contactoTag: "Contact",
          contactoTitle: "Direct business details",
          contactoText: "Clear information to get in touch without searching.",
          telefonoTitle: "Phone",
          whatsapp: "Write on WhatsApp",
          emailTitle: "Email",
          gmail: "Send Gmail",
          zonaTitle: "Area",
          zonaText: "Vilafranca del Penedes and all Spain",
          faqTag: "Questions",
          faqTitle: "Clear doubts before requesting a quote",
          faq1Title: "Do we move outside Vilafranca?",
          faq1Text: "Yes, local, regional and national moves can be arranged.",
          faq2Title: "Can packing be requested?",
          faq2Text: "Yes, the service can include boxes, protection, disassembly and assembly.",
          faq3Title: "How is the quote calculated?",
          faq3Text: "It depends on origin, destination, volume, access, date and extra services.",
          faq4Title: "Does the website work well on mobile?",
          faq4Text: "Yes, the menu opens and the sections adapt to small screens.",
          footer: "2026 Mudanzas Vilafranca - All rights reserved"
        }
      };

      const idiomaGuardado = localStorage.getItem("idiomaMudanzas");
      let idiomaActual = textos[idiomaGuardado] ? idiomaGuardado : "es";

      const setText = (selector, texto) => {
        const elemento = document.querySelector(selector);
        if (elemento) {
          elemento.textContent = texto;
        }
      };

      const setHTML = (selector, texto) => {
        const elemento = document.querySelector(selector);
        if (elemento) {
          elemento.innerHTML = texto;
        }
      };

      const setPlaceholder = (selector, texto) => {
        const elemento = document.querySelector(selector);
        if (elemento) {
          elemento.placeholder = texto;
        }
      };

      const iniciarRotacionElfsight = () => {
        if (!widgetReseñas) {
          return;
        }

        const obtenerBotonSiguiente = () => {
          const controles = widgetReseñas.querySelectorAll("button, a, [role='button']");
          return Array.from(controles).find((control) => {
            const textoControl = [
              control.textContent,
              control.getAttribute("aria-label"),
              control.getAttribute("title"),
              control.className
            ]
              .join(" ")
              .toLowerCase();

            return textoControl.includes("next") || textoControl.includes("siguiente") || textoControl.includes("arrow-right") || textoControl.includes("right");
          });
        };

        const avanzarReseña = () => {
          const botonSiguiente = obtenerBotonSiguiente();
          if (botonSiguiente) {
            botonSiguiente.click();
          }
        };

        const observadorElfsight = new MutationObserver(() => {
          if (obtenerBotonSiguiente()) {
            avanzarReseña();
            observadorElfsight.disconnect();
          }
        });

        observadorElfsight.observe(widgetReseñas, { childList: true, subtree: true });
        setInterval(avanzarReseña, 4500);
      };

      const aplicarIdioma = (idioma) => {
        const t = textos[idioma];
        idiomaActual = idioma;
        document.documentElement.lang = idioma;
        selectorIdioma.value = idioma;
        localStorage.setItem("idiomaMudanzas", idioma);

        setText(".idioma-label", t.idiomaLabel);
        setText('.menu a[href="../inicio/index.html"]', t.navInicio);
        setText('.menu a[href="../servicios/index.html"]', t.navServicios);
        setText('.menu a[href="../proceso/index.html"]', t.navProceso);
        setText('.menu a[href="../resenas/index.html"]', t.navReseñas);
        setText('.menu a[href="../presupuesto/index.html"]', t.navPresupuesto);
        setText('.menu a[href="../contacto/index.html"]', t.navContacto);
        setText('.menu a[href="../faq/index.html"]', t.navFaq);
        setText(".boton-menu", menuPrincipal.classList.contains("abierto") ? t.cerrar : t.menu);

        setText("#inicio .etiqueta", t.heroTag);
        setHTML("#inicio h1", t.heroTitle);
        setText("#inicio .hero-contenido > p:nth-of-type(2)", t.heroText);
        setText('#inicio .acciones a[href="../presupuesto/index.html"]', t.heroPrimary);
        setText('#inicio .acciones a[href="../resenas/index.html"]', t.heroSecondary);
        setText("#inicio .mini-dato:nth-child(1) span", t.mini1);
        setText("#inicio .mini-dato:nth-child(2) span", t.mini2);
        setText("#inicio .mini-dato:nth-child(3) span", t.mini3);
        setText("#inicio .mini-dato:nth-child(4) span", t.mini4);
        setText(".tarjeta-flotante h3", t.demoTitle);
        setText(".tarjeta-flotante p", t.demoText);

        setText("#servicios .etiqueta", t.serviciosTag);
        setText("#servicios h2", t.serviciosTitle);
        setText("#servicios .cabecera-seccion p:last-child", t.serviciosText);
        setText("#servicios .servicio:nth-child(1) h3", t.servicio1Title);
        setText("#servicios .servicio:nth-child(1) p", t.servicio1Text);
        setText("#servicios .servicio:nth-child(2) h3", t.servicio2Title);
        setText("#servicios .servicio:nth-child(2) p", t.servicio2Text);
        setText("#servicios .servicio:nth-child(3) h3", t.servicio3Title);
        setText("#servicios .servicio:nth-child(3) p", t.servicio3Text);
        setText("#servicios .servicio:nth-child(4) h3", t.servicio4Title);
        setText("#servicios .servicio:nth-child(4) p", t.servicio4Text);

        setText("#proceso .etiqueta", t.procesoTag);
        setText("#proceso .panel-proceso h2", t.procesoTitle);
        setText("#proceso .panel-proceso p:nth-of-type(2)", t.procesoText);
        setText('#proceso .boton[href="../presupuesto/index.html"]', t.procesoButton);
        setText("#proceso .paso:nth-child(1) h3", t.paso1Title);
        setText("#proceso .paso:nth-child(1) p", t.paso1Text);
        setText("#proceso .paso:nth-child(2) h3", t.paso2Title);
        setText("#proceso .paso:nth-child(2) p", t.paso2Text);
        setText("#proceso .paso:nth-child(3) h3", t.paso3Title);
        setText("#proceso .paso:nth-child(3) p", t.paso3Text);
        setText("#proceso .paso:nth-child(4) h3", t.paso4Title);
        setText("#proceso .paso:nth-child(4) p", t.paso4Text);

        setText("#reseñas .etiqueta", t.reseñasTag);
        setText("#reseñas .cabecera-seccion h2", t.reseñasTitle);
        setText("#reseñas .cabecera-seccion p:last-child", t.reseñasText);
        setText("#reseñas .widget-aviso", t.widgetAviso);
        setText("#reseñas .reseña-mini:nth-child(1) strong", t.reseña1Title);
        setText("#reseñas .reseña-mini:nth-child(1) p", t.reseña1Text);
        setText("#reseñas .reseña-mini:nth-child(2) strong", t.reseña2Title);
        setText("#reseñas .reseña-mini:nth-child(2) p", t.reseña2Text);
        setText("#reseñas .reseña-mini:nth-child(3) strong", t.reseña3Title);
        setText("#reseñas .reseña-mini:nth-child(3) p", t.reseña3Text);
        setText("#reseñas .nota-legal", t.notaLegal);

        setText("#presupuesto .etiqueta", t.presupuestoTag);
        setText("#presupuesto h2", t.presupuestoTitle);
        setText("#presupuesto .presupuesto > div > p:nth-of-type(2)", t.presupuestoText);
        setText("#presupuesto .lista li:nth-child(1)", t.lista1);
        setText("#presupuesto .lista li:nth-child(2)", t.lista2);
        setText("#presupuesto .lista li:nth-child(3)", t.lista3);
        setText('label[for="nombre"]', t.labelNombre);
        setPlaceholder("#nombre", t.placeholderNombre);
        setText('label[for="telefono"]', t.labelTelefono);
        setText('label[for="email"]', t.labelEmail);
        setText('label[for="ciudad-origen"]', t.labelCiudadOrigen);
        setText('label[for="ciudad-destino"]', t.labelCiudadDestino);
        setText('label[for="direccion-origen"]', t.labelDireccionOrigen);
        setText('label[for="direccion-destino"]', t.labelDireccionDestino);
        setText('label[for="piso-origen"]', t.labelPisoOrigen);
        setText('label[for="ascensor-origen"]', t.labelAscensorOrigen);
        setText('label[for="piso-destino"]', t.labelPisoDestino);
        setText('label[for="ascensor-destino"]', t.labelAscensorDestino);
        setText('label[for="fecha-mudanza"]', t.labelFechaMudanza);
        setText('label[for="habitaciones"]', t.labelHabitaciones);
        setText('label[for="muebles-grandes"]', t.labelMueblesGrandes);
        setText('label[for="num-cajas"]', t.labelNumCajas);
        setText('label[for="embalaje"]', t.labelEmbalaje);
        setText('label[for="desmontaje"]', t.labelDesmontaje);
        setText('label[for="fotos"]', t.labelFotos);
        setText('label[for="mensaje"]', t.labelMensaje);
        setPlaceholder("#mensaje", t.placeholderMensaje);
        document.querySelectorAll("#ascensor-origen, #ascensor-destino, #embalaje, #desmontaje").forEach((select) => {
          setText(`#${select.id} option[value=""]`, t.opcionSeleccione);
          setText(`#${select.id} option[value="Sí"]`, t.opcionSi);
          setText(`#${select.id} option[value="No"]`, t.opcionNo);
        });
        setText("#formulario-presupuesto .boton", t.submit);

        setText("#contacto .etiqueta", t.contactoTag);
        setText("#contacto .cabecera-seccion h2", t.contactoTitle);
        setText("#contacto .cabecera-seccion p:last-child", t.contactoText);
        setText("#contacto .contacto-card:nth-child(1) h3", t.telefonoTitle);
        setText("#contacto .whatsapp .texto-contacto", t.whatsapp);
        setText("#contacto .contacto-card:nth-child(2) h3", t.emailTitle);
        setText("#contacto .gmail .texto-contacto", t.gmail);
        setText("#contacto .contacto-card:nth-child(3) h3", t.zonaTitle);
        setText("#contacto .contacto-card:nth-child(3) p", t.zonaText);

        setText("#faq .etiqueta", t.faqTag);
        setText("#faq .cabecera-seccion h2", t.faqTitle);
        setText("#faq .faq:nth-child(1) summary", t.faq1Title);
        setText("#faq .faq:nth-child(1) p", t.faq1Text);
        setText("#faq .faq:nth-child(2) summary", t.faq2Title);
        setText("#faq .faq:nth-child(2) p", t.faq2Text);
        setText("#faq .faq:nth-child(3) summary", t.faq3Title);
        setText("#faq .faq:nth-child(3) p", t.faq3Text);
        setText("#faq .faq:nth-child(4) summary", t.faq4Title);
        setText("#faq .faq:nth-child(4) p", t.faq4Text);
        setText("footer .footer-copy", t.footer);
      };

      botonMenu.addEventListener("click", () => {
        const estaAbierto = menuPrincipal.classList.toggle("abierto");
        botonMenu.setAttribute("aria-expanded", estaAbierto);
        botonMenu.textContent = estaAbierto ? textos[idiomaActual].cerrar : textos[idiomaActual].menu;
      });

      enlacesMenu.forEach((enlace) => {
        enlace.addEventListener("click", () => {
          menuPrincipal.classList.remove("abierto");
          botonMenu.setAttribute("aria-expanded", "false");
          botonMenu.textContent = textos[idiomaActual].menu;
        });
      });

      selectorIdioma.addEventListener("change", () => {
        aplicarIdioma(selectorIdioma.value);
      });

      if (permiteMovimiento && cursorFuego) {
        window.addEventListener("pointermove", (evento) => {
          cursorFuego.classList.add("activo");
          cursorFuego.style.left = `${evento.clientX}px`;
          cursorFuego.style.top = `${evento.clientY}px`;
        });

        window.addEventListener("pointerleave", () => {
          cursorFuego.classList.remove("activo");
        });
      }

      const URL_APPS_SCRIPT = "https://script.google.com/macros/s/AKfycbxiPIai-VZdT9hu4qI-mNclvV3-7AYAK-LRRPe-Zn6UfG6BemCDnVaBleksik6-eyCb/exec";
      const mensajeFormulario = document.querySelector("#formulario-mensaje");

      const mostrarMensajeFormulario = (texto, tipo) => {
        if (!mensajeFormulario) {
          return;
        }
        mensajeFormulario.textContent = texto;
        mensajeFormulario.classList.remove("exito", "error");
        mensajeFormulario.classList.add("visible", tipo);
      };

      if (formularioPresupuesto) {
        formularioPresupuesto.addEventListener("submit", (evento) => {
          evento.preventDefault();

          const t = textos[idiomaActual];
          const boton = formularioPresupuesto.querySelector(".boton");
          const textoBotonOriginal = boton.textContent;
          boton.disabled = true;
          boton.textContent = t.enviando;

          fetch(URL_APPS_SCRIPT, {
            method: "POST",
            body: new FormData(formularioPresupuesto)
          })
            .then((respuesta) => respuesta.json())
            .then((datos) => {
              if (!datos.ok) {
                throw new Error(datos.error || "error desconocido");
              }
              mostrarMensajeFormulario(t.envioExito, "exito");
              formularioPresupuesto.reset();
            })
            .catch((error) => {
              console.error("Error al enviar el formulario de presupuesto:", error);
              mostrarMensajeFormulario(t.envioError, "error");
            })
            .finally(() => {
              boton.disabled = false;
              boton.textContent = textoBotonOriginal;
            });
        });
      }

      aplicarIdioma(idiomaActual);
      window.addEventListener("load", iniciarRotacionElfsight);
