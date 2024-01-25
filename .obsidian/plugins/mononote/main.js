/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => Mononote
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/plugin-info.ts
var PLUGIN_INFO = {
  "pluginVersion": "1.0.0",
  "pluginReleasedAt": "2023-08-22T12:06:35+0200"
};

// src/main.ts
var Mononote = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.onFileOpen = async (file) => {
      var _a;
      const { workspace } = this.app;
      if (!file) {
        return;
      }
      let dupeLeaves = workspace.getLeavesOfType("markdown").filter((leaf) => leaf.view.getState().file === file.path);
      if (dupeLeaves.length < 2) {
        return;
      }
      const activeLeaf = (_a = workspace.getActiveViewOfType(import_obsidian.MarkdownView)) == null ? void 0 : _a.leaf;
      if (!activeLeaf) {
        return;
      }
      const leafWithHistory = activeLeaf;
      if (leafWithHistory.history.backHistory.length) {
        await leafWithHistory.history.back();
      } else {
        activeLeaf.detach();
      }
      const firstDuplicateLeaf = dupeLeaves.find((leaf) => leaf != activeLeaf);
      workspace.setActiveLeaf(firstDuplicateLeaf, { focus: true });
    };
  }
  async onload() {
    this.app.workspace.onLayoutReady(() => {
      this.registerEvent(
        this.app.workspace.on("file-open", this.onFileOpen)
      );
      console.log(`Plugin Mononote v${PLUGIN_INFO.pluginVersion} initialized`);
    });
  }
  onunload() {
    console.log(`Plugin Mononote v${PLUGIN_INFO.pluginVersion} unloaded`);
  }
};
