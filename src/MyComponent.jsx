import React, { Children } from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요 제 이름은 {props.name} 입니다.
      <br />
      children 값은 {props.children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
