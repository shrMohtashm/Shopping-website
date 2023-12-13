export const truncateTitle = (title,count) => {
  if (typeof title !== 'string')
    return '';

    const words = title.split(' ');
    const truncatedWords = words.slice(0, count);
    return truncatedWords.join(' ');
  }