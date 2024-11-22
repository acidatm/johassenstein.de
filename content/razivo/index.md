---
title: Ralf Ziervogel
date: 2021-06-01
time: 2021-2023
description: Website displaying every work by German artist Ralf Ziervogel at the same time, utilising a PHP based CMS, a custom GIMP script, a python rendering pipeline and leaflet.js
cat: Website, CMS, Rendering Pipeline
relatedLinks: ["https://ralfziervogel.com"]
type: work
---

The work of Ralf Ziervogel is large in size but also very detailed. He wanted a website which could show both sides of his work simultaneously. My approach was to abuse leaflet.js, an open source tiling engine originally meant to render street maps, to show his work on original size and resolution while also allowing an overview over the entire body of work.
To create the needed sliced tiles from his work I wrote a custom GIMP scripts which would translate the layouts made in a custom PHP based CMS into a single file which is then sliced with a python based command line tool.

{{< video framed>}}
{{< img razivo-3>}}
