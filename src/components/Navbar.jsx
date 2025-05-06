import {Home} from "lucide-react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import useAuthStore from "@/store/useAuthStore.jsx";

const Navbar = () => {
    const {clearAuth, token} = useAuthStore();
    return (
        <nav
            className="fixed top-0 left-0 w-full flex items-center justify-between px-6 border-b bg-background z-50 shadow-xl">
            <div className="flex items-center space-x-2">
                <Link to={"/"}>
                    <Home className="h-6 w-6 text-primary"/>
                </Link>
                <span className="text-lg font-semibold m-4">App</span>
            </div>
            <div className="flex items-center space-x-2 mx-4">
                <Link to="/login">Login</Link>

                {token && (
                    <Link to="/">
                        <Button onClick={clearAuth}>Logout</Button>
                    </Link>
                )}
                {!token && (
                    <Link to="/signup">
                        <Button>Signup</Button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
