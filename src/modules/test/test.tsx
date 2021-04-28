import { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import testAction from './testActionCreator';

// This page is to demonstrate basic redux / saga capabilities as well as components.

interface mapStateToPropsProps {
  globalLoadingState: boolean;
}

const mapStateToProps = (state: any): mapStateToPropsProps => {
  return {
    globalLoadingState: state.test.loading,
  };
};

interface mapDispatchProps {
  setLoadingTrue: () => void;
  fetchMockItem: () => void;
}

const mapDispatchToProps: mapDispatchProps = {
  setLoadingTrue: () => testAction.setLoadingTrue(),
  fetchMockItem: () => testAction.fetchMockItem(),
};

type testComponentAllProps = mapStateToPropsProps & mapDispatchProps;

const Test = (props: testComponentAllProps): ReactElement => {
  useEffect(() => {
    const { fetchMockItem } = props;
    fetchMockItem();
  }, []);

  return <div>Welcome to the test page ~ </div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
