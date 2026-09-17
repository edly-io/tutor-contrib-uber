const UberFooter = () => {
  const intl = useIntl();
  const config = getConfig();

  const isDarkTheme = useIsDarkTheme();

  const uberFooterNavLinks = config.INDIGO_FOOTER_NAV_LINKS || [];

  const messages = {
    "footer.logo.altText": {
      id: "footer.logo.altText",
      defaultMessage: config.SITE_NAME,
      description: "alt text for the footer logo.",
    },
    "footer.copyright.text": {
      id: "footer.copyright.text",
      defaultMessage: `Copyrights ©${new Date().getFullYear()}. All Rights Reserved.`,
      description: "copyright text for the footer",
    },
  };

  return (
    <div className="wrapper wrapper-footer">
      <style>
        {`
          .powered-area .logo-list li {
            vertical-align: middle;
          }
          .powered-area .footer-logo {
            display: block;
            height: 24px;
            width: auto;
          }
          .powered-area .logo-list li:last-child {
            padding-left: 0;
          }
          .powered-area .logo-list li:last-child::after {
            display: none;
          }
          @media (min-width: 992px) {
            [data-paragon-theme-variant="dark"] footer.tutor-container {
              text-align: left !important;
            }
            [dir="rtl"][data-paragon-theme-variant="dark"] footer.tutor-container {
              text-align: right !important;
            }
            [data-paragon-theme-variant="dark"] footer.tutor-container .nav-colophon ol {
              text-align: right !important;
            }
            [dir="rtl"][data-paragon-theme-variant="dark"] footer.tutor-container .nav-colophon ol {
              text-align: left !important;
            }
          }
          /* Same broken-selector bug as above, this time on the header's account
             menu: the compiled "[dir] [data-paragon-theme-variant]" desktop override
             never matches, so the menu falls back to a left-anchored position and
             overflows past the right edge of the viewport in dark mode. */
          [dir="ltr"][data-paragon-theme-variant="dark"] #root header.site-header-desktop .menu .menu-content {
            right: 0 !important;
            left: auto !important;
          }
          [dir="rtl"][data-paragon-theme-variant="dark"] #root header.site-header-desktop .menu .menu-content {
            left: 0 !important;
            right: auto !important;
          }
          [dir="ltr"][data-paragon-theme-variant="dark"] #root header.site-header-mobile .menu .menu-content {
            right: 0 !important;
            left: auto !important;
          }
          [dir="rtl"][data-paragon-theme-variant="dark"] #root header.site-header-mobile .menu .menu-content {
            left: 0 !important;
            right: auto !important;
          }
        `}
      </style>
      <footer id="footer" className="tutor-container">
        <div className="footer-top">
          <div className="powered-area">
            <ul className="logo-list">
              <li>
                <a href={config.LMS_BASE_URL}>
                  <img
                    className="footer-logo"
                    src={`${config.LMS_BASE_URL}/static/indigo/images/${isDarkTheme ? 'logo-footer-white.png' : 'logo-footer.png'}`}
                    alt={intl.formatMessage(messages["footer.logo.altText"])}
                  />
                </a>
              </li>
            </ul>
          </div>
          <nav className="nav-colophon">
            <ol>
              {uberFooterNavLinks.map((link) => (
                <li key={link.url}>
                  <a href={`${link.url.startsWith("http") ? link.url : config.LMS_BASE_URL + link.url}`}>{link.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <span className="copyright-site">
          {intl.formatMessage(messages["footer.copyright.text"])}
        </span>
      </footer>
    </div>
  );
};
