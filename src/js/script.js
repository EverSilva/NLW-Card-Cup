let isIgnite = true

const changeCard = e => {
    const card = e.currentTarget
    const cardBackgroundImage = isIgnite  
    ? "url(src/assets/bg-ignite.svg)"
    : "url(src/assets/bg-explorer.svg)"
    const bodyBackground = isIgnite ?
    'linear-gradient(150deg, #185B34, #000000)' :
    'linear-gradient(150deg, #373D98, #000000)'

    isIgnite = !isIgnite
    changeBackground(card, cardBackgroundImage)
    changeBodyBackground(bodyBackground)
}

const changeBackground = (element, backgroundImage) => 
    element.style.backgroundImage = backgroundImage

const changeBodyBackground = background => 
    document.body.style.backgroundImage = background