export const restApiQuestions = [
    {
      id: "rest-1",
      question: "Vilken HTTP‑metod används normalt för att hämta resurser?",
      options: ["POST", "GET", "PUT", "DELETE"],
      answerIndex: 1
    },
    {
      id: "rest-2",
      question: "Vad betyder statuskod 201?",
      options: ["OK", "Created", "No Content", "Bad Request"],
      answerIndex: 1
    },
    {
      id: "rest-3",
      question: "Vilket format är vanligast för REST‑svar?",
      options: ["XML", "YAML", "JSON", "Protobuf"],
      answerIndex: 2
    },
    {
      id: "rest-4",
      question: "Var ska en Bearer‑token normalt skickas?",
      options: ["I body", "I querystring", "I Authorization‑header", "I Cookie 'session'"],
      answerIndex: 2
    },
    {
      id: "rest-5",
      question: "Vad betyder idempotent operation?",
      options: [
        "Ger olika resultat varje gång",
        "Kan köras flera gånger med samma resultat",
        "Skapar en resurs varje gång",
        "Beror på serverns last"
      ],
      answerIndex: 1
    },
    {
      id: "rest-6",
      question: "Vilken HTTP‑metod är typiskt idempotent?",
      options: ["POST", "PATCH", "PUT", "GET"],
      answerIndex: 2
    },
    {
      id: "rest-7",
      question: "Vad betyder statuskod 404?",
      options: ["Unauthorized", "Forbidden", "Not Found", "Conflict"],
      answerIndex: 2
    },
    {
      id: "rest-8",
      question: "Vilken header anger mediatyp (t.ex. JSON) i svaret?",
      options: ["Accept", "Content-Type", "Authorization", "Cache-Control"],
      answerIndex: 1
    },
    {
      id: "rest-9",
      question: "Vilken statuskod betyder 'No Content'?",
      options: ["200", "201", "204", "304"],
      answerIndex: 2
    },
    {
      id: "rest-10",
      question: "Vad är bästa praxis för resurs‑URL:er?",
      options: [
        "Använd verb i URL:er",
        "Använd substantiv och plural, t.ex. /users",
        "Använd snake_case alltid",
        "Använd filändelser, t.ex. .json"
      ],
      answerIndex: 1
    },

// Lätta (rest-11 till rest-20)
{
  id: "rest-11",
  question: "Vilken HTTP-metod används för att hämta data från ett REST API?",
  options: ["POST", "GET", "PUT", "DELETE"],
  answerIndex: 1
},
{
  id: "rest-12",
  question: "Vilken HTTP-metod används för att skapa en ny resurs?",
  options: ["GET", "POST", "PUT", "PATCH"],
  answerIndex: 1
},
{
  id: "rest-13",
  question: "Vilken statuskod betyder 'OK'?",
  options: ["200", "404", "500", "403"],
  answerIndex: 0
},
{
  id: "rest-14",
  question: "Vilken statuskod betyder 'Not Found'?",
  options: ["200", "404", "403", "500"],
  answerIndex: 1
},
{
  id: "rest-15",
  question: "Vilken statuskod betyder 'Created'?",
  options: ["201", "202", "204", "200"],
  answerIndex: 0
},
{
  id: "rest-16",
  question: "Vilken HTTP-metod används för att ta bort en resurs?",
  options: ["DELETE", "REMOVE", "PUT", "POST"],
  answerIndex: 0
},
{
  id: "rest-17",
  question: "Vilken statuskod betyder 'Unauthorized'?",
  options: ["401", "403", "404", "500"],
  answerIndex: 0
},
{
  id: "rest-18",
  question: "Vilken statuskod betyder 'Forbidden'?",
  options: ["403", "401", "404", "500"],
  answerIndex: 0
},
{
  id: "rest-19",
  question: "Vilken statuskod betyder 'Internal Server Error'?",
  options: ["500", "404", "200", "403"],
  answerIndex: 0
},
{
  id: "rest-20",
  question: "Vilken HTTP-metod används för att uppdatera en resurs helt?",
  options: ["PUT", "PATCH", "POST", "GET"],
  answerIndex: 0
},

// Medel (rest-21 till rest-30)
{
  id: "rest-21",
  question: "Vilken HTTP-metod används för att uppdatera en resurs delvis?",
  options: ["PATCH", "PUT", "POST", "UPDATE"],
  answerIndex: 0
},
{
  id: "rest-22",
  question: "Vilken statuskod betyder 'No Content'?",
  options: ["204", "200", "201", "202"],
  answerIndex: 0
},
{
  id: "rest-23",
  question: "Vilken statuskod betyder 'Accepted'?",
  options: ["202", "200", "201", "204"],
  answerIndex: 0
},
{
  id: "rest-24",
  question: "Vilken statuskod betyder 'Bad Request'?",
  options: ["400", "401", "403", "404"],
  answerIndex: 0
},
{
  id: "rest-25",
  question: "Vilken statuskod betyder 'Conflict'?",
  options: ["409", "400", "403", "500"],
  answerIndex: 0
},
{
  id: "rest-26",
  question: "Vilken statuskod betyder 'Too Many Requests'?",
  options: ["429", "404", "500", "403"],
  answerIndex: 0
},
{
  id: "rest-27",
  question: "Vilken statuskod betyder 'Service Unavailable'?",
  options: ["503", "500", "404", "403"],
  answerIndex: 0
},
{
  id: "rest-28",
  question: "Vilken statuskod betyder 'Gateway Timeout'?",
  options: ["504", "502", "500", "408"],
  answerIndex: 0
},
{
  id: "rest-29",
  question: "Vilken statuskod betyder 'Bad Gateway'?",
  options: ["502", "504", "500", "403"],
  answerIndex: 0
},
{
  id: "rest-30",
  question: "Vilken statuskod betyder 'Request Timeout'?",
  options: ["408", "504", "500", "400"],
  answerIndex: 0
},

// Svåra (rest-31 till rest-41)
{
  id: "rest-31",
  question: "Vilken statuskod betyder 'Unsupported Media Type'?",
  options: ["415", "406", "400", "500"],
  answerIndex: 0
},
{
  id: "rest-32",
  question: "Vilken statuskod betyder 'Not Acceptable'?",
  options: ["406", "415", "400", "500"],
  answerIndex: 0
},
{
  id: "rest-33",
  question: "Vilken statuskod betyder 'Precondition Failed'?",
  options: ["412", "428", "400", "500"],
  answerIndex: 0
},
{
  id: "rest-34",
  question: "Vilken statuskod betyder 'Expectation Failed'?",
  options: ["417", "412", "428", "400"],
  answerIndex: 0
},
{
  id: "rest-35",
  question: "Vilken statuskod betyder 'Length Required'?",
  options: ["411", "412", "413", "414"],
  answerIndex: 0
},
{
  id: "rest-36",
  question: "Vilken statuskod betyder 'Payload Too Large'?",
  options: ["413", "414", "415", "416"],
  answerIndex: 0
},
{
  id: "rest-37",
  question: "Vilken statuskod betyder 'URI Too Long'?",
  options: ["414", "413", "415", "416"],
  answerIndex: 0
},
{
  id: "rest-38",
  question: "Vilken statuskod betyder 'Range Not Satisfiable'?",
  options: ["416", "417", "412", "400"],
  answerIndex: 0
},
{
  id: "rest-39",
  question: "Vilken statuskod betyder 'Expectation Failed'?",
  options: ["417", "412", "428", "400"],
  answerIndex: 0
},
{
  id: "rest-40",
  question: "Vilken statuskod betyder 'Precondition Required'?",
  options: ["428", "412", "417", "400"],
  answerIndex: 0
},
{
  id: "rest-41",
  question: "Vilken statuskod betyder 'Too Early'?",
  options: ["425", "429", "503", "400"],
  answerIndex: 0
}
 ];
