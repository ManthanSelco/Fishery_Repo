/* Save text as a file in the visitor's browser (used for CSV exports and the calendar file). */
export function downloadFile(filename, text, type = 'text/csv') {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export const downloadCSV = (filename, text) => downloadFile(filename, text, 'text/csv');
