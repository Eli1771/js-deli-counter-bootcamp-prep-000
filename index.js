var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var next = line[0];
    line.shift(0);
    return `Currently serving ${next}.`;
  }
}

function currentLine(line) {
  if (line > 0) {
    var out = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      out = out + (i + 1) + '. ' + line[i] + ', ';
    }
      return line;
    } else {
      return 'The line is currently empty.';
    }
}