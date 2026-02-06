const spans = document.querySelectorAll("article.movie p span");

spans.forEach((span) => {
  const stars = span.innerText.length;
  span.setAttribute("aria-label", `${stars} out of 5 stars`);
});
