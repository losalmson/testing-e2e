Vi skall i dessa övningar installera och skriva några tester med hjälp av cypress. Cypress är ett verktyg som hjälper oss att skriva end to end-tester (e2e). 

1.Era övningar i för cypress blir att skriva tester till den numer välbekanta applikationen todo. Anledningen till att det är bra att återanvända applikationer är att ni inte behöver tänka på funktionaliteten i applikationen utan bara fokusera på att lära er cypress. 

2.Ladda ner repot från följande url: sebastiantegel/fed22-testing-e2e-excersices (github.com)

3.Till att börja med behöver vi installera cypress. Detta gör vi genom att kör det numer välbekanta kommandot:npm i --save-dev cypress

4.För att cypress skall fungera med typescript behöver vi göra lite konfiguration som står beskriven här: TypeScript | Cypress Documentation

5.För att starta cypress behöver du köra kommandot npx cypress open
Detta kommer att starta cypress vilket sedan låter oss konfigurera vidare. 

6.När du kör igång cypress behöver du göra några val. Vi kommer att använda cypress för att göra e2e-tester, så välj den rutan när cypress öppnas.

7.Du får härefter välja vilken av dina installerade webbläsare som du vill använda för att köra dina tester. Välj din favvo :)

8.Välj sedan att skapa ett nytt tomt test och kom ihåg filändelsen skall ändras till ts.

9.Testa att köra det nya testet och se till att det passerar och blir godkänt. 

10.Nu skall vi börja skriva tester för vår todo. Det första testet vi skall skriva är för att kontrollera att vår sida har en rubrik som innehåller texten "Välkommen till din todo-lista". För att skriva ett nytt test, öppna filen som innehåller dina tester. Om du inte ändrade filnamnet från övning 9 här ovan så heter filen spec.cy.ts.

11.I test-filen, skapa en nytt test genom att anropa funktionen it() innanför describe-funktionen. Du kan ta lite inspiration från det första testet som finns där. Ge testet namnet "should have a heading". Varje test skall alltid börja med cy.visit("Url för din applikation"), vilket betyder att webbläsaren skall surfatill din sida.

12.Inuti testets funktion har du tillgång till din webbläsare som kör testet. För att berätta för ditt test att du vill hitta någonting i webbläsaren så använder du objektet cy. cy har en funktion som heter get("") där du kan ange vilken selektor det är du vill hitta. Selektor är samma sak som css-selektorer så du kan söka efter t.ex. div, div.class eller #myId. Sök nu reda på rubriken. 

13.Vi fortsätter samma test med att vi vill kontroller att rubriken innehåller en given text. Detta kan vi göra genom att kedja två anrop, alltså skriva dem efter varandra på samma rad. Funktionen som kontrollerar innehåll heter contains vilket gör att vårt 
anrop nu blir:get("...").contains("text to contain");Ersätt gärna punkterna och text to contain med verkliga saker från din applikation. 

14.Spara testet och kör igång det för att kontrollera att allting fungerar. Det borde det göra.

15.Nästa test skall kontrollera att vi kan skriva saker i vår textruta. Detta gör vi genom att i testet använda cy.get() och kedja det med följande funktioner:* type* shouldResultatet kommer att se ut någonting liknande: get("...").type("text som skall skrivas")should("have.value", "värde som borde stå i textrutan");Detta test borde även det bli godkänt. 

16.Nu skall vi klicka på knappen och kontrollera att allting körs korrekt. Kopiera det föregående testet då vi skall göra samma sak i det som vi nu skall göra. Sist i detta test, hitta knappen och klicka på den. Nu kan vi kontroller att vi har någonting i DOM:en genomatt köra cy.get("") igen för att hitta vad som än har skapats. Här gäller det att ni förstår vad applikationen gör så att ni kan hitta rätt element. Använd sedan funktionen should med första argumen have.length för att kontrollera att er cy.get har hittaträtt element. 

17.Vi fortsätter genom att skapa ett test som skall kontroller att en todo blir markerad som klar. Kopiera testet ovanför till ett nytt test. I slutet på testet, hitta det första li-elementet i listan och klicka på det. Kontrollera sedan att klassen todo__text--done finns på elementet. Detta kan göras genom should("have.class", "className")

18.Ni får gärna skriva ett till test som kontrollerar att ni kan markera en todo som inte klar också :)

19.Som en sista övning kan vi skapa ett test som rensar listan. Kopiera det tidigare testet. Efter att er todo är skapad och kontrollerad att det finns, hitta knappen för rensa. cy.get("...") och klicka på den genom click(). Nu kan du kontroller att det inte finns några li-taggar genom att försöka hitta alla li-taggar och kontroller att längden på mängden element är 0. Detta är samma teknik som i övning 16 här ovanför. 

20.Ni kan nu också skriva tester som kontrollerar att localStorage fungerar på liknande sätt. Försök att lägga in någonting i localStorage innan ni sätter igång och gör saker i testet. Kontrollera i slutet av testet att det finns någonting i localStorage. Vad som skall finnas och hur ni gör är lite upp till er. 
