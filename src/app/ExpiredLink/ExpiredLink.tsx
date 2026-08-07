import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import TranslationKeys from "../TranslationKeys";
import StoreButtons from "../../components/StoreButtons";

function ExpiredLink() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const switchLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background to-primary/10 font-poppins flex flex-col">
      {/* Top bar */}
      <div className="h-12 sm:h-24 flex items-center justify-between px-4 sm:px-8 lg:px-32 pt-4 sm:pt-6 lg:pt-8 z-50">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto sm:h-24 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center gap-2">
          <button
            className="text-sm hover:opacity-70 transition-opacity font-semibold"
            onClick={() => switchLang("en")}
          >
            EN
          </button>
          <button
            className="text-sm hover:opacity-70 transition-opacity font-semibold"
            onClick={() => switchLang("pl")}
          >
            PL
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8">
        <div className="w-full max-w-2xl flex flex-col items-center text-center">
          {/* Expired icon animation circle */}
          <div className="mb-6 sm:mb-10">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-pulse"></div>

              {/* Inner circle with clock icon */}
              <div className="absolute inset-2 bg-gradient-to-br from-amber-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-background stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 text-primary">
            {t(TranslationKeys.expiredLinkTitle)}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-secondary">
            {t(TranslationKeys.expiredLinkSubtitle)}
          </h2>

          {/* Explanation message */}
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
            {t(TranslationKeys.expiredLinkMessage)}
          </p>

          {/* Action steps container */}
          <div className="w-full max-w-md bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 mb-8 text-left shadow-sm">
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-500 mb-4">
              Co musisz zrobić?
            </h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {t(TranslationKeys.expiredLinkStep1)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {t(TranslationKeys.expiredLinkStep2)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {t(TranslationKeys.expiredLinkStep3)}
                </span>
              </li>
            </ol>
          </div>

          {/* Store Buttons */}
          <StoreButtons />

          {/* Navigation home button */}
          <button
            onClick={() => navigate("/")}
            className="mt-8 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium underline underline-offset-4 transition-colors"
          >
            {t(TranslationKeys.expiredLinkBackHome)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpiredLink;
