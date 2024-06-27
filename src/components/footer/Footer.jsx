import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <footer
      className="body-font"
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#135D66" }}
    >
      {/* Left Content  */}
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        {/* Blog Logo  */}
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* logo  */}
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png"
            alt="logo"
          />
          {/* logo text  */}
          <span className="ml-3 text-xl text-white">Uddeshya</span>
        </div>

        {/* items  */}
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024Uddeshya —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Uddeshya
          </a>
        </p>

        {/* Right item  */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* Icon 1  */}
          {/* <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a> */}

          <a
            href="https://github.com/Uddeshya0323"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12.5c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.25.82-.58 0-.29-.01-1.04-.01-2.05-3.34.72-4.05-1.61-4.05-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.81 2.77 1.29 3.45.99.1-.77.42-1.29.76-1.59-2.66-.3-5.46-1.34-5.46-5.97 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.95-.26 1.98-.38 3-.39 1.02.01 2.05.13 3 .39 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.64-2.8 5.67-5.46 5.97.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.82.57C20.56 22.3 24 17.8 24 12.5 24 5.73 18.27.5 12 .5z" />
            </svg>
          </a>

          {/* Icon 3  */}
          <a
            href="https://www.instagram.com/uddeshya0323?igsh=MTYzYzlzem8weHZqdA%3D%3D&utm_source=qr"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>

          {/* Icon 4  */}
          <a
            href="https://www.linkedin.com/in/uddeshya-patel-a247611b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
