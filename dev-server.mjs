/* global console, process */
import { dev } from "astro";

async function start() {
  try {
    const server = await dev({
      root: ".",
    });
    console.log(`Server listening on ${server.address ? JSON.stringify(server.address) : "4321"}`);
  } catch (err) {
    console.error("Failed to start Astro dev server:", err);
    process.exit(1);
  }
}

start();
