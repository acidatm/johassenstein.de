---
title: Der Vierte Raum
date: 2021-12-15
time: 2021 - Ongoing
tags: [software]
description: Virtual exhibition space for Frappant e.V. inspired by Gibsons 'Neuromancer'
cat: Website, Exhibiton Space
relatedLinks: ["https://dervierteraum.org"]
type: work
weight: 4
index: [1]
---
I created this website for a virtual exhibition project initially started during the pandemic by Frappant e.V. Our goal was to create a platform for digital-only exhibitions. I approached this by creating a hallway through which visitors can move and enter the different exhibitions.

{{< video new>}}
{{< img new0>}}
{{< img new1>}}

The enviroment is rendered through a simple mathematical function. While the surroundings are infinite the pillars for the exhibits loop back around, so there is no way to get lost. Visitors can see each other while walking the planes. I initially used a pseudo 3D library called zdog.js to render the enviroment as I wanted to try it out anyways and didnt feel like three.js would fit this use case. But performance sadly did not meet my expectations so started learning webGL and wrote my own pseude 3D renderer (which also allowed me to do keyframe animations). This is how the old website looked.

{{< video vierterraum>}}
{{< img vierterraum-0>}}
{{< img vierterraum-1>}}
{{< img vierterraum-2>}}
{{< img new>}}
