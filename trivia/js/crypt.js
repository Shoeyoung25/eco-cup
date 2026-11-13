// Decrypts files made by tools/crypt.mjs (16-byte salt | 12-byte IV | AES-GCM ciphertext; key = PBKDF2-SHA256 of the password).
const ITER = 250000, keys = {};
async function key(pw, salt) {
  const id = pw + ":" + [...salt].join(",");
  return keys[id] ||= crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" },
    await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]), { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
}
// returns an ArrayBuffer; throws if the password is wrong
export async function decrypt(pw, buf) {
  const b = new Uint8Array(buf);
  return crypto.subtle.decrypt({ name: "AES-GCM", iv: b.subarray(16, 28) }, await key(pw, b.slice(0, 16)), b.subarray(28));
}
export async function fetchDecrypt(pw, url) {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error("status " + r.status);
  return decrypt(pw, await r.arrayBuffer());
}
