export const getHowToProperties = color => {
  if (color === 'yellow') {
    return { bgCol: 'bg-[#f0bb1f]', img: '/rectangle.svg' };
  } else if (color === 'orange') {
    return { bgCol: 'bg-[#f15a2B]', img: '/swimming.svg' };
  } else {
    return { bgCol: 'bg-[#006380]', img: '/car.svg' };
  }
};
