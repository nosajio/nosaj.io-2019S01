import {
  css,
  FlattenSimpleInterpolation,
  BaseThemedCssFunction
} from 'styled-components';

export interface MediaQueryRules {
  min?: number; // px
  max?: number; // px
}

// This is the shape of the rules in the array passed to `mediaQueryGenerator()`,
// and how mediaqueries are defined.
export interface MediaQueryDefinition<K extends string = string>
  extends MediaQueryRules {
  name: K;
}

// The output object
type MediaQueryDefinitionObject<K extends string> = {
  [P in K]: BaseThemedCssFunction<any>
};

// Type helper fn to map keys <K> to a media query definition object's `name` field
function asMediaQueryDefinition<K extends string>(
  mqd: MediaQueryDefinition<K>
): MediaQueryDefinition<K> {
  return mqd;
}

// Helper toremove complexity -> compose a media query CSS string for the passed
// rule's `min` and `max` values
const mqRuleString = (r: MediaQueryRules): string =>
  `screen and ${r.min ? `(min-width: ${r.min}px)` : ''} ${
    r.min && r.max ? 'and' : ''
  } ${r.max ? `(max-width: ${r.max}px)` : ''}`;

// matchMedia is a helper that takes a MediaQueryRules object and returns truthy 
// if the query is a match. Returns false for no match.
export const matchMedia = (r: MediaQueryRules): MediaQueryList => {
  const rule = mqRuleString(r);
  return window.matchMedia(rule);
};

// Takes an array of MediaQueryDefinitions and returns a styled-components
// themed helper as a property the each rule. Rules are accessed using the
// definition's `name` field as the key.
export default function mediaQueryGenerator<K extends string>(
  defs: Array<MediaQueryDefinition<K>>
): MediaQueryDefinitionObject<K> {
  const typedDefs = defs.map(r => asMediaQueryDefinition(r));
  return typedDefs.reduce(
    (mqs: MediaQueryDefinitionObject<K>, r, i) => {
      const mqRules = mqRuleString(r);
      mqs[r.name] = (literals: any, ...interpolations: any) => css`
        @media ${mqRules} {
          ${css(literals, ...interpolations)}
        }
      `;
      return mqs;
    },
    {} as MediaQueryDefinitionObject<K>
  );
}
