
const Footer = () => {
  return (
    <footer role="contentinfo" aria-label="Footer page" className="bg-brick-red-700 pt-6 pb-14 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 md:border-r border-white md:pr-4 lg:pr-12" aria-label="Contact information">
            <h4 className="text-sm font-bold mb-4">Need assistance?</h4>
            <a href="tel:1-800-637-4757" className="text-2xl mb-4 block" aria-label="Call 1-800-637-4757">Please Call 1-800-637-4757</a>
            <a href="tel:1-866-463-3230" className="text-base mb-4 block" aria-label="Fax 1-866-463-3230"><b>Fax</b>	1-866-463-3230</a>
            <a href="tel:1-800-237-2917" className="text-base block" aria-label="Claims 1-800-237-2917"><b>Claims</b>	1-800-237-2917</a>
            <hr className="my-6" />
            <h5 className="text-sm font-bold">Coronavirus COVID-19 Information:</h5>
            <p className="text-sm mb-5">
              To any of our customers currently facing a financial hardship, please contact us.
            </p>
            <h5 className="text-sm font-bold">NY policyholders:</h5>
            <p className="text-sm">
              Please read this Notice regarding certain rights available to affected New York policyholders as a result of the COVID‑19 pandemic.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:pl-4 lg:pl-12">
            <h4 className="text-sm font-bold mb-4">Follow us</h4>
            <ul className="flex items-center gap-2 mb-12" aria-label="Social media links">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Link to Linkedin">
                  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.79092 8.20752H0.13229V2.86638H1.79092V8.20752ZM0.960606 2.13781C0.430301 2.13781 0 1.69838 0 1.16809C0 0.913332 0.101206 0.669006 0.281355 0.488864C0.461503 0.308722 0.705837 0.20752 0.960606 0.20752C1.21537 0.20752 1.45971 0.308722 1.63986 0.488864C1.82001 0.669006 1.92121 0.913332 1.92121 1.16809C1.92121 1.69838 1.49091 2.13781 0.960606 2.13781ZM7.99857 8.20752H6.34366V5.60752C6.34366 4.98781 6.33108 4.19323 5.48134 4.19323C4.61902 4.19323 4.48673 4.86638 4.48673 5.56295V8.20752H2.82982V2.86638H4.42044V3.59495H4.44359C4.66502 3.17523 5.2059 2.73238 6.01279 2.73238C7.69142 2.73238 8 3.83781 8 5.27352V8.20752H7.99857Z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Link to Instagram">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.41667 0H5.91667C7.25 0 8.33333 1.09393 8.33333 2.44031V5.97456C8.33333 6.62177 8.07872 7.24247 7.62551 7.70012C7.1723 8.15777 6.55761 8.41487 5.91667 8.41487H2.41667C1.08333 8.41487 0 7.32094 0 5.97456V2.44031C0 1.7931 0.254612 1.1724 0.707825 0.714751C1.16104 0.257104 1.77573 0 2.41667 0ZM2.33333 0.841487C1.93551 0.841487 1.55398 1.00107 1.27267 1.28513C0.991369 1.56918 0.833333 1.95445 0.833333 2.35616V6.05871C0.833333 6.89599 1.50417 7.57339 2.33333 7.57339H6C6.39782 7.57339 6.77936 7.4138 7.06066 7.12975C7.34196 6.84569 7.5 6.46043 7.5 6.05871V2.35616C7.5 1.51888 6.82917 0.841487 6 0.841487H2.33333ZM6.35417 1.4726C6.4923 1.4726 6.62478 1.52801 6.72245 1.62664C6.82013 1.72527 6.875 1.85905 6.875 1.99853C6.875 2.13802 6.82013 2.27179 6.72245 2.37042C6.62478 2.46905 6.4923 2.52446 6.35417 2.52446C6.21603 2.52446 6.08356 2.46905 5.98588 2.37042C5.88821 2.27179 5.83333 2.13802 5.83333 1.99853C5.83333 1.85905 5.88821 1.72527 5.98588 1.62664C6.08356 1.52801 6.21603 1.4726 6.35417 1.4726ZM4.16667 2.10372C4.7192 2.10372 5.2491 2.32536 5.63981 2.71988C6.03051 3.11441 6.25 3.6495 6.25 4.20744C6.25 4.76538 6.03051 5.30047 5.63981 5.69499C5.2491 6.08951 4.7192 6.31115 4.16667 6.31115C3.61413 6.31115 3.08423 6.08951 2.69353 5.69499C2.30283 5.30047 2.08333 4.76538 2.08333 4.20744C2.08333 3.6495 2.30283 3.11441 2.69353 2.71988C3.08423 2.32536 3.61413 2.10372 4.16667 2.10372ZM4.16667 2.94521C3.83515 2.94521 3.5172 3.07819 3.28278 3.3149C3.04836 3.55162 2.91667 3.87267 2.91667 4.20744C2.91667 4.5422 3.04836 4.86325 3.28278 5.09997C3.5172 5.33668 3.83515 5.46967 4.16667 5.46967C4.49819 5.46967 4.81613 5.33668 5.05055 5.09997C5.28497 4.86325 5.41667 4.5422 5.41667 4.20744C5.41667 3.87267 5.28497 3.55162 5.05055 3.3149C4.81613 3.07819 4.49819 2.94521 4.16667 2.94521Z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Link to Facebook">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.66665 4.21793C8.66665 1.89543 6.79998 0.010498 4.49998 0.010498C2.19998 0.010498 0.333313 1.89543 0.333313 4.21793C0.333313 6.25433 1.76665 7.94993 3.66665 8.34122V5.48017H2.83331V4.21793H3.66665V3.16608C3.66665 2.35404 4.32081 1.69347 5.12498 1.69347H6.16665V2.9557H5.33331C5.10415 2.9557 4.91665 3.14504 4.91665 3.37645V4.21793H6.16665V5.48017H4.91665V8.40433C7.02081 8.19396 8.66665 6.40159 8.66665 4.21793Z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Link to Twitter">
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.09272 6.92071C2.58236 7.32083 1.99704 7.6147 1.37129 7.78499C1.30234 7.81001 1.24277 7.85566 1.20067 7.91572C1.15858 7.97579 1.13599 8.04736 1.13599 8.1207C1.13599 8.19405 1.15858 8.26562 1.20067 8.32569C1.24277 8.38575 1.30234 8.4314 1.37129 8.45642C6.31414 10.485 9.457 7.34928 8.97843 3.87071L9.77843 2.21356H8.84986C7.69272 0.792134 4.62129 0.863562 5.12843 3.89213C5.12843 3.89213 3.48557 4.18499 1.38557 2.12071C1.337 2.07275 1.27569 2.03971 1.20892 2.02552C1.14215 2.01132 1.07271 2.01656 1.00882 2.04061C0.944938 2.06466 0.889284 2.10652 0.848451 2.16122C0.807619 2.21593 0.783319 2.28119 0.77843 2.34928C0.556382 3.26203 0.667504 4.22406 1.09179 5.06216C1.51607 5.90025 2.22564 6.55933 3.09272 6.92071Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
            <hr className="mb-7" />
            <p className="text-sm mb-5">
              K&K Insurance Group, Inc. is a licensed insurance producer in all states
              (TX license #13924);
              operating in CA, NY and MI as K&K Insurance Agency (CA License #0334819)
              FATCA Notice: Please click http://www.aon.com/FATCA to obtain the appropriate W-9.
              K&K Insurance Group is a wholly owned subsidiary of Aon
            </p>
            <p className="text-sm mb-4">© 2009 K&K Insurance Group Inc.</p>
            <a href="#" className="text-sm underline" aria-label="Link to Privacy & Legal Notice">Privacy & Legal Notice</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
