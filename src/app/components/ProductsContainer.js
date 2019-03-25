import PropTypes from "prop-types";
import styled from "styled-components";

const ProductsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

ProductsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProductsContainer.defaultProps = {
  className: "",
};

export default ProductsContainer;
