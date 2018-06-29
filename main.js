var customName = document.getElementById('name');
var btn = document.getElementById('btn');
var story = document.querySelector('.story p');

//generate random value from array
function randomValueFromArray(array){
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

//Story Structure
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//On Button Click Function
btn.onclick = function(){
  var newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !==''){
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById('uk').checked){
    var weight = Math.round(300 * 0.0714286) + 'stone';
    var temperature = Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 farenheit',temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
