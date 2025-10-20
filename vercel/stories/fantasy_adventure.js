const cursedKingdom = {
  "id": "cursed_kingdom",
  "title": "Cursed Kingdom",
  "start_section": "start",
  "sections": {
    "start": {
      "text": "The Kingdom of Aldermere appears on the horizon as you crest the final hill. But something is terribly wrong. The fields are withered and gray, an unnatural mist clings to the ground, and the great castle's banners hang limp and colorless. You've heard the rumors—three months ago, the entire royal family turned to stone in a single night. The curse has been spreading ever since. As a wanderer with some skill in both blade and minor magics, you've been drawn here by fate... or perhaps something darker. The kingdom's gates stand before you.",
      "choices": [
        {
          "label": "Enter through the main gate and speak with the guards",
          "next_id": "main_gate"
        },
        {
          "label": "Circle around to the forest entrance, avoiding attention",
          "next_id": "forest_path"
        },
        {
          "label": "Stop at the village tavern first to gather information",
          "next_id": "tavern_intel"
        }
      ]
    },
    "main_gate": {
      "text": "The guards at the gate are weary and suspicious. Their captain, a grizzled veteran named Marcus, eyes you carefully. 'Another fool come to break the curse, eh? Dozens have tried. Most fled. Some... changed.' He gestures to the misty fields. 'The Court Wizard Valdris might see you, if you're serious. Or you could help us with a more immediate problem—dark creatures have been emerging from the old crypt at night. Your choice, wanderer.'",
      "choices": [
        {
          "label": "Request an audience with Court Wizard Valdris",
          "next_id": "meet_valdris"
        },
        {
          "label": "Offer to investigate the crypt creatures",
          "next_id": "crypt_entrance"
        },
        {
          "label": "Ask more questions about what happened the night of the curse",
          "next_id": "guards_story"
        }
      ]
    },
    "forest_path": {
      "text": "The forest surrounding Aldermere is ancient and thick with magic. As you step between the twisted oaks, the air shimmers. A figure materializes before you—tall, ethereal, with eyes like starlight. 'A mortal enters our domain,' the Fae speaks, voice like wind through leaves. 'You seek to break the curse on the stone kingdom. We know its source. The wizard Valdris made a bargain he could not keep, and stole something precious from our Queen. The curse was her response. We can help you... for a price.'",
      "choices": [
        {
          "label": "Ask what price the Fae require",
          "next_id": "fae_bargain"
        },
        {
          "label": "Refuse to bargain and find another way",
          "next_id": "refuse_fae"
        },
        {
          "label": "Ask to speak directly with the Fae Queen",
          "next_id": "fae_queen_audience"
        }
      ]
    },
    "tavern_intel": {
      "text": "The Broken Crown tavern is surprisingly lively despite the curse. Inside, you find worried villagers, off-duty guards, and a hooded figure in the corner who seems to be watching everyone. The barkeep, a stout woman named Mara, leans close when you ask about the curse. 'Three stories, friend. Some say the Court Wizard went mad with ambition. Others whisper the old king angered the Fae of the forest. But a few...' she glances at the hooded figure, 'claim there's a rebel group who wants the kingdom to fall so they can rebuild it their way.'",
      "choices": [
        {
          "label": "Approach the hooded figure",
          "next_id": "meet_rebels"
        },
        {
          "label": "Ask Mara about the Fae connection",
          "next_id": "fae_information"
        },
        {
          "label": "Head to the castle to investigate yourself",
          "next_id": "castle_approach"
        }
      ]
    },
    "meet_valdris": {
      "text": "Court Wizard Valdris receives you in his tower chamber. He's younger than you expected, with eyes that dart nervously. 'You want to help? Good. I've been working day and night to reverse this curse, but I need a component—the Moonstone Flower that grows only in the deep forest, in Fae territory. I... cannot go there myself. They would kill me on sight. Bring me the flower, and I swear I can break the curse.' His hands tremble slightly as he speaks.",
      "choices": [
        {
          "label": "Agree to retrieve the Moonstone Flower",
          "next_id": "flower_quest"
        },
        {
          "label": "Confront him about why the Fae hate him",
          "next_id": "valdris_truth"
        },
        {
          "label": "Refuse and investigate the castle on your own",
          "next_id": "castle_investigation"
        }
      ]
    },
    "crypt_entrance": {
      "text": "The ancestral crypt lies beneath an old chapel on the castle grounds. As you descend the worn stone steps, the temperature drops and whispers echo from the darkness. At the bottom, you find more than just creatures—you find a ghost, translucent and sorrowful. 'At last, someone who can see me,' the spirit says. You recognize the face from portraits—King Aldric, the previous ruler. 'My son was cursed for my sin. I made a pact with the Fae Queen and broke it. The wizard Valdris convinced me to steal her Heart Stone to gain power. Now my son pays the price.'",
      "choices": [
        {
          "label": "Ask the ghost how to make things right with the Fae",
          "next_id": "ghost_guidance"
        },
        {
          "label": "Ask where the Heart Stone is now",
          "next_id": "heart_stone_location"
        },
        {
          "label": "Promise to help and explore deeper into the crypt",
          "next_id": "deep_crypt"
        }
      ]
    },
    "guards_story": {
      "text": "Captain Marcus sighs and invites you to the guardhouse. Over ale, he tells you everything. 'The night of the curse, there was a great celebration. The prince's wedding. At midnight, a woman appeared—beautiful, terrible, with a crown of thorns. She spoke a single sentence: \"What was stolen must be returned, or all shall turn to stone.\" Then she vanished. The royal family began to petrify immediately. The wizard Valdris has been searching for a cure, but between you and me... I think he knows more than he's saying.'",
      "choices": [
        {
          "label": "Go confront Valdris immediately",
          "next_id": "confront_valdris"
        },
        {
          "label": "Search for the mysterious woman in the forest",
          "next_id": "forest_search"
        },
        {
          "label": "Investigate what was stolen",
          "next_id": "theft_investigation"
        }
      ]
    },
    "fae_bargain": {
      "text": "The Fae's smile is sharp as broken glass. 'Simple. Help us retrieve what was stolen—the Heart Stone of our Queen—and we will lift the curse. But you must choose: take it from the wizard who guards it jealously, or from the deep crypt where the old king hid it as a final safeguard. Either path has consequences. Choose quickly, mortal. Every day the curse spreads further.'",
      "choices": [
        {
          "label": "Agree to steal the Heart Stone from Valdris",
          "next_id": "steal_from_valdris"
        },
        {
          "label": "Choose to retrieve it from the crypt instead",
          "next_id": "crypt_retrieval"
        },
        {
          "label": "Refuse and seek a different solution",
          "next_id": "third_path"
        }
      ]
    },
    "refuse_fae": {
      "text": "The Fae's expression hardens. 'Then you are a fool. The curse cannot be broken without returning what was stolen. You will wander this dying kingdom until you too turn to stone, or until you come begging for our help.' The Fae vanishes, leaving you alone in the forest. You hear rustling in the undergrowth—creatures of shadow and thorn begin to surround you, drawn by the Fae's displeasure.",
      "choices": [
        {
          "label": "Fight your way out of the forest",
          "next_id": "forest_combat"
        },
        {
          "label": "Call out that you've reconsidered",
          "next_id": "fae_return"
        },
        {
          "label": "Use magic to escape to the castle",
          "next_id": "emergency_escape"
        }
      ]
    },
    "fae_queen_audience": {
      "text": "The Fae guide you deeper into the forest to a clearing where reality itself seems to bend. The Fae Queen sits upon a throne of living wood, radiating ancient power. 'So, a mortal with manners. Rare.' Her voice resonates with the weight of centuries. 'Your wizard-king stole my Heart Stone—the source of my power and my people's immortality. Return it to me, and I will lift the curse. Refuse, and I will turn every living thing in Aldermere to stone, just as I did the royal family. You have three days.'",
      "choices": [
        {
          "label": "Agree to retrieve the Heart Stone",
          "next_id": "queen_quest"
        },
        {
          "label": "Try to negotiate a different solution",
          "next_id": "negotiate_queen"
        },
        {
          "label": "Ask why she cursed innocents for one man's crime",
          "next_id": "question_justice"
        }
      ]
    },
    "meet_rebels": {
      "text": "The hooded figure reveals herself as Elena, leader of a rebel faction. 'The old kingdom was corrupt,' she says quietly. 'The curse is tragic, yes, but it's also an opportunity. If we let the royal line end, we can build something better—a kingdom ruled by council, not monarchs. I know how to break the curse, but I won't. Unless you join us in creating a new order once it's done.'",
      "choices": [
        {
          "label": "Join the rebels and their cause",
          "next_id": "ending_revolution"
        },
        {
          "label": "Refuse and report them to the guards",
          "next_id": "betray_rebels"
        },
        {
          "label": "Hear them out but make no commitment",
          "next_id": "neutral_rebels"
        }
      ]
    },
    "fae_information": {
      "text": "Mara pulls out an old book from beneath the bar. 'My grandmother was a scholar. She wrote about the Fae. They don't curse without reason, and they always offer a way out. If the Fae Queen cursed the kingdom, something was taken from her—something precious. The old king was known to collect magical artifacts. Check the royal vault, if you can get in. The answer might be there.'",
      "choices": [
        {
          "label": "Head to the castle to find the royal vault",
          "next_id": "vault_search"
        },
        {
          "label": "Go to the forest to speak with the Fae directly",
          "next_id": "forest_path"
        },
        {
          "label": "Ask Mara if she knows anything about the Court Wizard",
          "next_id": "valdris_rumors"
        }
      ]
    },
    "castle_approach": {
      "text": "You approach the castle openly. The guards let you through—they're desperate for anyone who might help. Inside, the throne room is a gallery of horror. The king, queen, prince, and princess stand frozen mid-gesture, their stone faces caught in expressions of shock and fear. The curse's magic is palpable here, thick and suffocating. You notice something odd—fresh footprints in the dust, leading to a hidden door behind the throne.",
      "choices": [
        {
          "label": "Follow the footprints through the hidden door",
          "next_id": "secret_passage"
        },
        {
          "label": "Examine the petrified royal family closely",
          "next_id": "examine_statues"
        },
        {
          "label": "Search for the Court Wizard's tower",
          "next_id": "meet_valdris"
        }
      ]
    },
    "flower_quest": {
      "text": "You venture into the deep forest seeking the Moonstone Flower. You find it in a moonlit glade, glowing with ethereal light. But as you reach for it, Fae warriors surround you. 'Thief!' they cry. 'First the wizard steals from us, now he sends another!' You realize Valdris has sent you into a trap—either to die, or to make enemies of the Fae for him.",
      "choices": [
        {
          "label": "Try to explain you were deceived",
          "next_id": "explain_to_fae"
        },
        {
          "label": "Fight the Fae and take the flower",
          "next_id": "ending_dark_path"
        },
        {
          "label": "Abandon the flower and return to confront Valdris",
          "next_id": "confront_valdris"
        }
      ]
    },
    "valdris_truth": {
      "text": "Valdris's face crumbles. 'The old king... he wanted power to protect the kingdom. I showed him a way—the Fae Queen's Heart Stone. We stole it together. But when the curse came, the king hid the Stone and died soon after. I've been searching for it ever since. If I return it to the Fae, they'll kill me for the theft. If I don't... everyone turns to stone. I'm trapped.' His desperation is genuine.",
      "choices": [
        {
          "label": "Offer to return the Heart Stone yourself if he tells you where it is",
          "next_id": "merciful_path"
        },
        {
          "label": "Tell him he must face the consequences and return it himself",
          "next_id": "justice_path"
        },
        {
          "label": "Suggest using the Heart Stone to break the curse without returning it",
          "next_id": "risky_magic"
        }
      ]
    },
    "castle_investigation": {
      "text": "You explore the castle on your own, avoiding Valdris. In the royal archives, you discover records of a secret vault built by the old king. The entrance is hidden in the crypt. You also find a journal entry from the king's final days: 'I have doomed my son. The Fae will have their revenge. I've hidden the Heart Stone where no one can find it, but I fear this will only make things worse. May the gods forgive me.'",
      "choices": [
        {
          "label": "Head to the crypt to find the vault",
          "next_id": "crypt_entrance"
        },
        {
          "label": "Confront Valdris with this information",
          "next_id": "valdris_confrontation"
        },
        {
          "label": "Seek the Fae to tell them you'll retrieve the Stone",
          "next_id": "fae_queen_audience"
        }
      ]
    },
    "ghost_guidance": {
      "text": "King Aldric's ghost bows his head. 'The Fae Queen is just but stern. If you return the Heart Stone to her with a sincere apology on my behalf, she may lift the curse. The Stone is in the deepest vault, past the guardian I set—a construct of magic and steel. I can give you the words to pass it safely. Please, save my son. Right my wrong.'",
      "choices": [
        {
          "label": "Accept the guidance and retrieve the Heart Stone",
          "next_id": "vault_guardian"
        },
        {
          "label": "Ask if there's any other way to break the curse",
          "next_id": "alternative_curse_break"
        }
      ]
    },
    "heart_stone_location": {
      "text": "'The Heart Stone is in my secret vault, past the guardian,' the ghost says. 'But know this—the Stone holds immense power. With it, you could break the curse yourself without bowing to the Fae. Or you could return it and trust in their mercy. The choice, young wanderer, would be yours. I chose power once. Look where it led.'",
      "choices": [
        {
          "label": "Retrieve the Stone to return it to the Fae",
          "next_id": "vault_guardian"
        },
        {
          "label": "Retrieve the Stone to use its power yourself",
          "next_id": "power_temptation"
        }
      ]
    },
    "deep_crypt": {
      "text": "Beyond the ghost, you find the crypt extends deep underground. Ancient traps and restless spirits guard the way. You navigate carefully until you reach a massive vault door, sealed with magical wards. The ghost's voice echoes: 'Only one of royal blood or pure intention may pass. Speak your purpose aloud, and the door will judge you.'",
      "choices": [
        {
          "label": "Declare your intention to save the kingdom",
          "next_id": "vault_opens"
        },
        {
          "label": "Try to break through the wards with magic",
          "next_id": "forced_entry"
        }
      ]
    },
    "confront_valdris": {
      "text": "You storm into Valdris's tower and demand the truth. Caught off guard, he confesses everything. 'Yes! I advised the king to take the Heart Stone. Yes, I knew it would anger the Fae. But I thought we could harness its power to protect the kingdom forever! I was wrong. The old king hid the Stone before he died, and now I can't find it. The curse is my fault, but I'm trying to fix it!' He seems genuine in his remorse.",
      "choices": [
        {
          "label": "Work together to find the Heart Stone and return it",
          "next_id": "uneasy_alliance"
        },
        {
          "label": "Take him prisoner and hand him to the Fae",
          "next_id": "valdris_sacrifice"
        },
        {
          "label": "Leave him and find the Stone yourself",
          "next_id": "solo_solution"
        }
      ]
    },
    "forest_search": {
      "text": "You venture into the forest calling out for the Fae Queen. The forest responds, and soon you stand before her throne. 'So, another mortal comes seeking answers. Your wizard stole from me. I cursed his kingdom. Simple justice. You want the curse lifted? Return my Heart Stone. That is the only way.'",
      "choices": [
        {
          "label": "Accept the quest to retrieve the Heart Stone",
          "next_id": "queen_quest"
        },
        {
          "label": "Try to negotiate alternative terms",
          "next_id": "negotiate_queen"
        }
      ]
    },
    "theft_investigation": {
      "text": "You investigate the castle's records and treasury. Evidence leads you to discover that King Aldric and Valdris together stole the Fae Queen's Heart Stone—a magical gem that sustains the Fae realm. The king hid it in a secret vault before his death. Valdris has been secretly searching for it, torn between fear of the Fae and desire for its power. The curse will only end when the Stone is returned.",
      "choices": [
        {
          "label": "Find the vault and retrieve the Heart Stone",
          "next_id": "vault_search"
        },
        {
          "label": "Confront Valdris about his continued deception",
          "next_id": "valdris_confrontation"
        }
      ]
    },
    "steal_from_valdris": {
      "text": "You agree to the Fae's terms. That night, you sneak into Valdris's tower. But when you reach his sanctum, you find it empty—he doesn't have the Heart Stone. A note on his desk reads: 'If you're reading this, you're working for the Fae. I don't have the Stone. The old king hid it in the royal vault before he died. I've been searching for months. Good luck.' You've been sent on a fool's errand.",
      "choices": [
        {
          "label": "Return to the Fae and tell them the truth",
          "next_id": "fae_redirect"
        },
        {
          "label": "Head to the vault to complete the mission",
          "next_id": "vault_search"
        }
      ]
    },
    "crypt_retrieval": {
      "text": "The Fae guide you to the crypt entrance and grant you safe passage through their forest. 'We cannot enter the crypt—it is warded against us. You must go alone. But beware, mortal. The old king was paranoid. He set terrible guardians to protect his secrets.'",
      "choices": [
        {
          "label": "Enter the crypt to find the Heart Stone",
          "next_id": "crypt_entrance"
        }
      ]
    },
    "third_path": {
      "text": "You refuse the Fae's binary choice. 'There must be another way. I'll find it.' The Fae warrior laughs bitterly. 'Foolish mortal. The curse is absolute. Without the Heart Stone's return, nothing can break it. But very well—waste your time searching for impossible solutions. When you fail, come crawling back.' The Fae vanish, leaving you alone with your conviction.",
      "choices": [
        {
          "label": "Seek out the Court Wizard for magical alternatives",
          "next_id": "meet_valdris"
        },
        {
          "label": "Search for ancient knowledge in the castle library",
          "next_id": "library_research"
        },
        {
          "label": "Investigate rumors of a hermit sage in the mountains",
          "next_id": "ending_hermit_path"
        }
      ]
    },
    "forest_combat": {
      "text": "You fight desperately against shadow-beasts and thorn-creatures. Your blade cuts through them, but more keep coming. You're skilled, but they're endless. Just as you're about to be overwhelmed, a voice rings out: 'Enough!' The Fae warrior from before appears. 'You have courage, mortal, I'll grant you that. The Queen might respect such spirit. Come. I'll take you to her properly this time.'",
      "choices": [
        {
          "label": "Accept and meet the Fae Queen",
          "next_id": "fae_queen_audience"
        }
      ]
    },
    "fae_return": {
      "text": "The creatures halt. The Fae warrior reappears, smirking. 'Changed your mind quickly, didn't you? Very well. The Queen will see you. But this time, show proper respect.' You're escorted deeper into the forest.",
      "choices": [
        {
          "label": "Meet with the Fae Queen",
          "next_id": "fae_queen_audience"
        }
      ]
    },
    "emergency_escape": {
      "text": "You channel your magic and teleport—or try to. The Fae's power disrupts your spell, and you end up not at the castle, but somewhere else entirely: a twisted grove where the trees whisper in voices that sound almost human. You're lost in the Fae realm proper now, and normal rules don't apply here. Time moves strangely. You wander for what feels like days or minutes until the Fae Queen herself appears. 'You have spirit. I like that. Let's talk.'",
      "choices": [
        {
          "label": "Speak with the Fae Queen",
          "next_id": "fae_queen_audience"
        }
      ]
    },
    "queen_quest": {
      "text": "The Fae Queen nods regally. 'Good. The Heart Stone lies in the royal vault beneath the castle. Retrieve it and bring it to me within three days. Do this, and I will lift the curse. Fail, and the curse will spread to consume all life in Aldermere. My emissary will accompany you to ensure you don't betray our agreement.' A Fae warrior steps forward, ready to shadow your every move.",
      "choices": [
        {
          "label": "Head to the castle vault with your Fae companion",
          "next_id": "vault_with_fae"
        }
      ]
    },
    "negotiate_queen": {
      "text": "You attempt to negotiate. 'Perhaps there's a middle ground? A compromise?' The Fae Queen's laugh is like wind chimes in a storm. 'Compromise? The wizard-king stole the source of my people's immortality. Even now, Fae are fading because of it. There is no compromise. Return what was stolen, or watch everything you seek to save turn to stone. Choose.' Her eyes glow with ancient power.",
      "choices": [
        {
          "label": "Agree to retrieve the Heart Stone",
          "next_id": "queen_quest"
        },
        {
          "label": "Refuse and search for another way",
          "next_id": "ending_stubborn_doom"
        }
      ]
    },
    "question_justice": {
      "text": "The Fae Queen's expression hardens. 'Justice? The king's son knew of the theft. The queen advised it. The court celebrated their new power. They were all complicit. And even if they weren't—the sins of rulers fall upon their people. That is the way of kingdoms, is it not? Your human kings start wars, and common folk die. I am no different. Now, will you return my Heart Stone, or continue to question me?'",
      "choices": [
        {
          "label": "Accept her logic and agree to help",
          "next_id": "queen_quest"
        },
        {
          "label": "Reject her reasoning and find another solution",
          "next_id": "moral_stand"
        }
      ]
    },
    "betray_rebels": {
      "text": "You report the rebels to Captain Marcus. He thanks you and arrests them that night. But something feels wrong. A week later, you learn that Elena wasn't just a rebel—she was a former court mage who knew how to break the curse. With her imprisoned, that knowledge is lost. The curse continues to spread, and you realize you may have doomed the kingdom to protect an order that was already falling. Sometimes the right side isn't so clear.",
      "choices": [
        {
          "label": "Try to free Elena and learn what she knows",
          "next_id": "ending_too_late"
        },
        {
          "label": "Continue searching for another solution",
          "next_id": "desperate_search"
        }
      ]
    },
    "neutral_rebels": {
      "text": "You tell Elena you'll make no promises but you'll listen. She reveals crucial information: 'The curse can only be broken by returning the Fae Queen's Heart Stone. Valdris knows this but is too afraid to face the Fae. The Stone is in the royal vault. Break the curse, and we can talk about the kingdom's future. But know that we'll be watching what you choose to do.'",
      "choices": [
        {
          "label": "Head to the vault to retrieve the Heart Stone",
          "next_id": "vault_search"
        },
        {
          "label": "Confront Valdris about his cowardice",
          "next_id": "confront_valdris"
        }
      ]
    },
    "vault_search": {
      "text": "You navigate the castle's lower levels until you find the entrance to the royal vault. It's sealed with both physical locks and magical wards. You'll need to either find the key, break the wards with magic, or find another way in. As you study the entrance, you hear footsteps—someone else is coming.",
      "choices": [
        {
          "label": "Hide and see who approaches",
          "next_id": "vault_visitor"
        },
        {
          "label": "Break the wards now before they arrive",
          "next_id": "forced_entry"
        }
      ]
    },
    "valdris_rumors": {
      "text": "Mara leans close. 'Valdris wasn't always Court Wizard. He came from nothing, rose fast. Too fast. Some say he made dark bargains. Others say he's brilliant but reckless. When the curse hit, he took control, saying he could fix it. But it's been three months, and nothing's changed. Makes you wonder if he's really trying, or if he's searching for something else in all that chaos.'",
      "choices": [
        {
          "label": "Confront Valdris with these suspicions",
          "next_id": "confront_valdris"
        },
        {
          "label": "Investigate on your own without alerting him",
          "next_id": "castle_investigation"
        }
      ]
    },
    "secret_passage": {
      "text": "The hidden door leads to a narrow passage. You follow the footprints down into darkness, eventually emerging in a secret chamber. Inside, you find Valdris performing a ritual over a magical circle. He spins around, startled. 'How did you—Never mind. Since you're here, you might as well know the truth. I'm trying to break the curse without returning the Heart Stone to the Fae. If I can harness enough power, I can override their magic. I just need a little more time!'",
      "choices": [
        {
          "label": "Help him with the ritual",
          "next_id": "risky_magic"
        },
        {
          "label": "Stop him - this could make things worse",
          "next_id": "stop_ritual"
        },
        {
          "label": "Demand he tell you where the Heart Stone is",
          "next_id": "valdris_truth"
        }
      ]
    },
    "examine_statues": {
      "text": "You examine the petrified royals closely. The magic is powerful, ancient, and Fae in nature. But you notice something odd—there's a faint warmth to the stone, especially around the heart areas. They're not dead, just... suspended. If the curse were broken soon, they might survive. You also notice the princess is holding something—a piece of parchment, half-crumpled in her stone fist.",
      "choices": [
        {
          "label": "Try to extract the parchment carefully",
          "next_id": "princess_note"
        },
        {
          "label": "Search elsewhere in the castle",
          "next_id": "castle_investigation"
        }
      ]
    },
    "explain_to_fae": {
      "text": "You quickly explain that Valdris deceived you, that you had no idea about the theft. The Fae warriors exchange glances. Their leader steps forward. 'Your words ring true. The wizard is a coward who sends others to do his dirty work. Come. We will take you to the Queen. If you truly wish to make amends, you can help us retrieve what was stolen.'",
      "choices": [
        {
          "label": "Go with them to meet the Fae Queen",
          "next_id": "fae_queen_audience"
        }
      ]
    },
    "merciful_path": {
      "text": "Valdris sags with relief. 'Thank you. Thank you. The Heart Stone is in the old king's secret vault beneath the crypt. I have the incantation to open it.' He gives you detailed instructions. 'Return it to the Fae Queen with my apologies. Tell her... tell her I was young and foolish, and I'm sorry. If she wants vengeance on me afterward, I'll face it. Just save the kingdom first.'",
      "choices": [
        {
          "label": "Take the incantation and head to the vault",
          "next_id": "vault_guardian"
        },
        {
          "label": "Insist he come with you to face the Fae together",
          "next_id": "valdris_accompanies"
        }
      ]
    },
    "justice_path": {
      "text": "Valdris's face hardens. 'Face the Fae? They'll kill me on sight! I... I can't.' His cowardice is evident. 'Fine. I'll tell you where the Heart Stone is, but I won't go with you. It's in the vault beneath the crypt. Here's the key and the passphrase for the guardian. Do what you will with it. But remember—if you return it to the Fae, you're choosing their justice over human ambition. The Heart Stone could save countless lives if used correctly.'",
      "choices": [
        {
          "label": "Take the information and retrieve the Stone to return it",
          "next_id": "vault_guardian"
        },
        {
          "label": "Consider using the Stone's power for humanity",
          "next_id": "power_temptation"
        }
      ]
    },
    "risky_magic": {
      "text": "You agree to help Valdris use the Heart Stone's power to break the curse without returning it. Together, you retrieve the Stone from the vault and bring it to his ritual chamber. The magic is intoxicating—you can feel the power thrumming through reality itself. But as the ritual reaches its peak, something goes wrong. The Heart Stone cracks. The Fae curse doesn't break—it explodes outward. You watch in horror as the curse spreads faster, consuming the entire kingdom in minutes. Even you begin to feel your limbs growing heavy, turning to stone. Valdris screams as he petrifies mid-incantation. In trying to save everyone, you've doomed them all.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "valdris_confrontation": {
      "text": "You confront Valdris in his tower with everything you've learned. He doesn't deny it. 'Yes, I advised the theft. Yes, I've been searching for the Stone. But not for power—for survival! If I return it to the Fae, they'll kill me. If I don't, everyone dies slowly. I've been trying to find a third option, a way to break the curse without surrendering the Stone or my life. Is that so wrong?'",
      "choices": [
        {
          "label": "Tell him some prices must be paid for redemption",
          "next_id": "justice_path"
        },
        {
          "label": "Offer to negotiate with the Fae on his behalf",
          "next_id": "merciful_path"
        },
        {
          "label": "Agree to help him find a third option",
          "next_id": "risky_magic"
        }
      ]
    },
    "alternative_curse_break": {
      "text": "The ghost shakes his head sadly. 'I searched for months before I died. Fae magic is absolute. Only the Fae Queen can lift her own curse, and she will only do so if the Heart Stone is returned. There is no other way. Believe me, I tried everything.' He fades slightly. 'Please. Don't make my mistakes. Do what's right, even if it's hard.'",
      "choices": [
        {
          "label": "Take his advice and retrieve the Heart Stone for the Fae",
          "next_id": "vault_guardian"
        },
        {
          "label": "Search for alternatives despite his warning",
          "next_id": "library_research"
        }
      ]
    },
    "power_temptation": {
      "text": "The Heart Stone pulses with incredible power in your hands. You could return it to the Fae, yes. Or... you could use it. With this much magical energy, you could break the curse yourself, become powerful enough to protect this kingdom and many others. You could be a force for good, a guardian. The choice weighs on you—selfless service, or power with good intentions?",
      "choices": [
        {
          "label": "Resist temptation and return the Stone to the Fae",
          "next_id": "ending_redemption"
        },
        {
          "label": "Use the Heart Stone's power to try to break the curse",
          "next_id": "risky_magic"
        },
        {
          "label": "Take the Stone and leave the kingdom to its fate",
          "next_id": "ending_selfish_power"
        }
      ]
    },
    "vault_opens": {
      "text": "The vault door glows and swings open silently. Inside, you find the Heart Stone resting on a pedestal—a gem the size of your fist, pulsing with rainbow light. You can feel its power from across the room. Ancient, pure, and almost alive. This is what the Fae Queen seeks. This is what was stolen.",
      "choices": [
        {
          "label": "Take the Heart Stone to return it to the Fae Queen",
          "next_id": "return_to_fae"
        },
        {
          "label": "Take the Heart Stone but consider other uses",
          "next_id": "power_temptation"
        }
      ]
    },
    "forced_entry": {
      "text": "You channel your magic and blast through the wards. It works—but the magical backlash triggers a guardian construct. A massive stone warrior animates and attacks. You fight desperately, but it's incredibly strong. Just as it's about to crush you, a ghostly figure intervenes—King Aldric. 'Stop!' he commands, and the guardian freezes. 'I set these protections, so I can unmake them. But you must promise me you'll use what's inside wisely.'",
      "choices": [
        {
          "label": "Promise and enter the vault",
          "next_id": "vault_opens"
        }
      ]
    },
    "uneasy_alliance": {
      "text": "You and Valdris work together, combining your skills to navigate the crypt and bypass the vault's guardians. When you finally hold the Heart Stone, Valdris looks at it with longing. 'We could use this, you know. Break the curse our way. Become heroes.' You see the temptation in his eyes, but also genuine conflict.",
      "choices": [
        {
          "label": "Convince him to do the right thing and return it together",
          "next_id": "valdris_redeemed"
        },
        {
          "label": "Take the Stone from him by force if necessary",
          "next_id": "betray_valdris"
        },
        {
          "label": "Consider his suggestion about using the Stone's power",
          "next_id": "risky_magic"
        }
      ]
    },
    "valdris_sacrifice": {
      "text": "You bind Valdris with magic and drag him into the forest. The Fae appear, their eyes gleaming. 'You bring us the thief. Interesting.' The Fae Queen materializes. 'But where is my Heart Stone?' you explain that you need to retrieve it first. She nods. 'Bring me my Stone, and you may decide this wizard's fate. Fail, and you'll both turn to stone beside the royal family.'",
      "choices": [
        {
          "label": "Retrieve the Heart Stone with Valdris as your prisoner",
          "next_id": "vault_with_prisoner"
        }
      ]
    },
    "solo_solution": {
      "text": "You leave Valdris and head to the crypt alone. Using your wits and the clues you've gathered, you navigate past traps and guardians until you stand before the vault. The ghost of King Aldric appears one last time. 'You've come alone. Brave, or foolish. The Heart Stone is yours to take. What you do with it will define you. Choose wisely.'",
      "choices": [
        {
          "label": "Take the Heart Stone to return to the Fae",
          "next_id": "return_to_fae"
        },
        {
          "label": "Take it but consider keeping its power",
          "next_id": "power_temptation"
        }
      ]
    },
    "fae_redirect": {
      "text": "You return to the Fae and explain. They're not pleased. 'The wizard deceived us both. Very well. We shall redirect you. The vault is beneath the castle crypt. Retrieve our Heart Stone from there, and the curse will be lifted. But hurry—you have little time before the curse spreads beyond reversal.'",
      "choices": [
        {
          "label": "Head to the vault immediately",
          "next_id": "vault_search"
        }
      ]
    },
    "library_research": {
      "text": "You spend days in the castle library researching Fae curses. You find ancient texts, obscure references, and desperate theories. Everything points to the same conclusion: Fae curses tied to theft can only be broken by returning what was stolen. There is no magical loophole, no clever trick. The Fae Queen's justice is absolute. You've wasted precious time.",
      "choices": [
        {
          "label": "Accept reality and work to return the Heart Stone",
          "next_id": "vault_search"
        },
        {
          "label": "Continue searching for impossible alternatives",
          "next_id": "ending_stubborn_doom"
        }
      ]
    },
    "vault_with_fae": {
      "text": "With the Fae warrior shadowing you, you navigate to the vault. The Fae cannot enter the crypt due to old wards, so they wait at the entrance. You venture alone into the depths, past the ghost of King Aldric, past guardians and traps, until you reach the Heart Stone. When you take it, you feel its immense power. The temptation to use it for yourself is strong.",
      "choices": [
        {
          "label": "Return with the Heart Stone to give to the Fae Queen",
          "next_id": "ending_redemption"
        },
        {
          "label": "Try to use the Stone's power to break the curse yourself",
          "next_id": "ending_betrayed_fae"
        }
      ]
    },
    "moral_stand": {
      "text": "You reject the Fae Queen's reasoning. 'Punishing innocents for the crimes of rulers is wrong, no matter who does it. I won't help you perpetuate that injustice.' The Queen's expression turns cold. 'Then you are useless to me. The curse will continue until every living thing in Aldermere is stone. And it will be on your conscience, mortal, not mine.' The forest darkens around you.",
      "choices": [
        {
          "label": "Stand your ground",
          "next_id": "ending_principled_failure"
        },
        {
          "label": "Reconsider and agree to help",
          "next_id": "queen_quest"
        }
      ]
    },
    "desperate_search": {
      "text": "You search desperately for alternatives, talking to sages, reading ancient texts, consulting spirits. Weeks pass. The curse spreads further. Finally, you're approached by a mysterious hermit who claims to know another way. 'The curse can be transferred,' he says. 'To one willing to bear it. The kingdom would be saved, but one person would carry the curse forever, turned to living stone, aware but immobile. Would you make such a sacrifice?'",
      "choices": [
        {
          "label": "Accept the burden yourself",
          "next_id": "ending_noble_sacrifice"
        },
        {
          "label": "Refuse and find the Heart Stone instead",
          "next_id": "vault_search"
        }
      ]
    },
    "vault_visitor": {
      "text": "You hide in the shadows. Valdris appears, looking nervous. He's carrying tools and magical components. He begins working on the vault door, muttering to himself. 'Almost there. If I can get the Stone first, I can bargain with the Fae from a position of power. Or maybe... maybe I can use it to break the curse without surrendering it.' He hasn't seen you yet.",
      "choices": [
        {
          "label": "Reveal yourself and work together",
          "next_id": "uneasy_alliance"
        },
        {
          "label": "Wait for him to open it, then take the Stone",
          "next_id": "ambush_valdris"
        },
        {
          "label": "Knock him out and proceed alone",
          "next_id": "knock_out_valdris"
        }
      ]
    },
    "stop_ritual": {
      "text": "You disrupt Valdris's ritual, scattering his components. He cries out in frustration. 'What have you done?! That was our best chance!' You explain that trying to override Fae magic is too dangerous. He slumps in defeat. 'You're probably right. I've been desperate, grasping at anything. Fine. The Heart Stone is in the vault. Take it. Return it to the Fae. I'm too much of a coward to do it myself.'",
      "choices": [
        {
          "label": "Take the vault information and retrieve the Stone",
          "next_id": "vault_guardian"
        }
      ]
    },
    "princess_note": {
      "text": "You carefully extract the parchment from the princess's stone hand. It's a note, written in hasty script: 'To whoever finds this - we knew the curse was coming. Father confessed everything to us. The Fae Queen visited him in dreams, gave him one chance to return the Heart Stone willingly. He refused out of pride. The Stone is in Grandfather's vault. Code: \"Sacrifice before glory.\" Return it to the Fae. Don't let pride doom everyone like it doomed us.'",
      "choices": [
        {
          "label": "Use the code to access the vault",
          "next_id": "vault_access"
        }
      ]
    },
    "valdris_accompanies": {
      "text": "Together, you and Valdris retrieve the Heart Stone and journey to the Fae Queen. The wizard is terrified but determined. When you present the Stone, the Queen studies Valdris coldly. 'At last, the thief shows his face.' Valdris kneels. 'I was wrong. I'm sorry. I'll accept whatever punishment you deem fit. Just please, lift the curse.' The Queen considers this for a long moment.",
      "choices": [
        {
          "label": "Speak on Valdris's behalf",
          "next_id": "ending_mercy_negotiated"
        },
        {
          "label": "Remain silent and let the Queen decide",
          "next_id": "ending_fae_justice"
        }
      ]
    },
    "vault_guardian": {
      "text": "You descend into the deepest part of the vault. There, a magical guardian awaits—a construct of stone and sorcery. Using the passphrase or password you've obtained, you speak the words of peace. The guardian bows and steps aside, granting you access to the inner chamber where the Heart Stone rests, glowing with ethereal beauty.",
      "choices": [
        {
          "label": "Take the Heart Stone to return it to the Fae",
          "next_id": "return_to_fae"
        }
      ]
    },
    "vault_with_prisoner": {
      "text": "With Valdris bound and silent, you retrieve the Heart Stone from the vault. As you hold it, he speaks quietly. 'I know I deserve whatever comes. But thank you for trying to save the kingdom. That's more than I did.' You return to the Fae Queen with both the Stone and the wizard.",
      "choices": [
        {
          "label": "Present both to the Queen",
          "next_id": "ending_fae_justice"
        }
      ]
    },
    "return_to_fae": {
      "text": "You carry the Heart Stone through the forest to the Fae Queen's grove. As you present it to her, the gem begins to glow brighter. She takes it reverently, and you see tears in her ancient eyes. 'At last. My heart returns to me.' She places it against her chest, and it merges with her body. Immediately, you feel the curse beginning to lift across the kingdom.",
      "choices": [
        {
          "label": "Ask about Valdris's fate",
          "next_id": "ending_redemption"
        },
        {
          "label": "Simply watch as the curse is lifted",
          "next_id": "ending_redemption"
        }
      ]
    },
    "valdris_redeemed": {
      "text": "You talk Valdris through his fear and temptation. Together, you carry the Heart Stone to the Fae Queen. When she sees you both, she's surprised. 'The thief comes willingly to face justice. And with a guardian to ensure he follows through. Interesting.' Valdris offers a genuine apology. The Queen studies him, then nods. 'You have learned humility. The curse is lifted. As for your punishment...'",
      "choices": [
        {
          "label": "Plead for mercy for Valdris",
          "next_id": "ending_mercy_negotiated"
        },
        {
          "label": "Accept whatever judgment the Queen makes",
          "next_id": "ending_balanced_justice"
        }
      ]
    },
    "betray_valdris": {
      "text": "You knock Valdris unconscious and take the Heart Stone. When you present it to the Fae Queen alone, she asks, 'Where is the wizard?' You explain what you did. She frowns. 'You bring me my Stone but deprive me of seeing the thief face his crime. Still, what's done is done.' She lifts the curse, but you've made an enemy of Valdris—if he survives the Fae's later wrath.",
      "choices": [
        {
          "label": "Accept this outcome",
          "next_id": "ending_pragmatic_solution"
        }
      ]
    },
    "vault_access": {
      "text": "Using the princess's code, you access the vault without triggering any guardians. Inside, the Heart Stone awaits. As you take it, you feel the weight of the princess's trust. She gave you the information even while being turned to stone, hoping someone would do the right thing.",
      "choices": [
        {
          "label": "Honor her trust and return the Stone to the Fae",
          "next_id": "return_to_fae"
        }
      ]
    },
    "ambush_valdris": {
      "text": "You wait until Valdris opens the vault, then you strike. You overpower him and take the Heart Stone. Valdris, defeated, whispers, 'At least finish what I couldn't. Save them.' You leave him there and head to the Fae Queen alone.",
      "choices": [
        {
          "label": "Present the Heart Stone to the Fae Queen",
          "next_id": "ending_pragmatic_solution"
        }
      ]
    },
    "knock_out_valdris": {
      "text": "You strike Valdris from behind. He crumples unconscious. You open the vault yourself using the tools he brought and retrieve the Heart Stone. It's a brutal, pragmatic solution—but it works. You have what you need to save the kingdom.",
      "choices": [
        {
          "label": "Take the Stone to the Fae Queen",
          "next_id": "ending_pragmatic_solution"
        }
      ]
    },
    "ending_revolution": {
      "text": "You join Elena's rebels and help them seize control of the castle. They know how to break the curse—by returning the Heart Stone—but they delay just long enough for the entire royal family to perish in their stone state. When the curse is finally lifted, the kingdom has no heir. Elena establishes a new council government. It's more democratic, perhaps more just, but it cost innocent lives. You helped create a new order, but the weight of those stone faces haunts you. Revolution always has a price.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_too_late": {
      "text": "You try to free Elena, but by the time you break her out of prison, the curse has spread too far. The kingdom is nearly entirely petrified. You learn from her that the Heart Stone needed to be returned within three months for the curse to be reversible. That deadline passed yesterday. Even if you return the Stone now, the petrified cannot be restored. You doomed the kingdom through a series of delays and wrong choices. The Fae Queen's justice was absolute, and your hesitation made it permanent.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_hermit_path": {
      "text": "You trek into the mountains and find a hermit sage who knows forbidden magic. He offers a terrible solution: 'The curse can be broken without the Heart Stone, but it requires a sacrifice. Your life force, willingly given, can fuel a counter-spell powerful enough to override Fae magic. You would die, but the kingdom would live.' You must decide if you're willing to pay that ultimate price for people you barely know.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_stubborn_doom": {
      "text": "You refuse to accept that returning the Heart Stone is the only way. You spend months searching for alternatives, consulting every source you can find. But there is no other answer. Fae magic is absolute. By the time you finally accept this truth, the curse has become permanent. The entire kingdom is stone, frozen forever. You stand alone among statues, the last living thing in Aldermere, a monument to pride and stubbornness. Some problems have only one solution, no matter how much we wish otherwise.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_redemption": {
      "text": "The Fae Queen lifts the curse. Across the kingdom, stone transforms back into flesh. The royal family gasps back to life, confused and grateful. The crops begin to grow again, the mist fades. As for Valdris, the Queen is surprisingly merciful. 'He did not come himself, but the Stone has returned. He will serve the kingdom for the rest of his days, never practicing magic again, to remember what his ambition cost.' You've saved Aldermere and given everyone a second chance. Sometimes, doing the right thing is reward enough.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_selfish_power": {
      "text": "You take the Heart Stone and flee the kingdom. With its power, you become something more than human—a wandering sorcerer of immense ability. You travel the world, helping people, fighting evils, making a difference. But behind you, Aldermere remains cursed, everyone turned to stone. You tell yourself it was necessary, that you can do more good with the Stone's power than by saving one kingdom. But in your dreams, you see their faces—the innocent children, the common folk, all frozen because of your choice. Power and guilt are your constant companions now.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_betrayed_fae": {
      "text": "You try to use the Heart Stone's power to break the curse yourself, betraying the Fae. The magic spirals out of control. The Heart Stone shatters. The curse doesn't break—it mutates into something worse. The petrified royal family crumbles to dust. The Fae Queen's scream of rage and anguish echoes across the land. The entire Fae realm declares war on humanity, starting with you. You've sparked a conflict that will last centuries, all because you thought you knew better than ancient magic. Your name will be cursed in history.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_principled_failure": {
      "text": "You stand by your principles, refusing to help the Fae Queen even though it means the curse continues. The kingdom slowly turns entirely to stone. You watch it happen, unable to stop it, bound by your moral conviction that punishing innocents is wrong. Years later, you're the last living human in a kingdom of statues. You held to your principles, yes. But everyone still died. Sometimes righteousness and effectiveness are not the same thing. You proved a philosophical point and lost everything else.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_noble_sacrifice": {
      "text": "You accept the hermit's ritual. As the magic flows through you, you feel yourself slowly turning to stone from the inside out. But the curse on the kingdom lifts. The royal family awakens, the crops grow, life returns. You stand in the town square, a new statue, but unlike the others, you're aware. Trapped in stone, conscious, watching the kingdom you saved go on without you. Children play at your feet. People leave flowers. They call you the Savior of Aldermere. It's a living death, but you saved thousands of lives. Was it worth it? You have eternity to contemplate that question.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_mercy_negotiated": {
      "text": "You speak passionately on Valdris's behalf, citing his genuine remorse and courage in facing the Fae. The Queen listens. 'Very well. The thief will not die, but he will serve. For the next century, he will tend the borders between our realm and yours, ensuring no further theft or trespass occurs. A fitting punishment.' Valdris accepts gratefully. The curse lifts, the kingdom is saved, and you've brokered a new peace between Fae and humans. You're hailed as a hero and a diplomat. Sometimes mercy is the strongest form of justice.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_fae_justice": {
      "text": "The Fae Queen takes the Heart Stone and looks upon Valdris with cold eyes. 'You stole from me. You caused suffering to my people and yours. But you came here willingly to face judgment. That counts for something.' She transforms Valdris into a tree at the edge of her grove. 'You will live for centuries, aware, watching over what you nearly destroyed. Perhaps that will teach you wisdom.' The curse on the kingdom lifts. The royal family lives. Justice has been served, harsh but fair. The kingdom is saved, though the cost to Valdris was high.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_balanced_justice": {
      "text": "The Fae Queen makes her judgment. 'You have shown genuine remorse and faced me despite your fear. The curse will be lifted. As for your punishment—you will serve as the keeper of the boundary between our realms for fifty years, ensuring peace between our peoples. It is not mercy, but it is not vengeance either. It is balance.' Valdris accepts. The kingdom is saved, peace is established, and justice is done. You've helped create a better future for everyone. Sometimes the best endings are the ones where everyone sacrifices something, but everyone also gains.'",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_pragmatic_solution": {
      "text": "The Fae Queen lifts the curse upon receiving the Heart Stone. The kingdom is saved. But you brought her the Stone through force and betrayal, leaving Valdris behind. The Queen is not pleased with your methods. 'You saved the kingdom, yes, but without honor. Leave my sight.' The royal family is restored and grateful, but you've made an enemy of the Fae and Valdris both. You accomplished your goal, but at the cost of future alliances and your own peace of mind. Victory, but a hollow one.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_dark_path": {
      "text": "You fight the Fae warriors and take the Moonstone Flower by force. You return it to Valdris, who uses it in a dark ritual. The curse seems to break—but something else happens. The Fae Queen's magic, disrupted violently, lashes out. Instead of healing the kingdom, you've caused a magical catastrophe. The land itself begins to die, not just from the curse but from the backlash of broken Fae magic. Both humans and Fae suffer. You've started a war between realms, all because you chose violence over diplomacy. The kingdom falls, and it's your fault.",
      "is_ending": true,
      "ending_type": "bad"
    }
  }
}

module.exports = cursedKingdom;
