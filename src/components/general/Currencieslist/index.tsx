import SidebarDropdown from 'components/general/SidebarDropdown'
import * as S from './style'


const Currencylist =()=>{

    const cryptocurrencieslist = [  

        {   id: 1,
            name : 'Bitcoin',
            type: 'BTC',
            value: '0.456943324'
        },
        {   id: 2,
            name : 'Dash',
            type: 'Dash',
            value: '0.000000000'
        },
        {   id: 3,
            name :'Ethreum',
            type : 'ETH',
            value: '0.000000000'
        },
        {   id: 4,
            name:'Polkadot',
            type:'DOT',
            value: '0.000000000'
        },
        {   id: 5,
            name:'Riple',
            type:'BNB',
            value: '0.000000000'
        },
        {   id: 6,
            name:'LiteCoin',
            type:'LTC',
            value: '0.000000000'
        },
        {   id: 7,
            name:'Tether',
            type:'ATOM',
            value: '0.000000000'
        }
        ,
        {   id: 8,
            name : 'Dash',
            type: 'Dash',
            value: '0.000000000'
        },
        {   id: 9,
            name :'Ethreum',
            type : 'ETH',
            value: '0.000000000'
        },
        {   id: 10,
            name:'Polkadot',
            type:'DOT',
            value: '0.000000000'
        },
        {   id: 11,
            name:'Riple',
            type:'BNB',
            value: '0.000000000'
        },
        {   id: 12,
            name:'LiteCoin',
            type:'LTC',
            value: '0.000000000'
        },
        {   id: 13,
            name:'Tether',
            type:'ATOM',
            value: '0.000000000'
        }
    ]
    return (
         <S.CryptolistWrapper>
         {  cryptocurrencieslist.map(coin =>          
                 <S.Currencyrow  key= {coin.id}> 
                     <S.Imagewrapper>                    
                        <S.Image src={`img/cryptocurrencies/${coin.type}.png`} />                     
                     </S.Imagewrapper>
                     <S.currencynamecolumn>
                        <S.Currencynamerow> 
                        {coin.name}
                        </S.Currencynamerow>                     
                        <S.Currencyabbreviationrow>
                        {coin.type}   
                        </S.Currencyabbreviationrow>
                     </S.currencynamecolumn>              
                     
                     <S.currencyvaluecolumn>
                          <S.Currencyvaluerow>  
                              <S.CurrencyCoinValueColumn>
                                {coin.value}
                              </S.CurrencyCoinValueColumn>
                              <S.currencyvaluecolumn>
                                <SidebarDropdown/>
                              </S.currencyvaluecolumn>                           
                          </S.Currencyvaluerow>
                     </S.currencyvaluecolumn>             
                 </S.Currencyrow>
                      )
         }
        </S.CryptolistWrapper>
    )
}

export default Currencylist