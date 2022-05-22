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
          url: "https://www.youtube.com/embed/D3gPY9XjHpM",
          piece: "Lizzo & David Letterman play the flute",
          performer:
            "Lizzo is an American singer and rapper who can also play the flute.",
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
          url: "https://www.youtube.com/embed/cueBYuIC9OU",
          piece: "Harp solo from Nutcracker on Piccolo (scene)",
          performer: "From the movie As Young As You Feel (1951)",
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
          url: "https://www.youtube.com/embed/nuEMqMc1Fh4",
          piece: "Lean On by Major Lazer (clarinet cover)",
          performer: "Performed by Four Play clarinet",
        },
        {
          url: "https://www.youtube.com/embed/mjr8jZ83vic",
          piece: "The Animals - House of the Rising Sun",
          performer: "Performed by Doreen Ketchens",
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
          url: "https://www.youtube.com/embed/pTsitO4TXF8",
          piece: "Morricone - Gabriel's Oboe (scene)",
          performer: "From the movie 'The Mission' (1986)",
        },
        {
          url: "https://www.youtube.com/embed/gXWZCtjgDms",
          piece: "Tchaikovsky - Swan Lake (oboe solo)",
          performer: "Performed by Andrew Parker",
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
          url: "https://www.youtube.com/embed/XghEYA-edZA",
          piece: "Camila Cabello - Havana (Bassoon Quartet)",
          performer:
            "Performed by The Breaking Winds arr. Brittany Harrington-Smith",
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
          url: "https://www.youtube.com/embed/BrmeOWbyOXw",
          piece: "Charles Mingus - Moanin' (transcribed by George Collier)",
          performer: "Performed by Leo P and the Metropole Orkest",
        },
        {
          url: "https://www.youtube.com/embed/XBWyE1v8--I",
          piece: "Tones and I - Dance Monkey (Saxophone cover)",
          performer: "Performed by Daniele Vitale",
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
          url: "https://www.youtube.com/embed/lcK8XbS5BuM",
          piece:
            "Star Spangled Banner trumpet solo (transcribed by George Collier)",
          performer: "Performed by Arturo Sandoval",
        },
        {
          url: "https://www.youtube.com/embed/IPXIgEAGe4U?start=98",
          piece: "Panic! At The Disco - High Hopes",
          performer: "There is a lot of trumpet in this song (ex. @ 1:38)",
        },
        {
          url: "https://www.youtube.com/embed/nXQdlr05ec8",
          piece: "Lil Nas X ft. Jack Harlow - Industry Baby",
          performer:
            "Cool trumpet solo in the beginning and throughout the song",
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
          url: "https://www.youtube.com/embed/_BK-akcT0mQ",
          piece: "French Horn Disney Medley",
          performer: "Performed by Marc Papeghin",
        },
        {
          url: "https://www.youtube.com/embed/EAJT9Bk_GeQ",
          piece: "Jurassic Park for Horns",
          performer: "Performed by the Vienna Horns",
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
          url: "https://www.youtube.com/embed/HwWQUXnD0oo",
          piece: "John Williams - Imperial March (Star Wars)",
          performer:
            "Performed by Manuel Nageli (trombone) and the Uniorchester Bern",
        },
        {
          url: "https://www.youtube.com/embed/lTLA4kKXzE8",
          piece: "Sweet Louisiana (Trombone solo)",
          performer: "Performed by Wycliffe Gordon",
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
          url: "https://www.youtube.com/embed/2Eq9m0zizkQ",
          piece: "'Tuba Christmas'",
          performer: "Video by CBS Sunday Morning & Bill Geist",
        },
        {
          url: "https://www.youtube.com/embed/NCyIEKT3NgI",
          piece: "'hilarious tuba solo'",
          performer: "Video by channel 'TheJimmywwebb'",
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
          url: "https://www.youtube.com/embed/fh59nvRA52M",
          piece: "'violinist string BREAKS during Tchaikovsky'",
          performer: "Performed by Ray Chen & the Seattle Symphony",
        },
        {
          url: "https://www.youtube.com/embed/jUjDcqdvCrk",
          piece: "Clean Bandit ft. Jess Glynne - Rather Be",
          performer:
            "There's a cool violin melody (especially apparent at the beginning of the song)",
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
          url: "https://www.youtube.com/embed/21BQF4oyLPg",
          piece: "Ed Sheeran - Perfect (Viola cover)",
          performer: "Performed by Jeremy Green",
        },
        {
          url: "https://www.youtube.com/embed/aCFnzSCzoYA",
          piece: "Queen - Bohemian Rhapsody (for orchestra & viola)",
          performer:
            "Performed by Sarah Harball (viola) & the Indiana University Studio Orchestra",
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
          url: "https://www.youtube.com/embed/DcFpvolRN3w",
          piece: "Game of Thrones Medley",
          performer: "Performed by 2CELLOS and the London Symphony Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/XPv4ohPTC4M",
          piece: "'Yo-Yo Ma Answers Cello Questions From Twitter'",
          performer: "Video by WIRED",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Cello"],
    },
    {
      id: "guitar",
      name: "Guitar",
      longName: "String instrument",
      type: "string",
      coverImage:
        "https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The guitar usually has six strings and can be played by plucking or strumming strings while pressing down on strings at the top of the guitar to change notes.\n\nGuitars used to be made out of wood and natural fibers, but strings began to be made out of steel in the late 1800s, and the modern nylon strings were introduced in the 1940s.\n\nThe guitar has many types, including the classical guitar and the electric guitar.\n\nGuitars are used in a large spectrum of music genres, including folk, jazz, and pop, but is not commonly found in classical music.",
      images: [
        "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2079169/pexels-photo-2079169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/258283/pexels-photo-258283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/6gQ7m0c4ReI",
          piece: "Marcin - Moonlight Sonata on Guitar",
          performer: "Performed by Marcin",
        },
        {
          url: "https://www.youtube.com/embed/u3ePPA0yzSU",
          piece: "Anne-Marie - 2002 (acoustic)",
          performer: "Performed by Ed Sheeran & Anne-Marie",
        },
        {
          url: "https://www.youtube.com/embed/TFrMDGfW_Sg?start=140",
          piece: "Ariana Grande - Dangerous Woman",
          performer:
            "This song has a really cool electric guitar solo after the bridge",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Guitar"],
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
          url: "https://www.youtube.com/embed/9Xd8xq06FCw",
          piece: "Simon & Garfunkel - The Sound of Silence (harp cover)",
          performer: "Performed by 'Naomi SV'",
        },
        {
          url: "https://www.youtube.com/embed/hoda-sLt6fY",
          piece: "Daft Punk - Get Lucky (w/ harp)",
          performer: "Performed by Anna McLuckie on 'The Voice UK'",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Harp"],
    },
    {
      id: "snare",
      name: "Snare Drum",
      longName: "Percussion instrument",
      type: "percussion",
      coverImage:
        "https://images.pexels.com/photos/5809457/pexels-photo-5809457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The snare drum makes a sharp sound when hit with a drum stick and is composed of many stiff wires inside the drum. Players can adjust the pitch and tone by changing the tension rod at the top of the snare.\n\nSnare drums first originated from the tabourine family and was made with a rattle.\n\nSnare drums provide an essential beat for pop, jazz, orchestra, etc and can be used in all music genres in general.",
      images: [
        "https://images.pexels.com/photos/6059430/pexels-photo-6059430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/8044195/pexels-photo-8044195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/fZOUAtE7QRw",
          piece: "Delecluse - Etude 1 for snare drum",
          performer: "Performed by Rob Knopper",
        },
        {
          url: "https://www.youtube.com/embed/lsgSGHyXRiE",
          piece: "20th Century Fox Intro Theme",
          performer:
            "The snare drum provides the beat for this iconic intro song",
        },
        {
          url: "https://www.youtube.com/embed/qEyLsagppNU",
          piece: "Michael Jackson - Rock With You",
          performer:
            "The snare is done really well in this song, especially the intro",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Snare-drum"],
    },
    {
      id: "timpani",
      name: "Timpani",
      longName: "Percussion instrument",
      type: "percussion",
      coverImage: "https://i.ytimg.com/vi/LCFQdKH8gOE/maxresdefault.jpg",
      description:
        "The timpani is commonly referred to as a kettle drum and is made up of the drum head on top of a large bowl. The timpani uses a special drum stick called a timpani mallet to produce sound.\n\nThe timpani was first introduce in the late 1800s and had evolved from military drums, originally having a wooden frame.\n\nThe timpani has a loud, vibrating sound and is used in many different ensembles, like concert, marching, and rock bands, as well as having been a part of orchestras for a long time.",
      images: [
        "https://i.ytimg.com/vi/LCFQdKH8gOE/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Munich_-_Timpani_player_in_an_orchestra_rehearsal_-_5655.jpg",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/4ePVC0Tk5JQ",
          piece: "Strauss - Also Sprach Zarathustra",
          performer: "Performed by the Bilkent Symphony Orchestra",
        },
        {
          url: "https://www.youtube.com/embed/EKflMwg0gTA",
          piece: "John Williams - Star Wars Main Theme (timpani)",
          performer: "Performed by Gabriel Rodriguez (timpani)",
        },
        {
          url: "https://www.youtube.com/embed/vUuLf1zlcJo",
          piece: "Timpani Drummer's Finale",
          performer: "Unknown performer (but watch until the end!)",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Timpani"],
    },
    {
      id: "piano",
      name: "Piano",
      longName: "Percussion/stringed instrument",
      type: "percussion",
      coverImage:
        "https://images.pexels.com/photos/2378209/pexels-photo-2378209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The piano is classified as both a percussive and stringed instrument. It is played by pressing down rows of keys that causes a hammer inside the piano to hit certain strings.\n\nThe piano was invented by Bartolomeo Cristofori in 1700, in Italy, but early versions had thin strings that led to a much quieter sound than the piano we have today.During the 1800s, lots of music arranged for piano was released so people could play it in their homes, as most had a simplified version of a piano, which led to it being one of the most familiar instruments in the world.\n\nThe piano is used widely in classical, jazz, pop, and solo music. It also typically accompanies other instruments, like the flute or clarinet.",
      images: [
        "https://images.pexels.com/photos/1021142/pexels-photo-1021142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2043571/pexels-photo-2043571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1552422535-c45813c61732?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/bT6WmWVYPhI",
          piece: "Beethoven - Moonlight Sonata",
          performer: "Performed by Alicia Keys",
        },
        {
          url: "https://www.youtube.com/embed/n6GEcdh5whk",
          piece: "Henri Herbert - Gettin On Down",
          performer: "Performed by Henri Herbert",
        },
        {
          url: "https://www.youtube.com/embed/Cwkej79U3ek",
          piece: "Vanessa Carlton - A Thousand Miles",
          performer: "This song has a very prominent piano melody throughout",
        },
      ],
      links: ["https://en.wikipedia.org/wiki/Piano"],
    },
  ],
};

const InstrumentReducer = (state = initState, action) => {
  return state;
};

export default InstrumentReducer;
