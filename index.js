function theBeatlesPlay (musicians, instruments) {
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + ' plays ' + instruments[i]);
}
return allMusicians;
}
var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
function johnLennonFacts(facts) {
  
  var newFacts = [];
  var i = 0;
  while (i < 4) {
    newFacts[i] = facts[i] + "!!!";
    i++;
  }
  return newFacts;
}
