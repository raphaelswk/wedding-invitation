// Wedding Details - Single source of truth for all wedding information
// Edit these values to customize your wedding invitation

export const weddingDetails = {
  coupleNames: "Aline & Raphael",
  dateDisplay: {
    en: "11th April 2026",
    ptBR: "11 de abril de 2026",
  },
  // Editable: Change this ISO date/time for the countdown
  // Format: YYYY-MM-DDTHH:mm:ss+HH:MM (Europe/Dublin timezone is +01:00 in April)
  dateTimeISO: "2026-04-11T17:00:00+01:00",
  venue: {
    name: "Radisson Blu St. Helen's Hotel",
    address: "Radisson Blu St. Helen's Hotel, Stillorgan Road, Blackrock, Dublin A94 V6W3, Ireland",
    mapsLink:
      "https://www.google.com/maps/place/Booterstown,+Dublin,+A94+V6W3/@53.3048029,-6.2159445,15z/data=!3m1!4b1!4m6!3m5!1s0x48670927d7141339:0xba1258ad028db4cb!8m2!3d53.3047911!4d-6.2056448!16s%2Fg%2F11c534tzxs!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D",
    // Replace with real venue photo
    venueImageSrc: "/venue-st-helens.jpg",
  },
  heroImages: {
    // Replace with real couple photos
    heroSrc: "/hero.jpg",
    section1Src: "/couple-1.jpg",
    section2Src: "/couple-2.jpg",
  },
  // Editable schedule items - times are placeholders
  scheduleItems: [
    { time: "16:30", titleKey: "scheduleArrival", descriptionKey: "scheduleArrivalDesc" },
    { time: "17:00", titleKey: "scheduleCeremony", descriptionKey: "scheduleCeremonyDesc" },
    { time: "18:00", titleKey: "scheduleDrinks", descriptionKey: "scheduleDrinksDesc" },
    { time: "19:00", titleKey: "scheduleDinner", descriptionKey: "scheduleDinnerDesc" },
    { time: "20:00", titleKey: "scheduleSpeeches", descriptionKey: "scheduleSpeechesDesc" },
    { time: "20:30", titleKey: "scheduleFirstDance", descriptionKey: "scheduleFirstDanceDesc" },
    { time: "23:30", titleKey: "scheduleLateFood", descriptionKey: "scheduleLateFoodDesc" },
  ],
  // Editable accommodation options
  accommodationOptions: [
    { titleKey: "hotelLuxury", detailsKey: "hotelLuxuryDetails", distanceKey: "hotelLuxuryDistance" },
    { titleKey: "hotelBoutique", detailsKey: "hotelBoutiqueDetails", distanceKey: "hotelBoutiqueDistance" },
    { titleKey: "hotelBudget", detailsKey: "hotelBudgetDetails", distanceKey: "hotelBudgetDistance" },
  ],
  // Recommendations for guests
  recommendations: [
    { titleKey: "recDressCode", bodyKey: "recDressCodeBody", icon: "sparkles" },
    { titleKey: "recWhite", bodyKey: "recWhiteBody", icon: "heart" },
    { titleKey: "recShoes", bodyKey: "recShoesBody", icon: "footprints" },
    { titleKey: "recArrival", bodyKey: "recArrivalBody", icon: "clock" },
    { titleKey: "recWeather", bodyKey: "recWeatherBody", icon: "cloud" },
  ],
  weekendIdeas: [
    { titleKey: "ideaWalk", bodyKey: "ideaWalkBody" },
    { titleKey: "ideaCoffee", bodyKey: "ideaCoffeeBody" },
    { titleKey: "ideaSeaside", bodyKey: "ideaSeasideBody" },
    { titleKey: "ideaCity", bodyKey: "ideaCityBody" },
  ],
  // FAQ items
  faqItems: [
    { qKey: "faqPlusOne", aKey: "faqPlusOneAnswer" },
    { qKey: "faqParking", aKey: "faqParkingAnswer" },
    { qKey: "faqArrival", aKey: "faqArrivalAnswer" },
    { qKey: "faqDietary", aKey: "faqDietaryAnswer" },
  ],
  // Set to true if providing shuttle service
  hasShuttle: false,
  // Bible verse section
  bibleVerse: {
    reference: {
      en: "Psalm 48:14",
      ptBR: "Salmos 48:14",
    },
    version: {
      en: "NIV",
      ptBR: "NTLH",
    },
    text: {
      // Short paraphrases (always shown if full text is empty)
      enParaphrase: "For this God is our God for ever and ever; he will be our guide even to the end.",
      ptBRParaphrase: "Este Deus é o nosso Deus para sempre. Ele nos guiará eternamente.",
      // IMPORTANT: Leave empty by default. Paste licensed NIV/NTLH text here if you have permission.
      enFull: "",
      ptBRFull: "",
    },
    links: {
      en: "https://www.biblegateway.com/passage/?search=Psalm+48%3A14&version=NIV",
      ptBR: "https://www.bible.com/bible/211/PSA.48.NTLH",
    },
  },
  contactEmail: "wedding@alineandraphael.com",
  gifts: {
    iban: "IE83AIBK93118738121076",
    accountName: "Raphael S de Lima",
    revolutLink: "https://revolut.me/raphae9cbq",
    registryLinks: [
      { name: "Amazon Registry", url: "https://www.amazon.ie" },
      // Add more registry links as needed
    ],
  },
}

// All UI text translations
export const copy = {
  en: {
    videoTapToOpen: "Tap to open",

    // Envelope Intro
    envelopeTapSeal: "Tap the seal to open",
    envelopeSkip: "Skip intro",
    envelopeMusicOn: "Music: On",
    envelopeMusicOff: "Music: Off",
    envelopeReplay: "Replay intro",
    envelopeExclusive: "This invitation is exclusively for you",

    // Navbar
    navBibleVerse: "Bible Verse",
    navDetails: "Details",
    navSchedule: "Schedule",
    // navTravel: "Travel",
    navRecommendations: "Recommendations",
    navGifts: "Gifts",
    navRsvp: "RSVP",
    navFaq: "FAQ",

    // Hero
    heroWelcome: "We can't wait to celebrate with you.",
    heroRsvp: "RSVP",
    heroCalendar: "Add to Calendar",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    countdownToday: "Today!",

    // Details section
    detailsTitle: "Wedding Details",
    detailsCeremony: "Ceremony & Reception",
    detailsCeremonyTime: "5:00 PM",
    detailsAddress: "Address",
    detailsOpenMaps: "Open in Google Maps",
    detailsNotes: "A Few Notes",
    detailsUnplugged:
      "We kindly ask for an unplugged ceremony. Please silence phones during the ceremony.",
    detailsPlusOneNote: "Please refer to your invitation for plus-one details.",

    // Photo section
    photoQuote: "Two hearts, one beautiful journey ahead.",

    // Schedule
    scheduleTitle: "Schedule",
    scheduleSubtitle: "A timeline of our special day",
    scheduleArrival: "Guest Arrival",
    scheduleArrivalDesc: "Please arrive and find your seats",
    scheduleCeremony: "Ceremony",
    scheduleCeremonyDesc: "Exchange of vows",
    scheduleDrinks: "Drinks Reception",
    scheduleDrinksDesc: "Cocktails and canapés",
    scheduleDinner: "Wedding Dinner",
    scheduleDinnerDesc: "A celebration feast",
    scheduleSpeeches: "Speeches & Toasts",
    scheduleSpeechesDesc: "Words from loved ones",
    scheduleFirstDance: "First Dance",
    scheduleFirstDanceDesc: "Let the party begin",
    scheduleLateFood: "Late-Night Bites",
    scheduleLateFoodDesc: "Fuel for dancing",

    // Travel
    travelTitle: "Travel & Stay",
    travelSubtitle: "Getting there and where to rest",
    travelAccommodation: "Where to Stay",
    hotelLuxury: "Radisson Blu St. Helen's",
    hotelLuxuryDetails: "Stay at the venue for ultimate convenience. Special wedding rates available.",
    hotelLuxuryDistance: "On-site",
    hotelBoutique: "The Devlin Hotel",
    hotelBoutiqueDetails: "Stylish boutique hotel in Ranelagh with excellent restaurants nearby.",
    hotelBoutiqueDistance: "10 min drive",
    hotelBudget: "Travelodge Dublin City Centre",
    hotelBudgetDetails: "Affordable option in the heart of Dublin with easy transport links.",
    hotelBudgetDistance: "20 min drive",
    travelGettingThere: "Getting There",
    travelDriving: "Driving",
    travelDrivingDetails: "Free parking available at the venue. Enter via Stillorgan Road.",
    travelTaxi: "Taxi",
    travelTaxiDetails: "Taxis are readily available. We recommend Free Now or Uber apps.",
    travelPublic: "Public Transport",
    travelPublicDetails: "DART to Booterstown station, then a 15-minute walk or short taxi ride.",
    travelShuttle: "Shuttle Service",
    travelShuttleDetails: "Complimentary shuttle from Dublin city center. Details to follow.",

    // Recommendations
    recTitle: "Recommendations",
    recSubtitle: "Tips for our special day",
    recDressCode: "Dress Code",
    recDressCodeBody: "Black tie optional. We encourage you to dress elegantly for the occasion.",
    recWhite: "A Note on White",
    recWhiteBody: "Please avoid wearing white — white is reserved for the bride.",
    recShoes: "Comfortable Shoes",
    recShoesBody: "The venue has beautiful gardens. Consider bringing comfortable shoes for exploring and dancing.",
    recArrival: "Arrive Early",
    recArrivalBody: "Please arrive 30 minutes before the ceremony to allow time to be seated.",
    recWeather: "April Weather",
    recWeatherBody: "Irish April weather can be unpredictable. Layers and a light jacket are recommended.",
    recWeekendTitle: "Explore Dublin",
    recWeekendSubtitle: "Make a weekend of it",
    ideaWalk: "Coastal Walk",
    ideaWalkBody: "Stroll along the beautiful Dún Laoghaire pier and seafront.",
    ideaCoffee: "Coffee & Brunch",
    ideaCoffeeBody: "Discover Dublin's vibrant café scene in areas like Ranelagh or Blackrock.",
    ideaSeaside: "Seaside Village",
    ideaSeasideBody: "Explore the charming coastal village of Dalkey with its castle and island views.",
    ideaCity: "City Center",
    ideaCityBody: "Visit Trinity College, St. Stephen's Green, or the bustling Temple Bar area.",

    // Bible Verse
    verseTitle: "Bible Verse",
    verseReadOnline: "Read online",
    verseNote: "A verse that guides our journey together",

    // RSVP
    rsvpTitle: "RSVP",
    rsvpMessage:
      "We would love to celebrate with you! Please confirm your attendance directly with us. We can't wait to hear from you.",

    // Gifts
    giftsTitle: "Gifts",
    giftsIntro:
      "Your presence at our wedding is the greatest gift of all. However, should you wish to honour us with a gift, we would be deeply grateful for a contribution towards our honeymoon.",
    giftsIbanTitle: "Bank Transfer",
    giftsAccountName: "Account Name",
    giftsIbanLabel: "IBAN",
    giftsCopyIban: "Copy IBAN",
    giftsCopied: "Copied!",
    giftsRevolutTitle: "Revolut",
    giftsRevolutDesc: "Send a gift quickly and easily via Revolut.",
    giftsRevolutButton: "Send via Revolut",
    giftsRegistryTitle: "Gift Registry",
    giftsRegistryIntro: "Or browse our registry:",

    // FAQ
    faqTitle: "Questions",
    faqSubtitle: "Frequently asked questions",
    faqPlusOne: "Can I bring a plus one?",
    faqPlusOneAnswer:
      "Please refer to your invitation for details about additional guests. If you have questions, feel free to contact us.",
    faqParking: "Is there parking available?",
    faqParkingAnswer: "Yes, complimentary parking is available at the venue. Please enter via Stillorgan Road.",
    faqKids: "Can I bring my children?",
    faqKidsAnswer:
      "We love your little ones, but we've chosen to make this an adults-only celebration. We hope you understand.",
    faqArrival: "What time should I arrive?",
    faqArrivalAnswer:
      "We recommend arriving 30 minutes before the ceremony begins to find parking and be seated comfortably.",
    faqDietary: "How do I inform you of dietary requirements?",
    faqDietaryAnswer: "Please contact us directly about any dietary requirements.",

    // Footer
    footerMadeWith: "Made with love",
    footerContact: "Questions? Reach out to us at",
  },
  ptBR: {
    videoTapToOpen: "Toque para abrir",

    // Envelope Intro
    envelopeTapSeal: "Toque no selo para abrir",
    envelopeSkip: "Pular introdução",
    envelopeMusicOn: "Música: Ligada",
    envelopeMusicOff: "Música: Desligada",
    envelopeReplay: "Rever introdução",
    envelopeExclusive: "Esta invitação é exclusiva para ti",

    // Navbar
    navDetails: "Detalhes",
    navSchedule: "Cronograma",
    navTravel: "Como chegar",
    navRecommendations: "Recomendações",
    navBibleVerse: "Versículo",
    navGifts: "Presentes",
    navRsvp: "Confirmação",
    navFaq: "Perguntas",

    // Hero
    heroWelcome: "Mal podemos esperar para celebrar com você.",
    heroRsvp: "Confirmar presença",
    heroCalendar: "Adicionar ao calendário",
    countdownDays: "Dias",
    countdownHours: "Horas",
    countdownMinutes: "Minutos",
    countdownSeconds: "Segundos",
    countdownToday: "É hoje!",

    // Details section
    detailsTitle: "Detalhes do Casamento",
    detailsCeremony: "Cerimônia e Recepção",
    detailsCeremonyTime: "17:00",
    detailsAddress: "Endereço",
    detailsOpenMaps: "Abrir no Google Maps",
    detailsNotes: "Algumas Observações",
    detailsUnplugged:
      "Pedimos gentilmente uma cerimônia desconectada. Por favor, silencie os celulares durante a cerimônia.",
    detailsPlusOneNote: "Por favor, consulte seu convite para detalhes sobre acompanhantes.",

    // Photo section
    photoQuote: "Dois corações, uma bela jornada pela frente.",

    // Schedule
    scheduleTitle: "Cronograma",
    scheduleSubtitle: "A programação do nosso dia especial",
    scheduleArrival: "Chegada dos Convidados",
    scheduleArrivalDesc: "Por favor, chegue e encontre seu lugar",
    scheduleCeremony: "Cerimônia",
    scheduleCeremonyDesc: "Troca de votos",
    scheduleDrinks: "Coquetel",
    scheduleDrinksDesc: "Drinks e canapés",
    scheduleDinner: "Jantar de Casamento",
    scheduleDinnerDesc: "Uma festa de celebração",
    scheduleSpeeches: "Discursos e Brindes",
    scheduleSpeechesDesc: "Palavras dos queridos",
    scheduleFirstDance: "Primeira Dança",
    scheduleFirstDanceDesc: "Que comece a festa",
    scheduleLateFood: "Lanche da Madrugada",
    scheduleLateFoodDesc: "Energia para dançar",

    // Travel
    travelTitle: "Como Chegar",
    travelSubtitle: "Como chegar e onde ficar",
    travelAccommodation: "Onde Ficar",
    hotelLuxury: "Radisson Blu St. Helen's",
    hotelLuxuryDetails: "Fique no local do evento para máxima conveniência. Tarifas especiais disponíveis.",
    hotelLuxuryDistance: "No local",
    hotelBoutique: "The Devlin Hotel",
    hotelBoutiqueDetails: "Hotel boutique elegante em Ranelagh com excelentes restaurantes próximos.",
    hotelBoutiqueDistance: "10 min de carro",
    hotelBudget: "Travelodge Dublin City Centre",
    hotelBudgetDetails: "Opção econômica no coração de Dublin com fácil acesso ao transporte.",
    hotelBudgetDistance: "20 min de carro",
    travelGettingThere: "Como Chegar",
    travelDriving: "De Carro",
    travelDrivingDetails: "Estacionamento gratuito disponível no local. Entre pela Stillorgan Road.",
    travelTaxi: "Táxi",
    travelTaxiDetails: "Táxis estão facilmente disponíveis. Recomendamos os apps Free Now ou Uber.",
    travelPublic: "Transporte Público",
    travelPublicDetails: "DART até a estação Booterstown, depois 15 minutos a pé ou uma curta corrida de táxi.",
    travelShuttle: "Transporte Gratuito",
    travelShuttleDetails: "Transporte gratuito do centro de Dublin. Detalhes a seguir.",

    // Recommendations
    recTitle: "Recomendações",
    recSubtitle: "Dicas para nosso dia especial",
    recDressCode: "Traje",
    recDressCodeBody: "Black tie opcional. Encorajamos você a se vestir elegantemente para a ocasião.",
    recWhite: "Sobre o Branco",
    recWhiteBody: "Evite usar branco — branco é reservado para a noiva.",
    recShoes: "Sapatos Confortáveis",
    recShoesBody: "O local tem belos jardins. Considere trazer sapatos confortáveis para explorar e dançar.",
    recArrival: "Chegue Cedo",
    recArrivalBody: "Por favor, chegue 30 minutos antes da cerimônia para ter tempo de se acomodar.",
    recWeather: "Clima de Abril",
    recWeatherBody: "O clima irlandês em abril pode ser imprevisível. Camadas e uma jaqueta leve são recomendadas.",
    recWeekendTitle: "Explore Dublin",
    recWeekendSubtitle: "Aproveite o fim de semana",
    ideaWalk: "Caminhada na Costa",
    ideaWalkBody: "Passeie pelo belo píer de Dún Laoghaire e pela orla.",
    ideaCoffee: "Café & Brunch",
    ideaCoffeeBody: "Descubra a vibrante cena de cafés de Dublin em áreas como Ranelagh ou Blackrock.",
    ideaSeaside: "Vila à Beira-Mar",
    ideaSeasideBody: "Explore a charmosa vila costeira de Dalkey com seu castelo e vista das ilhas.",
    ideaCity: "Centro da Cidade",
    ideaCityBody: "Visite o Trinity College, St. Stephen's Green ou a movimentada área de Temple Bar.",

    // Bible Verse
    verseTitle: "Versículo",
    verseReadOnline: "Ler online",
    verseNote: "Um versículo que guia nossa jornada juntos",

    // RSVP
    rsvpTitle: "Confirmação de Presença",
    rsvpMessage:
      "Adoraríamos celebrar com você! Por favor, confirme sua presença diretamente conosco. Mal podemos esperar para ouvir de você!",

    // Gifts
    giftsTitle: "Lista de Presentes",
    giftsIntro:
      "Sua presença em nosso casamento é o maior presente de todos. No entanto, se desejar nos presentear, ficaríamos muito gratos por uma contribuição para nossa lua de mel.",
    giftsIbanTitle: "Transferência Bancária",
    giftsAccountName: "Nome da Conta",
    giftsIbanLabel: "IBAN",
    giftsCopyIban: "Copiar IBAN",
    giftsCopied: "Copiado!",
    giftsRevolutTitle: "Revolut",
    giftsRevolutDesc: "Envie um presente de forma rápida e fácil via Revolut.",
    giftsRevolutButton: "Enviar via Revolut",
    giftsRegistryTitle: "Lista de Presentes Online",
    giftsRegistryIntro: "Ou veja nossa lista:",

    // FAQ
    faqTitle: "Perguntas",
    faqSubtitle: "Perguntas frequentes",
    faqPlusOne: "Posso levar um acompanhante?",
    faqPlusOneAnswer:
      "Por favor, consulte seu convite para detalhes sobre convidados adicionais. Se tiver dúvidas, entre em contato conosco.",
    faqParking: "Há estacionamento disponível?",
    faqParkingAnswer: "Sim, estacionamento gratuito está disponível no local. Por favor, entre pela Stillorgan Road.",
    faqKids: "Posso levar meus filhos?",
    faqKidsAnswer:
      "Amamos seus pequenos, mas escolhemos fazer desta uma celebração apenas para adultos. Esperamos que compreendam.",
    faqArrival: "Que horas devo chegar?",
    faqArrivalAnswer:
      "Recomendamos chegar 30 minutos antes do início da cerimônia para encontrar estacionamento e se acomodar confortavelmente.",
    faqDietary: "Como informo sobre restrições alimentares?",
    faqDietaryAnswer:
      "Por favor, entre em contato diretamente conosco caso tenha quaisquer restrições alimentares",

    // Footer
    footerMadeWith: "Feito com amor",
    footerContact: "Dúvidas? Entre em contato conosco em",
  },
}

export type Language = "en" | "ptBR"
