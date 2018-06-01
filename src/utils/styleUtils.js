export const truncate = (width: string) =>
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: ${width};
  `;