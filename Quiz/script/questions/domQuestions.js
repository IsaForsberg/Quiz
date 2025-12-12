export const domQuestions =  [
    {
      id: "dom-1",
      question: "Vilken metod hämtar första elementet som matchar en CSS-selektor?",
      options: ["getElementById", "querySelector", "querySelectorAll", "getElementsByClassName"],
      answerIndex: 1
    },
    {
      id: "dom-2",
      question: "Hur lägger du till en eventlyssnare för klick?",
      options: [
        "element.on('click', fn)",
        "element.addEventListener('click', fn)",
        "element.click(fn)",
        "window.event('click', fn)"
      ],
      answerIndex: 1
    },
    {
      id: "dom-3",
      question: "Vilken egenskap ändrar textinnehåll säkert (utan HTML-parsing)?",
      options: ["innerHTML", "textContent", "outerHTML", "value"],
      answerIndex: 1
    },
    {
      id: "dom-4",
      question: "Hur skapar du ett nytt element i DOM?",
      options: [
        "document.createElement('div')",
        "new Element('div')",
        "document.make('div')",
        "window.create('div')"
      ],
      answerIndex: 0
    },
    {
      id: "dom-5",
      question: "Vad gör event.preventDefault()?",
      options: [
        "Stoppar event-bubbling",
        "Stoppar standardbeteende (t.ex. form-submission)",
        "Stoppar alla events",
        "Tar bort elementet"
      ],
      answerIndex: 1
    },
    {
      id: "dom-6",
      question: "Vad är skillnaden på querySelectorAll och getElementsByClassName?",
      options: [
        "querySelectorAll returnerar NodeList, getElementsByClassName Live HTMLCollection",
        "Ingen skillnad",
        "Båda returnerar Live collections",
        "Båda returnerar arrays"
      ],
      answerIndex: 0
    },
    {
      id: "dom-7",
      question: "Vilken metod lägger till ett barn-element sist?",
      options: ["appendChild", "prepend", "insertBefore", "replaceChild"],
      answerIndex: 0
    },
    {
      id: "dom-8",
      question: "Vilken egenskap läser/ändrar attribut?",
      options: ["dataset", "attributes", "style", "classList"],
      answerIndex: 1
    },
    {
      id: "dom-9",
      question: "Hur togglar du en CSS-klass?",
      options: ["element.classList.toggle('klass')", "element.toggleClass('klass')", "element.style.toggle", "element.className = ''"],
      answerIndex: 0
    },
    {
      id: "dom-10",
      question: "Vad är event delegation?",
      options: [
        "Att lyssna på events högre upp i DOM och avgöra mål med event.target",
        "Att skapa många listeners på varje barn",
        "Att stoppa alla events",
        "Att använda inline-onsubmit"
      ],
      answerIndex: 0
    }
  ];