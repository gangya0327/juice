type Fish7 = {
  name: string;
  swim: () => void;
};
type Bird7 = {
  name: string;
  fly: () => void;
};

function isFish(pet: Fish7 | Bird7): pet is Fish7 {
  return (pet as Fish7) !== undefined;
}

function getSmallPet(): Fish7 | Bird7 {
  let fish: Fish7 = {
    name: 'shark',
    swim: () => {},
  };
  let bird: Bird7 = {
    name: 'sparrow',
    fly: () => {},
  };
  return true ? bird : fish;
}

let pet = getSmallPet();
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish7 | Bird7)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater: Fish7[] = zoo.filter(isFish);
const underWater2: Fish7[] = zoo.filter(isFish) as Fish7[];

const underWater3: Fish7[] = zoo.filter((pet): pet is Fish7 => {
  if (pet.name === 'frog') {
    return false;
  }
  return isFish(pet);
});
