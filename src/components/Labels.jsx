import React from "react";

export default function Labels() {
  const cards = [
    {
      id: "CocaCola_Card",
      title: "CocaCola",
      subheader: "Coca Cola Company",
      descrition: "Gaseosa emblemática conocida por su sabor único y original",
      ml: "350 ml",
      points: ["Refrescante", "Efervescente", "Clásica"],
    },
    {
      id: "Pepsi_Card",
      title: "Pepsi",
      subheader: "Pepsico",
      descrition: "Bebida popular con un especial sabor dulce",
      ml: "350 ml",
      points: [
        "Gran complemento aperitivo",
        "Dulzura equilibrada",
        "Variedad de sabores",
      ],
    },
    {
      id: "Fanta_Card",
      title: "Fanta",
      subheader: "Coca cola company",
      descrition: "Línea de gaseosa con sabores distintivos y refrescantes",
      ml: "350 ml",
      points: ["Sabores frutales", "Diversión y frescura", "Variedad regional"],
    },
  ];

  return (
    <div className="labels_container">
      <div className="labels_wrapper">
        {cards.map((card) => (
          <div
            id={card.id}
            key={card.id}
            className="label_card label_card--hidden"
          >
            <div>
              <h1 className="text_header">{card.title}</h1>
              <p className="text_subheader">{card.subheader}</p>
              <p className="text_body">{card.descrition}</p>
            </div>
            <div>
              <h1 className="text_subheader">{card.ml}</h1>
            </div>
            <div>
              <ul>
                {card.points.map((point, index) => {
                  if (index === card.points.lenght) {
                    return (
                      <li key={index} className="text_item_des">
                        <p className="text_body text_item_des text_item_des_border_top text_item_des_border_bottom">
                          {point}
                        </p>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={index}
                        className="text_body text_item_des text_item_des_border_top"
                      >
                        <p>{point}</p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
