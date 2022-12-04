export function localizeDate(date) {
  const newDate = new Date(date);
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return newDate.toLocaleDateString('en-US', options);
}
