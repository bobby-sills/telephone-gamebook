# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a telephone-based interactive gamebook powered by Twilio. Users call a phone number and navigate through branching story narratives using their phone's keypad.

## Project Structure

```
telephone-gamebook/
├── index.html          # GitHub Pages website (root)
├── css/                # Website styles
├── assets/             # Website assets
└── vercel/             # Twilio backend (deployed to Vercel)
    ├── app.js          # Express application
    ├── stories.js      # Story imports
    ├── stories/        # Story content files
    ├── package.json    # Node dependencies
    ├── vercel.json     # Vercel configuration
    └── .vercelignore   # Vercel deployment exclusions
```

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express 5.x
- **Telephony**: Twilio (TwiML for voice responses)
- **Dependencies**: dotenv for environment variables
- **Hosting**: Vercel (backend), GitHub Pages (website)

## Running the Application

### Local Development

```bash
# Navigate to the vercel directory
cd vercel

# Install dependencies
npm install

# Start the server (listens on port 3000)
node app.js
```

The server expects Twilio webhook requests and must be accessible via a public URL (use ngrok or similar for local development).

### Deployment to Vercel

This project is configured for deployment on Vercel's free tier, which provides near-instant cold starts ideal for Twilio webhooks:

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Navigate to the vercel directory
cd vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

**Configuration files (in `/vercel` directory):**
- `vercel.json` - Routes all requests to the Express app as a serverless function
- `.vercelignore` - Excludes unnecessary files from deployment

**After deployment:**
1. Copy your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
2. Configure your Twilio phone number's voice webhook to `https://your-project.vercel.app/voice` (POST method)

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

1. Create a new file in `vercel/stories/` directory (e.g., `vercel/stories/mystery_manor.js`)
2. Export a story object following the schema above
3. Import and add to the `stories` array in `vercel/stories.js`

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
