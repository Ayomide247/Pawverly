import images from "../assets/index";
import { icons } from "../assets/index";
// import checkblack from "../assets/images/checkblack.png.avif";

// console.log(icons);

export const welcomeSlider = [
  "Christmas Sales: 20% Off",
  "Limited Stock!",
  "Free Shipping Worldwide",
];

export const product = [
  {
    id: 1,
    title: "Cozy Knit Winter Sweater for Small & Medium Pets - Pet Sweater",
    details:
      "Dog Sweaters Winter Warm Dog Clothes For Small Dogs Turtleneck Knitted Pet Clothing Puppy Cat Sweater Vest Coat",
    img: images[0],
    price: 27.99,
    oldprice: 34.99,
  },
];

export const cardDetails = [
  {
    id: 1,
    img: images[9],
    title: "Machine Washable",
    about:
      "Pet clothes can get dirty quickly, so having a sweater that is machine washable or easy to care for will save you time. ",
  },
  {
    id: 2,
    img: images[3],
    title: "Easy to put on / take off",
    about:
      "Sweaters with strechable and adjustable openings around the neck and legs can make dressing easier and easures that your pet feels comfortable.",
  },
  {
    id: 3,
    img: images[13],
    title: "Durability",
    about:
      "The Sweater is durable enough to withstand wear and tear, especially if your pet is very active. ",
  },
];

export const descriptionCard = [
  {
    id: 1,
    icon: icons[4],
    title: "Cozy Winterwear for Small Pets",
    details:
      "A snug knit sweater designed to provide warmth and charm for your furry friends in cold weather.",
  },
  {
    id: 2,
    icon: icons[0],
    title: "Knit Sweater for Chilly Pets ",
    details:
      "Soft, stretchy, and easy to wear, this sweater ensures your pet stays warm on winter outings.",
  },
  {
    id: 3,
    icon: icons[2],
    title: "Pet Winter Knitwear",
    details:
      "Tailored for small and medium pets, this cozy sweater is a must-have for chilly days.",
  },
  {
    id: 4,
    icon: icons[3],
    title: "Adorable Knit Sweater for Pets",
    details:
      "Perfect for the season, this knit sweater combines warmth and cuteness for your pet.",
  },
];

export const accordion = [
  {
    title: "What sizes are available for this Sweaters",
    details:
      "This sweater is designed for small and medium-sized pets. Please check the size chart for measurements to ensure the perfect fit.",
  },
  {
    title: "Is the Sweater machine washable?",
    details:
      "Absolutely! The sweater is machine washable on a gentle cycle. For best results, lay it flat to dry.",
  },
  {
    title: "Is the Sweater easy to put on and take off?",
    details:
      "Yes! The sweater features a stretchy design, making it easy to slip on and off your pet without hassle.",
  },
  {
    title: "Is the Sweater suitable for outdoor use? ",
    details:
      "Yes, it’s perfect for walks, outdoor play, or simply keeping warm indoors during colder months.",
  },
  {
    title: "Does this Sweater works for cats as well as dogs?",
    details:
      "Yes, this sweater is suitable for both cats and small to medium-sized dogs.",
  },
  {
    title: "What styles or colors are available?",
    details:
      "The sweater comes in a variety of stylish colors and patterns to match your pet’s personality.",
  },
];

export const productTheme = [
      { id: 1, name: "G", img: images[0] },
      { id: 2, name: "B", img: images[5] },
      { id: 3, name: "C", img: images[3] },
    ];
