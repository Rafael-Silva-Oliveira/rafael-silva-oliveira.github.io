---
layout: page
title: Numify
description: A Zotero plugin that automatically adds hierarchical numeric prefixes to your collection names. Create, rename, delete, or reorder collections — the numbering stays in sync.
img: assets/img/numify/promo.png
importance: 2
category: work
github: https://github.com/Rafael-Silva-Oliveira/numify
slug: numify
---

## What problem am I addressing?

If you use **Zotero** to manage a growing research library, you've probably noticed that collections don't have any built-in way to enforce a consistent ordering. You can nest them, but there's no numbering, no drag-and-drop reordering, and no visual hierarchy beyond indentation. Once you have dozens of collections and sub-collections, it becomes hard to keep things organized at a glance.

**Numify** solves this by automatically assigning hierarchical numeric prefixes to every collection in your library. When you create, rename, delete, or move a collection, the numbering updates itself — no manual renumbering needed. Since the prefixes are stored in the collection name itself, they sync natively across all your devices via Zotero Sync.

Another name for this plugin could have been **Numero** (Number + Zotero), but decided to go with **Numify** instead!

- **1 Physics**
  - 1.1 Quantum Mechanics
    - 1.1.1 Entanglement
    - 1.1.2 Superposition
  - 1.2 Classical Mechanics
- **2 Mathematics**
  - 2.1 Algebra
  - 2.2 Calculus
- **3 Chemistry**

---

## How it works

Numify hooks into Zotero's [Notifier API](https://www.zotero.org/support/dev/client_coding/javascript_api) to listen for collection events in real time:

| Event | What happens |
|-------|-------------|
| **Create** | New collection is assigned the next prefix; all siblings are renumbered |
| **Rename** | Base name change &rarr; prefix is reapplied. Prefix change &rarr; siblings are reordered |
| **Delete / Trash** | Remaining siblings are renumbered to close gaps |
| **Move** | Both old and new parent's children are renumbered |

---

## Creating collections

When you create a new collection, Numify automatically assigns the next available prefix.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/numify/01-create-collection.png" class="img-fluid rounded z-depth-1" alt="Creating a new collection named 'My Collection'" caption="Create a new collection" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/numify/02-collection-created.png" class="img-fluid rounded z-depth-1" alt="Collection appears as '2 My Collection'" caption="Prefix added automatically" %}
    </div>
</div>

---

## Creating sub-collections

Sub-collections receive prefixes relative to their parent, supporting unlimited nesting depth (`1.2.3.4.5...`).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/numify/03-create-subcollection.png" class="img-fluid rounded z-depth-1" alt="Creating a sub-collection under '2 My Collection'" caption="Create a sub-collection" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/numify/04-hierarchy-numbered.png" class="img-fluid rounded z-depth-1" alt="Full hierarchy: 2.1, 2.1.1, 2.1.1.1, 2.1.2, 2.2" caption="Full hierarchy numbered automatically" %}
    </div>
</div>

---

## Reordering collections

Since Zotero doesn't support drag-and-drop reordering, Numify lets you **reorder by editing the prefix**. Change a collection's prefix to the desired position, collapse and re-expand the parent, and Numify shifts everything accordingly.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/numify/04b-hierarchy-before-reorder.png" class="img-fluid rounded z-depth-1" alt="Before reorder: 2.1.1 Yet another sub-collection!, 2.1.2 Another one" caption="Before reorder" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/numify/05-reordered.png" class="img-fluid rounded z-depth-1" alt="After reorder: Another one is now 2.1.1, former 2.1.1 shifted to 2.1.2" caption="After reorder — siblings renumbered" %}
    </div>
</div>

---

## Key Features

- **Auto-prefix on creation** — New collections and sub-collections are instantly numbered
- **Deep nesting** — Supports unlimited depth (`1.2.3.4.5...`)
- **Reorder by renaming** — Change a prefix to move a collection to a new position
- **Gap-free numbering** — Deleting a collection renumbers remaining siblings automatically
- **Rename-safe** — Change the base name and your prefix is preserved
- **Syncs across devices** — Prefixes live in the collection name, so Zotero syncs them natively

## Requirements

- Zotero 7.0 or later (Zotero 7 and 8 supported)
