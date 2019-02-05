import * as React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

export interface WithGridProps {
  // column is used to set the start and end values of the
  // 'grid-column: [start] / [end]' css rule
  column?: [number, number?];
  
  // row is used to set the start and end values of the
  // 'grid-row: [start] / [end]' css rule
  row?: [number, number?];
}

// WithGrid HOC is a lightweight helper that sets the grid-column & grid-row css rules
const withGrid = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  class WithGrid extends React.Component<P & WithGridProps> {
    render() {
      const WrappedWithGrid: AnyStyledComponent = styled(WrappedComponent)(
        ({ column, row }: WithGridProps) => `
          ${
            column
              ? `grid-column: ${column[0]} ${
                  column[1] ? `/ ${column[1]}` : ''
                };`
              : ''
          }
          ${row ? `grid-row: ${row[0]} ${row[1] ? `/ ${row[1]}` : ''};` : ''}
      `
      );
      return <WrappedWithGrid {...this.props} />;
    }
  }
  return WithGrid;
};

export default withGrid;
