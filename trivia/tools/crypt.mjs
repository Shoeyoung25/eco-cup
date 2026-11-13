// Encrypt / decrypt trivia files with the operator password (AES-256-GCM, key from PBKDF2-SHA256).
// File layout: 16-byte salt | 12-byte IV | ciphertext. The operator page (trivia/js/crypt.js) reads the same format.
// node crypt.mjs enc <password> <in> <out>   |   node crypt.mjs dec <password> <in> <out>
import { readFileSync, writeFileSync } from "node:fs";
import { webcrypto as C } from "node:crypto";
const ITER = 250000;
const key = async (pw, salt) => C.subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" },
  await C.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]), { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
const [mode, pw, inp, out] = process.argv.slice(2);
const data = readFileSync(inp);
if (mode === "enc") {
  const salt = C.getRandomValues(new Uint8Array(16)), iv = C.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await C.subtle.encrypt({ name: "AES-GCM", iv }, await key(pw, salt), data));
  writeFileSync(out, Buffer.concat([salt, iv, ct]));
} else {
  const pt = await C.subtle.decrypt({ name: "AES-GCM", iv: data.subarray(16, 28) }, await key(pw, data.subarray(0, 16)), data.subarray(28));
  writeFileSync(out, Buffer.from(pt));
}
