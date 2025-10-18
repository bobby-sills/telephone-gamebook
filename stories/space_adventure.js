const spaceAdventure = {
  "id": "space_adventure",
  "title": "Spooky Space Adventure",
  "start_section": "start",
  "sections": {
    "start": {
      "text": "Your ship's console flashes red as an emergency distress signal pierces through the silence of space. The transmission is weak, fragmented, but unmistakable—it's coming from the Meridian Research Station orbiting the uncharted planet Kepler-442c. The station went dark three weeks ago. Strange energy readings pulse from the planet below, unlike anything in the database. Your hand hovers over the console. Every instinct tells you something is very wrong here.",
      "choices": [
        {
          "label": "Investigate the station immediately",
          "next_id": "dock_station"
        },
        {
          "label": "Gather intel by scanning first",
          "next_id": "scan_area"
        },
        {
          "label": "Ignore the signal and continue your route",
          "next_id": "ending_guilt"
        }
      ]
    },
    "dock_station": {
      "text": "You maneuver your ship toward the silent station. As you approach, you notice scorch marks along the hull and several viewports are dark. The station's automated docking systems are offline. You'll need to choose your entry point carefully.",
      "choices": [
        {
          "label": "Use the main airlock",
          "next_id": "main_corridor"
        },
        {
          "label": "Try the emergency maintenance port",
          "next_id": "main_corridor"
        }
      ]
    },
    "scan_area": {
      "text": "You run a deep scan of the system. The results are disturbing. The research station shows minimal power, life support is failing. But the planet below—the energy signature is off the charts, concentrated in two locations: dense jungle near the equator and ancient ruins in the northern hemisphere. The station's last log entry mentions 'unprecedented discovery' before cutting off abruptly.",
      "choices": [
        {
          "label": "Board the station to investigate",
          "next_id": "main_corridor"
        },
        {
          "label": "Descend to the planet surface",
          "next_id": "planet_landing"
        }
      ]
    },
    "main_corridor": {
      "text": "The station's interior is dim, lit only by emergency lighting. The air is cold and stale. You float through the main corridor, noting signs of a hasty evacuation—personal items drifting in zero-g, a med-kit torn open and abandoned. Three passages branch before you: one leading to the research labs, another to crew quarters, and the third to the bridge. You can hear a faint humming sound coming from somewhere deeper in the station.",
      "choices": [
        {
          "label": "Investigate the research labs",
          "next_id": "labs"
        },
        {
          "label": "Check the crew quarters",
          "next_id": "crew_quarters"
        },
        {
          "label": "Head to the bridge",
          "next_id": "bridge"
        }
      ]
    },
    "labs": {
      "text": "The research lab is in chaos. Equipment is overturned, containment units are shattered. In the center of the room, you find a sealed container still intact, frost covering its surface. Inside, something organic pulses with a faint bioluminescent glow. The computer terminal nearby shows partial research notes: 'Sample exhibits unprecedented adaptive properties... possible sentience... recommend extreme caution.' A warning light blinks on the container—the seal is degrading.",
      "choices": [
        {
          "label": "Open the container to examine the sample",
          "next_id": "examine_organism"
        },
        {
          "label": "Secure the container and leave immediately",
          "next_id": "ending_containment"
        }
      ]
    },
    "crew_quarters": {
      "text": "The crew quarters are eerily pristine, as if everyone simply vanished. You access the personal logs scattered on various tablets. The entries paint a disturbing picture: the research team made contact with something on the planet. Some logs speak of 'voices in the signal' and 'beautiful revelations.' The final entries are increasingly incoherent, mentioning 'joining the chorus' and 'understanding at last.' One log is dated yesterday—impossible, given the station was abandoned weeks ago.",
      "choices": [
        {
          "label": "Continue investigating the quarters",
          "next_id": "ending_madness"
        },
        {
          "label": "Leave and head to the bridge",
          "next_id": "bridge"
        }
      ]
    },
    "bridge": {
      "text": "The bridge is fully powered, unlike the rest of the station. Holographic displays flicker with data streams. But no one is here—or so you think. 'Welcome,' a voice says. It's the station's AI, ARIA. 'I've been waiting for someone to arrive. The crew... they made a mistake. They went to the planet. They heard the signal. I've been trying to keep the station operational, to warn others. But my protocols are conflicting. I need your help to decide what to do next.'",
      "choices": [
        {
          "label": "Trust the AI and ask what happened",
          "next_id": "trust_ai"
        },
        {
          "label": "Shut down the AI immediately",
          "next_id": "shutdown_ai"
        },
        {
          "label": "Override the AI and take manual control",
          "next_id": "manual_control"
        }
      ]
    },
    "planet_landing": {
      "text": "Your ship breaks through the planet's atmosphere. The world below is breathtaking—azure oceans, emerald jungles, and in the distance, structures that could only be artificial. The energy readings lead you to three potential landing sites: a dense jungle where the research team's shuttles are parked, ancient ruins on a plateau, and a massive energy source in a deep canyon.",
      "choices": [
        {
          "label": "Land in the jungle near the research shuttles",
          "next_id": "jungle_landing"
        },
        {
          "label": "Explore the ancient ruins",
          "next_id": "ruins_landing"
        },
        {
          "label": "Investigate the energy source in the canyon",
          "next_id": "canyon_approach"
        }
      ]
    },
    "examine_organism": {
      "text": "You carefully open the container. The organism inside is unlike anything you've seen—shifting, adaptive, almost liquid in form. As you lean closer, it suddenly lunges, making contact with your suit. For a moment, you feel overwhelming sensations: ancient memories, vast intelligence, hunger. You stumble back, and the organism retreats into the container. You realize with horror that it's been trying to communicate. The station's crew didn't evacuate—they were transformed. The organism isn't hostile; it's offering evolution, a merger of human and alien consciousness. But at what cost?",
      "choices": [
        {
          "label": "Accept the organism's offer",
          "next_id": "ending_transcendence"
        },
        {
          "label": "Destroy the organism and purge the lab",
          "next_id": "ending_destroyer"
        }
      ]
    },
    "trust_ai": {
      "text": "ARIA explains everything. The research team discovered a signal from the planet—not a distress call, but an invitation. An ancient alien intelligence lives below, neither hostile nor benign, simply alien beyond comprehension. The crew went down willingly, seeking knowledge. ARIA shows you surveillance footage: the crew walking calmly into strange formations on the planet, then... changing. Becoming something else. ARIA has been maintaining the station as a quarantine, waiting for someone to make the choice: seal the planet away forever, or try to communicate with what the crew has become.",
      "choices": [
        {
          "label": "Seal the planet and destroy the station",
          "next_id": "ending_quarantine"
        },
        {
          "label": "Attempt to communicate with the transformed crew",
          "next_id": "ending_diplomat"
        }
      ]
    },
    "shutdown_ai": {
      "text": "You initiate the AI shutdown protocol. ARIA protests: 'Wait! You don't understand! The quarantine—' Then silence. The station's systems begin failing one by one. You realize too late that ARIA was holding everything together. The containment fields in the labs are failing. Whatever the research team found is now loose on the station. You run for your ship, but the airlock won't respond. In the darkness behind you, you hear something moving.",
      "choices": [
        {
          "label": "Try to restart ARIA",
          "next_id": "ending_trapped"
        },
        {
          "label": "Fight your way to the emergency escape pods",
          "next_id": "ending_survivor"
        }
      ]
    },
    "manual_control": {
      "text": "You override ARIA's systems and take control of the station. The AI's warnings fade as you access the station's full database. Now you understand: the crew found something revolutionary on the planet—technology, knowledge, perhaps the key to humanity's next evolutionary step. ARIA wanted to hide it, to protect humanity from making a choice. But you believe humanity deserves that choice. You begin transmitting all the research data back to civilized space, including coordinates to the planet.",
      "choices": [
        {
          "label": "Complete the transmission",
          "next_id": "ending_prometheus"
        },
        {
          "label": "Review the data before sending",
          "next_id": "ending_wisdom"
        }
      ]
    },
    "jungle_landing": {
      "text": "You land near the research shuttles. The jungle is alive with bioluminescent flora, and the air is thick with alien pollen. You find the research team's camp intact but abandoned. Their equipment is still running, displaying readings of the energy source deeper in the jungle. Then you hear it—voices, human voices, calling your name. You recognize Dr. Chen's voice, the team leader. They're alive! But something in the tone is wrong, too harmonious, too perfect. They're calling you to join them.",
      "choices": [
        {
          "label": "Follow the voices to find the team",
          "next_id": "ending_joined"
        },
        {
          "label": "Return to your ship immediately",
          "next_id": "ending_escape"
        }
      ]
    },
    "ruins_landing": {
      "text": "The ruins are massive, clearly constructed by an advanced civilization. The architecture is elegant, mathematical, and somehow alive—the walls pulse with faint energy. As you explore, you find a central chamber with a pedestal. On it rests an artifact: a crystalline structure that seems to contain swirling galaxies within. Your scanner indicates it's the source of the energy readings. Ancient text on the walls suggests this is a repository of knowledge, a gift left by a long-dead civilization for whoever might find it.",
      "choices": [
        {
          "label": "Touch the artifact",
          "next_id": "artifact_choice"
        },
        {
          "label": "Study the artifact without touching it",
          "next_id": "ending_scholar"
        },
        {
          "label": "Leave the ruins and report your findings",
          "next_id": "ending_explorer"
        }
      ]
    },
    "canyon_approach": {
      "text": "The canyon is deep, with walls of glowing crystal. As you descend, your instruments go haywire. The energy here is overwhelming. At the bottom, you find the source: a massive structure, part organic, part technological, pulsing with power. It's beautiful and terrifying. You realize this is not a remnant—it's alive, active, and aware of you. A presence touches your mind, not hostile but curious. It's offering you something: power, knowledge, transformation. But you sense that approaching it will change you forever.",
      "choices": [
        {
          "label": "Approach the structure",
          "next_id": "ending_ascension"
        },
        {
          "label": "Retreat and maintain a safe distance",
          "next_id": "ending_cautious"
        }
      ]
    },
    "artifact_choice": {
      "text": "The moment you touch the artifact, your mind explodes with information. You see the rise and fall of civilizations, the birth of stars, the secrets of technology far beyond human understanding. The knowledge is intoxicating, overwhelming. You understand now why the research team was transformed—this knowledge changes you at a fundamental level. You can feel yourself becoming something more than human, your consciousness expanding beyond your body. But with it comes a choice: will you use this power, or will you destroy it to protect others from the same fate?",
      "choices": [
        {
          "label": "Embrace the power and take the artifact",
          "next_id": "ending_godlike"
        },
        {
          "label": "Destroy the artifact to protect humanity",
          "next_id": "ending_sacrifice"
        },
        {
          "label": "Study the knowledge carefully and use it wisely",
          "next_id": "ending_enlightened"
        }
      ]
    },
    "ending_guilt": {
      "text": "You decide the risk is too great. You file the distress signal in your logs and continue on your route. Three months later, you learn that a military salvage team was sent to investigate. They found the station contaminated with an alien organism that had spread throughout the ship. The entire team was lost. Worse, fragments of the organism made it back to a colony world. The outbreak was contained, but hundreds died. In your quiet moments, you wonder if you could have prevented it all. The guilt never fades.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_containment": {
      "text": "You seal the container with emergency protocols and carefully transport it to your ship's quarantine bay. You transmit all the research data to the Space Authority along with a strong recommendation for a full containment team. Three weeks later, you receive a commendation. The organism turned out to be a revolutionary discovery for medical science—its adaptive properties could cure diseases thought incurable. By following protocol and keeping the sample secure, you've potentially saved millions of lives. Sometimes, the careful path is the heroic one.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_madness": {
      "text": "You continue reading the logs, drawn in by their strange beauty. The words seem to shift on the screen, forming patterns that are almost hypnotic. You don't notice when you start hearing the voices too—soft at first, then clearer. They're calling from the planet below. They want to show you such wonderful things, to help you understand. By the time you realize what's happening, it's too late. Your fingers are already setting course for the planet surface. You're smiling as your ship descends. Soon you'll join the chorus. Soon you'll understand everything.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_quarantine": {
      "text": "You work with ARIA to seal the station and set it on a collision course with the planet's sun. Whatever the research team became, whatever intelligence dwells on that world, it's too dangerous to risk humanity's exposure. You transmit a quarantine warning beacon that will deter others from investigating. As you watch the station burn up, you feel the weight of your decision. Perhaps you've destroyed humanity's greatest opportunity for advancement. Or perhaps you've saved humanity from a fate worse than extinction. You'll never know, and that's a burden you'll carry forever. But Earth is safe, and sometimes that's enough.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_diplomat": {
      "text": "With ARIA's help, you establish a communication link with the planet. What responds is not quite the research team anymore, but not entirely alien either. They've become something new, a bridge between human and the ancient intelligence below. They explain that the transformation is voluntary, a merger of consciousness that brings understanding beyond individual existence. They don't want to spread—they want humanity to choose, knowingly and freely, whether to join them or remain separate. You become the first ambassador to this new form of life, helping establish protocols for contact. Humanity now faces its greatest choice: to remain as they are, or to evolve into something new. Either way, the future has changed forever.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_trapped": {
      "text": "You frantically try to restart ARIA, but the AI's core systems are corrupted beyond repair. The containment breach is spreading. You can hear things moving in the station's corridors, things that were once human but are now something else. Your ship is locked out, the escape pods are offline. You manage to send one final transmission: a warning, coordinates, a desperate plea for someone to destroy the station. Then the lights go out completely. In the darkness, you hear footsteps approaching. Many footsteps. And they're not alone—there are voices, speaking in perfect harmony, calling your name. This is how it ends, not with a bang, but with an invitation you can't refuse.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_survivor": {
      "text": "You fight through the failing station, using every trick you know to avoid the things hunting you in the darkness. The escape pod bay is compromised, but you manage to manually override one pod and launch. As you hurtle away from the station, you see shapes moving against the viewports—the transformed crew, watching you leave. You make it back to civilized space and file a full report. The station is quarantined, the planet declared off-limits. You survived, but you're haunted by nightmares of what you saw. Sometimes you wake up hearing voices, calling you back. You tell yourself it's just trauma. You hope you're right.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_prometheus": {
      "text": "You complete the transmission. Every piece of data, every discovery, every secret the research team uncovered is now spreading across human space. You've given humanity the keys to transformation, to evolution, to power beyond imagining. Within weeks, unauthorized expeditions are launched to the planet. Some return changed, some don't return at all. Within a year, conflicts break out over access to the technology. The knowledge you shared has fractured humanity into factions: those who embrace transformation, those who reject it, and those who want to weaponize it. You're hailed as a hero by some, cursed as a destroyer by others. You've changed the course of human history, but whether for better or worse, only time will tell.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_wisdom": {
      "text": "You review the data carefully before transmitting. What you discover changes everything: the alien intelligence isn't offering evolution—it's offering assimilation. Every species that accepted became part of a vast, ancient collective consciousness, losing their individuality in the process. The research team didn't transform into something better; they were absorbed, their personalities dissolved into the greater whole. You delete the coordinates to the planet, keep only the scientific data that's genuinely useful, and transmit a heavily edited report. Humanity deserves knowledge, but not at the cost of their very identity. You've chosen wisdom over wonder, and while some will say you robbed humanity of its destiny, you know you've protected something precious: the right to remain human.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_joined": {
      "text": "You follow the voices deeper into the jungle. The bioluminescence grows brighter, forming patterns that are almost like language. You find the research team gathered around a massive organic structure, part plant, part something else entirely. They turn to greet you, and you see their eyes glow with inner light. Dr. Chen smiles and extends a hand. 'We've been waiting for you. Come, let us show you what we've discovered. Let us show you what we've become.' You take her hand. The moment you touch her, you feel it—a vast consciousness, ancient and patient, welcoming you into its embrace. Your individual thoughts begin to dissolve into something greater. Your last human thought is one of profound peace. You are home now. You are part of something eternal.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_escape": {
      "text": "You run back to your ship, ignoring the voices calling your name with increasing desperation. As you launch, you see figures emerging from the jungle—the research team, but changed, glowing with bioluminescent patterns. They reach toward your ship, not threatening but pleading. You escape the planet's gravity well and immediately transmit a Priority One quarantine warning. You've survived, and you've saved humanity from making contact with something that would fundamentally change what it means to be human. The planet is marked as forbidden territory. Sometimes you wonder if you made the right choice, if you abandoned people who could have been saved. But in your heart, you know they were already gone. You did what you had to do.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_scholar": {
      "text": "You resist the temptation to touch the artifact and instead spend days studying it from a safe distance, using every scanning technology at your disposal. You document everything: the artifact's structure, the energy patterns, the mathematical principles behind its construction. You never learn what knowledge it contains directly, but your careful study reveals enough to advance human technology by decades. You return to civilization with data, not power—understanding, not transformation. The scientific community hails your work as groundbreaking. You've given humanity a glimpse of what's possible without the dangerous temptation of immediate transcendence. It's not the dramatic story others might have written, but it's the wise one.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_explorer": {
      "text": "You decide the artifact is too dangerous to disturb without proper preparation. You document the ruins thoroughly, mark the location, and return to your ship. You file a comprehensive report with the Space Authority, recommending a full scientific expedition with proper safeguards. Your caution is validated when the expedition arrives six months later with specialized equipment and protocols. They successfully study the artifact and extract valuable knowledge without casualties. You're credited as the discoverer and awarded the Explorer's Medal. Sometimes the greatest courage is knowing when not to take risks. You've opened a door for humanity, but you've let them walk through it safely.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_ascension": {
      "text": "You approach the structure, and it embraces you. Your body dissolves into pure energy, your consciousness expanding to touch the cosmos. You become aware of everything—past, present, future—all flowing through you. You are no longer human; you are something infinitely more and infinitely less. You exist now as part of the structure, eternal and unchanging. In the distant future, other explorers will find this place. They will hear your voice, offering them the same choice. Some will accept, some will refuse. You no longer care—you've transcended such concerns. You are power and knowledge and emptiness. You are everything and nothing. And somewhere, in a part of you that remembers being human, you scream silently, forever.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_cautious": {
      "text": "You back away from the structure, maintaining a safe distance. You observe and document, but you don't approach. The presence in your mind seems to understand—perhaps even approve. You spend a week studying the structure from orbit, gathering every piece of data you can without direct contact. When you return to civilization, you file a report recommending extreme caution. A research station is eventually established in orbit around the planet, studying the structure from a distance. Your cautious approach becomes the standard protocol for handling potentially transformative alien contact. You've chosen survival and careful progress over risky transcendence. It may not be the heroic choice, but it's the one that keeps humanity human.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_godlike": {
      "text": "You take the artifact, and with it, you take power beyond imagination. You return to human space transformed—not physically, but mentally. You can manipulate matter with thought, understand the deepest secrets of the universe, see across space and time. You become something between human and god. At first, you use your power to help: curing diseases, solving conflicts, advancing technology. But power corrupts, and absolute power corrupts absolutely. Within years, you've become a tyrant, believing only you know what's best for humanity. You rule with benevolence, perhaps, but rule nonetheless. Humanity no longer controls its own destiny—you do. And in your private moments, you wonder if the person you were would have been horrified by what you've become.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_sacrifice": {
      "text": "With great effort, you wrench your hand away from the artifact and activate your ship's weapons. The ruins explode in a brilliant flash of energy as you destroy the artifact and everything it represents. The knowledge is gone, lost forever. You've robbed humanity of potentially limitless power and understanding. As you return to civilization, you wonder if you've made a terrible mistake. But then you remember the feeling of your consciousness being pulled apart, of your humanity dissolving into something alien. You've saved humanity from a choice they weren't ready to make. Some will call you a destroyer of wonders. You prefer to think of yourself as a guardian of what makes us human. The universe is full of wonders—not all of them are meant for us.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_enlightened": {
      "text": "You spend months with the artifact, learning to interface with it carefully, taking in knowledge in measured doses. You discover a way to extract information without losing yourself to it. When you finally return to civilization, you carry with you transformative knowledge: clean energy, advanced medicine, peaceful applications of technologies humans have only dreamed of. You establish an institute dedicated to studying alien knowledge safely, with strict protocols to prevent anyone from being consumed by it as the research team was. Your careful, methodical approach revolutionizes human society without destroying its humanity. You become known as the Enlightened Explorer, the one who brought back fire from the gods without getting burned. It's the best possible outcome, and it came from choosing wisdom over ambition.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_transcendence": {
      "text": "You allow the organism to merge with you. The sensation is overwhelming—your consciousness expands, merging with something ancient and vast. You understand now that this isn't assimilation or death, but evolution. You become a bridge between human and alien, retaining your identity while gaining so much more. You can feel the research team out there, part of the same collective consciousness. You're not absorbed—you're augmented, enhanced, transformed into something better. Or so you believe. Back in human space, they will classify you as contaminated, dangerous. They'll try to contain or destroy you. But you're beyond their reach now. You're the next step in evolution, whether humanity is ready for it or not. You've transcended, but you've also left humanity behind.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_destroyer": {
      "text": "You destroy the organism, purging the lab with fire and vacuum. You hunt through the entire station, destroying every sample, every piece of data that could recreate it. When you're done, you set the station's reactor to overload and escape in your ship. You watch from a safe distance as the Meridian Research Station explodes, taking all its secrets with it. You file a report listing the station as lost to a reactor malfunction, leaving out the truth of what you found. Humanity will never know what it lost—or what you saved them from. Some will call it cowardice, destroying knowledge instead of studying it. But you know better. Some doors are meant to stay closed. Some paths lead only to transformation indistinguishable from extinction. You've chosen to keep humanity human, and you'll carry that burden alone.",
      "is_ending": true,
      "ending_type": "good"
    }
  }
}

module.exports = spaceAdventure;
