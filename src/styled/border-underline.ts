const borderUnderline = (color: string): string => `
  display: inline;
  background-image: linear-gradient(0deg, transparent, ${color}, transparent);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: auto 2px;
`;

export default borderUnderline;
