import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./custome-tooltip.scss";
import { createGlobalStyle } from "styled-components";
import { useMediaPredicate } from "react-media-hook";
function Tooltip(props) {
  const moreThan993 = useMediaPredicate("(min-width: 993px)");
  const {
    id,
    place,
    arrowPosition,
    customClassName,
    Position,
    rider,
    backColor,
    color,
    allowClick,
    arrowColor,
    noDisplay,
  } = props;
  let offset = undefined;
  let mobilePlace = undefined;
  if (window.matchMedia("(max-width: 767px)").matches) {
    // offset = { top: 90, right: 41 };
    mobilePlace = "top";
  }

  const getPositionClass = () => {
    if (place === "right") {
      return "tooltipRight";
    } else if (place === "left") {
      return "tooltipLeft";
    } else if (place === "top") {
      return "tooltipTop";
    }
  };

  const getArrowClass = () => {
    if (arrowPosition === "bottom") {
      offset = { top: 60, right: 3 };
      return "from1__arrowBottom";
    }
    if (arrowPosition === "top") {
      offset = { top: -60, right: 3 };
      return "from1__arrowTop";
    }
  };

  return (
    <>
      {props.children}

      {!noDisplay && (
        <>
          <ReactTooltip
            id={props?.id}
            //   id={(props?.id && moreThan993) || allowClick ? id : undefined}
            className={`customTooltip ${customClassName} ${getArrowClass()} ${getPositionClass()} modifyTipStyle`}
            offset={
              mobilePlace === "top" ? undefined : Position ? Position : offset
            }
            type="light"
            effect="float"
            place={mobilePlace === "top" ? undefined : place}
            backgroundColor={backColor ? backColor : "#fff"}
            borderColor="#000"
            arrowColor={arrowColor ? "transparent" : ""}
          />
          <GlobalStyle />
        </>
      )}
    </>
  );
}

export default Tooltip;

const GlobalStyle = createGlobalStyle`

${({ theme }) =>
  theme?.fontFamily &&
  `.customTooltip{
	div {
		font-family: ${theme.fontFamily};
	}
	h3 {
		font-family: ${theme.fontFamily};
	}
	h4 {
		font-family: ${theme.fontFamily};
	}
	}`}

 `;

let tooltipOffset;
let tooltipPlace;
if (window.matchMedia("(max-width: 767px)").matches) {
  tooltipOffset = { top: 90, right: 41 };
  tooltipPlace = "top";
} else {
  tooltipPlace = "right";
  tooltipOffset = { top: 60, right: 3 };
}
