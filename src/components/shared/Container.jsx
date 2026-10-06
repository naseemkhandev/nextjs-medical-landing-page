export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-350 px-5 sm:px-7 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}