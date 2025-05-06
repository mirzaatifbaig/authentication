import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axios.jsx";
import { toast } from "sonner";
import Loading from "@/components/ui/Loading.jsx";
import useAuthStore from "@/store/useAuthStore.jsx";
import {Button} from "@/components/ui/button.jsx";

const Dashboard = () => {
  const {token, clearAuth} = useAuthStore();
  console.log("This is the token from Dashboard: ", token);
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const response = await axios.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to load dashboard.",
      );
    },
  });
  if (isLoading) return <Loading />;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Error: {error?.message}</p>
    );
  return (
    <div className="max-w-2xl mx-autp mt-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="text-lg">
        Hell, <strong>{data.user.email}</strong>!
      </p>
      <p className="text-muted-foreground mt-2">This is protected content.</p>
      <Button onClick={clearAuth}>Logout</Button>
    </div>
  );
};
export default Dashboard;
