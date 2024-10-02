# 🚗 AutoWeb - Auto Remonta Darbnīcas Pārvaldības Sistēma

## 📖 Projekta Apraksts

AutoWeb ir visaptveroša auto remonta darbnīcas pārvaldības sistēma, kas sastāv no **Express.js** aizmugursistēmas un **Next.js** priekšgala lietojumprogrammas. Šī sistēma ir izstrādāta, lai optimizētu auto remonta darbnīcas ikdienas darbības, nodrošinot efektīvu klientu, pakalpojumu un rezervāciju pārvaldību.

## 🗂️ Projekta Struktūra

- **`backend/`**: Satur Express.js serveri un API loģiku
- **`autoweb/`**: Satur Next.js priekšgala lietojumprogrammu

## 📦 Priekšnosacījumi

Pirms projekta iestatīšanas, pārliecinieties, ka jūsu sistēmā ir instalēti:

- **Node.js** (v14 vai jaunāka)
- **npm** (v6 vai jaunāka)
- **PostgreSQL** (v12 vai jaunāka)
- **Git**

## ⚙️ Projekta Iestatīšana

### Aizmugursistēmas (Backend) Iestatīšana

1. **Klonējiet repozitoriju:**

   ```bash
   git clone [repo-url]
   ```

2. **Pārejiet uz aizmugursistēmas direktoriju:**

   ```bash
   cd backend
   ```

3. **Instalējiet nepieciešamās atkarības:**

   ```bash
   npm install
   ```

4. **Izveidojiet `.env` failu `backend` direktorijā ar šādu saturu:**

   ```plaintext
   DATABASE_URL=xxxxxxx
   PORT=xxxx
   JWT_SECRET=xxxxxx
   ```

   _Piezīme: Pielāgojiet `DATABASE_URL`, ja jūsu PostgreSQL iestatījumi atšķiras._

5. **Iestatiet datubāzi:**

   - Pārliecinieties, ka PostgreSQL serveris darbojas.
   - Izveidojiet jaunu datubāzi ar nosaukumu `AutoWeb`.

6. **(Pēc izvēles) Pievienojiet pirmo lietotāju:**
   ```bash
   node scripts/adduser.js
   ```

### Priekšgala (Frontend) Iestatīšana

1. **Pārejiet uz priekšgala direktoriju:**

   ```bash
   cd ../autoweb
   ```

2. **Instalējiet nepieciešamās atkarības:**
   ```bash
   npm install
   ```

## 🚀 Lietojumprogrammas Palaišana

### Aizmugursistēmas Servera Palaišana

1. **Pārejiet uz aizmugursistēmas direktoriju:**

   ```bash
   cd backend
   ```

2. **Palaidiet serveri izstrādes režīmā:**
   ```bash
   npm run dev
   ```

_Serveris tiks palaists adresē [http://localhost:5000](http://localhost:5000)._

### Priekšgala Lietojumprogrammas Palaišana

1. **Pārejiet uz priekšgala direktoriju:**

   ```bash
   cd autoweb
   ```

2. **Palaidiet izstrādes serveri:**
   ```bash
   npm run dev
   ```

_Priekšgals būs pieejams adresē [http://localhost:3000](http://localhost:3000)._

## 🖥️ Piekļuve Lietojumprogrammai

- **Priekšgals (Klientu saskarne)**: Atveriet pārlūkprogrammu un apmeklējiet [http://localhost:3000](http://localhost:3000)
- **Aizmugursistēmas API**: API būs pieejams adresē [http://localhost:5000](http://localhost:5000)

## 🔑 Galvenās Funkcijas

- Klientu pārvaldība
- Pakalpojumu katalogs
- Rezervāciju sistēma
- Darbinieku panelis
- Administratora panelis

## 🛠️ Tehnoloģiju Steks

- **Aizmugursistēma**: Node.js, Express.js, PostgreSQL
- **Priekšgals**: Next.js, React, CSS Modules
- **Autentifikācija**: JSON Web Tokens (JWT)

## 🐞 Problēmu Novēršana

Ja sastopaties ar problēmām projekta iestatīšanas vai darbības laikā:

1. Pārliecinieties, ka visas atkarības ir pareizi instalētas gan `backend`, gan `autoweb` direktorijās.
2. Pārbaudiet, vai PostgreSQL serveris darbojas un datubāze `AutoWeb` ir izveidota.
3. Pārliecinieties, ka `.env` failā `backend` direktorijā ir pareiza datubāzes savienojuma virkne.
4. Pārbaudiet, vai porti 3000 un 5000 nav aizņemti ar citām lietojumprogrammām.
5. Pārbaudiet konsoles izvadi gan aizmugursistēmas, gan priekšgala serveros, lai iegūtu detalizētu informāciju par kļūdām.

## 📬 Kontaktinformācija

Ja jums ir jautājumi vai ieteikumi, lūdzu, sazinieties ar projekta uzturētājiem!

## 🙏 Pateicības

Pateicamies visiem, kas piedalījušies šī projekta izstrādē un testēšanā. Jūsu ieguldījums ir nenovērtējams!
