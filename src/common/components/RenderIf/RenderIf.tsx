import { ReactElement, ReactNode } from 'react';

interface RenderIfProps {
  value: boolean;
  children: ReactElement;
}

const RenderIf = (props: RenderIfProps): ReactNode | null => {
  return props.value ? props.children : null;
};

export default RenderIf;
