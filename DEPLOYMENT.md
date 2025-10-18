# Deployment Guide - Render

This guide walks you through deploying your telephone gamebook to Render.com (100% free tier available).

## Prerequisites

- A GitHub account
- A Render account (sign up at https://render.com)
- A Twilio account with a phone number

## Step 1: Push Your Code to GitHub

1. Commit all your changes:
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

## Step 2: Deploy to Render

1. Go to https://render.com and sign in
2. Click **"New +"** → **"Web Service"**
3. Click **"Connect account"** to authorize Render to access your GitHub
4. Find and select your `telephone-gamebook` repository
5. Configure your service:
   - **Name**: `telephone-gamebook` (or whatever you prefer)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Select **"Free"**
6. Click **"Create Web Service"**

Render will now build and deploy your app (this takes 2-3 minutes).

## Step 3: Get Your Render URL

1. Once deployed, you'll see your service dashboard
2. At the top, you'll see your URL (e.g., `https://telephone-gamebook.onrender.com`)
3. Copy this URL

## Step 4: Configure Twilio Webhook

1. Log in to your Twilio Console (https://console.twilio.com)
2. Go to **Phone Numbers** → **Manage** → **Active Numbers**
3. Click on your phone number
4. Scroll to **"Voice & Fax"** section
5. Under **"A CALL COMES IN"**:
   - Set the first dropdown to **"Webhook"**
   - Set the URL to: `https://your-app.onrender.com/voice`
   - Set the HTTP method to **"POST"**
6. Click **"Save"**

## Step 5: Test Your Application

Call your Twilio phone number. You should hear:
- "Welcome to the telephone game book..."
- Story selection options

## Monitoring and Logs

### View Logs
1. In Render, go to your service dashboard
2. Click on the **"Logs"** tab to see real-time logs
3. Logs show all console output and errors

### Check Status
- Render dashboard shows if your app is running
- Look for "Live" status indicator
- If it says "Build failed" or "Deploy failed", check logs for errors

## Environment Variables (Optional)

If you need to add environment variables:

1. In Render, go to your service dashboard
2. Click on **"Environment"** in the left sidebar
3. Add any needed variables (currently your app doesn't require any, but this is where you'd add them)

## Updating Your Application

Render automatically redeploys when you push to your main branch:

```bash
# Make your changes
git add .
git commit -m "Update story content"
git push origin main
```

Render will detect the push and redeploy automatically (takes 2-3 minutes).

## Costs

- **Free Tier**: 100% free forever
  - 750 hours/month of runtime (plenty for one app)
  - Spins down after 15 minutes of inactivity
  - Takes ~30 seconds to spin back up on first call
- **Paid Plan**: $7/month for always-on instances (no spin-down)

**Important**: On the free tier, the first call after inactivity may take 30-60 seconds to connect while the server spins up. Subsequent calls will be instant.

## Troubleshooting

### App not responding
- Check Render logs for errors
- Ensure the deployment shows "Live" status
- Verify your Twilio webhook URL is correct

### First call times out or fails
- This is normal on free tier - the app spins down after 15 minutes of inactivity
- Try calling again after 30-60 seconds
- The server needs time to spin back up
- Consider upgrading to paid tier ($7/month) if you need instant responses

### Port errors
Render automatically sets the `PORT` environment variable. The app is already configured to use `process.env.PORT || 3000`.

### Stories not loading
- Ensure all story files in `stories/` are committed to git
- Check Render logs for module loading errors

### Build failures
- Check logs during the build phase
- Ensure `package.json` has all required dependencies
- Verify Node.js version compatibility
