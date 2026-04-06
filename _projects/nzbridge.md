---
layout: page
title: NZBridge
description: A browser extension and Zotero plugin for bidirectional sync between Zotero and Google NotebookLM. Push your research library into NotebookLM for AI-powered analysis, then pull generated notes back into Zotero.
img: assets/img/nzbridge/social-preview.png
importance: 1
category: work
github: https://github.com/Rafael-Silva-Oliveira/NZBridge
slug: nzbridge
---

## What problem am I addressing?

For a long time I relied on **Citavi 6** as my reference manager. It worked fine on its own, but being a closed-source tool it made it really hard to connect with the rest of my research workflow, things like Notion for project management or NotebookLM for AI-powered reading. There was no easy way to get my references in and out of Citavi without jumping through hoops, and building any kind of integration on top of it was basically off the table.

So I made the switch to **Zotero**. Open-source, extensible, and with a plugin ecosystem that actually lets you build on top of it. Once I had my library in Zotero, the workflow I wanted became clear: send my references from Zotero into NotebookLM, have a conversation with my papers using NotebookLM's AI, and then pull the generated notes back into Zotero so everything lives in one place.

That's exactly what **NZBridge** does. It's a browser extension paired with a Zotero plugin that handles this full round-trip. And because the notes end up back in Zotero, tools like [Notero](https://github.com/dvanoni/notero) can pick them up and sync them straight to Notion, meaning my NotebookLM summaries and insights flow all the way into my project management setup without any manual copy-pasting.

---

## How it works

NZBridge has two pieces: a **Zotero plugin** that spins up a local HTTP server to expose your library, and a **Chrome/Edge browser extension** that talks to that server and orchestrates everything inside NotebookLM.

It supports two directions:
- **Forward sync** (Zotero &rarr; NotebookLM): push PDFs and URLs from a Zotero collection into a NotebookLM notebook
- **Backward sync** (NotebookLM &rarr; Zotero): pull AI-generated notes back into your Zotero library with proper tagging and parent items

---

## Demo

{% include video.liquid path="https://www.youtube.com/embed/RCJhwf-Kwto" class="img-fluid rounded z-depth-1" width="100%" height="400px" %}

---

## Forward Sync (Zotero &rarr; NotebookLM)

Pick a Zotero collection, hit sync, and NZBridge takes care of the rest. It uploads PDFs via drag-and-drop, adds URLs for items that don't have local files, handles batch processing, catches duplicates, and even names the notebook after your collection.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nzbridge/01-forward-sync-ready.png" class="img-fluid rounded z-depth-1" alt="NZBridge extension showing a selected Zotero collection ready to sync" caption="Collection selected, ready to sync" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nzbridge/03-forward-sync-progress.png" class="img-fluid rounded z-depth-1" alt="Forward sync in progress with loading indicator" caption="Sync in progress" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nzbridge/02-forward-sync-done.png" class="img-fluid rounded z-depth-1" alt="Forward sync complete showing 3 items synced" caption="Sync complete" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nzbridge/04-notebooklm-sources.png" class="img-fluid rounded z-depth-1" alt="NotebookLM showing uploaded sources from Zotero" caption="Sources show up in NotebookLM" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nzbridge/05-notebooklm-chat.png" class="img-fluid rounded z-depth-1" alt="NotebookLM chat interface with uploaded research sources" caption="Chat with your research sources" %}
    </div>
</div>

---

## Backward Sync (NotebookLM &rarr; Zotero)

Once you're done chatting with your papers in NotebookLM, switch to the "To Zotero" tab and pull the generated notes back. NZBridge grabs the full note content with rich formatting, creates parent items in Zotero, and tags everything (e.g., `n2z`, `NotebookLM`) so you can easily find what came from where.

From there, if you're using [Notero](https://github.com/dvanoni/notero), those notes automatically flow into your Notion workspace too.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nzbridge/06-backward-sync-notes.png" class="img-fluid rounded z-depth-1" alt="NZBridge To Zotero tab showing found notes ready for import" caption="Found notes in the 'To Zotero' tab" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nzbridge/07-zotero-library.png" class="img-fluid rounded z-depth-1" alt="Zotero library showing imported document from NotebookLM" caption="Imported item in Zotero" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nzbridge/08-zotero-note-detail.png" class="img-fluid rounded z-depth-1" alt="Full note content imported into Zotero with rich formatting" caption="Full note content in Zotero" %}
    </div>
</div>

---

## Key Features

- **PDF upload** via drag-and-drop and **URL source integration** for items without local files
- **Batch processing** for multiple URLs with duplicate detection per collection-notebook pair
- **Automatic notebook naming** based on Zotero collection names
- **Warning system** for collections exceeding NotebookLM's 50-source limit
- **Automated note extraction** from NotebookLM's Studio panel with full rich-text capture
- **Smart parent item creation** compatible with Notion sync tools like Notero
- **Custom tagging** and update capability to prevent duplicate note creation
- **Collection-notebook mapping management** with sync state reset

## Requirements

- Zotero 7.0 or later
- Chrome or Microsoft Edge (v116+)
- Active Google account with NotebookLM access
