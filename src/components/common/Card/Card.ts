import React, { FC, ReactNode } from "react";
import PropTypes, { ReactElement, ReactNodeArray } from "prop-types";
import classNames from "classnames";
import "./card.scss";

interface ShimmerCardProps {
  className?: string;
  children: ReactElement | ReactNodeArray;
  paddingSize?: false | 20 | 30;
}

const ShimmerCard: FC<ShimmerCardProps> = ({
  className,
  children,
  paddingSize,
}) => {
  if (!children) return null;
  return (
    <div
      className={classNames({
        "shimmer-card": true,
        [`p-${paddingSize}`]: paddingSize,
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

ShimmerCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  paddingSize: PropTypes.oneOf([false, 20, 30]),
};

ShimmerCard.defaultProps = { paddingSize: false };

export default ShimmerCard;