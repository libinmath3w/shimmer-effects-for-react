import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.scss";

interface ShimmerButtonProps {
  size?: "lg" | "md" | "sm";
}

const ShimmerButton: FC<ShimmerButtonProps> = ({ size = "md" }) => (
  <div
    className={classNames({
      "shimmer shimmer-button": true,
      [`shimmer-button--${size}`]: true,
    })}
  />
);

ShimmerButton.propTypes = {
  size: PropTypes.oneOf(["lg", "md", "sm"]),
};

export default ShimmerButton;