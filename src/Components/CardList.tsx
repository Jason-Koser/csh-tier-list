import React from "react";
import Card from "./Card";
import { useDroppable } from "@dnd-kit/core";
import { CardObj } from "./BoardGroup";

const CardList = () => {
  let cards:CardObj[] = [
    new CardObj("../assets/Annies1.jpg", "Gluten Free brings it down and its got the usual Annie's feeling to it. I feel bad for people who are gluten free. Although its got the usual upsides of the Annie's brand, cheap, easy, and healthy."),
    new CardObj("../assets/Annies2.jpg", "I do like white cheddar but this cheese was very bland and the mac was heavy and I just feel like something is off with Annie's. Probably because this is the easiset and cheapest AND healthiest mac and cheese on the list, so atleast it has that going for it."),
    new CardObj("../assets/Annies3.jpg", "This item surprised me. Something about the rice pasta made it better than the non-rice variant. And it still has the upsides of the Annie's Brand, cheap, easy ,and healthy."),
    new CardObj("../assets/Bob Evans1.jpg", "I am a big fan of spicy food, so this buffalo mac & cheese was great. Classic mac & cheese flavor from good old Bob Evans. Also, they kept it on the cheaper side."),
    new CardObj("../assets/Bob Evans2.jpg", "Bob Evans makes a mean mac and cheese. Good flavor, simple texture, and good value."),
    new CardObj("../assets/CrackerBarrel1.jpg", "Cracker Barrel turned out to be way better than I thought. It had a very nice touch of added breadcrumbs that I defenitly enjoyed"),
    new CardObj("../assets/CrackerBarrel2.jpg", "This is just like the Sharp White Cheddar Cracker Barrel, but I prefer the white cheddar. Enough so too that this gets bumped down a tier"),
    new CardObj("../assets/Devour1.jpg", "The chicken in this doesn't look like it will be good but omg its great. The blue cheese adds a lot and the buffalo flavor is great. No bad things to say highly recommend."),
    new CardObj("../assets/Devour2.jpg", "This item was really good, but it was very gooey cheese which is not my favorite and mixed with microwave bacon is why this got a B."),
    new CardObj("../assets/Kraft.jpg", "I'm going to assume the big bowl and the other sizes taste the same if made in the same way (Mircowave). I am a big Kraft fan, the mac and cheese is thicker than other macs, and it's a classic great choice."),
    new CardObj("../assets/Main ST.jpg", "This is the #1 Mac and Cheese option from the corner store. If you are fine with spicy food, give this a try. Its got the perfect mix of peppers and mac with a great pepper jack cheese."),
    new CardObj("../assets/Panera1.jpg", "I literally could not finish this mac & cheese. Everything was fine, but the cheese flavor was just awful. The only upside was atleast it was a meaty portion."),
    new CardObj("../assets/Panera2.jpg", "I do not know how but the brocoli made this mac & cheese so much better than the non-brocoli counterpart. Nothing like some good cheesy brocoli"),
    new CardObj("../assets/Stoufers.jpg", "This is literally the most plain and boring mac & cheese you can get. Nothing really good about it, but also nothing bad. As well as it being middle of the pack in terms of value as well."),
    new CardObj("../assets/Velveeta.jpg", "Velveeta is just a worse version of Kraft what can I say. ")
  ];

  function addCard(card: CardObj) {
    cards[cards.length] = card;
    console.log("card added", card);
  }

  const { setNodeRef } = useDroppable({
    id: "CardList",
  });

  return (
    <div className="card border-primary mb-3">
      <div className="CardList" ref={setNodeRef}>
        {cards.map((item) => (
          <Card 
          imagePath={item.imagePath}
          description={item.description}
          key={item.imagePath}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
