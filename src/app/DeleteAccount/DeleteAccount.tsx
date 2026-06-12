import { useTranslation } from "react-i18next";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import TranslationKeys from "../TranslationKeys";

export default function DeleteAccount() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const switchLang = (lng: string) => i18n.changeLanguage(lng);

  const mailto = `mailto:${t(TranslationKeys.deleteEmailAddress)}?subject=${encodeURIComponent(
    t(TranslationKeys.deleteMailSubject)
  )}`;

  return (
    <div className="h-full w-full bg-background font-poppins pt-4 px-4 sm:pt-6 sm:px-8 lg:pt-8 lg:px-32 min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="left-0 right-0 h-12 flex items-center justify-between z-50 sm:h-24 mb-8">
        <img src={logo} alt="Logo" className="h-10 w-auto sm:h-24 cursor-pointer" onClick={() => navigate("/")} />
        <div className="flex items-center gap-2">
          <button className="text-sm text-secondary hover:text-primary transition" onClick={() => switchLang("en")}>
            EN
          </button>
          <button className="text-sm text-secondary hover:text-primary transition" onClick={() => switchLang("pl")}>
            PL
          </button>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-primary text-2xl font-bold">{t(TranslationKeys.deleteTitle)}</h1>
          </div>

          <section className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">{t(TranslationKeys.deleteInAppHeading)}</h2>
            <p className="text-sm text-secondary mb-10">{t(TranslationKeys.deleteInAppBody)}</p>

            <h2 className="text-lg font-semibold mb-2">{t(TranslationKeys.deleteEmailHeading)}</h2>
            <p className="text-lg mb-2">
              {t(TranslationKeys.deleteEmailDescription)}{" "}

                <a href={`mailto:${t(TranslationKeys.deleteEmailAddress)}`}>
                  {t(TranslationKeys.deleteEmailAddress)}
                </a>
             
            
            </p>
            <p className="text-sm text-secondary whitespace-pre-line">{t(TranslationKeys.deleteEmailNote)}</p>

            {/* <div className="mt-4">
              <a
                href={mailto}
                className="inline-block bg-primary hover:bg-secondary text-background font-bold py-3 px-4 rounded-3xl transition-colors"
              >
        {t(TranslationKeys.deleteEmailButton)}
              </a>
            </div> */}

      <h3 className="text-base font-semibold mt-10">{t(TranslationKeys.deleteWhatWeDeleteHeading)}</h3>
      <p className="text-sm text-secondary">{t(TranslationKeys.deleteWhatWeDeleteBody)}</p>

      <h3 className="text-lg font-semibold mt-10">{t(TranslationKeys.deleteTimeframeHeading)}</h3>
      <p className="text-sm text-secondary">{t(TranslationKeys.deleteTimeframeBody)}</p>

      <p className="text-lg text-muted mt-4">{t(TranslationKeys.deleteExtra)}</p>
          </section>
        </div>
      </main>
    </div>
  );
}
