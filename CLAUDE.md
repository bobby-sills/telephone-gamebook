# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a telephone-based interactive gamebook powered by Twilio. Users call a phone number and navigate through branching story narratives using their phone's keypad.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express 5.x
- **Telephony**: Twilio (TwiML for voice responses)
- **Dependencies**: dotenv for environment variables

## Running the Application

```bash
# Install dependencies
npm install

# Start the server (listens on port 3000)
node app.js
```

The server expects Twilio webhook requests and must be accessible via a public URL (use ngrok or similar for local development).

## Architecture

### Request Flow

1. **Initial call** → `/voice` (POST) - Presents story selection menu
2. **Story selection** → `/storyselect` (POST) - Processes user's story choice
3. **Story navigation** → `/stories/:storyID/:sectionID` (POST) - Displays current section and choices
4. **Choice handling** → `/stories/:storyID/:sectionID/choice` (POST) - Processes user's section choice and routes to next section

### Story Structure

Stories are modular objects defined in the `stories/` directory with the following schema:

```javascript
{
  id: "unique_identifier",
  title: "Display Title",
  start_section: "section_key",
  sections: {
    section_key: {
      text: "Narrative text (read via TwiML)",
      choices: [
        { label: "choice description", next_id: "target_section" }
      ],
      is_ending: true/false  // If true, redirects to main menu
    }
  }
}
```

### Adding New Stories

1. Create a new file in `stories/` directory (e.g., `stories/mystery_manor.js`)
2. Export a story object following the schema above
3. Import and add to the `stories` array in `stories.js`

The main menu automatically adapts to support up to 9 stories (numbered 1-9 on the phone keypad).

## Key Implementation Details

- **TwiML Responses**: All routes return `text/xml` with Twilio Voice Response markup
- **User Input**: `<Gather>` elements collect single-digit DTMF tones from phone keypad
- **Looping**: If users don't make a choice, calls redirect to repeat the current section
- **Endings**: Sections marked `is_ending: true` redirect users back to the story selection menu
- **Zero-indexing**: User input (1-9) is converted to 0-based array indices in code

## Twilio Configuration

Configure your Twilio phone number's voice webhook to point to `https://your-domain/voice` (POST method).

## Environment Variables

Ensure `.env` file exists for any environment-specific configuration (not currently used but dotenv is loaded).
