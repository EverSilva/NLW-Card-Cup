let isIgnite = true

const changeCard = e => {
    const card = e.currentTarget
    const backgroundImage = isIgnite  
    ? "url(src/assets/bg-ignite.svg)"
    : "url(src/assets/bg-explorer.svg)"
    isIgnite = !isIgnite
    card.style.backgroundImage = backgroundImage
}