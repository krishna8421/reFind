import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
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
