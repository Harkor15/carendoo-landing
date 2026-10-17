export default function PrivacyPolicyPL() {
  return (
    <div className="max-w-4xl mx-auto mb-16 space-y-8 text-secondary">
      {/* Introduction */}
      <section className="space-y-4">
        <p className="leading-relaxed">
          Niniejsza Polityka Prywatności opisuje nasze zasady i procedury dotyczące zbierania, wykorzystywania i ujawniania Twoich informacji podczas korzystania z Usługi, a także informuje Cię o Twoich prawach do prywatności i o tym, jak prawo Cię chroni.
        </p>
        <p className="leading-relaxed">
          Wykorzystujemy Twoje Dane Osobowe w celu świadczenia i ulepszania Usługi. Korzystając z Usługi, zgadzasz się na zbieranie i wykorzystywanie informacji zgodnie z niniejszą Polityką Prywatności.
        </p>
      </section>

      {/* Interpretation and Definitions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Interpretacja i Definicje</h2>
        
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Interpretacja</h3>
          <p className="leading-relaxed">
            Słowa, których pierwsza litera jest wielka, mają znaczenie zdefiniowane w poniższych warunkach. Poniższe definicje mają takie samo znaczenie niezależnie od tego, czy występują w liczbie pojedynczej, czy w liczbie mnogiej.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Definicje</h3>
          <p className="leading-relaxed mb-4">Na potrzeby niniejszej Polityki Prywatności:</p>
          <ul className="space-y-3 ml-4 list-disc">
            <li className="leading-relaxed"><strong>Konto</strong> oznacza unikalne konto utworzone dla Ciebie w celu uzyskania dostępu do naszej Usługi lub jej części.</li>
            <li className="leading-relaxed"><strong>Podmiot Powiązany</strong> oznacza podmiot, który kontroluje, jest kontrolowany przez lub znajduje się pod wspólną kontrolą z daną stroną, gdzie „kontrola" oznacza własność 50% lub więcej akcji, udziałów lub innych papierów wartościowych uprawniających do głosowania w wyborach dyrektorów lub innych organów zarządzających.</li>
            <li className="leading-relaxed"><strong>Aplikacja</strong> oznacza Carendoo, program komputerowy (oprogramowanie) dostarczany przez Firmę.</li>
            <li className="leading-relaxed"><strong>Firma</strong> (określana w niniejszej Polityce Prywatności jako „Firma", „My", „Nas" lub „Nasze") odnosi się do osoby fizycznej będącej twórcą i niezależnym deweloperem Aplikacji Carendoo.</li>
            <li className="leading-relaxed"><strong>Kraj</strong> odnosi się do: Polska</li>
            <li className="leading-relaxed"><strong>Urządzenie</strong> oznacza każde urządzenie, które ma dostęp do Usługi, takie jak komputer, telefon komórkowy lub tablet.</li>
            <li className="leading-relaxed"><strong>Dane Osobowe</strong> (lub „Informacje Osobiste") to wszelkie informacje, które odnoszą się do zidentyfikowanej lub możliwej do zidentyfikowania osoby fizycznej.</li>
            <li className="leading-relaxed"><strong>Usługa</strong> odnosi się do Aplikacji.</li>
            <li className="leading-relaxed"><strong>Dostawca Usług</strong> oznacza każdą osobę fizyczną lub prawną, która przetwarza dane w imieniu Firmy. Odnosi się to do zewnętrznych firm lub osób trzecich zatrudnionych przez Firmę w celu ułatwienia świadczenia Usługi, świadczenia Usługi w imieniu Firmy, wykonywania usług związanych z Usługą lub pomagania Firmie w analizowaniu sposobu korzystania z Usługi.</li>
            <li className="leading-relaxed"><strong>Dane Eksploatacyjne</strong> (Usage Data) odnoszą się do danych zbieranych automatycznie, generowanych podczas korzystania z Usługi lub z samej infrastruktury Usługi (na przykład czas trwania wizyty na stronie).</li>
            <li className="leading-relaxed"><strong>Użytkownik</strong> (Ty) oznacza osobę fizyczną uzyskującą dostęp do Usługi lub korzystającą z niej, bądź firmę lub inny podmiot prawny, w imieniu którego taka osoba uzyskuje dostęp do Usługi lub z niej korzysta, w zależności od przypadku.</li>
          </ul>
        </div>
      </section>

      {/* Collecting and Using Your Personal Data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Zbieranie i Wykorzystywanie Twoich Danych Osobowych</h2>
        
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Rodzaje Zbieranych Danych</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-primary mb-3">Dane Wprowadzane Przez Użytkownika</h4>
            <p className="leading-relaxed mb-3">
              Podczas korzystania z naszej Usługi Użytkownik może wprowadzać do Aplikacji dane służące do ewidencji eksploatacji pojazdu:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="leading-relaxed"><strong>Dane konta:</strong> adres e-mail (niezbędny do rejestracji, uwierzytelniania i synchronizacji danych w chmurze).</li>
              <li className="leading-relaxed"><strong>Dane pojazdu:</strong> własna, dowolnie zdefiniowana przez Użytkownika nazwa pojazdu (np. pseudonim auta). Aplikacja nie wymaga i nie zbiera numerów rejestracyjnych ani numeru VIN.</li>
              <li className="leading-relaxed"><strong>Dane tankowań i przebiegu:</strong> stan licznika (przebieg pojazdu), data i godzina wpisu, rodzaj i ilość zatankowanego paliwa (w litrach), cena za litr, łączny koszt tankowania, nazwa lub stacja paliw oraz opcjonalne notatki własne.</li>
              <li className="leading-relaxed"><strong>Notatki o wydatkach:</strong> luźne notatki i wpisy wprowadzane przez Użytkownika dotyczące bieżących kosztów utrzymania auta (np. myjnia, serwis, zakup płynów, opłaty drogowe).</li>
              <li className="leading-relaxed"><strong>Zdjęcia paragonów:</strong> zdjęcia paragonów za paliwo lub usługi, wykonywane za pomocą aparatu Urządzenia bądź wybierane z galerii, w celu automatycznego odczytania danych przez AI lub dołączenia do historii wpisów.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-primary mb-3">Dane Eksploatacyjne (Usage Data)</h4>
            <p className="leading-relaxed mb-3">
              Dane Eksploatacyjne są zbierane automatycznie podczas korzystania z Usługi.
            </p>
            <p className="leading-relaxed mb-3">
              Mogą one obejmować takie informacje jak adres protokołu internetowego Twojego Urządzenia (np. adres IP), typ przeglądarki, jej wersja, strony naszej Usługi, które odwiedzasz, czas i data wizyty, czas spędzony na tych stronach, unikalne identyfikatory urządzeń oraz inne dane diagnostyczne.
            </p>
            <p className="leading-relaxed">
              W przypadku dostępu do Usługi za pośrednictwem urządzenia mobilnego, możemy automatycznie zbierać pewne informacje, w tym m.in. typ używanego urządzenia mobilnego, unikalny identyfikator urządzenia mobilnego, adres IP urządzenia mobilnego, system operacyjny urządzenia mobilnego, typ używanej mobilnej przeglądarki internetowej, unikalne identyfikatory urządzeń oraz inne dane diagnostyczne.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-3">Informacje Zbierane Podczas Korzystania z Aplikacji</h4>
            <p className="leading-relaxed mb-3">
              Podczas korzystania z naszej Aplikacji, w celu zapewnienia jej funkcji, możemy za Twoją uprzednią zgodą zbierać:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-3">
              <li className="leading-relaxed">Informacje dotyczące Twojej lokalizacji</li>
              <li className="leading-relaxed">Zdjęcia i inne informacje z aparatu fotograficznego i biblioteki zdjęć Twojego Urządzenia</li>
            </ul>
            <p className="leading-relaxed">
              Używamy tych informacji w celu świadczenia funkcji naszej Usługi, a także jej ulepszania i dostosowywania do Twoich potrzeb. Informacje te mogą być bezpiecznie przesyłane do infrastruktury serwerowej zarządzanej przez naszych Dostawców Usług lub mogą być po prostu przechowywane lokalnie na Twoim Urządzeniu. Możesz włączyć lub wyłączyć dostęp do tych informacji w dowolnym momencie w ustawieniach swojego Urządzenia.
            </p>
          </div>
        </div>
      </section>

      {/* Use of Your Personal Data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Cele Przetwarzania Danych Osobowych</h2>
        <p className="leading-relaxed mb-4">Firma może wykorzystywać Dane Osobowe w następujących celach:</p>
        <ul className="space-y-3 ml-4">
          <li className="leading-relaxed"><strong>W celu świadczenia i utrzymania naszej Usługi</strong>, w tym do monitorowania korzystania z naszej Usługi.</li>
          <li className="leading-relaxed"><strong>W celu zarządzania Twoim Kontem</strong>: zarządzanie Twoją rejestracją jako użytkownika Usługi. Podane Dane Osobowe mogą dać Ci dostęp do różnych funkcji Usługi, które są dostępne dla Ciebie jako zarejestrowanego użytkownika.</li>
          <li className="leading-relaxed"><strong>W celu realizacji umowy</strong>: rozwój, znoszenie i realizacja umowy zakupu produktów, przedmiotów lub usług, które zakupiłeś (takich jak subskrypcje premium lub dodatkowe funkcje), lub jakiejkolwiek innej umowy z Nami zawartej za pośrednictwem Usługi.</li>
          <li className="leading-relaxed"><strong>W celu kontaktu z Tobą</strong>: Kontaktowanie się z Tobą drogą mailową w sprawie aktualizacji lub komunikatów informacyjnych związanych z funkcjonalnościami, produktami lub zamówionymi usługami, w tym aktualizacji bezpieczeństwa, gdy jest to konieczne lub uzasadnione.</li>
          <li className="leading-relaxed"><strong>W celu obsługi Twoich zgłoszeń</strong>: Obsługa i zarządzanie Twoimi prośbami przesyłanymi do Nas.</li>
          <li className="leading-relaxed"><strong>W celu automatycznego odczytu paragonów przez AI</strong>: Bezpieczne przetwarzanie zdjęć paragonów za pośrednictwem zewnętrznych modeli sztucznej inteligencji (m.in. Google / Groq) wyłącznie w celu ekstrakcji danych transakcji i ułatwienia wprowadzania wpisów tankowań.</li>
          <li className="leading-relaxed"><strong>W celu wyświetlania reklam i pomiaru ich skuteczności</strong>: Dostarczanie spersonalizowanych lub kontekstowych reklam za pośrednictwem zewnętrznych sieci reklamowych (Unity Ads), badanie skuteczności kampanii reklamowych oraz przeciwdziałanie nadużyciom (fraud prevention).</li>
          <li className="leading-relaxed"><strong>W innych celach</strong>: Możemy wykorzystywać Twoje informacje do analizy danych, identyfikowania trendów użytkowania oraz oceny i ulepszania naszej Usługi, produktów, marketingu i Twoich doświadczeń jako użytkownika.</li>
        </ul>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-primary mb-3">Podstawy Prawne Przetwarzania (RODO)</h3>
          <p className="leading-relaxed mb-3">
            Twoje dane przetwarzamy w oparciu o obowiązujące przepisy RODO (Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679):
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="leading-relaxed">
              <strong>Realizacja usługi (art. 6 ust. 1 lit. b RODO):</strong> prowadzenie konta Użytkownika, zapis historii tankowań, przebiegu i notatek, a także generowanie statystyk pojazdu.
            </li>
            <li className="leading-relaxed">
              <strong>Zgoda Użytkownika (art. 6 ust. 1 lit. a RODO):</strong> dobrowolne zezwolenie na dostęp do aparatu/galerii i przesyłanie zdjęć paragonów do analizy przez modele AI. Zgodę można cofnąć w dowolnym momencie w ustawieniach Urządzenia.
            </li>
            <li className="leading-relaxed">
              <strong>Prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO):</strong> monitorowanie stabilności i analiza awarii (Sentry), ochrona przed nadużyciami reklamowymi (Unity Ads) oraz obrona przed ewentualnymi roszczeniami prawnymi.
            </li>
          </ul>
        </div>
      </section>

      {/* Sharing and Storage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Udostępnianie i Przechowywanie Twoich Danych Osobowych</h2>
        <p className="leading-relaxed mb-4">
          Udostępniamy i przetwarzamy Twoje Dane Osobowe wyłącznie z zaufanymi usługami firm trzecich, które są niezbędne do prawidłowego działania Aplikacji. Możemy ujawnić Twoje informacje w następujących sytuacjach:
        </p>
        <ul className="space-y-4 ml-4">
          <li className="leading-relaxed">
            <strong>Z dostawcami infrastruktury chmurowej i baz danych (Supabase)</strong>: Używamy platformy Supabase (Supabase Inc.) jako głównego dostawcy zaplecza (backendu) i baz danych. Twoje dane konta oraz dane aplikacji są bezpiecznie przechowywane na ich serwerach.
          </li>
          <li className="leading-relaxed">
            <strong>Z zewnętrznymi dostawcami modeli Sztucznej Inteligencji (Google, Groq)</strong>: W przypadku korzystania z inteligentnego skanowania paragonów zdjęcia są przesyłane za pośrednictwem szyfrowanych połączeń API do dostawców modeli AI wyłącznie w celu odczytu parametrów transakcji. Dane te nie są wykorzystywane do trenowania modeli publicznych.
          </li>
          <li className="leading-relaxed">
            <strong>Z dostawcami diagnostyki i analizy awarii (Sentry)</strong>: Używamy narzędzia Sentry (Functional Software, Inc.) do monitorowania błędów w aplikacji. Sentry może zbierać ograniczone dane diagnostyczne urządzenia i logi awarii w momencie wystąpienia błędu, aby pomóc nam w utrzymaniu stabilności oprogramowania.
          </li>
          <li className="leading-relaxed">
            <strong>W celu przetwarzania płatności (Zakupy w aplikacji)</strong>: Wszystkie transakcje finansowe, subskrypcje premium lub zakupy cyfrowe są obsługiwane bezpośrednio i bezpiecznie przez Apple App Store lub Google Play Store. Nie zbieramy, nie przechowujemy ani nie mamy dostępu do danych Twojej karty płatniczej, numeru konta bankowego ani danych bilingowych.
          </li>
          <li className="leading-relaxed">
            <strong>Z zewnętrznymi sieciami reklamowymi (Unity Ads)</strong>: Korzystamy z zewnętrznej sieci reklamowej Unity Ads do wyświetlania reklam w Aplikacji. Szczegółowe informacje dotyczące przetwarzania danych w celach reklamowych oraz opcji rezygnacji znajdują się w poniższej sekcji dedykowanej reklamom.
          </li>
          <li className="leading-relaxed">
            <strong>Za Twoją zgodą</strong>: Możemy ujawnić Twoje Dane Osobowe w każdym innym celu za Twoją wyraźną zgodą.
          </li>
          <li className="leading-relaxed">
            <strong>Wymogi prawne i organy ścigania</strong>: W pewnych okolicznościach Firma może być zobowiązana do ujawnienia Twoich Danych Osobowych, jeśli wymaga tego prawo lub w odpowiedzi na ważne żądania władz publicznych (np. sądu lub organu rządowego).
          </li>
        </ul>
      </section>

      {/* Advertising and Third-Party Services */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Reklamy i Zewnętrzne Usługi Reklamowe (Unity Ads)</h2>
        <p className="leading-relaxed">
          W celu zapewnienia bezpłatnego dostępu do wybranych funkcji Aplikacji oraz finansowania jej dalszego rozwoju, nasza Aplikacja korzysta z zewnętrznej sieci reklamowej do wyświetlania reklam.
        </p>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Dostawca sieci reklamowej i polityka prywatności</h3>
          <p className="leading-relaxed">
            Usługi reklamowe w Aplikacji są świadczone przez podmiot trzeci – <strong>Unity Ads</strong> (należący do <strong>Unity Technologies</strong>). Wszelkie operacje przetwarzania danych przez ten podmiot podlegają jego własnej polityce prywatności, z którą możesz zapoznać się bezpośrednio pod adresem:{' '}
            <a
              href="https://unity.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:opacity-80 transition"
            >
              https://unity.com/legal/privacy-policy
            </a>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Zakres zbieranych danych</h3>
          <p className="leading-relaxed mb-3">
            Podczas korzystania z Aplikacji dostawca sieci reklamowej (Unity Ads) może w sposób zautomatyzowany gromadzić i przetwarzać następujące kategorie danych z Twojego Urządzenia:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="leading-relaxed">
              <strong>Identyfikatory urządzeń:</strong> unikalne identyfikatory reklamowe przypisane do Twojego Urządzenia przez system operacyjny, w szczególności Google Advertising ID (AAID) w systemie Android lub IDFA (Identifier for Advertisers) w systemie iOS.
            </li>
            <li className="leading-relaxed">
              <strong>Informacje o urządzeniu:</strong> model i producent urządzenia, system operacyjny oraz jego wersja, ustawienia językowe, strefa czasowa, dane o sieci i operatorze telefonii komórkowej.
            </li>
            <li className="leading-relaxed">
              <strong>Przybliżona lokalizacja:</strong> ogólne dane o lokalizacji geograficznej (np. kraj, miasto) szacowane na podstawie Twojego adresu IP.
            </li>
            <li className="leading-relaxed">
              <strong>Dane o wyświetleniach i interakcjach z reklamami:</strong> informacje na temat tego, jakie reklamy zostały wyświetlone, czy i kiedy zostały obejrzane (w tym ukończenie odtwarzania wideo), kliknięte lub czy doprowadziły do instalacji reklamowanej aplikacji.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Cele przetwarzania danych</h3>
          <p className="leading-relaxed mb-3">
            Dane gromadzone przez dostawcę reklam są wykorzystywane w następujących celach:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="leading-relaxed">
              <strong>Dostarczanie reklam:</strong> wyświetlanie spersonalizowanych reklam dopasowanych do zainteresowań Użytkownika lub reklam kontekstowych.
            </li>
            <li className="leading-relaxed">
              <strong>Analityka i pomiar skuteczności:</strong> badanie skuteczności prowadzonych kampanii reklamowych, zliczanie odsłon oraz raportowanie rezultatów.
            </li>
            <li className="leading-relaxed">
              <strong>Zapobieganie oszustwom reklamowym (fraud prevention):</strong> wykrywanie podejrzanych aktywności, zapobieganie nieprawidłowym kliknięciom (click fraud), zwalczanie botów i ochrona integralności ekosystemu reklamowego.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Możliwość rezygnacji i kontrola Użytkownika (Opt-out)</h3>
          <p className="leading-relaxed mb-3">
            Użytkownik ma możliwość rezygnacji ze śledzenia w celach reklamowych oraz personalizacji reklam, a także zresetowania lub zablokowania identyfikatora reklamowego w dowolnym momencie z poziomu ustawień swojego Urządzenia:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="leading-relaxed">
              <strong>W systemie Android:</strong> przejdź do <em>Ustawienia</em> → <em>Prywatność</em> (lub <em>Google</em>) → <em>Reklamy</em> → możesz skorzystać z opcji <em>Zresetuj identyfikator reklamowy</em> lub <em>Usuń identyfikator reklamowy</em> / wyłączyć personalizację reklam.
            </li>
            <li className="leading-relaxed">
              <strong>W systemie iOS (Apple):</strong> przejdź do <em>Ustawienia</em> → <em>Prywatność i ochrona</em> → <em>Śledzenie</em> (gdzie możesz wyłączyć opcję <em>Pozwalaj aplikacjom żądać możliwości śledzenia</em>) oraz przejdź do sekcji <em>Reklamy Apple</em> i wyłącz <em>Reklamy spersonalizowane</em>.
            </li>
          </ul>
          <p className="leading-relaxed mt-3">
            Zwracamy uwagę, że skorzystanie z opcji rezygnacji nie powoduje całkowitego wyłączenia wyświetlania reklam, lecz sprawia, że wyświetlane reklamy będą miały charakter kontekstowy (losowy / niespersonalizowany) zamiast dopasowanego do Twoich preferencji.
          </p>
        </div>
      </section>

      {/* AI Receipt Scanning */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Przetwarzanie Zdjęć Paragonów przez Sztuczną Inteligencję (AI)</h2>
        <p className="leading-relaxed">
          Aplikacja oferuje opcjonalną funkcję inteligentnego skanowania paragonów za paliwo, która pozwala na automatyczne odczytanie parametrów transakcji (takich jak kwota, ilość zatankowanego paliwa w litrach, rodzaj paliwa, data czy stacja) bezpośrednio ze zdjęcia wykonanego aparatem lub wybranego z galerii Twojego Urządzenia.
        </p>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Zewnętrzni dostawcy modeli AI</h3>
          <p className="leading-relaxed">
            W celu analizy obrazu i odczytu tekstu (OCR), Aplikacja korzysta z bezpiecznych interfejsów programistycznych (API) zewnętrznych dostawców modeli sztucznej inteligencji (m.in. Google lub Groq).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Standardy prywatności i brak trenowania modeli</h3>
          <p className="leading-relaxed mb-3">
            Szanujemy prywatność Twoich dokumentów i stosujemy rygorystyczne zasady:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="leading-relaxed">
              <strong>Brak trenowania modeli publicznych:</strong> Dane i zdjęcia przesyłane za pośrednictwem komercyjnych interfejsów API <strong>nie są wykorzystywane</strong> przez dostawców modeli AI do trenowania, douczania ani rozwijania publicznych modeli sztucznej inteligencji.
            </li>
            <li className="leading-relaxed">
              <strong>Przetwarzanie w locie (in-transit):</strong> Zdjęcie jest przesyłane do zewnętrznego serwera AI wyłącznie w szyfrowanym połączeniu w celu natychmiastowego przetworzenia i ekstrakcji danych.
            </li>
            <li className="leading-relaxed">
              <strong>Przechowywanie danych:</strong> Zewnętrzni dostawcy API AI nie przechowują trwale Twoich zdjęć po zrealizowaniu zapytania. Odczytane parametry wpisu (oraz opcjonalnie samo zdjęcie, jeśli zdecydujesz się zachować wpis w historii) są zapisywane w bezpiecznej bazie danych Aplikacji (Supabase).
            </li>
            <li className="leading-relaxed">
              <strong>Zalecenie dla Użytkownika:</strong> Funkcja skanowania jest przeznaczona wyłącznie do paragonów za paliwo i dokumentów związanych z kosztami pojazdu. Zalecamy nieskanowanie dokumentów zawierających dane wrażliwe (np. dowodów osobistych, kart płatniczych z widocznymi pełnymi danymi i kodami CVC/CVV).
            </li>
          </ul>
        </div>
      </section>

      {/* Retention */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Okres Przechowywania Twoich Danych Osobowych</h2>
        <p className="leading-relaxed mb-4">
          Firma będzie przechowywać Twoje Dane Osobowe tylko tak długo, jak jest to konieczne do celów określonych w niniejszej Polityce Prywatności lub zgodnie z obowiązującymi przepisami o ochronie danych.
        </p>
        <p className="leading-relaxed mb-4">Stosujemy różne okresy przechowywania dla poszczególnych kategorii Danych Osobowych:</p>
        <ul className="space-y-3 ml-4">
          <li className="leading-relaxed"><strong>Informacje o Koncie</strong>: Konta Użytkowników są przechowywane przez czas trwania aktywnej relacji (posiadania konta) oraz do 24 miesięcy po zamknięciu konta w celu obsługi wszelkich kwestii związanych z zakończeniem umowy lub rozwiązywaniem ewentualnych sporów.</li>
          <li className="leading-relaxed"><strong>Dane Wsparcia Technicznego</strong>: Zgłoszenia serwisowe i korespondencja e-mailowa są przechowywane do 24 miesięcy od daty zamknięcia zgłoszenia w celu obsługi pytań uzupełniających.</li>
          <li className="leading-relaxed"><strong>Dane Eksploatacyjne i Analityczne</strong>: Logi serwera, adresy IP oraz diagnostyczne dane o awariach z systemu Sentry są przechowywane przez okres do 24 miesięcy w celu monitorowania bezpieczeństwa, rozwiązywania problemów i analizy popularności funkcji aplikacji.</li>
        </ul>
        <p className="leading-relaxed mt-4">
          Po upływie okresów przechowywania bezpiecznie usuwamy lub anonimizujemy Dane Osobowe, aby nie można ich było z Tobą powiązać. Resztkowe, zaszyfrowane kopie mogą pozostać w automatycznych kopiach zapasowych (backupach) systemu przez ograniczony czas, dopóki nie zostaną rutynowo nadpisane.
        </p>
      </section>

      {/* Transfer of Data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Transfer Twoich Danych Osobowych</h2>
        <p className="leading-relaxed mb-4">
          Twoje informacje, w tym Dane Osobowe, są przetwarzane w miejscach operacyjnych Firmy oraz w innych miejscach, w których znajdują się strony zaangażowane w przetwarzanie (takie jak serwery Supabase, Sentry czy dostawcy API AI). Oznacza to, że informacje te mogą być przesyłane i przechowywane na komputerach zlokalizowanych poza Twoim stanem, województwem, krajem lub inną jurysdykcją rządową, gdzie przepisy dotyczące ochrony danych mogą się różnić od przepisów obowiązujących w Twojej jurysdykcji.
        </p>
        <p className="leading-relaxed">
          Firma podejmie wszelkie niezbędne działania, aby zapewnić, że Twoje dane są traktowane bezpiecznie i zgodnie z niniejszą Polityką Prywatności.
        </p>
      </section>

      {/* GDPR Rights & Delete Your Data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Prawa Użytkownika w Zakresie Ochrony Danych (RODO / GDPR) i Usuwanie Danych</h2>
        <p className="leading-relaxed mb-4">
          Zgodnie z Ogólnym Rozporządzeniem o Ochronie Danych (RODO), przysługują Ci następujące prawa w odniesieniu do Twoich Danych Osobowych:
        </p>
        <ul className="list-disc ml-6 space-y-3 mb-4">
          <li className="leading-relaxed">
            <strong>Prawo dostępu do danych (art. 15 RODO):</strong> masz prawo uzyskać informację o tym, jakie dane przetwarzamy, oraz otrzymać ich kopię.
          </li>
          <li className="leading-relaxed">
            <strong>Prawo do sprostowania (art. 16 RODO):</strong> masz prawo poprawiać niedokładne dane lub uzupełniać niekompletne wpisy bezpośrednio w Aplikacji.
          </li>
          <li className="leading-relaxed">
            <strong>Prawo do usunięcia danych („prawo do bycia zapomnianym”, art. 17 RODO):</strong> masz prawo w każdej chwili usunąć swoje konto wraz ze wszystkimi powiązanymi danymi pojazdu, wpisami tankowań i notatkami bezpośrednio z poziomu ustawień Aplikacji, lub kontaktując się z Nami mailowo.
          </li>
          <li className="leading-relaxed">
            <strong>Prawo do ograniczenia przetwarzania (art. 18 RODO):</strong> masz prawo zażądać ograniczenia przetwarzania danych w przypadkach przewidzianych przez prawo.
          </li>
          <li className="leading-relaxed">
            <strong>Prawo do przenoszenia danych (art. 20 RODO):</strong> masz prawo otrzymać swoje dane w ustrukturyzowanym, powszechnie używanym formacie elektronicznym.
          </li>
          <li className="leading-relaxed">
            <strong>Prawo do sprzeciwu (art. 21 RODO):</strong> masz prawo sprzeciwić się przetwarzaniu danych opartemu na naszym prawnie uzasadnionym interesie.
          </li>
          <li className="leading-relaxed">
            <strong>Prawo do cofnięcia zgody:</strong> jeśli przetwarzanie wymaga Twojej zgody (np. dostęp do aparatu/galerii lub analiza AI), możesz cofnąć tę zgodę w dowolnym momencie w ustawieniach systemowych swojego Urządzenia.
          </li>
          <li className="leading-relaxed">
            <strong>Prawo do wniesienia skargi:</strong> masz prawo wnieść skargę do organu nadzorczego zajmującego się ochroną danych osobowych (w Polsce: Prezes Urzędu Ochrony Danych Osobowych – PUODO, ul. Stawki 2, 00-193 Warszawa, www.uodo.gov.pl).
          </li>
        </ul>
        <p className="leading-relaxed">
          Wszelkie żądania dotyczące realizacji powyższych praw możesz zgłaszać na adres e-mail: <strong>contact@carendoo.com</strong>.
        </p>
      </section>

      {/* Security */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Bezpieczeństwo Twoich Danych Osobowych</h2>
        <p className="leading-relaxed">
          Bezpieczeństwo Twoich Danych Osobowych jest dla Nas ważne, ale pamiętaj, że żadna metoda transmisji przez Internet ani metoda elektronicznego przechowywania nie jest w 100% bezpieczna. Choć staramy się stosować komercyjnie akceptowalne środki ochrony Twoich Danych Osobowych w oparciu o nowoczesne standardy chmurowe, nie możemy zagwarantować ich absolutnego bezpieczeństwa.
        </p>
      </section>

      {/* Children's Privacy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Prywatność Dzieci</h2>
        <p className="leading-relaxed">
          Nasza Usługa nie jest skierowana do osób poniżej 16 roku życia. Nie zbieramy świadomie informacji umożliwiających identyfikację od osób poniżej 16 roku życia. Jeśli jesteś rodzicem lub opiekunem i wiesz, że Twoje dziecko przekazało nam Dane Osobowe, skontaktuj się z nami. Jeśli dowiemy się, że zebraliśmy Dane Osobowe od osoby poniżej 16 roku życia bez weryfikacji zgody rodziców, podejmiemy działania w celu usunięcia tych informacji z naszych serwerów.
        </p>
      </section>

      {/* Links to Other Websites */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Linki do Innych Stron Internetowych</h2>
        <p className="leading-relaxed mb-4">
          Nasza Usługa może zawierać linki do innych stron internetowych, które nie są przez nas prowadzone. Jeśli klikniesz w link strony trzeciej, zostaniesz przekierowany na stronę tej trzeciej strony. Zdecydowanie zalecamy zapoznanie się z Polityką Prywatności każdej odwiedzanej strony.
        </p>
        <p className="leading-relaxed">
          Nie mamy kontroli i nie ponosimy odpowiedzialności za treść, politykę prywatności lub praktyki stron lub usług stron trzecich.
        </p>
      </section>

      {/* Changes to Policy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Zmiany w Niniejszej Polityce Prywatności</h2>
        <p className="leading-relaxed mb-4">
          Możemy od czasu do czasu aktualizować naszą Politykę Prywatności. O wszelkich zmianach poinformujemy Cię, publikując nową Politykę Prywatności na tej stronie.
        </p>
        <p className="leading-relaxed">
          Powiadomimy Cię o tym również za pośrednictwem wiadomości e-mail i/lub widocznego komunikatu w naszej Usłudze, zanim zmiana wejdzie w życie, oraz zaktualizujemy datę „Ostatniej aktualizacji" na górze niniejszej Polityki Prywatności. Zaleca się okresowe przeglądanie niniejszej Polityki Prywatności pod kątem zmian.
        </p>
      </section>

      {/* Contact Us */}
      <section className="space-y-4 border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-semibold text-primary">Kontakt z Nami</h2>
        <p className="leading-relaxed mb-4">
          Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki Prywatności, możesz się z nami skontaktować:
        </p>
        <p className="leading-relaxed">
          <strong>Kontakt e-mail:</strong> contact@carendoo.com
        </p>
      </section>
    </div>
  );
}
