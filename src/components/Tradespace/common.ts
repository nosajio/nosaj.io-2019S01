import { cdnURL } from '../../utils/cdn';

export const tradespaceAssetPath = (path: string): string =>
  cdnURL(`2009S01/work/tradespace/case-study/${path}`);
