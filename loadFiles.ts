import * as fs from "fs";
import path from "path";

export default class Obsidian {
  dirname: string;
  fileInfo: Map<string, string[]>;
  htmlFiles: Map<string, string[]>;

  constructor() {
    this.dirname = path.resolve("/mnt/c/Users/bsc56/Documents/Obsidian Vault");
    this.fileInfo = new Map();
    this.htmlFiles = new Map();

    this.loadMDFiles();
  }

  async loadMDFiles() {
    const directories = fs.readdirSync(this.dirname, "utf-8");
    for (const directory of directories) {
      if (directory !== ".obsidian") {
        const files = fs.readdirSync(`${this.dirname}/${directory}`, "utf-8");
        this.fileInfo.set(directory, [...files]);
      }
    }
  }

  changingToHTML(markdown: string) {
    markdown = markdown.replace(/^# (.*)$/gm, "<h1>$1</h1>");
    markdown = markdown.replace(/^## (.*)$/gm, "<h2>$1</h2>");
    markdown = markdown.replace(/^### (.*)$/gm, "<h3>$1</h3>");
    markdown = markdown.replace(/^#### (.*)$/gm, "<h4>$1</h4>");
    markdown = markdown.replace(/^##### (.*)$/gm, "<h5>$1</h5>");
    markdown = markdown.replace(/^###### (.*)$/gm, "<h6>$1</h6>");

    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    markdown = markdown.replace(/\*(.*?)\*/g, "<em>$1</em>");

    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    markdown = markdown.replace(
      /```(.*?)\n(.*?)```/gs,
      '<pre><code className="$1">$2</code></pre>'
    );

    markdown = markdown.replace(/`(.*?)`/g, "<code>$1</code>");

    markdown = markdown.replace(/^(?!<h|<p|<ul|<ol)(.*)$/gm, "<p>$1</p>");
    return markdown;
  }
}
