import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

interface ShimmerThumbnailProps {
  height?: number;
  width?: number;
  center?: boolean;
  className?: string;
  fitOnFrame?: boolean;
  rounded?: boolean;
}

const ShimmerThumbnail: FC<ShimmerThumbnailProps> = ({
  height,
  width,
  center,
  className,
  fitOnFrame,
  rounded,
}) => {
  const style: React.CSSProperties = {};
  if (height) style.height = `${height}px`;
  if (width) style.width = `${width}px`;

  return (
    <div
      className={classNames({
        "h-100": fitOnFrame,
        "text-center ": center,
      })}
    >
      <div
        className={classNames({
          "h-100": fitOnFrame,
          "shimmer shimmer-thumbnail": true,
          "border-rounded": rounded,
          [className!]: className,
        })}
        style={style}
      ></div>
    </div>
  );
};

ShimmerThumbnail.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  center: PropTypes.bool,
  className: PropTypes.string,
  fitOnFrame: PropTypes.bool,
  rounded: PropTypes.bool,
};

ShimmerThumbnail.defaultProps = {
  center: false,
  fitOnFrame: false,
  rounded: false,
  height: 250,
};

export default ShimmerThumbnail;