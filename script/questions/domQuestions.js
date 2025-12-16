export const domQuestions =  [
    {
      id: "domQ-1",
      question: "Vilken metod hämtar första elementet som matchar en CSS-selektor?",
      options: ["getElementById", "querySelector", "querySelectorAll", "getElementsByClassName"],
      answerIndex: 1
    },
    {
      id: "domQ-2",
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
      id: "domQ-3",
      question: "Vilken egenskap ändrar textinnehåll säkert (utan HTML-parsing)?",
      options: ["innerHTML", "textContent", "outerHTML", "value"],
      answerIndex: 1
    },
    {
      id: "domQ-4",
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
      id: "domQ-5",
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
      id: "domQ-6",
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
      id: "domQ-7",
      question: "Vilken metod lägger till ett barn-element sist?",
      options: ["appendChild", "prepend", "insertBefore", "replaceChild"],
      answerIndex: 0
    },
    {
      id: "domQ-8",
      question: "Vilken egenskap läser/ändrar attribut?",
      options: ["dataset", "attributes", "style", "classList"],
      answerIndex: 1
    },
    {
      id: "domQ-9",
      question: "Hur togglar du en CSS-klass?",
      options: ["element.classList.toggle('klass')", "element.toggleClass('klass')", "element.style.toggle", "element.className = ''"],
      answerIndex: 0
    },
    {
      id: "domQ-10",
      question: "Vad är event delegation?",
      options: [
        "Att lyssna på events högre upp i DOM och avgöra mål med event.target",
        "Att skapa många listeners på varje barn",
        "Att stoppa alla events",
        "Att använda inline-onsubmit"
      ],
      answerIndex: 0
    },
    // DOM-frågor

// Lätta (dom-1 till dom-10)
{
  id: "dom-1",
  question: "Vad står DOM för?",
  options: ["Document Object Model", "Data Output Method", "Dynamic Object Mapping", "Document Order Map"],
  answerIndex: 0
},
{
  id: "dom-2",
  question: "Vilken metod hämtar ett element med ett specifikt id?",
  options: ["getElementById", "querySelector", "getElementsByClassName", "getElementsByTagName"],
  answerIndex: 0
},
{
  id: "dom-3",
  question: "Vilken metod hämtar första elementet som matchar en CSS-selektor?",
  options: ["getElementById", "querySelector", "querySelectorAll", "getElementsByClassName"],
  answerIndex: 1
},
{
  id: "dom-4",
  question: "Vilken metod används för att skapa ett nytt HTML-element?",
  options: ["createElement", "appendChild", "innerHTML", "setAttribute"],
  answerIndex: 0
},
{
  id: "dom-5",
  question: "Vilken metod används för att lägga till en nod i DOM?",
  options: ["appendChild", "removeChild", "replaceChild", "insertBefore"],
  answerIndex: 0
},
{
  id: "dom-6",
  question: "Vilken metod tar bort en nod från DOM?",
  options: ["removeChild", "deleteNode", "clearElement", "removeElement"],
  answerIndex: 0
},
{
  id: "dom-7",
  question: "Vilken egenskap används för att ändra textinnehållet i ett element?",
  options: ["innerHTML", "textContent", "value", "innerText"],
  answerIndex: 1
},
{
  id: "dom-8",
  question: "Vilken metod hämtar alla element som matchar en CSS-selektor?",
  options: ["querySelector", "querySelectorAll", "getElementsByClassName", "getElementsByTagName"],
  answerIndex: 1
},
{
  id: "dom-9",
  question: "Vilken metod används för att lägga till en CSS-klass på ett element?",
  options: ["classList.add", "setAttribute", "addClass", "style.add"],
  answerIndex: 0
},
{
  id: "dom-10",
  question: "Vilken metod ersätter en nod i DOM?",
  options: ["replaceChild", "swapNode", "updateElement", "replaceElement"],
  answerIndex: 0
},

// Medel (dom-11 till dom-20)
{
  id: "dom-11",
  question: "Vilken metod returnerar en HTMLCollection av element med en viss tagg?",
  options: ["getElementsByTagName", "querySelectorAll", "getElementById", "getElementsByClassName"],
  answerIndex: 0
},
{
  id: "dom-12",
  question: "Vilken metod returnerar en HTMLCollection av element med en viss klass?",
  options: ["getElementsByClassName", "querySelector", "getElementById", "getElementsByTagName"],
  answerIndex: 0
},
{
  id: "dom-13",
  question: "Vilken egenskap används för att ändra attribut på ett element?",
  options: ["setAttribute", "innerHTML", "classList.add", "style"],
  answerIndex: 0
},
{
  id: "dom-14",
  question: "Vilken metod används för att lägga till en nod före en annan nod?",
  options: ["insertBefore", "appendChild", "replaceChild", "prepend"],
  answerIndex: 0
},
{
  id: "dom-15",
  question: "Vilken egenskap används för att ändra CSS direkt på ett element?",
  options: ["style", "classList", "setAttribute", "innerHTML"],
  answerIndex: 0
},
{
  id: "dom-16",
  question: "Vilken metod används för att klona en nod?",
  options: ["cloneNode", "copyElement", "duplicateNode", "replicate"],
  answerIndex: 0
},
{
  id: "dom-17",
  question: "Vilken metod returnerar en NodeList som kan loopas med forEach?",
  options: ["querySelectorAll", "getElementsByClassName", "getElementsByTagName", "getElementById"],
  answerIndex: 0
},
{
  id: "dom-18",
  question: "Vilken metod används för att kontrollera om ett element har en viss klass?",
  options: ["classList.contains", "classList.has", "hasClass", "containsClass"],
  answerIndex: 0
},
{
  id: "dom-19",
  question: "Vilken metod används för att ta bort en CSS-klass från ett element?",
  options: ["classList.remove", "removeClass", "setAttribute", "style.remove"],
  answerIndex: 0
},
{
  id: "dom-20",
  question: "Vilken metod används för att toggla en CSS-klass på ett element?",
  options: ["classList.toggle", "toggleClass", "setAttribute", "style.toggle"],
  answerIndex: 0
},

// Svåra (dom-21 till dom-30)
{
  id: "dom-21",
  question: "Vilken metod används för att lyssna på en händelse i DOM?",
  options: ["addEventListener", "attachEvent", "onEvent", "listenEvent"],
  answerIndex: 0
},
{
  id: "dom-22",
  question: "Vilken metod används för att ta bort en händelselyssnare?",
  options: ["removeEventListener", "detachEvent", "stopEvent", "clearListener"],
  answerIndex: 0
},
{
  id: "dom-23",
  question: "Vilken egenskap returnerar föräldern till en nod?",
  options: ["parentNode", "parentElement", "rootNode", "ancestorNode"],
  answerIndex: 0
},
{
  id: "dom-24",
  question: "Vilken egenskap returnerar alla barn till en nod?",
  options: ["childNodes", "children", "subNodes", "nodeList"],
  answerIndex: 0
},
{
  id: "dom-25",
  question: "Vilken metod används för att stoppa event-bubbling?",
  options: ["stopPropagation", "preventDefault", "stopImmediatePropagation", "cancelBubble"],
  answerIndex: 0
},
{
  id: "dom-26",
  question: "Vilken metod används för att förhindra standardbeteendet för en händelse?",
  options: ["preventDefault", "stopPropagation", "cancelEvent", "blockDefault"],
  answerIndex: 0
},
{
  id: "dom-27",
  question: "Vilken egenskap returnerar det första barnet till en nod?",
  options: ["firstChild", "firstElement", "childNodes[0]", "headNode"],
  answerIndex: 0
},
{
  id: "dom-28",
  question: "Vilken egenskap returnerar det sista barnet till en nod?",
  options: ["lastChild", "lastElement", "childNodes[end]", "tailNode"],
  answerIndex: 0
},
{
  id: "dom-29",
  question: "Vilken metod används för att kontrollera om ett element innehåller en viss nod?",
  options: ["contains", "hasChild", "includesNode", "checkNode"],
  answerIndex: 0
},
{
  id: "dom-30",
  question: "Vilken egenskap returnerar typen av en nod?",
  options: ["nodeType", "nodeName", "elementType", "type"],
  answerIndex: 0
}

  
  ];