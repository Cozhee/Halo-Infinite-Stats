const serviceRecord = {
    "data": {
      "summary": {
        "kills": 2750,
        "deaths": 1903,
        "assists": 982,
        "betrayals": 0,
        "suicides": 3,
        "vehicles": {
          "destroys": 0,
          "hijacks": 0
        },
        "medals": 1069
      },
      "damage": {
        "taken": 602686,
        "dealt": 751337,
        "average": 5525
      },
      "shots": {
        "fired": 64556,
        "landed": 38674,
        "missed": 25882,
        "accuracy": 59.907677055579654
      },
      "breakdowns": {
        "kills": {
          "melee": 319,
          "grenades": 75,
          "headshots": 2128,
          "power_weapons": 113
        },
        "assists": {
          "emp": 0,
          "driver": 0,
          "callouts": 0
        },
        "matches": {
          "wins": 83,
          "losses": 42,
          "left": 9,
          "draws": 2
        }
      },
      "kda": 8.63480392156863,
      "kdr": 1.4450867052023122,
      "total_score": 349795,
      "matches_played": 136,
      "time_played": {
        "seconds": 89354,
        "human": "1d 00h 49m 14s"
      },
      "win_rate": 61.029411764705884
    },
    "additional": {
      "gamertag": "Falcated"
    }
  }


  console.log(serviceRecord.data.summary.kills)
  console.log(serviceRecord.data.summary.medals)
  console.log(serviceRecord.data.damage.dealt)
