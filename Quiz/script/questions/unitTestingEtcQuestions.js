export const unitTestingEtcQuestions = [
    {
      id: "test-1",
      question: "Vad betyder TDD?",
      options: [
        "Technical Driven Design",
        "Test Driven Development",
        "Team Directed Deployment",
        "Template Data Definition"
      ],
      answerIndex: 1
    },
    {
      id: "test-2",
      question: "Vilken är den vanligaste cykeln i TDD?",
      options: ["Write‑Code, Deploy, Refactor", "Red, Green, Refactor", "Plan, Code, Test", "Build, Measure, Learn"],
      answerIndex: 1
    },
    {
      id: "test-3",
      question: "Vad gör jest.mock?",
      options: [
        "Skapar en snapshot",
        "Skapar en mock/fejk för modul eller funktion",
        "Kör tester parallellt",
        "Återställer timers"
      ],
      answerIndex: 1
    },
    {
      id: "test-4",
      question: "Vilket påstående stämmer om unit‑tester?",
      options: [
        "Testar hela systemets integration",
        "Testar små isolerade bitar av koden",
        "Ska alltid bero på nätverk",
        "Ska alltid skrivas sist"
      ],
      answerIndex: 1
    },
    {
      id: "test-5",
      question: "Vad är snapshot‑tester i Jest?",
      options: [
        "Prestandatester",
        "Visuella diffar av renderat output",
        "Säkerhetstester",
        "Mutations‑tester"
      ],
      answerIndex: 1
    },
    {
      id: "test-6",
      question: "Vilken Jest‑funktion asserterar ett enkelt likhetstest?",
      options: ["expect(value).toBe(x)", "expect(value).toEqual(x)", "assert.equal(value, x)", "check(value) === x"],
      answerIndex: 0
    },
    {
      id: "test-7",
      question: "Vad gör beforeEach i Jest?",
      options: [
        "Kör efter varje test",
        "Kör före varje test för setup",
        "Skapar en global mock",
        "Rensar snapshot"
      ],
      answerIndex: 1
    },
    {
      id: "test-8",
      question: "Vad bör undvikas för snabba unit‑tester?",
      options: [
        "Nätverksanrop och filsystem",
        "Mockar",
        "Isolerade funktioner",
        "In‑memory data"
      ],
      answerIndex: 0
    },
    {
      id: "test-9",
      question: "Vad är syftet med coverage‑rapporter?",
      options: [
        "Mäta hur mycket kod som körs av tester",
        "Visa antalet buggar",
        "Generera dokumentation",
        "Optimera bundling"
      ],
      answerIndex: 0
    },
    {
      id: "test-10",
      question: "Vilken flagga genererar coverage i Jest CLI?",
      options: ["--runCoverage", "--coverage", "--withCoverage", "--cover"],
      answerIndex: 1
    }
  ];