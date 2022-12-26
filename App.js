import MCQ from "./MCQ";

function App() {
  const MCQs = [
    {
      statement: "What is your name ?",
      options: [
        { option: "Ali", nature: "false" },
        { option: "Muhammad", nature: "true" },
        { option: "Bilal", nature: "false" },
        { option: "None of these", nature: "false" },
      ],
    },
    {
      statement: "What is your age?",
      options: [
        { option: "10", nature: "false" },
        { option: "50", nature: "false" },
        { option: "17", nature: "true" },
        { option: "None of these", nature: "false" },
      ],
    },
    {
      statement: "What is your kalay ?",
      options: [
        { option: "Bamkhel", nature: "false" },
        { option: "Zaida", nature: "true" },
        { option: "Dudher", nature: "false" },
        { option: "None of these", nature: "false" },
      ],
    },
    {
      statement: "What is your company ?",
      options: [
        { option: "Facebook", nature: "false" },
        { option: "Doerz", nature: "true" },
        { option: "Amazon", nature: "false" },
        { option: "All of these", nature: "false" },
      ],
    },
    {
      statement: "What is the Molecular Mass of Water ?",
      options: [
        { option: "20g", nature: "false" },
        { option: "18g", nature: "true" },
        { option: "34g", nature: "false" },
        { option: "None of these", nature: "false" },
      ],
    },
  ];
  return (
    <>
      <MCQ MCQs={MCQs}></MCQ>
    </>
  );
}

export default App;
