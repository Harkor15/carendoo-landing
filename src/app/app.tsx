import logo from "../images/logo.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import Card from "components/Card";
import StoreButtons from "components/StoreButtons";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TranslationKeys from "./TranslationKeys";

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Check for error parameters on mount
  useEffect(() => {
    const errorCode = searchParams.get("error_code");
    const error = searchParams.get("error");

    if (errorCode || error) {
      // Redirect to error page with all parameters
      const errorParams = new URLSearchParams();
      searchParams.forEach((value, key) => {
        errorParams.append(key, value);
      });
      navigate(`/error?${errorParams.toString()}`);
    }
  }, [searchParams, navigate]);

  const switchLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className="h-full w-full bg-background font-poppins pt-4 px-4 sm:pt-6 sm:px-8 lg:pt-8 lg:px-16 xl:px-24">
      {/* Section hero */}
      <div>
        {/* Top bar */}
        <div className="left-0 right-0 h-12 flex items-center justify-between z-50 sm:h-24">
          <img src={logo} alt="Logo" className="h-10 w-auto sm:h-24" />
          <div className="flex items-center gap-2">
            <button className="text-sm font-semibold hover:text-primary transition-colors" onClick={() => switchLang("en")}>
              EN
            </button>
            <button className="text-sm font-semibold hover:text-primary transition-colors" onClick={() => switchLang("pl")}>
              PL
            </button>
          </div>
        </div>

        {/* Hero content */}
        <div className="flex items-start justify-center mt-12 sm:mt-16">
          <div className="w-full max-w-6xl">
            <div className="flex flex-col items-center w-full sm:flex-row justify-center gap-8 sm:gap-12">
              <img
                src={img1}
                alt="Carendoo Hero Illustration"
                className="w-3/4 sm:w-1/2 max-w-md h-auto object-contain"
              />
              <div className="flex items-center sm:items-start flex-col sm:w-1/2 text-center sm:text-left">
                <h1 className="text-center sm:text-left mx-2 sm:mx-0">
                  {t(TranslationKeys.title)}
                </h1>
                <h4 className="text-center sm:text-left mx-2 sm:mx-0 mt-3">
                  {t(TranslationKeys.subtitle)}
                </h4>
                <StoreButtons />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle section - Features & Benefits */}
      <div className="flex justify-center pt-20 sm:pt-28 items-center flex-col w-full max-w-6xl mx-auto pb-16">
        <h2 className="mb-8 sm:mb-12 text-center">{t(TranslationKeys.features)}</h2>
        <Card
          title={t(TranslationKeys.expense)}
          content={t(TranslationKeys.expenseDesc)}
          image={img3}
          reverseOrder={false}
        />
        <Card
          title={t(TranslationKeys.notifications)}
          content={t(TranslationKeys.notificationsDesc)}
          image={img2}
          reverseOrder={true}
        />
        <Card
          title={t(TranslationKeys.aiSupport)}
          content={t(TranslationKeys.aiSupportDesc)}
          image={img4}
          reverseOrder={false}
        />
      </div>
    </div>
  );
}

export default App;
