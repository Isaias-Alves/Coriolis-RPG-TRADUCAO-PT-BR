Hooks.once("init", () => {
  if (game.babele) {
    game.babele.register({
      module: "coriolis-rpg-traducao-pt-br",
      lang: "pt-BR",
      dir: "compendium",
    });
  }
});
