import * as React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

export interface WithGridProps {
  // column is used to set the start and end values of the
  // 'grid-column: [start] / [end]' css rule
  // Strings will be treated as:
  // `grid-column: string` for grid area positioning
  column?: [number | string, (number | string)?];
  // row is used to set the start and end values of the
  // 'grid-row: [start] / [end]' css rule
  row?: [number | string, (number | string)?];
}

const gridColumn = (c: WithGridProps['column']) => {
  if (!c) return '';
  return `grid-column: ${c[0]} ${c[1] ? `/ ${c[1]}` : ''};`;
};

// WithGrid HOC is a lightweight helper that sets the grid-column & grid-row css rules
const withGrid = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  class WithGrid extends React.Component<P & WithGridProps> {
    render() {
      const WrappedWithGrid: AnyStyledComponent = styled(WrappedComponent)(
        ({ column, row }: WithGridProps) => `
          ${gridColumn(column)}
          ${row ? `grid-row: ${row[0]} ${row[1] ? `/ ${row[1]}` : ''};` : ''}
      `
      );
      return <WrappedWithGrid {...this.props} />;
    }
  }
  return WithGrid;
};

export default withGrid;
