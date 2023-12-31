

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://www.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <p>Paranoid_K &copy; {new Date().getFullYear()}</p>
        <img src="/netlify.svg" alt="Netlify Logo" className="h-4 ml-2" />
      </a>
    </footer>
  );
}