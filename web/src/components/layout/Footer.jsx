export function Footer({ isDark }) {
  return (
    <footer
      className={`text-center py-8 border-t ${
        isDark ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
        © 2024 TrustCheck. Empowering digital literacy and fighting
        misinformation.
      </p>
    </footer>
  );
}
