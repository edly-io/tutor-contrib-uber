const UberStudioFooterHelpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 17h-2v-2h2v2Zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25Z" fill="currentColor" />
  </svg>
);

const UberStudioFooterChevronIcon = ({ isOpen }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
    {isOpen
      ? <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" fill="currentColor" />
      : <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="currentColor" />}
  </svg>
);

const UberStudioFooterHelp = () => {
  const config = getConfig();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="m-0 mt-6 row align-items-center justify-content-center">
        <div className="col border-top mr-2" />
        <button
          type="button"
          className="btn btn-outline-primary btn-sm d-inline-flex align-items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <UberStudioFooterHelpIcon />
          {isOpen ? 'Hide Studio help' : 'Looking for help with Studio?'}
          <UberStudioFooterChevronIcon isOpen={isOpen} />
        </button>
        <div className="col border-top ml-2" />
      </div>
      {isOpen && (
        <div className="container-xl px-4 pt-3 d-flex flex-wrap justify-content-center">
          <a
            className="btn btn-primary btn-sm mx-1"
            href="https://docs.openedx.org/en/latest/educators/quickstarts/build_a_course.html"
            target="_blank"
            rel="noreferrer"
          >
            Open edX Educators Docs
          </a>
          <a
            className="btn btn-primary btn-sm mx-1"
            href="https://training.openedx.io/courses/course-v1:OpenedX+DemoX+Demo_Course/about"
            target="_blank"
            rel="noreferrer"
          >
            Open edX Demo Course
          </a>
          {config.SUPPORT_EMAIL && (
            <a className="btn btn-primary btn-sm mx-1" href={`mailto:${config.SUPPORT_EMAIL}`}>
              Contact us
            </a>
          )}
        </div>
      )}
    </>
  );
};

const UberStudioFooter = () => {
  const config = getConfig();

  return (
    <div className="container-xl px-4">
      <style>
        {`
          .studio-footer-logo.logo-white {
            display: none;
          }
          [data-paragon-theme-variant="dark"] .studio-footer-logo {
            display: none;
          }
          [data-paragon-theme-variant="dark"] .studio-footer-logo.logo-white {
            display: inline;
          }
        `}
      </style>
      <UberStudioFooterHelp />
      <div className="pt-3 x-small d-flex flex-wrap justify-content-between">
        <span>
          {'© '}
          {new Date().getFullYear()}
          {' '}
          <a className="ml-2" href={config.MARKETING_SITE_BASE_URL} target="_blank" rel="noreferrer">
            {config.SITE_NAME}
          </a>
        </span>
        <span>
          {config.TERMS_OF_SERVICE_URL && (
            <a className="ml-2" href={config.TERMS_OF_SERVICE_URL}>Terms of Service</a>
          )}
          {config.PRIVACY_POLICY_URL && (
            <a className="ml-2" href={config.PRIVACY_POLICY_URL}>Privacy Policy</a>
          )}
          {config.ENABLE_ACCESSIBILITY_PAGE === 'true' && (
            <a className="ml-2" href={`${config.STUDIO_BASE_URL}/accessibility`}>Accessibility Request</a>
          )}
          <a className="ml-2" href={config.LMS_BASE_URL}>LMS</a>
        </span>
      </div>
      <div className="pt-3 pb-4 x-small d-flex justify-content-end">
        <a href={config.LMS_BASE_URL}>
          <img
            className="studio-footer-logo"
            width="120px"
            alt={config.SITE_NAME}
            src={`${config.LMS_BASE_URL}/static/indigo/images/logo-footer.png`}
          />
          <img
            className="studio-footer-logo logo-white"
            width="120px"
            alt={config.SITE_NAME}
            src={`${config.LMS_BASE_URL}/static/indigo/images/logo-footer-white.png`}
          />
        </a>
      </div>
    </div>
  );
};
