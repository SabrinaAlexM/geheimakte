# Geheimakte

Wörter-Ratespiel für zwei Teams: ein Spielfeld (PC, Beamer oder Tablet) und eine Hinweis-Karte fürs Handy. Läuft komplett im Browser, ohne Server und ohne Datenbank. Alle Geräte rechnen aus dem gleichen Spiel-Code das gleiche Spiel aus.

## Dateien

| Datei | Wofür |
|---|---|
| `index.html` | Die ganze App |
| `manifest.webmanifest` | Name, Farben und Icon für «Zum Home-Bildschirm» |
| `sw.js` | Macht die App offline-fähig |
| `icons/` | App-Icons (192, 512, Apple 180) und Favicon |
| `vercel.json` | Sorgt dafür, dass Updates sofort ankommen |

## Auf GitHub und Vercel bringen

1. Auf GitHub ein neues Repository anlegen, z. B. `geheimakte`.
2. Alle Dateien aus diesem Ordner hochladen (Add file → Upload files), den Ordner `icons` mitsamt Inhalt.
3. In Vercel: Add New → Project → das Repository importieren.
4. Framework Preset: **Other**. Build Command und Output Directory leer lassen. Deploy.

Fertig. Jede Änderung, die du auf GitHub hochlädst, geht automatisch online.

## Als App speichern

- **iPhone/iPad (Safari):** Teilen → «Zum Home-Bildschirm».
- **Android (Chrome):** Menü ⋮ → «App installieren» oder «Zum Startbildschirm hinzufügen».
- **Mac/PC (Chrome, Edge):** Installieren-Symbol in der Adressleiste.

## Update veröffentlichen

1. Neue `index.html` auf GitHub hochladen.
2. In `sw.js` die Versionsnummer hochzählen (`geheimakte-v1` → `geheimakte-v2`). Sonst zeigen installierte Apps eventuell noch eine Weile die alte Version.

## Wichtig

Die Wortlisten und die Zufallsberechnung nicht verändern, während ein Spiel läuft: Spielfeld und Handys müssen die gleiche Version haben, sonst passen die Codes nicht zusammen.
