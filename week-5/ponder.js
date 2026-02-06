
const spans = document.querySelectorAll("article.movie  p span")
allSpan.forEach((span)=>{
    const stars = span.innerText.length
    span.setAttributes("aria-label", `${stars} out of 5 star`);
})



