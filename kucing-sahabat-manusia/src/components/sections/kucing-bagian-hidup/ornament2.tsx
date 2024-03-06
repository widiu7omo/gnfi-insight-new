"use client";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { useEffect } from "react";

export default function Ornament2() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false });
  useEffect(() => {
    if (isInView) {
      animate(
        "path",
        { opacity: 1, pathLength: 1 },
        { delay: stagger(0.1, { startDelay: 0.11 }), duration: 0.3 }
      );
    } else {
      animate("path", { opacity: 0, pathLength: 0 });
    }
  }, [isInView, animate]);
  return (
    <div className="absolute bottom-0 z-[1] right-[15%] xl:block hidden">
      <svg
        width="252"
        height="139"
        aria-label="Ball"
        role="img"
        viewBox="0 0 252 139"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          initial={{ rotate: 10, y: -90, opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 10,
            bounce: 20,
            delay: 0,
          }}
        >
          <g>
            <path
              d="M246.958 85.9367C246.958 107.139 229.746 124.309 208.544 124.309C187.341 124.309 170.129 107.139 170.129 85.9367C170.129 64.7341 187.341 47.5225 208.544 47.5225C229.746 47.5225 246.958 64.7341 246.958 85.9367Z"
              fill="#DB7338"
            />
            <mask
              id="mask0_279_618"
              maskUnits="userSpaceOnUse"
              x="170"
              y="47"
              width="77"
              height="78"
            >
              <path
                d="M246.945 85.9243C246.945 107.135 229.75 124.33 208.544 124.33C187.333 124.33 170.138 107.135 170.138 85.9243C170.138 64.7133 187.333 47.5183 208.544 47.5183C229.75 47.5183 246.945 64.7133 246.945 85.9243Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_279_618)">
              <path
                d="M166.304 64.0273C166.304 64.0273 218.189 64.8172 242.551 123.894"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M158.364 71.8848C157.408 73.5477 208.211 76.1669 234.61 131.793"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M162.48 67.5612C161.523 69.2241 212.327 71.8433 238.726 127.469"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M152.751 78.4119C152.751 78.4119 204.636 79.2018 228.998 138.278"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M148.22 83.5255C148.261 82.9435 200.27 82.9019 224.466 143.434"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M142.566 89.3458C143.356 88.0154 196.238 87.1424 218.812 149.254"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M138.699 93.4617C139.489 92.0898 192.371 91.2583 214.946 153.328"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M217.939 87.3919C217.939 87.3919 225.714 67.8105 222.097 46.2753"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M224.092 93.7527C224.092 93.7527 232.864 77.7051 227.377 49.1023"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M229.123 99.4898C229.123 99.4898 238.394 81.4468 232.656 53.9664"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M233.114 105.435C233.114 105.435 243.008 84.0659 238.144 59.9115"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M236.398 110.715C236.398 110.715 246.002 94.2515 243.424 67.6027"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M184.348 67.4779C184.348 67.4779 197.651 49.5596 223.136 54.5069"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M191.665 70.1803C191.665 70.1803 206.008 56.4609 223.011 60.452"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M198.94 73.9219C203.513 70.6376 212.368 65.4824 222.679 66.2307"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M205.8 77.5804C209.915 75.2107 215.445 72.9241 221.639 72.5916"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </g>
          </g>
        </motion.g>
        <g ref={scope}>
          <path
            d="M77.4195 131.045C40.7097 133.622 48.4009 90.2605 64.9473 95.0415C81.4521 99.8225 59.418 142.768 25.1195 131.502C-11.2576 119.57 -2.52712 70.6792 25.1195 33.0548C48.4009 1.41711 68.1069 -5.15157 77.7936 6.15653C87.2309 17.132 77.0453 36.256 53.9302 56.8351C30.7736 77.4142 19.3823 66.7713 28.9443 58.6643C38.5063 50.599 64.5316 34.8009 64.5316 34.8009C64.5316 34.8009 97.0423 17.4646 103.86 32.4312C112.716 51.7631 75.8397 71.386 62.6607 76.8737C49.4818 82.3615 19.6733 85.6042 24.5791 71.5938C32.8107 48.1046 91.0141 41.9517 116.249 43.6146C141.526 45.2776 167.884 26.5693 162.397 14.5129C156.909 2.41489 128.347 12.3095 120.656 52.3867C112.965 92.4639 137.66 132.583 178.319 136.948C218.937 141.355 235.941 104.021 235.941 104.021"
            stroke="#DB7338"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M244.754 88.0986C244.754 88.0986 238.726 127.053 206.839 129.257C174.993 131.46 176.656 107.306 167.884 94.6673C159.071 82.0288 171.709 37.5863 213.449 48.5618"
            stroke="#DB7338"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M244.754 80.4075C244.754 80.4075 264.502 106.225 227.709 117.2C190.916 128.176 154.165 114.997 172.25 84.7728C190.376 54.5901 194.242 44.1551 212.909 42.4921C231.575 40.8707 252.446 67.769 242.551 91.9234"
            stroke="#DB7338"
            stroke-width="2"
            stroke-miterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
}
