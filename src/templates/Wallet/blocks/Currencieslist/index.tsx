import * as S from './style'


const Currencylist =()=>{

    const cryptocurrencieslist = [  

        {
            name : 'Bitcoin',
            type: 'BTC',
            value: '943324'
        },
        {
            name : 'Dash',
            type: 'Dash',
            value: '000000'
        },
        {
            name :'Ethreum',
            type : 'ETH',
            value: '000000'
        },
        {
            name:'Polkadot',
            type:'DOT',
            value: '000000'
        }
    ]
    return (


        <S.Wrapper>
         {
             cryptocurrencieslist.map(coin => 
             <div> 
                 <S.row1> 
                      <div><S.Image src={`img/cryptocurrencies/${coin.type}.png`} />{coin.name}
                      <S.paddingleft><h5> {coin.type}</h5> 
                      </S.paddingleft>
                      </div>
                        
                    <div>
                        <S.paddingright>{coin.value}
                        {/* <S.WrapperImage>
                          <S.Image src="/img/icons/ArrowTop.svg" />
                       </S.WrapperImage> */}
                        </S.paddingright>
                    </div>
                 </S.row1>
                      
                      
                       </div>)
         }
       </S.Wrapper>
    )

}

export default Currencylist