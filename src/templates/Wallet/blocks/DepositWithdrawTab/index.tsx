import * as S from './style'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WithdrawBTC from 'components/general/WithdrawBTC';
import DespositBTC from 'components/general/DepositBTC';
import { useState } from 'react';

export type InputProps = {  
    coloricon?: any       
  }  

const DepositWithdrawTAb =()=>{    
  
  const [activeIndex, setActiveIndex] = useState(0);

    return(
          <S.MiddleCurrencyColumn>
              <S.TAbSection>               
                  <Tabs selectedIndex={activeIndex} onSelect={(index) => setActiveIndex(index)} >
                    {  (activeIndex==0)             
                      ?  <S.TABHeader>               
                          <TabList>
                            <Tab >Withdraw BTC</Tab>
                            <Tab >Deposit BTC</Tab>
                          </TabList>               
                          </S.TABHeader>  
                      :    
                          <S.TABHeaderGreen>               
                          <TabList>
                            <Tab >Withdraw BTC</Tab>
                            <Tab >Deposit BTC</Tab>
                          </TabList>               
                          </S.TABHeaderGreen>  

                    }
                      <TabPanel>
                        <WithdrawBTC walletAddress ="asdwqe12312434131232sad"/>
                      </TabPanel>
                      <TabPanel>
                        <DespositBTC/>
                      </TabPanel> 
                  </Tabs>               
              </S.TAbSection>            
    </S.MiddleCurrencyColumn>
    )
}


export default DepositWithdrawTAb