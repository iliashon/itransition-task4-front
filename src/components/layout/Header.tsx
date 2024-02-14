import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 text-xl leading-6">
                        itupalski
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
