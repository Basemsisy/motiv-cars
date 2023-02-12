import { FC } from "react";
import { ElectricIcon, IconOne, IconTwo, RotationIcon } from "src/assets/icons";
import { WHITE_COLOR } from "src/constants";
import "./FeaturedCard.scss";

interface FeaturedCardProps {
  percentage: number;
  name: string;
  count: number;
  rate: string;
  color: string;
  img: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  percentage,
  name,
  count,
  rate,
  color = WHITE_COLOR,
  img,
}) => {
  return (
    <article className="FeaturedCard" style={{ backgroundColor: color }}>
      <div className="FeaturedCard__Header">
        <RotationIcon />
        <p className="font-bold text-base leading-5">{percentage}% Recommend</p>
      </div>
      <figure className="FeaturedCard__Img">
        <img src={img} alt={name} />
      </figure>
      <h3 className="FeaturedCard__Title">{name}</h3>
      <div className="FeaturedCard__Footer">
        <ul className="flex items-center gap-4">
          <li>
            <IconOne />
          </li>
          <li className="font-medium text-sm text-gray-4">{count}K</li>
          <li>
            <IconTwo />
          </li>
          <li>
            <ElectricIcon />
          </li>
        </ul>
        <span className="font-medium text-sm leading-[18px]  text-gray-4">
          ${rate}/h
        </span>
      </div>
    </article>
  );
};

export default FeaturedCard;
