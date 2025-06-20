import Favourite from "./Favourite";
import FavouriteListModal from "./FavouriteListModal";
import Logo from "./Logo";
import Search from "./Search";
const Header = () => {
  return (
    <header class="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav class="max-w-[1280px] mx-auto flex items-center justify-between py-6">
        <Logo />

        <div class="flex items-center gap-4 relative">
          <Search />
          <Favourite />
          <FavouriteListModal />
        </div>
      </nav>
    </header>
  );
};

export default Header;
