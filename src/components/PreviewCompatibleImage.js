import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo, className, imageStyle }) => {
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className={className}
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        className={className}
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!imageInfo && typeof imageInfo === "string")
    return (
      <img className={className} style={imageStyle} src={imageInfo} alt={alt} />
    );

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
