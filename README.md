# Portfolio QA Automation – Playwright

Ce projet présente trois tests automatisés réalisés avec Playwright.  
Il démontre ma capacité à écrire, exécuter et analyser des tests E2E simples.

---

## 📁 Structure du projet

tests/
homepage.spec.js
login.spec.js
form.spec.js
package.json

---

## 🧪 Test 1 — Homepage loads correctly

**Objectif :** vérifier que la page d’accueil se charge et que le header est visible.

**Code :**
```javascript
import { test, expect } from '@playwright/test';

test('Homepage loads correctly', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);

  const header = page.locator('h1');
  await expect(header).toBeVisible();
});
Capture : 
<img width="1417" height="670" alt="homepage png" src="https://github.com/user-attachments/assets/d3983619-4bfb-477e-83c8-628275d90af1" />
 Test 2 — Login works correctly
Objectif : simuler un login (test volontairement FAIL pour montrer la gestion d’erreur).
Code :
import { test, expect } from '@playwright/test';

test('Login works correctly', async ({ page }) => {
  await page.goto('https://site-du-client.com/login');

  await page.fill('#email', 'email@test.com');
  await page.fill('#password', 'password123');
});
Capture : <img width="1415" height="657" alt="login png" src="https://github.com/user-attachments/assets/1618d55e-ef6d-4ff9-8fca-97923f32f604" />
Test 3 — Form loads correctly
Objectif : vérifier qu’un élément est visible sur une page.
Code :
import { test, expect } from '@playwright/test';

test('Form loads correctly', async ({ page }) => {
  await page.goto('https://example.com');

  const link = page.locator('a');
  await expect(link).toBeVisible();
});
Capture :  <img width="1122" height="646" alt="form png" src="https://github.com/user-attachments/assets/4baccf8a-6f37-4aba-962b-10e30b262dec" />
Exécution des tests
Lancer les tests en mode UI : npx playwright test --ui
Lancer les tests en mode debug : npx playwright test --debug
Compétences démontrées
Mise en place d’un projet Playwright

Écriture de tests E2E

Utilisation de Playwright Test UI

Locators, assertions, navigation

Analyse des résultats (pass/fail)

Gestion des captures d’écran
Contact
Disponible pour missions QA / automatisation.
nassim.automation@gmail.com
