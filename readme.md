
<img width="8192" height="7844" alt="Diagrama conceptuală-2026-03-28-102920" src="https://github.com/user-attachments/assets/c4469858-5395-4ad2-aa60-6f62334888a9" />

1. Subsistemul Gestiune Solicitanți (Candidați)
•	Înregistrare și Autentificare: Sistemul trebuie să permită crearea de conturi securizate, validarea adresei de email prin „Double Opt-In” și recuperarea parolelor.
•	Gestionarea Profilului: Candidații pot crea și edita un profil personal care include date demografice, studii și experiență profesională.
•	Editorul de CV: O funcționalitate centrală care permite crearea, modificarea și actualizarea CV-ului direct în platformă, precum și exportul acestuia în format PDF.
•	Gestiunea Calificărilor: Utilizatorii pot selecta competențele dintr-un nomenclator standardizat și își pot auto-evalua nivelul (1-5).
•	Vizualizarea Statusului: Candidații pot urmări în timp real stadiul aplicațiilor depuse și notificările primite.
2. Subsistemul Gestiune Oferte și Firme (Angajatori)
•	Administrare Cont Firmă: Gestionarea datelor fiscale (CUI, nr. Reg. Com.), a punctelor de lucru și a persoanelor de contact.
•	Gestionarea Posturilor Vacante: Firmele pot crea posturi noi, definind titlul, descrierea, intervalul salarial și data limită.
•	Standardizarea Cerințelor: La definirea unui post, recrutorul este obligat să selecteze cerințele din nomenclatorul de calificări și să specifice dacă o competență este „Obligatorie” sau „Opțională”.
•	Afișare și Filtrare: Sistemul trebuie să afișeze joburile disponibile cu posibilitatea de filtrare după cuvinte cheie, domeniu, locație și nivel de experiență.
3. Subsistemul Core (Motorul de Matching și Automatizare)
•	Calculul Scorului de Compatibilitate: Analiza automată a potrivirii dintre profilul candidatului și cerințele postului, generând un scor de matching (0-100%).
•	Filtrare și Ierarhizare: Generarea unor „liste scurte” (Shortlists) cu cei mai potriviți candidați pentru fiecare post.
•	Notificări Automate: Trimiterea alertelor prin Email către candidați atunci când sistemul detectează o potrivire de peste 90% sau când statusul unei aplicații se modifică.
•	Gestiunea Aplicațiilor: Înregistrarea fiecărei candidaturi, verificarea unicității (un candidat nu poate aplica de două ori la același post activ) 
4. Subsistemul Administrativ și Raportare
•	Control Managerial și Audit: Jurnalizarea accesului (log-uri), gestionarea rolurilor (RBAC) și monitorizarea blocajelor în procesul de mediere.
•	Generarea Rapoartelor:
o	Operaționale: Statistici zilnice despre CV-uri noi și numărul de plasări.
o	Manageriale: Indicatori de performanță (KPI), eficiența recrutorilor și venituri estimate.
•	Conformitate GDPR: Funcționalități de anonimizare a datelor personale la cererea fermelor sau candidaților, păstrând doar ID-urile pentru statistici.
