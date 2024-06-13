export function limitCharacters(text, maxCharacters) {
    if (text.length <= maxCharacters) return text;

    return text.slice(0, maxCharacters - 1) + '...';
}
