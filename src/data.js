const markdownFiles = import.meta.glob('./docs/**/*.md', { query: '?raw', eager: true });
const filePaths = Object.keys(markdownFiles);

export const allModules = filePaths.map((path) => {
  const content = markdownFiles[path].default;

  const parts = path.split('/');
  const folderName = parts[parts.length - 2]; // keep folder name TR
  const idMatch = folderName.match(/^\d+/);
  const id = idMatch ? parseInt(idMatch[0]) : 999;

  const lines = content.split('\n');
  const firstLine = lines.find(line => line.trim().startsWith('#'));
  const title = firstLine
    ? firstLine.replace(/^#+\s*/, '').trim() // TR literal
    : folderName.replace(/^\d+-/, '').replace(/-/g, ' '); // fallback TR

  return {
    id: id,
    title: title,   // TR literal for UI
    content: content // TR literal for UI
  };
}).sort((a, b) => a.id - b.id);
