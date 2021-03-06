# HepiaLightBlocks

Web based blockly environment for [HEPIA](http://hepia.hesge.ch)'s
educational board [HepiaLight](http://hepia.hesge.ch/fr/groupes-de-competences/hepialight/accueil/).

## Installation

## Dependencies

The depends on:

-   [Nodejs](https://nodejs.org/en/)
-   A browser that [supports](https://caniuse.com/#search=Web%20Components) Web Components.

### Install npm modules

```bash
npm install # Install dependencies
```

### Run the app

```bash
npm start # Run the http server
```

## Getting started

### Examples

You can start by play around with the examples in the `examples` directory.
To open an example, just drag the example file `[filename].xml` into the app in the browser.

## Programming the board

### Hot execution

Everytime you do a change in the program, the app will check if it can find a HepiaLight board connected to the machine (under serial port `/dev/ttyACM0`).

If a board is found, it will try to execute the program on the board. This usually takes a couple of seconds.

### Flashing the program

Once you finished buiding your program, you can persist it in micro-controller.
This ensures your program will run when the device is powered on.

First, you download your program by clicking the _Download_ bouton.

This will to download a file named `MAIN.py`, containing the python code generated from your blockly program.

Drop this file in the micro-controller file-system and restart it to run the program.

### Userlib dependencies

Make sure that you are using the latest version of `USERLIB.py`,
available in the `BOARD_FILES` directory.

## Testing

The application has been and somewhat tested in the following environment:

-   [Linux Mint](https://linuxmint.com/)
-   [Node.js v10](https://nodejs.org/en/)
-   [Chrome](https://www.google.com/chrome/)

## Credits

This application relies heavily on [blockly](https://developers.google.com/blockly/) (by Google) to handle the block based UI.

The application aesthetics was strongly inspired by [MakeCode](https://www.microsoft.com/en-us/makecode) (by Microsoft)

# Known issues

## Error: Device or resource busy, cannot open /dev/ttyACM0

In Linux, (ModemManager will try to comunicate)[https://bugs.launchpad.net/modemmanager/+bug/700261] with the HepiaLight board
when connected. Please wait 10-15s after pluging the card to compensate for this.

Optionally, you can prevent ModemManager from communicating with the board.
To do this, copy the the udev rules file `udevrules/99-hepialight.rules` into `/etc/udev/rules.d`.

Apply these changes by running:

```{.bash}
udevadm control --reload-rules && udevadm trigger
```

## Permission issues

Be sure to add your user to the device group.

To check the device group execute `ls -al /dev/tty*`

Example under Ubuntu:

```{.bash}
ls -al /dev/ttyACM0
crw-rw---- 1 root dialout 166, 0 Nov  2 16:17 /dev/ttyACM0
```

In the example above the group is _dialout_.

To add your user to the group, execute:

```{.bash}
sudo usermod -a -G dialout $USER
```
