
> Open this page at [https://reycho.github.io/servo-controller-grab-sendev2/](https://reycho.github.io/servo-controller-grab-sendev2/)

## Instructions
1) Set up radio transmitter and receiver
2) Use compass reading values to control servo rotation as replacement for the potentiometer found in original design
3) Create variable <truecompass> to reset compass heading for values greater than 180 degrees due to 180 degrees rotation range of servo
4) Set receiver to detect compass heading values and turn servo (Don't add superfluous code for visual representation of data as this reduces the sampling rate of sensor due to limited computational power)
5) Attach servo relay to micro:bit and attach power supply 
6) Print claw gripper components using 3D printer (Note CAD file may have incorrect dimensions so adjust accordingly p.s issues were found in cog and backplate)
7) Attach servo to allocated slot using screws found in servo packets
8) Join arms with short sections of filament p.s use soldering iron to flatten each side of filament to prevent them from slipping off
9) Congratulations, you now have a functional claw gripper!

CAD file can be found here alongside further instructions: https://www.instructables.com/The-Claw-A-3D-printed-robotic-claw/

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/reycho/servo-controller-grab-sendev2** and import

## Edit this project ![Build status badge](https://github.com/reycho/servo-controller-grab-sendev2/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/reycho/servo-controller-grab-sendev2** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/reycho/servo-controller-grab-sendev2/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
