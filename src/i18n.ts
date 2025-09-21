import TranslationKeys from 'app/TranslationKeys';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            [TranslationKeys.login]: "LOG IN",
            [TranslationKeys.title]: "Let’s take care of your car",
            [TranslationKeys.subtitle]: "Your control over service, expenses and modifications",
            [TranslationKeys.comingSoon]: "coming soon",
            [TranslationKeys.features]: "Features and benefits",
            [TranslationKeys.notifications]: "NOTIFICATIONS",
            [TranslationKeys.notificationsDesc]: "Don’t let anything slip by – Carendoo will remind you about inspections, oil changes, services, and all important car-related deadlines. Stay on top of everything and avoid unexpected problems.",
            [TranslationKeys.expense]: "EXPENSE LOG",
            [TranslationKeys.expenseDesc]: "Track all your car expenses – from fuel, through service and repairs, to upgrades. Carendoo gives you full control over your budget and helps you plan costs in advance.",
            [TranslationKeys.aiSupport]: "AI SUPPORT",
            [TranslationKeys.aiSupportDesc]: "Not sure what’s wrong with your car? Carendoo helps you diagnose issues – just describe the symptoms, and our artificial intelligence will suggest possible faults and guide you on the next steps. This way, you can quickly understand what’s happening with your vehicle and take action before minor problems turn into costly repairs."
        }
    },
    pl: {
        translation: {
            [TranslationKeys.login]: "ZALOGUJ SIĘ",
            [TranslationKeys.title]: "Zadbajmy o twój samochód",
            [TranslationKeys.subtitle]: "Twoja kontrola nad serwisem wydatkami i modyfikacjami",
            [TranslationKeys.comingSoon]: "wkrótce",
            [TranslationKeys.features]: "Funkcje i korzyści",
            [TranslationKeys.notifications]: "POWIADOMIENIA",
            [TranslationKeys.notificationsDesc]: "Nie pozwól, by coś Ci umknęło – Carendoo przypomni o przeglądach, wymianie oleju, serwisach i wszystkich ważnych terminach związanych z Twoim autem. Dzięki temu zawsze będziesz na bieżąco i unikniesz niespodziewanych problemów.",
            [TranslationKeys.expense]: "DZIENNIK WYDATKÓW",
            [TranslationKeys.expenseDesc]: "Śledź wszystkie wydatki swojego samochodu – od spalania, przez serwis i naprawy, po modyfikacje. Carendoo daje Ci pełną kontrolę nad budżetem i pozwala planować koszty z wyprzedzeniem.",
            [TranslationKeys.aiSupport]: "WSPARCIE AI",
            [TranslationKeys.aiSupportDesc]: "Nie wiesz, co dolega Twojemu samochodowi? Carendoo pomoże Ci zdiagnozować problemy – wystarczy opisać objawy, a nasza sztuczna inteligencja zasugeruje możliwe usterki i podpowie kolejne kroki. Dzięki temu szybciej zrozumiesz, co dzieje się z Twoim autem i jak temu zaradzić."
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
