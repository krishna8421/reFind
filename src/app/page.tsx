import SignIn from "./sign-in";
import UserData from "./user-data";

export default function Home() {
  return (
    <div>
      {process.env.NODE_ENV}
      <UserData />
      <SignIn />
    </div>
  );
}
