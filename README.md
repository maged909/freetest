<p align="center"><img src="https://raw.githubusercontent.com/FreeterApp/Freeter/master/resources/linux/freeter-icons/256x256.png" style="margin-right: 16px; width: 128px; height: 128px"/></p>

# Freetest — Freeter Redesign Fork

**Freetest** is a redesigned fork of [Freeter](https://github.com/FreeterApp/Freeter), a free and open-source organizer for people who work on their computer.

This fork adds a visual redesign and new features on top of the original app.

## What's Different From Freeter

- **Dual accent colors** — Blue (`#5B8EF5`) for workflow tabs and Purple (`#9B6EF3`) for the project switcher, giving the UI clear visual hierarchy.
- **Export / Import workspaces** — Export any project with all its workflows and widgets to a `.freeter` JSON file. Import it back on any machine. Accessible from the Projects manager via the export icon on each project row and the "Import Project" button.
- **Polished hover effects** — Consistent, layered hover states across buttons, tabs, and list items using the accent color palette.
- **Horizontal layout** — Project switcher lives in the tab bar, not a sidebar.
- **Smaller widget action icons** — Action bar icons sized for density.

## Downloads (Windows)

Get the latest release from the [Releases page](https://github.com/maged909/freetest/releases):

- **MSI Installer** — `Freetest-<version>-win-x64.msi`
- **ZIP Portable** — `Freetest-<version>-win-x64.zip`

## Supported Operating Systems

- Windows 10 and later; Intel 64-bit.
- Linux; most distros; Intel 64-bit.
- Mac OS 10.15 and later; Intel and Apple Silicon.

## Build From Source

Prerequisites:
- [Node.js](https://nodejs.org/en)
- npm (bundled with Node.js)

```bash
npm install          # install dependencies
npm run prod         # compile (output goes to ./build)
npx electron-builder --win --publish never   # package for Windows
```

Built packages appear in the `./dist` folder.

## Original Project

This is a fork of [FreeterApp/Freeter](https://github.com/FreeterApp/Freeter). All credit for the original app goes to its author.

## License

Freetest is free software and may be redistributed under the terms specified in the [license](https://github.com/FreeterApp/Freeter/blob/master/COPYING).
