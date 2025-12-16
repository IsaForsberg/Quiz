 
 export const javascriptQuestions = [
    {
      id: "js-1",
      question: "Vad returnerar typeof null i JavaScript?",
      options: ["'null'", "'object'", "'undefined'", "'number'"],
      answerIndex: 1
    },
    {
      id: "js-2",
      question: "Vilket påstående är sant om let kontra var?",
      options: [
        "let är funktion-scope, var är block-scope",
        "let är block-scope, var är funktion-scope",
        "Båda är block-scope",
        "Båda är funktion-scope"
      ],
      answerIndex: 1
    },
    {
      id: "js-3",
      question: "Vad gör Array.prototype.map?",
      options: [
        "Filtrerar bort element",
        "Reducerar en array till ett värde",
        "Transformerar varje element och returnerar en ny array",
        "Muterar originalarrayen"
      ],
      answerIndex: 2
    },
    {
      id: "js-4",
      question: "Vad är en Promise i JavaScript?",
      options: [
        "En synkron loop",
        "Ett objekt som representerar ett framtida värde",
        "En funktion som alltid returnerar true",
        "En metod för att manipulera DOM"
      ],
      answerIndex: 1
    },
    {
      id: "js-5",
      question: "Vilken operator skapar en ytlig kopia av ett objekt?",
      options: ["spread (...)", "assign()", "Object.freeze()", "JSON.parse()"],
      answerIndex: 0
    },
    {
      id: "js-6",
      question: "Vad händer när du gör '2' + 2 i JS?",
      options: ["4", "'22'", "NaN", "Fel kastas"],
      answerIndex: 1
    },
    {
      id: "js-7",
      question: "Vilket påstående stämmer om hoisting?",
      options: [
        "let/const och var hoistas lika",
        "Funktiondeklarationer hoistas, men inte funktionuttryck",
        "Hoisting gäller inte i JavaScript",
        "Endast var hoistas, inte funktioner"
      ],
      answerIndex: 1
    },
    {
      id: "js-8",
      question: "Vad gör 'use strict'?",
      options: [
        "Aktiverar strikt läge som förhindrar vissa tysta fel",
        "Gör koden snabbare",
        "Deaktiverar exceptions",
        "Aktiverar TypeScript i JS"
      ],
      answerIndex: 0
    },
    {
      id: "js-9",
      question: "Vilken metod parar ihop flera async operationer och väntar tills alla är klara?",
      options: ["Promise.any", "Promise.all", "Promise.race", "Promise.resolve"],
      answerIndex: 1
    },
    {
      id: "js-10",
      question: "Vad returnerar Array.prototype.filter?",
      options: [
        "Antalet matchande element",
        "En ny array med element som uppfyller villkoret",
        "En bool som anger om minst ett element matchar",
        "Originalarrayen muterad"
      ],
      answerIndex: 1
    },
  // === Grundläggande (10 frågor) ===
  {
    id: "js-b1",
    question: "Vilken symbol används för att kommentera en rad i JS?",
    options: ["//", "#", "<!--", "/*"],
    answerIndex: 0
  },
  {
    id: "js-b2",
    question: "Vilken datatyp returnerar typeof 42?",
    options: ["'string'", "'number'", "'object'", "'boolean'"],
    answerIndex: 1
  },
  {
    id: "js-b3",
    question: "Vilken metod visar ett meddelande i webbläsarens konsol?",
    options: ["console.log()", "alert()", "print()", "document.write()"],
    answerIndex: 0
  },
  {
    id: "js-b4",
    question: "Vilken operator används för strikt jämförelse?",
    options: ["==", "===", "!=", "!=="],
    answerIndex: 1
  },
  {
    id: "js-b5",
    question: "Vilken datatyp är resultatet av Boolean('')?",
    options: ["true", "false", "null", "undefined"],
    answerIndex: 1
  },
  {
    id: "js-b6",
    question: "Vilken metod lägger till ett element sist i en array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answerIndex: 0
  },
  {
    id: "js-b7",
    question: "Vilken metod tar bort sista elementet i en array?",
    options: ["push()", "pop()", "shift()", "splice()"],
    answerIndex: 1
  },
  {
    id: "js-b8",
    question: "Vilken operator används för logiskt OCH?",
    options: ["||", "&&", "!", "&"],
    answerIndex: 1
  },
  {
    id: "js-b9",
    question: "Vilken funktion konverterar en sträng till heltal?",
    options: ["parseInt()", "parseFloat()", "Number()", "String()"],
    answerIndex: 0
  },
  {
    id: "js-b10",
    question: "Vilken metod returnerar längden på en sträng?",
    options: ["size()", "length", "count()", "chars()"],
    answerIndex: 1
  },

  // === Medel (10 frågor) ===
  {
    id: "js-m1",
    question: "Vad returnerar [1,2,3].map(x => x*2)?",
    options: ["[2,4,6]", "[1,2,3]", "[2,3,4]", "Fel"],
    answerIndex: 0
  },
  {
    id: "js-m2",
    question: "Vilken metod används för att kombinera två arrayer?",
    options: ["concat()", "merge()", "join()", "append()"],
    answerIndex: 0
  },
  {
    id: "js-m3",
    question: "Vad returnerar '5' == 5?",
    options: ["true", "false", "undefined", "NaN"],
    answerIndex: 0
  },
  {
    id: "js-m4",
    question: "Vad returnerar '5' === 5?",
    options: ["true", "false", "undefined", "NaN"],
    answerIndex: 1
  },
  {
    id: "js-m5",
    question: "Vilken metod används för att sortera en array?",
    options: ["order()", "sort()", "arrange()", "sequence()"],
    answerIndex: 1
  },
  {
    id: "js-m6",
    question: "Vilken metod används för att filtrera element?",
    options: ["map()", "filter()", "reduce()", "slice()"],
    answerIndex: 1
  },
  {
    id: "js-m7",
    question: "Vad gör JSON.stringify?",
    options: [
      "Konverterar ett objekt till en JSON-sträng",
      "Konverterar en sträng till ett objekt",
      "Validerar JSON",
      "Kör JSON som kod"
    ],
    answerIndex: 0
  },
  {
    id: "js-m8",
    question: "Vad gör JSON.parse?",
    options: [
      "Konverterar en JSON-sträng till ett objekt",
      "Konverterar ett objekt till en sträng",
      "Validerar JSON",
      "Kör JSON som kod"
    ],
    answerIndex: 0
  },
  {
    id: "js-m9",
    question: "Vilken metod används för att ta bort första elementet i en array?",
    options: ["shift()", "pop()", "splice()", "slice()"],
    answerIndex: 0
  },
  {
    id: "js-m10",
    question: "Vad returnerar typeof NaN?",
    options: ["'NaN'", "'number'", "'undefined'", "'object'"],
    answerIndex: 1
  },

  // === Avancerad (10 frågor) ===
  {
    id: "js-a1",
    question: "Vad gör 'this' i en vanlig funktion?",
    options: [
      "Refererar till globalt objekt",
      "Refererar till det anropande objektet",
      "Alltid undefined",
      "Refererar till window.document"
    ],
    answerIndex: 1
  },
  {
    id: "js-a2",
    question: "Vad gör 'this' i en arrow-funktion?",
    options: [
      "Binder till globalt objekt",
      "Binder till det anropande objektet",
      "Är lexikalt bundet till omgivande scope",
      "Alltid null"
    ],
    answerIndex: 2
  },
  {
    id: "js-a3",
    question: "Vad gör call() metoden?",
    options: [
      "Anropar en funktion med ett specifikt 'this'",
      "Skapar en ny funktion",
      "Returnerar en callback",
      "Stoppar exekvering"
    ],
    answerIndex: 0
  },
  {
    id: "js-a4",
    question: "Vad gör apply() jämfört med call()?",
    options: [
      "Tar argument som array",
      "Tar argument som sträng",
      "Tar inga argument",
      "Returnerar alltid undefined"
    ],
    answerIndex: 0
  },
  {
    id: "js-a5",
    question: "Vad gör bind()?",
    options: [
      "Returnerar en ny funktion med bundet 'this'",
      "Kör funktionen direkt",
      "Stoppar funktionen",
      "Returnerar undefined"
    ],
    answerIndex: 0
  },
  {
    id: "js-a6",
    question: "Vad gör closures?",
    options: [
      "Tillåter funktioner att komma ihåg variabler från sitt yttre scope",
      "Stänger av funktioner",
      "Returnerar alltid null",
      "Skapar globala variabler"
    ],
    answerIndex: 0
  },
  {
    id: "js-a7",
    question: "Vad gör async/await?",
    options: [
      "Hantera asynkrona operationer på ett synkront sätt",
      "Skapar nya trådar",
      "Stoppar exekvering",
      "Returnerar alltid en Promise"
    ],
    answerIndex: 0
  },
  {
    id: "js-a8",
    question: "Vad gör try...catch?",
    options: [
      "Hantera fel",
      "Stoppar exekvering",
      "Returnerar null",
      "Ignorerar fel"
    ],
    answerIndex: 0
  },
  {
    id: "js-a9",
    question: "Vad gör setTimeout?",
    options: [
      "Kör en funktion efter en viss tid",
      "Kör en funktion direkt",
      "Stoppar en funktion",
      "Returnerar en Promise"
    ],
    answerIndex: 0
  },
  {
    id: "js-a10",
    question: "Vad gör setInterval?",
    options: [
      "Kör en funktion upprepade gånger med intervall",
      "Kör en funktion en gång",
      "Stoppar en funktion",
      "Returnerar en Promise"
    ],
    answerIndex: 0
  },

  // === Expert (10 frågor) ===

  {
    id: "js-e1",
    question: "Vad är event loopens huvudsyfte i JavaScript?",
    options: [
      "Att hantera asynkrona callbacks och köra dem när call stack är tom",
      "Att köra alla funktioner i ordning",
      "Att skapa nya trådar för varje funktion",
      "Att optimera minnesanvändning"
    ],
    answerIndex: 0
  },
  {
    id: "js-e2",
    question: "Vad är skillnaden mellan microtasks och macrotasks i event loop?",
    options: [
      "Microtasks körs före nästa render, macrotasks körs efter",
      "Macrotasks körs före microtasks",
      "Microtasks är alltid async, macrotasks alltid sync",
      "Ingen skillnad"
    ],
    answerIndex: 0
  },
  {
    id: "js-e3",
    question: "Vad är prototypkedjan i JavaScript?",
    options: [
      "En mekanism för arv där objekt kan ärva egenskaper från andra objekt",
      "En lista över alla funktioner i ett objekt",
      "En kedja av moduler som laddas",
      "En metod för att optimera minne"
    ],
    answerIndex: 0
  },
  {
    id: "js-e4",
    question: "Vad gör Object.create?",
    options: [
      "Skapar ett nytt objekt med en given prototyp",
      "Skapar en kopia av ett objekt",
      "Skapar en klass",
      "Returnerar en Promise"
    ],
    answerIndex: 0
  },
  {
    id: "js-e5",
    question: "Vad är skillnaden mellan var, let och const?",
    options: [
      "var är funktion-scope, let/const är block-scope",
      "var är block-scope, let/const är funktion-scope",
      "Alla är block-scope",
      "Alla är funktion-scope"
    ],
    answerIndex: 0
  },
  {
    id: "js-e6",
    question: "Vad är en generatorfunktion?",
    options: [
      "En funktion som kan pausas och återupptas med yield",
      "En funktion som alltid returnerar en Promise",
      "En funktion som skapar nya objekt",
      "En funktion som körs i bakgrunden"
    ],
    answerIndex: 0
  },
  {
    id: "js-e7",
    question: "Vad är skillnaden mellan import och require?",
    options: [
      "import är ES6-moduler, require är CommonJS",
      "import är synkron, require är asynkron",
      "require fungerar bara i webbläsare",
      "import fungerar bara i Node.js"
    ],
    answerIndex: 0
  },
  {
    id: "js-e8",
    question: "Vad är memory leak i JavaScript?",
    options: [
      "När objekt inte frigörs från minnet på grund av referenser",
      "När variabler är för stora",
      "När koden körs för långsamt",
      "När event loop stannar"
    ],
    answerIndex: 0
  },
  {
    id: "js-e9",
    question: "Vad är currying i JavaScript?",
    options: [
      "Att omvandla en funktion med flera argument till en sekvens av funktioner",
      "Att köra funktioner parallellt",
      "Att optimera funktioner för prestanda",
      "Att skapa closures automatiskt"
    ],
    answerIndex: 0
  },
  {
    id: "js-e10",
    question: "Vad är skillnaden mellan shallow copy och deep copy?",
    options: [
      "Shallow copy kopierar bara första nivån, deep copy kopierar alla nivåer",
      "Deep copy kopierar bara första nivån, shallow copy kopierar alla nivåer",
      "Ingen skillnad",
      "Shallow copy fungerar bara med arrayer"
    ],
    answerIndex: 0
  }

];