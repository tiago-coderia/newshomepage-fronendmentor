var informacoes = [
  {
    type: "infos",
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    type: "infos",
    title: "The Downstypees of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    type: "infos",
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

var informacoesfooter = [
  {
    id: "01",
    number: "01",
    imgsrc: "image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: "02",
    number: "02",
    imgsrc: "image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
  },
  {
    id: "03",
    number: "03",
    imgsrc: "image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
  },
];

informacoes.forEach(function (item) {
  document.querySelector(".sidebar--infos").insertAdjacentHTML(
    "beforeend",
    `<div class="infos">
          <div class="infos--titulo">
            <a href="#"><h3>${item.title}</h3></a>
          </div>
          <div class="infos--texto">
            <p>${item.text}</p>
          </div>
        </div>`
  );
});

informacoesfooter.forEach(function (item) {
  document.querySelector(".grid--footer").insertAdjacentHTML(
    "beforeend",
    ` <div class="footerbar">
    <img src="/images/${item.imgsrc}" alt="" width="100" height="130">
    <div class="footerbar--data">
        <div class="footerbar--number">
           ${item.number}
        </div>
        <div class="footerbar--title">
            <a href="#"><h3>${item.title}</h3></a>
        </div>
        <div class="footerbar--text">
            <p>${item.text}</p>
        </div>
    </div>

</div>
        `
  );
});
