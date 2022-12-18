'use strict'

function setProperty({ value }, prop){
    var elTable = document.querySelector('.grid-table')
    
    elTable.style.setProperty(prop, value + 'deg')
}
function resetProperties(){
    var elTable = document.querySelector('.grid-table')
    var elInputs = document.querySelectorAll('input')

    elTable.style.setProperty('--rotate-x', 0)
    elTable.style.setProperty('--rotate-y', 0)
    elTable.style.setProperty('--rotate-z', 0)
    elTable.style.setProperty('--skew-x', 0)
    elTable.style.setProperty('--skew-y', 0)

    elInputs.forEach(elInput => elInput.value = 0)
}