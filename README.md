### Welcome to BlocklyDuino

BlocklyDuino is a **web-based visual programming editor for [Arduino](http://www.arduino.cc/)**.

BlocklyDuino is based on [Blockly](https://developers.google.com/blockly/), the web-based, graphical programming editor. Provide static type language blocks and code generators for Arduino programming.

![](https://raw.githubusercontent.com/BlocklyDuino/BlocklyDuinoReboot/master/blockly_logos/logo_built_on.png)

BlocklyDuino also support [Grove](http://www.seeedstudio.com/wiki/GROVE_System) blocks to easily get started with microcontroller-based experimentation and learning.

### Features

* Programming Arduino with visually drag and drop code blocks
* Generate fully compatible Arduino source code
* Interactive Arduino board with 10+ predefined Grove sensor blocks
* Load different on-site examples with url parameters
* Theme choice

### Demo

BlocklyDuino is a web tool. You can give it a try at
[Web](https://blocklyduino.github.io/BlocklyDuinoReboot/public/) to see the working BlocklyDuino.

You can link directly to examples
* [demo 1](https://blocklyduino.github.io/BlocklyDuinoReboot/public/blocklyduino/index.html?url=examples/blink.xml) make default LED blink
* [demo 2](https://blocklyduino.github.io/BlocklyDuinoReboot/public/blocklyduino/index.html?url=examples/servo_potentio.xml) control servo with potentio rotator
* [demo 3](https://blocklyduino.github.io/BlocklyDuinoReboot/public/blocklyduino/index.html?url=examples/click_color.xml) click button to change LED colors

### Run locally on your web browser

If you want to install it locally. Get code from github and open `blocklyduino/index.html` in your browser.

The preffered way is to put the BlocklyDuino/web folder into a web server and open the url like localhost/public/blocklyduino/index.html for use.

### Integrated Arduino upload

To avoid the tedious step of manually pasting code to the Arduino IDE, you can run a mini webserver that uses
the [Arduino IDE](https://www.arduino.cc/en/Main/Software) to upload the code to a connected Arduino board on Windows, Mac OS X and Linux systems.
Invoke this command from the BlocklyDuino root folder:

```
python arduino_web_server.py
```

You can optionally specify the port with `--port=COM3` (or `--port=/dev/tty.foo` on Linux and Mac); if you don't, it will try and guess which port to use.

When the webserver is running, you can access BlocklyDuino itself on [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

### Usage

1. Open browser to BlocklyDuino, drag and drop blocks to make an Arduino program
2. Select the 'Arduino' tab and copy all of the source code into an existing or new project in the Arduino IDE
3. Press the 'Upload' button in the Arduino IDE to burn the code into a connected Arduino board

OR (if running `ino_web_server.py`):

1. Open browser to BlocklyDuino, drag and drop blocks to make an Arduino program.
2. Select the 'Arduino' tab and press the 'Upload' button. (press the 'Reset' button to upload an empty program)

### ChangeLog

Check changelog [here](https://github.com/BlocklyDuino/BlocklyDuino/blob/master/CHANGELOG.txt)

### Tools used

Eli Grey's File Saver [](https://github.com/eligrey/FileSaver.js/)
Google Code prettify [](https://github.com/google/code-prettify)


### Authors and Contributors

Sébastien Canet ([scanet@libreduc.cc](scanet@libreduc.cc)) for this reboot and Electron version.

Fred Lin (@gasolin) for original BlocklyDuino.

Thanks Neil Fraser, Q.Neutron from Blockly https://developers.google.com/blockly/

Thanks Arduino and Seeeduino guys for Arduino and Grove blocks.

The project is also inspired by [ardublock](https://github.com/taweili/ardublock) and [modkit](http://www.modk.it/)

### License

Copyright (C) 2012~2015 Fred Lin gasolin+blockly@gmail.com

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0


# Blockly [![Build Status]( https://travis-ci.org/google/blockly.svg?branch=master)](https://travis-ci.org/google/blockly)


Google's Blockly is a web-based, visual programming editor.  Users can drag
blocks together to build programs.  All code is free and open source.

**The project page is https://developers.google.com/blockly/**

![](https://developers.google.com/blockly/images/sample.png)

Blockly has an active [developer forum](https://groups.google.com/forum/#!forum/blockly). Please drop by and say hello. Show us your prototypes early; collectively we have a lot of experience and can offer hints which will save you time.

Help us focus our development efforts by telling us [what you are doing with
Blockly](https://developers.google.com/blockly/registration). The questionnaire only takes
a few minutes and will help us better support the Blockly community.

Want to contribute? Great! First, read [our guidelines for contributors](https://developers.google.com/blockly/guides/modify/contributing).
