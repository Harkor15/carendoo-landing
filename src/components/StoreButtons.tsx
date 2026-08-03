import React from "react";
import { useTranslation } from "react-i18next";
import TranslationKeys from "../app/TranslationKeys";

const StoreButtons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex flex-col items-center">
      {/* Store Badge Buttons Container */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4">
        {/* App Store Badge */}
        <div
          className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#091126] border border-slate-600/80 shadow-lg opacity-70 cursor-not-allowed select-none transition-all hover:opacity-80"
          title={t(TranslationKeys.comingSoon)}
        >
          <svg
            className="w-7 h-7 fill-white flex-shrink-0"
            viewBox="0 0 384 512"
            aria-hidden="true"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-14.1 69.5-34.3z" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium leading-none">
              Download on the
            </span>
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white leading-tight mt-0.5">
              App Store
            </span>
          </div>
        </div>

        {/* Google Play Badge */}
        <div
          className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#091126] border border-slate-600/80 shadow-lg opacity-70 cursor-not-allowed select-none transition-all hover:opacity-80"
          title={t(TranslationKeys.comingSoon)}
        >
          <svg
            className="w-6 h-6 flex-shrink-0"
            viewBox="134 307 164 175"
            aria-hidden="true"
          >
            <g>
              <linearGradient
                y2="434.291"
                x2="100.359"
                y1="319.454"
                x1="215.196"
                gradientUnits="userSpaceOnUse"
                id="A"
              >
                <stop offset="0" stopColor="#00a0ff" />
                <stop offset=".007" stopColor="#00a1ff" />
                <stop offset=".26" stopColor="#00beff" />
                <stop offset=".512" stopColor="#00d2ff" />
                <stop offset=".76" stopColor="#00dfff" />
                <stop offset="1" stopColor="#00e3ff" />
              </linearGradient>
              <path
                d="M137.5 311.5c-2 2.1-3.2 5.4-3.2 9.6v151.3c0 4.2 1.2 7.5 3.2 9.6l.5.5 84.8-84.8v-2L138 310.9z"
                fill="url(#A)"
              />
              <linearGradient
                y2="396.75"
                x2="132.007"
                y1="396.75"
                x1="297.578"
                gradientUnits="userSpaceOnUse"
                id="B"
              >
                <stop offset="0" stopColor="#ffe000" />
                <stop offset=".409" stopColor="#ffbd00" />
                <stop offset=".775" stopColor="orange" />
                <stop offset="1" stopColor="#ff9c00" />
              </linearGradient>
              <path
                d="M251 426l-28.2-28.3v-2l28.3-28.3.6.4 33.5 19c9.6 5.4 9.6 14.3 0 19.8l-33.5 19z"
                fill="url(#B)"
              />
              <linearGradient
                y2="568.208"
                x2="80.242"
                y1="412.481"
                x1="235.969"
                gradientUnits="userSpaceOnUse"
                id="C"
              >
                <stop offset="0" stopColor="#ff3a44" />
                <stop offset="1" stopColor="#c31162" />
              </linearGradient>
              <path
                d="M251.7 425.6l-28.9-28.9-85.3 85.3c3.1 3.3 8.4 3.8 14.2.4l100-56.8"
                fill="url(#C)"
              />
              <linearGradient
                y2="330.609"
                x2="185.559"
                y1="261.07"
                x1="116.02"
                gradientUnits="userSpaceOnUse"
                id="D"
              >
                <stop offset="0" stopColor="#32a071" />
                <stop offset=".069" stopColor="#2da771" />
                <stop offset=".476" stopColor="#15cf74" />
                <stop offset=".801" stopColor="#06e775" />
                <stop offset="1" stopColor="#00f076" />
              </linearGradient>
              <path
                d="M251.7 367.9l-100-56.8c-5.9-3.3-11.1-2.9-14.2.4l85.3 85.3z"
                fill="url(#D)"
              />
              <path
                d="M251 425l-99.3 56.4c-5.6 3.2-10.5 3-13.7.1l-.5.5.5.5c3.2 2.9 8.2 3.1 13.7-.1l100-56.8z"
                opacity=".2"
              />
              <path
                d="M137.5 481c-2-2.1-3.2-5.4-3.2-9.6v1c0 4.2 1.2 7.5 3.2 9.6l.5-.5zm147.6-75.4L251 425l.6.6 33.5-19c4.8-2.7 7.2-6.3 7.2-9.9-.4 3.3-2.8 6.4-7.2 8.9z"
                opacity=".12"
              />
              <path
                d="M151.7 312l133.4 75.8c4.3 2.5 6.8 5.6 7.2 8.9 0-3.6-2.4-7.2-7.2-9.9L151.7 311c-9.6-5.4-17.4-.9-17.4 10v1c0-10.9 7.8-15.4 17.4-10z"
                opacity=".25"
                fill="#fff"
              />
            </g>
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium leading-none">
              GET IT ON
            </span>
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white leading-tight mt-0.5">
              Google Play
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Coming Soon Badge */}
      <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-secondary/90 font-medium tracking-wide">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="capitalize">{t(TranslationKeys.comingSoon)}</span>
      </div>
    </div>
  );
};

export default StoreButtons;
