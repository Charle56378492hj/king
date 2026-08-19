export function formatCurrency(value: number): string {
  const amount = typeof value === 'number' && !Number.isNaN(value) ? value : 0;
  return `${amount.toFixed(2)} ر.س`;
}

export function formatDate(value: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
