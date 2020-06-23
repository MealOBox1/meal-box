const Price = 0;
let tax = 0;
let Delivery = 50;
let Total = 0;

export const plans = (data) => {
  console.log(data);
  switch (data) {
    case 3:
      return {
        Price: 150,
      };
    case 3:
      return {
        Price: 200,
      };
    case 3:
      return {
        Price: 400,
      };
    case 3:
      return {
        Price: 650,
      };
    default:
      return Price;
  }
};

// export default function taxes(Price) {
//   return (tax = (Price * 20) / 100);
// }

// export default function deliveryPrice() {
//   return Delivery;
// }

// export default function Total() {
//   return plans() + taxes() + deliveryPrice();
// }
