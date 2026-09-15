// Studio's header logo (BrandNav in @edx/frontend-component-header) is a single
// hardcoded <img class="logo">, unlike the LMS header which renders through the
// themeable `logo_slot` plugin slot. That means indigo's ThemedLogo dark/light
// image swap never reaches Studio, so the light-mode (dark) logo stays visible
// and unreadable on the dark background. Since our logo is a solid wordmark on
// a transparent background, inverting its colors in dark mode is a cheap,
// widget-free way to get a readable light-colored logo without a second image.
const StudioLogoFix = () => (
  <style>
    {`
      [data-paragon-theme-variant="dark"] .studio-header img.logo {
        filter: invert(1);
      }
    `}
  </style>
);
