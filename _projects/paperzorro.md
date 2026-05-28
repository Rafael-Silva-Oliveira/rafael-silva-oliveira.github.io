---
layout: page
title: PaperZorro
description: An AI-powered literature scout for Zotero. Build precise boolean searches across PubMed, arXiv and bioRxiv/medRxiv, let a language model filter the noise, and import only the papers that matter — straight into your library.
img: assets/img/paperzorro/banner.png
importance: 1
category: fun
github: https://github.com/Rafael-Silva-Oliveira/paperzorro
slug: paperzorro
---

## What problem am I addressing?

Keeping up with the literature is a grind. New papers land on **PubMed**, **arXiv** and **bioRxiv/medRxiv** every single day, and the usual routine — running the same searches over and over, skimming dozens of abstracts, and manually adding the few relevant ones to **Zotero** — eats time you'd rather spend actually reading. Worse, it's easy to miss things: a search you forgot to re-run, a preprint that slipped through.

**PaperZorro** is built to take that grind off your plate. It's an AI-powered literature scout that lives inside Zotero. You compose a precise boolean query, pick your sources, and a language model triages every candidate paper against your search intent — labelling each one **YES** or **NO** with a short reason. You review the verdicts, check the papers you want, and import them as proper Zotero items in one click. Save the query as a schedule and PaperZorro keeps scouting on its own, so newly published relevant work shows up in your library without you lifting a finger.

By default the AI filtering runs **locally via [Ollama](https://ollama.com/)** — no API keys, no paper data leaving your machine. Cloud providers (OpenAI, Anthropic/Claude, Gemini) are available in Beta if you prefer.

---

## How it works

PaperZorro adds a panel to Zotero with four tabs — **Settings**, **Search**, **Results** and **Schedule** — that walk you through the full scouting workflow:

| Step | What happens |
|------|-------------|
| **Settings** | Pick an LLM provider/model and tune the relevance filter prompt to your lab's criteria |
| **Search** | Build a nested `AND` / `OR` / `NOT` query, choose sources, and let the AI triage results |
| **Results** | Browse YES/NO verdicts, read abstracts, and import checked papers into a collection |
| **Schedule** | Save a query to run daily or weekly so discovery happens automatically |

---

## Settings — choose your AI provider

Pick an LLM provider and model, and tune the relevance filter prompt to match exactly what you care about. By default PaperZorro talks to a local Ollama instance — keeping AI filtering local means no API keys and no paper data ever leaves your machine.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paperzorro/01-settings.png" class="img-fluid rounded z-depth-1" alt="PaperZorro settings showing LLM provider and relevance filter prompt" caption="Choose your LLM provider and tune the filter prompt" %}
    </div>
</div>

---

## Search — build your query

Use the **Builder** to assemble nested `AND` / `OR` / `NOT` groups with a point-and-click interface, or switch to **Raw** for a hand-written query string when you need full control. Queries are automatically translated to each source's dialect. Choose a source (**PubMed**, **arXiv** or **bioRxiv/medRxiv**), set a date range and result cap, and watch the live progress bar as PaperZorro fetches and AI-filters each paper.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paperzorro/02-search-builder.png" class="img-fluid rounded z-depth-1" alt="PaperZorro visual query builder with nested AND/OR/NOT groups" caption="Visual query builder" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paperzorro/03-search-filtering.png" class="img-fluid rounded z-depth-1" alt="Generated query, source options, and AI filtering in progress" caption="Source options and AI filtering in progress" %}
    </div>
</div>

---

## Results — review and import

Browse the AI verdicts. Each paper is tagged **YES** or **NO** with a justification, and you can expand the abstract to read more. Pick a target collection (any collection or sub-collection in your library), check the papers you want, and click **Import Checked to Zotero** — they become proper Zotero items with full metadata.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paperzorro/04-results-collection.png" class="img-fluid rounded z-depth-1" alt="PaperZorro results showing target collection and AI-tagged papers" caption="Target collection and AI-tagged papers" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paperzorro/05-results-detail.png" class="img-fluid rounded z-depth-1" alt="Expanded abstract with AI relevance reasoning" caption="Expanded abstract with AI reasoning" %}
    </div>
</div>

---

## Schedule — automate discovery

Save a query as a recurring schedule. Give it a name, set the source, interval (e.g. weekly on Monday at 08:00) and a max-paper cap. PaperZorro then runs the search on schedule so newly published relevant work shows up in your library without you lifting a finger.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paperzorro/06-schedule.png" class="img-fluid rounded z-depth-1" alt="PaperZorro schedule tab showing recurring automated searches" caption="Recurring automated searches" %}
    </div>
</div>

---

## Key Features

- **Visual query builder** — Compose nested `AND` / `OR` / `NOT` groups point-and-click, or drop into Raw mode for full control
- **Multi-source search** — PubMed, arXiv and bioRxiv/medRxiv, with per-source syntax translation
- **AI relevance filtering** — Each candidate paper is judged YES/NO against your search intent with a short reason
- **Local-first** — Runs against Ollama on your own machine by default — no API keys, no data leaving your computer
- **Cloud providers (Beta)** — Optional OpenAI, Anthropic/Claude, Google Gemini, and any OpenAI-compatible endpoint
- **Custom filter prompt** — Tune the relevance instructions to your lab's exact criteria
- **One-click import** — Approved papers become proper Zotero items with full metadata in the collection of your choice
- **Scheduled searches** — Save a query to run daily or weekly so your library stays current automatically

## Requirements

- Zotero 7.0 or later
- (Optional) [Ollama](https://ollama.com/) for local AI filtering — cloud providers can be used instead
