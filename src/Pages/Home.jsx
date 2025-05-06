import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
          <div className="max-w-2xl mx-auto mt-10 text-center">
              <h1 className="text-3xl font-bold mb-6">Welcome to Our App</h1>
              <p className="text-lg mb-6">Please login or sign up to continue.</p>
              <div className="space-x-4">
                  <Link to="/login">
                      <Button variant="outline">Login</Button>
                  </Link>
                  <Link to="/signup">
                      <Button variant="outline">Sign Up</Button>
                  </Link>
              </div>
          </div>

  );
};

export default Home;
