import { FC, useState } from "react";
import "./StatisticsCard.scss";
import { EnergyIcon } from "src/assets/icons";
import { CircularProgressbar } from "react-circular-progressbar";
import { TRANSPARENT_WHITE_COLOR, WHITE_COLOR } from "src/constants";
import "react-circular-progressbar/dist/styles.css";

interface StatisticsCardProps {
  icon: string;
  title: string;
  color: string;
  percentage: number;
}

const StatisticsCard: FC<StatisticsCardProps> = ({
  title,
  color,
  percentage,
  icon,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const toggleHover = () => {
    setIsHovering(!isHovering);
  };

  const handleHaveringState = (hoverColor: string, defaultColor: string) =>
    isHovering ? hoverColor : defaultColor;

  return (
    <div
      className={`StatisticsCard`}
      style={{ backgroundColor: handleHaveringState(color, WHITE_COLOR) }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div
        style={{
          backgroundColor: handleHaveringState(
            TRANSPARENT_WHITE_COLOR,
            `${color}1a`
          ),
          color: handleHaveringState(WHITE_COLOR, color),
        }}
        className="StatisticsCard__Icon"
      >
        <EnergyIcon />
      </div>
      <h3 className="StatisticsCard__Title">{title}</h3>
      <div className="StatisticsCard__Chart">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          circleRatio={0.7}
          styles={{
            trail: {
              stroke: handleHaveringState(TRANSPARENT_WHITE_COLOR, "#F4F5F9"),
            },
            root: {
              transform: "rotate(0.65turn)",
            },
            text: {
              transform: "rotate(-0.65turn)",
              transformOrigin: "center",
              fill: handleHaveringState(WHITE_COLOR, "#242731"),
              fontSize: "24px",
            },
            path: { stroke: handleHaveringState(WHITE_COLOR, color) },
          }}
        />
      </div>
    </div>
  );
};

export default StatisticsCard;
