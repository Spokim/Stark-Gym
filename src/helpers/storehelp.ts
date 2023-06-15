export function storehelp() {
  const informationCoach = [
    {
      image: "/Coaching1.jpg",
      alt: "a person helping a women to stretch by pushing on her back.",
      text: "One time personalized one-on-one coaching",
      price: 19.95,
    },
    {
      image: "/Coaching2.jpg",
      alt: "a boxer posing for a shot.",
      text: "Three times personalized one-on-one coaching",
      price: 49.95,
    },
    {
      image: "/Coaching3.jpg",
      alt: "a man coaching a woman on training.",
      text: "A training program along with dietary tips.",
      price: 199.95,
    },
  ];
  const informationCloths = [
    {
      image: "/Hoodie.jpg",
      alt: "A black hoodie",
      text: "Black Hoodie",
      price: 24.95,
    },
    {
      image: "/Tanktop.jpg",
      alt: "A black tanktop",
      text: "Black Tanktop",
      price: 14.95,
    },
    {
      image: "/Sweat.jpg",
      alt: "a black sweat pants",
      text: "Black Sweat pants",
      price: 19.95,
    },
  ];
  const informationProducts = [
    {
      image: "/Creatine.jpg",
      alt: "Protein powder, whey-80",
      text: "Protein powder",
      price: 19.95,
    },
    {
      image: "/ProteinBar.jpg",
      alt: "A picture of box of protein bar",
      text: "Protein Bars",
      price: 7.95,
    },
    {
      image: "/ProteinJuice.jpg",
      alt: "A picture of box of protein juice",
      text: "Protein Juice",
      price: 6.95,
    }
  ];
  return { informationCoach, informationCloths, informationProducts };
}
