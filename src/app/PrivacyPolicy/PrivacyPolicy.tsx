import { useTranslation } from 'react-i18next';
import PrivacyPolicyPL from './PrivacyPolicyPL';
import PrivacyPolicyEN from './PrivacyPolicyEN';
import logo from "../../images/logo.png"

export default function PrivacyPolicy() {
  const { i18n } = useTranslation();

  const switchLang = (lng: string) => i18n.changeLanguage(lng);

  const PolicyContent = i18n.language === 'pl' ? PrivacyPolicyPL : PrivacyPolicyEN;

  return (
    <div className="h-full w-full bg-background font-poppins pt-4 px-4 sm:pt-6 sm:px-8 lg:pt-8 lg:px-32">
      {/* Top bar */}
      <div className="left-0 right-0 h-12 flex items-center justify-between z-50 sm:h-24 mb-8">
        <img src={logo} alt="Logo" className="h-10 w-auto sm:h-24" />
        <div className="flex items-center gap-2">
          <button className="text-sm text-secondary hover:text-primary transition" onClick={() => switchLang('en')}>EN</button>
          <button className="text-sm text-secondary hover:text-primary transition" onClick={() => switchLang('pl')}>PL</button>
        </div>
      </div>

      {/* Title */}
      <div className="mb-12">
        <h1 className="text-primary">
          {i18n.language === 'pl' ? 'Polityka Prywatności' : 'Privacy Policy'}
        </h1>
        <p className="text-secondary text-sm text-center mt-2">
          {i18n.language === 'pl' 
            ? 'Ostatnia aktualizacja: 1 czerwca 2026' 
            : 'Last updated: June 1, 2026'}
        </p>
      </div>

      {/* Content */}
      <PolicyContent />
    </div>
  );
}
