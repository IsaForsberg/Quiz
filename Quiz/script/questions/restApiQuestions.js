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
    }
  ];