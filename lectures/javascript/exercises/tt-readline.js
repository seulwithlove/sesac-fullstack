const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });
rl.on("line", (answer) => {
  console.log("line.answer>>", answer);
  if (answer === "bye") rl.close();
}).on("close", () => {
  process.exit();
});

function* add() {
  const a = yield "첫 번째 수는?";
  const b = yield "두 번째 수는?";
  return a + b;
}
