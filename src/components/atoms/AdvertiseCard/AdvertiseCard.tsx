import { FC } from "react";

interface AdvertiseCardProps {
  color: string;
  count: number;
  label: string;
  countColor: string;
  text: string;
  img: string;
}
const AdvertiseCard: FC<AdvertiseCardProps> = ({
  color,
  count,
  label,
  countColor,
  text,
  img,
}) => {
  return (
    <div
      className="flex flex-col pl-6 pt-7 pb-7 text-white  rounded"
      style={{ backgroundColor: color }}
    >
      <div className="flex">
        <p className="text-2xl leading-7 font-bold">
          You <br />
          have <br />
          earned <br />
          <span
            className="font text-[40px] leading-[48px] font-bold"
            style={{ color: countColor }}
          >
            {count}
          </span>
          <br />
          {label}
        </p>
        <img src={`/${img}.png`} alt="" />
      </div>
      <div>
        <p
          className="font-normal text-xs leading-4 mt-1"
          style={{ color: countColor }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default AdvertiseCard;
