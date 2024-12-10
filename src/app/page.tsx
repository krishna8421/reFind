import ThemeSwitcher from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4">
      <span>init</span>
      <ThemeSwitcher />
    </div>
  );
}
