# Twins or Dreams? World Models for Robot Learning

Static site for R-WM @ ICLR 2027. No build step.

## Files

- `index.html`: page structure
- `styles.css`: look and feel
- `script.js`: renders the page from `content.js`, plus the hero effect
- `content.js`: **all editable content**
- `assets/`: images

## Edit content

Open `content.js`. Everything in `[square brackets]` is a placeholder.
Change dates, speakers, organizers (max 8), schedule rows, the OpenReview link (`cfp.submitUrl`), the contact email and sponsors there.

**Topics.** Each entry in `topics` has a `group` name (Build, Combine or Trust) and a list of `items`.
Each item is one card with `title`, `text` and `question` (shown as "Open question"). Keep two items per group so the rows line up across columns.
The group names also pick the marker style in the CSS (`.build`, `.combine`, `.trust`), so keep those three names or add matching styles.
`topicsIntro` is the line under the heading.

**Schedule.** Each entry in `schedule` has `start`, `end`, `type`, `kind` (the small label), `title` and optionally `who`.
`type` is `talk`, `lightning`, `poster`, `break`, `debate` or `opening` and picks the marker. Add `highlight: true` for the debate row.
The times are placeholders until the program is fixed.

**Submission topics.** `cfpTopics` is the list of chips under "Topics include" in the call for papers. `cfpTopicsNote` is the line below them.

## Replace photos

1. Put the image in `assets/` (roughly square, at least 300×300, JPG, PNG or WebP). Photos are cropped to a circle.
2. In `content.js`, set `photo: "assets/your-file.jpg"` for that person.
3. Set `url` to make the name a link.

Current organizer photos: `tsagkas.jpg`, `gumbsh.png`, `sathya.jpg`, `valada.jpeg`, `gavves.jpeg`.

Sponsor logos work the same way: add `logo` and `url` to an entry in `sponsors`.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy on GitHub Pages

1. Create a repo named `r-wm.github.io` (or any name) and push these files to `main`.
2. In the repo go to Settings, then Pages.
3. Under Source choose "Deploy from a branch", pick `main` and `/ (root)`, then Save.
4. The site appears at https://r-wm.github.io/ after a minute.
