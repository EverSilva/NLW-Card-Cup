let isIgnite = true

const changeCard = e => {
    const card = e.currentTarget
    const backgroundImage = isIgnite  
    ? "url(src/assets/bg-ignite.svg)"
    : "url(src/assets/bg-explorer.svg)"
    isIgnite = !isIgnite
    changeBackground(card, backgroundImage)
}

const changeBackground = (element, backgroundImage) => 
    element.style.backgroundImage = backgroundImage