import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.png";
import TranslationKeys from "../TranslationKeys";

function NotFound() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const switchLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className="h-full w-full bg-background font-poppins pt-4 px-4 sm:pt-6 sm:px-8 lg:pt-8 lg:px-32 min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="left-0 right-0 h-12 flex items-center justify-between z-50 sm:h-24">
        <img src={logo} alt="Logo" className="h-10 w-auto sm:h-24 cursor-pointer" onClick={() => navigate("/")} />
        <div className="flex items-center gap-2">
          <button className="text-sm" onClick={() => switchLang("en")}>
            EN
          </button>
          <button className="text-sm" onClick={() => switchLang("pl")}>
            PL
          </button>
        </div>
      </div>

      {/* 404 content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="mb-6">
            <div className="text-7xl font-bold mb-4 text-primary">404</div>
            <h1 className="text-3xl font-bold mb-2">{t(TranslationKeys.notFoundTitle)}</h1>
          </div>

          <p className="text-lg text-gray-400 mb-8">{t(TranslationKeys.notFoundMessage)}</p>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/")}
              className="w-full h-16 bg-primary hover:bg-secondary text-background font-bold py-3 px-4 rounded-3xl transition-colors uppercase text-lg"
            >
              {t(TranslationKeys.errorButtonHome)}
            </button>

            <p className="text-sm text-gray-500">{t(TranslationKeys.notFoundHelp)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
