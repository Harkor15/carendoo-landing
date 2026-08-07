import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import TranslationKeys from './TranslationKeys';
import logo from '../images/logo.png';
import { parseAuthErrorParams } from './utils/authError';

function Confirm() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const { errorCode, error, rawParams } = parseAuthErrorParams();

    if (errorCode === 'otp_expired') {
      navigate('/expired-link', { replace: true });
    } else if (errorCode || error) {
      navigate(`/error?${rawParams.toString()}`, { replace: true });
    }
  }, [navigate]);

  const switchLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-background via-background to-primary/10 font-poppins flex flex-col">
      {/* Top bar */}
      <div className="h-12 sm:h-24 flex items-center justify-between px-4 sm:px-8 lg:px-32 pt-4 sm:pt-6 lg:pt-8 z-50">
        <img src={logo} alt="Logo" className="h-10 w-auto sm:h-24" />
        <div className="flex items-center gap-2">
          <button className="text-sm hover:opacity-70 transition-opacity" onClick={() => switchLang('en')}>EN</button>
          <button className="text-sm hover:opacity-70 transition-opacity" onClick={() => switchLang('pl')}>PL</button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-2xl flex flex-col items-center text-center">
          {/* Success animation circle */}
          <div className="mb-8 sm:mb-12">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
              {/* Outer circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
              
              {/* Inner circle with checkmark */}
              <div className="absolute inset-2 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
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
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            {t(TranslationKeys.confirmTitle)}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-secondary">
            {t(TranslationKeys.confirmSubtitle)}
          </h2>

          {/* Message */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-lg">
            {t(TranslationKeys.confirmMessage)}
          </p>

          {/* CTA Button 
          <button
            className="h-16 w-full sm:w-96 bg-gradient-to-r from-primary to-secondary text-background rounded-2xl text-xl font-bold 
            hover:shadow-lg hover:scale-105 
            active:scale-95
            transition-all duration-300 ease-out"
            onClick={() => window.location.href = '/'}
          >
            {t(TranslationKeys.backHome)}
          </button>*/}
        </div>
      </div>
    </div>
  );
}

export default Confirm;
