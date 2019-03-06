import { css, FlattenSimpleInterpolation, BaseThemedCssFunction } from 'styled-components';

// This is the shape of the rules in the array passed to `mediaQueryGenerator()`,
// and how mediaqueries are defined.
export interface MediaQueryDefinition<K extends string = string> {
  name: K;
  min?: number; // px
  max?: number; // px
}

// The output object
type MediaQueryDefinitionObject<K extends string> = {
  [P in K]: BaseThemedCssFunction<any>
};

// Type helper fn to map <K> to a media query definition object's `name` field
function asMediaQueryDefinition<K extends string>(
  mqd: MediaQueryDefinition<K>
): MediaQueryDefinition<K> {
  return mqd;
}

// Helper toremove complexity -> compose a media query CSS string for the passed 
// rule's `min` and `max` values
const mqRuleString = (r: MediaQueryDefinition<string>): string =>
  `screen and ${r.min ? `(min-width: ${r.min}px)` : ''} ${
    r.min && r.max ? 'and' : ''
  } ${r.max ? `(max-width: ${r.max}px)` : ''}`;


// Takes an array of MediaQueryDefinitions and returns a styled-components 
// themed helper as a property the each rule. Rules are accessed using the 
// definition's `name` field as the key.
export default function mediaQueryGenerator<K extends string>(
  defs: Array<MediaQueryDefinition<K>>
): MediaQueryDefinitionObject<K> {
  const typedDefs = defs.map(r => asMediaQueryDefinition(r));
  return typedDefs.reduce(
    (mqs: MediaQueryDefinitionObject<K>, r) => {
      const mqRules = mqRuleString(r);
      mqs[r.name] = (
        literals: any,
        ...interpolations: any
      ) => css`
        @media ${mqRules} {
          ${css(literals, ...interpolations)}
        }
      `;
      return mqs;
    },
    {} as MediaQueryDefinitionObject<K>
  );
}