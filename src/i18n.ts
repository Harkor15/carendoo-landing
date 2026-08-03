import TranslationKeys from 'app/TranslationKeys';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            [TranslationKeys.login]: "LOG IN",
            [TranslationKeys.title]: "Let's take care of your car",
            [TranslationKeys.subtitle]: "Track expenses, log mileage, and never miss a service.",
            [TranslationKeys.comingSoon]: "coming soon",
            [TranslationKeys.features]: "Features and benefits",
            [TranslationKeys.notifications]: "NOTIFICATIONS",
            [TranslationKeys.notificationsDesc]: "Don't let anything slip by – Carendoo will remind you about inspections, oil changes, services, and all important car-related deadlines. Stay on top of everything and avoid unexpected problems.",
            [TranslationKeys.expense]: "EXPENSE LOG",
            [TranslationKeys.expenseDesc]: "Track all your car expenses – from fuel, through service and repairs, to upgrades. Carendoo gives you full control over your budget and helps you plan costs in advance.",
            [TranslationKeys.aiSupport]: "AI SUPPORT (COMING SOON)",
            [TranslationKeys.aiSupportDesc]: "Not sure what's wrong with your car? In the future, Carendoo will help you diagnose issues – just describe the symptoms, and artificial intelligence will suggest possible faults and guide you on the next steps. We are working to help you understand what's happening with your car even faster.",
            [TranslationKeys.confirmTitle]: "Email Confirmed!",
            [TranslationKeys.confirmSubtitle]: "Welcome to Carendoo",
            [TranslationKeys.confirmMessage]: "Thank you for confirming your email address. Your account is now fully activated and ready to use. Start taking care of your vehicle with Carendoo today!",
            [TranslationKeys.privacyPolicyTitle]: "Privacy Policy",
            [TranslationKeys.errorTitleOtpExpired]: "Link Expired",
            [TranslationKeys.errorTitleAccessDenied]: "Access Denied",
            [TranslationKeys.errorTitleGeneric]: "Something went wrong",
            [TranslationKeys.errorMessageOtpExpired]: "The confirmation link has expired or is invalid. Please try registering or resetting your password again.",
            [TranslationKeys.errorMessageAccessDenied]: "You don't have access to this operation. If you believe this is an error, please contact us.",
            [TranslationKeys.errorMessageGeneric]: "Please try again or contact our support team.",
            [TranslationKeys.errorButtonHome]: "Back to home page",
            [TranslationKeys.errorContact]: "If the problem persists, please contact our support team at contact@carendoo.com.",
            [TranslationKeys.notFoundTitle]: "Page Not Found",
            [TranslationKeys.notFoundMessage]: "The page you're looking for doesn't exist. It may have been moved or deleted.",
            [TranslationKeys.notFoundHelp]: "If you believe this is a mistake, please contact our support team.",
            [TranslationKeys.deleteTitle]: "Request to delete account and data in Carendoo",
            [TranslationKeys.deleteInAppHeading]: "Method 1 — delete from the app",
            [TranslationKeys.deleteInAppBody]: "The easiest way is to delete your account from the app: Settings → Delete account.",
            [TranslationKeys.deleteEmailHeading]: "Method 2 — email request (if you cannot use the app)",
            [TranslationKeys.deleteEmailDescription]: "Send an email to:",
            [TranslationKeys.deleteEmailAddress]: "contact@carendoo.com",
            [TranslationKeys.deleteEmailNote]: "IMPORTANT: You must send the email from the same address you used to register in the app. Put \"Request to delete account\" in the subject or body of the message.",
            [TranslationKeys.deleteMailSubject]: "Request to delete account",
            [TranslationKeys.deleteWhatWeDeleteHeading]: "What we delete",
            [TranslationKeys.deleteWhatWeDeleteBody]: "After receiving your request we will permanently delete your account and all personal data associated with it (including activity history, profile and saved settings).",
            [TranslationKeys.deleteTimeframeHeading]: "Processing time",
            [TranslationKeys.deleteTimeframeBody]: "The deletion process will be completed within 14 days of receiving the request.",
            [TranslationKeys.deleteExtra]: "We may request additional identity verification if necessary before completing deletion.",
            [TranslationKeys.deleteEmailButton]: "Send deletion request by email",
        }
    },
    pl: {
        translation: {
            [TranslationKeys.login]: "ZALOGUJ SIĘ",
            [TranslationKeys.title]: "Zadbajmy o Twój samochód",
            [TranslationKeys.subtitle]: "Przypomnimy o serwisie, podliczymy wydatki i zmierzymy spalanie.",
            [TranslationKeys.comingSoon]: "wkrótce",
            [TranslationKeys.features]: "Funkcje i korzyści",
            [TranslationKeys.notifications]: "POWIADOMIENIA",
            [TranslationKeys.notificationsDesc]: "Nie pozwól, by coś Ci umknęło – Carendoo przypomni o przeglądach, wymianie oleju, serwisach i wszystkich ważnych terminach związanych z Twoim autem. Dzięki temu zawsze będziesz na bieżąco i unikniesz niespodziewanych problemów.",
            [TranslationKeys.expense]: "DZIENNIK WYDATKÓW",
            [TranslationKeys.expenseDesc]: "Śledź wszystkie wydatki swojego samochodu – od spalania, przez serwis i naprawy, po modyfikacje. Carendoo daje Ci pełną kontrolę nad budżetem i pozwala planować koszty z wyprzedzeniem.",
            [TranslationKeys.aiSupport]: "WSPARCIE AI (WKRÓTCE)",
            [TranslationKeys.aiSupportDesc]: "Nie wiesz, co dolega Twojemu samochodowi? W przyszłości Carendoo pomoże Ci zdiagnozować problemy – wystarczy, że opiszesz objawy, a sztuczna inteligencja zasugeruje możliwe usterki i podpowie kolejne kroki. Pracujemy nad tym, abyś jeszcze szybciej zrozumiał, co dzieje się z Twoim autem.",
            [TranslationKeys.confirmTitle]: "Email potwierdzony!",
            [TranslationKeys.confirmSubtitle]: "Witaj w Carendoo",
            [TranslationKeys.confirmMessage]: "Dziękujemy za potwierdzenie adresu e-mail. Twoje konto jest teraz w pełni aktywne i gotowe do użytku. Zacznij dbać o swój pojazd z Carendoo już dzisiaj!",
            [TranslationKeys.privacyPolicyTitle]: "Polityka Prywatności",
            [TranslationKeys.errorTitleOtpExpired]: "Link wygasł",
            [TranslationKeys.errorTitleAccessDenied]: "Dostęp odmówiony",
            [TranslationKeys.errorTitleGeneric]: "Coś poszło nie tak",
            [TranslationKeys.errorMessageOtpExpired]: "Link potwierdzający wygasł lub jest nieprawidłowy. Spróbuj ponownie zarejestrować się lub zresetować hasło.",
            [TranslationKeys.errorMessageAccessDenied]: "Nie masz dostępu do tej operacji. Jeśli uważasz, że to błąd, skontaktuj się z nami.",
            [TranslationKeys.errorMessageGeneric]: "Spróbuj ponownie lub skontaktuj się z naszym wsparciem.",
            [TranslationKeys.errorButtonHome]: "Wróć na stronę główną",
            [TranslationKeys.errorContact]: "Jeśli problem się powtarza, skontaktuj się z naszym wsparciem na contact@carendoo.com.",
            [TranslationKeys.notFoundTitle]: "Strona nie znaleziona",
            [TranslationKeys.notFoundMessage]: "Strona, której szukasz, nie istnieje. Może została przeniesiona lub usunięta.",
            [TranslationKeys.notFoundHelp]: "Jeśli uważasz, że to błąd, skontaktuj się z naszym wsparciem.",
            [TranslationKeys.deleteTitle]: "Żądanie usunięcia konta i danych w aplikacji Carendoo",
            [TranslationKeys.deleteInAppHeading]: "Sposób 1 — usuń konto w aplikacji",
            [TranslationKeys.deleteInAppBody]: "Najprościej usunąć konto bezpośrednio w aplikacji: Ustawienia → Usuń konto.",
            [TranslationKeys.deleteEmailHeading]: "Sposób 2 — zgłoszenie mailowe (jeśli nie możesz użyć aplikacji)",
            [TranslationKeys.deleteEmailDescription]: "Wyślij wiadomość na adres:",
            [TranslationKeys.deleteEmailAddress]: "contact@carendoo.com",
            [TranslationKeys.deleteEmailNote]: "WAŻNE: Email musi zostać wysłany z tego samego adresu e-mail, na który masz założone konto w aplikacji. W temacie lub treści wiadomości napisz: \"Prośba o usunięcie konta\".",
            [TranslationKeys.deleteMailSubject]: "Prośba o usunięcie konta",
            [TranslationKeys.deleteWhatWeDeleteHeading]: "Co dokładnie usuwamy",
            [TranslationKeys.deleteWhatWeDeleteBody]: "Po otrzymaniu zgłoszenia trwale usuniemy Twoje konto oraz wszelkie powiązane z nim dane osobowe (w tym historię aktywności, profil i zapisane ustawienia).",
            [TranslationKeys.deleteTimeframeHeading]: "Czas realizacji",
            [TranslationKeys.deleteTimeframeBody]: "Proces usuwania danych zostanie zakończony w ciągu 14 dni od otrzymania wiadomości.",
            [TranslationKeys.deleteExtra]: "W razie potrzeby możemy poprosić o dodatkową weryfikację tożsamości przed usunięciem danych.",
            [TranslationKeys.deleteEmailButton]: "Wyślij żądanie e‑mailem",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;
