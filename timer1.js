const input = process.argv.slice(2);
input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0 && input[i] !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, input[i] * 1000);
  }
};