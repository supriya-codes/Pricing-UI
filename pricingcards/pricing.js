function selectPlan(card, plan) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(c => {
    c.classList.remove("selected");
  });

  card.classList.add("selected");

  alert(plan + " plan selected!");
}