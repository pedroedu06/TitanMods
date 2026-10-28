# Titan Modpack

Endgame-focused modpack for **Minecraft 1.16.5** (Forge **36.2.42**), built around the
[TitanOres](https://github.com/pedroedu06/TitanOres) progression mod.

- TitanOres documentation: <https://pedroedu06.github.io/TitanOres_documentacion/>
- Mod list: [MODLIST.md](MODLIST.md)

## What is in this repository

| Folder | Contents |
|---|---|
| `kubejs/` | Custom recipes and scripts (`server_scripts/` = recipes, `startup_scripts/`, `client_scripts/`) |
| `config/`, `defaultconfigs/` | Mod configuration |
| `scripts/`, `datapacks/`, `resourcepacks/` | Extra pack content |
| `tools/modlist.py` | Regenerates `MODLIST.md` from the jars in `mods/` |

Mod jars are **not** stored here (most mod licenses do not allow redistribution). The list of mods and versions is in
[MODLIST.md](MODLIST.md); the pack is distributed through CurseForge.

## Working on the pack

1. Install the pack in CurseForge (instance `TitanMods`).
2. Recipes go in `kubejs/server_scripts/`; use `/reload` in game to apply changes.
3. After adding, removing or updating a mod, run `python tools/modlist.py` and commit `MODLIST.md`.
