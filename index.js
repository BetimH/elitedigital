function openfunction(){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").style.width = "230px";
    document.getElementById("sidebar").style.padding = "20px";
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
    document.getElementById("content").style.backgroundColor = "gray";
    document.getElementById("content").style.transition = "background-color 0.5s ease-in-out";
    document.getElementById("sidebar").style.transition = "width 0.5s ease-in-out, padding 0.5s ease-in-out";
    document.getElementById("sidebar").style.overflow = "hidden";
    document.getElementById("navbar").style.height = "3.4rem";
    document.getElementById("navbar").style.transition = "height 0.5s ease-in-out";
    document.getElementById("navbar").style.overflow = "hidden";
    document.getElementById("logo").style.display = "none";
    document.getElementById("links-header").style.display = "none";
    document.getElementById("links-header1").style.display = "none";
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}

}
function closefunction(){
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("sidebar").style.padding = "0px";
    document.getElementById("open-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
    document.getElementById("content").style.backgroundColor = "#f4f4f4";
    document.getElementById("header").style.transition = " 0.5s ease-in-out";
    document.getElementById("logo").style.display = "block";
    document.getElementById("navbar").style.height = "15vh";
    document.getElementById("navbar").style.transition = "height 0.5s ease-in-out";
    document.getElementById("links-header").style.display = "block";
    document.getElementById("links-header1").style.display = "block";
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;

}


}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}


function goBack() {
    window.history.back();
}



const translations = {
    "en": {
      thankyou: "Thank You!",
      poweredby: "powered by: Betim Hasani",
      pizza: "Pizza",
      skara: "Grill",
      pije: "Drinks",
      dessert: "Dessert",
      sallata: "Salad",
//pizza
      tono: "Tuna",
      proshuto: "Proshuto",
      fungi: "Fungi",
      margarita: "Margarita",
      calabrese: "Calabrese",
      toscana: "Toscana",
      vesuvio: "Vesuvio",
      roma: "Roma",
      article0: "(Tomato, cheese, mushrooms, sausage, dried meat, olives, egg)",
      article1: "(Tomato, cheese)",
      article2: "(Tomato, cheese, mushrooms)",
      article3: "(Tomato, cheese, tuna, onion)",
      article4: "(Tomato, cheese, prosciutto)",
      article5: "(Tomato, cheese, salami)",
      article6: "(Tomato, cheese, mushrooms, sausage, dried meat)",
      article7: "(Tomato, cheese, dried meat, sausage)",
      article8: "(Tomato, cheese, mushrooms, sausage)",
      article9: "(Tomato, cheese, mushrooms, dried meat)",
      ekstra: "Extras",
      majonez: "Mayonnaise",
      ullinj: "Olives",
      veze: "Egg",
      djath: "Cheese",
      tunashtese: "Extra Tuna",
      proshutoshtese: "Extra Prosciutto",
      soxhukshtese: "Extra Sausage",
      kepurdhashtese: "Extra Mushrooms",
    //grill
      shope: "Shop",
      jeshile : "Green",
      greke: "Greek",
      turshimix: "Mixed Pickles",
      biftek: "Steak",
      ramstek: "Rib Steak",
      mishvici: "Meatballs",
      stekpule: "Grilled Chicken",
      gishtapule: "Chicken Fingers",
      hamburger: "Hamburger",
      cheeseburger: "Cheeseburger",
      qebap12: "Kebab 1/2",
      qebap: "Kebab",
      qebap15: "Kebab 15",
      pleskavice: "Pljeskavica",
      pleskaviceSharri: "Pljeskavica Sharri",
      razhnic: "Razhnic",
      racionPomfrit: "Portion of Fries",
      sos: "Sauce",
      ajvar: "Ajvar",
      pavllak: "cream",
      fogace: "pizza bread",
      lepinje: "Lepinje",
      rights: " 2023 Elitte. All rights reserved.",
      //drinks
      pije: "Drinks",
      pijetengrohta: "Hot Drinks",
      espreso: "Espresso",
      makiato: "Macchiato",
      cajinxehte: "Hot Tea",
      qumesht: "Milk",
      kakao: "Cocoa",
      kafeebardhe: "White Coffee",
      pijejoalkoolike: "Non-alcoholic Drinks",
      cocacola: "Coca-Cola",
      fantaorange: "Fanta Orange",
      fantashokata: "Fanta Shokata",
      schweppes: "Schweppes",
      schweppestonic: "Schweppes Tonic",
      sprite: "Sprite",
      cockta: "Cockta",
      ujmegaz: "Sparkling Water",
      ujpagaz: "Mineral Water",
      lengjepemesh: "Fruit Drinks",
      pjeshke: "Peach 0.2l",
      multivitamin: "Multi Vitamin 0.2l",
      vishnje: "Cherry 0.2l",
      molle: "Apple 0.2l",
      juice: "Juice 0.2l",
      icetea: "Ice Tea 0.2l",
      limonade: "Lemonade",
      boronice: "Blueberry",
      //dessert
      dessert: "Dessert",
      trilece: "Trileçe",
      embelsireshtepie: "Homemade Dessert",
      kremmekadaif: "Cream with Kadaif",
      krembrule: "Creme Brulee",


    },
    "mk": {
      thankyou: "Благодарам!",
        pizza: "Пица",
      skara: "Скара",
      pije: "Пијалоци",
      dessert: "Десерт",
      rights: " 2023 Елитте. Сите права се задржани.",
      //pizza
      tono: "Туна",
      proshuto: "Прошуто",
      fungi: "Габи",
      margarita: "Маргарита",
      calabrese: "Калабрезе",
      toscana: "Тоскана",
      vesuvio: "Везувио",
      roma: "Рома",
      article0: "(Домат, сирење, печурки, суво месо, маслинки, јајце)",
      article1: "(Домат, сирење)",
      article2: "(Домат, сирење, печурки)",
      article3: "(Домат, сирење, туна, кромид)",
      article4: "(Домат, сирење, прошуто)",
      article5: "(Домат, сирење, колбас)",
      article6: "(Домат, сирење, печурки, суво месо, колбас)",
      article7: "(Домат, сирење, суво месо, колбас)",
      article8: "(Домат, сирење, печурки, колбас)",
      article9: "(Домат, сирење, печурки, суво месо)",
      poweredby: "појачано од: Бетим Хасани",
      //grill
      sallata : "Салата",
      shope: "Продавница",
      jeshile: "Зелено",
      greke: "Грчка",
      turshimix: "Мешани туршии",
      biftek: "Бифтеци",
      ramstek: "Рамстек",
      mishvici: "Месни ќофтиња",
      stekpule: "Печено пилешко",
      gishtapule: "Пилешки прсти",
      hamburger: "Хамбургер",
      cheeseburger: "Чизбургер",
      qebap12: "Кебап 1/2",
      qebap: "Кебап",
      qebap15: "Кебап 15",
      pleskavice: "Плескавица",
      pleskaviceSharri: " Плескавица Шарри",
      razhnic: "Ражнич",
      racionPomfrit: "Порција помфрит",
      sos: "Сос",
      ajvar: "Ајвар",
      pavllak: "Павлака",
      fogace: "Фогаце",
      lepinje: "Лепиња",
      ekstra: "Екстра",
      majonez: "Мајонез",
      ullinj: "Маслинки",
      veze: "Јајце",
      djath: "Сирење",
      tunashtese: "Туна плус",
      proshutoshtese: "Прошуто плус",
      soxhukshtese: "Колбас плус",
      kepurdhashtese: "Печурки плус",
    //drinks
      pije: "Пијалоци",
      pijetengrohta: "Топли пијалоци",
      espreso: "Еспресо",
      makiato: "Макијато",
      cajinxehte: "Топол чај",
      qumesht: "Млеко",
      kakao: "Какао",
      kafeebardhe: "Бела Кафе",
      pijejoalkoolike: "Безалкохолни пијалоци",
      cocacola: "Кока-Кола",
      fantaorange: "Фанта портокал",
      fantashokata: "Фанта шоката",
      schweppes: "Швепс",
      schweppestonic: "Швепс тоник",
      sprite: "Спрајт",
      cockta: "Кокта",
      ujmegaz: "Газирана вода",
      ujpagaz: "Минерална вода",
      lengjepemesh: "Сокови",
      pjeshke: "Праска 0,2л",
      multivitamin: "Мулти витамин 0,2л",
      vishnje: "Цреша 0,2л",
      molle: "Јаболко 0,2л",
      juice: "Сок 0,2л",
      icetea: "Леден чај 0,2л",
      limonade: "Лимонада",
      boronice: "Боровинки",
      //dessert
      dessert: "Десерт",
      trilece: "Трилеће",
      embelsireshtepie: "Десерт од дома",
      kremmekadaif: "Крем со кадаиф",
      krembrule: "Крем Бруле",

    },
    "sq": {
      //nav
      thankyou: "Faleminderit!",
      poweredby: "i fuqizuar nga: Betim Hasani",
      pizza: "Pizza",
      skara: "Skara",
      pije: "Pije",
      dessert: "Desert",
      //pizza
      tono: "Tuna",
      proshuto: "Proshuto",
      fungi: "Fungi",
      margarita: "Margarita",
      calabrese: "Calabrese",
      toscana: "Toscana",
      vesuvio: "Vesuvio",
      roma: "Roma",
      article0: "(Domate, djath, kërpudha, mish i thatë, ullinj, vezë)",
      article1: "(Domate, djath)",
      article2: "(Domate, djath, kërpudha)",
      article3: "(Domate, djath, tuna, qepë)",
      article4: "(Domate, djath, proshuto)",
      article5: "(Domate, djath, sallam)",
      article6: "(Domate, djath, kërpudha, mish i thatë)",
      article7: "(Domate, djath, mish i thatë)",
      article8: "(Domate, djath, kërpudha, suxhuk)",
      article9: "(Domate, djath, kërpudha, mish i thatë)",
      ekstra: "Ekstra",
      majonez: "Majonez",
      ullinj: "Ullinj",
      veze: "Vezë",
      djath: "Djath",
      tunashtese: "Tuna shtesë",
      proshutoshtese: "Proshuto shtesë",
      soxhukshtese: "Suxhuk shtesë",
      kepurdhashtese: "Kepurdha shtesë",
      //grill
      jeshile: "Jeshile",
      greke: "Greke",
      turshimix: "Turshi e përzier",
      biftek: "Biftek",
      ramstek: "Ramstek",
      mishvici: "Mish vici",
      stekpule: "Stek pule",
      gishtapule: "Gishta pule",
      hamburger: "Hamburger",
      cheeseburger: "Cheeseburger",
      qebap12: "Qebap 1/2",
      qebap: "Qebap",
      qebap15: "Qebap 15",
      pleskavice: "Pleskavice",
      pleskaviceSharri: "Pleskavice Sharri",
      razhnic: "Razhnic",
      racionPomfrit: "Racion pomfrit",
      sos: "Sos",
      rightss: "2023 Elitte. Të drejtat e rezervuara.",
      //drinks
      pije: "Pije",
      pijetengrohta: "Pije të ngrohta",
      espreso: "Espresso",
      makiato: "Macchiato",
      cajinxehte: "Çaj i ngrohtë",
      qumesht: "Qumësht",
      kakao: "Kakao",
      kafeebardhe: "Kafe e bardhë",
      pijejoalkoolike: "Pije joalkoolike",
      cocacola: "Coca-Cola",
      fantaorange: "Fanta portokall",
      fantashokata: "Fanta shokata",
      schweppes: "Schweppes",
      schweppestonic: "Schweppes Tonic",
      sprite: "Sprite",
      cockta: "Cockta",
      ujmegaz: "Ujë me gaz",
      ujpagaz: "Ujë pa gaz",
      lengjepemesh: "Lëngje frutash",
      pjeshke: "Pjeshkë 0,2l",
      multivitamin: "Multivitamin 0,2l",
      vishnje: "Vishnje 0,2l",
      molle: "Mollë 0,2l",
      juice: "Lëng frutash 0,2l",
      icetea: "Ice Tea 0,2l",
      limonade: "Limonadë",
      boronice: "Boronicë",
      //dessert
      dessert: "Desert",
      trilece: "Trileçe",
      embelsireshtepie: "Ëmbëlsirë Shtëpie",
      kremmekadaif: "Krem me Kadaif",
      krembrule: "Krem Brule",
      

    }
  }

  

function changeLanguage() {
  const lang = document.getElementById("language-selector").value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}




