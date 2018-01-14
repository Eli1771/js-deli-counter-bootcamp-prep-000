var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  var place = line.length - 1;
  return `Welcome, ${line[line.length]}. You are number ${place} in line.`;
}