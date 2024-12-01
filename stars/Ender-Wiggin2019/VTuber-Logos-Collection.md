---
project: VTuber-Logos-Collection
stars: 300
description: An elegant website for collecting kawaii logos from great artists
---

VTuber Style Logo Collection
============================

This project is a collection of cute VTuber style logos. All credits can be founded in `src/data/credits.ts`. Thanks to their great works!

-   SAWARATSUKI's KawaiiLogos
-   Aikoyori's ProgrammingVTuberLogos

Currently, all logos are shown on https://vtuber-style-logos.vercel.app/.

Feature
-------

1.  filter by alias (k8s, vscode, etc.)
2.  filter by author in route (`/author/:author`)
3.  filter by autors and categories in home page

Development
-----------

pnpm i

First, run the development server:

pnpm dev

P.S. Ensure your Node.js version is > v18.17.0. Consider using NVM for easy version management.

How to Add Logos?
-----------------

### Upload with only one single image

This PR shows a great example of the uploading process. You can follow what this PR did, or based on the following steps.

Here're 4 steps:

1.  Upload your images in `public/` folder. Usually, if you only have few logos to upload, you can directly choose the `DownloadedLogos` folder and follow the structure. If you want some more, you can create your own folder, similar to this.
    
2.  Add the credit. `credits.ts` contains the information of each author. Note that you need to add the author name in the above `Enum`, and also detailed information in the below `CREDITS` object.
    
3.  (optional) If you know how to code, and want to put some logos to a unique collection, you can create a new folder in `src/data`. Otherwise, you don't need to do this step, and just create your file in `/src/data/DownloadedLogos`
    
4.  Create a new brand file. You can follow any existing brand file as reference, and here're some optional attributes:
    

-   aliases: alias for a brand name
-   categories: brand category, it can have multiple categories, but currently you can only use the categories defined in `Enum`.

Also don't forget to import this file to an `index.ts` file for centralised management.

### Upload multiple logos via GitHub repository

If you have many logos and want to upload in one click, then this method is helpful. There're 4 steps:

1.  Create and upload your images to GitHub repository similar to KawaiiLogos. It's preferred to use the `folder->image` structure since it can contained multiple logos in one brand file. If you only have one logo for each brand, you can only upload images. Also, you need to clone your repository to public as a submodule.
    
2.  Add setting in `setting.json`.
    

  {
    "githubRepoName": "CuteVtubingThing",
    "downloadUrl": "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/",
    "author": "murimurikyu",
    "imagesOnly": true
  }

**Note: If you have images as the first step mentions, you need to set `imagesOnly` to `true`.**

1.  run `pnpm generate` in terminal, and you should find your logos have been generated.
    
2.  import your `index.ts` to `brand.ts`.
    

### Why uploading logos is so complicated in this project?

Previously I choose the format that directly write down each file (i.e. `vscode.ts`) for each brand instead of an automatically API to genrate images dynamically, because I want each logo can be maintained in a easier way. For example, some brand has aliases, such as vs code and k8s, using static files for managing can be a better way.

Besides, since this project's architecture is created only in few hours, there're indeed many aspect I didn't consider it well. For example, I give each logo an author attribute, because I thought one brand may have logos designed by different authors. However, soon I found out people prefer unique cards from different authors instead of a mixed card with so many buttons. There're some more details that can be improved, maybe in the future I would fix them.

TODO
----

-   GitHub Actions for automation (currently I use `pnpm generate` to generate data)
-   Alias filter such as k8s -> Kubernetes
-   Author filter (can filter by prams, but not shown on UI)
-   Category filter (programming languages, tools, etc.)
-   License declaration on each logo
-   Better UI for the whole page
-   Better logo register process (for a new user to upload a logo)

Any PR is welcome!
