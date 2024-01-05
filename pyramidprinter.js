const size = prompt(`Enter a size:`);
for (let i = 1; i <= size; i++) {
  const line = "*".repeat(i);
  console.log(line);
}

for (let i = size - 1; i > 0; i--) {
  const line = "*".repeat(i);
  console.log(line);
}
