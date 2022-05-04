const initState = {
  instruments: [
    {
      id: "flute",
      name: "Flute",
      longName: "Reedless woodwind instrument",
      type: "woodwind",
      coverImage:
        "https://images.pexels.com/photos/6647868/pexels-photo-6647868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The flute is a woodwind instrument where sound is produced by vibrations from air streams breaking against a sharp edge. \n\nThe first flutes were blown from the end and date back to 35,000 years ago in Germany, while modern Western flutes played sideways were first discovered in ancient Greece in the 2nd century. Modern flutes nowadays are made from gold, silver, or sometimes platinum. \n\nThere are many different types of flutes, such as the alto flute, Eb soprano flute, and bass flute.",
      images: [
        "https://images.unsplash.com/photo-1601794391361-714374e6b618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",

        "https://images.pexels.com/photos/8929265/pexels-photo-8929265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        "https://images.unsplash.com/photo-1562808191-76e71b08a870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/RNjroFNi7mA",
          piece: "Debussy - Syrinx for solo flute",
          performer: "Performed by Emmanuel Pahud",
        },
        {
          url: "https://www.youtube.com/embed/kPUYn_wpHeI",
          piece: "Mozart - Flute concerto in D Major No. 2",
          performer:
            "Performed by James Galway & the Mostly Mozart Festival Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/JQDTVDmbEpA",
          piece: "Chaminade - Concertino for Flute",
          performer:
            "Performed by Hayley Miller & the Boston Philharmonic Youth Orchestra",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Flute"],
    },
    {
      id: "piccolo",
      name: "Piccolo",
      longName: "Reedless woodwind instrument",
      type: "woodwind",
      coverImage:
        "https://images.pexels.com/photos/7266037/pexels-photo-7266037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The piccolo is the highest pitched of the woodwind instruments. Although played one octave higher, it produces sound in a way similar to a flute. \n\nThis sharp-sounding instrument was initially aimed to make flute parts more prominent in a military band. Piccolos first came in the Key of D♭ but are now only sold in the Key of C. Piccolos are made of plastic, resin, brass, silver, and many types of hardwoods. Piccolo scores are usually written to intensify their timbre.",
      images: [
        "https://images.pexels.com/photos/7266037/pexels-photo-7266037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/y-twGDZeYs4?start=38",
          piece: "Mariinsky - Viva Italia Fantasy",
          performer: "Performed by Ksenia Kuelyar",
        },
        {
          url: "https://youtube.com/embed/RzKKg9zv9k4",
          piece: "Sousa - Stars and Stripes (Piccolo Solo)",
          performer: "Performed by Torin Olsen",
        },
        {
          url: "https://www.youtube.com/embed/EpiOB1iRisc",
          piece: "Vivaldi - Piccolo Concerto in C major (RV 443)",
          performer:
            "Performed by Sara Ureña Cabrera & the Armenian National Chamber Orchestra",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Piccolo"],
    },
    {
      id: "clarinet",
      name: "Clarinet",
      longName: "Single-reed woodwind instrument",
      type: "woodwind",
      coverImage:
        "https://images.pexels.com/photos/7970108/pexels-photo-7970108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The clarinet is a single-reed woodwind instrument with a cylindrical bore and a bell at the end. It produces sound when air is blown through the reed and the mouthpiece creates vibrations in the column of air in the bore.\n\nThe clarinet is a relatively new instrument, invented in the early 18th century by Johann Christoph Denner. It derives from the chalumeau, a woodwind instrument from the Middle Ages. Denner created the clarinet by adding a barrel and two keys to the chalumeau, which allowed musicians to play on different registers.\n\nThe clarinet has a multitude of variations, such as the B♭ clarinet, the bass clarinet, the alto clarinet, and the contrabass clarinet.",
      images: [
        "https://images.unsplash.com/photo-1600771488491-c22d42a9347d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        "https://images.unsplash.com/photo-1506601905416-f8802ad753ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

        "https://images.unsplash.com/photo-1609051207674-94fd5a044ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/YT_63UntRJE",
          piece: "Mozart - Clarinet Concerto in A major, K.622",
          performer:
            "Performed by Arngunnur Árnadóttir & Iceland Symphony Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/9GnJBLwOjFo",
          piece: "Copland - Concerto for Clarinet and String Orchestra",
          performer:
            "Performed by Martin Fröst & the Norwegian Chamber Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/8VXXNs87XwI",
          piece: "Weber - Clarinet Concerto No. 1",
          performer:
            "Performed by Andreas Ottensamer & the Berlin Philharmonic",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Clarinet"],
    },
    {
      id: "oboe",
      name: "Oboe",
      longName: "Double-reed woodwind instrument",
      type: "woodwind",
      coverImage:
        "https://images.pexels.com/photos/7095497/pexels-photo-7095497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The oboe is a woodwind instrument with a conical tube and a double-reed mouthpiece. It has a penetrating sound produced when air blown through the double reed forces the two reeds to vibrate closer together.\n\nAlthough the oboe originated in France, German-style oboes quickly spread through Europe. However, France developed the conservatoire style at the beginning of the 19th century. When Richard Strauss announced that he preferred the French oboe, that style rapidly expanded.",
      images: [
        "https://images.pexels.com/photos/51937/oboe-music-tool-art-51937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7095497/pexels-photo-7095497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/TPw5TvDPRoc",
          piece: "Bach - Oboe Concerto in F major",
          performer: "Performed by Emma Black & the Netherlands Bach Society",
        },
        {
          url: "https://www.youtube.com/embed/QsJtWhBGfo8",
          piece: "Haydn - Oboe Concerto in C major (Andante)",
          performer:
            "Performed by Francois Leleux & the Norwegian Chamber Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/2WJhax7Jmxs",
          piece: "Morricone - Gabriel's Oboe",
          performer:
            "Performed by Henrik Chaim Goldschmidt & the Faroe Islands Philharmonic",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Oboe"],
    },
    {
      id: "bassoon",
      name: "Bassoon",
      longName: "Double-reed woodwind instrument",
      type: "woodwind",
      coverImage:
        "https://cdn.pixabay.com/photo/2015/07/27/16/40/exam-862808_960_720.jpg",
      description:
        "The bassoon is a double-reed woodwind instrument that produces a low sound. It has a distinctive long, tubular shape and makes sound when air is blown between the reed and the mouthpiece, causing the two to vibrate together.\n\nThe bassoon typically is included in in orchestral, chamber, and band music, and recently has been making an occurence in pop, rock, and jazz music. ",
      images: [
        "https://cdn.pixabay.com/photo/2015/07/27/16/40/exam-862808_960_720.jpg",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/xidC7TZRxkA",
          piece: "Vivaldi - Concerto in E minor for Bassoon",
          performer:
            "Performed by Klaudia Abramczuk & the The Karol Szymanowski School of Music Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/QfhxZMUy9DU",
          piece: "Mozart - Bassoon Concert in B-flat major",
          performer: "Performed by Theo Plath & the Frankfurt Radio Symphony",
        },
        {
          url: "https://www.youtube.com/embed/cKBrnjxlKgU",
          piece: "Desmond - Take Five for bassoon quartet",
          performer:
            "Performed by Alexandre Silvério, Francisco Formiga, José Arion Linarez, Romeu Rabello",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Bassoon"],
    },
    {
      id: "saxophone",
      name: "Saxophone",
      longName: "Single-reed woodwind instrument",
      type: "woodwind",
      coverImage:
        "https://images.pexels.com/photos/9001955/pexels-photo-9001955.jpeg",
      description:
        "The saxophone is a single-reed woodwind that, unlike many other woodwinds, has a body made of brass. Sound is produced when a reed vibrates inside a mouthpiece, and pitch is altered by pressing the keys along the body.\n\nThe saxophone was created in the 1840s and came with a variety of different variations, including the alto, tenor, and baritone saxophones.\n\nThe saxophone can be found in many different ensembles such as jazz and concert bands, occasionally in orchestras, and has begun gaining popularity within rock and pop music.",
      images: [
        "https://images.unsplash.com/photo-1623123776919-e5208e9b0b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80",
        "https://images.pexels.com/photos/359995/pexels-photo-359995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2347916/pexels-photo-2347916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/XGL7cs8mf0A",
          piece: "Glazunov - Concerto for Alto Saxophone and String Orchestra",
          performer:
            "Performed by Joseph Lulloff & the Brevard Music Center Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/MYkIrYh7zuw",
          piece: "Glass - Concerto for saxophone quartet and orchestra",
          performer:
            "Performed by Bohemia Saxophone Quartet & the Brno Philharmonic Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/EcdycK4-Or4",
          piece: "Green - Body and Soul",
          performer: "Performed by Eric Marienthal & the Bobby Shew Quintet",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Saxophone"],
    },
    {
      id: "trumpet",
      name: "Trumpet",
      longName: "Brass instrument",
      type: "brass",
      coverImage:
        "https://images.pexels.com/photos/7577300/pexels-photo-7577300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The trumpet is the oldest brass instrument that is commonly heard in classical music, but is also extremely popular in jazz ensembles and solo performances as well. Players buzz/vibrate their lips together while blowing into the mouthpiece to create a sound.\n\nTrumpet-like instruments were first used around 1500 BC as signaling devices, but the modern version of the trumpet with piston valves and brass tubing dates back to around 1820.\n\nThere are many different variations of the trumpet but the most common one is the B-flat trumpet.",
      images: [
        "https://images.pexels.com/photos/8107048/pexels-photo-8107048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7772388/pexels-photo-7772388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1556298183-a7ba6248bc58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/ZUZYoVw7moc",
          piece: "Haydn - Trumpet Concerto in E flat (Allegro)",
          performer: "Performed by Alison Balsom & the BBC Proms Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/Ia6c6uIIb_Q",
          piece: "Arban - The Carnival of Venice",
          performer: "Performed by John Armstrong & the US Navy Concert Band",
        },
        {
          url: "https://www.youtube.com/embed/GN09R2ryJ7o?start=144",
          piece: "Amazing Grace - Trumpet Solo",
          performer: "Performed by Wynton Marsalis",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Trumpet"],
    },
    {
      id: "french_horn",
      name: "French Horn",
      longName: "Brass instrument",
      type: "brass",
      coverImage:
        "https://images.unsplash.com/photo-1603093509046-1917e4037c60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description:
        "The French horn is a brass instrument known for its distinct complicated tubing. Similar to a trumpet, sound is produced when the player buzzes their lips together through the mouthpiece. Pressing down valves and adjusting the pressure of the buzz can change the pitch of the sound.\n\nEarly versions of the french horn had simple tubing and no valves, often used for hunting. The first valved horn wasn’t invented until the 1800s, but received backlash due to players preferring a “natural”, or valveless horn better.\n\nThe french horn is most commonly used in orchestras for its middle range among other brass instruments. The most common french horn used by players is the F/B-flat double horn.",
      images: [
        "https://images.unsplash.com/photo-1590054387835-ab72678fef01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        "https://images.unsplash.com/photo-1611927264388-a9d2399df7c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1534076022384-b0755a10293b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/kMhRmVDhXy0",
          piece: "Tchaikovsky - Concerto for French horn",
          performer: "Performed by Yun Zheng & the Mariinsky Theater Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/SS8ey4g6jYo",
          piece: "Strauss - Concerto for French Horn No. 1",
          performer:
            "Performed by Radek Baborak & the National Philharmonic of Russia",
        },
        {
          url: "https://www.youtube.com/embed/AUES5PA0ALg",
          piece: "Tchaikovsky - 5th Symphony (Horn Solo)",
          performer: "Performed by Eric Terwilliger & the Munich Philharmonic",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/French_horn"],
    },
    {
      id: "trombone",
      name: "Trombone",
      longName: "Brass instrument",
      type: "brass",
      coverImage:
        "https://images.pexels.com/photos/5678612/pexels-photo-5678612.jpeg",
      description:
        "The trombone is a brass instrument that has a distinct sliding mechanism to change the pitch of the sound, unlike the valves in the rest of the brass instruments. There are, however, trombones with valves such as the superbone.\n\nThe first versions of the trombone in the 15th century were called sackbuts but became known as the trombone during the 18th century when it rose to popularity in England and Italy.\n\nTrombones are played in all different kinds of ensembles, like orchestras and jazz bands. The most commonly used trombones are the tenor and bass trombones.",
      images: [
        "https://images.pexels.com/photos/11354037/pexels-photo-11354037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1623783526605-0791af4e5377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80",
        "https://images.unsplash.com/photo-1569416355940-5a0de1789ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/YDf4-TRM2Us",
          piece: "David - Trombone Concertino",
          performer:
            "Performed by Michael Buchana & the Bavarian Radio Symphony Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/TNOi65x4SYU",
          piece: "Grøndahl - Trombone Concerto",
          performer:
            "Performed by Jonathan Reith & the Toulouse Wind Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/0K0cEQJUFHc",
          piece: "Chopin - Nocturne Op. 9 No. 2",
          performer:
            "Performed by Nicolas Moutier (trombone) & Ena Uotani (piano)",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Trombone"],
    },
    {
      id: "tuba",
      name: "Tuba",
      longName: "Brass instrument",
      type: "brass",
      coverImage:
        "https://images.unsplash.com/photo-1628701724035-3c015bf34885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "The tuba has the lowest sound of all brass instruments and produces sound when players buzz their lips against the mouthpiece.\n\nIt is one of the more recent instruments, only emerging in the mid-1800s, and replaced the ophicleide due to the added versatility of valves in tubas. Ironically, tuba means “trumpet” in Latin.\n\nThe tuba is the main bass in the brass section of ensembles, but can also be a solo instrument as well. The tuba is also commonly found in jazz and marching bands.",
      images: [
        "https://images.unsplash.com/photo-1551973732-463437696ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1617217139150-cf88bb9b96fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1630754157722-f18671962ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/3GzEvWXN3zY?start=35",
          piece: "Williams - Concerto in F minor for Tuba and Orchestra",
          performer: "Performed by JáTtik Clark & the Corvallis-OSU Symphony",
        },
        {
          url: "https://www.youtube.com/embed/oTrZb9aIOf8",
          piece: "Gregson - Tuba Concerto (movement 1)",
          performer: "Performed by Derek Fenstermacher & the CCM Wind Symphony",
        },
        {
          url: "https://www.youtube.com/embed/75jd5Mn--E8",
          piece: "Salgueiro - Concerto for Tuba op. 139",
          performer:
            "Performed by Miguel Canada & the Madeira Classical Orchestra",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Tuba"],
    },
    {
      id: "violin",
      name: "Violin",
      longName: "String instrument",
      type: "string",
      coverImage:
        "https://images.unsplash.com/photo-1624367171718-14026220ee35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "The violin is the highest-pitched string instrument that consists of 4 strings (sometimes 5) and a wooden body. Players produce sound by drawing a bow at different angles and different strings, but can also pluck the strings to create sound as well.\n\nThe modern violin dates back to 16th-century Italy but it is related to an old 3-stringed North African instrument called a rebab. It has also been the template of some other similar instruments, like the viola.\n\nViolins are extremely important instruments in Western classical music, but can also be played in folk or country music. There are even electric violins used in rock music.",
      images: [
        "https://images.pexels.com/photos/111287/pexels-photo-111287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2102573/pexels-photo-2102573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7095053/pexels-photo-7095053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/J0w0t4Qn6LY",
          piece: "Sibelius - Violin Concerto in D minor Op. 47",
          performer:
            "Performed by Hilary Hahn & the Radio France Philharmonic Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/I03Hs6dwj7E",
          piece: "Mendelssohn - Violin Concerto in E minor Op. 64",
          performer:
            "Performed by Ray Chen & the Gothenburg Symphony Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/cbJZeNlrYKg",
          piece: "Tchaikovsky - Violin Concerto in D major, Op. 35",
          performer:
            "Performed by Joshua Bell & the National Youth Orchestra of the USA",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Violin"],
    },
    {
      id: "viola",
      name: "Viola",
      longName: "String instrument",
      type: "string",
      coverImage:
        "https://images.pexels.com/photos/7097472/pexels-photo-7097472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The viola is a string instrument that is very similar to a violin and is played the same way, with a bow or plucking the strings to produce sound. However, the viola is larger and has a deeper sound.\n\nThe viola was used minimally in early orchestra music, often for harmonies and backing other instruments. However, it has become more incorporated, especially in chamber music, and more concertos and pieces are being written for the viola.",
      images: [
        "https://images.unsplash.com/photo-1621368286550-f54551f39b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.pexels.com/photos/7097457/pexels-photo-7097457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7936593/pexels-photo-7936593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/_Qm6mCeDrhM?start=104",
          piece: "Hoffmeister - Viola Concerto",
          performer:
            "Performed by Cristina Cordero & the Andrés Segovia Chamber Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/UzEFRNWEqQ4",
          piece: "Casadesus - Concerto in C minor for Viola and Orchestra",
          performer:
            "Performed by Sang-Jin Kim & the Deutsches Kammerorchester Berlin",
        },
        {
          url: "https://www.youtube.com/embed/yMpzPMkrALM",
          piece: "Telemann - Viola Concerto in G major",
          performer:
            "Performed by Rose Armbrust Griffin & the Midwest Young Artists Early Music Academy",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Viola"],
    },
    {
      id: "cello",
      name: "Cello",
      longName: "String instrument",
      type: "string",
      coverImage:
        "https://images.pexels.com/photos/7095500/pexels-photo-7095500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The cello, or violoncello, is a large string instrument with 4 strings that features a large range. Sound is usually created by drawing a bow against the strings, but the strings can sometimes also be plucked to produce notes.\n\nIts first versions came in the 1500s and it was initially called a bass violin. The invention of wire-wounded strings allowed for a richer bass sound that contributed towards the modern version of the cello.\n\nIt was first only used in the Baroque period to accompany other instruments but soon it became a very popular solo instrument and today the cello has a large selection of concerti and pieces written for it. It is popular in chamber music and orchestras as the bass string.",
      images: [
        "https://images.unsplash.com/photo-1603584915335-d612257071b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1617544515226-4d9cd3d2030a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.pexels.com/photos/9759672/pexels-photo-9759672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/lNVe_1Eb5dw",
          piece: "Elgar - Cello Concerto",
          performer:
            "Performed by Sheku Kanneh-Mason & the City of Birmingham Symphony Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/NayPFVXYo9o",
          piece: "Schumann - Cello Concerto Op. 129",
          performer: "Performed by Kian Soltani & the SWR Symphony Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/mGQLXRTl3Z0",
          piece: "Bach - Cello Suite No. 1 in G",
          performer: "Performed by Mischa Maisky",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Cello"],
    },
    {
      id: "harp",
      name: "Harp",
      longName: "String instrument",
      type: "string",
      coverImage:
        "https://images.unsplash.com/photo-1565743764716-1f50b606230e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      description:
        "The harp is a string instrument that has a triangular wooden body with strings stretch within the frame. Sound is produced by plucking or strumming the strings and there are pedals used to alter the pitch of the notes.\n\nHarps have been found as early as 3000 BCE and rose to popularity during medieval Europe and all over Asia and the Americas. Harps are used extensively in Irish folk music and even became the Ireland national symbol.\n\nThe modern concert harp is used in a variety of orchestras and can be played in folk and classical music.",
      images: [
        "https://images.unsplash.com/photo-1519682886610-a78e3d518e1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1502205403960-618401e1ad98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
        "https://images.unsplash.com/photo-1551895861-312f49dc66e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/AUrvEOeNp1I",
          piece: "Gliere - Concerto for Harp and Orchestra in E flat major",
          performer:
            "Performed by Elizaveta Bushueva & the Moscow City Symphony",
        },
        {
          url: "https://www.youtube.com/embed/vEKdxLrbSiU",
          piece: "Handel - Harp Concerto (first movement)",
          performer:
            "Performed by Julie Sgarro & the Qatar Philharmonic Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/oPmKRtWta4E",
          piece: "Bach - Toccata and Fugue in D Minor",
          performer: "Performed by Amy Turk",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Harp"],
    },
  ],
};

const InstrumentReducer = (state = initState, action) => {
  return state;
};

export default InstrumentReducer;
