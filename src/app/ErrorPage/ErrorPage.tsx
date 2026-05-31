import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.png";
import TranslationKeys from "../TranslationKeys";

function ErrorPage() {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const errorCode = searchParams.get("error_code");
  const errorDescription = searchParams.get("error_description");

  const switchLang = (lng: string) => i18n.changeLanguage(lng);

  // Map error codes to user-friendly messages
  const getErrorTitle = () => {
    switch (errorCode) {
      case "otp_expired":
        return t(TranslationKeys.errorTitleOtpExpired);
      case "access_denied":
        return t(TranslationKeys.errorTitleAccessDenied);
      default:
        return t(TranslationKeys.errorTitleGeneric);
    }
  };

  const getErrorMessage = () => {
    switch (errorCode) {
      case "otp_expired":
        return t(TranslationKeys.errorMessageOtpExpired);
      case "access_denied":
        return t(TranslationKeys.errorMessageAccessDenied);
      default:
        return errorDescription || t(TranslationKeys.errorMessageGeneric);
    }
  };

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

      {/* Error content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold mb-2">{getErrorTitle()}</h1>
          </div>

          <p className="text-lg text-gray-600 mb-8">{getErrorMessage()}</p>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/")}
              className="w-full h-16 bg-primary hover:bg-secondary text-background font-bold py-3 px-4 rounded-3xl transition-colors uppercase text-lg"
            >
              {t(TranslationKeys.errorButtonHome)}
            </button>

            <p className="text-sm text-gray-500">{t(TranslationKeys.errorContact)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
