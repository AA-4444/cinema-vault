/* ============================================================
   CinemaVault — Movie Data
   All movies from cinemaonevideo.com with real poster URLs
   ============================================================ */

const MOVIES = [
  {
    id: 1, slug: "7-y-sekret",
    title: "7-й секрет",
    year: 2022,
    genres: ["Екшен", "Містика"],
    countries: ["Франція"],
    duration: 30,
    rating: 8.0,
    views: 8300,
    age: "38+",
    description: "Головна героїня опиняється під впливом чарів таємничого чоловіка, який пропонує їй випробувати заборонені задоволення. Жінка, яка недавно вийшла заміж, змушена вести подвійне існування.",
    poster: "/img/posters/7-y-sekret.jpg",
    tags: ["Про життя", "Герої", "Прем'єри"],
    embedUrl: "https://www.youtube.com/embed/4WKtpLDUDUU"
  },
  {
    id: 2, slug: "gra-v-ilyuziyu",
    title: "Гра в ілюзію",
    year: 2022,
    genres: ["Драма", "Екшен"],
    countries: ["Франція"],
    duration: 95,
    rating: 6.5,
    views: 1240,
    age: "16+",
    description: "Захоплива гра між реальністю та ілюзією. Молодий чоловік потрапляє у вир подій, де нічого не є тим, чим здається.",
    poster: "/img/posters/gra-v-ilyuziyu.jpg",
    tags: ["Прем'єри", "Трилер"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3, slug: "lamborghini",
    title: "Ламборґіні: Людина-легенда",
    year: 2022,
    genres: ["Драма", "Біографія"],
    countries: ["США", "Італія"],
    duration: 110,
    rating: 6.8,
    views: 3450,
    age: "12+",
    description: "Біографічна драма про Ферруччо Ламборґіні — людину, яка з нуля побудувала одну з найвідоміших автомобільних марок у світі.",
    poster: "/img/posters/lamborghini.jpg",
    tags: ["Біографія", "Авто"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4, slug: "oderjymi-bajanniam",
    title: "Одержимі бажанням",
    year: 2022,
    genres: ["Драма", "Мелодрама"],
    countries: ["Франція"],
    duration: 88,
    rating: 6.2,
    views: 2100,
    age: "18+",
    description: "Пристрасна мелодрама про кохання та бажання, які руйнують усі межі та змінюють долі людей.",
    poster: "/img/posters/oderjymi-bajanniam.jpg",
    tags: ["Романтика", "Пристрасть"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5, slug: "megre-y-tayemnytsia",
    title: "Мегре й таємнича дівчина",
    year: 2022,
    genres: ["Детектив", "Драма"],
    countries: ["Франція"],
    duration: 88,
    rating: 6.9,
    views: 1890,
    age: "12+",
    description: "Комісар Мегре розслідує загадкове вбивство молодої жінки без документів. Слідство веде його в темні закутки паризького суспільства.",
    poster: "/img/posters/megre-y-tayemnytsia.jpg",
    tags: ["Детектив", "Франція"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6, slug: "avanturystky",
    title: "Авантюристки",
    year: 2022,
    genres: ["Комедія", "Пригоди"],
    countries: ["Франція"],
    duration: 95,
    rating: 6.4,
    views: 2340,
    age: "12+",
    description: "Дві подруги вирушають у несподівану авантюру, яка змінить їхнє уявлення про дружбу, кохання та справжні цінності.",
    poster: "/img/posters/avanturystky.jpg",
    tags: ["Комедія", "Подруги"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7, slug: "neideal-ni-poputnyky",
    title: "Неідеальні попутники",
    year: 2022,
    genres: ["Комедія", "Драма"],
    countries: ["Франція"],
    duration: 100,
    rating: 7.1,
    views: 3120,
    age: "12+",
    description: "Випадкові попутники в довгій подорожі відкривають один одному свої таємниці та знаходять несподіване порозуміння.",
    poster: "/img/posters/neideal-ni-poputnyky.jpg",
    tags: ["Дорога", "Комедія"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 8, slug: "pryvydy-inisherin",
    title: "Привиди Інішеріна",
    year: 2022,
    genres: ["Драма", "Комедія"],
    countries: ["Ірландія", "Велика Британія", "США"],
    duration: 114,
    rating: 7.7,
    views: 4560,
    age: "16+",
    description: "На маленькому ірландському острові раптово закінчується давня дружба. Один із чоловіків вирішує більше не спілкуватися зі своїм другом, не пояснюючи причин.",
    poster: "/img/posters/pryvydy-inisherin.jpg",
    tags: ["Ірландія", "Дружба"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 9, slug: "gra-tinei",
    title: "Гра тіней",
    year: 2022,
    genres: ["Трилер", "Детектив", "Містика"],
    countries: ["США"],
    duration: 108,
    rating: 7.0,
    views: 338,
    age: "16+",
    description: "Детектив розслідує серію загадкових злочинів, де кожна підказка веде його глибше в темряву. Гра тіней, де ніхто не є тим, ким здається.",
    poster: "/img/posters/gra-tinei.jpg",
    tags: ["Трилер", "Детектив"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 10, slug: "korol-tinei",
    title: "Король тіней",
    year: 2022,
    genres: ["Бойовик", "Фантастика", "Пригоди"],
    countries: ["США"],
    duration: 112,
    rating: 6.3,
    views: 2780,
    age: "16+",
    description: "Надприродний герой бореться з темними силами, що загрожують людству. Видовищний бойовик з неймовірними спецефектами.",
    poster: "/img/posters/korol-tinei.jpg",
    tags: ["Супергерої", "Екшен"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 11, slug: "lyudyna-yaka-namalyuvala-boha",
    title: "Людина, яка намалювала Бога",
    year: 2022,
    genres: ["Драма", "Біографія"],
    countries: ["Італія"],
    duration: 105,
    rating: 6.7,
    views: 890,
    age: "12+",
    description: "Біографічна драма про сліпого художника, який знаходить своє покликання через живопис. Надихаюча історія про силу духу та творчість.",
    poster: "/img/posters/lyudyna-yaka-namalyuvala-boha.jpg",
    tags: ["Біографія", "Мистецтво"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 12, slug: "mariupol-nevtrachena-nadiia",
    title: "Маріуполь. Невтрачена надія",
    year: 2022,
    genres: ["Документальні", "Драма"],
    countries: ["Україна"],
    duration: 85,
    rating: 8.5,
    views: 12400,
    age: "16+",
    description: "Документальний фільм про героїчний захист Маріуполя. Реальні свідчення людей, які пережили облогу міста та зберегли надію.",
    poster: "/img/posters/mariupol-nevtrachena-nadiia.jpg",
    tags: ["Україна", "Документальне", "Реальна подія"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 13, slug: "vykradach-zhinok",
    title: "Викрадач жінок",
    year: 2021,
    genres: ["Бойовик", "Кримінал", "Драма"],
    countries: ["США"],
    duration: 102,
    rating: 6.8,
    views: 760,
    age: "18+",
    description: "Детектив розслідує серію зникнень жінок у великому місті. Слідство заводить його в підпільний світ торгівлі людьми, де кожен крок може стати останнім.",
    poster: "/img/posters/vykradach-zhinok.jpg",
    tags: ["Герої", "Кримінал"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 14, slug: "nichne-pohrabuvannia",
    title: "Нічне пограбування",
    year: 2021,
    genres: ["Бойовик", "Кримінал", "Трилер"],
    countries: ["США"],
    duration: 95,
    rating: 6.5,
    views: 1890,
    age: "16+",
    description: "Команда досвідчених злодіїв планує ідеальне пограбування. Але коли все йде не за планом, кожен мусить боротися за своє виживання.",
    poster: "/img/posters/nichne-pohrabuvannia.jpg",
    tags: ["Кримінал", "Екшен"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 15, slug: "khrebet-dyiavola",
    title: "Хребет диявола",
    year: 2021,
    genres: ["Жахи", "Трилер", "Драма"],
    countries: ["Іспанія", "Мексика"],
    duration: 106,
    rating: 7.2,
    views: 2340,
    age: "18+",
    description: "Під час громадянської війни в Іспанії хлопчик потрапляє до сирітського притулку, де його переслідує привид загиблої дитини.",
    poster: "/img/posters/khrebet-dyiavola.jpg",
    tags: ["Жахи", "Іспанія"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 16, slug: "boyets-bez-pravyl",
    title: "Боєць без правил",
    year: 2021,
    genres: ["Бойовик", "Спортивні", "Драма"],
    countries: ["США"],
    duration: 110,
    rating: 6.7,
    views: 3120,
    age: "16+",
    description: "Молодий боєць змішаних єдиноборств прагне стати чемпіоном. На шляху до мрії він зустрічає численні перешкоди та особисті трагедії.",
    poster: "/img/posters/boyets-bez-pravyl.jpg",
    tags: ["Спорт", "Бокс"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 17, slug: "strybucha-bratva",
    title: "Стрибуча братва",
    year: 2021,
    genres: ["Комедія", "Пригоди"],
    countries: ["США"],
    duration: 90,
    rating: 6.2,
    views: 1560,
    age: "12+",
    description: "Весела компанія друзів вирушає у незабутню пригоду, яка обернеться серією кумедних непорозумінь та несподіваних відкриттів.",
    poster: "/img/posters/strybucha-bratva.jpg",
    tags: ["Комедія", "Друзі"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 18, slug: "dovira",
    title: "Довіра",
    year: 2021,
    genres: ["Трилер", "Детектив", "Кримінал"],
    countries: ["США"],
    duration: 98,
    rating: 6.9,
    views: 2100,
    age: "16+",
    description: "Агент ФБР намагається завоювати довіру небезпечного злочинця. Але чим глибше він занурюється в цю роль, тим складніше залишатися собою.",
    poster: "/img/posters/dovira.jpg",
    tags: ["Детектив", "ФБР"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 19, slug: "balkon",
    title: "Балкон",
    year: 2021,
    genres: ["Трилер", "Детектив", "Кримінал"],
    countries: ["Франція"],
    duration: 88,
    rating: 6.4,
    views: 650,
    age: "16+",
    description: "Жінка стає свідком злочину з балкону своєї квартири. Тепер вона сама в небезпеці — злочинець знає, що вона бачила.",
    poster: "/img/posters/balkon.jpg",
    tags: ["Трилер", "Свідок"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 20, slug: "pryvyd-chernytsi-z-borli",
    title: "Привид черниці з Борлі",
    year: 2021,
    genres: ["Жахи", "Містика", "Трилер"],
    countries: ["Велика Британія"],
    duration: 92,
    rating: 5.4,
    views: 401,
    age: "16+",
    description: "Дослідники паранормальних явищ приїжджають до старовинного монастиря, де, за легендою, блукає привид черниці. Але реальність виявляється страшнішою за будь-яку легенду.",
    poster: "/img/posters/pryvyd-chernytsi-z-borli.jpg",
    tags: ["Жахи", "Привиди"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 21, slug: "kolektory-protystoiannia",
    title: "Колектори: Протистояння",
    year: 2021,
    genres: ["Бойовик", "Кримінал", "Трилер"],
    countries: ["Росія"],
    duration: 95,
    rating: 6.1,
    views: 2340,
    age: "18+",
    description: "Команда колекторів стикається з небезпечним угрупованням. Протистояння переростає у криваву розборку, де виживає найсильніший.",
    poster: "/img/posters/kolektory-protystoiannia.jpg",
    tags: ["Кримінал", "Екшен"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 22, slug: "velykyi-chervonyi-pes-klifford",
    title: "Великий червоний пес Кліффорд",
    year: 2021,
    genres: ["Комедія", "Сімейні", "Пригоди"],
    countries: ["США"],
    duration: 97,
    rating: 5.8,
    views: 3120,
    age: "6+",
    description: "Маленька дівчинка знаходить маленьке цуценя, яке виростає до гігантських розмірів. Разом вони переживають незабутні пригоди у великому місті.",
    poster: "/img/posters/velykyi-chervonyi-pes-klifford.jpg",
    tags: ["Сімейне", "Собака"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 23, slug: "slepfeis",
    title: "Слепфейс",
    year: 2020,
    genres: ["Жахи", "Трилер", "Фантастика"],
    countries: ["США", "Канада"],
    duration: 88,
    rating: 6.1,
    views: 269,
    age: "18+",
    description: "Після смерті батьків Лукас залишається жити зі старшим братом. Справжні неприємності починаються, коли він стикається з Монстром, що живе в найближчому лісі.",
    poster: "/img/posters/slepfeis.jpg",
    tags: ["Жахи", "Монстр"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 24, slug: "postril-naoslip",
    title: "Постріл наосліп",
    year: 2020,
    genres: ["Бойовик", "Трилер", "Кримінал"],
    countries: ["США"],
    duration: 95,
    rating: 6.3,
    views: 327,
    age: "18+",
    description: "Колишній снайпер повертається до активної діяльності, щоб захистити свою родину від небезпечного злочинного угруповання.",
    poster: "/img/posters/postril-naoslip.jpg",
    tags: ["Снайпер", "Екшен"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 25, slug: "susidy-zverkhu",
    title: "Сусіди зверху",
    year: 2020,
    genres: ["Комедія", "Сімейні"],
    countries: ["США"],
    duration: 85,
    rating: 5.7,
    views: 350,
    age: "12+",
    description: "Тиха родина отримує нових сусідів, які перетворюють їхнє спокійне життя на справжній хаос. Але за всіма непорозуміннями ховається несподівана дружба.",
    poster: "/img/posters/susidy-zverkhu.jpg",
    tags: ["Комедія", "Сім'я"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 26, slug: "smert-u-teksasi",
    title: "Смерть у Техасі",
    year: 2020,
    genres: ["Трилер", "Кримінал", "Детектив"],
    countries: ["США"],
    duration: 98,
    rating: 6.0,
    views: 247,
    age: "18+",
    description: "Детектив розслідує серію загадкових вбивств у маленькому техаському містечку. Кожна підказка веде до нових запитань і небезпечних відкриттів.",
    poster: "/img/posters/smert-u-teksasi.jpg",
    tags: ["Детектив", "Техас"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 27, slug: "punkt-pryznachennia-akvapark",
    title: "Пункт призначення. Аквапарк",
    year: 2019,
    genres: ["Жахи", "Трилер"],
    countries: ["США"],
    duration: 82,
    rating: 5.2,
    views: 599,
    age: "18+",
    description: "Група молодих людей дивом уникає загибелі в аквапарку. Але доля не збирається відступати — смерть переслідує кожного з них.",
    poster: "/img/posters/punkt-pryznachennia-akvapark.jpg",
    tags: ["Жахи", "Смерть"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 28, slug: "rusalka-na-sushi",
    title: "Русалка на суші",
    year: 2019,
    genres: ["Фентезі", "Романтичні", "Комедія"],
    countries: ["Китай"],
    duration: 95,
    rating: 7.2,
    views: 628,
    age: "12+",
    description: "Молода русалка виходить на сушу і закохується в людину. Але їхнє кохання стикається з нерозумінням обох світів.",
    poster: "/img/posters/rusalka-na-sushi.jpg",
    tags: ["Фентезі", "Кохання"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 29, slug: "harmoniia",
    title: "Гармонія",
    year: 2018,
    genres: ["Мелодрама", "Музичні", "Драма"],
    countries: ["Корея"],
    duration: 115,
    rating: 7.8,
    views: 892,
    age: "12+",
    description: "У жіночій в'язниці формується хор. Через музику жінки знаходять сенс існування та справжню дружбу, яка змінює їхні долі.",
    poster: "/img/posters/harmoniia.jpg",
    tags: ["Музика", "Хор"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 30, slug: "liubov-zi-zlamom",
    title: "Любов зі зламом",
    year: 2018,
    genres: ["Мелодрама", "Комедія", "Романтичні"],
    countries: ["США"],
    duration: 98,
    rating: 6.2,
    views: 406,
    age: "16+",
    description: "Молода жінка після болісного розлучення вирішує більше не вірити в кохання. Але доля зводить її з чоловіком, який змінює всі її переконання.",
    poster: "/img/posters/liubov-zi-zlamom.jpg",
    tags: ["Романтика", "Кохання"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 31, slug: "choho-khochut-choloviky",
    title: "Чого хочуть чоловіки",
    year: 2018,
    genres: ["Комедія", "Романтичні", "Фентезі"],
    countries: ["Греція"],
    duration: 102,
    rating: 6.3,
    views: 636,
    age: "16+",
    description: "Жінка-спортивний агент раптово отримує здатність чути думки чоловіків. Це дає їй неймовірні переваги в роботі, але ускладнює особисте життя.",
    poster: "/img/posters/choho-khochut-choloviky.jpg",
    tags: ["Комедія", "Магія"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 32, slug: "skin",
    title: "Скін",
    year: 2018,
    genres: ["Драма", "Біографія", "Кримінал"],
    countries: ["США"],
    duration: 118,
    rating: 7.3,
    views: 719,
    age: "18+",
    description: "Реальна історія Брайона Вайдена — члена неонацистського угруповання, який вирішив залишити організацію та почати нове життя.",
    poster: "/img/posters/skin.jpg",
    tags: ["Біографія", "Реальна подія"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 33, slug: "tatusj-moyei-kolyshnoi",
    title: "Татусь моєї колишньої",
    year: 2017,
    genres: ["Комедія", "Романтичні"],
    countries: ["США"],
    duration: 90,
    rating: 6.1,
    views: 789,
    age: "16+",
    description: "Молодий чоловік закохується в жінку, батько якої виявляється його давнім суперником. Комедія про кохання, суперництво та несподівані збіги.",
    poster: "/img/posters/tatusj-moyei-kolyshnoi.jpg",
    tags: ["Комедія", "Романтика"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 34, slug: "hlobalna-kryza",
    title: "Глобальна криза",
    year: 2017,
    genres: ["Бойовик", "Фантастика", "Пригоди"],
    countries: ["США"],
    duration: 109,
    rating: 5.7,
    views: 560,
    age: "12+",
    description: "Серія природних катастроф загрожує знищити планету. Команда вчених та героїв намагається знайти спосіб зупинити глобальну катастрофу.",
    poster: "/img/posters/hlobalna-kryza.jpg",
    tags: ["Катастрофа", "Фантастика"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 35, slug: "smert-stalina",
    title: "Смерть Сталіна",
    year: 2017,
    genres: ["Комедія", "Історичні", "Драма"],
    countries: ["Велика Британія", "Франція", "Бельгія"],
    duration: 107,
    rating: 7.2,
    views: 62,
    age: "16+",
    description: "Чорна комедія про хаос, що охопив радянське керівництво після смерті Сталіна у 1953 році. Члени Політбюро борються за владу, поки тіло вождя ще не охолонуло.",
    poster: "/img/posters/smert-stalina.jpg",
    tags: ["Сатира", "Радянський союз"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 36, slug: "yoho-sobache-dilo",
    title: "Його собаче діло",
    year: 2017,
    genres: ["Комедія", "Сімейні", "Пригоди"],
    countries: ["США"],
    duration: 88,
    rating: 6.8,
    views: 491,
    age: "6+",
    description: "Кумедна пригода про собаку, який потрапляє у найнесподіваніші ситуації. Сімейна комедія для всіх вікових категорій.",
    poster: "/img/posters/yoho-sobache-dilo.jpg",
    tags: ["Сімейне", "Собака"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 37, slug: "dalekyi-skhyl",
    title: "Далекий схил",
    year: 2016,
    genres: ["Драма", "Мелодрама", "Романтичні"],
    countries: ["Велика Британія", "Ірландія", "США"],
    duration: 110,
    rating: 7.5,
    views: 237,
    age: "12+",
    description: "Зворушлива романтична драма про двох людей, які знаходять одне одного в найнесподіваніший момент свого життя. Їхня любов долає всі перешкоди, але доля готує їм важке випробування.",
    poster: "/img/posters/dalekyi-skhyl.jpg",
    tags: ["Про життя", "Романтика"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 38, slug: "shche-odyn-parubochy-vechir",
    title: "Ще один парубочий вечір",
    year: 2016,
    genres: ["Комедія", "Романтичні"],
    countries: ["США"],
    duration: 90,
    rating: 5.5,
    views: 163,
    age: "18+",
    description: "Напередодні весілля наречений влаштовує останній холостяцький вечір. Але те, що мало бути тихою вечіркою, перетворюється на незабутній хаос.",
    poster: "/img/posters/shche-odyn-parubochy-vechir.jpg",
    tags: ["Комедія", "Вечірка"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 39, slug: "mysteriium-temriava-v-pliashchytsi",
    title: "Містеріум. Темрява в пляшці",
    year: 2016,
    genres: ["Детектив", "Трилер", "Кримінал"],
    countries: ["Данія"],
    duration: 104,
    rating: 7.5,
    views: 948,
    age: "16+",
    description: "Детектив Карл Мьорк розслідує старе нерозкрите вбивство. Справа виявляється набагато складнішою, ніж здавалося на перший погляд.",
    poster: "/img/posters/mysteriium-temriava-v-pliashchytsi.jpg",
    tags: ["Скандинавський нуар", "Детектив"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 40, slug: "khitmen-ahent-47",
    title: "Хітмен: Агент 47",
    year: 2015,
    genres: ["Бойовик", "Трилер", "Фантастика"],
    countries: ["США", "Німеччина"],
    duration: 96,
    rating: 5.8,
    views: 646,
    age: "18+",
    description: "Генетично вдосконалений вбивця Агент 47 виконує небезпечні місії по всьому світу. Але цього разу його ціль — не звичайна жертва.",
    poster: "/img/posters/khitmen-ahent-47.jpg",
    tags: ["Екшен", "Кілер"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 41, slug: "dzhek-rayan-teoriia-khaosu",
    title: "Джек Раян: Теорія хаосу",
    year: 2014,
    genres: ["Бойовик", "Трилер", "Драма", "Шпигунський"],
    countries: ["США"],
    duration: 105,
    rating: 6.9,
    views: 581,
    age: "16+",
    description: "Молодий аналітик ЦРУ виявляє масштабну змову, яка може дестабілізувати світову економіку. Йому доведеться стати справжнім агентом, щоб зупинити катастрофу.",
    poster: "/img/posters/dzhek-rayan-teoriia-khaosu.jpg",
    tags: ["Шпигун", "ЦРУ"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 42, slug: "tort",
    title: "Торт",
    year: 2014,
    genres: ["Драма", "Мелодрама"],
    countries: ["США"],
    duration: 102,
    rating: 6.6,
    views: 58,
    age: "16+",
    description: "Жінка, яка страждає від хронічного болю після аварії, намагається знайти сенс у житті. Після смерті подруги вона починає бачити її привид.",
    poster: "/img/posters/tort.jpg",
    tags: ["Драма", "Біль"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 43, slug: "amerikanskyi-snaiper",
    title: "Американський снайпер",
    year: 2014,
    genres: ["Бойовик", "Біографія", "Драма", "Військовий"],
    countries: ["США"],
    duration: 132,
    rating: 7.3,
    views: 4521,
    age: "16+",
    description: "Реальна історія Кріса Кайла — найефективнішого снайпера в історії американської армії. Чотири відрядження до Іраку залишають незгладимий слід на його душі та родині.",
    poster: "/img/posters/amerikanskyi-snaiper.jpg",
    tags: ["Снайпер", "Ірак", "Реальна подія"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 44, slug: "patriik",
    title: "Патрік",
    year: 2013,
    genres: ["Комедія", "Сімейні"],
    countries: ["Бельгія", "Нідерланди"],
    duration: 100,
    rating: 7.0,
    views: 1230,
    age: "12+",
    description: "Патрік — 35-річний чоловік з синдромом Дауна, якого мати залишає на піклування батькові. Зворушлива комедія про прийняття та справжню любов.",
    poster: "/img/posters/patriik.jpg",
    tags: ["Сімейне", "Зворушливе"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 45, slug: "robot-arii",
    title: "Робот Арі",
    year: 2020,
    genres: ["Фантастика", "Бойовик", "Пригоди"],
    countries: ["США"],
    duration: 88,
    rating: 6.0,
    views: 1890,
    age: "12+",
    description: "У майбутньому роботи стали частиною повсякденного життя. Один з них отримує свідомість і вирушає у подорож, щоб знайти своє місце у світі.",
    poster: "/img/posters/robot-arii.jpg",
    tags: ["Робот", "Майбутнє"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
];

// ---- Genres ----
const GENRES = [
  "Трилери", "Спортивні", "Драми", "Біографія", "Мелодрами",
  "Кримінал", "Комедії", "Документальні", "Бойовики", "Жахи",
  "Пригоди", "Сімейні", "Фентезі", "Короткометражні", "Детективи",
  "Фантастика", "Військові", "Історія", "Вестерни", "Комікси",
  "Романтичні", "Музичні", "Анімація"
];

const GENRE_SLUGS = {
  "Трилери": "trylery",
  "Спортивні": "sportyvni",
  "Драми": "dramy",
  "Біографія": "biohrafiia",
  "Мелодрами": "melodramy",
  "Кримінал": "kryminal",
  "Комедії": "komedii",
  "Документальні": "dokumentalni",
  "Бойовики": "boyovyky",
  "Жахи": "zhakhy",
  "Пригоди": "pryhody",
  "Сімейні": "simeini",
  "Фентезі": "fentezi",
  "Короткометражні": "korotkometrajni",
  "Детективи": "detektyvy",
  "Фантастика": "fantastyka",
  "Військові": "viiskovi",
  "Історія": "istoriia",
  "Вестерни": "vesterny",
  "Комікси": "komiksy",
  "Романтичні": "romantychni",
  "Музичні": "muzychni",
  "Анімація": "animatsiia"
};

// Reverse mapping: slug -> genre name
const SLUG_TO_GENRE = {};
for (const [name, slug] of Object.entries(GENRE_SLUGS)) {
  SLUG_TO_GENRE[slug] = name;
}

// ---- Genre matching: movie genre -> sidebar genre ----
const GENRE_MAP = {
  "Трилер": "Трилери",
  "Трилери": "Трилери",
  "Спортивні": "Спортивні",
  "Драма": "Драми",
  "Драми": "Драми",
  "Біографія": "Біографія",
  "Мелодрама": "Мелодрами",
  "Мелодрами": "Мелодрами",
  "Кримінал": "Кримінал",
  "Комедія": "Комедії",
  "Комедії": "Комедії",
  "Документальні": "Документальні",
  "Бойовик": "Бойовики",
  "Бойовики": "Бойовики",
  "Жахи": "Жахи",
  "Пригоди": "Пригоди",
  "Сімейні": "Сімейні",
  "Фентезі": "Фентезі",
  "Короткометражні": "Короткометражні",
  "Детектив": "Детективи",
  "Детективи": "Детективи",
  "Фантастика": "Фантастика",
  "Військовий": "Військові",
  "Військові": "Військові",
  "Історичні": "Історія",
  "Романтичні": "Романтичні",
  "Музичні": "Музичні",
  "Анімація": "Анімація",
  "Містика": "Трилери",
  "Шпигунський": "Бойовики"
};

// ---- Helpers ----
function getMoviesByGenre(genreSlug) {
  const genreName = SLUG_TO_GENRE[genreSlug];
  if (!genreName) return [];
  return MOVIES.filter(m =>
    m.genres.some(g => GENRE_MAP[g] === genreName || g === genreName)
  );
}

function getMoviesByYear(year) {
  return MOVIES.filter(m => m.year === parseInt(year));
}

function getMovieBySlug(slug) {
  return MOVIES.find(m => m.slug === slug) || null;
}

function searchMovies(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return MOVIES.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genres.some(g => g.toLowerCase().includes(q)) ||
    m.description.toLowerCase().includes(q) ||
    m.tags.some(t => t.toLowerCase().includes(q)) ||
    m.countries.some(c => c.toLowerCase().includes(q))
  );
}

function getRelatedMovies(movie, count = 4) {
  return MOVIES
    .filter(m => m.id !== movie.id && m.genres.some(g => movie.genres.includes(g)))
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

function formatViews(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k';
  return n.toString();
}

const YEARS = [...new Set(MOVIES.map(m => m.year))].sort((a, b) => b - a);
