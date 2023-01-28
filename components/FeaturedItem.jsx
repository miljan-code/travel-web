const FeaturedItem = ({ img, index }) => {
  return (
    <div className="relative">
      <img
        src={img}
        className="mix-blend-luminosity hover:mix-blend-normal transition-all"
      />
    </div>
  );
};

export default FeaturedItem;
