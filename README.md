# Apps Script Starter

A minimal Google Apps Script starter project.

## Contents

- `Code.gs` — sample functions: `helloWorld()` logs a greeting, and `onOpen()` / `showHelloAlert()` add a custom menu to a bound Google Sheet.
- `appsscript.json` — the project manifest.

## Usage

1. Create a new project at [script.google.com](https://script.google.com), or bind one to a Google Sheet via **Extensions > Apps Script**.
2. Copy the contents of `Code.gs` into the script editor (and `appsscript.json` via **Project Settings > Show "appsscript.json"** if you want to sync the manifest).
3. Run `helloWorld` from the editor, or open the bound Sheet to see the **Starter Script** menu.

### Optional: push with clasp

If you use [`clasp`](https://github.com/google/clasp):

```bash
npm install -g @google/clasp
clasp login
clasp create --title "Apps Script Starter" --type standalone
clasp push
```

