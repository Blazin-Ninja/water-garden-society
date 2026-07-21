# Water Garden Society

Website for the Oklahoma City Water Garden Society — monthly meetings, pond tours around town, instructional classes, a member pond gallery, and a join interest form.

## Develop

```bash
npm install
npm run dev
```

## Update events

Edit [`src/content/events.json`](src/content/events.json). Each event has `type`: `meeting`, `tour`, or `class`. Redeploy after changes.

## Update gallery

1. Add images under `public/gallery/`
2. Update [`src/content/gallery.json`](src/content/gallery.json)

## Join form

Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID` to your [Formspree](https://formspree.io) form id.

## Meeting place

Lakeview Nazarene  
3500 N.W. 50th St.  
Oklahoma City, OK 73112  

Monthly* — some months may not have meetings; please check calendar events in advance.
