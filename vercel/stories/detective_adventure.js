const jadeserpentCase = {
  "id": "jade_serpent_case",
  "title": "The Jade Serpent Case",
  "start_section": "start",
  "sections": {
    "start": {
      "text": "Rain hammers against your office window like bullets on a tin roof. It's 2 AM in Los Angeles, 1947, and you're nursing a whiskey when she walks in—expensive perfume, more expensive diamonds, and trouble written all over her face. 'Detective,' she says, 'someone stole the Jade Serpent from my private collection. It's worth a fortune, and I need it back before the museum gala in three days. I'll pay your usual rate.' She slides a photo across your desk—an ancient Chinese artifact, emerald eyes gleaming even in the photograph. Your instincts are screaming that this case is more than a simple theft.",
      "choices": [
        {
          "label": "Take the case at your standard rate",
          "next_id": "office_investigation"
        },
        {
          "label": "Demand double payment—this smells dangerous",
          "next_id": "office_investigation"
        },
        {
          "label": "Refuse the case and show her the door",
          "next_id": "ending_regret"
        }
      ]
    },
    "office_investigation": {
      "text": "She leaves you a retainer in cash and the museum's address. You spend the next hour going through your files on art thieves, smugglers, and fences operating in LA. The Jade Serpent is famous in certain circles—supposedly cursed, definitely valuable. Three potential leads emerge: the museum where it was originally stored before the client purchased it, the underworld network that specializes in high-end antiquities, or the client's business rival who's been trying to acquire the piece for years. The clock is ticking.",
      "choices": [
        {
          "label": "Visit the museum to investigate the original theft",
          "next_id": "museum"
        },
        {
          "label": "Hit the streets and track down known art thieves",
          "next_id": "underworld"
        },
        {
          "label": "Interview the client's rival, Victoria Crane",
          "next_id": "rival_meeting"
        }
      ]
    },
    "museum": {
      "text": "The Natural History Museum looms before you, dark and imposing in the rain. The Jade Serpent was stolen from here six months ago, then mysteriously appeared in your client's collection. Coincidence? You flash your license at the entrance. The night guard, a nervous young man named Eddie, eyes you suspiciously. The curator's office is on the third floor, currently locked. The original crime scene—the Asian Antiquities wing—is roped off but accessible. You need to choose your approach carefully.",
      "choices": [
        {
          "label": "Slip Eddie a twenty and ask what he saw that night",
          "next_id": "guard_info"
        },
        {
          "label": "Examine the crime scene yourself for overlooked clues",
          "next_id": "found_clue"
        },
        {
          "label": "Pick the lock on the curator's office",
          "next_id": "curator_secrets"
        }
      ]
    },
    "underworld": {
      "text": "You know the underbelly of LA like the back of your hand. Art thieves and fences have their own ecosystem, and the Jade Serpent would have attracted attention. You've got three solid leads: Marco Santini runs a speakeasy that doubles as a meeting place for high-class criminals; 'Fingers' McGee is the best fence in the city; and there's been chatter about something big going down at the waterfront. Each path is dangerous, but you've walked dangerous streets before.",
      "choices": [
        {
          "label": "Visit Marco's speakeasy in Chinatown",
          "next_id": "speakeasy"
        },
        {
          "label": "Confront Fingers McGee at his pawn shop",
          "next_id": "fingers"
        },
        {
          "label": "Investigate the waterfront warehouse",
          "next_id": "docks"
        }
      ]
    },
    "rival_meeting": {
      "text": "Victoria Crane's mansion sits in the Hollywood Hills like a monument to old money. She's been trying to acquire the Jade Serpent for her private collection for years, bidding against your client at every auction. Her butler shows you to a study filled with Asian antiquities. Victoria appears—tall, elegant, dangerous. 'A private detective,' she purrs. 'How delightfully noir. I assume this is about that gaudy serpent. I'm afraid I can't help you.' Her bodyguard, a mountain of muscle, stands by the door. You need to play this smart.",
      "choices": [
        {
          "label": "Be direct—ask if she stole the Jade Serpent",
          "next_id": "victoria_honesty"
        },
        {
          "label": "Turn on the charm and try to seduce information from her",
          "next_id": "victoria_romance"
        },
        {
          "label": "Threaten to bring the cops unless she talks",
          "next_id": "ending_killed_by_bodyguard"
        }
      ]
    },
    "guard_info": {
      "text": "Eddie pockets the bill and leans in close. 'Look, I wasn't supposed to say nothing, but I saw someone that night. A dame in a red dress, real classy-like. She had a key, walked right in like she owned the place. I figured she was authorized, you know? But then the next day, the serpent's gone and my supervisor tells me to keep my mouth shut.' He nervously glances around. 'There's something else—I saw her get into a black Packard. I got the plate number if you want it.' The woman in red could be your key to cracking this case wide open.",
      "choices": [
        {
          "label": "Take the plate number and track down the mysterious woman",
          "next_id": "femme_fatale"
        },
        {
          "label": "Press Eddie harder—his story doesn't add up",
          "next_id": "guard_confession"
        }
      ]
    },
    "found_clue": {
      "text": "You examine the display case carefully. The glass cutter used was professional grade, but whoever did this knew the security system intimately. Then you spot it—a cigarette butt behind a pillar, expensive Turkish tobacco. You pocket it. More interesting is what you find in the security logs: someone disabled the alarm from inside the security office thirty minutes before the theft. This wasn't a random burglary. Someone with inside access set this up. The curator, Dr. Harrison Wei, has been running this wing for fifteen years. Time to have a conversation.",
      "choices": [
        {
          "label": "Confront Dr. Wei directly about the inside job",
          "next_id": "curator_confrontation"
        },
        {
          "label": "Set a trap using false information about the serpent's location",
          "next_id": "trap_success"
        }
      ]
    },
    "curator_secrets": {
      "text": "The lock gives way easily—too easily. Inside the curator's office, you find exactly what someone wanted you to find: shipping manifests to Hong Kong, correspondence about selling 'artifacts' to private collectors, coded messages about 'special acquisitions.' It's almost theatrical in its obviousness. Then you hear footsteps in the hallway. Multiple sets. You've got seconds to decide: hide and see who's coming, confront them directly, or escape through the window. Your gut tells you this whole thing is a setup.",
      "choices": [
        {
          "label": "Hide and observe who enters the office",
          "next_id": "curator_ambush"
        },
        {
          "label": "Confront whoever's coming head-on",
          "next_id": "museum_confrontation"
        },
        {
          "label": "Escape through the window before they arrive",
          "next_id": "museum_escape"
        }
      ]
    },
    "speakeasy": {
      "text": "Marco's place is hidden behind a laundromat in Chinatown. The password gets you past the door and into a world of cigarette smoke, jazz, and dangerous people pretending to be civilized. Marco himself sits in the back booth, a man who's made an art of controlled violence. He gestures for you to sit. 'I heard you're asking about the Jade Serpent,' he says quietly. 'That's a dangerous topic, detective. People who ask too many questions about that particular item tend to disappear.' A jazz singer's sultry voice fills the silence. Marco's waiting for your next move.",
      "choices": [
        {
          "label": "Ask Marco directly what he knows",
          "next_id": "marco_deal"
        },
        {
          "label": "Order a drink and observe the room for reactions",
          "next_id": "ambush"
        },
        {
          "label": "Leave immediately—this is a trap",
          "next_id": "followed"
        }
      ]
    },
    "fingers": {
      "text": "Fingers McGee's pawn shop is a front for the most sophisticated fencing operation on the West Coast. You find him in the back room, appraising a string of pearls that you're certain is stolen. He looks up with those quick, nervous eyes that earned him his nickname. 'Detective,' he says, already reaching for something under the counter. 'I run a legitimate business here. Whatever you think I know about some Chinese statue, you're barking up the wrong tree.' But his hand is shaking. He knows something, and you need to extract it.",
      "choices": [
        {
          "label": "Offer to pay for the information",
          "next_id": "fingers_betrayal"
        },
        {
          "label": "Grab him by the collar and persuade him physically",
          "next_id": "fingers_talks"
        },
        {
          "label": "Bluff about having police backup outside",
          "next_id": "fingers_scared"
        }
      ]
    },
    "docks": {
      "text": "The warehouse district at night is a maze of shadows and fog rolling in from the Pacific. You follow the address from your informant to Pier 17, where a dim light glows in a warehouse window. Through the grimy glass, you see crates being loaded, men with guns, and—there—a flash of jade green. You've found something big, but you're outnumbered and outgunned. The smart play is to call for backup, but by the time they arrive, the evidence might be gone. The alternative is to get creative.",
      "choices": [
        {
          "label": "Call the police and wait for backup",
          "next_id": "docks_police"
        },
        {
          "label": "Sneak in and gather evidence yourself",
          "next_id": "docks_infiltrate"
        },
        {
          "label": "Start a distraction fire and grab the serpent in the chaos",
          "next_id": "docks_chaos"
        }
      ]
    },
    "victoria_honesty": {
      "text": "Victoria laughs, a sound like breaking glass. 'Stolen? My dear detective, I don't steal. I acquire. And no, I don't have your precious serpent, though I wish I did.' She lights a cigarette with practiced elegance. 'But I can tell you who does. Your client—the woman who hired you—she didn't buy that serpent legally. She had it stolen from the museum, from me, from its rightful place. And now someone has stolen it from her. Poetic, isn't it?' She slides a folder across the desk. 'Everything you need to know about your client's criminal activities. Consider it a gift.' The question is: can you trust her?",
      "choices": [
        {
          "label": "Take the folder and investigate your client",
          "next_id": "client_investigation"
        },
        {
          "label": "Refuse—Victoria is obviously playing you",
          "next_id": "trust_client"
        }
      ]
    },
    "victoria_romance": {
      "text": "You turn on the charm, and Victoria responds. The conversation shifts from interrogation to flirtation, each of you testing the other. Over expensive scotch, she reveals the truth: she hired you. Your 'client' was a plant, a setup. Victoria wanted someone to investigate the serpent's theft without it being traced back to her. 'The serpent rightfully belongs to me,' she explains. 'I'm willing to split the insurance money with you—fifty-fifty—if you help me prove it was destroyed. All you have to do is file a false report.' She traces a finger along your jaw. 'What do you say, detective? Want to make some real money?'",
      "choices": [
        {
          "label": "Accept her offer—the money is too good to refuse",
          "next_id": "ending_corrupt"
        },
        {
          "label": "Pretend to accept, then double-cross her",
          "next_id": "victoria_vengeful"
        },
        {
          "label": "Reject her offer and turn her in to the authorities",
          "next_id": "ending_justice_served"
        }
      ]
    },
    "femme_fatale": {
      "text": "The plate number leads you to an apartment in West Hollywood. The woman who answers the door is stunning—red hair, green eyes, and a smile that could make a man forget his own name. 'You must be the detective,' she says. 'I'm Scarlett Divine. I've been expecting you.' She invites you in to an apartment filled with Chinese art. 'I took the serpent,' she admits freely. 'But not to sell it. To return it. That artifact was stolen from my family in Shanghai twenty years ago. I've been tracking it ever since.' She shows you documents, photographs, a family history. It's compelling, but something doesn't add up.",
      "choices": [
        {
          "label": "Believe her story and help her return the serpent to China",
          "next_id": "ending_betrayed"
        },
        {
          "label": "Investigate her claims—demand proof",
          "next_id": "scarlett_revealed"
        },
        {
          "label": "Work with her anyway, regardless of the truth",
          "next_id": "ending_partners_in_crime"
        }
      ]
    },
    "guard_confession": {
      "text": "You lean on Eddie, and he cracks like cheap china. 'Okay, okay! I was paid to look the other way. Dr. Wei from the museum, he gave me five hundred bucks to disable the alarm and forget what I saw. I didn't know someone was gonna get killed!' You freeze. 'Killed? What are you talking about?' Eddie's face goes white. 'The security chief. They found him in the basement the next day. Made it look like a heart attack, but I know what I know. Please, detective, you gotta protect me. If they find out I talked...' You've just uncovered a murder. This case just got a lot more complicated.",
      "choices": [
        {
          "label": "Take Eddie into protective custody and investigate the murder",
          "next_id": "murder_investigation"
        },
        {
          "label": "Use Eddie as bait to draw out the killers",
          "next_id": "eddie_bait"
        }
      ]
    },
    "curator_confrontation": {
      "text": "You find Dr. Wei in his museum office, surrounded by ancient treasures. When you lay out your evidence, his sophisticated facade crumbles. 'You don't understand,' he says desperately. 'I'm part of something bigger. A syndicate that's been smuggling artifacts out of Asia for decades. The Jade Serpent is just one piece. They'll kill me if I talk, kill my family.' He opens a safe and pulls out thick stacks of cash. 'Take it. Fifty thousand dollars. Walk away and forget you ever heard of the Jade Serpent.' Outside, you hear sirens—but are they coming for you or for him?",
      "choices": [
        {
          "label": "Take the money and walk away",
          "next_id": "ending_bought_off"
        },
        {
          "label": "Refuse the bribe and fight your way out",
          "next_id": "shootout"
        },
        {
          "label": "Stall him while the police arrive",
          "next_id": "ending_hero_cop"
        }
      ]
    },
    "trap_success": {
      "text": "You leak false information that the Jade Serpent has been spotted at a private auction. Then you stake out the location. Sure enough, someone takes the bait: Dr. Wei arrives with two armed men. You've got them dead to rights, and you've got the evidence to prove the whole smuggling operation. But Wei has the actual serpent with him—it's there in a briefcase, more beautiful than the photograph suggested. He opens it, shows you. 'Take it,' he says. 'Close your case, return it to your client, collect your fee. Just let us go. Nobody has to know about the rest.' Behind you, your police contact is waiting for your signal.",
      "choices": [
        {
          "label": "Signal the police and bust the whole operation",
          "next_id": "ending_case_closed"
        },
        {
          "label": "Take the serpent and let them escape—complete your job",
          "next_id": "ending_rich_and_guilty"
        }
      ]
    },
    "marco_deal": {
      "text": "Marco leans back, studying you. 'I like you, detective. You've got guts coming here alone. So I'll be straight with you. I know where the Jade Serpent is. Hell, I brokered the deal that got it stolen in the first place. But here's the thing—I'm looking to expand my operations. I need someone with your skills, someone who can move between the legal and illegal worlds. Work for me, and I'll give you the serpent, a fat salary, and protection. Refuse...' He doesn't finish the sentence, but his meaning is clear. The jazz band starts playing a funeral march.",
      "choices": [
        {
          "label": "Accept Marco's offer and join his organization",
          "next_id": "ending_crime_boss"
        },
        {
          "label": "Refuse and investigate on your own",
          "next_id": "marco_truth"
        },
        {
          "label": "Pretend to accept while planning to betray him",
          "next_id": "marco_betrayal"
        }
      ]
    },
    "fingers_talks": {
      "text": "Fingers squeals like a stuck pig once you rough him up. 'Okay! Okay! The serpent's cursed, man! Everyone who touches it ends up dead or worse. I wouldn't fence it for a million bucks. But I know who would—Tommy Chen, down at the Red Dragon Import Company. He specializes in occult items. If someone stole a cursed artifact, he's the only fence crazy enough to handle it.' He gives you an address in Chinatown. 'But I'm telling you, detective, walk away from this one. The Jade Serpent has a body count, and it's still climbing.' Superstitious nonsense, or a genuine warning?",
      "choices": [
        {
          "label": "Investigate Tommy Chen and the curse angle",
          "next_id": "curse_investigation"
        },
        {
          "label": "Dismiss the curse talk and focus on hard evidence",
          "next_id": "rational_path"
        }
      ]
    },
    "shootout": {
      "text": "You refuse the bribe, and Wei's face hardens. 'I was hoping you'd be reasonable,' he says, pulling a gun. But you're faster. The office erupts in gunfire. You take cover behind a marble statue as bullets chip away at ancient treasures worth millions. You manage to wound one of Wei's men and send the other running, but Wei escapes in the chaos. You've got evidence of the smuggling ring, but not the serpent. Still, you've made powerful enemies tonight, and they won't forget this. You need to finish this case before they finish you.",
      "choices": [
        {
          "label": "Call in every favor you have to take down the syndicate",
          "next_id": "ending_syndicate_destroyed"
        },
        {
          "label": "Go after Wei alone to finish this",
          "next_id": "ending_wounded_victory"
        }
      ]
    },
    "ambush": {
      "text": "You order a drink and watch the room. That's when you notice the jazz singer staring at you—not performing, just staring. Then the lights go out. You dive for cover just as gunfire erupts. Someone set you up, and Marco's speakeasy has become a shooting gallery. You return fire, using muzzle flashes to aim. When the lights come back on, three men are dead, Marco is gone, and the singer is walking toward you with your gun in her hand. 'Nice shooting, detective,' she says. 'Now let's talk about the Jade Serpent.' She's not what she seems.",
      "choices": [
        {
          "label": "Hear what she has to say",
          "next_id": "singer_reveal"
        },
        {
          "label": "Disarm her and demand answers",
          "next_id": "singer_confrontation"
        }
      ]
    },
    "curse_investigation": {
      "text": "Tommy Chen's import shop is filled with incense smoke and artifacts that make your skin crawl. Tommy himself is ancient, his face a map of wrinkles. 'The Jade Serpent,' he whispers. 'Yes, I know it well. Cursed by a Chinese empress 400 years ago. Everyone who possesses it meets a tragic end. Your client will die within a week of losing it. The thief will die even sooner.' He shows you photographs of previous owners—all dead. 'But there's a way to break the curse. Return it to the Empress's tomb in the Forbidden City. Only then will the deaths stop.' He gives you ancient texts as proof. Could this actually be real?",
      "choices": [
        {
          "label": "Plan to return the serpent to China and break the curse",
          "next_id": "ending_curse_breaker"
        },
        {
          "label": "Find the serpent but keep the curse theory to yourself",
          "next_id": "ending_skeptical_hero"
        }
      ]
    },
    "rational_path": {
      "text": "You dismiss the curse as superstition and focus on the facts. Following the chain of evidence, you discover the serpent is currently in a safety deposit box at the First National Bank, held under a false name. You stake out the bank, and sure enough, someone comes to access the box—your original client. She's been playing you from the start. The 'theft' was insurance fraud. She planned to collect the insurance money while keeping the serpent hidden. When she sees you, she runs. You chase her through downtown LA, finally cornering her in an alley. She pulls a gun. 'I'll split the insurance money with you,' she offers.",
      "choices": [
        {
          "label": "Accept the deal—you've earned it",
          "next_id": "ending_partners"
        },
        {
          "label": "Arrest her and return the serpent",
          "next_id": "ending_righteous_path"
        },
        {
          "label": "Take the serpent for yourself and disappear",
          "next_id": "ending_solo_score"
        }
      ]
    },
    "ending_regret": {
      "text": "You turn down the case, and the woman leaves without another word. Three days later, you read in the paper that she was found dead in her mansion, the victim of an apparent burglary gone wrong. The Jade Serpent is still missing. The police close the case as a simple home invasion, but you know better. You could have prevented this. You could have found the serpent and maybe saved her life. Instead, you played it safe, and now she's dead and you're left with nothing but regrets and whiskey. Sometimes the cases you don't take haunt you more than the ones you do.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_killed_by_bodyguard": {
      "text": "The moment you threaten to bring in the cops, Victoria's bodyguard moves. He's fast—too fast. Before you can draw your gun, he's on you. The last thing you see is his fist coming toward your face. You wake up three days later in the hospital with a fractured skull and broken ribs. The doctors say you're lucky to be alive. Victoria filed a complaint saying you attacked her, and your PI license is suspended pending investigation. By the time you're cleared, the case has gone cold, your reputation is ruined, and Victoria has disappeared. You played it tough, and it cost you everything.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_corrupt": {
      "text": "You accept Victoria's offer. Together, you craft an elaborate scheme: the Jade Serpent is 'destroyed' in a warehouse fire, Victoria collects the insurance money, and you get your cut—$100,000. It's more money than you've ever seen. You file the false report, and everyone believes it. Victoria skips town with the real serpent, and you're left with enough cash to retire from the PI business. You buy a place in Santa Barbara and try to enjoy your ill-gotten gains. But every time you look in the mirror, you see what you've become: just another corrupt cop in a corrupt town. The money spends, but the guilt never goes away.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_justice_served": {
      "text": "You reject Victoria's offer and immediately contact the authorities. The investigation reveals that Victoria has been running an insurance fraud scheme for years, using planted 'thefts' to collect millions. Your testimony puts her away for fifteen years. The Jade Serpent is returned to its rightful owner—the Chinese government, who thank you personally. You don't get rich, but you keep your integrity. The DA offers you a position as an investigator, but you decline. You're a private detective, and you like it that way. Walking the rain-soaked streets at night, knowing you did the right thing, that's payment enough.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_betrayed": {
      "text": "You believe Scarlett's story and agree to help her return the Jade Serpent to China. Together, you arrange transport and forge documents. But when you arrive at the dock to hand over the serpent, Scarlett pulls a gun on you. 'You're a sweet guy, detective, but incredibly naive. There's no family legacy. I'm a thief, and this serpent is worth two million on the black market.' She shoots you in the shoulder and disappears into the night. You survive, but the serpent is gone, your client wants answers you don't have, and your reputation is destroyed. You trusted the wrong femme fatale, and it cost you everything.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_partners_in_crime": {
      "text": "You don't care if Scarlett's story is true or not—she's interesting, dangerous, and you're tired of playing by the rules. Together, you fence the Jade Serpent for $1.5 million and split it down the middle. You leave LA behind, traveling the world as partners in crime—stealing, scheming, living on the edge. It's not the life you planned, but it's exciting. Scarlett keeps you on your toes, and you keep her grounded. You're not heroes, but you're not monsters either. Just two people who chose adventure over morality. Sometimes, late at night, you wonder what kind of detective you might have been. Then Scarlett kisses you, and you stop wondering.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "scarlett_revealed": {
      "text": "You demand proof, and Scarlett's charming facade cracks. She sighs and puts down the fake documents. 'Fine. You're smarter than you look. I'm a professional thief hired by a collector in Hong Kong. But here's the thing—I've grown to like you, detective. So I'm offering you a choice: let me go with the serpent and I'll give you enough evidence to close your case and satisfy your client. Or try to stop me, and we both lose.' She produces a file with photographs of the real thief—Dr. Wei, the museum curator. 'He hired me to steal it back after your client bought it. I can give you him and disappear, or we can both walk away with nothing.",
      "choices": [
        {
          "label": "Let Scarlett go and use the evidence to close the case",
          "next_id": "ending_pragmatic"
        },
        {
          "label": "Try to arrest Scarlett and recover the serpent",
          "next_id": "scarlett_fight"
        }
      ]
    },
    "curator_ambush": {
      "text": "You hide behind a filing cabinet as the door opens. Dr. Wei enters with two armed men. 'Search the office,' he commands. 'Someone's been through my files.' They're looking for you, but they're sloppy. You could take them by surprise, but three against one are bad odds. Alternatively, you could wait until they leave and follow them—they might lead you straight to the Jade Serpent. Or you could try to slip out while they're distracted. Your heart pounds as footsteps approach your hiding spot.",
      "choices": [
        {
          "label": "Ambush them while you have the element of surprise",
          "next_id": "curator_fight"
        },
        {
          "label": "Wait them out and follow when they leave",
          "next_id": "following_wei"
        }
      ]
    },
    "museum_confrontation": {
      "text": "You step into the hallway, gun drawn. Dr. Wei freezes, caught red-handed returning to his office. But he's not alone—two cops flank him, and they're drawing their weapons too. 'Detective,' Wei says smoothly, 'these officers were just helping me investigate a break-in. My office was ransacked. You wouldn't know anything about that, would you?' The cops look at you suspiciously. You're the one with the picked lock and no warrant. Wei is setting you up, and unless you can talk fast, you're about to be arrested for breaking and entering.",
      "choices": [
        {
          "label": "Try to explain yourself to the police",
          "next_id": "police_trouble"
        },
        {
          "label": "Make a run for it",
          "next_id": "museum_chase"
        },
        {
          "label": "Bluff and claim you have authorization",
          "next_id": "bluff_police"
        }
      ]
    },
    "museum_escape": {
      "text": "You slip out the window just as the office door opens. Climbing down the fire escape, you hear shouts behind you. Someone spotted you. You hit the ground running, disappearing into the rainy LA night. You didn't get all the answers, but you got enough: Dr. Wei is dirty, the museum is involved, and the Jade Serpent is part of something much bigger. You regroup at your office and make a new plan. The curator won't be expecting you to come at him from a different angle. Time to get creative.",
      "choices": [
        {
          "label": "Investigate Dr. Wei's personal life and associates",
          "next_id": "wei_background"
        },
        {
          "label": "Set up surveillance on the museum",
          "next_id": "museum_stakeout"
        }
      ]
    },
    "followed": {
      "text": "You leave the speakeasy, but you can feel eyes on you. Two blocks later, you confirm it—a black sedan is tailing you through the rain-slicked streets. They're not trying to hide it. This is intimidation. You've got options: lose them in the maze of downtown LA, confront them directly, or lead them somewhere you have the advantage. Your hand rests on your gun as you make a quick turn into an alley. The sedan follows. This is about to get violent.",
      "choices": [
        {
          "label": "Lose them in the alleyways",
          "next_id": "car_chase"
        },
        {
          "label": "Set an ambush in a dead-end alley",
          "next_id": "alley_ambush"
        }
      ]
    },
    "fingers_betrayal": {
      "text": "You pay Fingers $500 for information. He grins, counts the money, and tells you the Jade Serpent is being held at a warehouse on Fifth Street. 'Be there at midnight,' he says. 'That's when they're moving it.' You show up at the warehouse at the appointed time, but it's a trap. The moment you enter, lights flood the space and a dozen guns point at you. Fingers sold you out. A figure steps from the shadows—Marco Santini. 'Thanks for coming, detective. We've been wondering when someone would start asking the right questions. Now we need to make sure you stop asking them.' You're surrounded and outgunned.",
      "choices": [
        {
          "label": "Try to shoot your way out",
          "next_id": "ending_shootout_death"
        },
        {
          "label": "Negotiate for your life",
          "next_id": "marco_negotiation"
        }
      ]
    },
    "fingers_scared": {
      "text": "You tell Fingers that the police are outside, and his face goes white. He's been arrested twice before—a third strike means life. 'Okay, okay!' he stammers. 'The serpent came through here three days ago. I didn't touch it—too hot. But I know who did. There's a collector, goes by the name Solomon Price. He lives in a penthouse on Wilshire Boulevard. Private elevator, armed guards, the works. If anyone has the serpent now, it's him. That's all I know, I swear!' He gives you an address. Whether he's telling the truth or sending you into another trap, you'll have to find out.",
      "choices": [
        {
          "label": "Investigate Solomon Price's penthouse",
          "next_id": "price_penthouse"
        },
        {
          "label": "Research Solomon Price before approaching him",
          "next_id": "price_research"
        }
      ]
    },
    "docks_police": {
      "text": "You call your contact in the LAPD, Detective Morrison. Twenty minutes later, police swarm the warehouse. You watch from across the street as they raid the place, arresting the smugglers and confiscating crates of stolen artifacts. Morrison finds you afterward. 'Good work,' he says. 'We've been after this smuggling ring for months. Found the Jade Serpent too.' He hands you a evidence bag with the artifact inside. 'Return it to your client, close your case, and don't ask too many questions about where we found it.' You've solved the case cleanly, but something bothers you—Morrison seemed to know exactly where to look.",
      "choices": [
        {
          "label": "Take the serpent and close the case",
          "next_id": "ending_clean_case"
        },
        {
          "label": "Investigate Morrison's involvement",
          "next_id": "morrison_corrupt"
        }
      ]
    },
    "docks_infiltrate": {
      "text": "You sneak into the warehouse through a broken window. Inside, you see crates stamped with Chinese characters, artwork wrapped in canvas, and armed men loading everything onto a ship. Then you see it—the Jade Serpent, sitting on a table, glowing faintly in the lamplight. You could grab it and run, but you'd never make it past the guards. Better to observe, gather evidence, and come back with backup. But as you watch, one of the men picks up the serpent and heads toward the ship. It's now or never.",
      "choices": [
        {
          "label": "Steal the serpent and make a run for it",
          "next_id": "docks_escape"
        },
        {
          "label": "Follow the serpent onto the ship",
          "next_id": "ship_boarding"
        }
      ]
    },
    "docks_chaos": {
      "text": "You start a fire in a pile of trash near the warehouse. Within minutes, flames are licking the wooden walls and men are shouting, scrambling to save their cargo. In the chaos, you slip inside and grab the Jade Serpent from where it sits unguarded. But as you turn to leave, you come face to face with the smuggling ring's leader—a scarred man with dead eyes who doesn't seem to care about the fire. 'That belongs to me,' he says quietly, drawing a knife. Behind you, the fire roars. Ahead, he blocks your only exit. This is going to get messy.",
      "choices": [
        {
          "label": "Fight him with the fire at your back",
          "next_id": "fire_fight"
        },
        {
          "label": "Throw the serpent and run while he's distracted",
          "next_id": "serpent_sacrifice"
        }
      ]
    },
    "client_investigation": {
      "text": "You investigate your original client using Victoria's information. The truth is damning: she's been running an art theft and fraud operation for years, using private detectives like you as unknowing pawns. The Jade Serpent was stolen on her orders from the museum, then 'stolen' again in a staged second theft so she could collect insurance money. You've been played from the start. Worse, she's dangerous—the file contains evidence linking her to three murders. You need to decide whether to confront her directly or go to the authorities.",
      "choices": [
        {
          "label": "Confront your client and demand the truth",
          "next_id": "client_confrontation"
        },
        {
          "label": "Turn all evidence over to the police",
          "next_id": "ending_truth_revealed"
        }
      ]
    },
    "trust_client": {
      "text": "You refuse Victoria's folder, trusting your original client. Big mistake. Two days later, you're drugged and wake up in a warehouse, tied to a chair. Your client stands before you, the Jade Serpent in her hands. 'You should have taken Victoria's offer,' she says. 'Now you know too much.' She's not the helpless victim she pretended to be—she's the mastermind behind the entire smuggling operation. Victoria was trying to warn you, but you were too stubborn to listen. The warehouse door opens, and her men enter with tools that promise a very painful conversation about what you've learned.",
      "choices": [
        {
          "label": "Try to escape",
          "next_id": "warehouse_escape"
        },
        {
          "label": "Attempt to reason with her",
          "next_id": "ending_tortured"
        }
      ]
    },
    "victoria_vengeful": {
      "text": "You pretend to accept Victoria's offer, then immediately go to the police with everything you know. But Victoria is three steps ahead. By the time the police raid her mansion, she's gone, and all the evidence has disappeared. Worse, she's left behind fabricated evidence implicating you in the theft. Within hours, you're arrested. Your PI license is revoked, and you're facing twenty years in prison. Your lawyer says the case against you is airtight. You tried to play both sides and ended up losing everything. From your cell, you can see the Hollywood sign through the barred window—a mockery of the glamorous life you'll never have.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "murder_investigation": {
      "text": "You take Eddie into protective custody and dig into the security chief's death. The autopsy was rushed, the body cremated immediately—classic signs of a cover-up. Following the money trail, you discover that the museum's board of directors has been complicit in the smuggling operation for years. The Jade Serpent was just one artifact in a pipeline moving Chinese treasures to private American collectors. You've uncovered a conspiracy that goes all the way to City Hall. You gather enough evidence to bring down the entire operation, but powerful people want you silenced. You'll need to move fast.",
      "choices": [
        {
          "label": "Go public with everything immediately",
          "next_id": "ending_whistleblower"
        },
        {
          "label": "Build an airtight case before revealing anything",
          "next_id": "ending_patient_justice"
        }
      ]
    },
    "eddie_bait": {
      "text": "You use Eddie as bait, planting a story that he's ready to talk to the police. That night, assassins come for him at the safe house you've set up. But you're ready. The shootout is brief and brutal. You capture one of the assassins alive and force him to talk. He gives up the whole operation: Dr. Wei is the middleman, but the real power is a crime boss named Marco Santini who's been using the museum as a front for smuggling. With this information and Eddie's testimony, you can bring down the whole organization. The question is whether Eddie will survive long enough to testify.",
      "choices": [
        {
          "label": "Rush to trial before they can kill Eddie",
          "next_id": "ending_quick_justice"
        },
        {
          "label": "Go after Marco directly",
          "next_id": "marco_confrontation_final"
        }
      ]
    },
    "ending_bought_off": {
      "text": "You take the fifty thousand dollars and walk away. Dr. Wei and his smuggling syndicate continue their operations, stealing and selling cultural treasures while you sit in your new apartment, counting blood money. The Jade Serpent disappears into a private collection, never to be seen again. Your client receives an insurance payout, and everyone gets what they want except the truth. You tell yourself you made the smart play, that you survived when you could have died. But every time you spend that money, you remember what you sold: your integrity, your honor, everything that made you more than just another corrupt cog in a corrupt machine.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_hero_cop": {
      "text": "You stall Dr. Wei while the police arrive. There's a tense moment when he realizes what you've done, but by then it's too late. The police burst in, arrest Wei and his associates, and confiscate the Jade Serpent. The smuggling syndicate is dismantled over the following months. You return the serpent to your client and collect your fee. The DA offers you a Medal of Civic Merit for your work exposing the operation. You decline the publicity but accept the quiet satisfaction of a job well done. Sometimes the best endings are the simple ones: you caught the bad guys, recovered the artifact, and nobody died. That's a win in your book.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_case_closed": {
      "text": "You signal the police, and they swarm in. Dr. Wei and his men are arrested, the Jade Serpent is recovered, and the entire smuggling operation is exposed. You return the artifact to your client, who pays you generously and thanks you profusely. The newspapers call you a hero. The mayor shakes your hand. It's the perfect ending to a difficult case. But late at night, nursing a whiskey in your office, you think about all the choices that led here—the people who died, the lives ruined, the secrets still buried. You solved the case, but you can't help wondering what other darkness lurks in the shadows of this city, waiting for someone to shine a light on it.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_rich_and_guilty": {
      "text": "You take the Jade Serpent and let Dr. Wei escape. He'll rebuild his operation somewhere else, but that's not your problem. You return the serpent to your client, collect your substantial fee, and try to forget about the corruption you enabled. The money is good, and your conscience only bothers you occasionally. You've chosen pragmatism over justice, survival over heroism. You're not proud of it, but you're alive and solvent. That counts for something in a city where both are hard to come by. You drink a toast to moral ambiguity and go back to doing what you do best: solving cases and not asking too many questions about the bigger picture.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_crime_boss": {
      "text": "You accept Marco's offer. Within months, you're his right-hand man, using your detective skills to help him expand his criminal empire. You make more money than you ever did as a legitimate PI, and you tell yourself it's not so different—you're still solving puzzles, just for the other side. But the bodies pile up. The corruption spreads. And one day you look in the mirror and don't recognize the man staring back. You've become everything you once fought against. Marco trusts you completely, which makes it all the more tragic when a rival crime family puts a bullet in your head to send him a message. You die rich, powerful, and utterly lost.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "marco_truth": {
      "text": "You refuse Marco's offer and walk out of the speakeasy, knowing you've made a dangerous enemy. But you're not done investigating. Following Marco's organization, you discover the Jade Serpent is being used as collateral in a deal with the Chinese Triads—a trade for opium and weapons. It's bigger than art theft; it's international smuggling. You gather evidence for weeks, building a case that will bring down Marco and his entire operation. It's dangerous work, and you're working alone, but that's how you prefer it. One night, you're ready. You have everything you need. It's time to end this.",
      "choices": [
        {
          "label": "Take your evidence to the FBI",
          "next_id": "ending_fbi_case"
        },
        {
          "label": "Confront Marco directly with what you know",
          "next_id": "marco_final_confrontation"
        }
      ]
    },
    "marco_betrayal": {
      "text": "You pretend to accept Marco's offer while secretly planning to betray him. He takes you into his confidence, showing you the entire operation—the warehouses, the contacts, the money laundering schemes. You document everything. But Marco didn't survive this long by being stupid. One night, he calls you to a meeting at the docks. When you arrive, his men are waiting. 'Did you really think I wouldn't notice you taking photographs, detective?' Marco asks sadly. 'I liked you. That's why I'm giving you a choice: take a boat to Mexico tonight and never come back, or take a swim in the Pacific with concrete shoes.' The betrayer betrayed.",
      "choices": [
        {
          "label": "Take the exile option and flee to Mexico",
          "next_id": "ending_exile"
        },
        {
          "label": "Fight your way out",
          "next_id": "ending_last_stand"
        }
      ]
    },
    "ending_syndicate_destroyed": {
      "text": "You call in every favor, every contact, every debt owed to you. Police, FBI, even some criminal allies who hate Dr. Wei's syndicate—you assemble a coalition. The raids happen simultaneously across the city. Warehouses, safe houses, the museum itself—all hit at once. Dr. Wei is arrested along with forty-two others. The Jade Serpent is recovered and returned to its rightful place. The syndicate is destroyed. It costs you—old friendships burned, bridges demolished, your reputation forever changed from lone wolf to man who calls in the cavalry. But the city is safer, and sometimes that's worth the price. You're a hero, even if you don't feel like one.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_wounded_victory": {
      "text": "You track Dr. Wei to a warehouse where he's preparing to flee the country. The confrontation is brutal—just you and him, guns drawn, surrounded by millions in stolen artifacts. You both fire. His shot grazes your ribs; yours hits him in the shoulder. He drops his weapon, and you recover the Jade Serpent from his luggage. You get him to the hospital, then yourself. You survived, the case is closed, but you'll carry the scars forever. Your client pays you, but the bullet wound aches every time it rains. You didn't get justice for everyone, but you got enough. Sometimes, that has to be enough.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "singer_reveal": {
      "text": "The singer sits across from you, gun still in hand. 'My name is Li Mei,' she says. 'I'm with Chinese Intelligence. The Jade Serpent was stolen from my government seventy years ago. I've been tracking it ever since it surfaced in Los Angeles. The people who just tried to kill you? They're working for a syndicate that's been smuggling Chinese artifacts to fund arms deals. I need your help to recover the serpent and take down their operation. In exchange, I can offer you immunity for anything you've done during this investigation, and a substantial reward.' She slides her credentials across the table. They look legitimate.",
      "choices": [
        {
          "label": "Partner with Li Mei to recover the serpent",
          "next_id": "li_mei_partnership"
        },
        {
          "label": "Refuse—you work alone",
          "next_id": "solo_investigation"
        }
      ]
    },
    "singer_confrontation": {
      "text": "You disarm the singer in one smooth motion, pressing her against the wall. She doesn't resist. 'Good reflexes,' she says calmly. 'I'm Li Mei, Chinese Intelligence. I'm not your enemy.' She shows you credentials that look authentic. 'The Jade Serpent belongs to my government. I'm authorized to recover it by any means necessary. We can work together, or you can keep stumbling around while people try to kill you. Your choice.' You've got the upper hand physically, but her information might be valuable. The question is whether you can trust a foreign agent in the middle of your case.",
      "choices": [
        {
          "label": "Trust Li Mei and work together",
          "next_id": "li_mei_partnership"
        },
        {
          "label": "Turn her over to the American authorities",
          "next_id": "li_mei_arrested"
        }
      ]
    },
    "ending_curse_breaker": {
      "text": "You recover the Jade Serpent and, believing Tommy Chen's warnings, arrange secret transport to China. It takes months of planning, bribing officials, and dodging both American and Chinese authorities. But you succeed. You personally return the Jade Serpent to the Empress's tomb in the Forbidden City, accompanied by Tommy Chen who performs the ritual to break the curse. Your client is furious, your fee is lost, and you're now wanted by multiple governments for smuggling. But the deaths stop. No more mysterious accidents, no more tragedies. You broke a 400-year-old curse. Whether it was ever real or not, you'll never know. But you sleep better at night.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_skeptical_hero": {
      "text": "You recover the Jade Serpent and return it to your client, dismissing the curse as superstition. You collect your fee and close the case. Three months later, your client dies in a car accident. Six months after that, the new owner drowns in their swimming pool. A year later, another mysterious death. You start researching the serpent's history and find a trail of bodies stretching back centuries. Maybe Tommy Chen was right. Maybe some artifacts carry more than monetary value. You try to track down the serpent again to destroy it or return it to China, but it's disappeared into the hands of another collector. At night, you wonder if you're next on the curse's list.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_partners": {
      "text": "You accept your client's offer to split the insurance money. Together, you stage her 'death' and she disappears to South America with a new identity. You file the paperwork, collect $200,000, and everyone believes the Jade Serpent was destroyed in the fire that killed its owner. You're rich, but you're also a criminal now—insurance fraud, filing false police reports, accessory to fraud. Every time you spend the money, you remember the line you crossed. You changed from a detective who solved crimes to someone who commits them. The money will run out eventually, but the corruption in your soul? That's permanent.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_righteous_path": {
      "text": "You arrest your client and turn over all the evidence to the authorities. She's convicted of insurance fraud and theft, sentenced to ten years in prison. The Jade Serpent is returned to the museum, where it belongs. Your fee is lost, your client hates you, and you're back to scraping by on small cases. But you kept your integrity. You did the right thing even when it cost you. Sometimes that's all you can do—hold the line between right and wrong, even when the world doesn't care. You walk the rain-soaked streets of LA knowing you're one of the few honest people left in this corrupt city. That's worth more than money.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_solo_score": {
      "text": "You take the Jade Serpent for yourself and disappear. Your client is arrested, Dr. Wei is on the run, and everyone thinks the serpent was lost in the chaos. But you have it, hidden away. You fence it through underground channels for $800,000 and vanish to a small island in the Caribbean. You spend your days drinking rum on the beach, trying to forget the people you betrayed, the trust you violated, the detective you used to be. The money is nice, but it bought you a hollow life. You're safe, you're rich, and you're completely alone. Some nights, you dream about the city you left behind and wake up wondering if you made the right choice.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_pragmatic": {
      "text": "You let Scarlett escape with the Jade Serpent and use her evidence to frame Dr. Wei for the whole thing. Wei is arrested, your client accepts that the serpent is gone and files an insurance claim, and you collect your fee for solving the case. Everyone's happy except Wei, who'll spend twenty years in prison for crimes he partly committed. You saw Scarlett one more time before she left town—she thanked you with a kiss and disappeared into the night. You compromised your principles but got a result that satisfied everyone who matters. It's not perfect justice, but it's practical justice. In Los Angeles, sometimes that's the best you can hope for.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "scarlett_fight": {
      "text": "You try to arrest Scarlett, but she's faster than she looks. The fight is brief and brutal—furniture smashed, guns drawn, blood spilled. In the end, you manage to subdue her, but in the struggle, the Jade Serpent falls from the balcony and shatters on the street below. Scarlett laughs bitterly. 'Congratulations, detective. You got nothing, I got nothing, and a priceless artifact is destroyed. I hope you're proud.' The police arrive and arrest her based on your testimony. You close the case having recovered nothing, but at least you stopped a thief. Your client is furious, your fee is reduced, and you're left wondering if violence was really the answer.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "curator_fight": {
      "text": "You burst from cover and attack. The fight is savage—three against one in close quarters. You manage to shoot one man and knock out another, but Dr. Wei escapes in the chaos. You're left wounded and exhausted, but you search the office and find documents proving the entire smuggling operation. More importantly, you find a shipping manifest showing where the Jade Serpent is headed: a private collector in San Francisco. You've got evidence to bring down Wei's operation and a lead on the serpent. You patch yourself up and decide whether to chase the serpent or finish dismantling the smuggling ring.",
      "choices": [
        {
          "label": "Go to San Francisco to recover the serpent",
          "next_id": "san_francisco_chase"
        },
        {
          "label": "Use the evidence to destroy the smuggling ring first",
          "next_id": "ending_evidence_first"
        }
      ]
    },
    "following_wei": {
      "text": "You wait in the shadows until Wei and his men leave the office. They're in a hurry, nervous about something. You follow them through the empty museum to a service elevator that descends below the building. The basement is massive, filled with crates of artifacts waiting to be smuggled out of the country. And there, in the center of it all, is the Jade Serpent, being carefully packed for transport. You've found it. But Wei has at least six armed men down here. You could call the police, but they'd take hours to get a warrant. By then, the serpent will be gone. Or you could try something risky.",
      "choices": [
        {
          "label": "Create a distraction and steal the serpent",
          "next_id": "basement_heist"
        },
        {
          "label": "Document everything and call the FBI",
          "next_id": "ending_fbi_raid"
        }
      ]
    },
    "police_trouble": {
      "text": "You try to explain that you're investigating a theft, but the cops aren't interested. Dr. Wei plays his part perfectly—the concerned curator victimized by a rogue detective. You're arrested for breaking and entering. At the station, Wei doesn't press charges but makes it clear: drop the case or face serious consequences. Your PI license is suspended pending investigation. Without your license, you can't work. Your reputation is damaged, and Wei is still free. You've lost this round, but you're not out of the game yet. You can try to clear your name, or you can drop the case and move on.",
      "choices": [
        {
          "label": "Drop the case and try to salvage your career",
          "next_id": "ending_defeated"
        },
        {
          "label": "Continue investigating without a license",
          "next_id": "rogue_investigation"
        }
      ]
    },
    "museum_chase": {
      "text": "You run, and the chase is on. Through the museum's halls, past priceless artifacts, with cops and Wei's men both pursuing you. You're faster and more desperate. You make it outside and disappear into the Los Angeles night, but you're now wanted for questioning and your face will be in tomorrow's papers. You've burned your bridges with the law, but you've still got leads on the Jade Serpent. You'll just have to solve this case as a fugitive. It's harder, more dangerous, but you've never backed down from a challenge. Time to go underground and finish what you started.",
      "choices": [
        {
          "label": "Go into hiding and continue the investigation covertly",
          "next_id": "underground_investigation"
        },
        {
          "label": "Leave town and abandon the case",
          "next_id": "ending_fugitive"
        }
      ]
    },
    "bluff_police": {
      "text": "You claim you have authorization from the museum's board to investigate internal security. It's a complete bluff, but you sell it with confidence. Dr. Wei's eyes widen—he can't contradict you without raising suspicions about why he's so concerned. The cops buy it and leave. Wei stares at you with barely concealed fury. 'You're playing a dangerous game, detective,' he hisses. 'Walk away now, or you'll regret it.' But you've got him rattled. He knows you're onto him. Now you need to move fast before he covers his tracks.",
      "choices": [
        {
          "label": "Press your advantage and demand answers from Wei",
          "next_id": "wei_interrogation"
        },
        {
          "label": "Leave and gather more evidence before confronting him again",
          "next_id": "gather_evidence"
        }
      ]
    },
    "wei_background": {
      "text": "You dig into Dr. Wei's personal life. He lives modestly despite his position, but financial records show large cash deposits every month. Following the money leads you to shell corporations in Hong Kong and a warehouse near the docks. Surveillance photos show Wei meeting with known criminals. You've built a solid case, but you still need the Jade Serpent to close it. One of Wei's associates is a woman named Lotus Chang who runs an import/export business. She might be the weak link in Wei's organization.",
      "choices": [
        {
          "label": "Approach Lotus Chang and try to flip her",
          "next_id": "lotus_flip"
        },
        {
          "label": "Raid the warehouse with what evidence you have",
          "next_id": "warehouse_raid"
        }
      ]
    },
    "museum_stakeout": {
      "text": "You stake out the museum for three nights. On the third night, you see Dr. Wei arrive at 2 AM with two men in a truck. They load crates from the basement—artifacts being smuggled out. You follow the truck to the docks where they're loading a cargo ship bound for Hong Kong. The Jade Serpent must be in one of those crates. You could board the ship and search for it, or call the Coast Guard and have them intercept the vessel. Either way, Wei's operation is about to come crashing down.",
      "choices": [
        {
          "label": "Board the ship and search for the serpent",
          "next_id": "ship_search"
        },
        {
          "label": "Call the Coast Guard and intercept the ship legally",
          "next_id": "ending_coast_guard"
        }
      ]
    },
    "car_chase": {
      "text": "You floor the accelerator, and the chase tears through downtown LA. Rain makes the streets treacherous. You take corners at dangerous speeds, weaving through traffic. Your pursuers are skilled, but you know these streets. You lead them into a narrow alley where their sedan can't follow, then double back and lose them in the maze of Chinatown. You've escaped, but now you know Marco wants you dead. You need to finish this case fast before his next attempt succeeds. Time is running out.",
      "choices": [
        {
          "label": "Go into hiding and plan your next move",
          "next_id": "safe_house"
        },
        {
          "label": "Strike back at Marco immediately",
          "next_id": "marco_offensive"
        }
      ]
    },
    "alley_ambush": {
      "text": "You lead them into a dead-end alley and wait. When the sedan arrives, you open fire, taking out the driver. The passenger returns fire, and bullets ricochet off brick walls. It's a close-quarters gunfight, brutal and quick. You manage to wound the passenger and drag him from the car. He's one of Marco's enforcers. You press your gun to his head and demand answers. 'Where's the Jade Serpent?' He laughs through bloody teeth. 'You're dead, detective. Marco's gonna—' He passes out from blood loss. You've got a wounded man, a shot-up car, and very little time before more of Marco's men arrive.",
      "choices": [
        {
          "label": "Interrogate him when he wakes up",
          "next_id": "enforcer_interrogation"
        },
        {
          "label": "Leave him and disappear before backup arrives",
          "next_id": "quick_escape"
        }
      ]
    },
    "ending_shootout_death": {
      "text": "You draw your gun and try to shoot your way out, but you're surrounded by a dozen armed men. You take down three of them before the bullets find you. You collapse to the warehouse floor, blood pooling around you. Marco stands over you, shaking his head sadly. 'You could have been smart, detective. You could have walked away rich. Instead, you die for nothing.' Your last thought is of the Jade Serpent, glittering in the lamplight, as darkness takes you. Sometimes courage isn't enough. Sometimes the odds are just too bad. The city will forget you in a week.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "marco_negotiation": {
      "text": "You lower your gun and negotiate. Marco appreciates a realist. You make a deal: you walk away from the case, forget everything you've learned, and in exchange, you get to live and keep the money you've made so far. Marco even throws in a bonus—$10,000 to ensure your silence. You take the money and disappear from the case. Your client is furious, but you're alive. You've chosen survival over justice, and while you sleep at night, your dreams are haunted by the compromises you made. You're still a detective, but you've learned where the real lines are drawn in Los Angeles: between the living and the dead.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "price_penthouse": {
      "text": "Solomon Price's penthouse is a fortress. You talk your way past the doorman, claiming to be a rare book dealer with an appointment. The elevator requires a key card, which you don't have. You could try to con your way up, use the service elevator, or find another way in. Price is the kind of man who doesn't see visitors without good reason, and you're running out of time. The Jade Serpent is up there somewhere, you can feel it. You just need to reach it.",
      "choices": [
        {
          "label": "Con your way into the penthouse elevator",
          "next_id": "penthouse_con"
        },
        {
          "label": "Use the service elevator and staff access",
          "next_id": "penthouse_service"
        },
        {
          "label": "Scale the building from outside",
          "next_id": "penthouse_climb"
        }
      ]
    },
    "price_research": {
      "text": "You spend two days researching Solomon Price. He's a billionaire recluse, collector of rare artifacts, and rumored to have connections to organized crime. More interesting: he has a daughter, Elizabeth Price, who runs an art gallery in Santa Monica. She's estranged from her father and might be willing to talk. You also discover Price is hosting a private auction tomorrow night—the perfect opportunity to get inside his penthouse. You could try to get an invitation, approach the daughter, or wait for the auction and infiltrate it.",
      "choices": [
        {
          "label": "Approach Elizabeth Price for information",
          "next_id": "elizabeth_meeting"
        },
        {
          "label": "Infiltrate the private auction",
          "next_id": "auction_infiltration"
        }
      ]
    },
    "ending_clean_case": {
      "text": "You return the Jade Serpent to your client and collect your fee. Case closed. But something bothers you about how easily Morrison found the serpent, how convenient the timing was. You let it go. Sometimes it's better not to know all the answers. Your client is happy, you're paid, and the city moves on. Three months later, you see Morrison's photo in the paper—promoted to captain. You wonder if the smuggling ring paid him off, or if he was always planning to bust them. Either way, you got your ending, even if it wasn't perfectly clean. In Los Angeles, nothing ever is.",
      "is_ending": true,
      "ending_type": "good"
    },
    "morrison_corrupt": {
      "text": "You investigate Morrison and discover he's been on the smuggling syndicate's payroll for years. He tipped them off about raids, buried evidence, and protected their operations. The raid was theater—he arrested the expendable foot soldiers while the real bosses escaped. Confronting him is dangerous; he's a decorated cop with powerful friends. But if you don't, the corruption continues. You gather evidence of his crimes and face a choice: expose him and become a target, or use the information as leverage.",
      "choices": [
        {
          "label": "Expose Morrison to Internal Affairs",
          "next_id": "ending_ia_hero"
        },
        {
          "label": "Blackmail Morrison for information and protection",
          "next_id": "ending_dirty_deal"
        }
      ]
    },
    "docks_escape": {
      "text": "You grab the Jade Serpent and run. Alarms sound, men shout, and bullets chase you through the warehouse. You burst through a window, roll across the dock, and sprint for your car. Behind you, the warehouse erupts in gunfire. You make it to your vehicle and floor it, tires screeching. You've got the serpent, but now you're a target. The smuggling ring will hunt you to get it back. You need to return it to your client fast and get out of this mess. But as you drive through the rain-soaked streets, you realize someone is following you. This isn't over yet.",
      "choices": [
        {
          "label": "Lose the tail and deliver the serpent",
          "next_id": "ending_narrow_escape"
        },
        {
          "label": "Confront your pursuers",
          "next_id": "final_showdown"
        }
      ]
    },
    "ship_boarding": {
      "text": "You follow the man carrying the Jade Serpent onto the cargo ship. The vessel is massive, filled with containers and dark passages. You track him through the ship's corridors to a private cabin where he meets with the captain—a hard-faced woman who examines the serpent carefully. 'Good,' she says. 'This will make our Hong Kong contact very happy.' You could ambush them now, or you could wait and see where they're keeping the serpent. Either way, you're on a ship that's about to leave port, surrounded by criminals. Not your best situation.",
      "choices": [
        {
          "label": "Ambush them and take the serpent",
          "next_id": "ship_ambush"
        },
        {
          "label": "Wait and learn more about the operation",
          "next_id": "ship_infiltration"
        }
      ]
    },
    "fire_fight": {
      "text": "You fight the scarred man with flames at your back. He's skilled with a knife, but you're fighting for your life. The heat is overwhelming, smoke choking your lungs. You manage to disarm him and knock him unconscious, then grab the Jade Serpent and run. The warehouse is collapsing around you. You barely make it out before the roof caves in. You've got the serpent, but you're burned and exhausted. The scarred man's body is consumed by the flames. You've won, but at what cost? Later, you'll learn he was the brother of a major crime boss. You've just started a war.",
      "choices": [
        {
          "label": "Return the serpent and deal with the consequences",
          "next_id": "ending_pyrrhic_victory"
        },
        {
          "label": "Disappear with the serpent to avoid retaliation",
          "next_id": "ending_vanish"
        }
      ]
    },
    "serpent_sacrifice": {
      "text": "You throw the Jade Serpent toward the flames, and the scarred man lunges for it. That's all the distraction you need. You run, leaving the artifact and the burning warehouse behind. You escape with your life but without the serpent. The next day, investigators find the scarred man's body and the melted remains of what might have been jade. The case is closed—artifact destroyed, thief dead. Your client accepts the insurance payout. You collect a reduced fee for your investigation. It's not the ending you wanted, but you're alive and the dangerous artifact is gone. Sometimes losing is winning.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "client_confrontation": {
      "text": "You confront your client at her mansion. She doesn't deny anything. 'Yes, I hired you to create a plausible investigation while I collected insurance money. The serpent was never stolen—I have it hidden.' She opens a safe, revealing the Jade Serpent. 'But things have changed. You're too good at your job, detective. You've learned too much.' Her bodyguards appear, surrounding you. 'I'm giving you a choice: take $50,000 and forget this ever happened, or refuse and never leave this room.' The gun in your jacket suddenly feels very heavy.",
      "choices": [
        {
          "label": "Take the money and walk away",
          "next_id": "ending_bought_silence"
        },
        {
          "label": "Refuse and fight your way out",
          "next_id": "mansion_escape"
        },
        {
          "label": "Pretend to accept, then betray her",
          "next_id": "client_betrayal"
        }
      ]
    },
    "ending_truth_revealed": {
      "text": "You turn all the evidence over to the police. Your client is arrested the next day, her entire operation exposed. The Jade Serpent is recovered and returned to the museum. Multiple arrests are made, including corrupt officials and museum staff. It's the biggest art fraud case in Los Angeles history, and you're at the center of it. The newspapers call you a hero. The mayor commends you. Your client goes to prison for twenty years. You don't get paid—she's broke after legal fees—but you get something better: the satisfaction of knowing you chose truth over profit. That's worth more than any fee.",
      "is_ending": true,
      "ending_type": "good"
    },
    "warehouse_escape": {
      "text": "You work the ropes binding you, using a technique you learned years ago. It takes an hour, but you free yourself. Your client and her men are in another room, arguing about what to do with you. You slip out through a window and disappear into the night. You go straight to the police with everything you know. Your client is arrested, but she makes bail and vanishes before trial. The Jade Serpent disappears with her. You failed to close the case, but you survived. Your reputation takes a hit, and your client's organization puts a price on your head. You leave LA for a while, lying low until things cool down.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_tortured": {
      "text": "You try to reason with your client, appealing to her humanity. She has none. What follows are hours of interrogation and pain as her men try to find out who else you told about your discoveries. You tell them nothing because there's nothing to tell—you worked alone. Eventually, they believe you. Then they kill you anyway. Your body is found three weeks later in the Los Angeles River. The case is filed as a mugging gone wrong. Your client continues her operation. The Jade Serpent changes hands several more times. And Los Angeles forgets you ever existed. Sometimes the detective doesn't win.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_whistleblower": {
      "text": "You go public immediately, releasing everything to the press. The scandal rocks Los Angeles—corrupt officials, smuggling rings, murder cover-ups. You become famous overnight, but fame is dangerous. Two attempts are made on your life in the first month. You go into protective custody, testify at multiple trials, and watch as the entire corrupt system comes crashing down. The Jade Serpent is recovered and returned to China. You're hailed as a hero, but you can never return to your normal life. You enter witness protection with a new identity. You saved the city but lost yourself in the process.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_patient_justice": {
      "text": "You spend six months building an airtight case, gathering evidence, protecting witnesses, documenting everything. It's slow, methodical work, but you're thorough. When you finally present your case to the DA, it's bulletproof. Mass arrests follow. The museum board is replaced, corrupt officials are indicted, and the smuggling syndicate is destroyed. The Jade Serpent is recovered and donated to the Chinese government as a gesture of goodwill. You receive multiple awards and job offers. You decline them all and go back to being a private detective. This is what justice looks like when done right: slow, careful, and complete.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_quick_justice": {
      "text": "You rush Eddie to trial, hoping to convict the syndicate before they can silence him. But you move too fast. Defense attorneys tear apart the rushed case, finding procedural errors and questionable evidence. Eddie's testimony is discredited. Marco and Dr. Wei walk free on technicalities. Eddie enters witness protection, but you know it won't be enough—Marco's reach is long. Three months later, you hear Eddie was found dead in Montana. The case collapses. The bad guys win. You tried to do the right thing, but speed and justice don't always align. Sometimes patience is more important than urgency.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "marco_confrontation_final": {
      "text": "You track Marco to his estate in the Hollywood Hills. It's a fortress, but you've prepared for this. You've spent weeks studying his security, bribing his staff, learning his routines. Tonight, you breach the perimeter and confront him in his study. He's alone, smoking a cigar, almost like he was expecting you. 'Detective,' he says calmly. 'I admire your persistence. So I'll make this simple: I have the Jade Serpent. You want it. Let's negotiate like civilized people.' On his desk, you see the artifact, glowing in the lamplight. This is the endgame.",
      "choices": [
        {
          "label": "Negotiate with Marco",
          "next_id": "marco_deal_final"
        },
        {
          "label": "Take the serpent by force",
          "next_id": "marco_fight"
        }
      ]
    },
    "ending_fbi_case": {
      "text": "You take your evidence to the FBI. They're interested—very interested. Marco's organization has been on their radar for years. You become a confidential informant, wearing a wire, gathering evidence. It takes months, but you build a RICO case that will put Marco away for life. The night of the bust, you're there, watching as federal agents swarm Marco's operations across the city. The Jade Serpent is recovered, Marco is arrested, and the entire syndicate collapses. You're paid a substantial reward by the FBI. More importantly, you've taken down one of LA's most dangerous crime bosses. That's a win.",
      "is_ending": true,
      "ending_type": "good"
    },
    "marco_final_confrontation": {
      "text": "You confront Marco directly at his speakeasy, evidence in hand, ready to bring him down. But Marco just smiles. 'You think you're the first detective to try this?' he asks. Before you can react, the room fills with his men. But you anticipated this—you've called in backup. The FBI crashes through the doors. The speakeasy erupts in chaos—gunfire, agents shouting, criminals running. In the confusion, Marco tries to escape. You chase him through the back alleys of Chinatown. He's fast, but you're determined. You finally corner him on a rooftop. Rain pours down as you face each other, guns drawn.",
      "choices": [
        {
          "label": "Arrest him and turn him over to the FBI",
          "next_id": "ending_marco_arrested"
        },
        {
          "label": "Let him escape—he's not worth dying over",
          "next_id": "ending_marco_escapes"
        }
      ]
    },
    "ending_exile": {
      "text": "You take Marco's exile offer and flee to Mexico. You set up a small detective agency in Tijuana, taking cases from Americans who need work done south of the border. It's not a bad life—the weather's good, the tequila's cheap, and you're alive. But you're also a coward who ran when things got tough. You can never return to the United States. The Jade Serpent case remains unsolved, Marco's empire thrives, and you live in exile. Sometimes you see American newspapers and wonder what kind of detective you might have been if you'd had courage. Then you order another drink and stop wondering.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_last_stand": {
      "text": "You draw your gun and go down fighting. It's suicide, but at least it's on your terms. You take down four of Marco's men before the bullets find you. You die on the docks, blood mixing with rain. But in your final moments, you manage to wound Marco badly enough that he bleeds out before help arrives. You both die that night. The Jade Serpent is recovered by police in the aftermath. Your client gets it back. The case is closed. You're hailed posthumously as a hero who took down a crime boss. Not the ending you wanted, but at least you took the bastard with you.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "li_mei_partnership": {
      "text": "You partner with Li Mei. Together, you're formidable—her intelligence training combined with your street smarts. You track the Jade Serpent to Solomon Price's penthouse. Li Mei has diplomatic credentials that get you access. Inside, you discover Price is planning to sell the serpent to the highest bidder at a private auction. You and Li Mei pose as buyers, infiltrate the auction, and when the serpent is revealed, you make your move. The extraction is clean, professional, perfect. Li Mei returns the serpent to China. You're paid handsomely for your assistance. More importantly, you've made a powerful ally.",
      "is_ending": true,
      "ending_type": "good"
    },
    "solo_investigation": {
      "text": "You refuse Li Mei's partnership and continue alone. Big mistake. Without her resources and intelligence, you're flying blind. You track leads that go nowhere, waste time on false trails. Meanwhile, Li Mei completes her mission independently—she recovers the Jade Serpent and returns it to China. Your client is furious that you failed. Your reputation takes a hit. You don't get paid. Li Mei sends you a postcard from Beijing: 'Could have been easier if you'd accepted help. Better luck next time, detective.' You learned a hard lesson about pride and partnership.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "li_mei_arrested": {
      "text": "You turn Li Mei over to federal authorities for operating as a foreign agent on American soil. She's arrested, and there's a minor diplomatic incident. China protests, America stands firm. Li Mei is eventually deported, but not before she whispers to you: 'You made an enemy today, detective.' Three months later, Chinese intelligence makes your life hell—your cases mysteriously fall apart, witnesses refuse to talk, evidence disappears. You realize you've been blacklisted by one of the world's most powerful intelligence agencies. The Jade Serpent case goes cold. You played by the rules and lost.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "san_francisco_chase": {
      "text": "You drive to San Francisco, following the shipping manifest. The collector is Theodore Marsh, a reclusive billionaire with a private museum. You stake out his mansion and watch as the Jade Serpent is delivered. You could break in and steal it, or you could approach Marsh directly and try to negotiate. Or you could call the police with evidence of receiving stolen property. Each option has risks. Time is running out—Marsh is planning to move the serpent to a vault tomorrow.",
      "choices": [
        {
          "label": "Break into the mansion and steal the serpent",
          "next_id": "mansion_heist"
        },
        {
          "label": "Approach Marsh and negotiate",
          "next_id": "marsh_negotiation"
        },
        {
          "label": "Call the police with evidence",
          "next_id": "ending_police_recovery"
        }
      ]
    },
    "ending_evidence_first": {
      "text": "You use the evidence to bring down Dr. Wei's smuggling ring. Federal raids hit simultaneously across three states. Dozens are arrested, including corrupt officials and museum staff. It's a massive bust. But in the chaos, the Jade Serpent disappears—stolen by someone in the confusion. Your client never gets it back. You've destroyed a criminal organization, which is good, but you failed to recover the artifact. Your client sues you for breach of contract. You lose the case and your savings. You chose justice over your job, and it cost you. But the smuggling ring is gone, and sometimes that has to be enough.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "basement_heist": {
      "text": "You create a distraction by triggering the museum's fire alarm. In the chaos of evacuation, you slip into the basement, grab the Jade Serpent, and escape through the service tunnels. It's a perfect heist. You return the serpent to your client and collect your fee. Case closed. But two weeks later, Dr. Wei is found murdered, execution-style. The smuggling syndicate blamed him for losing the serpent. You got what you wanted, but a man is dead because of your actions. You tell yourself he was a criminal who knew the risks. But late at night, you wonder if there was a better way.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_fbi_raid": {
      "text": "You document everything and call the FBI. They conduct a massive raid on the museum, arresting Dr. Wei and his entire operation. The Jade Serpent is recovered along with hundreds of other stolen artifacts. It's a major bust, and you're credited with breaking the case. Your client gets the serpent back, you collect your fee plus a reward from the FBI, and Dr. Wei goes to prison for forty years. It's a clean ending—nobody died, the bad guys are in jail, and justice was served. Sometimes doing things by the book actually works out. This is one of those times.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_defeated": {
      "text": "You drop the case and try to salvage your career. You spend months rebuilding your reputation, taking small cases, keeping your head down. Eventually, your license is reinstated. But you're a different detective now—cautious, risk-averse, beaten. Dr. Wei continues his smuggling operation. The Jade Serpent disappears into the black market. Your original client never gets it back and blames you. You survive, but you've lost something essential: the fire that made you take difficult cases. You're still a detective, but you're a shadow of who you were. Sometimes survival isn't enough.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "rogue_investigation": {
      "text": "You continue investigating without a license, working in the shadows. It's dangerous and illegal, but you're too stubborn to quit. You track the Jade Serpent through the underworld, following a trail of bribes and threats. Eventually, you find it in a private collection. You steal it back and return it to your client anonymously. You don't collect your fee—you can't, without revealing you continued working illegally. But you solved the case. Your license is never reinstated, and you become an underground detective, operating outside the law. It's a harder life, but in some ways, more honest.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "underground_investigation": {
      "text": "You go underground, assuming a false identity and continuing your investigation from the shadows. It takes weeks, but you eventually track the Jade Serpent to a private collector. You steal it back and arrange for it to be anonymously returned to your client. You can never return to your old life—you're still wanted for questioning—but you solved the case. Years later, living under an assumed name in Seattle, you read that Dr. Wei's smuggling operation was finally busted. You smile, knowing you started that investigation. You may be a fugitive, but you're still a detective at heart.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_fugitive": {
      "text": "You leave Los Angeles and abandon the case. You drift from city to city, taking odd jobs, always looking over your shoulder. The warrant for your questioning eventually expires, but you never return to detective work. The Jade Serpent remains lost. Your client moves on. Dr. Wei continues his operations. You chose survival over everything else, and you survived, but at what cost? You gave up your identity, your career, your purpose. You're alive, but you're not living. Sometimes running away is the worst choice you can make.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "wei_interrogation": {
      "text": "You press Dr. Wei hard, demanding answers. He cracks under pressure, admitting his role in the smuggling operation. But he claims he doesn't have the Jade Serpent—it was stolen from him by one of his associates who went rogue. He gives you a name: Marcus Chen, a mid-level thief who decided to cut out the middleman and sell the serpent himself. Wei provides an address. It could be the truth, or it could be a trap. Either way, it's the only lead you have.",
      "choices": [
        {
          "label": "Follow the lead to Marcus Chen",
          "next_id": "marcus_chen"
        },
        {
          "label": "Don't trust Wei—investigate him further",
          "next_id": "wei_surveillance"
        }
      ]
    },
    "gather_evidence": {
      "text": "You leave the museum and spend the next week gathering evidence against Dr. Wei. You tail him, photograph his meetings, document money transfers. You build a solid case linking him to the smuggling operation. But you still need the Jade Serpent to prove it was stolen. Your investigation leads you to a warehouse where Wei stores artifacts before shipping them overseas. You could raid it yourself or bring in the authorities. The clock is ticking—Wei knows you're onto him and is preparing to move his operation.",
      "choices": [
        {
          "label": "Raid the warehouse yourself",
          "next_id": "solo_warehouse_raid"
        },
        {
          "label": "Bring in federal authorities",
          "next_id": "federal_raid"
        }
      ]
    },
    "lotus_flip": {
      "text": "You approach Lotus Chang at her import business. She's elegant, cautious, and clearly intelligent. You lay out what you know about Wei's operation and offer her immunity if she cooperates. She's silent for a long moment. 'Dr. Wei has powerful friends,' she says finally. 'But he's also careless. He's made enemies.' She agrees to help, providing details about the smuggling routes and, crucially, where the Jade Serpent is currently hidden: a safety deposit box at First National Bank under a false name. She gives you the name and box number. In exchange, you promise to keep her out of it when the arrests come.",
      "choices": [
        {
          "label": "Honor your deal with Lotus",
          "next_id": "ending_honorable_deal"
        },
        {
          "label": "Betray Lotus and use her as a witness",
          "next_id": "lotus_betrayal"
        }
      ]
    },
    "warehouse_raid": {
      "text": "You raid the warehouse with the evidence you have. It's risky going in alone, but you've faced worse odds. Inside, you find crates of stolen artifacts, including the Jade Serpent. But you also find guards—three armed men who weren't expecting anyone. The confrontation is immediate and violent. Gunfire echoes through the warehouse. You manage to take down two guards, but the third gets away and raises the alarm. You grab the Jade Serpent and run, pursued by more of Wei's men. You barely escape with your life and the artifact.",
      "choices": [
        {
          "label": "Return the serpent to your client immediately",
          "next_id": "ending_wounded_success"
        },
        {
          "label": "Go to ground and wait for the heat to die down",
          "next_id": "hiding_out"
        }
      ]
    },
    "ship_search": {
      "text": "You board the cargo ship legally as a safety inspector with forged credentials. It takes hours of searching through containers, but you finally locate the Jade Serpent in a climate-controlled shipping container along with dozens of other artifacts. You could call the Coast Guard now and have them seize the ship, or you could steal the serpent and escape before the ship departs. The crew is starting to get suspicious of your prolonged inspection.",
      "choices": [
        {
          "label": "Call the Coast Guard and seize the ship",
          "next_id": "ending_coast_guard"
        },
        {
          "label": "Steal the serpent and escape",
          "next_id": "ship_theft"
        }
      ]
    },
    "ending_coast_guard": {
      "text": "You call the Coast Guard, and they intercept the ship before it reaches international waters. The entire cargo is seized—hundreds of stolen artifacts worth millions. The Jade Serpent is recovered and returned to your client. Dr. Wei and the ship's crew are arrested. It's a textbook case of doing everything right: you worked within the law, protected evidence, and brought criminals to justice. Your client pays you generously, and you receive commendations from multiple law enforcement agencies. Sometimes the straight path is the best path. You've proven that justice and success can go hand in hand.",
      "is_ending": true,
      "ending_type": "good"
    },
    "safe_house": {
      "text": "You hole up in a safe house in Pasadena, reviewing everything you know. Marco wants you dead, the police might be corrupt, and you're running out of allies. But you've got leads on the Jade Serpent. Your investigation points to it being held by a neutral party—a fence named Solomon Price who's waiting for the heat to die down before selling it. You could approach Price directly, or you could use Marco's interest in killing you as leverage—feed him false information and trap him. It's risky, but risk is part of the job.",
      "choices": [
        {
          "label": "Approach Solomon Price to buy the serpent",
          "next_id": "price_deal"
        },
        {
          "label": "Set a trap for Marco using yourself as bait",
          "next_id": "marco_trap"
        }
      ]
    },
    "marco_offensive": {
      "text": "You decide the best defense is offense. You hit one of Marco's gambling dens, taking his money and humiliating his men. It's a declaration of war. Marco responds by putting a $50,000 bounty on your head. Every two-bit criminal in LA is now hunting you. But you've also gotten his attention—he contacts you directly, offering to meet in neutral territory to 'settle this like professionals.' It could be a trap, or it could be a genuine negotiation. Either way, this conflict is coming to a head.",
      "choices": [
        {
          "label": "Meet Marco on neutral ground",
          "next_id": "marco_meeting"
        },
        {
          "label": "Decline and continue the offensive",
          "next_id": "ending_gang_war"
        }
      ]
    },
    "enforcer_interrogation": {
      "text": "You take the wounded enforcer to an abandoned building and wait for him to regain consciousness. When he does, you interrogate him. Between screams of pain and threats, he reveals that Marco has the Jade Serpent hidden in his private vault at his estate. The vault is impregnable—steel walls, biometric locks, armed guards. Getting in would be impossible. Unless you had inside help. The enforcer, facing life in prison or death from Marco's retaliation, agrees to help you in exchange for protection and money. Can you trust a criminal?",
      "choices": [
        {
          "label": "Accept his help to infiltrate Marco's estate",
          "next_id": "infiltrate_estate"
        },
        {
          "label": "Refuse and find another way",
          "next_id": "alternative_approach"
        }
      ]
    },
    "quick_escape": {
      "text": "You leave the wounded enforcer and disappear before his backup arrives. You've learned that Marco is serious about killing you, which means you need to finish this case fast. You regroup and focus on finding the Jade Serpent through other means. Your investigation leads to financial records showing large payments to a warehouse in Long Beach. That's where Marco is likely storing the serpent before selling it. You stake out the warehouse and confirm your suspicions—the serpent is there. Now you need a plan to get it.",
      "choices": [
        {
          "label": "Break into the warehouse at night",
          "next_id": "warehouse_heist"
        },
        {
          "label": "Wait for them to move it and ambush the transport",
          "next_id": "transport_ambush"
        }
      ]
    },
    "penthouse_con": {
      "text": "You convince the building manager that you're with the fire safety inspection office, conducting a surprise audit. Your forged credentials are good enough to get you to the penthouse level. Inside Solomon Price's lavish apartment, you find a museum's worth of art and artifacts. But before you can locate the Jade Serpent, Price himself appears—an elderly man in a wheelchair, but his eyes are sharp and dangerous. 'You're not a fire inspector,' he says calmly. 'You're the detective asking about the Jade Serpent. I've been expecting someone like you.'",
      "choices": [
        {
          "label": "Be honest and negotiate with Price",
          "next_id": "price_honest_deal"
        },
        {
          "label": "Try to overpower his security and steal the serpent",
          "next_id": "penthouse_fight"
        }
      ]
    },
    "penthouse_service": {
      "text": "You use the service elevator, posing as a maintenance worker. It gets you to the penthouse level, but you're spotted by security almost immediately. You're forced to fight your way through Price's guards—well-trained professionals who clearly aren't minimum-wage rent-a-cops. You manage to reach Price's collection room and find the Jade Serpent displayed prominently. But alarms are blaring, and more guards are coming. You grab the artifact and look for an escape route. The only option is the window—you're forty stories up.",
      "choices": [
        {
          "label": "Fight your way out through the guards",
          "next_id": "penthouse_escape_fight"
        },
        {
          "label": "Use the window cleaning rig to descend",
          "next_id": "window_escape"
        }
      ]
    },
    "penthouse_climb": {
      "text": "You scale the building's exterior—forty stories of slick glass and steel in the rain. It's insane, but you're desperate. You make it to Price's balcony, soaked and exhausted. Inside, you see the old man sitting in his wheelchair, staring directly at you through the glass. He doesn't call security. Instead, he opens the balcony door. 'That's quite an entrance, detective,' he says with grudging respect. 'You've earned a conversation. Come inside.' You enter, dripping water on priceless Persian rugs. Price gestures to the Jade Serpent on a pedestal. 'Ask your questions.'",
      "choices": [
        {
          "label": "Ask him to sell you the serpent",
          "next_id": "price_sale"
        },
        {
          "label": "Tell him the serpent is stolen and must be returned",
          "next_id": "price_moral_appeal"
        }
      ]
    },
    "elizabeth_meeting": {
      "text": "You meet Elizabeth Price at her art gallery. She's elegant, educated, and clearly estranged from her father. 'You want to know about the Jade Serpent?' she asks. 'My father has been obsessed with that artifact for years. It's part of his collection of cursed objects—he believes they give him power. He's a madman, detective, and I cut ties with him five years ago.' She provides you with blueprints of his penthouse and details about his security. 'If you're planning to steal from him, I won't stop you. But be careful. My father may be old, but he's still dangerous.'",
      "choices": [
        {
          "label": "Use her information to plan a heist",
          "next_id": "planned_heist"
        },
        {
          "label": "Ask her to help you negotiate with her father",
          "next_id": "family_mediation"
        }
      ]
    },
    "auction_infiltration": {
      "text": "You infiltrate Solomon Price's private auction using forged credentials as a wealthy Russian collector. The auction is exclusive—only a dozen buyers in a penthouse filled with priceless artifacts. When the Jade Serpent is presented, bidding starts at $500,000. You don't have that kind of money, but you need to prevent its sale. You could cause a disruption, steal it during the chaos, or bid and then refuse to pay. Each option burns bridges, but you're running out of time.",
      "choices": [
        {
          "label": "Cause a disruption and steal the serpent in the chaos",
          "next_id": "auction_chaos"
        },
        {
          "label": "Win the bidding and deal with payment later",
          "next_id": "auction_win"
        }
      ]
    },
    "ending_ia_hero": {
      "text": "You expose Morrison to Internal Affairs with all your evidence. The investigation rocks the LAPD—Morrison is arrested along with a dozen other corrupt officers. The smuggling syndicate loses its police protection and collapses. The Jade Serpent is recovered and returned. You're hailed as a hero who cleaned up a corrupt department, but you've also made enemies within the police force. Some cops view you as a rat. You can't work with the LAPD anymore, but you've proven that even corrupt systems can be challenged. You continue as a private detective, knowing you did the right thing regardless of the cost.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_dirty_deal": {
      "text": "You blackmail Morrison, using evidence of his corruption to force him to help you recover the Jade Serpent and provide protection from the smuggling syndicate. He reluctantly agrees, and you get what you want—the artifact returned, your client satisfied, your fee paid. But you've become part of the corruption you once fought against. Morrison continues his dirty dealings, now with you as a silent partner. You've solved the case, but you've lost your moral authority. You're no longer a crusader for justice—you're just another player in LA's dirty game.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_narrow_escape": {
      "text": "You lose your tail through a series of dangerous turns through downtown LA. You deliver the Jade Serpent to your client at 3 AM, collect your fee, and disappear. The smuggling syndicate puts a contract on your head, but you've dealt with worse. You leave Los Angeles for a few months, lying low in San Francisco. Eventually, the heat dies down. You return to LA and resume your detective work, but you're more careful now. You solved the case and survived, which is more than many can say. Sometimes a narrow escape is victory enough.",
      "is_ending": true,
      "ending_type": "good"
    },
    "final_showdown": {
      "text": "You pull over and confront your pursuers—three armed men in a black sedan. The shootout happens on a deserted industrial street, rain pouring down, muzzle flashes lighting up the night. It's brutal and close-quarters. You take a bullet to the shoulder but manage to take down all three men. You deliver the Jade Serpent to your client while bleeding, collect your fee, and drive yourself to a back-alley doctor. You survive, but you'll carry the scars. The case is closed, but you've made powerful enemies. Still, you're alive and victorious. In your line of work, that's as good as it gets.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ship_ambush": {
      "text": "You burst into the cabin, gun drawn. The captain and her associate reach for their weapons, but you're faster. The fight is brief and violent. You knock out the associate and hold the captain at gunpoint. 'The Jade Serpent,' you demand. She laughs. 'You think you can just walk off this ship with it? We're surrounded by my crew.' She's right—you hear footsteps in the corridor. You grab the serpent and run, fighting your way through the ship. You barely make it to a lifeboat and escape as the cargo ship pulls away. You row to shore, soaked and exhausted, but victorious.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ship_infiltration": {
      "text": "You wait and observe, learning the ship's routine and the location of the Jade Serpent. But the ship departs while you're still aboard—you're now trapped on a vessel headed for Hong Kong with a crew of smugglers. You spend three days hiding in the cargo hold, stealing food, and waiting for the right moment. When the ship docks in Hong Kong, you attempt to escape with the serpent. But Chinese authorities are waiting—someone tipped them off. You're arrested for smuggling and spend six months in a Chinese prison before being deported. You lost the case and your freedom. Some gambles don't pay off.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_pyrrhic_victory": {
      "text": "You return the Jade Serpent to your client and collect your fee. But the crime boss whose brother you killed wants revenge. You spend the next year looking over your shoulder, dodging assassination attempts, losing friends who get caught in the crossfire. You eventually kill the crime boss in self-defense, but by then, you're a different person—harder, colder, more violent. You solved the case, but it cost you your humanity. You still work as a detective, but now you're the kind of person you used to hunt. Victory, but at what cost?",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_vanish": {
      "text": "You take the Jade Serpent and disappear. You fake your death in a car accident, create a new identity, and relocate to Seattle. You sell the serpent through underground channels for $600,000 and start a new life. No one knows you survived. Your client thinks you died in the line of duty. The crime boss thinks you're dead. You've escaped, but you've also abandoned everything—your career, your identity, your city. You're safe and rich, but you're also alone and living a lie. Sometimes the price of survival is too high.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_bought_silence": {
      "text": "You take the $50,000 and walk away. Your client keeps the Jade Serpent hidden, collects her insurance money, and continues her criminal operations. You deposit the blood money in your account and try to forget what you learned. But the guilt eats at you. You've been bought, corrupted, turned into just another cog in the machine. You continue working as a detective, but every case feels hollow now. You sold your integrity for $50,000, and while the money spends, it can't buy back what you lost: your self-respect.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "mansion_escape": {
      "text": "You fight your way out of the mansion, bullets flying, bodyguards falling. It's a miracle you survive. You escape with evidence of your client's crimes and go straight to the police. She's arrested within hours. The Jade Serpent is recovered. But she has powerful lawyers and even more powerful connections. She makes bail and flees the country before trial. You solved the case but let the main perpetrator escape. The district attorney is furious, your reputation suffers, and you're left wondering if you should have handled it differently. Justice delayed is justice denied.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "client_betrayal": {
      "text": "You pretend to accept the money, then immediately go to the police with everything. But your client anticipated this—she has an escape plan. By the time the police raid her mansion, she's gone, fled to a country without extradition. The Jade Serpent disappears with her. You don't get paid, the case remains technically unsolved, and your client is free but in exile. You tried to play both sides and ended up with nothing. The DA commends your integrity but can't help you financially. You're broke, exhausted, and no closer to real justice. Some betrayals backfire.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_marco_arrested": {
      "text": "You arrest Marco and turn him over to the FBI. His entire criminal empire collapses without his leadership. Trials drag on for years, but eventually, he's sentenced to life in prison without parole. The Jade Serpent is recovered and returned. You receive multiple commendations and a substantial reward. Marco vows revenge from prison, but he's powerless now. You've taken down one of Los Angeles's most dangerous crime bosses and lived to tell the tale. It's the kind of victory that makes all the danger and sacrifice worthwhile. You're a hero, and for once, that actually means something.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_marco_escapes": {
      "text": "You lower your gun and let Marco escape. He disappears into the Los Angeles night, and you never see him again. The FBI is furious—you had him and let him go. But you made a judgment call: he wasn't worth dying over. The Jade Serpent is recovered in the raid, your client gets it back, and you collect your fee. Marco rebuilds his empire in another city. You're alive, the case is closed, but you know you let a dangerous criminal escape. Sometimes pragmatism trumps justice. You live with that choice, for better or worse.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "marco_deal_final": {
      "text": "You negotiate with Marco. He's surprisingly reasonable—he doesn't want a war any more than you do. You reach an agreement: you'll return the Jade Serpent to its rightful owner, he'll keep his smuggling profits from the rest of the operation, and you both forget this ever happened. It's a compromise that satisfies no one but avoids bloodshed. You complete the deal, return the serpent to your client, and collect your fee. Marco continues his criminal activities. You've solved your case but enabled a criminal to continue operating. It's not perfect justice, but it's practical justice.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "marco_fight": {
      "text": "You try to take the Jade Serpent by force. Marco is old but dangerous. The fight is savage—you're both skilled, both desperate. His guards burst in midway through, and the study becomes a war zone. You manage to grab the serpent and fight your way out, leaving bodies behind. Marco survives, wounded and furious. You've made an eternal enemy, but you have the artifact. You return it to your client and collect your fee, then disappear for a while. Marco will come for revenge eventually. You'll be ready.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "mansion_heist": {
      "text": "You break into Theodore Marsh's mansion at night. The security is formidable, but you're better. You disable alarms, avoid cameras, and make your way to Marsh's private gallery where the Jade Serpent is displayed. You're reaching for it when lights flood the room. Marsh himself sits in a chair, having waited for you. 'I knew someone would come,' he says. 'The question is: are you a thief or a detective?' He offers you a choice: take the serpent and become a criminal, or negotiate a legal recovery.",
      "choices": [
        {
          "label": "Steal the serpent and escape",
          "next_id": "heist_escape"
        },
        {
          "label": "Negotiate with Marsh",
          "next_id": "marsh_talk"
        }
      ]
    },
    "marsh_negotiation": {
      "text": "You approach Theodore Marsh's mansion openly, requesting a meeting. To your surprise, he agrees. Marsh is a sophisticated collector who appreciates honesty. You explain the situation—the serpent is stolen property. He examines your evidence carefully. 'I paid good money for this piece,' he says, 'but I'm not a criminal. If you can prove it was stolen and arrange fair compensation for my purchase, I'll return it.' You negotiate a deal: your client pays Marsh what he paid for the serpent, everyone avoids legal trouble, and the artifact is returned. It's not glamorous, but it works.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_police_recovery": {
      "text": "You call the San Francisco police with evidence that Marsh received stolen property. They raid his mansion and recover the Jade Serpent along with dozens of other questionable artifacts. Marsh is arrested but quickly released on bail—he claims he bought everything legally. The legal battle drags on for months, but eventually, the Jade Serpent is returned to your client. You collect your fee, though it's reduced due to the delays. Justice was served, but it took the slow path. Sometimes that's how the system works—frustrating, but ultimately fair.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_honorable_deal": {
      "text": "You honor your deal with Lotus Chang. Using her information, you recover the Jade Serpent from the bank and turn the evidence over to federal authorities. Dr. Wei and his associates are arrested, but Lotus is never mentioned. She disappears, presumably to start over somewhere else. You return the serpent to your client and collect your fee. Years later, you receive a thank-you card from Hong Kong with no signature. You kept your word to an informant, which matters more than most people realize. Honor among thieves—and detectives—still means something.",
      "is_ending": true,
      "ending_type": "good"
    },
    "lotus_betrayal": {
      "text": "You betray Lotus, using her as a star witness against Dr. Wei. Her testimony is devastating—it brings down the entire smuggling operation. But Lotus is arrested as an accomplice and sentenced to ten years in prison. She curses your name in court. You recover the Jade Serpent, solve the case, and collect your fee. But you broke your word to someone who trusted you. Lotus's family puts a contract on your head from prison. You spend the rest of your career looking over your shoulder, knowing you traded honor for expedience. Some victories are too costly.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_wounded_success": {
      "text": "You return the Jade Serpent to your client despite your injuries. She's thrilled and pays you generously. You use the money for medical treatment—the gunshot wounds require surgery. You recover physically, though you'll carry scars. The case is closed, Wei's organization is damaged, and you're victorious. But you nearly died doing it. As you convalesce, you wonder if the money was worth the risk. Then you remember why you became a detective: not for wealth, but to see justice done. The scars fade. The satisfaction remains.",
      "is_ending": true,
      "ending_type": "good"
    },
    "hiding_out": {
      "text": "You go to ground in a safe house with the Jade Serpent, waiting for the heat to die down. But Dr. Wei's organization doesn't give up. They track you down after three days. The assault is coordinated and brutal—armed men surround your safe house. You're outgunned and trapped. You fight desperately, but they overwhelm you. You're captured alive, along with the serpent. Wei appears personally. 'You've cost me a lot, detective,' he says coldly. 'Now you're going to disappear, and no one will ever find your body.' The case ends badly.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ship_theft": {
      "text": "You steal the Jade Serpent from the shipping container and make your escape before the ship departs. You slip off the vessel and disappear into the San Francisco docks. You've got the artifact, but the smuggling ring knows you took it. The next few weeks are a dangerous cat-and-mouse game as you evade both criminals and police while arranging transport back to LA. You finally deliver the serpent to your client and collect your fee. It's not clean, it's not pretty, but it's done. You solved the case through cunning and courage. That's enough.",
      "is_ending": true,
      "ending_type": "good"
    },
    "price_deal": {
      "text": "You approach Solomon Price through intermediaries, offering to buy the Jade Serpent. Price is willing to sell—for $200,000. You don't have that kind of money, but your client does. You arrange the deal: your client pays Price, you recover the serpent, everyone walks away happy. It's anticlimactic, almost boring. No gunfights, no chases, just business. You collect your fee and close the case. Sometimes detective work is about negotiation, not violence. You've solved the case the smart way, and you're still alive and uninjured. That's a win in anyone's book.",
      "is_ending": true,
      "ending_type": "good"
    },
    "marco_trap": {
      "text": "You leak false information about your location and set an elaborate trap. When Marco's men arrive to kill you, the FBI is waiting. It's a massive sting operation—Marco's top enforcers are arrested, and under interrogation, they give up evidence on Marco's entire operation. You use the leverage to force Marco to return the Jade Serpent. He complies, knowing he's fighting a losing battle. You've outmaneuvered a crime boss without firing a shot. Intelligence over violence—that's how the best detectives operate. You've proven you're one of them.",
      "is_ending": true,
      "ending_type": "good"
    },
    "marco_meeting": {
      "text": "You meet Marco in a neutral location—a public restaurant where neither of you would risk violence. Over expensive wine, you negotiate like professionals. Marco admits he doesn't actually have the Jade Serpent—it was stolen from him by a third party. He's as eager as you to recover it and save face. You form an unlikely alliance: Marco's resources combined with your investigative skills. Together, you track down the serpent to a private collector. Marco gets his reputation back, you get the artifact. Sometimes enemies become allies when their interests align.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_gang_war": {
      "text": "You continue your offensive against Marco, escalating the conflict into a full-scale gang war. Over the following months, dozens die in the violence. You're relentless, striking at Marco's operations across the city. Eventually, both the FBI and LAPD intervene, arresting both you and Marco for inciting violence. You spend five years in prison. When you're released, LA has moved on, Marco's dead, and you're a relic of a bloody era. You destroyed a crime boss but also destroyed yourself. Some wars have no winners.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "infiltrate_estate": {
      "text": "You use the turncoat enforcer to infiltrate Marco's estate. He gets you past security with his credentials. Inside, you navigate to Marco's vault. The enforcer provides the access codes, and you retrieve the Jade Serpent. But as you're leaving, Marco appears. He knew about the betrayal all along—this was a test for his man, who failed. The enforcer is shot dead. You're trapped. But you still have the serpent and your gun. Marco smiles coldly. 'Let's see if you're as good as they say, detective.' It's time for the final confrontation.",
      "choices": [
        {
          "label": "Face Marco in a gunfight",
          "next_id": "marco_duel"
        },
        {
          "label": "Negotiate for your life",
          "next_id": "marco_final_deal"
        }
      ]
    },
    "alternative_approach": {
      "text": "You refuse the enforcer's help and find another way. Days of surveillance reveal Marco's routine: he visits his mistress every Thursday night, taking only two bodyguards. That's your window. You intercept him on a quiet street, holding him at gunpoint. 'The Jade Serpent,' you demand. Marco laughs. 'You've got guts, detective. More than brains, but guts.' He tells you where the serpent is hidden in exchange for his life. You verify the information and recover the artifact. Marco keeps his word—no retaliation. There's a strange honor among criminals sometimes.",
      "is_ending": true,
      "ending_type": "good"
    },
    "warehouse_heist": {
      "text": "You break into Marco's warehouse at 2 AM. The security is tight, but you're better. You locate the Jade Serpent in a climate-controlled safe. As you're cracking it, alarms sound—you tripped a silent alarm. Guards flood the warehouse. You grab the serpent and run, pursued by gunfire. It's a chaotic escape through the Los Angeles docks, but you make it. You've stolen from a crime boss and lived to tell about it. You return the serpent to your client and collect your fee, then leave town for a month. When you return, Marco sends you a message: he respects your skill but cross him again and you die. Fair enough.",
      "is_ending": true,
      "ending_type": "good"
    },
    "transport_ambush": {
      "text": "You wait for Marco's men to move the Jade Serpent. Three days later, they transport it in an armored truck. You ambush the vehicle on a quiet industrial road, using spike strips and smoke grenades. The truck crashes, and you fight off the guards in a brutal firefight. You take casualties—a bullet grazes your ribs—but you get the serpent. It's a violent, messy resolution, but effective. You deliver the artifact to your client while bleeding, collect your fee, and spend a week recovering. Sometimes detective work is indistinguishable from warfare. You've won this battle.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "price_honest_deal": {
      "text": "You're honest with Solomon Price about why you're here. He appreciates the candor. 'I paid $300,000 for the Jade Serpent,' he says. 'If your client reimburses me and covers my costs, I'll return it. I'm a collector, not a criminal.' You broker the deal. Your client pays Price, you recover the serpent, everyone's satisfied. Price even offers you a job as his security consultant, which you politely decline. It's the most civilized ending to a case you've ever had—no violence, no betrayal, just business. Sometimes the simplest solution is the best one.",
      "is_ending": true,
      "ending_type": "good"
    },
    "penthouse_fight": {
      "text": "You try to overpower Price's security. It's a mistake—these aren't ordinary guards. They're ex-military, highly trained. The fight is brutal. You take down two guards before the others subdue you. Price watches from his wheelchair. 'Foolish,' he says. 'I admire courage, but not stupidity.' He has his men beat you unconscious and dump you in an alley. You wake up twelve hours later, bruised and broken. The case is unsolved, your reputation is damaged, and you've made a powerful enemy. Sometimes brute force isn't the answer.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "penthouse_escape_fight": {
      "text": "You fight your way through Price's guards, the Jade Serpent clutched in one hand, your gun in the other. It's a running battle through the penthouse—bullets, blood, and priceless art destroyed in the crossfire. You make it to the elevator and descend, but the guards are right behind you. In the lobby, you hijack a car and escape into Los Angeles traffic. You've got the serpent, but you're wounded and wanted by both Price and the police. You deliver the artifact to your client and collect your fee, then disappear for six months. When you resurface, the heat has died down. Barely.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "window_escape": {
      "text": "You use the window cleaning rig to descend the building, the Jade Serpent secured in your jacket. It's a terrifying descent—forty stories of swaying cables and wet glass. Security shoots at you from above, bullets sparking off the metal rig. You make it to the ground and run, disappearing into the Los Angeles night. You've escaped with the serpent through sheer audacity and luck. You return it to your client, collect your fee, and spend a week shaking from the adrenaline. It was the most dangerous thing you've ever done, but it worked. Sometimes crazy plans are the only ones that succeed.",
      "is_ending": true,
      "ending_type": "good"
    },
    "price_sale": {
      "text": "You offer to buy the Jade Serpent from Price. He names his price: $400,000. You don't have that kind of money, but you negotiate on behalf of your client. After tense haggling, you reach an agreement at $300,000. Your client wires the money, you recover the serpent, and everyone parts ways professionally. Price even gives you his card—'If you ever need to track down stolen art, detective, I have resources.' You've made a connection with a powerful collector. The case is closed peacefully, profitably, and without violence. That's a rare thing in your line of work.",
      "is_ending": true,
      "ending_type": "good"
    },
    "price_moral_appeal": {
      "text": "You appeal to Price's sense of honor, explaining that the Jade Serpent was stolen and belongs in a museum or with its rightful cultural owners. Price listens carefully. He's a collector, but he's also educated and sophisticated. 'You're right,' he says finally. 'I was duped into buying stolen property. I won't profit from theft.' He returns the serpent without compensation. You're stunned by his integrity. You thank him and return the artifact to your client. Price requests only that you clear his name publicly. You do so, and gain a powerful ally. Morality still exists, even among the wealthy.",
      "is_ending": true,
      "ending_type": "good"
    },
    "planned_heist": {
      "text": "Using Elizabeth's blueprints and information, you plan a perfect heist. You infiltrate Solomon Price's penthouse through a service entrance, disable security systems using her codes, and retrieve the Jade Serpent without confrontation. It's textbook professional theft. You escape cleanly and return the artifact to your client. Elizabeth later contacts you—'Thank you for humiliating my father. He deserved it.' You've made an ally and solved the case without violence. But you're also now known as someone who can plan and execute high-stakes heists. That reputation will follow you, for better or worse.",
      "is_ending": true,
      "ending_type": "good"
    },
    "family_mediation": {
      "text": "Elizabeth agrees to help mediate with her father. The meeting is tense—father and daughter haven't spoken in five years. But Elizabeth's presence changes Price's demeanor. He listens as you explain the situation. Finally, seeing his daughter again softens him. 'For Elizabeth's sake, I'll return the serpent,' he says. 'But only if she agrees to have dinner with me once a month.' Elizabeth agrees. You've not only solved your case but helped reconcile a broken family. Price returns the serpent, you collect your fee, and you witness their first tentative steps toward healing. Sometimes the best endings have nothing to do with the case itself.",
      "is_ending": true,
      "ending_type": "good"
    },
    "auction_chaos": {
      "text": "You cause a disruption at the auction—pulling the fire alarm and creating panic. In the chaos, you grab the Jade Serpent and fight your way out. Security pursues you through the building, but you're faster and more desperate. You escape into San Francisco's streets with the artifact. Price puts a bounty on your head, but you make it back to LA and deliver the serpent to your client. You collect your fee and disappear for a while. You've burned bridges with the entire black market art world, but you closed your case. Sometimes you have to break things to make things right.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "auction_win": {
      "text": "You bid aggressively, winning the Jade Serpent for $800,000—money you don't have. Price is pleased until you reveal you can't pay. 'Then you've purchased nothing,' he says coldly. Security moves to detain you, but you've anticipated this. You pull your gun and take the serpent by force, escaping in the confusion. It's messy and illegal, but effective. You return the artifact to your client and explain the situation. She's furious about your methods but pays you anyway. You've made enemies, violated the law, and barely escaped with your life. But the case is closed. That has to count for something.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "heist_escape": {
      "text": "You grab the Jade Serpent and run. Marsh doesn't pursue—he lets you go, calling out 'You've chosen to be a thief, detective. Live with that choice.' You escape with the artifact but not with your conscience. You return it to your client and collect your fee, but something has changed. You crossed a line tonight from detective to criminal. Marsh doesn't report the theft—he has his own reasons for keeping quiet—but you know what you did. You solved the case, but you compromised yourself in the process. The serpent glitters, but your soul feels tarnished.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "marsh_talk": {
      "text": "You choose to negotiate rather than steal. Marsh appreciates this. 'I respect a man who steps back from the precipice,' he says. You explain the full situation, and he examines your evidence. 'Very well,' he concludes. 'I'll return the serpent for what I paid—$250,000.' You broker the deal with your client, who pays Marsh. The serpent is returned legally. Marsh even offers you wine before you leave. 'You could have been a thief tonight,' he says. 'Instead, you remained a detective. That's worth more than any artifact.' You've solved the case with your integrity intact.",
      "is_ending": true,
      "ending_type": "good"
    },
    "marcus_chen": {
      "text": "You track down Marcus Chen to a flophouse in Chinatown. He's paranoid, desperate, and armed. When you confront him, he pulls a gun. 'Wei sent you to kill me!' he screams. You talk him down, explaining you're just trying to recover the serpent. Slowly, Chen relaxes and tells his story: he stole the serpent from Wei to sell independently, but now everyone's after him—Wei, the police, rival gangs. He's willing to give you the serpent in exchange for protection and safe passage out of the country. It's an expensive proposition, but it might be the only way to close this case.",
      "choices": [
        {
          "label": "Make the deal and help Chen escape",
          "next_id": "ending_chen_deal"
        },
        {
          "label": "Take the serpent and turn Chen over to authorities",
          "next_id": "ending_chen_betrayal"
        }
      ]
    },
    "wei_surveillance": {
      "text": "You don't trust Wei's information about Marcus Chen. Instead, you maintain surveillance on Wei himself. After a week, your patience pays off—Wei meets with a woman at a private estate in Beverly Hills. You recognize her from society pages: Vivian Hartwell, a wealthy philanthropist. Following her, you discover she has the Jade Serpent in her private collection. She didn't steal it—Wei gave it to her as a gift, hiding it in plain sight. Now you need to decide how to recover it from a woman with connections to politicians, judges, and the police commissioner.",
      "choices": [
        {
          "label": "Approach Vivian directly and explain the situation",
          "next_id": "vivian_approach"
        },
        {
          "label": "Steal the serpent from her estate",
          "next_id": "vivian_heist"
        }
      ]
    },
    "solo_warehouse_raid": {
      "text": "You raid Wei's warehouse alone, at night, with nothing but your gun and determination. It's reckless, but you've always worked best alone. Inside, you find not just the Jade Serpent but evidence of Wei's entire smuggling operation—shipping manifests, buyer lists, everything. You photograph it all. But then guards discover you. The firefight is intense—you're outnumbered ten to one. You fight desperately, managing to grab the serpent and escape through a window, wounded but alive. You've got the artifact and the evidence. Now you need to survive long enough to use both.",
      "choices": [
        {
          "label": "Deliver the serpent and expose Wei's operation",
          "next_id": "ending_complete_victory"
        },
        {
          "label": "Focus on surviving and delivering just the serpent",
          "next_id": "ending_survival_first"
        }
      ]
    },
    "federal_raid": {
      "text": "You bring in federal authorities—FBI and ATF—with all your evidence. The raid on Wei's warehouse is massive and coordinated. Dozens are arrested, tons of stolen artifacts are recovered, including the Jade Serpent. Wei himself is captured trying to flee. You've dismantled an international smuggling ring. The FBI pays you a substantial reward on top of your client's fee. You're hailed as a hero, featured in newspapers, even offered a job with the Bureau. You decline—you prefer working independently. But you've proven that one determined detective can make a real difference.",
      "is_ending": true,
      "ending_type": "good"
    },
    "marco_duel": {
      "text": "You face Marco in a classic gunfighter's duel. Both of you draw simultaneously. The shots echo through the estate. You feel a burning pain in your side—he hit you. But your shot was true—Marco falls, mortally wounded. His men rush in, but they find their boss dying and you still standing, gun ready. They back off. Marco uses his last breath to call off his men: 'He won... fair.' You take the Jade Serpent and leave, bleeding but victorious. You barely make it to a hospital. You survive, but you'll carry Marco's bullet for the rest of your life, a reminder of the night you killed a crime boss.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "marco_final_deal": {
      "text": "You negotiate with Marco one last time. He's impressed you made it this far. 'You're either very good or very lucky,' he says. 'Probably both.' You reach an agreement: you take the Jade Serpent, he keeps everything else from his operation, and you both agree to stay out of each other's way permanently. It's a pragmatic peace. You return the serpent to your client, collect your fee, and Marco continues his empire. You've compromised with evil, but you've also survived and completed your job. In Los Angeles, that's sometimes the best you can do.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "ending_chen_deal": {
      "text": "You arrange for Marcus Chen to escape to Mexico in exchange for the Jade Serpent. It costs you money and favors, but you get the artifact. You return it to your client and collect your fee, though it's diminished by your expenses. Chen disappears across the border. Dr. Wei is furious but can't prove anything. You've solved the case through negotiation and compromise rather than violence. Some might call it soft, but you call it smart. Everyone gets what they want, and nobody dies. That's a win in your book.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_chen_betrayal": {
      "text": "You take the Jade Serpent from Marcus Chen and immediately turn him over to the police. He screams about your betrayal as he's arrested. You don't care—he's a thief who stole from thieves. You return the serpent to your client and collect your fee. Chen gets fifteen years in prison. From his cell, he swears revenge, but you're not worried. You've closed the case efficiently and legally. Sometimes betrayal is just good business. You sleep fine at night, though occasionally you wonder if Chen's screams of 'You promised!' might have been legitimate grievances.",
      "is_ending": true,
      "ending_type": "neutral"
    },
    "vivian_approach": {
      "text": "You approach Vivian Hartwell at a charity gala, explaining that the Jade Serpent in her collection is stolen property. She's shocked and horrified. 'Dr. Wei assured me it was acquired legally!' she exclaims. Once you show her the evidence, she immediately agrees to return it. 'I won't be party to theft,' she declares. She even helps you expose Dr. Wei, using her connections to ensure he's prosecuted. The serpent is returned, Wei goes to prison, and Vivian becomes an advocate for repatriating stolen cultural artifacts. You've not only solved your case but created positive change.",
      "is_ending": true,
      "ending_type": "good"
    },
    "vivian_heist": {
      "text": "You break into Vivian Hartwell's estate and steal the Jade Serpent. It's a clean job—no violence, no witnesses. But Vivian is connected, and she's furious. She uses her influence to have you investigated. The police harass you for months, though they can't prove anything. You return the serpent to your client and collect your fee, but your reputation suffers. Vivian makes sure everyone in high society knows you're a thief. Future cases dry up as wealthy clients refuse to hire you. You solved one case but damaged your entire career.",
      "is_ending": true,
      "ending_type": "bad"
    },
    "ending_complete_victory": {
      "text": "Despite your injuries, you deliver the Jade Serpent to your client and turn over all evidence of Wei's smuggling operation to federal authorities. The FBI raids multiple locations simultaneously. Wei's entire network collapses. You're hospitalized for your wounds but hailed as a hero. Your client pays you double your fee out of gratitude. The FBI gives you a substantial reward. Newspapers call you the detective who single-handedly brought down an international smuggling ring. It's the perfect ending—justice served, criminals punished, artifact recovered, and you're rich and famous. This is what you became a detective for.",
      "is_ending": true,
      "ending_type": "good"
    },
    "ending_survival_first": {
      "text": "You focus on surviving, delivering only the Jade Serpent to your client. You're too injured to deal with Wei's operation. You collect your fee and recover in a hospital. Wei's smuggling ring continues operating, though weakened by your raid. You've solved your specific case but let larger crimes continue. Your client is satisfied, you're alive, but you know you could have done more. Sometimes survival has to be enough. You'll live to fight another day, though you'll always wonder what would have happened if you'd been braver.",
      "is_ending": true,
      "ending_type": "neutral"
    }
  }
};

module.exports = jadeserpentCase;
