// Base de Datos Exacta con los 118 Elementos Químicos + Propiedades Físicas, Químicas y Aplicaciones
const elementsData = [
  // Período 1
  { num: 1, sym: "H", name: "Hidrógeno", mass: "1.008", cat: "no-metales", col: 2, row: 2, state: "Gas", config: "1s¹", disc: "Henry Cavendish (1766)", melting: "-259.16 °C", boiling: "-252.87 °C", electro: "2.20", density: "0.0899 g/L", oxStates: "-1, +1", radius: "53 pm", apps: "Producción de amoníaco para fertilizantes, combustible celdas de energía e hidrogenación de aceites.", desc: "Elemento más abundante del universo. Ligero, incoloro e altamente inflamable." },
  { num: 2, sym: "He", name: "Helio", mass: "4.0026", cat: "gases-nobles", col: 19, row: 2, state: "Gas", config: "1s²", disc: "Pierre Janssen (1868)", melting: "-272.20 °C", boiling: "-268.93 °C", electro: "N/A", density: "0.1785 g/L", oxStates: "0", radius: "31 pm", apps: "Enfriamiento de imanes superconductores en resonancias magnéticas, globos dirigibles y mezclas de buceo.", desc: "Gas noble inerte, el segundo elemento más ligero del universo." },

  // Período 2
  { num: 3, sym: "Li", name: "Litio", mass: "6.94", cat: "alcalinos", col: 2, row: 3, state: "Sólido", config: "[He] 2s¹", disc: "Johan August Arfwedson (1817)", melting: "180.50 °C", boiling: "1342 °C", electro: "0.98", density: "0.534 g/cm³", oxStates: "+1", radius: "167 pm", apps: "Baterías recargables para smartphones, ordenadores y vehículos eléctricos, y estabilizadores del ánimo.", desc: "El metal más ligero. Fundamental para baterías de alta densidad energética." },
  { num: 4, sym: "Be", name: "Berilio", mass: "9.0122", cat: "alcalinoterreos", col: 3, row: 3, state: "Sólido", config: "[He] 2s²", disc: "Louis Nicolas Vauquelin (1798)", melting: "1287 °C", boiling: "2469 °C", electro: "1.57", density: "1.85 g/cm³", oxStates: "+2", radius: "112 pm", apps: "Componentes estructurales de satélites, espejos de telescopios espaciales y ventanas de tubos de rayos X.", desc: "Metal ligero y rígido utilizado en aleaciones aeroespaciales." },
  { num: 5, sym: "B", name: "Boro", mass: "10.81", cat: "metaloides", col: 14, row: 3, state: "Sólido", config: "[He] 2s² 2p¹", disc: "Joseph Louis Gay-Lussac (1808)", melting: "2076 °C", boiling: "3927 °C", electro: "2.04", density: "2.34 g/cm³", oxStates: "+3", radius: "87 pm", apps: "Vidrio de borosilicato resistente al calor (Pyrex), detergentes de bórax y fibras de vidrio.", desc: "Metaloide semiconductor utilizado en cerámicas y cristales térmicos." },
  { num: 6, sym: "C", name: "Carbono", mass: "12.011", cat: "no-metales", col: 15, row: 3, state: "Sólido", config: "[He] 2s² 2p²", disc: "Conocido en la antigüedad", melting: "3550 °C", boiling: "4027 °C", electro: "2.55", density: "2.26 g/cm³", oxStates: "-4, +2, +4", radius: "67 pm", apps: "Minas de lápices (grafito), joyería (diamante), purificación de agua (carbón activo) y fibra de carbono.", desc: "Base química de toda la vida conocida." },
  { num: 7, sym: "N", name: "Nitrógeno", mass: "14.007", cat: "no-metales", col: 16, row: 3, state: "Gas", config: "[He] 2s² 2p³", disc: "Daniel Rutherford (1772)", melting: "-210.00 °C", boiling: "-195.79 °C", electro: "3.04", density: "1.251 g/L", oxStates: "-3, +3, +5", radius: "56 pm", apps: "Fertilizantes de nitrato, congelación criogénica de alimentos e inflado de neumáticos de alta precisión.", desc: "Constituye el 78% del aire terrestre. Vital en proteínas y ADN." },
  { num: 8, sym: "O", name: "Oxígeno", mass: "15.999", cat: "no-metales", col: 17, row: 3, state: "Gas", config: "[He] 2s² 2p⁴", disc: "Carl Wilhelm Scheele (1772)", melting: "-218.79 °C", boiling: "-182.96 °C", electro: "3.44", density: "1.429 g/L", oxStates: "-2", radius: "48 pm", apps: "Respiración médica en hospitales, tanques de buceo, soporte vital en aviación y tratamiento de aguas.", desc: "Gas vital para la respiración aeróbica y la combustión." },
  { num: 9, sym: "F", name: "Flúor", mass: "18.998", cat: "halogenos", col: 18, row: 3, state: "Gas", config: "[He] 2s² 2p⁵", disc: "Henri Moissan (1886)", melting: "-219.67 °C", boiling: "-188.11 °C", electro: "3.98", density: "1.696 g/L", oxStates: "-1", radius: "42 pm", apps: "Prevención de caries en dentífricos, antiadherente de sartenes (Teflón) y gases refrigerantes.", desc: "El elemento más reactivo y electronegativo de todos." },
  { num: 10, sym: "Ne", name: "Neón", mass: "20.180", cat: "gases-nobles", col: 19, row: 3, state: "Gas", config: "[He] 2s² 2p⁶", disc: "William Ramsay (1898)", melting: "-248.59 °C", boiling: "-246.08 °C", electro: "N/A", density: "0.900 g/L", oxStates: "0", radius: "38 pm", apps: "Tubos de iluminación publicitaria (letreros de neón), indicadores de alta tensión y láseres helio-neón.", desc: "Gas noble inerte conocido por su brillo rojo-naranja intenso." },

  // Período 3
  { num: 11, sym: "Na", name: "Sodio", mass: "22.990", cat: "alcalinos", col: 2, row: 4, state: "Sólido", config: "[Ne] 3s¹", disc: "Humphry Davy (1807)", melting: "97.79 °C", boiling: "882.9 °C", electro: "0.93", density: "0.968 g/cm³", oxStates: "+1", radius: "190 pm", apps: "Sazonador de alimentos (sal de mesa NaCl), alumbrado público y saponificación para jabones.", desc: "Metal blando que reacciona violentamente con el agua." },
  { num: 12, sym: "Mg", name: "Magnesio", mass: "24.305", cat: "alcalinoterreos", col: 3, row: 4, state: "Sólido", config: "[Ne] 3s²", disc: "Joseph Black (1755)", melting: "650 °C", boiling: "1090 °C", electro: "1.31", density: "1.738 g/cm³", oxStates: "+2", radius: "145 pm", apps: "Llantas de aleación ligera, carcasas de cámaras/laptops, pirotecnia y antiácidos estomacales.", desc: "Metal ultraligero indispensable en la clorofila de las plantas." },
  { num: 13, sym: "Al", name: "Aluminio", mass: "26.982", cat: "otros-metales", col: 14, row: 4, state: "Sólido", config: "[Ne] 3s² 3p¹", disc: "Hans Christian Ørsted (1825)", melting: "660.32 °C", boiling: "2519 °C", electro: "1.61", density: "2.70 g/cm³", oxStates: "+3", radius: "118 pm", apps: "Latas de bebidas, papel de cocina, marcos de ventanas y fuselaje de aviones por su baja densidad.", desc: "El metal no ferroso más abundante, liviano y resistente a la corrosión." },
  { num: 14, sym: "Si", name: "Silicio", mass: "28.085", cat: "metaloides", col: 15, row: 4, state: "Sólido", config: "[Ne] 3s² 3p²", disc: "Jöns Jacob Berzelius (1824)", melting: "1414 °C", boiling: "3265 °C", electro: "1.90", density: "2.329 g/cm³", oxStates: "-4, +4", radius: "111 pm", apps: "Microchips de ordenadores y teléfonos, paneles solares fotovoltaicos, vidrios y siliconas de sellado.", desc: "Semiconductor clave de la tecnología electrónica e informática." },
  { num: 15, sym: "P", name: "Fósforo", mass: "30.974", cat: "no-metales", col: 16, row: 4, state: "Sólido", config: "[Ne] 3s² 3p³", disc: "Hennig Brand (1669)", melting: "44.15 °C", boiling: "280.5 °C", electro: "2.19", density: "1.823 g/cm³", oxStates: "-3, +3, +5", radius: "98 pm", apps: "Fertilizantes agrícolas (NPK), cabezas de cerillas/fósforos y detergentes industriales.", desc: "Elemento esencial en la molécula energética ATP y los huesos." },
  { num: 16, sym: "S", name: "Azufre", mass: "32.06", cat: "no-metales", col: 17, row: 4, state: "Sólido", config: "[Ne] 3s² 3p⁴", disc: "Conocido en la antigüedad", melting: "115.21 °C", boiling: "444.6 °C", electro: "2.58", density: "2.07 g/cm³", oxStates: "-2, +4, +6", radius: "88 pm", apps: "Vulcanización de neumáticos de caucho, ácido sulfúrico industrial y jabones dermatológicos.", desc: "Sólido amarillo brillante utilizado en fertilizantes y pólvora." },
  { num: 17, sym: "Cl", name: "Cloro", mass: "35.45", cat: "halogenos", col: 18, row: 4, state: "Gas", config: "[Ne] 3s² 3p⁵", disc: "Carl Wilhelm Scheele (1774)", melting: "-101.50 °C", boiling: "-34.04 °C", electro: "3.16", density: "3.214 g/L", oxStates: "-1, +1, +3, +5, +7", radius: "79 pm", apps: "Desinfección de agua potable y piscinas, blanqueadores domésticos y fabricación de plásticos PVC.", desc: "Gas desinfectante fundamental para la sanidad pública." },
  { num: 18, sym: "Ar", name: "Argón", mass: "39.948", cat: "gases-nobles", col: 19, row: 4, state: "Gas", config: "[Ne] 3s² 3p⁶", disc: "Lord Rayleigh (1894)", melting: "-189.35 °C", boiling: "-185.85 °C", electro: "N/A", density: "1.784 g/L", oxStates: "0", radius: "71 pm", apps: "Atmósfera inerte para soldadura de aluminio/acero, relleno de ventanas térmicas y bombillas.", desc: "El gas noble más abundante en la Tierra." },

  // Período 4
  { num: 19, sym: "K", name: "Potasio", mass: "39.098", cat: "alcalinos", col: 2, row: 5, state: "Sólido", config: "[Ar] 4s¹", disc: "Humphry Davy (1807)", melting: "63.5 °C", boiling: "759 °C", electro: "0.82", density: "0.89 g/cm³", oxStates: "+1", radius: "243 pm", apps: "Fertilizantes para la agricultura, regulación de impulsos nerviosos en el cuerpo e ingredientes comestibles.", desc: "Metal alcalino esencial para el ritmo cardíaco y contracción muscular." },
  { num: 20, sym: "Ca", name: "Calcio", mass: "40.078", cat: "alcalinoterreos", col: 3, row: 5, state: "Sólido", config: "[Ar] 4s²", disc: "Humphry Davy (1808)", melting: "842 °C", boiling: "1484 °C", electro: "1.00", density: "1.55 g/cm³", oxStates: "+2", radius: "194 pm", apps: "Fabricación de cemento, yeso para construcción, desoxida aceros y fortalece la estructura ósea humana.", desc: "Componente estructural principal de huesos, dientes y cemento." },
  { num: 21, sym: "Sc", name: "Escandio", mass: "44.956", cat: "transicion", col: 4, row: 5, state: "Sólido", config: "[Ar] 3d¹ 4s²", disc: "Lars Fredrik Nilson (1879)", melting: "1541 °C", boiling: "2836 °C", electro: "1.36", density: "2.985 g/cm³", oxStates: "+3", radius: "184 pm", apps: "Aleaciones ultraligeras en cuadros de bicicletas de competición, bates de béisbol y componentes de aviones.", desc: "Metal de transición ligero utilizado en la industria del deporte." },
  { num: 22, sym: "Ti", name: "Titanio", mass: "47.867", cat: "transicion", col: 5, row: 5, state: "Sólido", config: "[Ar] 3d² 4s²", disc: "William Gregor (1791)", melting: "1668 °C", boiling: "3287 °C", electro: "1.54", density: "4.506 g/cm³", oxStates: "+4", radius: "176 pm", apps: "Prótesis quirúrgicas y dentales (biocompatible), motores de aviación, implantes y gafas.", desc: "Excepcionalmente resistente, ligero e inmune a la corrosión." },
  { num: 23, sym: "V", name: "Vanadio", mass: "50.942", cat: "transicion", col: 6, row: 5, state: "Sólido", config: "[Ar] 3d³ 4s²", disc: "Andrés Manuel del Río (1801)", melting: "1910 °C", boiling: "3407 °C", electro: "1.63", density: "6.11 g/cm³", oxStates: "+5", radius: "171 pm", apps: "Herramientas de mano (llaves, brocas) de acero Cromo-Vanadio y resortes de vehículos.", desc: "Otorga extrema dureza y flexibilidad al acero." },
  { num: 24, sym: "Cr", name: "Cromo", mass: "51.996", cat: "transicion", col: 7, row: 5, state: "Sólido", config: "[Ar] 3d⁵ 4s¹", disc: "Louis Nicolas Vauquelin (1797)", melting: "1907 °C", boiling: "2671 °C", electro: "1.66", density: "7.19 g/cm³", oxStates: "+3, +6", radius: "166 pm", apps: "Cromado antioxidante de piezas de carrocería, grifería y fabricación de acero inoxidable.", desc: "Metal brillante famoso por su poder de protección antioxidante." },
  { num: 25, sym: "Mn", name: "Manganeso", mass: "54.938", cat: "transicion", col: 8, row: 5, state: "Sólido", config: "[Ar] 3d⁵ 4s²", disc: "Johan Gottlieb Gahn (1774)", melting: "1246 °C", boiling: "2061 °C", electro: "1.55", density: "7.21 g/cm³", oxStates: "+2, +4, +7", radius: "161 pm", apps: "Rieles de ferrocarril antichoque, latas de aluminio para bebidas y pilas alcalinas.", desc: "Metal de transición crucial para endurecer el acero." },
  { num: 26, sym: "Fe", name: "Hierro", mass: "55.845", cat: "transicion", col: 9, row: 5, state: "Sólido", config: "[Ar] 3d⁶ 4s²", disc: "Conocido en la antigüedad", melting: "1538 °C", boiling: "2862 °C", electro: "1.83", density: "7.874 g/cm³", oxStates: "+2, +3", radius: "156 pm", apps: "Estructuras de vigas en edificios, vehículos, puentes y transporte de oxígeno corporal (hemoglobina).", desc: "El metal más utilizado por la civilización humana." },
  { num: 27, sym: "Co", name: "Cobalto", mass: "58.933", cat: "transicion", col: 10, row: 5, state: "Sólido", config: "[Ar] 3d⁷ 4s²", disc: "Georg Brandt (1735)", melting: "1495 °C", boiling: "2927 °C", electro: "1.88", density: "8.90 g/cm³", oxStates: "+2, +3", radius: "152 pm", apps: "Cátodos en baterías de litio para móviles/coches eléctricos y pigmento color azul cobalto en cerámicas.", desc: "Fundamental en la tecnología de almacenamiento energético moderna." },
  { num: 28, sym: "Ni", name: "Níquel", mass: "58.693", cat: "transicion", col: 11, row: 5, state: "Sólido", config: "[Ar] 3d⁸ 4s²", disc: "Axel Fredrik Cronstedt (1751)", melting: "1455 °C", boiling: "2730 °C", electro: "1.91", density: "8.908 g/cm³", oxStates: "+2, +3", radius: "149 pm", apps: "Acuñación de monedas metálicas, guitarras eléctricas, acero inoxidable y baterías recargables.", desc: "Metal resistente a la corrosión y altas temperaturas." },
  { num: 29, sym: "Cu", name: "Cobre", mass: "63.546", cat: "transicion", col: 12, row: 5, state: "Sólido", config: "[Ar] 3d¹⁰ 4s¹", disc: "Conocido en la antigüedad", melting: "1084.62 °C", boiling: "2562 °C", electro: "1.90", density: "8.96 g/cm³", oxStates: "+1, +2", radius: "145 pm", apps: "Cables eléctricos de casas y aparatos, tuberías de agua, motores eléctricos y monedas.", desc: "Excelente conductor eléctrico y térmico de color rojizo." },
  { num: 30, sym: "Zn", name: "Zinc", mass: "65.38", cat: "transicion", col: 13, row: 5, state: "Sólido", config: "[Ar] 3d¹⁰ 4s²", disc: "Conocido en la antigüedad", melting: "419.53 °C", boiling: "907 °C", electro: "1.65", density: "7.14 g/cm³", oxStates: "+2", radius: "142 pm", apps: "Galvanizado protector de láminas de hierro, fabricación del latón y cremas protectoras solares.", desc: "Protege a otros metales de la oxidación mediante recubrimientos." },
  { num: 31, sym: "Ga", name: "Galio", mass: "69.723", cat: "otros-metales", col: 14, row: 5, state: "Sólido", config: "[Ar] 3d¹⁰ 4s² 4p¹", disc: "Émile Lecoq de Boisbaudran (1875)", melting: "29.76 °C", boiling: "2204 °C", electro: "1.81", density: "5.91 g/cm³", oxStates: "+3", radius: "136 pm", apps: "Luces LED de bajo consumo, semiconductores en Blu-Ray y termómetros médicos de alta temperatura.", desc: "Metal que se derrite al sostenerlo en la palma de la mano." },
  { num: 32, sym: "Ge", name: "Germanio", mass: "72.630", cat: "metaloides", col: 15, row: 5, state: "Sólido", config: "[Ar] 3d¹⁰ 4s² 4p²", disc: "Clemens Winkler (1886)", melting: "938.25 °C", boiling: "2833 °C", electro: "2.01", density: "5.323 g/cm³", oxStates: "+4", radius: "125 pm", apps: "Cables de fibra óptica de alta velocidad, lentes de visión nocturna por infrarrojos y microscopios.", desc: "Metaloide clave en telecomunicaciones ópticas." },
  { num: 33, sym: "As", name: "Arsénico", mass: "74.922", cat: "metaloides", col: 16, row: 5, state: "Sólido", config: "[Ar] 3d¹⁰ 4s² 4p³", disc: "Alberto Magno (1250)", melting: "817 °C", boiling: "614 °C", electro: "2.18", density: "5.727 g/cm³", oxStates: "-3, +3, +5", radius: "114 pm", apps: "Semiconductores ultrafases de arseniuro de galio en teléfonos móviles y diodos láser.", desc: "Metaloide famoso por su toxicidad histórica." },
  { num: 34, sym: "Se", name: "Selenio", mass: "78.971", cat: "no-metales", col: 17, row: 5, state: "Sólido", config: "[Ar] 3d¹⁰ 4s² 4p⁴", disc: "Jöns Jacob Berzelius (1817)", melting: "221 °C", boiling: "685 °C", electro: "2.55", density: "4.81 g/cm³", oxStates: "-2, +4, +6", radius: "103 pm", apps: "Fotocopiadoras, tambores de impresoras láser, champús anticaspa y paneles fotovoltaicos.", desc: "Fotoconductor que conduce electricidad en presencia de luz." },
  { num: 35, sym: "Br", name: "Bromo", mass: "79.904", cat: "halogenos", col: 18, row: 5, state: "Líquido", config: "[Ar] 3d¹⁰ 4s² 4p⁵", disc: "Antoine Jérôme Balard (1826)", melting: "-7.2 °C", boiling: "58.8 °C", electro: "2.96", density: "3.102 g/cm³", oxStates: "-1, +1, +3, +5", radius: "94 pm", apps: "Retardantes de llama en plásticos para electrónica, purificación de spas y revelado fotográfico.", desc: "El único elemento no metálico líquido a temperatura ambiente." },
  { num: 36, sym: "Kr", name: "Kriptón", mass: "83.798", cat: "gases-nobles", col: 19, row: 5, state: "Gas", config: "[Ar] 3d¹⁰ 4s² 4p⁶", disc: "William Ramsay (1898)", melting: "-157.36 °C", boiling: "-153.22 °C", electro: "3.00", density: "3.749 g/L", oxStates: "0", radius: "88 pm", apps: "Flashes para fotografía profesional de alta velocidad, bombillas de aeropuertos y láseres médicos.", desc: "Gas noble inerte utilizado en iluminación brillante." },

  // Período 5
  { num: 37, sym: "Rb", name: "Rubidio", mass: "85.468", cat: "alcalinos", col: 2, row: 6, state: "Sólido", config: "[Kr] 5s¹", disc: "Robert Bunsen (1861)", melting: "39.30 °C", boiling: "688 °C", electro: "0.82", density: "1.532 g/cm³", oxStates: "+1", radius: "265 pm", apps: "Relojes atómicos de alta precisión para navegación GPS, fotocélulas y telecomunicaciones.", desc: "Metal altamente reactivo que se inflama espontáneamente al aire." },
  { num: 38, sym: "Sr", name: "Estroncio", mass: "87.62", cat: "alcalinoterreos", col: 3, row: 6, state: "Sólido", config: "[Kr] 5s²", disc: "William Cruickshank (1787)", melting: "777 °C", boiling: "1382 °C", electro: "0.95", density: "2.64 g/cm³", oxStates: "+2", radius: "219 pm", apps: "Produce el vivo color rojo en fuegos artificiales, bengalas de señalización y dentífricos de dientes sensibles.", desc: "Metal que arde con un color rojo carmesí muy característico." },
  { num: 39, sym: "Y", name: "Itrio", mass: "88.906", cat: "transicion", col: 4, row: 6, state: "Sólido", config: "[Kr] 4d¹ 5s²", disc: "Johan Gadolin (1794)", melting: "1522 °C", boiling: "3338 °C", electro: "1.22", density: "4.472 g/cm³", oxStates: "+3", radius: "212 pm", apps: "Láseres médicos YAG para cirugías oculares, LED rojos en televisores y superaloyajes de turbinas.", desc: "Elemento ampliamente utilizado en la tecnología láser moderna." },
  { num: 40, sym: "Zr", name: "Circonio", mass: "91.224", cat: "transicion", col: 5, row: 6, state: "Sólido", config: "[Kr] 4d² 5s²", disc: "Martin Heinrich Klaproth (1789)", melting: "1855 °C", boiling: "4409 °C", electro: "1.33", density: "6.52 g/cm³", oxStates: "+4", radius: "206 pm", apps: "Gemas sintéticas de circonita en joyería, coronas dentales y tubos de combustible nuclear.", desc: "Resistente a la corrosión por agua salada y radiación." },
  { num: 41, sym: "Nb", name: "Niobio", mass: "92.906", cat: "transicion", col: 6, row: 6, state: "Sólido", config: "[Kr] 4d⁴ 5s¹", disc: "Charles Hatchett (1801)", melting: "2477 °C", boiling: "4744 °C", electro: "1.60", density: "8.57 g/cm³", oxStates: "+3, +5", radius: "198 pm", apps: "Imanes superconductores para escáneres de resonancia magnética, cohetes y tubos de escape.", desc: "Permite crear aleaciones metálicas supercondutoras." },
  { num: 42, sym: "Mo", name: "Molibdeno", mass: "95.95", cat: "transicion", col: 7, row: 6, state: "Sólido", config: "[Kr] 4d⁵ 5s¹", disc: "Carl Wilhelm Scheele (1778)", melting: "2623 °C", boiling: "4639 °C", electro: "2.16", density: "10.28 g/cm³", oxStates: "+6", radius: "190 pm", apps: "Herramientas sometidas a temperaturas extremas, motores de carreras y fertilizantes agrícolas.", desc: "Metal de muy alto punto de fusión que soporta esfuerzos intensos." },
  { num: 43, sym: "Tc", name: "Tecnecio", mass: "(98)", cat: "transicion", col: 8, row: 6, state: "Sólido", config: "[Kr] 4d⁵ 5s²", disc: "Emilio Segrè (1937)", melting: "2157 °C", boiling: "4265 °C", electro: "1.90", density: "11.0 g/cm³", oxStates: "+4, +7", radius: "183 pm", apps: "Isótopo Tecnecio-99m usado como trazador diagnóstico en gammagrafías médicas en hospitales.", desc: "El primer elemento producido de forma 100% artificial." },
  { num: 44, sym: "Ru", name: "Rutenio", mass: "101.07", cat: "transicion", col: 9, row: 6, state: "Sólido", config: "[Kr] 4d⁷ 5s¹", disc: "Karl Ernst Claus (1844)", melting: "2334 °C", boiling: "4150 °C", electro: "2.20", density: "12.45 g/cm³", oxStates: "+3, +4", radius: "178 pm", apps: "Contactos eléctricos de microswitches duraderos y discos duros de almacenamiento de datos.", desc: "Metal noble raro del grupo del platino muy resistente al desgaste." },
  { num: 45, sym: "Rh", name: "Rodio", mass: "102.91", cat: "transicion", col: 10, row: 6, state: "Sólido", config: "[Kr] 4d⁸ 5s¹", disc: "William Hyde Wollaston (1803)", melting: "1964 °C", boiling: "3695 °C", electro: "2.28", density: "12.41 g/cm³", oxStates: "+3", radius: "173 pm", apps: "Catalizadores de tubos de escape de coches para reducir gases tóxicos y baños brillantes de joyería.", desc: "Uno de los metales nobles más valiosos del planeta." },
  { num: 46, sym: "Pd", name: "Paladio", mass: "106.42", cat: "transicion", col: 11, row: 6, state: "Sólido", config: "[Kr] 4d¹⁰", disc: "William Hyde Wollaston (1803)", melting: "1554.9 °C", boiling: "2963 °C", electro: "2.20", density: "12.02 g/cm³", oxStates: "+2, +4", radius: "169 pm", apps: "Catalizadores de vehículos híbridos, conectores en placas base y condensadores cerámicos.", desc: "Puede absorber hasta 900 veces su volumen en gas hidrógeno." },
  { num: 47, sym: "Ag", name: "Plata", mass: "107.87", cat: "transicion", col: 12, row: 6, state: "Sólido", config: "[Kr] 4d¹⁰ 5s¹", disc: "Conocido en la antigüedad", melting: "961.78 °C", boiling: "2162 °C", electro: "1.93", density: "10.49 g/cm³", oxStates: "+1", radius: "165 pm", apps: "Joyería, contactos eléctricos de alta precisión, paneles solares y espejos reflectantes.", desc: "El elemento con la mayor conductividad térmica y eléctrica existente." },
  { num: 48, sym: "Cd", name: "Cadmio", mass: "112.41", cat: "transicion", col: 13, row: 6, state: "Sólido", config: "[Kr] 4d¹⁰ 5s²", disc: "Karl Samuel Leberecht Hermann (1817)", melting: "321.07 °C", boiling: "767 °C", electro: "1.69", density: "8.65 g/cm³", oxStates: "+2", radius: "161 pm", apps: "Baterías recargables de Níquel-Cadmio (NiCd), estabilizador de PVC y pigmentos amarillos.", desc: "Metal pesado resistente a la corrosión, de uso controlado." },
  { num: 49, sym: "In", name: "Indio", mass: "114.82", cat: "otros-metales", col: 14, row: 6, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p¹", disc: "Ferdinand Reich (1863)", melting: "156.60 °C", boiling: "2072 °C", electro: "1.78", density: "7.31 g/cm³", oxStates: "+3", radius: "156 pm", apps: "Capas conductoras transparentes en pantallas táctiles de moviles (ITO) y soldaduras de microchips.", desc: "Vital para la fabricación de pantallas planas táctiles." },
  { num: 50, sym: "Sn", name: "Estaño", mass: "118.71", cat: "otros-metales", col: 15, row: 6, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p²", disc: "Conocido en la antigüedad", melting: "231.93 °C", boiling: "2602 °C", electro: "1.96", density: "7.31 g/cm³", oxStates: "+2, +4", radius: "145 pm", apps: "Soldadura de placas electrónicas, latas de conserva de estañado y aleación del bronce.", desc: "Metal maleable resistente a la corrosión ácida de alimentos." },
  { num: 51, sym: "Sb", name: "Antimonio", mass: "121.76", cat: "metaloides", col: 16, row: 6, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p³", disc: "Conocido en la antigüedad", melting: "630.63 °C", boiling: "1587 °C", electro: "2.05", density: "6.697 g/cm³", oxStates: "-3, +3, +5", radius: "133 pm", apps: "Aditivo ignífugo en plásticos, baterías de plomo para coches y diodos de infrarrojos.", desc: "Metaloide que incrementa sustancialmente la dureza del plomo." },
  { num: 52, sym: "Te", name: "Teluro", mass: "127.60", cat: "metaloides", col: 17, row: 6, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p⁴", disc: "Franz-Joseph Müller von Reichenstein (1782)", melting: "449.51 °C", boiling: "988 °C", electro: "2.10", density: "6.24 g/cm³", oxStates: "-2, +4, +6", radius: "123 pm", apps: "Paneles solares delgados de teluro de cadmio, discos regrabables CD/DVD y aleaciones de maquinado.", desc: "Semiconductor raro utilizado en energía limpia renovable." },
  { num: 53, sym: "I", name: "Yodo", mass: "126.90", cat: "halogenos", col: 18, row: 6, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p⁵", disc: "Bernard Courtois (1811)", melting: "113.7 °C", boiling: "184.3 °C", electro: "2.66", density: "4.933 g/cm³", oxStates: "-1, +1, +5, +7", radius: "115 pm", apps: "Desinfectante antiséptico para curar heridas (povidona yodada), sal yodada y medios de contraste radiológicos.", desc: "Nutriente indispensable para el correcto funcionamiento del tiroides." },
  { num: 54, sym: "Xe", name: "Xenón", mass: "131.29", cat: "gases-nobles", col: 19, row: 6, state: "Gas", config: "[Kr] 4d¹⁰ 5s² 5p⁶", disc: "William Ramsay (1898)", melting: "-111.75 °C", boiling: "-108.09 °C", electro: "2.60", density: "5.894 g/L", oxStates: "0", radius: "108 pm", apps: "Faros de Xenón en vehículos de alta gama, propulsores iónicos de satélites y anestésicos médicos.", desc: "Gas noble pesado usado en tecnologías espaciales y ópticas." },

  // Período 6
  { num: 55, sym: "Cs", name: "Cesio", mass: "132.91", cat: "alcalinos", col: 2, row: 7, state: "Sólido", config: "[Xe] 6s¹", disc: "Robert Bunsen (1860)", melting: "28.44 °C", boiling: "671 °C", electro: "0.79", density: "1.93 g/cm³", oxStates: "+1", radius: "298 pm", apps: "Definición oficial del 'segundo' en relojes atómicos ultraprecisos y fluidos de perforación petrolífera.", desc: "El metal alcalino más reactivo y blando existente." },
  { num: 56, sym: "Ba", name: "Bario", mass: "137.33", cat: "alcalinoterreos", col: 3, row: 7, state: "Sólido", config: "[Xe] 6s²", disc: "Carl Wilhelm Scheele (1772)", melting: "727 °C", boiling: "1897 °C", electro: "0.89", density: "3.51 g/cm³", oxStates: "+2", radius: "222 pm", apps: "Papilla de contraste de sulfato de bario para radiografías del tubo digestivo y bujías de motor.", desc: "Metal alcalinotérreo utilizado ampliamente en medicina de diagnóstico." },
  { num: 71, sym: "Lu", name: "Lutecio", mass: "174.97", cat: "transicion", col: 4, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹ 6s²", disc: "Georges Urbain (1907)", melting: "1663 °C", boiling: "3402 °C", electro: "1.27", density: "9.841 g/cm³", oxStates: "+3", radius: "217 pm", apps: "Detectores en escáneres de tomografía por emisión de positrones (PET) en hospitales y craqueo de petróleo.", desc: "El lantánido más pesado, denso y duro." },
  { num: 72, sym: "Hf", name: "Hafnio", mass: "178.49", cat: "transicion", col: 5, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d² 6s²", disc: "Dirk Coster (1923)", melting: "2233 °C", boiling: "4603 °C", electro: "1.30", density: "13.31 g/cm³", oxStates: "+4", radius: "208 pm", apps: "Barras de control de absorción de neutrones en submarinos nucleares e aislantes en procesadores Intel.", desc: "Excelente para el control de la fisión nuclear." },
  { num: 73, sym: "Ta", name: "Tántalo", mass: "180.95", cat: "transicion", col: 6, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d³ 6s²", disc: "Anders Gustaf Ekeberg (1802)", melting: "3017 °C", boiling: "5458 °C", electro: "1.50", density: "16.69 g/cm³", oxStates: "+5", radius: "200 pm", apps: "Microcondensadores ultrapequeños para teléfonos inteligentes, placas para cirugías e instrumental quirúrgico.", desc: "Metal sumamente resistente a la corrosión biológica y química." },
  { num: 74, sym: "W", name: "Wolframio", mass: "183.84", cat: "transicion", col: 7, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", disc: "Hermanos Elhuyar (1783)", melting: "3422 °C", boiling: "5555 °C", electro: "2.36", density: "19.25 g/cm³", oxStates: "+6", radius: "193 pm", apps: "Filamentos de bombillas clásicas, electrodos de soldadura TIG y brocas de minería ultraresistentes.", desc: "Posee el punto de fusión más alto de todos los metales del planeta." },
  { num: 75, sym: "Re", name: "Renio", mass: "186.21", cat: "transicion", col: 8, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", disc: "Masataka Ogawa (1908)", melting: "3186 °C", boiling: "5596 °C", electro: "1.90", density: "21.02 g/cm³", oxStates: "+4, +7", radius: "188 pm", apps: "Álabes de turbinas de reactores de aviación comercial/militar y catalizadores de gasolina sin plomo.", desc: "Uno de los metales más raros y resistentes al calor extremo." },
  { num: 76, sym: "Os", name: "Osmio", mass: "190.23", cat: "transicion", col: 9, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", disc: "Smithson Tennant (1803)", melting: "3033 °C", boiling: "5012 °C", electro: "2.20", density: "22.59 g/cm³", oxStates: "+4, +8", radius: "185 pm", apps: "Puntas de plumas estilográficas de lujo, agujas de tocadiscos de vinilo y contactos eléctricos.", desc: "El elemento natural más denso de la Tierra (22.59 g/cm³)." },
  { num: 77, sym: "Ir", name: "Iridio", mass: "192.22", cat: "transicion", col: 10, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", disc: "Smithson Tennant (1803)", melting: "2446 °C", boiling: "4428 °C", electro: "2.20", density: "22.56 g/cm³", oxStates: "+3, +4", radius: "180 pm", apps: "Bujías de coche de larga duración, crisoles de fundición de monocristales y contactos marinos.", desc: "El metal más resistente a la corrosión ácida existente." },
  { num: 78, sym: "Pt", name: "Platino", mass: "195.08", cat: "transicion", col: 11, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", disc: "Antonio de Ulloa (1735)", melting: "1768.3 °C", boiling: "3825 °C", electro: "2.28", density: "21.45 g/cm³", oxStates: "+2, +4", radius: "177 pm", apps: "Convertidores catalíticos de automóviles, joyería de alta gama, marcapasos y fármacos contra el cáncer.", desc: "Metal precioso muy estable e inalterable químicamente." },
  { num: 79, sym: "Au", name: "Oro", mass: "196.97", cat: "transicion", col: 12, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", disc: "Conocido en la antigüedad", melting: "1064.18 °C", boiling: "2856 °C", electro: "2.54", density: "19.30 g/cm³", oxStates: "+1, +3", radius: "174 pm", apps: "Joyería, lingotes de reserva financiera, contactos inoxidables en cables HDMI y electrónica.", desc: "Metal maleable precioso que jamás se oxida al aire." },
  { num: 80, sym: "Hg", name: "Mercurio", mass: "200.59", cat: "transicion", col: 13, row: 7, state: "Líquido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", disc: "Conocido en la antigüedad", melting: "-38.83 °C", boiling: "356.73 °C", electro: "2.00", density: "13.534 g/cm³", oxStates: "+1, +2", radius: "171 pm", apps: "Termómetros clínicos tradicionales, barómetros de presión y lámparas de vapor fluorescentes.", desc: "El único metal líquido a temperatura ambiente." },
  { num: 81, sym: "Tl", name: "Talio", mass: "204.38", cat: "otros-metales", col: 14, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", disc: "William Crookes (1861)", melting: "304 °C", boiling: "1473 °C", electro: "1.62", density: "11.85 g/cm³", oxStates: "+1, +3", radius: "156 pm", apps: "Sensores infrarrojos de alta sensibilidad, cristales ópticos especiales y raticidas históricos.", desc: "Metal sumamente blando y altamente tóxico." },
  { num: 82, sym: "Pb", name: "Plomo", mass: "207.2", cat: "otros-metales", col: 15, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", disc: "Conocido en la antigüedad", melting: "327.46 °C", boiling: "1749 °C", electro: "1.87", density: "11.34 g/cm³", oxStates: "+2, +4", radius: "154 pm", apps: "Baterías de arranque para coches de combustión, chalecos de protección contra rayos X y plomadas.", desc: "Metal pesado denso que bloquea las radiaciones ionizantes." },
  { num: 83, sym: "Bi", name: "Bismuto", mass: "208.98", cat: "otros-metales", col: 16, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", disc: "Claude François Geoffroy (1753)", melting: "271.4 °C", boiling: "1564 °C", electro: "2.02", density: "9.78 g/cm³", oxStates: "+3", radius: "143 pm", apps: "Medicamentos antiácidos estomacales (Pepto-Bismol), cosméticos y fusibles de seguridad contra fuego.", desc: "Metal no tóxico que forma espectaculares cristales de colores arcoíris." },
  { num: 84, sym: "Po", name: "Polonio", mass: "(209)", cat: "otros-metales", col: 17, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", disc: "Marie y Pierre Curie (1898)", melting: "254 °C", boiling: "962 °C", electro: "2.00", density: "9.196 g/cm³", oxStates: "+2, +4", radius: "135 pm", apps: "Eliminadores de electricidad estática en cepillos industriales de película y fuentes de calor espaciales.", desc: "Elemento radiactivo descubierto por los esposos Curie." },
  { num: 85, sym: "At", name: "Astato", mass: "(210)", cat: "halogenos", col: 18, row: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", disc: "Dale R. Corson (1940)", melting: "302 °C", boiling: "337 °C", electro: "2.20", density: "7.0 g/cm³", oxStates: "-1, +1, +5", radius: "127 pm", apps: "Investigaciones avanzadas de radioterapia localizada contra células cancerígenas tumorales.", desc: "El elemento natural más escaso de la corteza terrestre." },
  { num: 86, sym: "Rn", name: "Radón", mass: "(222)", cat: "gases-nobles", col: 19, row: 7, state: "Gas", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", disc: "Friedrich Ernst Dorn (1900)", melting: "-71 °C", boiling: "-61.7 °C", electro: "N/A", density: "9.73 g/L", oxStates: "0", radius: "120 pm", apps: "Tratamientos de radioterapia targeted e indicadores geológicos para predecir terremotos.", desc: "Gas noble radiactivo proveniente de la desintegración del uranio en rocas." },

  // Período 7
  { num: 87, sym: "Fr", name: "Francio", mass: "(223)", cat: "alcalinos", col: 2, row: 8, state: "Sólido", config: "[Rn] 7s¹", disc: "Marguerite Perey (1939)", melting: "27 °C", boiling: "677 °C", electro: "0.70", density: "1.87 g/cm³", oxStates: "+1", radius: "348 pm", apps: "Uso exclusivo en investigación de física atómica básica mediante trampas magneto-ópticas de láser.", desc: "Altamente inestable y radiactivo. Extremadamente raro." },
  { num: 88, sym: "Ra", name: "Radio", mass: "(226)", cat: "alcalinoterreos", col: 3, row: 8, state: "Sólido", config: "[Rn] 7s²", disc: "Marie y Pierre Curie (1898)", melting: "700 °C", boiling: "1737 °C", electro: "0.90", density: "5.5 g/cm³", oxStates: "+2", radius: "283 pm", apps: "Pinturas luminiscentes antiguas en agujas de relojes y fuentes médicas radiológicas del siglo XX.", desc: "Famoso por su luminiscencia verde histórica y alta radiactividad." },
  { num: 103, sym: "Lr", name: "Laurencio", mass: "(266)", cat: "transicion", col: 4, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d¹ 7s²", disc: "Albert Ghiorso (1961)", melting: "1627 °C", boiling: "N/A", electro: "1.30", density: "15.6 g/cm³", oxStates: "+3", radius: "240 pm", apps: "Investigaciones en física nuclear para comprender el comportamiento de átomos superpesados.", desc: "Elemento sintético radiactivo producido en aceleradores." },
  { num: 104, sym: "Rf", name: "Rutherfordio", mass: "(267)", cat: "transicion", col: 5, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d² 7s²", disc: "JINR / LBNL (1964)", melting: "2100 °C", boiling: "5500 °C", electro: "N/A", density: "23.2 g/cm³", oxStates: "+4", radius: "220 pm", apps: "Investigación científica pura en física cuántica y transmutación de elementos.", desc: "Nombrado en honor a Ernest Rutherford, padre de la física nuclear." },
  { num: 105, sym: "Db", name: "Dubnio", mass: "(268)", cat: "transicion", col: 6, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d³ 7s²", disc: "JINR / LBNL (1968)", melting: "N/A", boiling: "N/A", electro: "N/A", density: "29.3 g/cm³", oxStates: "+5", radius: "205 pm", apps: "Estudios científicos de laboratorio sobre estabilidad de núcleos atómicos masivos.", desc: "Elemento superpesado sintetizado en Dubna, Rusia." },
  { num: 106, sym: "Sg", name: "Seaborgio", mass: "(269)", cat: "transicion", col: 7, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", disc: "LBNL (1974)", melting: "N/A", boiling: "N/A", electro: "N/A", density: "35.0 g/cm³", oxStates: "+6", radius: "190 pm", apps: "Investigación atómica sobre propiedades de la 'isla de estabilidad' nuclear.", desc: "Nombrado en honor al químico Glenn T. Seaborg." },
  { num: 107, sym: "Bh", name: "Bohrio", mass: "(270)", cat: "transicion", col: 8, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", disc: "GSI Helmholtzzentrum (1981)", melting: "N/A", boiling: "N/A", electro: "N/A", density: "37.1 g/cm³", oxStates: "+7", radius: "175 pm", apps: "Investigación científica sintética atómica.", desc: "Nombrado en honor al insigne físico Niels Bohr." },
  { num: 108, sym: "Hs", name: "Hassio", mass: "(277)", cat: "transicion", col: 9, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", disc: "GSI Helmholtzzentrum (1984)", melting: "N/A", boiling: "N/A", electro: "N/A", density: "40.7 g/cm³", oxStates: "+8", radius: "165 pm", apps: "Investigación básica en aceleradores de iones pesados.", desc: "Nombrado por el estado alemán de Hesse." },
  { num: 109, sym: "Mt", name: "Meitnerio", mass: "(278)", cat: "transicion", col: 10, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", disc: "GSI Helmholtzzentrum (1982)", melting: "N/A", boiling: "N/A", electro: "N/A", density: "37.4 g/cm³", oxStates: "+3, +4", radius: "155 pm", apps: "Experimentos de fusión atómica nuclear.", desc: "Nombrado en honor a Lise Meitner, pionera de la fisión nuclear." },
  { num: 110, sym: "Ds", name: "Darmstadtio", mass: "(281)", cat: "transicion", col: 11, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d⁸ 7s²", disc: "GSI Helmholtzzentrum (1994)", melting: "N/A", boiling: "N/A", electro: "N/A", density: "34.8 g/cm³", oxStates: "+2, +4", radius: "145 pm", apps: "Investigación en colisionadores de partículas.", desc: "Sintetizado en Darmstadt, Alemania." },
  { num: 111, sym: "Rg", name: "Roentgenio", mass: "(282)", cat: "transicion", col: 12, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d⁹ 7s²", disc: "GSI Helmholtzzentrum (1994)", melting: "N/A", boiling: "N/A", electro: "N/A", density: "28.7 g/cm³", oxStates: "+3", radius: "138 pm", apps: "Estudios teóricos y empíricos en física nuclear.", desc: "Nombrado en honor a Wilhelm Röntgen, descubridor de los rayos X." },
  { num: 112, sym: "Cn", name: "Copernicio", mass: "(285)", cat: "transicion", col: 13, row: 8, state: "Gas", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", disc: "GSI Helmholtzzentrum (1996)", melting: "N/A", boiling: "84 °C", electro: "N/A", density: "23.7 g/cm³", oxStates: "+2", radius: "132 pm", apps: "Investigación científica en química relativista.", desc: "Nombrado en honor al astrónomo Nicolás Copérnico." },
  { num: 113, sym: "Nh", name: "Nihonio", mass: "(286)", cat: "otros-metales", col: 14, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", disc: "RIKEN (2004)", melting: "430 °C", boiling: "1130 °C", electro: "N/A", density: "16.0 g/cm³", oxStates: "+1, +3", radius: "170 pm", apps: "Investigación científica de elementos transuránicos.", desc: "Primer elemento descubierto en Asia (Japón)." },
  { num: 114, sym: "Fl", name: "Flerovio", mass: "(289)", cat: "otros-metales", col: 15, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", disc: "JINR / LLNL (1998)", melting: "70 °C", boiling: "150 °C", electro: "N/A", density: "14.0 g/cm³", oxStates: "+2", radius: "180 pm", apps: "Investigación de propiedades químicas en física nuclear.", desc: "Nombrado por el laboratorio de reacciones Flerov." },
  { num: 115, sym: "Mc", name: "Moscovio", mass: "(290)", cat: "otros-metales", col: 16, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", disc: "JINR / LLNL (2003)", melting: "400 °C", boiling: "1100 °C", electro: "N/A", density: "13.5 g/cm³", oxStates: "+1, +3", radius: "187 pm", apps: "Uso experimental exclusivo en aceleradores sintéticos.", desc: "Sintetizado en la región de Moscú." },
  { num: 116, sym: "Lv", name: "Livermorio", mass: "(293)", cat: "otros-metales", col: 17, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", disc: "JINR / LLNL (2000)", melting: "435 °C", boiling: "820 °C", electro: "N/A", density: "12.9 g/cm³", oxStates: "+2, +4", radius: "183 pm", apps: "Investigación atómica sobre núcleos superpesados.", desc: "Nombrado en honor al Laboratorio Lawrence Livermore." },
  { num: 117, sym: "Ts", name: "Teneso", mass: "(294)", cat: "halogenos", col: 18, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", disc: "JINR / LLNL / ORNL (2010)", melting: "450 °C", boiling: "610 °C", electro: "N/A", density: "7.2 g/cm³", oxStates: "-1, +1, +3, +5", radius: "138 pm", apps: "Síntesis de laboratorio de vida ultracorta.", desc: "Nombrado en honor al estado de Tennessee." },
  { num: 118, sym: "Og", name: "Oganesón", mass: "(294)", cat: "gases-nobles", col: 19, row: 8, state: "Sólido", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", disc: "JINR / LLNL (2002)", melting: "80 °C", boiling: "100 °C", electro: "N/A", density: "5.0 g/cm³", oxStates: "0, +2, +4", radius: "152 pm", apps: "Investigación frontera sobre la tabla periódica.", desc: "El elemento más pesado existente. Nombrado por Yuri Oganessián." },

  // Lantánidos (Fila 10 en Grid)
  { num: 57, sym: "La", name: "Lántano", mass: "138.91", cat: "lantanidos", col: 5, row: 10, state: "Sólido", config: "[Xe] 5d¹ 6s²", disc: "Carl Gustaf Mosander (1838)", melting: "920 °C", boiling: "3464 °C", electro: "1.10", density: "6.162 g/cm³", oxStates: "+3", radius: "240 pm", apps: "Lentes de cámaras de alta calidad, baterías de coches híbridos y catalizadores de refinación.", desc: "Da nombre a la serie de los lantánidos." },
  { num: 58, sym: "Ce", name: "Cerio", mass: "140.12", cat: "lantanidos", col: 6, row: 10, state: "Sólido", config: "[Xe] 4f¹ 5d¹ 6s²", disc: "Martin Heinrich Klaproth (1803)", melting: "798 °C", boiling: "3443 °C", electro: "1.12", density: "6.77 g/cm³", oxStates: "+3, +4", radius: "235 pm", apps: "Piedras de encendedores (mischmetal), pulido de pantallas de cristal y hornos autolimpiantes.", desc: "El lantánido más abundante en la naturaleza." },
  { num: 59, sym: "Pr", name: "Praseodimio", mass: "140.91", cat: "lantanidos", col: 7, row: 10, state: "Sólido", config: "[Xe] 4f³ 6s²", disc: "Carl Auer von Welsbach (1885)", melting: "931 °C", boiling: "3520 °C", electro: "1.13", density: "6.77 g/cm³", oxStates: "+3", radius: "239 pm", apps: "Gafas de protección para soldadores (filtra la luz amarilla) y potentes imanes con neodimio.", desc: "Utilizado en la protección visual para trabajo térmico." },
  { num: 60, sym: "Nd", name: "Neodimio", mass: "144.24", cat: "lantanidos", col: 8, row: 10, state: "Sólido", config: "[Xe] 4f⁴ 6s²", disc: "Carl Auer von Welsbach (1885)", melting: "1021 °C", boiling: "3074 °C", electro: "1.14", density: "7.01 g/cm³", oxStates: "+3", radius: "229 pm", apps: "Los imanes permanentes más potentes del mundo (NdFeB) en auriculares, altavoces y discos duros.", desc: "Base de la tecnología de imanes potentes." },
  { num: 61, sym: "Pm", name: "Prometio", mass: "(145)", cat: "lantanidos", col: 9, row: 10, state: "Sólido", config: "[Xe] 4f⁵ 6s²", disc: "Jacob A. Marinsky (1945)", melting: "1042 °C", boiling: "3000 °C", electro: "N/A", density: "7.26 g/cm³", oxStates: "+3", radius: "236 pm", apps: "Microbaterías nucleares atómicas para marcapasos y sondas espaciales de larga duración.", desc: "Único lantánido 100% radiactivo." },
  { num: 62, sym: "Sm", name: "Samario", mass: "150.36", cat: "lantanidos", col: 10, row: 10, state: "Sólido", config: "[Xe] 4f⁶ 6s²", disc: "Paul-Émile Lecoq (1879)", melting: "1072 °C", boiling: "1794 °C", electro: "1.17", density: "7.52 g/cm³", oxStates: "+2, +3", radius: "229 pm", apps: "Imanes de Samario-Cobalto resistentes a altas temperaturas en motores de competición y fármacos.", desc: "Usado en medicina contra dolores óseos por cáncer." },
  { num: 63, sym: "Eu", name: "Europio", mass: "151.96", cat: "lantanidos", col: 11, row: 10, state: "Sólido", config: "[Xe] 4f⁷ 6s²", disc: "Eugène-Anatole Demarçay (1901)", melting: "822 °C", boiling: "1529 °C", electro: "N/A", density: "5.244 g/cm³", oxStates: "+2, +3", radius: "233 pm", apps: "Fósforos rojos luminiscentes en billetes de Euro anti-falsificación y pantallas planas.", desc: "El más reactivo de los elementos de tierras raras." },
  { num: 64, sym: "Gd", name: "Gadolinio", mass: "157.25", cat: "lantanidos", col: 12, row: 10, state: "Sólido", config: "[Xe] 4f⁷ 5d¹ 6s²", disc: "Jean Charles de Marignac (1880)", melting: "1313 °C", boiling: "3273 °C", electro: "1.20", density: "7.90 g/cm³", oxStates: "+3", radius: "237 pm", apps: "Agente intravenoso de contraste en resonancias magnéticas y barras de reactores nucleares.", desc: "Posee propiedades magnéticas excepcionales a temperatura ambiente." },
  { num: 65, sym: "Tb", name: "Terbio", mass: "158.93", cat: "lantanidos", col: 13, row: 10, state: "Sólido", config: "[Xe] 4f⁹ 6s²", disc: "Carl Gustaf Mosander (1843)", melting: "1356 °C", boiling: "3230 °C", electro: "N/A", density: "8.23 g/cm³", oxStates: "+3, +4", radius: "221 pm", apps: "Luminiscencia de color verde en pantallas, lámparas de bajo consumo y sensores de sonar.", desc: "Proporciona luz de color verde brillante en dispositivos electro-ópticos." },
  { num: 66, sym: "Dy", name: "Disprosio", mass: "162.50", cat: "lantanidos", col: 14, row: 10, state: "Sólido", config: "[Xe] 4f¹⁰ 6s²", disc: "Paul-Émile Lecoq (1886)", melting: "1412 °C", boiling: "2567 °C", electro: "1.22", density: "8.55 g/cm³", oxStates: "+3", radius: "228 pm", apps: "Aditivo para imanes permanentes de motores de coches eléctricos y discos de almacenamiento láser.", desc: "Tiene una atraccion magnética extremadamente elevada." },
  { num: 67, sym: "Ho", name: "Holmio", mass: "164.93", cat: "lantanidos", col: 15, row: 10, state: "Sólido", config: "[Xe] 4f¹¹ 6s²", disc: "Marc Delafontaine (1878)", melting: "1474 °C", boiling: "2700 °C", electro: "1.23", density: "8.80 g/cm³", oxStates: "+3", radius: "226 pm", apps: "Láseres médicos quirúrgicos para nefrología y concentrador de flujo magnético.", desc: "Posee la mayor fuerza magnética de cualquier elemento." },
  { num: 68, sym: "Er", name: "Erbio", mass: "167.26", cat: "lantanidos", col: 16, row: 10, state: "Sólido", config: "[Xe] 4f¹² 6s²", disc: "Carl Gustaf Mosander (1843)", melting: "1529 °C", boiling: "2868 °C", electro: "1.24", density: "9.066 g/cm³", oxStates: "+3", radius: "226 pm", apps: "Amplificador de señal en cables de fibra óptica submarinos trasatlánticos y láseres dermatológicos.", desc: "Vital para las telecomunicaciones globales de internet." },
  { num: 69, sym: "Tm", name: "Tulio", mass: "168.93", cat: "lantanidos", col: 17, row: 10, state: "Sólido", config: "[Xe] 4f¹³ 6s²", disc: "Per Teodor Cleve (1879)", melting: "1545 °C", boiling: "1950 °C", electro: "1.25", density: "9.32 g/cm³", oxStates: "+3", radius: "222 pm", apps: "Máquinas portátiles médicas de rayos X en campos de entrenamiento militar y láseres quirúrgicos.", desc: "El lantánido natural más escaso de la naturaleza." },
  { num: 70, sym: "Yb", name: "Iterbio", mass: "173.05", cat: "lantanidos", col: 18, row: 10, state: "Sólido", config: "[Xe] 4f¹⁴ 6s²", disc: "Jean Charles de Marignac (1878)", melting: "824 °C", boiling: "1196 °C", electro: "N/A", density: "6.90 g/cm³", oxStates: "+2, +3", radius: "222 pm", apps: "Láseres industriales de alta potencia para corte impecable de láminas de acero e hiper-relojes.", desc: "Utilizado en corte láser industrial de alta precisión." },

  // Actínidos (Fila 11 en Grid)
  { num: 89, sym: "Ac", name: "Actinio", mass: "(227)", cat: "actinidos", col: 5, row: 11, state: "Sólido", config: "[Rn] 6d¹ 7s²", disc: "André-Louis Debierne (1899)", melting: "1050 °C", boiling: "3200 °C", electro: "1.10", density: "10.07 g/cm³", oxStates: "+3", radius: "260 pm", apps: "Fuente de neutrones e investigación de inmunoterapia con radioisótopos contra tumores.", desc: "Brilla con luz azul en la oscuridad por su alta radiactividad." },
  { num: 90, sym: "Th", name: "Torio", mass: "232.04", cat: "actinidos", col: 6, row: 11, state: "Sólido", config: "[Rn] 6d² 7s²", disc: "Jöns Jacob Berzelius (1829)", melting: "1750 °C", boiling: "4788 °C", electro: "1.30", density: "11.72 g/cm³", oxStates: "+4", radius: "237 pm", apps: "Combustible en reactores nucleares limpios de nueva generación y electros de soldadura TIG.", desc: "Combustible nuclear alternativo abundante y seguro." },
  { num: 91, sym: "Pa", name: "Protactinio", mass: "231.04", cat: "actinidos", col: 7, row: 11, state: "Sólido", config: "[Rn] 5f² 6d¹ 7s²", disc: "Oswald Göhring (1913)", melting: "1568 °C", boiling: "4000 °C", electro: "1.50", density: "15.37 g/cm³", oxStates: "+4, +5", radius: "243 pm", apps: "Datación radiométrica de sedimentos marinos antiguos de hasta 125,000 años de antigüedad.", desc: "Elemento radiactivo escaso y muy tóxico." },
  { num: 92, sym: "U", name: "Uranio", mass: "238.03", cat: "actinidos", col: 8, row: 11, state: "Sólido", config: "[Rn] 5f³ 6d¹ 7s²", disc: "Martin Heinrich Klaproth (1789)", melting: "1135 °C", boiling: "4131 °C", electro: "1.38", density: "19.1 g/cm³", oxStates: "+3, +4, +5, +6", radius: "240 pm", apps: "Combustible de centrales nucleares comerciales para generación eléctrica y escudos contra radiaciones.", desc: "El elemento natural más pesado existente." },
  { num: 93, sym: "Np", name: "Neptunio", mass: "(237)", cat: "actinidos", col: 9, row: 11, state: "Sólido", config: "[Rn] 5f⁴ 6d¹ 7s²", disc: "Edwin McMillan (1940)", melting: "644 °C", boiling: "3902 °C", electro: "1.36", density: "20.45 g/cm³", oxStates: "+3, +4, +5, +6", radius: "221 pm", apps: "Detectores de neutrones de alta energía en física nuclear experimental.", desc: "El primer elemento transuránico sintético." },
  { num: 94, sym: "Pu", name: "Plutonio", mass: "(244)", cat: "actinidos", col: 10, row: 11, state: "Sólido", config: "[Rn] 5f⁶ 7s²", disc: "Glenn T. Seaborg (1940)", melting: "639.4 °C", boiling: "3228 °C", electro: "1.28", density: "19.816 g/cm³", oxStates: "+3, +4, +5, +6", radius: "243 pm", apps: "Generadores termoeléctricos RTG en sondas espaciales (Curiosity, Voyager) y aplicaciones defensivas.", desc: "Fuente de energía constante para misiones espaciales profundas." },
  { num: 95, sym: "Am", name: "Americio", mass: "(243)", cat: "actinidos", col: 11, row: 11, state: "Sólido", config: "[Rn] 5f⁷ 7s²", disc: "Glenn T. Seaborg (1944)", melting: "1176 °C", boiling: "2607 °C", electro: "1.30", density: "12.0 g/cm³", oxStates: "+3, +4, +5, +6", radius: "244 pm", apps: "Detectores domésticos de humo en hogares e industrias y calibradores de espesor de papel/metal.", desc: "Elemento sintético muy presente en la seguridad cotidiana." },
  { num: 96, sym: "Cm", name: "Curio", mass: "(247)", cat: "actinidos", col: 12, row: 11, state: "Sólido", config: "[Rn] 5f⁷ 6d¹ 7s²", disc: "Glenn T. Seaborg (1944)", melting: "1340 °C", boiling: "3110 °C", electro: "1.30", density: "13.51 g/cm³", oxStates: "+3, +4", radius: "245 pm", apps: "Espectrómetros de rayos X APXS montados en los Rovers marcianos para analizar rocas.", desc: "Nombrado en honor a Marie y Pierre Curie." },
  { num: 97, sym: "Bk", name: "Berkelio", mass: "(247)", cat: "actinidos", col: 13, row: 11, state: "Sólido", config: "[Rn] 5f⁹ 7s²", disc: "Lawrence Berkeley Lab (1949)", melting: "986 °C", boiling: "2627 °C", electro: "1.30", density: "14.78 g/cm³", oxStates: "+3, +4", radius: "244 pm", apps: "Elemento objetivo sintético para sintetizar elementos aún más pesados como el Teneso (117).", desc: "Sintetizado en Berkeley, California." },
  { num: 98, sym: "Cf", name: "Californio", mass: "(251)", cat: "actinidos", col: 14, row: 11, state: "Sólido", config: "[Rn] 5f¹⁰ 7s²", disc: "Lawrence Berkeley Lab (1950)", melting: "900 °C", boiling: "1470 °C", electro: "1.30", density: "15.1 g/cm³", oxStates: "+3", radius: "245 pm", apps: "Detectores de capas de agua y petróleo en pozos profundos e inspección de fuselajes de aviones.", desc: "Potentísima fuente emisora de neutrones." },
  { num: 99, sym: "Es", name: "Einstenio", mass: "(252)", cat: "actinidos", col: 15, row: 11, state: "Sólido", config: "[Rn] 5f¹¹ 7s²", disc: "Albert Ghiorso (1952)", melting: "860 °C", boiling: "N/A", electro: "1.30", density: "8.84 g/cm³", oxStates: "+3", radius: "245 pm", apps: "Estudios científicos de degradación de radiactividad y comportamiento cuántico pesado.", desc: "Descubierto en los restos radiactivos de la primera bomba H." },
  { num: 100, sym: "Fm", name: "Fermio", mass: "(257)", cat: "actinidos", col: 16, row: 11, state: "Sólido", config: "[Rn] 5f¹² 7s²", disc: "Albert Ghiorso (1952)", melting: "1527 °C", boiling: "N/A", electro: "1.30", density: "N/A", oxStates: "+2, +3", radius: "245 pm", apps: "Investigación científica nuclear en física de partículas sintéticas.", desc: "Nombrado en honor a Enrico Fermi." },
  { num: 101, sym: "Md", name: "Mendelevio", mass: "(258)", cat: "actinidos", col: 17, row: 11, state: "Sólido", config: "[Rn] 5f¹³ 7s²", disc: "Albert Ghiorso (1955)", melting: "827 °C", boiling: "N/A", electro: "1.30", density: "N/A", oxStates: "+2, +3", radius: "246 pm", apps: "Estudios científicos sobre la estructura química de actínidos pesados.", desc: "Nombrado en honor a Dmitri Mendeléyev, padre de la tabla periódica." },
  { num: 102, sym: "No", name: "Nobelio", mass: "(259)", cat: "actinidos", col: 18, row: 11, state: "Sólido", config: "[Rn] 5f¹⁴ 7s²", disc: "JINR / LBNL (1966)", melting: "827 °C", boiling: "N/A", electro: "1.30", density: "N/A", oxStates: "+2, +3", radius: "247 pm", apps: "Investigación básica atómica en aceleradores colisionadores.", desc: "Nombrado en honor a Alfred Nobel." }
];

// Mapeo explicativo de categorías
const categoryMap = {
  "gases-nobles": "Gases nobles",
  "halogenos": "Halógenos",
  "no-metales": "No metales",
  "metaloides": "Metaloides",
  "otros-metales": "Otros metales",
  "transicion": "Metales de transición",
  "alcalinoterreos": "Alcalinotérreos",
  "alcalinos": "Metales alcalinos",
  "lantanidos": "Lantánidos",
  "actinidos": "Actínidos"
};

const grid = document.getElementById('periodicGrid');

// Construcción de Encabezados de Grupos (1 al 18)
function buildHeaders() {
  const emptyCorner = document.createElement('div');
  grid.appendChild(emptyCorner);
  
  for (let c = 1; c <= 18; c++) {
    const h = document.createElement('div');
    h.className = 'col-header';
    h.textContent = c;
    grid.appendChild(h);
  }
}

// Renderizado de la Estructura Completa de los 118 Elementos
function renderTable() {
  grid.innerHTML = '';
  buildHeaders();

  // Números de Períodos en el Borde Izquierdo (1 a 7)
  for (let r = 1; r <= 7; r++) {
    const rh = document.createElement('div');
    rh.className = 'row-header';
    rh.style.gridRow = r + 1;
    rh.style.gridColumn = 1;
    rh.textContent = r;
    grid.appendChild(rh);
  }

  // Diagrama del Panel Central
  const centerArea = document.createElement('div');
  centerArea.className = 'center-info-area';
  centerArea.innerHTML = `
    <div style="position: relative;">
      <div class="sample-diagram">
        <div class="sample-top">
          <span>8</span>
          <span>15.999</span>
        </div>
        <div class="sample-symbol">O</div>
        <div class="sample-name">Oxígeno</div>

        <div class="sample-annotation anno-num">Número atómico</div>
        <div class="sample-annotation anno-sym">Símbolo químico</div>
        <div class="sample-annotation anno-mass">Masa atómica</div>
        <div class="sample-annotation anno-name">Nombre</div>
      </div>
    </div>
    <div class="legend-grid">
      <div class="legend-item" data-cat="gases-nobles"><div class="legend-box gases-nobles"></div><span>Gases nobles</span></div>
      <div class="legend-item" data-cat="transicion"><div class="legend-box transicion"></div><span>Metales de transición</span></div>
      <div class="legend-item" data-cat="halogenos"><div class="legend-box halogenos"></div><span>Halógenos</span></div>
      <div class="legend-item" data-cat="alcalinoterreos"><div class="legend-box alcalinoterreos"></div><span>Alcalinotérreos</span></div>
      <div class="legend-item" data-cat="no-metales"><div class="legend-box no-metales"></div><span>No metales</span></div>
      <div class="legend-item" data-cat="alcalinos"><div class="legend-box alcalinos"></div><span>Metales alcalinos</span></div>
      <div class="legend-item" data-cat="metaloides"><div class="legend-box metaloides"></div><span>Metaloides</span></div>
      <div class="legend-item" data-cat="lantanidos"><div class="legend-box lantanidos"></div><span>Lantánidos</span></div>
      <div class="legend-item" data-cat="otros-metales"><div class="legend-box otros-metales"></div><span>Otros metales</span></div>
      <div class="legend-item" data-cat="actinidos"><div class="legend-box actinidos"></div><span>Actínidos</span></div>
    </div>
  `;
  grid.appendChild(centerArea);

  // Renderizado de las 118 Tarjetas
  elementsData.forEach(el => {
    const card = document.createElement('button');
    card.className = `element-card ${el.cat}`;
    card.style.gridColumn = el.col;
    card.style.gridRow = el.row;
    card.dataset.num = el.num;
    card.dataset.cat = el.cat;

    card.innerHTML = `
      <div class="card-top">
        <span>${el.num}</span>
        <span>${el.mass}</span>
      </div>
      <div class="card-symbol">${el.sym}</div>
      <div class="card-name">${el.name}</div>
    `;

    card.addEventListener('click', () => openModal(el));
    grid.appendChild(card);
  });

  // Filtros interactivos de la leyenda
  document.querySelectorAll('.legend-item').forEach(item => {
    item.addEventListener('click', () => {
      filterCategory(item.dataset.cat);
    });
  });
}

// Lógica de Apertura e Inserción de Datos en la Ventana Modal
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');

function openModal(el) {
  const banner = document.getElementById('modalBanner');
  banner.className = `modal-header-banner ${el.cat}`;

  document.getElementById('mSymbol').textContent = el.sym;
  document.getElementById('mName').textContent = el.name;
  document.getElementById('mCategory').textContent = categoryMap[el.cat] || el.cat;
  document.getElementById('mNum').textContent = el.num;
  document.getElementById('mMass').textContent = `${el.mass} u`;
  
  let period = el.row - 1;
  let group = el.col - 1;
  if (el.cat === 'lantanidos') { period = 6; group = 'Lantánidos'; }
  if (el.cat === 'actinidos') { period = 7; group = 'Actínidos'; }

  document.getElementById('mPos').textContent = `Período ${period}, ${typeof group === 'number' ? 'Grupo ' + group : group}`;
  document.getElementById('mState').textContent = el.state || "Sólido";
  document.getElementById('mDisc').textContent = el.disc || "Antigüedad";
  document.getElementById('mConfig').textContent = el.config || "N/A";
  
  // Propiedades Físicas y Químicas
  document.getElementById('mMelting').textContent = el.melting || "N/A";
  document.getElementById('mBoiling').textContent = el.boiling || "N/A";
  document.getElementById('mElectro').textContent = el.electro || "N/A";
  document.getElementById('mDensity').textContent = el.density || "N/A";
  document.getElementById('mOxidation').textContent = el.oxStates || "N/A";
  document.getElementById('mRadius').textContent = el.radius || "N/A";

  // Aplicaciones y Descripción
  document.getElementById('mAplicaciones').textContent = el.apps || "Utilizado en investigaciones científicas, aplicaciones industriales y electrónicas.";
  document.getElementById('mDesc').textContent = el.desc || "Sin descripción disponible.";

  modalOverlay.classList.add('active');
}

closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('active');
});

// Filtros y Buscador
const searchInput = document.getElementById('searchInput');
const resetBtn = document.getElementById('resetBtn');

searchInput.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.element-card').forEach(card => {
    const el = elementsData.find(item => item.num == card.dataset.num);
    if (!el) return;
    const match = el.name.toLowerCase().includes(q) || 
                  el.sym.toLowerCase().includes(q) || 
                  el.num.toString() === q ||
                  (categoryMap[el.cat] && categoryMap[el.cat].toLowerCase().includes(q));
    if (match || q === '') {
      card.classList.remove('dimmed');
    } else {
      card.classList.add('dimmed');
    }
  });
});

function filterCategory(cat) {
  document.querySelectorAll('.element-card').forEach(card => {
    if (card.dataset.cat === cat) {
      card.classList.remove('dimmed');
    } else {
      card.classList.add('dimmed');
    }
  });
}

resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  document.querySelectorAll('.element-card').forEach(card => card.classList.remove('dimmed'));
});

// Inicialización de la Tabla
renderTable();