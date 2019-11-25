var app = new Vue({
  el: "#app",
  data: {
    round: 1,
    update: 3,
    title: "Championship Bracket",
    bracket: "champions",
    winners_bracket: {
      key: 0,
      round1: [
        [
          {
            name: "All Bidness",
            seed: 1,
            score: 91.38
          },
          {
            name: "NuKŁearWaR",
            seed: 8,
            score: 93.34
          }
        ],
        [
          {
            name: "YoungHamstringInjury",
            seed: 4,
            score: 118.82
          },
          {
            name: "Save a 🐎 Ride a 🤠",
            seed: 5,
            score: 69.2
          }
        ],
        [
          {
            name: "Original Recipe",
            seed: 3,
            score: 79.5
          },
          {
            name: "The Commish",
            seed: 6,
            score: 123.3
          }
        ],
        [
          {
            name: "Crim De La Squish",
            seed: 2,
            score: 126.22
          },
          {
            name: "ChirpChirp13",
            seed: 7,
            score: 70.54
          }
        ]
      ],
      round2: [
        [
          {
            name: "Crim De La Squish",
            seed: "2",
            score: 0
          },
          {
            name: "NuKŁearWaR",
            seed: "7",
            score: 0
          }
        ],
        [
          {
            name: "YoungHamstringInjury",
            seed: "4",
            score: 0
          },
          {
            name: "TBD",
            seed: " ",
            score: 0
          }
        ]
      ],
      round3: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 0
          },
          {
            name: "TBD",
            seed: " ",
            score: 0
          }
        ]
      ],
      round4: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 0
          }
        ]
      ],
      round5: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 0
          },
          {
            name: "TBD",
            seed: " ",
            score: 0
          }
        ]
      ]
    },
    losers_bracket: {
      key: 0,
      round2: [
        [
          {
            name: "All Bidness",
            seed: "1",
            score: 0
          },
          {
            name: "ChirpChirp13",
            seed: "7",
            score: 0
          }
        ],
        [
          {
            name: "Original Recipe",
            seed: "3",
            score: 0
          },
          {
            name: "Save a 🐎 Ride a 🤠",
            seed: "5",
            score: 0
          }
        ]
      ],
      round3: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 0
          },
          {
            name: "TBD",
            seed: " ",
            score: 0
          }
        ],
        [
          {
            name: "TBD",
            seed: " ",
            score: 0
          },
          {
            name: "TBD",
            seed: " ",
            score: 0
          }
        ]
      ],
      round4: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 0
          },
          {
            name: "TBD",
            seed: " ",
            score: 0
          },
          {
            name: "TBD",
            seed: " ",
            score: 0
          }
        ]
      ]
    },
    feces_bracket: {
      key: 0,
      round1: [
        [
          {
            name: "Rick Swift Old Bitch",
            seed: "9",
            score1: 95.82,
            score2: 0
          },
          {
            name: "Lights.Kamara.Action",
            seed: "10",
            score1: 105.34,
            score2: 0
          },
          {
            name: "Not Sparin' the Rod",
            seed: "11",
            score1: 56.96,
            score2: 0
          },
          {
            name: "Bless'em",
            seed: "12",
            score1: 106.46,
            score2: 0
          }
        ]
      ],
      round2: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 0,
            record: "0 - 0"
          },
          {
            name: "TBD",
            seed: " ",
            score: 0,
            record: "0 - 0"
          }
        ],
        [
          {
            name: "TBD",
            seed: " ",
            score: 0,
            record: "0 - 0"
          },
          {
            name: "TBD",
            seed: " ",
            score: 0,
            record: "0 - 0"
          }
        ],
        [
          {
            name: "TBD",
            seed: " ",
            score: 0,
            record: "0 - 0"
          },
          {
            name: "TBD",
            seed: " ",
            score: 0,
            record: "0 - 0"
          }
        ]
      ]
    },
    cons_bracket: {
      key: 0,
      round1: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 01
          },
          {
            name: "TBD",
            seed: " ",
            score: 02
          }
        ],
        [
          {
            name: "TBD",
            seed: " ",
            score: 03
          },
          {
            name: "TBD",
            seed: " ",
            score: 04
          }
        ]
      ],
      round2: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 05
          },
          {
            name: "TBD",
            seed: " ",
            score: 06
          }
        ],
        [
          {
            name: "TBD",
            seed: " ",
            score: 07
          },
          {
            name: "TBD",
            seed: " ",
            score: 08
          }
        ]
      ],
      round3: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 09
          },
          {
            name: "TBD",
            seed: " ",
            score: 10
          }
        ],
        [
          {
            name: "TBD",
            seed: " ",
            score: 11
          },
          {
            name: "TBD",
            seed: " ",
            score: 12
          }
        ]
      ],
      round4: [
        [
          {
            name: "TBD",
            seed: " ",
            score: 13
          },
          {
            name: "TBD",
            seed: " ",
            score: 14
          }
        ]
      ]
    },
    teams: [
      {
        name: "All Bidness",
        seed: 1,
        losses: 0,
        scores: []
      },
      {
        name: "Crim De La Squish",
        seed: 2,
        losses: 0,
        scores: []
      },
      {
        name: "Original Recipe",
        seed: 3,
        losses: 0,
        scores: []
      },
      {
        name: "YoungHamstringInjury",
        seed: 4,
        losses: 0,
        scores: []
      },
      {
        name: "Save a 🐎 Ride a 🤠",
        seed: 5,
        losses: 0,
        scores: []
      },
      {
        name: "The Commish",
        seed: 6,
        losses: 0,
        scores: []
      },
      {
        name: "ChirpChirp13",
        seed: 7,
        losses: 0,
        scores: []
      },
      {
        name: "NuKŁearWaR",
        seed: 8,
        losses: 0,
        scores: []
      },
      {
        name: "Rick Swift Old Bitch",
        seed: 9,
        losses: 0,
        scores: []
      },
      {
        name: "Lights.Kamara.Action",
        seed: 10,
        losses: 0,
        scores: []
      },
      {
        name: "Not Sparin' the Rod",
        seed: 11,
        losses: 0,
        scores: []
      },
      {
        name: "Bless'em",
        seed: 12,
        losses: 0,
        scores: []
      }
    ]
  },
  methods: {
    roundUp: function() {
      if (
        (this.bracket == "champions" && this.round < 5) ||
        (this.bracket == "cons" && this.round < 4) ||
        (this.bracket == "feces" && this.round < 2)
      ) {
        this.transitionLeft();
        this.round++;
      }
    },
    roundDown: function() {
      if (this.round > 1) {
        this.round--;
      }
    },
    changeBracket: function(newBracket) {
      if (this.bracket != newBracket) {
        window.scrollTo(0, 0); // values are x,y-offset
      }
      if (newBracket == "champions") {
        this.bracket = "champions";
        this.title = "Championship Bracket";
        this.round = 1;
      }
      if (newBracket == "cons") {
        this.bracket = "cons";
        this.title = "Consolation Tourney";
        this.round = 1;
      }
      if (newBracket == "feces") {
        this.bracket = "feces";
        this.title = "Feces Cup©";
        this.round = 1;
      }
    },

    transitionLeft: function() {
      var thisRound = this.round;
      var nextRound = this.round + 1;
      var oldRoundDivs = document.querySelectorAll(
        '[divRound="' + thisRound + '"]'
      );
      var newRoundDivs = document.querySelectorAll(
        '[divRound="' + nextRound + '"]'
      );

      console.log(oldRoundDivs);
      console.log(newRoundDivs);

      for (i = 0; i < oldRoundDivs.length; i++) {
        var thisDiv = oldRoundDivs[i];

        //thisDiv.classList.add("swipeOutLeft");
      }

      for (i = 0; i < newRoundDivs.length; i++) {
        var thisDiv = newRoundDivs[i];

        //thisDiv.classList.add("swipeInLeft");
      }
    }
  }
});
