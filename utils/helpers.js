export const getHowToIcon = color => {
  if (color === 'yellow') {
    return { img: '/rectangle.svg' };
  } else if (color === 'orange') {
    return { img: '/swimming.svg' };
  } else {
    return { img: '/car.svg' };
  }
};
