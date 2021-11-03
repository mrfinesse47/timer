const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
  if (key === "b") {
    // process.stdout.write("b pressed");
    process.stdout.write("\x07");
  }
  if (key.match(/[1-9]/g)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);

    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
  // process.stdout.write(".");
});
