import { useState } from "react";
import Card from "./Card";

const CardList = (props) => {
  let cardList = [
    {
      imagePath: "../assets/Annies1.jpg",
      description:
        "Gluten Free brings it down and its got the usual Annie's feeling to it. I feel bad for people who are gluten free. Although its got the usual upsides of the Annie's brand, cheap, easy, and healthy.",
    },
    {
      imagePath: "../assets/Annies2.jpg",
      description:
        "I do like white cheddar but this cheese was very bland and the mac was heavy and I just feel like something is off with Annie's. Probably because this is the easiset and cheapest AND healthiest mac and cheese on the list, so atleast it has that going for it.",
    },
    {
      imagePath: "../assets/Annies3.jpg",
      description:
        "This item surprised me. Something about the rice pasta made it better than the non-rice variant. And it still has the upsides of the Annie's Brand, cheap, easy ,and healthy.",
    },
    {
      imagePath: "../assets/Bob Evans1.jpg",
      description:
        "I am a big fan of spicy food, so this buffalo mac & cheese was great. Classic mac & cheese flavor from good old Bob Evans. Also, they kept it on the cheaper side.",
    },
    {
      imagePath: "../assets/Bob Evans2.jpg",
      description:
        "Bob Evans makes a mean mac and cheese. Good flavor, simple texture, and good value. ",
    },
    { imagePath: "../assets/CrackerBarrel1.jpg", description: "Cracker Barrel turned out to be way better than I thought. It had a very nice touch of added breadcrumbs that I defenitly enjoyed" },
    { imagePath: "../assets/CrackerBarrel2.jpg", description: "This is just like the Sharp White Cheddar Cracker Barrel, but I prefer the white cheddar. Enough so too that this gets bumped down a tier" },
    {
      imagePath: "../assets/Devour1.jpg",
      description:
        "The chicken in this doesn't look like it will be good but omg its great. The blue cheese adds a lot and the buffalo flavor is great. No bad things to say highly recommend.",
    },
    {
      imagePath: "../assets/Devour2.jpg",
      description:
        "This item was really good, but it was very gooey cheese which is not my favorite and mixed with microwave bacon is why this got a B.",
    },
    {
      imagePath: "../assets/Kraft.jpg",
      description:
        "I'm going to assume the big bowl and the other sizes taste the same if made in the same way (Mircowave). I am a big Kraft fan, the mac and cheese is thicker than other macs, and it's a classic great choice.",
    },
    {
      imagePath: "../assets/Main ST.jpg",
      description:
        "This is the #1 Mac and Cheese option from the corner store. If you are fine with spicy food, give this a try. Its got the perfect mix of peppers and mac with a great pepper jack cheese.",
    },
    {
      imagePath: "../assets/Panera1.jpg",
      description:
        "I literally could not finish this mac & cheese. Everything was fine, but the cheese flavor was just awful. The only upside was atleast it was a meaty portion.",
    },
    { imagePath: "../assets/Panera2.jpg", description: "I do not know how but the brocoli made this mac & cheese so much better than the non-brocoli counterpart. Nothing like some good cheesy brocoli" },
    { imagePath: "../assets/Stoufers.jpg", description: "This is literally the most plain and boring mac & cheese you can get. Nothing really good about it, but also nothing bad. As well as it being middle of the pack in terms of value as well." },
    { imagePath: "../assets/Velveeta.jpg", description: "Velveeta is just a worse version of Kraft what can I say. " },
  ];
  const [cards, setCards] = useState(cardList);

  return (
    <div className="card border-primary mb-3">
      <div className="CardList">
        {cards.map((item) => (
          <Card
            imagePath={item.imagePath}
            key={item.description}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
