# Deployment

DirectAdmin upload-bestand (één-op-één uit te pakken in `public_html`):

- ZIP: `solar-ai-directadmin-final.zip`
- Raw-download: https://raw.githubusercontent.com/DenizSlr/SolarAI-TRAE-/main/deploy/solar-ai-directadmin-final.zip

Inhoud en structuur (root-niveau):
- `index.html`
- `.htaccess`
- `assets/index-DEy4NiHH.css`
- `assets/index-pc-OzMyf.js`
- `favicon.ico`, `robots.txt`, `placeholder.svg`

Upload stappen:
1) Ga naar `Files` → open `public_html`.
2) Verwijder oude sitebestanden (voorkom dubbele lagen of submappen).
3) Upload `solar-ai-directadmin-final.zip` naar `public_html`.
4) Klik `Extract` → controleer dat bovenstaande bestanden direct in `public_html` staan.
5) Open je domein; homepage en deep links werken door `.htaccess`.