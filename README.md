## About

This sample project demonstrates the routing configurations and layouts of option 1,
"The shell owns the only router on the page", as described in the attached
`Routing_configurations_and_wireframes_with_comments` document. The final section of
this README addresses the comments the professor marked on option 1.

No page in this demo has its real components or styling, but the app shell's centralized
routing configuration and layout handling behave as they would in a real application.
Every route is owned by the same MFE that would own it there, and each route mounts the
same set of MFEs in the same positions.


## How to run the project

You need a Node.js environment to run this project on your local machine.

First, install the packages:

```bash
npm run install:all
```

Then run them all at once in the development environment:

```bash
npm run dev:all
```

Or build and preview them:

```bash
npm run build:all
npm run preview:all
```

Then open <http://localhost:8000/>.


## Comments
1. Why is the URL prefix of each MFE numeric, and not something like `/product`, `/cart`
   and `/user`?

   30722, 30723 and 30724 are the ports each MFE runs on. I chose numeric prefixes to
   separate the MFEs technically and to give each one a technical identifier. It is also
   assumed that users will not remember or type these prefixes, but they can still
   bookmark and share them.

2. So `/` and `/30722` are equivalent?

   Yes. `/` and `/30722` are equivalent, and the URL shown to the user remains `/` on the
   landing page of the entire web app.

3. Where is the config coming from that the shells knows to mount product or user mfe? or is product MFE always present(default) and only n selected pages, user-mfe added on top?
  The config is shell/src/shellRoutes.ts. It maps each URL pattern to the list of MFEs the shell mounts there.
  Product-mfe is not a default and is not always present. It is listed explicitly per route. The shell decides which MFEs mount and each MFE's own <Routes> then decides which page it renders. Those are two independent decisions.
  The drawback is that this config lives in the shell. Adding a route, or changing the order MFEs appear in on an existing route, requires a shell redeployment even when only one MFE actually changed.


4. Are there 1 or 2 named router outlets at the bottom so if product is present it always appear in the same html node? or do you have two numbered slot and product takes 2 and if user is not present 1 is empty and collapse? or shell adding new entry node for those upon config?

   There are no fixed or numbered slots. The shell renders one `<section>` per MFE named
   in the matched config entry, in config order, so an absent MFE produces no node at all
   rather than an empty slot that collapses.

   Each section is keyed by MFE name, not by index. So when a navigation from
   `/30723/checkout` to `/30723/checkout/login` inserts user-mfe between cart and product,
   product's position shifts from second to third, but React matches it by key and reuses
   the existing node instead of destroying and recreating it. Product-mfe is not
   remounted, and the mount logs in the browser console show this.

   React Router has no named outlets, and a single `<Outlet />` renders only one child.
   If this were a vertical splitting layout, it could easily be handled with nested
   routing at the shell and `<Outlet />`. But since it is a horizontal splitting layout,
   the shell builds the nodes itself from config.


