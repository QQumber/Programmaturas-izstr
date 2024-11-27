# 🚗 AutoWeb - Auto Remonta Darbnīcas Pārvaldības Sistēma

## 📖 Projekta Apraksts

AutoWeb ir auto remonta darbnīcas pārvaldības sistēmas prototips, kas izstrādāts izmantojot Next.js priekšgala lietojumprogrammu. Sistēma nodrošina informatīvu mājaslapu ar rezervāciju iespējām un administratīvo paneli.

## 🗂️ Projekta Struktūra

- **`autoweb/`**: Satur Next.js priekšgala lietojumprogrammu
  - **`app/`**: Galvenā lietojumprogrammas direktorija
    - **`components/`**: Atkārtoti izmantojamie komponenti
    - **`api/`**: API maršruti un datubāzes konfigurācija
    - **`context/`**: React konteksta faili
  - **`public/`**: Statiskie faili

## 📦 Priekšnosacījumi

Pirms projekta iestatīšanas, pārliecinieties, ka jūsu sistēmā ir instalēti:

- **Node.js** (v14 vai jaunāka)
- **npm** (v6 vai jaunāka)
- **Git**
- **PostgreSQL** (v13 vai jaunāka)

## ⚙️ Projekta Iestatīšana

1. **Klonējiet repozitoriju:**
   ```bash
   git clone [repo-url]
   ```

2. **Pārejiet uz projekta direktoriju:**
   ```bash
   cd autoweb
   ```

3. **Instalējiet nepieciešamās atkarības:**
   ```bash
   npm install
   ```

4. **Izveidojiet .env failu ar sekojošām vērtībām:**
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=autoserviss
   DB_PORT=5432
   ```

5. **Inicializējiet datubāzi:**
   - Izmantojiet SQL skriptu no `app/api/autoserviss.sql`

## 🚀 Lietojumprogrammas Palaišana

1. **Palaidiet izstrādes serveri:**
   ```bash
   npm run dev
   ```

2. **Atveriet pārlūkprogrammu un apmeklējiet:**
   [http://localhost:3000](http://localhost:3000)

## 🔑 Pašreizējās Funkcijas

- Informatīva mājaslapa
- Kalendāra komponente
- Responsīvs dizains
- Ekspertu sekcija
- Par mums sekcija
- Lietotāju autentifikācija
- Administratora panelis
- Pakalpojumu pārvaldība
- Rezervāciju sistēma

## 🛠️ Tehnoloģiju Steks

- **Priekšgals**: Next.js, React, CSS Modules
- **Ikonas**: React Icons
- **Datubāze**: PostgreSQL
- **Autentifikācija**: bcryptjs
- **API**: Next.js API Routes

## 🔐 Autentifikācija

Sistēma nodrošina:
- Lietotāju reģistrāciju
- Pieteikšanos
- Administratora piekļuvi
- Sesiju pārvaldību

## 👨‍💼 Administratora Panelis

Administratora panelī pieejams:
- Darbinieku pārvaldība
- Rezervāciju pārskats
- Darba grafika plānošana

## 🐞 Problēmu Novēršana

Ja sastopaties ar problēmām projekta iestatīšanas vai darbības laikā:

1. Pārliecinieties, ka visas atkarības ir pareizi instalētas `autoweb` direktorijā
2. Pārbaudiet, vai ports 3000 nav aizņemts ar citu lietojumprogrammu
3. Pārbaudiet konsoles izvadi, lai iegūtu detalizētu informāciju par kļūdām
4. Pārliecinieties, ka datubāzes konfigurācija .env failā ir pareiza

## 📬 Kontaktinformācija

Ja jums ir jautājumi vai ieteikumi, lūdzu, sazinieties ar projekta uzturētājiem!
