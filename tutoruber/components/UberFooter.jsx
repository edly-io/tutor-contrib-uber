const UberFooter = () => {
  const intl = useIntl();
  const config = getConfig();

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
          .powered-area .footer-logo.logo-white {
            display: none;
          }
          [data-paragon-theme-variant="dark"] .powered-area .footer-logo {
            display: none;
          }
          [data-paragon-theme-variant="dark"] .powered-area .footer-logo.logo-white {
            display: block;
          }
          .powered-area .logo-list li:last-child {
            padding-left: 0;
          }
          .powered-area .logo-list li:last-child::after {
            display: none;
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
                    src={`${config.LMS_BASE_URL}/static/indigo/images/logo-footer.png`}
                    alt={intl.formatMessage(messages["footer.logo.altText"])}
                  />
                  <img
                    className="footer-logo logo-white"
                    src={`${config.LMS_BASE_URL}/static/indigo/images/logo-footer-white.png`}
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
