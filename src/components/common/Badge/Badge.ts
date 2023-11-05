import React, { FC } from "react";
import PropTypes from "prop-types";
import "./badge.scss";

interface ShimmerBadgeProps {
  width?: number;
}

const ShimmerBadge: FC<ShimmerBadgeProps> = ({ width }) => {
  const style: React.CSSProperties = {};
  if (width) style.width = `${width}px`;

  return `<div className="shimmer shimmer-badge" style={style} />`;
};

ShimmerBadge.propTypes = {
  width: PropTypes.number,
};

export default ShimmerBadge;