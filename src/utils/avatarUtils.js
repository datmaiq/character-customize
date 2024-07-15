// src/utils/avatarUtils.js
export const total = {
  accessories: {
    hats: {
      name: "hats",
      qty: 28,
      style: { zIndex: 2, position: "absolute", left: 0 },
    },
    glasses: {
      name: "glasses",
      qty: 17,
      style: { zIndex: 2, position: "absolute", left: 0 },
    },
    earrings: {
      name: "earrings",
      qty: 32,
      style: { zIndex: 1, position: "absolute", left: 0 },
    },
    neckwear: {
      name: "neckwear",
      qty: 18,
      style: { zIndex: 5, position: "absolute", left: 0 },
    },
  },
  clothes: {
    clothing1: {
      name: "clothing",
      qty: 5,
      style: { zIndex: 1, position: "absolute", left: 0 },
    },
    clothing2: {
      name: "outerwear",
      qty: 5,
      style: { zIndex: 3, position: "absolute", left: 0 },
    },
    clothing3: {
      name: "clothing",
      qty: 9,
      style: { zIndex: 4, position: "absolute", left: 0 },
    },
  },
  body: {
    name: "body",
    qty: 17,
    style: { zIndex: 0 },
  },
  eyes: {
    name: "eye",
    qty: 24,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  hair: {
    name: "hair",
    qty: 73,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  mouths: {
    name: "mouth",
    qty: 24,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  eyebrows: {
    name: "eyebrows",
    qty: 15,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  facial_hair: {
    name: "facial hair",
    qty: 17,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  noses: {
    name: "nose",
    qty: 1,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
};

export const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num - 1) + 1);
};

export const generateRandomAvatar = () => ({
  body: {
    dir: `images/body/${getRandomNumber(total.body.qty)}.png`,
    style: total.body.style,
  },
  eyes: {
    dir: `images/eyes/${getRandomNumber(total.eyes.qty)}.png`,
    style: total.eyes.style,
  },
  hair: {
    dir: `images/hair/${getRandomNumber(total.hair.qty)}.png`,
    style: total.hair.style,
  },
  mouths: {
    dir: `images/mouths/${getRandomNumber(total.mouths.qty)}.png`,
    style: total.mouths.style,
  },
  facial_hair: {
    dir: `images/facial_hair/${getRandomNumber(total.facial_hair.qty)}.png`,
    style: total.facial_hair.style,
  },
  eyebrows: {
    dir: `images/eyebrows/${getRandomNumber(total.eyebrows.qty)}.png`,
    style: total.eyebrows.style,
  },
  glasses: {
    dir: `images/accessories/glasses/${getRandomNumber(
      total.accessories.glasses.qty
    )}.png`,
    style: total.accessories.glasses.style,
  },
  earrings: {
    dir: `images/accessories/earrings/${getRandomNumber(
      total.accessories.earrings.qty
    )}.png`,
    style: total.accessories.earrings.style,
  },
  hats: {
    dir: `images/accessories/hats/${getRandomNumber(
      total.accessories.hats.qty
    )}.png`,
    style: total.accessories.hats.style,
  },
  neckwear: {
    dir: `images/accessories/neckwear/${getRandomNumber(
      total.accessories.neckwear.qty
    )}.png`,
    style: total.accessories.neckwear.style,
  },
  clothing1: {
    dir: `images/clothes/clothing1/${getRandomNumber(
      total.clothes.clothing1.qty
    )}.png`,
    style: total.clothes.clothing1.style,
  },
  clothing2: {
    dir: `images/clothes/clothing2/${getRandomNumber(
      total.clothes.clothing2.qty
    )}.png`,
    style: total.clothes.clothing2.style,
  },
  clothing3: {
    dir: `images/clothes/clothing3/${getRandomNumber(
      total.clothes.clothing3.qty
    )}.png`,
    style: total.clothes.clothing3.style,
  },
  noses: {
    dir: `images/noses/${getRandomNumber(total.noses.qty)}.png`,
    style: total.noses.style,
  },
});
