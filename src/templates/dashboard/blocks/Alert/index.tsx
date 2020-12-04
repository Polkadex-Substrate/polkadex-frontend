import React from 'react';
import DisclaimerAlert from './DisclaimerAlert'
import * as S from './styles'
import WarningAlert from './WarningAlert'

const Alert = () => {
  return (
    <>
      <DisclaimerAlert />
      <S.Warning>
        <WarningAlert/>
      </S.Warning>
    </>
  );
}

export default Alert
