import { FC } from "react";

interface ListItemProps {
  text: string;
  icon: string;
}
const ListItem: FC<ListItemProps> = ({ text, icon }) => {
  return (
    <li className="flex py-[7px] px-2 hover:bg-gray-8 mb-2.5 transition-all items-center rounded-md cursor-pointer">
      <img
        src={`src/assets/icons/${icon}.svg`}
        alt={`${text} icon`}
        className="w-[20px] h-[20px] mr-[10px]"
      />
      <p className="text-gray-5 text-sm capitalize font-medium">{text}</p>
    </li>
  );
};

export default ListItem;
