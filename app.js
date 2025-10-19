const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const urlencoded = require('body-parser').urlencoded;
const { stories } = require('./stories.js');

const app = express();

// Parse incoming POST params with Express middleware
app.use(urlencoded({ extended: false }));

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post('/voice', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();

  const gather = twiml.gather({
    numDigits: 1,
    action: '/storyselect',
  });
  optionText = [];
  for (let i = 0; i < stories.length && i < 9; i++) {
    optionText.push(`Press ${i + 1} to begin the story titled ${stories[i].title}. `);
  }
  gather.say({ rate: 'slow' }, `Welcome to the telephone game book. ${optionText.join('')}`);

  twiml.redirect('/voice');
  response.type('text/xml');
  response.send(twiml.toString());
});

app.post('/storyselect', (request, response) => {
  const twiml = new VoiceResponse();

  const selectedStory = stories[request.body.Digits - 1];

  twiml.redirect(`/stories/${selectedStory.id}/${selectedStory.start_section}`);
  response.type('text/xml');
  response.send(twiml.toString());
});

// Display a story section
app.post('/stories/:storyID/:sectionID', (request, response) => {
  const twiml = new VoiceResponse();
  const { storyID, sectionID } = request.params;

  // Find the story and section
  const story = stories.find(s => s.id === storyID);
  const section = story.sections[sectionID];

  // Say the section text
  twiml.say({ rate: 'slow' }, section.text);
  twiml.pause({ length: 1 });

  // Check if this is an ending
  if (section.is_ending) {
    // No choices - redirect back to main menu
    twiml.pause({ length: 3 });
    twiml.hangup();
  } else {
    // Create gather for user choices
    const gather = twiml.gather({
      numDigits: 1,
      action: `/stories/${storyID}/${sectionID}/choice`
    });

    // Present each choice
    for (let i = 0; i < section.choices.length; i++) {
      gather.say({ rate: 'slow' }, `Press ${i + 1} to ${section.choices[i].label}.`);
      gather.pause({ length: 1 });
    }

    // If user doesn't press anything, repeat this section
    twiml.redirect(`/stories/${storyID}/${sectionID}`);
  }

  response.type('text/xml');
  response.send(twiml.toString());
});

// Handle user's choice and route to next section
app.post('/stories/:storyID/:sectionID/choice', (request, response) => {
  const twiml = new VoiceResponse();
  const { storyID, sectionID } = request.params;
  const digit = parseInt(request.body.Digits) - 1;  // Convert to 0-based index

  // Find the story and section
  const story = stories.find(s => s.id === storyID);
  const section = story.sections[sectionID];

  // Get the next section ID based on user's choice
  const nextSectionId = section.choices[digit].next_id;

  // Redirect to the next section
  twiml.redirect(`/stories/${storyID}/${nextSectionId}`);

  response.type('text/xml');
  response.send(twiml.toString());
});

const PORT = process.env.PORT || 3000;
console.log(`Twilio Client app HTTP server running on port ${PORT}`);
app.listen(PORT);
