const args = process.argv.slice(2).map((el) => Number(el));

args.forEach((arg) => {
  if (arg >= 0 && arg != NaN) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, arg * 1000);
  }
});
