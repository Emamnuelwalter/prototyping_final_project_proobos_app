# Projektdokumentation - Proboos App

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
   1. [Understand & Define](#31-understand--define)
   2. [Sketch](#32-sketch)
   3. [Decide](#33-decide)
   4. [Prototype](#34-prototype)
   5. [Validate](#35-validate)
4. [Erweiterungen](#4-erweiterungen)
5. [Projektorganisation](#5-projektorganisation)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang](#7-anhang)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

<!-- WICHTIG: DIE KAPITELSTRUKTUR DARF NICHT VERÄNDERT WERDEN! -->

## 1. Ausgangslage

**Problem:**

Die Gewinnung neuer Kundschaft stellt für Sporttrainer/-innen eine grosse Herausforderung dar. Viele Trainer sind nicht technisch affin und haben Schwierigkeiten, potenzielle Kundinnen und Kunden über digitale Kanäle zu erreichen. Häufig erfolgt die Kundengewinnung über persönliche Empfehlungen oder traditionelle Werbemittel wie Webseiten oder Zeitungsanzeigen.

Zudem ist die Kommunikation zwischen Trainern und Kunden fragmentiert, da verschiedene Kommunikationskanäle wie Telefon oder E-Mail genutzt werden. Dies führt zu ineffizienten und langsamen Abstimmungsprozessen.

Auch die Organisation von Terminen ist für viele Trainer schwierig, da sie flexible Arbeitszeiten haben und oft keinen zentralen Überblick über ihre Termine und Trainingsorte besitzen.

Auf Kundenseite bestehen ebenfalls mehrere Probleme: Teilzeitsportler bis Profisportler haben Schwierigkeiten, passende Sporttrainer zu finden. Es fehlt an zentralen Plattformen, auf denen Trainer nach Standort, Sportart und Verfügbarkeit gesucht werden können. Zudem sind Bewertungen und Feedback oft nicht vorhanden oder wenig vertrauenswürdig. Der Buchungsprozess ist häufig umständlich und zeitaufwendig.

**Beispiel:**

Sarah (21) aus Zürich spielt gerne am Wochenende Tennis und möchte ihre Fähigkeiten verbessern. Sie sucht nach einem Tennistrainer in ihrer Nähe, findet jedoch keinen geeigneten Trainer. Zudem kann sie nicht einsehen, ob ein Trainer zu ihren gewünschten Zeiten verfügbar ist. Bewertungen fehlen oder wirken nicht authentisch. Obwohl sich ein Tennisplatz in ihrer Nähe befindet, sind viele Trainer nicht bereit, dort Trainingseinheiten durchzuführen.

**Ziele:**

- Verbesserung der Auffindbarkeit von Sporttrainern für unterschiedliche Sportarten und Leistungsniveaus
- Vereinfachung und Beschleunigung des Buchungsprozesses zwischen Sportlern und Trainern
- Reduktion von Kommunikationshürden zwischen Trainern und Kunden
- Erhöhung der Transparenz durch Bewertungen und Feedback zu Trainern
- Bessere Planbarkeit und Übersicht von Trainings, Terminen und Trainingsorten
- Unterstützung von Sporttrainern bei der Gewinnung neuer Kundschaft

**Primäre Zielgruppe:**

- Junge Erwachsene im Alter von 18 bis 25 Jahren
- Studierende im Alter von 18 bis 25 Jahren
- Leistungssportler im Alter von 16 bis 45 Jahren
- Profisportler
- Sporttrainer, z. B. Fitnesstrainer oder Tennistrainer

**Weitere Stakeholder:**

- Sportvereine
- Sporttrainer-Verbände
- Gewerkschaften und Organisationen im Sportbereich

## 2. Lösungsidee

Die Lösung ist eine digitale Plattform als Web-App, die Sportler/-innen schnell und unkompliziert mit passenden Sporttrainer/-innen verbindet. Nutzer können ein Profil erstellen, ihre Sportarten und Ziele definieren und anschliessend gezielt nach qualifizierten Trainern in ihrer Nähe suchen. Durch Filterfunktionen, Bewertungen und personalisierte Vorschläge wird die Auswahl vereinfacht.

Trainingseinheiten können flexibel und kurzfristig gebucht sowie über eine Terminübersicht verwaltet werden. Ein Bewertungssystem schafft zusätzlich Vertrauen und Transparenz.

**Kernfunktionalität:**

- Profilerstellung als Onboarding-Formular
- Profilansicht
- Suche nach Sporttrainer/-innen und Trainingsangeboten
- Empfehlungen auf Basis von Sportart und Niveau
- Buchungsportal für verfügbare Termine
- Terminübersicht unter „Meine Termine“
- Möglichkeit, gebuchte Termine zu stornieren
- Bewertungssystem als vorbereitete Erweiterung

**Workflow:**

1. Der User öffnet die App und erstellt ein Profil mit Personalien und Interessen.
2. Das System speichert die Profildaten und die ausgewählten Sportarten.
3. Die App zeigt auf der Hauptseite passende Trainingsangebote an.
4. Der User kann nach Angeboten suchen oder eine Sportkategorie auswählen.
5. Der User öffnet die Detailansicht eines Angebots.
6. Das System zeigt die verfügbaren Termine des Trainers an.
7. Der User wählt eine verfügbare Trainingsstunde aus.
8. Das System prüft, ob der Termin noch verfügbar ist.
9. Die Buchung wird gespeichert.
10. Der User erhält eine Bestätigungsseite mit Buchungs-ID.
11. Der gebuchte Termin wird im Bereich „Meine Termine“ angezeigt.
12. Der User kann einen Termin bei Bedarf stornieren.

<img src="/my-app/static/img/Workflow.drawio.svg" alt="Worflow Prozess" width="400" height="1300"/>

**Abgrenzung:**

**Login und Anmeldung:**

Im Prototyp wird kein vollständiger Registrierungsprozess per E-Mail umgesetzt. Stattdessen wird nach der Profilerstellung eine User-ID in einem Cookie gespeichert. Dadurch kann der Prototyp den aktuellen User simulieren.

**Zahlungsportal:**

Die Implementierung eines Zahlungsprozesses, z. B. via TWINT oder Kreditkarte, ist nicht Teil des Mindestumfangs.

**Trainerbereich:**

Ein eigener Trainerbereich zur Verwaltung von Angeboten, Verfügbarkeiten und Buchungsanfragen ist als Erweiterung vorgesehen, wird im aktuellen Prototyp jedoch nicht umgesetzt.

## 3. Vorgehen & Artefakte

Die Durchführung erfolgte phasenbasiert. Die wichtigsten Ergebnisse je Phase sind in den folgenden Abschnitten dokumentiert.

### 3.1 Understand & Define

**Zielgruppenverständnis:**

Die Zielgruppen wurden in vier Gruppen unterteilt.

**Teilzeitsportler/-innen**

- **Alter:** 18 bis 55 Jahre
- **Demografie:** Erwachsene, Studierende und Eltern
- **Beschreibung:** Teilzeitsportler/-innen treiben unregelmässig Sport, ungefähr ein- bis zweimal pro Woche. Studierende und Erwachsene mit Kindern haben oft unregelmässige Terminpläne. Für sie ist es wichtig, Trainingseinheiten einfach und schnell mit Sporttrainern abzuklären.
- **Probleme:**
  - Wenig oder keine Erfahrung in bestimmten Sportarten
  - Wenig Zeit, passende Sporttrainer zu suchen
  - Keine bisherigen Erfahrungen mit Sporttrainern
  - Fehlende Bewertungen oder Nachweise von Fortschritten anderer Kunden
- **Ziele:**
  - Flexible Trainingseinheiten nach Zeit und Standort buchen
  - Keine langfristigen Trainingsverträge eingehen
  - Sporttrainer auf Basis der eigenen Bedürfnisse vorgeschlagen bekommen
  - Authentische Bewertungen einsehen
- **Persona:** Luka (21), Student, hat nicht immer Zeit, regelmässig ins Fitnessstudio zu gehen, möchte aber Fortschritte machen. Er hat keine Zeit, einen passenden Fitnesstrainer zu finden, und findet keine authentischen Bewertungen.
- **Typische Sportarten:** Fitness, Gym usw.
</details>

**Hobbysportler/-innen**

- **Alter:** 18 bis 45 Jahre
- **Demografie:** Erwachsene, junge Erwachsene und Studierende
- **Beschreibung:** Hobbysportler/-innen treiben regelmässig Sport, ungefähr zwei- bis dreimal pro Woche, und möchten ihre Leistung verbessern. Sie sind offen für Unterstützung durch Trainer.
- **Probleme:**
  - Wenig Zeit, passende Sporttrainer zu suchen
  - Keine bisherigen Erfahrungen mit Sporttrainern
  - Fehlende Bewertungen oder Nachweise von Fortschritten anderer Kunden
  - Schwierigkeit, einen Trainer für das passende Leistungsniveau zu finden
- **Ziele:**
  - Flexible Trainingseinheiten nach Zeit und Standort buchen
  - Trainer auf Basis der eigenen Bedürfnisse vorgeschlagen bekommen
  - Authentische Bewertungen einsehen
- **Persona:** Victoria (30), arbeitet im Sales und sucht seit einigen Wochen nach einer passenden Tennistrainerin. Sie findet jedoch keine Trainerin, die zu ihrem Niveau passt und zeitlich flexibel ist.
- **Typische Sportarten:** Gym, Fitness, Yoga, Tennis usw.

**Leidenschaftliche Sportler/-innen**

- **Alter:** 16 bis 35 Jahre
- **Demografie:** Erwachsene, junge Erwachsene und Studierende
- **Beschreibung:** Diese Zielgruppe ist sehr aktiv und trainiert ungefähr vier- bis fünfmal pro Woche. Sie arbeitet gezielt an der eigenen Leistungssteigerung und ist stark auf professionelle Unterstützung angewiesen.
- **Probleme:**
  - Keine passenden Sporttrainer für das eigene Niveau
  - Fehlende Einsicht in authentische Bewertungen
  - Fehlende zeitliche Flexibilität
- **Ziele:**
  - Flexible Trainingseinheiten nach Zeit und Standort buchen
  - Authentische Bewertungen einsehen
  - Direkte Leistungssteigerung durch qualitative Sporttrainer
- **Persona:** Yannick (24) läuft seit mehreren Jahren Marathon und trainiert regelmässig. Er möchte sich für seinen nächsten Marathon vorbereiten, hat aber keine Erfahrung mit Profitrainern und weiss nicht, wo er passende Unterstützung findet.
- **Typische Sportarten:** Marathon, Bergsteigen usw.


**Profisportler/-innen**

- **Alter:** 18 bis 40 Jahre
- **Demografie:** Junge Erwachsene und Erwachsene
- **Beschreibung:** Profisportler/-innen trainieren mehrmals pro Woche und sind stark auf die Expertise von professionellen Trainern angewiesen. Der sportliche Erfolg hat direkten Einfluss auf ihre Karriere.
- **Probleme:**
  - Schnelle Findung von Profitrainern für die richtige Sportart
  - Schwierigkeit, qualifizierte Trainer schnell zu erkennen
  - Kurzfristige Verfügbarkeit
  - Ortsunabhängigkeit
- **Ziele:**
  - Profitrainer kurzfristig buchen
  - Schnelle und einfache Buchung von Trainingseinheiten
  - Qualifizierte Trainer nach Region finden
- **Persona:** Linda (28) ist professionelle Skispringerin. Um konkurrenzfähig zu bleiben, absolviert sie regelmässig Krafttraining. Während eines Aufenthalts bei ihren Eltern in der Westschweiz sucht sie einen qualifizierten Krafttrainer, der sie auf Basis ihres Trainingsrapports unterstützen kann.
- **Typische Sportarten:** Skispringen, Tennis, Ski Alpin, Fussball usw.


**Wesentliche Erkenntnisse:**

- Vertrauen in Trainer ist ohne Bewertungen oder Referenzen gering.
- Authentische Bewertungen und Fortschrittsnachweise sind sehr wichtig.
- Zeitmangel ist ein zentrales Problem bei allen Zielgruppen.
- Flexibilität bei Zeit und Ort ist für viele Nutzer entscheidend.
- Standortunabhängigkeit gewinnt an Bedeutung.
- Qualität und Spezialisierung der Trainer werden immer wichtiger.
- Es besteht ein Wunsch nach personalisierter Trainervermittlung.

### 3.2 Sketch

**Variantenüberblick:**

In der Sketch-Phase wurden mehrere Varianten für den Aufbau der App und den Hauptworkflow skizziert.

<!-- TODO Skizzenbilder hier einfügen -->
Skizze 1 (Crazy 8's)

<img src="/my-app/static/img/Screenshots/skizze_sketch_2.png" alt="Sketch 1" width="400" height="auto">

Skizze 2 (Skizze inkl. Workflow)

<img src="/my-app/static/img/Screenshots/skizze_sketch_1.png" alt="Sketch 2" width="400" height="auto">


**Skizzen:**

In der ersten Skizze wurden mehrere wichtige Funktionen einbezogen. Im Gruppencoaching konnte besonders die Terminansicht und die Möglichkeit, Termine des Trainers einzusehen, aufgegriffen werden.

In der zweiten Skizze inkl Workflow wurde zusätzlich die Benachrichtigungsfunktion skizziert. Die Nachrichtenfunktion wurde später entfernt, da sie für den Mindestumfang zu umfangreich gewesen wäre.

### 3.3 Decide

**Gewählte Variante & Begründung:**

Nach dem Input im Gruppencoaching wurde entschieden, die Nachrichtenfunktion wegzulassen. Stattdessen liegt der Fokus auf Profilerstellung, Angebotsanzeige, Detailansicht, Terminbuchung und Terminverwaltung. Diese Funktionen bilden den Kernnutzen der App am besten ab.

Die Entscheidung gegen eine vollumfängliche Nachrichtenfunktion wurde getroffen, weil diese den Rahmen des Prototyps sprengen würde. Der Fokus sollte auf den Funktionen liegen, die den Mehrwert der App direkt zeigen.

Eine Kartenansicht wurde als sinnvolle Erweiterung identifiziert. Sie würde die Suche nach Angeboten in der Nähe verbessern und die Benutzerfreundlichkeit weiter erhöhen. Für den Mindestumfang wurde diese Funktion jedoch nicht umgesetzt.
 
**Use-Case-Diagramm**
Das Use-Case-Diagramm zeigt die wichtigsten Funktionen der Anwendung und die beteiligten Rollen. Im Mindestumfang liegt der Fokus auf dem User, der ein Profil erstellt, Angebote durchsucht und Termine bucht. Trainer- und Admin-Funktionen sind als mögliche Erweiterungen vorgesehen.

<img src="/my-app/static/img/Use Case Diagramm.svg" alt="Use-Case-Diagramm Proboos" width="400" height="auto">

**End-to-End-Ablauf:**

1. Der User erstellt ein Profil mit Personalien und Interessen.
2. Das System speichert die Profildaten und die ausgewählten Sportarten.
3. Die App zeigt auf der Hauptseite passende Trainingsangebote an.
4. Das System zeigt die verfügbaren Termine des Trainers an.
5. Der User wählt eine verfügbare Trainingsstunde aus.
6. Das System prüft die Verfügbarkeit des Termins.
7. Die Buchung wird im System gespeichert.
8. Der User erhält eine Bestätigungsseite.
9. Der gebuchte Termin wird im Bereich „Meine Termine“ angezeigt.
10. Der User kann den Termin bei Bedarf stornieren.

**User Journey Map:**

Die User Journey Map zeigt den Ablauf aus Sicht des Users vom Einstieg bis zur Buchung.
<img src="/my-app/static/img/Proobos User Journey Map.jpg" alt="Desktop-Detailansicht" width="400" height="auto">


**Mockup:**

https://www.figma.com/proto/WeAMfqd8XFX7e8SgEoxRPi/Prodos-App-und-Web

Im Mockup werden auf der Hauptseite Trainingsangebote in der Nähe der Gemeinde des Users angezeigt. Der User kann nach Sportarten, Trainern oder Standorten suchen. Zusätzlich sind Filter vorgesehen, zum Beispiel nach Niveau oder Mindestbewertung.

In der erweiterten Verison werden in der Kartenansicht Trainer im Umkreis der Gemeinde des Users angezeigt. Bei der Auswahl einer Karte gelangt der User direkt zur Detailansicht des Angebots und kann dort einen Termin buchen.

In der Profilansicht sieht der User seine eigenen Profildaten. Auf Basis der interessierten Sportarten werden passende Trainer und Angebote vorgeschlagen.

Unter „Meine Termine“ kann der User seine gebuchten Termine ansehen und stornieren.

<!-- TODO Screenshots aus dem Figma-Mockup hier einfügen -->
<img src="/my-app/static/img/Screenshots/Trainingsangebote_Ansicht.png" alt="Desktop-Detailansicht" width="400" height="auto">
Hauptseite

<img src="/my-app/static/img/Screenshots/Desktop_detailansicht.png" alt="Desktop-Detailansicht" width="400" height="auto">
Angebot Detailansicht

<img src="/my-app/static/img/Screenshots/Detailansicht_reviews_desktop.png" alt="Detailansicht-Reviews" width="400" height="auto">
Bewertungen

<img src="/my-app/static/img/Screenshots/Kalenderauswahl_desktop.png" alt="Desktop-Kalenderauswahl" width="400" height="auto">
Termin Auswahl Ansicht

<img src="/my-app/static/img/Screenshots/Confromation_page.png" alt="Desktop-Buchungsbestätigung" width="400" height="auto">
Buchungsbestätig


### 3.4 Prototype

#### 3.4.1. Entwurf (Design)

**Informationsarchitektur:**

**Navigationsleiste:**

Nach der Profilerstellung hat der User über die Navigation Zugriff auf die Hauptseite „Durchsuchen“, „Sportkategorien“, „Meine Termine“ und „Mein Profil“. Vor der Profilerstellung wird nur das Logo angezeigt.

**Startseite:**

Auf der Startseite wird der User mit einem Karten-Element begrüsst und aufgefordert, ein Profil zu erstellen.

**Hauptseite:**

Die Hauptseite zeigt dem User zunächst vier Trainingsangebote, die seinem Profil entsprechen. Über den Button „Mehr anzeigen“ werden weitere Angebote eingeblendet. Die Angebotskarten zeigen Preis, Standort, Niveau und den Namen des Trainers.

**Detailansicht Trainingsangebot:**

Auf dieser Seite werden weitere Informationen zum Kurs angezeigt, zum Beispiel Beschreibung, Anforderungen und Standort. Zusätzlich werden Informationen zum Trainer dargestellt, beispielsweise Erfahrung und Zertifikate.

**Meine Termine:**

Die Termine werden wie auf der Hauptseite in Karten dargestellt. Die Karten enthalten die wichtigsten Informationen zum Termin. Mit dem Button „Angebot ansehen“ kann die Detailansicht des Angebots erneut geöffnet werden. Zusätzlich kann ein Termin storniert werden.

**User Interface Design:**

**Suchfunktion:**

Die Suchfunktion kann auf der Hauptseite genutzt werden und ermöglicht dem User, nach Sportarten, Trainern oder Standorten zu suchen.



**Profilerstellung:**

Die Profilerstellung ist als standardmässiges Formular umgesetzt. Der User wird mit einer roten „*“-Markierung auf Pflichtfelder hingewiesen. Zusätzlich wird ein Hinweis angezeigt, dass im Prototyp keine echten Personendaten eingegeben werden sollen.

<img src="/my-app/static/img/Screenshots/prototype_form_page.png" alt="Prfil-Form" width="400" height="auto">

**Profil:**

In der Profilansicht sieht der User alle relevanten Informationen seines erstellten Profils. Er kann in dieser Ansicht auch sein Profil löschen. Dadurch wird er zurück auf die Startseite geleitet und kann bei Bedarf ein neues Profil erstellen.

<img src="/my-app/static/img/Screenshots/prototype_profile_page.png" alt="Profil" width="400" height="auto">

**Terminauswahl:**

Die Terminauswahl ist in zwei Schritte aufgeteilt. Der User wählt zuerst einen verfügbaren Tag und danach eine passende Uhrzeit. Zusätzlich werden der Standort und eine Zusammenfassung der Buchung angezeigt.

<img src="/my-app/static/img/Screenshots/prototype_booking_page.png" alt="Profil" width="400" height="auto">

**Designentscheidungen:**

**Terminauswahl:**

Im Mockup war ursprünglich eine Kalenderansicht geplant. Diese Umsetzung wäre technisch aufwändiger gewesen. Deshalb wurde für den Prototyp eine einfachere Lösung mit Datum-Buttons und Uhrzeit-Buttons umgesetzt. Diese Variante ist einfacher zu bedienen und erfüllt den Zweck des Prototyps.

**Profil:**

Für den Mindestumfang wurde entschieden, dass das Profil nach der Erstellung nicht bearbeitet werden kann. Die interessierten Sportarten werden als Labels dargestellt, damit sie sich optisch von den übrigen Profildaten abheben.

**Bewertungen:**

Das Schreiben von Bewertungen ist im Mindestumfang nicht implementiert. Bewertungen sind in den Mockdaten vorbereitet und können als Erweiterung umgesetzt werden.

**Kartenansicht:**

Die Kartenansicht mit einer externen Karten-API ist im Mindestumfang nicht implementiert. Sie wird als mögliche Erweiterung vorgesehen.

#### 3.4.2. Umsetzung (Technik)

**Technologie-Stack:**

Die App wurde mit SvelteKit umgesetzt. Für die Gestaltung wird Bootstrap verwendet. Die Daten werden in MongoDB gespeichert. Die Anwendung ist als Web-App aufgebaut und soll auf Desktop, Tablet und Mobile nutzbar sein.

**Tooling:**

Die Entwicklung erfolgte lokal in Visual Studio Code. Für die Datenbank wurde MongoDB Atlas bzw. MongoDB Compass verwendet. Für das Deployment wurde Netlify eingesetzt.

**Struktur & Komponenten:**

**Routen (Seiten):**

**Startseite (`/`):**

Die Startseite ist der Einstiegspunkt der Anwendung. Der User wird aufgefordert, zuerst ein Profil zu erstellen. Wenn bereits ein Profil vorhanden ist, wird der User über die serverseitige Logik automatisch auf die Angebotsübersicht weitergeleitet. Dadurch gelangt ein registrierter User nicht erneut unnötig auf die Einstiegsseite.

**Create-profil (`/create-profil`):**

Auf dieser Seite füllt der User ein Formular zur Profilerstellung aus. Die eingegebenen Daten werden serverseitig verarbeitet und in MongoDB gespeichert. Nach erfolgreicher Speicherung wird die User-ID in einem Cookie gespeichert, damit die App weiss, welcher User aktuell verwendet wird. Danach wird der User automatisch auf die Offers-Seite weitergeleitet.

**Profil (`/profil`):**

Auf dieser Seite sieht der User die gespeicherten Informationen seines Kontos. Die Profildaten werden anhand der gespeicherten User-ID aus der Datenbank geladen. Zusätzlich kann der User sein Konto löschen. Beim Löschen werden auch die zugehörigen Buchungen entfernt und der User wird zurück zur Startseite geleitet.

**Offers (`/offers`):**

Die Offers-Seite ist die Hauptseite der Anwendung. Dort werden Trainingsangebote angezeigt, die zum Profil des Users passen. Die Filterung basiert auf den interessierten Sportarten und dem Niveau des Users. Zusätzlich gibt es einen Bereich mit weiteren empfohlenen Angeboten. Über die Suchfunktion kann der User nach Sportart, Trainer, Standort, Gemeinde oder Kanton suchen. Die Angebote werden aus MongoDB geladen und als Karten dargestellt.

**Detailansicht (`/offers/[id]`):**

Die Detailansicht zeigt alle wichtigen Informationen zu einem einzelnen Trainingsangebot. Dazu gehören Beschreibung, Anforderungen, Preis, Niveau, Standort, Bewertung und Informationen zum Trainer. Von dieser Seite aus kann der User über den Button „Jetzt buchen“ zur Buchungsseite wechseln.

**Booking (`/booking/[offerId]`):**

Die Buchungsseite zeigt dem User die verfügbaren Termine eines Trainingsangebots. Bereits gebuchte Termine werden nicht mehr als auswählbare Option angezeigt. Der User wählt zuerst ein Datum und danach eine passende Uhrzeit. Zusätzlich wird der Standort angezeigt und eine Zusammenfassung der Buchung dargestellt. Beim Absenden wird serverseitig nochmals geprüft, ob der Termin noch frei ist. Danach wird die Buchung in MongoDB gespeichert.

**Buchungsbestätigung (`/booking/success`):**

Nach erfolgreicher Buchung gelangt der User auf die Bestätigungsseite. Dort werden das gebuchte Angebot, der Trainer, der Termin und die Buchungs-ID angezeigt. Die Seite gibt dem User eine klare Rückmeldung, dass die Buchung erfolgreich abgeschlossen wurde.

**Appointments (`/appointments`):**

Auf dieser Seite sieht der User seine gebuchten Termine. Die Buchungen werden anhand der gespeicherten User-ID aus der Datenbank geladen. Der User kann einen Termin stornieren. Für den Prototyp bedeutet Stornieren, dass die Buchung direkt aus der Datenbank gelöscht wird. Vor dem Löschen erscheint eine kurze Bestätigung, damit der Termin nicht versehentlich entfernt wird.

**Komponenten:**

**ProfileForm und ProfileCard:**

`my-app/src/lib/components/profile/ProfileForm.svelte`  
`my-app/src/lib/components/profile/ProfileCard.svelte`

ProfileForm wird für die Erstellung des Profils verwendet. Das Formular erfasst Vorname, Nachname, Geburtsdatum, E-Mail, Telefonnummer, Kanton, Gemeinde und drei interessierte Sportarten mit Niveau. Die Auswahl von Kanton und Gemeinde ist abhängig voneinander. Wenn ein Kanton ausgewählt wird, werden nur die passenden Gemeinden angezeigt.

ProfileCard zeigt die gespeicherten Profildaten in einer readonly Ansicht an. Dadurch können die Informationen sauber dargestellt werden, ohne dass sie direkt bearbeitet werden.

**OfferCard:**

`my-app/src/lib/components/offers/OfferCard.svelte`

Die OfferCard zeigt ein einzelnes Trainingsangebot als Karte an. Sie enthält die wichtigsten Informationen für die erste Auswahl, zum Beispiel Titel, Trainername, Niveau, Standort, Gemeinde/Kanton und Preis pro Stunde. Die Karte ist mit der Detailseite des Angebots verlinkt.

**OfferList:**

`my-app/src/lib/components/offers/OfferList.svelte`

Die OfferList zeigt mehrere Angebote in einem Bootstrap-Grid-System an. Zu Beginn werden nur vier Angebote angezeigt. Über den Button „Mehr anzeigen“ kann der User weitere Angebote einblenden und mit „Weniger anzeigen“ wieder reduzieren. Dadurch bleibt die Seite übersichtlich.

**OfferDetail:**

`my-app/src/lib/components/offers/OfferDetail.svelte`

Die Komponente strukturiert die Detailansicht eines Angebots. Sie zeigt Beschreibung, Anforderungen, Preis, Niveau, Standort und Bewertung. Dadurch bleiben die Informationen auf der Detailseite übersichtlich gegliedert.

**SearchBar:**

`my-app/src/lib/components/SearchBar.svelte`

Die SearchBar ermöglicht eine globale Suche über alle geladenen Angebote. Die Suche durchsucht Angebotstitel, Sportart, Trainername, Standort, Gemeinde und Kanton. Passende Resultate werden direkt unter dem Suchfeld angezeigt. Wenn der User ein Resultat auswählt, gelangt er direkt zur Detailansicht des Angebots.

**DateSelect und TimeSlotSelect:**

`my-app/src/lib/components/booking/DateSelect.svelte`  
`my-app/src/lib/components/booking/TimeSlotSelect.svelte`

DateSelect zeigt die verfügbaren Tage eines Trainingsangebots als auswählbare Buttons an. TimeSlotSelect zeigt danach die verfügbaren Uhrzeiten zum ausgewählten Datum. Dadurch wird der Buchungsprozess Schritt für Schritt geführt.

**BookingSummary und BookingConfirmation:**

`my-app/src/lib/components/booking/BookingSummary.svelte`  
`my-app/src/lib/components/booking/BookingConfirmation.svelte`

BookingSummary fasst vor dem Absenden der Buchung die wichtigsten Angaben zusammen. BookingConfirmation wird nach erfolgreicher Buchung verwendet und zeigt dem User eine Bestätigung mit Angebot, Trainer, Termin und Buchungs-ID.

**AppointmentCard und AppointmentList:**

`my-app/src/lib/components/appointments/AppointmentCard.svelte`  
`my-app/src/lib/components/appointments/AppointmentList.svelte`

AppointmentList zeigt alle gebuchten Termine des Users an. AppointmentCard stellt einen einzelnen Termin als Karte dar und enthält die Möglichkeit, den Termin zu stornieren. Dadurch kann der User seine gebuchten Termine einfach verwalten.

**Daten & Schnittstellen:**

Die Daten der Proboos App werden in MongoDB gespeichert und verwaltet. Die Schnittstelle zwischen der SvelteKit-Anwendung und der Datenbank erfolgt über die Datei `my-app/src/lib/db.js`. In dieser Datei befinden sich die wichtigsten asynchronen Funktionen für den Datenzugriff, zum Beispiel zum Laden von Angeboten, Speichern von Profilen, Erstellen von Buchungen oder Löschen von Terminen.

Die eigentliche Verarbeitung findet in den jeweiligen `+page.server.js` Dateien statt. Diese Dateien rufen die Funktionen aus `db.js` auf und geben die geladenen Daten an die passenden `+page.svelte` Seiten weiter. Dadurch bleibt die Datenbanklogik vom sichtbaren Frontend getrennt.

**Datenstruktur:**

Die Daten werden in MongoDB in verschiedenen Collections gespeichert. Für den Mindestumfang sind vor allem `users`, `trainingOffers`, `trainingLocations` und `bookings` relevant. Die Collection `reviews` wird für Bewertungen genutzt. Die Collection `messages` ist in den Mockdaten vorbereitet, wird im aktuellen Mindestumfang aber noch nicht aktiv verwendet.

<img src="/my-app/static/img/MongoDb Structure.svg" alt="MongoDb-Struktur" width="400" height="auto">

**Mockdaten:**

Die Mockdaten dienen dazu, den Prototyp mit realistischen Beispieldaten zu testen. In den JSON-Dateien kann die Datenstruktur der einzelnen Collections nachvollzogen werden.

Ordner: `json_mockdata`

**Wichtige Metadaten zu den Mockdaten:**

- Anzahl Users: 26
- Training Locations: 10
- Trainingsangebote: 22
- Buchungen: 18
- Bewertungen: 7
- Nachrichten: 18

**Auswahl von Sportarten:**

- Krafttraining
- Tennis
- Schwimmen
- Boxen
- Yoga
- Golf

**Speicherung eines neuen Profils:**

Datei: `my-app/src/routes/create-profil/+page.server.js`

Für die Speicherung eines neuen Profils wird eine serverseitige `action` verwendet. Die eingegebenen Formularwerte werden über `request.formData()` ausgelesen und zu einem neuen User-Objekt zusammengesetzt. Dieses Objekt wird anschliessend mit der Funktion `createUser()` in MongoDB gespeichert.

Nach dem Speichern erstellt MongoDB eine eindeutige ID für den User. Diese ID wird als Cookie im Browser gespeichert. Dadurch weiss die App bei späteren Seitenaufrufen, welcher User aktuell aktiv ist. So können zum Beispiel das Profil, passende Angebote und gebuchte Termine automatisch dem richtigen User zugeordnet werden.

**Laden der Angebote anhand des Profils:**

Datei: `my-app/src/routes/offers/+page.server.js`

Auf der Offers-Seite werden zuerst der aktive User und alle Trainingsangebote aus der Datenbank geladen. Danach werden die Angebote mit den Interessen des Users verglichen. Dabei werden die gewählten Sportarten und das Niveau berücksichtigt. Passende Angebote werden im oberen Bereich angezeigt. Zusätzlich werden weitere Angebote als Empfehlungen dargestellt.

**Terminauswahl und Speicherung der Buchung:**

Datei: `my-app/src/routes/booking/[offerId]/+page.server.js`

Bei der Buchung lädt der Server das ausgewählte Angebot und die bereits bestehenden Buchungen für dieses Angebot. Dadurch kann geprüft werden, welche Termine noch verfügbar sind. Bereits gebuchte Termine werden im Frontend nicht mehr als auswählbare Option angezeigt.

Beim Absenden der Buchung prüft die serverseitige `action` nochmals, ob Datum und Uhrzeit ausgewählt wurden und ob der Termin noch frei ist. Wenn der Termin verfügbar ist, werden die Buchungsdaten an `createBooking()` übergeben. Diese Funktion speichert die Buchung als neuen Eintrag in der Collection `bookings`.

**Meine Termine:**

Datei: `my-app/src/routes/appointments/+page.server.js`

Die Seite „Meine Termine“ lädt alle Buchungen des aktiven Users. Dafür wird die im Cookie gespeicherte User-ID verwendet. Mit der Funktion `getBookingsByUser()` werden die passenden Buchungen aus MongoDB abgerufen und mit den dazugehörigen Angebots-, Trainer- und Standortdaten ergänzt.

Zusätzlich können Termine storniert werden. Dafür wird eine serverseitige `action` verwendet. Die Buchung wird anhand der `bookingId` und der `userId` identifiziert und mit `deleteBooking()` aus der Datenbank gelöscht. Vor dem Löschen erscheint im Frontend eine Bestätigung, damit der Termin nicht versehentlich storniert wird.

**Deployment:**

https://prooboscoachingapp1.netlify.app/

**Besondere Entscheidungen:**

- Die App verwendet im Prototyp kein echtes Login, sondern speichert die User-ID nach der Profilerstellung in einem Cookie.
- Buchungen werden im Mindestumfang direkt bestätigt. Ein Trainer-Bestätigungsprozess ist als Erweiterung vorgesehen.
- Bereits gebuchte Termine werden bei der Buchung nicht mehr als auswählbare Option angezeigt.
- Eine vollständige Kalenderansicht wurde zugunsten einer einfacheren Datum- und Uhrzeitauswahl nicht umgesetzt.
- Die Kartenansicht und freie Standortsuche sind als Erweiterungen vorgesehen.

### 3.5 Validate

- **URL der getesteten Version** (separat deployt)
- **Ziele der Prüfung:** _[welche Fragen sollen beantwortet werden?]_
- **Vorgehen:** _[moderiert/unmoderiert; remote/on-site]_
- **Stichprobe:** _[Mit wem wurde getestet? Profil; Anzahl]_
- **Aufgaben/Szenarien:** _[Ausformulierte Testaufgaben]_
- **Kennzahlen & Beobachtungen:** _[z. B. Erfolgsquote, Zeitbedarf, qualitative Findings]_
- **Zusammenfassung der Resultate:** _[Wichtigste Erkenntnisse; 2-4 Sätze]_
- **Abgeleitete Verbesserungen:** _[Anforderungen, die als nächstes umgesetzt werden sollten, priorisiert, kurz begründet; falls Verbesserungen im Prototyp konkret umgesetzt wurden: In Kap. 4 dokumentieren]_

## 4. Erweiterungen [Optional]

### 4.1 Kartenansicht und Standortsuche mit externer API

- **Beschreibung & Nutzen:** Als Erweiterung könnte eine Karten-API wie Google Maps, Mapbox oder OpenStreetMap integriert werden. Dadurch könnten Nutzer Trainingsangebote auf einer Karte sehen und nach Standorten in ihrer Nähe suchen. Zusätzlich könnten freie Wunschstandorte vorgeschlagen werden, z. B. ein Tennisplatz, Sportplatz oder Fitnessstudio in der Umgebung.
- **Wo umgesetzt:** Noch nicht umgesetzt. Die Datenstruktur ist mit Standortdaten und Koordinaten vorbereitet.
- **Referenz:** Mockup und Datenstruktur.
- **Aus Evaluation abgeleitet?:** Nein, als geplante Erweiterung vorgesehen.

### 4.2 Trainerbereich

- **Beschreibung & Nutzen:** Trainer könnten eigene Angebote erstellen, Preise definieren und verfügbare Termine verwalten. Dadurch würde die Plattform auch für Trainer vollständig nutzbar.
- **Wo umgesetzt:** Noch nicht umgesetzt.
- **Referenz:** Use-Case-Diagramm und Erweiterungsidee.
- **Aus Evaluation abgeleitet?:** Nein, als Erweiterung vorgesehen.

### 4.3 Trainerbestätigung von Buchungen

- **Beschreibung & Nutzen:** Im Prototyp werden Buchungen direkt bestätigt. Als Erweiterung könnten Trainer Buchungsanfragen bestätigen oder ablehnen. Dadurch würde der Prozess realistischer.
- **Wo umgesetzt:** Noch nicht umgesetzt.
- **Referenz:** End-to-End-Ablauf.
- **Aus Evaluation abgeleitet?:** Nein, als Erweiterung vorgesehen.

### 4.4 Favoritenfunktion

- **Beschreibung & Nutzen:** User könnten Angebote speichern und später wiederfinden. Dadurch könnten sie mehrere Angebote vergleichen, bevor sie eine Buchung abschliessen.
- **Wo umgesetzt:** Noch nicht umgesetzt.
- **Referenz:** Mockup und UX-Konzept.
- **Aus Evaluation abgeleitet?:** Nein, als Erweiterung vorgesehen.

### 4.5 Bewertungen schreiben

- **Beschreibung & Nutzen:** Nach einem absolvierten Training könnten User eine Bewertung abgeben. Dadurch würde die Transparenz und Vertrauenswürdigkeit der Plattform erhöht.
- **Wo umgesetzt:** Noch nicht umgesetzt. Die Collection `reviews` ist in den Mockdaten vorbereitet.
- **Referenz:** Mockdaten und Detailansicht.
- **Aus Evaluation abgeleitet?:** Nein, als Erweiterung vorgesehen.

## 5. Projektorganisation [Optional]

**Repository & Struktur:**


Die Anwendung ist als SvelteKit-Projekt aufgebaut. Die wichtigsten Ordner sind:

- `src/routes`: Seiten und serverseitige Logik
- `src/lib/components`: Wiederverwendbare Komponenten
- `src/lib/db.js`: Datenbankschnittstelle
- `static`: Statische Assets wie Platzhalterbilder
- `json_mockdata`: Mockdaten für MongoDB


- **Issue-Management:** _[Vorgehen kurz beschreiben]_
- **Commit-Praxis:** _[z. B. sprechende Commits]_



## 6. KI-Deklaration

Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools

- **Eingesetzte Tools**: _[z. B. Copilot, ChatGPT, Claude, lokale Modelle; Version/Variante wenn bekannt]_
- **Zweck & Umfang**: _[wie, wofür und in welchem Ausmass wurde KI eingesetzt (z. B. Textentwürfe, Codevorschläge, Tests, Refactoring); welche Teile stammen (ganz/teilweise) aus KI-Unterstützung?]_
- **Eigene Leistung (Abgrenzung):** _[was ist eigenständig erarbeitet/überarbeitet worden?]_

### 6.2 Prompt-Vorgehen

_[Überlegungen zu Prompt-Vorgehen, Qualität und Urheberrecht/Quellen. Wie wurde beim Prompting vorgegangen? Zu beschreiben ist die grundlegende Vorgehensweise. Einzelne, konkrete Prompts sollten höchstens als Beispiele aufgeführt werden. ]_

### 6.3 Reflexion

_[Nutzen, Grenzen, Risiken/Qualitätssicherung, ...]_

## 7. Anhang [Optional]

Beispiele:

**Quellen:**

- Figma Mockup: https://www.figma.com/proto/WeAMfqd8XFX7e8SgEoxRPi/Prodos-App-und-Web
- User Journey Map: https://miro.com/app/board/uXjVHWN_yek=/?share_link_id=313710122623
- Deployment: https://prooboscoachingapp1.netlify.app/

- **Testskript & Materialien:** _[Link/Datei]_
- **Rohdaten/Auswertung:** _[Link/Datei]_

