export default function CurvedTriangle() {
  return (
    <svg
      className="w-full max-w-screen aspect-[430/80] lg:aspect-[430/40] xl:aspect-[430/20]"
      viewBox="0 0 430 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M430 0H0V80H0.15625C2.21844 63.5367 24.5899 47.8777 62.9717 36.1846C103.292 23.9009 157.978 17 215 17C272.022 17 326.708 23.9009 367.028 36.1846C405.41 47.8777 427.782 63.5367 429.844 80H430V0Z"
        fill="var(--primary)"
      />
    </svg>
  );
}
