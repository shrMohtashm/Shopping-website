
export const truncateTitle = (title,count) => {
    const words = title.split(' ');
    const truncatedWords = words.slice(0, count);
    return truncatedWords.join(' ');
  }