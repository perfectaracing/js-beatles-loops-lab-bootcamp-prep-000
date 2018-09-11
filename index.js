function theBeatlesPlay (musicians, instruments) {
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + ' plays ' + instruments[i]);
}
return allMusicians;
}

function johnLennonFacts() {
  
  var newFacts = [];
  var i = 0;
  while (i < 4) {
    newFacts[i] = facts[i] + "!!!";
    i++;
  }
  return newFacts;
}