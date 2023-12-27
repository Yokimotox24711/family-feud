"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Grid from "@mui/material/Unstable_Grid2";
import Head from "next/head";

function familyFeud() {
  const [questions, setQuestions] = useState([
    {
      question: "Noem een frisdrank die mensen graag drinken",
      answers: [
        "Coca-Cola (39)",
        "Pepsi (14)",
        "Ice Tea (11)",
        "Sprite (7)",
        "Fanta/Limonade (29)",
      ],
    },
    {
      question: "Noem een vrucht die je als ontbijt zou kunnen eten.",
      answers: [
        "Appelsien/Mandarijn (38)",
        "Grapefruit (27)",
        "Banaan (18)",
        "Bosbessen (9)",
        "Aardbeien (8)",
      ],
    },
    {
      question: "Noem iets dat mensen misschien maar één keer per week doen.",
      answers: [
        "Wasserij (27)",
        "Kruidenier (25)",
        "Oefening (21)",
        "Naar de kerk gaan (15)",
        "Gras maaien (12)",
      ],
    },
    {
      question: "Noem iets dat je koopt nadat je een puppy hebt gekregen.",
      answers: [
        "Voedsel (56)",
        "Speelgoed (22)",
        "Halsband (10)",
        "Leiband (8)",
        "Bed (4)",
      ],
    },
    {
      question: "Noem iets wat je doet vlak voordat je naar bed gaat.",
      answers: [
        "Douche of bad (36)",
        "Tandenpoetsen (24)",
        "Lezen (21)",
        "Televisie kijken (14)",
        "Leg de kleding voor de volgende dag buiten (5)",
      ],
    },
    {
      question: "Noem iets dat op tafel ligt in een restaurant.",
      answers: [
        "Menukaart (48)",
        "Brillen (20)",
        "Zilverwerk (17)",
        "Gerechten (10)",
        "Zout- en peperstrooiers (5)",
      ],
    },
    {
      question: "Noem een voedsel dat kinderen niet graag eten.",
      answers: [
        "Vis (35)",
        "Spruitjes (22)",
        "Broccoli (21)",
        "Eieren (17)",
        "Avocado (5)",
      ],
    },
    {
      question: "Noem een favoriet eten van kinderen.",
      answers: [
        "Cornflakes (28)",
        "Frietjes (26)",
        "Pizza (25)",
        "Hamburger (11)",
        "Hotdogs (10)",
      ],
    },
    {
      question: "Noem iets dat je op je hoofd draagt.",
      answers: [
        "Een hoed of pet of muts (31)",
        "Een helm (27)",
        "Een hoofdband (22)",
        "Sluier of sjaal (17)",
        "Pruik (3)",
      ],
    },
    {
      question: "Noem iets dat je op je gezicht draagt.",
      answers: [
        "Brillen (52)",
        "Make-up (27)",
        "Piercing zoals neusring of lipring (10)",
        "Masker of gezichtsbeschermer van een helm (6)",
        "Sjaal of bandana of bivakmuts (5)",
      ],
    },
    {
      question: "Noem iets dat je in een badkamer zou kunnen tegenkomen.",
      answers: [
        "Toilet of toiletpapier (27)",
        "Douche of bad (22)",
        "Spiegel (21)",
        "Zeep (16)",
        "Handdoeken of washandjes (14)",
      ],
    },
    {
      question:
        "Noem iets in iemands kast dat alleen bij speciale gelegenheden tevoorschijn komt.",
      answers: [
        "Pak/Smoking (35)",
        "Jurk (26)",
        "Sieraden (10)",
        "Geklede schoenen (6)",
        "Jachtgeweer (4)",
      ],
    },
    {
      question: "Noem iets dat je in de oceaan kunt vinden.",
      answers: [
        "Vis (44)",
        "Walvissen (19)",
        "Haaien (17)",
        "Boten (10)",
        "Dolfijnen (10)",
      ],
    },
    {
      question:
        "Noem een stuk gereedschap dat je misschien in een gereedschapskist tegenkomt.",
      answers: [
        "Hamer (27)",
        "Schroevendraaier (25)",
        "Tangen (19)",
        "Sleutel (17)",
        "Meetlint (12)",
      ],
    },
    {
      question: "Noem iets dat je misschien in de keukenkast vindt.",
      answers: [
        "Borden (27)",
        "Glazen (22)",
        "Kommen (21)",
        "Voedsel (18)",
        "Specerijen (12)",
      ],
    },
    {
      question: "Noem een geluid dat je buiten zou kunnen horen.",
      answers: [
        "Verkeer (45)",
        "Vogels (22)",
        "Sirenes (16)",
        "Elektrisch gereedschap (11)",
        "Stemmen of spelende kinderen of muziek (6)",
      ],
    },
    {
      question: "Noem iets dat wordt aangedreven door een motor.",
      answers: [
        "Auto of vrachtwagen (37)",
        "Motor (21)",
        "Bus of taxi (17)",
        "Boot (13)",
        "Grasmaaier of tractor (12)",
      ],
    },
    {
      question: "Noem iets dat je in een bureaulade zou kunnen vinden.",
      answers: [
        "Pennen (29)",
        "Lat (24)",
        "Plakband/Tape (19)",
        "Nietjes (17)",
        "Plakbriefjes (11)",
      ],
    },
    {
      question: "Noem iets wat uw dokter u zou kunnen vertellen.",
      answers: [
        "Afvallen of sporten (38)",
        "Stoppen met roken (25)",
        "Voer meer tests uit / laat meer bloedonderzoek doen (19)",
        "Maak een vervolgafspraak (14)",
        "Je bent in orde. Ga naar huis. (4)",
      ],
    },
    {
      question: "Noem een onderwerp dat je op de basisschool hebt geleerd.",
      answers: [
        "Lezen (24)",
        "Schrijven (22)",
        "Wiskunde (19)",
        "Wetenschap (18)",
        "Aardrijkskunde (17)",
      ],
    },
    {
      question: "Noem iets dat je aan je voeten zou kunnen dragen.",
      answers: [
        "Schoenen of sandalen (36)",
        "Hakken (22)",
        "Laarzen (22)",
        "Sokken (16)",
        "Slippers of pantoffels (19)",
      ],
    },
    {
      question:
        "Noem iets dat je zou kunnen tegenkomen in de zuivelafdeling van de supermarkt.",
      answers: [
        "Melk (39)",
        "Kaas (21)",
        "Boter (18)",
        "Yoghurt (16)",
        "Zure room (6)",
      ],
    },
    {
      question: "Noem een populair filmgenre.",
      answers: [
        "Actiefilms of Verfilmde Stripverhalen (34)",
        "Horror (27)",
        "Sciencefiction (20)",
        "Thriller (16)",
        "Komedie (3)",
      ],
    },
    {
      question: "Noem een planeet in het universum.",
      answers: [
        "Aarde (40)",
        "Mars (21)",
        "Jupiter (17)",
        "Saturnus (13)",
        "Mercurius (9)",
      ],
    },
    {
      question: "Noem iets dat uw tandarts mogelijk bij u gebruikt.",
      answers: [
        "Boor (31)",
        "Novocaine en naald (27)",
        "Tandenstoker (22)",
        "Watersproeier of zuignap (16)",
        "Gas of anesthesie (4)",
      ],
    },
    {
      question: "Noem iets dat je op kantoor zou kunnen tegenkomen.",
      answers: [
        "Bureau (22)",
        "Stoel (22)",
        "Computer (21)",
        "Archiefkast (19)",
        "Receptioniste of kantoormedewerker (16)",
      ],
    },
    {
      question: "Noem iets wat je leraar op haar bureau had liggen.",
      answers: [
        "Haar puntenlijst (32)",
        "Potloden en pennen (30)",
        "Krijt (20)",
        "Lesboeken (15)",
        "Een appel (3)",
      ],
    },
    {
      question: "Noem iets waarop je kunt rijden.",
      answers: [
        "Een fiets (29)",
        "Een paard (23)",
        "Een scooter of motor (19)",
        "Een achtbaan (16)",
        "Bus of trein (13)",
      ],
    },
    {
      question:
        "Noem, uitsluitend een bed, een plek waar mensen in slaap vallen.",
      answers: [
        "Op weg naar huis van werk met bus of trein (24)",
        "Aan hun bureau op het werk (23)",
        "In een vliegtuig (27)",
        "Op de bank of stoel (19)",
        "Op de vloer (7)",
      ],
    },
    {
      question: "Noem iets dat mensen drinken bij hun maaltijden.",
      answers: [
        "Wijn (25)",
        "Water (22)",
        "Melk (19)",
        "Frisdrank (18)",
        "Bier (16)",
      ],
    },
    {
      question: "Noem iets waarmee je zou kunnen schrijven.",
      answers: [
        "Pennen (25)",
        "Computer (22)",
        "Potloden (20)",
        "Typemachine (18)",
        "Markeringen (15)",
      ],
    },
    {
      question:
        "Noem een reden waarom mensen midden in de nacht wakker worden.",
      answers: [
        "Moet naar de badkamer (25)",
        "Nare droom (15)",
        "Honger/dorst (33)",
        "Woon een huilend kind bij (7)",
        "Hoorde een geluid (5)",
      ],
    },
    {
      question: "Noem iets dat je op krediet zou kunnen kopen.",
      answers: [
        "Huis (26)",
        "Auto (26)",
        "Meubilair (19)",
        "Kleding en sieraden (16)",
        "Recreatieve uitrusting zoals boten, sportuitrusting, enz. (13)",
      ],
    },
    {
      question: "Noem iets dat je speelt of doet met een pak kaarten.",
      answers: [
        "Poker of Blackjack of gokken (25)",
        "Kaartspellen zoals rummy, harten, patience, enz. (24)",
        "Schudden en delen (18)",
        "Goocheltrucs (10)",
      ],
    },
    {
      question:
        "Noem een van de chemische elementen waaruit het leven bestaat.",
      answers: [
        "Zuurstof (51)",
        "Koolstof (carbon) (21)",
        "Waterstof (19)",
        "Stikstof (10)",
        "Zwavel (8)",
      ],
    },
    {
      question:
        "Noem iets dat een boer op zijn boerderij zou kunnen gebruiken.",
      answers: [
        "Trekker (33)",
        "Kruiwagen (22)",
        "Vrachtwagen (19)",
        "Emmer (14)",
        "Dierenvoeding (12)",
      ],
    },
    {
      question: "Noem iets met een sirene.",
      answers: [
        "Politieauto (28)",
        "Ziekenwagen (26)",
        "Brandweerwagen (24)",
        "Weeralarm (19)",
        "Klok (3)",
      ],
    },
    {
      question: "Noem iets dat je zou kunnen associëren met een piraat.",
      answers: [
        "Schip (29)",
        "Zwaard (24)",
        "Sjaal (23)",
        "Rum (16)",
        "Papegaai (8)",
      ],
    },
    {
      question:
        "Noem iets dat je misschien op de vloer van de slaapkamer van een tiener vindt.",
      answers: [
        "Kleding (36)",
        "Voedsel (29)",
        "Huiswerk of boeken (26)",
        "Speelgoed of sportartikelen (7)",
        "Vuil (2)",
      ],
    },
    {
      question: "Noem iets dat kinderen niet mogen aanraken.",
      answers: [
        "Kachel (36)",
        "Vuur (29)",
        "Elektriciteitskast (14)",
        "Glas of vazen of iets wat breekbaar is (13)",
        "Scherpe objecten (8)",
      ],
    },
    {
      question: "Noem iets dat je zou kunnen vinden in een EHBO-doos.",
      answers: [
        "Verband (41)",
        "Aspirines (29)",
        "Antibioticacrème (21)",
        "Pincet (7)",
        "Oogspoeling (2)",
      ],
    },
    {
      question:
        "Noem iets dat slechte chauffeurs doen terwijl ze achter het stuur van hun auto zitten.",
      answers: [
        "Chatten/SMS’en (43)",
        "Snel rijden (27)",
        "Tailgate (16)",
        "Dronken rijden (10)",
        "Eten (4)",
      ],
    },
    {
      question:
        "Noem een soort melk die u zou kunnen drinken als u lactose-intolerant bent.",
      answers: [
        "Amandel (27)",
        "Soja (25)",
        "Rijstmelk (19)",
        "Kokosnoot (18)",
        "Cashewnoten (11)",
      ],
    },
    {
      question:
        "Noem, behalve Alice, een personage dat je mogelijk in de film tegenkomt Alice in Wonderland.",
      answers: [
        "Wit Konijn (31)",
        "Gekke Hoedenmaker (27)",
        "Hartenkoningin (21)",
        "Cheshire-kat (17)",
        "Tweedledum en Tweedledee of de tweeling (4)",
      ],
    },
    {
      question:
        "Noem iets dat je zou kunnen associëren met een commercieel vliegtuig.",
      answers: [
        "Piloot (28)",
        "Steward of stewardess (27)",
        "Bagage (26)",
        "Pinda's (10)",
        "Noodinstructies (9)",
      ],
    },
    {
      question:
        "Noem iets dat u aan uw ober zou kunnen vragen om u te brengen.",
      answers: [
        "Dessert (26)",
        "Servet (21)",
        "Bestek (20)",
        "Water (17)",
        "Menukaart (16)",
      ],
    },
    {
      question: "Noem iemand die u aanwijzingen geeft.",
      answers: [
        "GPS (36)",
        "Baas (31)",
        "Politieagent (16)",
        "Leerkracht (15)",
        "Vriend (2)",
      ],
    },
    {
      question: "Noem iets dat je associeert met koud weer.",
      answers: [
        "Sneeuw (27)",
        "Jas (26)",
        "Wanten of handschoenen (19)",
        "Muts (15)",
        "IJs (13)",
      ],
    },
    {
      question: "Noem iets dat je in je agenda zou kunnen schrijven.",
      answers: [
        "Afspraken (29)",
        "Verjaardagen (26)",
        "Vervaldata van facturen (21)",
        "Werktaken (15)",
        "Adressen (8)",
      ],
    },
    {
      question: "Noem iets dat je misschien associeert met het strand.",
      answers: [
        "Zand (36)",
        "Oceaan of golven (34)",
        "Surfers (16)",
        "Paraplu's (12)",
        "Vogels (2)",
      ],
    },
    {
      question: "Noem een schaaldier dat lekker is om te eten.",
      answers: [
        "Kreeft (34)",
        "Garnalen (29)",
        "Krabben (21)",
        "Oesters (12)",
        "Sint-Jakobsschelpen (4)",
      ],
    },
    {
      question: "Noem iets dat je zou kunnen associëren met een speeltuin.",
      answers: [
        "Schommels (28)",
        "Glijbanen (27)",
        "Monkeybars (26)",
        "Draaimolen (14)",
        "Zandbak (5)",
      ],
    },
    {
      question: "Wat kan de reden zijn om te laat op het werk te gaan?",
      answers: [
        "Laat opstaan (24)",
        "Verkeer (18)",
        "Busvertraging (14)",
        "Weer (25)",
        "Autopech (20)",
      ],
    },
    {
      question: "Wat is het eerste dat je doet nadat je wakker bent geworden?",
      answers: [
        "Open ogen (33)",
        "Bezoek de badkamer (21)",
        "Tanden poetsen (15)",
        "Douche (19)",
        "Schakel het alarm uit (12)",
      ],
    },
    {
      question: "Noem iets wat je voor de spiegel zou doen.",
      answers: [
        "Tanden poetsen (26)",
        "Borstel haar (23)",
        "Een puistje/puist uitknijpen (19)",
        "Controleer je outfit (17)",
        "Danspasjes oefenen (15)",
      ],
    },
    {
      question: "Noem iets wat je 's avonds zou kunnen doen.",
      answers: [
        "Een boek lezen (26)",
        "Speel op je telefoon (23)",
        "Speel een bordspel (20)",
        "Een videogame spelen (17)",
        "Mediteren (14)",
      ],
    },
    {
      question: "Noem een woord dat rijmt op 'hondje'",
      answers: ["Lontje (20)", "Mondje (34)", "Wondje (18)", "Blondje (28)"],
    },
    {
      question: "Noem iets dat druppelt.",
      answers: [
        "Water/kraan (92)",
        "Een neus (4)",
        "Een kaars (2)",
        "Koffie (2)",
      ],
    },
    {
      question: "Noem iets dat je mee zou doen naar een feest.",
      answers: [
        "Zeker en vast geen potloden (100)",
        "Ook geen knuffels, nee (21)",
        "Drank (18)",
        "Eten (8)",
        "Cadeautjes (6)",
      ],
    },
    {
      question: "Noem wat je favoriete bezigheid is op feestjes.",
      image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2022-09/21/13/asset/74a8d0c48e85/sub-buzz-2368-1663768366-7.jpg?downsize=600:*&output-format=auto&output-quality=auto",
      answers: [
        "Dans (45)",
        "Socialiseren/praten (21)",
        "Drinken (18)",
        "Eten (8)",
        "Zingen/karaoke (6)",
      ],
    },
    {
      question:
        "Noem iets specifieks dat je moet opruimen voordat er gezelschap langskomt.",
      image: "",
      answers: [
        "Badkamer (59)",
        "Keuken (18)",
        "Tapijt/vloer (11)",
        "Woonkamer (3)",
        "Ikzelf (3)",
      ],
    },
    {
      question: "Vul de lege plek in: hou mijn ____ vast.",
      image: "",
      answers: [
        "Telefoon (56)",
        "Haar (14)",
        "Jas (10)",
        "Rugzak/ Handtas.. (20)",
      ],
    },
    {
      question:
        "Noem een plek waar een tiener klaagt dat hij naartoe moet gaan.",
      image: "",
      answers: [
        "School/universiteit (56)",
        "Kerk (26)",
        "Familiefunctie (9)",
        "Tandarts/dokter (4)",
        "Winkel (2)",
        "Werk (2)",
      ],
    },
    {
      question: "Noem iets specifieks dat een lange nek heeft.",
      image: "",
      answers: [
        "Giraf (78)",
        "Struisvogel (10)",
        "Fles/bierfles (4)",
        "Kraan (3)",
        "Zwaan (3)",
        "Een glas (2)",
      ],
    },
    {
      question: "Vul in: Tong ______.",
      image: "",
      answers: [
        "Tong Verloren (33)",
        "Tongtwister (23)",
        "Tong in madeirasaus (10)",
        "Tong uitsteken (15)",
        "Tongkus (4)",
      ],
    },
    {
      question: 'Noem iets met het woord "super" erin.',
      image: "",
      answers: [
        "Superman (47)",
        "Supermarkt (18)",
        "Superkracht (6)",
        "Superformaat (5)",
        "Superster (11)",
      ],
    },
    {
      question: 'Noem iets met het woord "super" erin.',
      image: "",
      answers: [
        "Superman (47)",
        "Supermarkt (18)",
        "Superkracht (6)",
        "Superformaat (5)",
        "Superster (11)",
      ],
    },
  ]);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [activeItems, setActiveItems] = useState([]);

  const handleItemClick = (index) => {
    let sfxClapping = new Audio("/assets/sfx/audience-clapping.mp3");
    let sfxBell = new Audio("/assets/sfx/ding-bell.mp3");
    // let btnpress = new Audio("/assets/sfx/sfx-btn-press.mp3");
    sfxBell.play();
    sfxClapping.volume = 0.5;
    sfxClapping.play();

    // Toggle active state for clicked item
    setActiveItems((prevActiveItems) => {
      if (prevActiveItems.includes(index)) {
        return prevActiveItems.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevActiveItems, index];
      }
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "b") {
      let sfxBuzzer = new Audio("/assets/sfx/wrong-answer-buzzer.mp3");
      sfxBuzzer.volume = 0.5;
      sfxBuzzer.play();
      // Add your logic here for when the 'b' key is pressed
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  function prevQuestion() {
    setActiveItems([]);
    setActiveQuestion(activeQuestion - 1);
  }
  function nextQuestion() {
    setActiveItems([]);
    setActiveQuestion(activeQuestion + 1);
  }

  return (
    <>
      <Container
        sx={{
          width: "100%",
          maxWidth: "unset !important",
          height: "100vh",
          // background:
          //   "url(https://i.pinimg.com/564x/b6/66/dc/b666dc4534c91e734510fc716a28ec8d.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          background: "linear-gradient(179deg, #fadb14, #faad14)",
          // background: "#1a2850", //blue
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="header">
          <Box
            className="img-wrapper"
            sx={{ height: "100px", "& img": { height: "100%" } }}
          >
            <img
              className="logo"
              src="/assets/images/family-rumble.png"
              alt=""
            />
          </Box>
        </Box>
        <Box className="info-box">
          <Box
            className="actions-wrapper"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              variant="outlined"
              onClick={prevQuestion}
              sx={{ color: "white", border: "solid 1px white", mx: 2 }}
            >
              {" "}
              Vorige{" "}
            </Button>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              Vraag: {activeQuestion}{" "}
            </Typography>
            <Button
              variant="outlined"
              onClick={nextQuestion}
              sx={{ color: "white", border: "solid 1px white", mx: 2 }}
            >
              {" "}
              Volgende{" "}
            </Button>
          </Box>
          <Typography sx={{mt: 1, opacity: "0.2", textAlign: "center"}}>BUZZER (PRESS 'B')</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyConter: "center",
            alignItems: "center",
            width: "80%",
            margin: "20px auto 20px auto",
          }}
        >
          {questions.map((question, index) => (
            <Box
              key={`question-${index}`}
              className="question-wrapper"
              style={{ display: index === activeQuestion ? "block" : "none" }}
            >
              <Typography
                className="the-question"
                variant="h4"
                sx={{ pt: 4, py: 2, color: "white", outline: "black" }}
              >
                {question.question}
              </Typography>

              <Grid
                container
                spacing={2}
                className="answers-wrapper"
                sx={{ display: "flex", justifyConter: "center" }}
              >
                {question.answers.map((answer, index) => (
                  <Grid
                    key={`grid-item-${index}`}
                    xs={6}
                    sx={{ height: "140px" }}
                  >
                    <Box
                      className={`answer-card flip-card ${
                        activeItems.includes(index) ? "active" : ""
                      }`}
                      onClick={() => handleItemClick(index)}
                    >
                      <Box className="flip-card-inner">
                        <Box className="flip-card-front">
                          {/* <Box
                          className="image-wrapper"
                          sx={{ width: "300px", height: "300px" }}
                        >
                          <img src="img_avatar.png" alt="" />
                        </Box> */}
                        </Box>
                        <Box className="flip-card-back">
                          <Box className="card-content">
                            <p>{answer}</p>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default familyFeud;
