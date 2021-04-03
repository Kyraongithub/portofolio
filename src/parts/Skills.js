import React from "react";
import propTypes from "prop-types";
import Fade from "react-reveal/Fade";

export default function Skills(props) {
  return (
    <div className="tiles-item">
      <Fade bottom delay={props.delayInMS}>
        <img
          src={props.data.imgSrc}
          alt={props.data.imgAlt}
          width="100"
          height="100"
        />
      </Fade>
    </div>
  );
}

Skills.propTypes = {
  delayInMS: propTypes.number,
  data: propTypes.object,
};
