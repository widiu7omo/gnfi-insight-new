export default function Header() {
  return (
    <div
      className="h-screen relative bg-cover bg-[50%_30%]"
      style={{ backgroundImage: "url('assets/cats.png')" }}
    >
      <div className="absolute bg-gradient-to-b from-white/0 to-[#060609] top-0 bottom-0 left-0 right-0" />
    </div>
  );
}
