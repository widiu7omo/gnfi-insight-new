type HeaderType = {
  title: string;
  coverImage: string;
  className?: string;
};
export default function Header({ title, coverImage, className }: HeaderType) {
  return (
    <div
      className={`h-[600px] bg-center bg-cover flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%),url(${coverImage})`,
      }}
    >
      <h2 className="text-5xl font-bold text-white max-w-5xl text-center leading-snug">
        {title}
      </h2>
    </div>
  );
}
