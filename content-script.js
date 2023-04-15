function jumpToRecipe() {
  if (document.location.hash !== '') return;
  const jumpToRecipeRegex = /jump to recipe/i;
  for (let a of document.getElementsByTagName('a')) {
    if (jumpToRecipeRegex.test(a.textContent) && a.getAttribute('href')?.[0] === '#') {
      document.location.hash = a.getAttribute('href').slice(1);
    }
  }
}

jumpToRecipe();
