import PropTypes from "prop-types";

/**
 * Card 组件用于展示一个卡片，包含图片和标题。
 * @param {Object} data - 组件数据对象。
 * @param {string} data.img - 图片的 URL。
 * @param {string} data.title - 卡片的标题。
 */
function Card({ data }) {
  return (
    <div className="card">
      <img src={data.img} alt={data.title} />
      <div className="card-content">
        <h3>{data.title}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
