export function extractCharacterIds(characterUrls: string[]): string[] {
  return characterUrls.map((url) => url.split("/").pop()!);
}
