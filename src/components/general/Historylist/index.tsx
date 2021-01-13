import WalletInput from 'components/general/WalletPageReadonlyInput'
import * as S from './styles'

export type InputProps = {
  
    coloricon?: any
    rotation?: any
    
  }

const HistoryListComponent =()=>{
    
    const historylist = [  
    
            {   id: 1,
                Time : '10 Mintues Ago',
                Hashkey:"dvfgdgszdgsd234234",
                value:"1232435456352341"
    
            },
            {   id: 2,
                Time : '04 August, 2011 12:21 ',
                Hashkey:"dvfgdgszdgsd234234",
                value:"6232435456352341"
            },
            {   id: 3,
                Time : '05 June, 2011 12:21',
                Hashkey:"dvfgdgszdgsd234234",
                value:"2342435456352341"
            },
            {   id: 4,
                Time : '10 Mintues Ago',
                Hashkey:"dvfgdgszdgsd234234",
                value:"23412435456352341"
            }
        ]
           
    return (
          <div>
          {historylist.map(history =>  
            <S.MainWrapper  key= {history.id}>
                <S.timeandHashColumn>
                    <span> {history.Time}</span>
                    <S.Span> {history.Hashkey}</S.Span>
                </S.timeandHashColumn>
            
                {(history.id==1 || history.id==4)
                ?     <S.Currencywrapper>
                        <S.ImageWrapper coloricon={"#E6007A"}  rotation={"rotate(270deg)"}> 
                          <S.Image> <img src={`/img/icons/ArrowVerticalBottom-white-18dp.svg`} /></S.Image>
                        </S.ImageWrapper>
                        <S.Currencyspan coloricon={"#E6007A"}>0.23422 DOT</S.Currencyspan>
                       </S.Currencywrapper>  
                :    <S.Currencywrapper>
                        <S.ImageWrapper coloricon={"#0CA564"}  rotation={"rotate(0deg)"}> 
                          <S.Image> <img src={`/img/icons/ArrowVerticalTop-white-18dp.svg`} /></S.Image>
                        </S.ImageWrapper>
                        <S.Currencyspan coloricon={"#0CA564"}>0.23422 DOT</S.Currencyspan>
                     </S.Currencywrapper>                          
                }                      
           
            </S.MainWrapper>
          ) }
          </div>
        
    )

}

export default HistoryListComponent
