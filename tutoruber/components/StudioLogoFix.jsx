// Studio's header logo (BrandNav in @edx/frontend-component-header) is a single
// hardcoded <img class="logo">, unlike the LMS header which renders through the
// themeable `logo_slot` plugin slot. That means we can't pass it a conditional
// `src` through props like UberFooter/UberStudioFooter do — we don't own that
// DOM node. Instead we reach in and set its `src` directly, watching for both
// the theme change and the logo's own (possibly later) insertion into the DOM.
const StudioLogoFix = () => {
  const isDarkTheme = useIsDarkTheme();

  useEffect(() => {
    const applyLogoSrc = () => {
      const img = document.querySelector('.studio-header img.logo');
      if (!img) {
        return;
      }
      if (!img.dataset.originalSrc) {
        img.dataset.originalSrc = img.src;
      }
      const nextSrc = isDarkTheme
        ? img.dataset.originalSrc.replace(/logo\.png(\?.*)?$/, 'logo-white.png$1')
        : img.dataset.originalSrc;
      if (img.src !== nextSrc) {
        img.src = nextSrc;
      }
    };
    applyLogoSrc();
    const observer = new MutationObserver(applyLogoSrc);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [isDarkTheme]);

  return null;
};
