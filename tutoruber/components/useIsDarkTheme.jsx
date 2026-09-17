function useIsDarkTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    () => document.documentElement.getAttribute('data-paragon-theme-variant') === 'dark'
  );
  useEffect(() => {
    const html = document.documentElement;
    const updateTheme = () => setIsDarkTheme(html.getAttribute('data-paragon-theme-variant') === 'dark');
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(html, { attributes: true, attributeFilter: ['data-paragon-theme-variant'] });
    return () => observer.disconnect();
  }, []);
  return isDarkTheme;
}
