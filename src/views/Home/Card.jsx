import PropTypes from "prop-types";

/**
 * Card 组件用于展示一个卡片，包含图片和标题。
 * @param {Object} data - 组件数据对象。
 * @param {string} data.img - 图片的 URL。
 * @param {string} data.title - 卡片的标题。
 * @param {string} data.url - 卡片的 URL。
 */
function Card({ data }) {
  const handleClick = () => {
    window.open(data.url);
  };
  return (
    <div
      className="w-1/3 p-1 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
      onClick={handleClick}>
      <img className="w-full" src={data.img} alt={data.title} />
      <h3 className="text-xl">{data.title}</h3>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
