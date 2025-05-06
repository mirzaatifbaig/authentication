import {toast} from "sonner";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {PasswordInput} from "@/components/ui/password-input";
import {useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import axios from "../api/axios";
import useAuthStore from "@/store/useAuthStore.jsx";

const formSchema = z.object({
  username: z.string().min(1),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Signup() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const { setAuth } = useAuthStore();
  const signUpMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("/signup", {
        email: data.email,
        password: data.password,
      });
      return response.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.token);

        console.log("This is the token from Signup: ", data.token);
      toast.success("Signup Successful!");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Signup Failed");
    },
  });

  function onSubmit(values) {
    signUpMutation.mutate(values);
  }

  return (
      <Form {...form}>
          <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto py-10"
          >
              <FormField
                  control={form.control}
                  name="username"
                  render={({field}) => (
                      <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                              <Input placeholder="username" type="text" {...field} />
                          </FormControl>
                          <FormDescription>
                              This is your public display name.
                          </FormDescription>
                          <FormMessage/>
                      </FormItem>
                  )}
              />

              <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                      <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                              <Input placeholder="email" type="email" {...field} />
                          </FormControl>
                          <FormDescription>This is your Email</FormDescription>
                          <FormMessage/>
                      </FormItem>
                  )}
              />

              <FormField
                  control={form.control}
                  name="password"
                  render={({field}) => (
                      <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                              <PasswordInput placeholder="*********" {...field} />
                          </FormControl>
                          <FormDescription>Enter your password.</FormDescription>
                          <FormMessage/>
                      </FormItem>
                  )}
              />

              <Button type="submit">Submit</Button>
          </form>
      </Form>
  );
}
