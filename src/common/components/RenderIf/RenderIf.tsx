import { ReactElement } from 'react';

interface RenderIfProps {
  value: boolean;
  children: ReactElement;
}

const RenderIf = (props: RenderIfProps): ReactElement => {
  const { value } = props;

  if (!value) return null;

  return props.children;
};

export default RenderIf;
