import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { GithubAuthButton, GoogleAuthButton } from "./auth-provider-buttons";

const LoginButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <LogInIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 justify-center items-center">
          <GoogleAuthButton />
          <GithubAuthButton />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginButton;
