import UserData from "./user-data";

export default function Home() {
  return (
    <div>
      {process.env.NODE_ENV}

      <UserData />
    </div>
  );
}
