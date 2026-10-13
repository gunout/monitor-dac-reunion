window.DAC_DATA = {
  budget: {
    source: "Budget Primitif 2026 — Région Réunion",
    culture_sport: {
      fonctionnement_ae: 19151673,
      fonctionnement_cp: 18662558,
      investissement_ap: 17540000,
      investissement_cp: 11694488,
      total_ae: 36691673,
      total_cp: 30357046
    },
    axes: [
      { intitule: "I - Valoriser le patrimoine culturel", fonctionnement: 7779369, investissement: 8340000 },
      { intitule: "II - Accompagner les acteurs culturels et sportifs", fonctionnement: 8799115, investissement: 1855000 },
      { intitule: "III - Développement culturel territorial et coopération", fonctionnement: 2573189, investissement: 7345000 }
    ],
    evolution: { ae_pct: 9.66, cp_pct: -5.0 }
  },

  subv_dac: {
    source: "DAC Réunion — Dispositifs 2026",
    budget_dac: {
      baisse_pct: -3,
      spectacle_vivant_part: 43,
      note: "La DAC subit une baisse de 3% (vs -5% au national)"
    },
    dispositifs: [
      {
        nom: "Spectacle vivant — aides déconcentrées",
        budget_preserve: true,
        part_budget: "36-40% (2021-2024), 43% (2026)",
        note: "Enveloppe préservée mais mouvements internes"
      },
      {
        nom: "Fonpeps (emplois au plateau)",
        budget_augmente: 4000000,
        note: "Seuils baissés pour bénéficier aux petites compagnies"
      },
      {
        nom: "FEAC (Fonds d'aide à la mobilité artistique)",
        budget_2026: 150000,
        budget_2025: 140000,
        budget_2024: 208000,
        note: "Abondé à parité Ministère Culture + Outre-mer"
      }
    ],
    attribution_2026: {
      notifications: "Avril 2026",
      paiements: "Mai-Juin 2026",
      retards: "Signalés par l'intersyndicale"
    }
  },

  subv_region: {
    source: "Région Réunion — Délibérations 2025-2026",
    musique_2026: {
      enveloppe_globale: 290000,
      associations: [
        { nom: "Musicouleurs", projet: "JazzRényon & Jazz Réunion en France", montant: 35000, subv_2025: 25000 },
        { nom: "Théâtre Vollard", projet: "Opéra Vollard", montant: 85000, subv_2025: 119531 },
        { nom: "AMADEUS", projet: "Résidence Les Bagnes d'Enfants 2", montant: 40000, subv_2025: 20000 },
        { nom: "Tricod'Prod", projet: "Résidence HYDRANGEA", montant: 20000, subv_2025: 30000 },
        { nom: "ZED", projet: "Résidences SUMAK & ANSANM", montant: 15000, subv_2025: 10000 },
        { nom: "Surya-Mwin", projet: "Votia : Résidence LA MONTRAZ", montant: 15000, subv_2025: 17500 },
        { nom: "Tchad House", projet: "Les Inouïs du Printemps de Bourges", montant: 10000, subv_2025: 12000 },
        { nom: "Ter Ver", projet: "Résidence Ti RAT & ROUGE REGGAE", montant: 7000, subv_2025: 8000 }
      ]
    },
    theatre_danse_cirque_2025: {
      enveloppe: 66000,
      associations: [
        { nom: "Compagnie Ziguilé", projet: "Tinn Tout !", montant: 9000 },
        { nom: "Théâtre Bazar", projet: "Bouches cousues", montant: 8000 },
        { nom: "Les Azotes", projet: "Et si on se mariait", montant: 8000 },
        { nom: "Compagnie La Silencieuse", projet: "HYSTERA", montant: 7000 },
        { nom: "Compagnie ILHA", projet: "Rouge Circé", montant: 6000 },
        { nom: "Collectif Aberash", projet: "Santyé Sonz", montant: 6000 },
        { nom: "Compagnie Bye Bye Billy", projet: "MEETING LAMBDA", montant: 6000 },
        { nom: "La Cerise sur le Chapeau", projet: "Histoires mouvementées", montant: 5000 },
        { nom: "Les Cabanons de Production", projet: "100 Contact", montant: 5000 },
        { nom: "Compagnie Maécha Métis", projet: "UBU Roi", montant: 4000 }
      ]
    },
    audiovisuel_2025: {
      enveloppe: 26500,
      associations: [
        { nom: "Ciné festival Océan Indien", projet: "Le temps des femmes (Festival film de Femmes)", montant: 20000 },
        { nom: "Au bout du rêve", projet: "Festival du Film d'Aventure", montant: 6500 }
      ]
    },
    patrimoine_2025: {
      associations: [
        { nom: "Association Ti Train", projet: "Restauration Ti Train Grande Chaloupe", montant: 10000 },
        { nom: "Village Titan Centre Culturel", projet: "Jardin de la Mémoire de l'esclavage", montant: 4900 }
      ]
    }
  },

  aap: {
    source: "DAC / ARS / Région",
    appels: [
      {
        nom: "Culture et Santé 2026",
        partenaires: ["DAC", "ARS", "Région", "Département"],
        convention: "Signée 3 février 2023",
        domaines: ["Arts de la scène", "Arts visuels", "Livre et lecture", "Patrimoine", "Musées"],
        objectifs: [
          "Droits fondamentaux et bien-être",
          "Accès du plus grand nombre à la culture",
          "Nouveaux espaces de rencontres",
          "Amélioration des pratiques professionnelles"
        ]
      },
      {
        nom: "PACTE Culturel 2024-2028",
        partenaires: ["État", "Région"],
        actions: [
          "Politique linguistique (créole)",
          "Institut du créole (2026)",
          "Micro Folie (Territo'Arts)",
          "Éducation artistique et culturelle"
        ]
      }
    ]
  },

  partenaires: {
    source: "PACTE Culturel de Territoire 2024-2028",
    partenaires: [
      { nom: "État (Ministère de la Culture)", role: "Co-pilotage DAC", convention: "PACTE 2024-2028" },
      { nom: "Région Réunion", role: "Co-financement, politiques culturelles", instances: "CLTC, Coreps" },
      { nom: "Département", role: "Culture et Santé, patrimoine" },
      { nom: "ARS La Réunion", role: "Culture et Santé (AAP 2026)" }
    ],
    instances: [
      { nom: "CLTC", full: "Conseil local des territoires pour la culture", role: "Dialogue État-Région" },
      { nom: "Coreps", full: "Comité régional des professions du spectacle", role: "Concertation professionnelle" }
    ],
    orientations: [
      "Accès équitable à la culture (Bas et Hauts)",
      "Éducation artistique et culturelle (EAC)",
      "Valorisation patrimoines matériels et immatériels",
      "Structuration des filières et professionnalisation",
      "Mobilités et coopérations régionales/internationales"
    ]
  },

  avances: {
    source: "Délibération 18/12/2025 — Région Réunion",
    montant_max_avances: 11444723.08,
    modalites: {
      moins_100k: "1 versement à la signature",
      plus_100k: "2 versements (50% signature + 50% après dossier 2026)"
    },
    note: "Dossier 2026 complet à fournir avant le 31 mars 2026"
  }
};