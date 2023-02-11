import SearchInput from "src/components/atoms/SearchInput";
import notificationsIcon from "src/assets/icons/notification.svg";
import avatarImg from "src/assets/avatar.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white py-[15px] px-[31px] ml-[1px]">
      <SearchInput />
      <div className="flex items-center gap-10">
        <img src={notificationsIcon} alt="notifications icon" />
        <img src={avatarImg} className="w-[48px] h-[48px]" alt="user avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
