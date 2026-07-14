# Veriff Sandbox

A self-serve sandbox for exploring Veriff products. Pick a product, configure it, see what comes back.

Built for the Veriff Hackathon by a team of SEs and AEs. We get asked "do you have a sandbox?" constantly. Until now, the answer was no.

## Why we built this

Deals take too long. A lot of that is because engineering doesn't get involved until late in the process.

- Legal has to review things on both sides before anyone has really looked at the product
- Replacing an existing vendor is a big lift — customers need proof before they'll commit resources to evaluate
- Running a proper POC is expensive and slow
- Customers don't want to sit through sales calls just to see what an API response looks like
- Evaluating multiple products (IDV, PoA, AML, biometrics) means even more cycles

People drop off during testing. We see it in the numbers: **204 opportunities in Try/Test, 30 in Decide.** Most of the loss happens between those two stages.

We think a big part of that is engineering not having enough to work with early on. Developers want to see JSON, configure a flow, and hand something concrete to their team — without waiting on legal or a full POC.

This sandbox is our answer to that.

## What it does

One place to try every Veriff product. Each product page has three panels:

1. **Configure** — countries, document types, extraction fields, screening lists, auth methods, etc.
2. **Preview** — sample documents, match results, screening outcomes
3. **JSON output** — updates live as you change settings. Copy it, share it with your team, use it as a fixture while you're planning integration.

The JSON panel is the main thing. It shows engineers what Veriff actually returns before they've signed anything or spun up a real environment. That's the part that helps create internal advocates and gets implementation conversations started earlier.

No legal required to poke around. No sales call required to see an API response.

## How it works

Every product page follows the same layout: configure on the left, preview in the center, JSON on the right.

```
┌─────────────────────────────────────────────────────────────┐
│                      Veriff Sandbox                         │
│                                                             │
│   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   │
│   │  Configure   │   │   Preview    │   │  JSON Output │   │
│   │              │   │              │   │              │   │
│   │ • Country    │   │ • Document   │   │ • Live       │   │
│   │ • Fields     │   │   images     │   │   response   │   │
│   │ • Doc types  │   │ • Match      │   │ • Copy to    │   │
│   │ • Modes      │   │   results    │   │   clipboard  │   │
│   │ • Options    │   │ • Status     │   │ • Share with │   │
│   │              │   │              │   │   engineering│   │
│   └──────────────┘   └──────────────┘   └──────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

1. Pick a product from the hub
2. Change settings — toggles, dropdowns, and checkboxes update the scenario
3. Check the preview — documents, match results, screening status
4. Copy the JSON and hand it to your engineering team

## Products

- **Identity Verification** — pick a country, toggle extraction fields, preview the ID, get the verification JSON
- **Unstructured Docs** — bank statements, birth certificates, vehicle records, etc. Toggle tampering detection and address validation.
- **Proof of Address** — utility bills, bank statements, tax documents. Standard, Lite, or Capture mode.
- **Biometric Authentication** — regular biometric auth vs. selfie-to-selfie, with match result JSON
- **AML (Ongoing)** — screening list coverage and sample match responses
- **Age Estimation** — age/gender estimation from a selfie, no ID required

## Run it locally

Requires Node 18+.

```bash
git clone https://github.com/YOUR_ORG/veriff-sandbox.git
cd veriff-sandbox
npm install
npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173).

```bash
npm run build   # production build
npm run preview # preview the build
```

## Stack

React 19, Vite 8, React Router 7, Tailwind CSS 4, Lucide icons.

Key files:

```
src/pages/products/     # one page per product
src/components/JsonPanel.jsx   # the JSON output panel
src/data/               # response builders (idvResponses, poaResponses, udocsResponses)
```

## About the team

We started as a team of one, about a quarter of the way through the hackathon. A fourth person joined late.

We're all SEs and AEs. We hear about the sandbox gap on calls regularly, and we watch deals stall between evaluation and decision. This is the tool we wished we could send people to instead of scheduling another demo.

Built for the Veriff Hackathon — internal use. Contact the Veriff team for access or deployment.
