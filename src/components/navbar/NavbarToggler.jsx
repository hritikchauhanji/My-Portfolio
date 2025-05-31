import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../app/MenuSlice";

const NavbarToggler = () => {
    const dispatch = useDispatch();

    const setToggleMenu = () => {
        dispatch(toggleMenu());
    };

    return (
        <button
            className="text-2xl text-white p-3 border border-orange rounded-full"
            onClick={setToggleMenu}
        >
            <GiHamburgerMenu />
        </button>
    );
};

export default NavbarToggler;