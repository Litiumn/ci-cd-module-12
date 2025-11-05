/**
 * @jest-environment jsdom
 */
import fs from "fs";
import path from "path";

describe("Loader Functionality", () => {
  beforeAll(async () => {
    // Load HTML before running the script
    document.body.innerHTML = fs.readFileSync(
      path.resolve("./index.html"),
      "utf8"
    );

    // Import your JS file (attaches the event listener)
    await import("./script.js");

    // Fire the DOMContentLoaded event manually so the loader runs
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  test("adds a loader to the DOM", () => {
    const loader = document.getElementById("circle-loader");
    expect(loader).not.toBeNull();

    // Intentional fail: this message doesn't match the real one in script.js
    expect(loader.textContent.trim()).toContain("Loading your experience...");
  });
});
