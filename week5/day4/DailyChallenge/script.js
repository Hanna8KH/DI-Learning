const button = getButton ()
button.addEventListener('click', handleClick)

function getButton () {
    return document.getElementById('lib-button')
}
function handleClick(e) {
    e.preventDefault()
    const noun = document.getElementById('noun').value
    const adjective = document.getElementById('adjective').value
    const person = document.getElementById('person').value
    const verb = document.getElementById('verb').value
    const place = document.getElementById('place').value

    if (noun == '' || adjective == '' || person == '' || verb == '' || place == '') return
    const story = writeStory(noun, adjective, person, verb, place)

    appendStoryToOurPage(story)
} 

function writeStory(noun, adjective, person, verb, place) {
    return `I like to look at ${noun}s, I think that they are ${adjective}. My favorite person is ${person}. We often ${verb} at ${place}`
}

function appendStoryToOurPage(story) {
    const paragraph = document.getElementById('story')
    const span = document.createElement('span')
    span.innerText = story 
    paragraph.append(span)
}
 
// Bonus - 