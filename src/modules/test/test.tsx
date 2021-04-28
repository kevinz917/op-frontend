import { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import testAction from './testActionCreator';

// This page is to demonstrate basic redux / saga capabilities as well as components.

interface mapStateToPropsProps {
  globalLoadingState: boolean;
}

const mapStateToProps = (state: any): mapStateToPropsProps => {
  return {
    globalLoadingState: state.global.loading,
  };
};

interface mapDispatchProps {
  setLoadingTrue: () => void;
}

const mapDispatchToProps: mapDispatchProps = {
  setLoadingTrue: () => testAction.setLoadingTrue(),
};

type testComponentAllProps = mapStateToPropsProps & mapDispatchProps;

const Test = (props: testComponentAllProps): ReactElement => {
  useEffect(() => {
    const { setLoadingTrue } = props;
    setLoadingTrue();
  }, []);

  return <div>Welcome to the test page ~ </div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
