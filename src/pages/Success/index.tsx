import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import img from '../../../public/assets/illustration.svg'
import {
  DivContainer,
  DivLocation,
  DivMoney,
  DivOrderInfo,
  DivOrderInfoContainer,
  DivTimer,
} from './styles'

export function Success() {
  return (
    <>
      <DivContainer>
        <DivOrderInfoContainer>
          <div>
            <h2 className="title">Uhu! Pedido confirmado</h2>
            <span className="subtitle">
              Agora é só aguardar que logo o café chegará até você
            </span>
          </div>

          <section>
            <DivOrderInfo>
              <div>
                <DivLocation>
                  <MapPin size={16} weight="fill" />
                </DivLocation>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  <br />
                  Farrapos - Porto Alegre, RS
                </p>
              </div>
              <div>
                <DivTimer>
                  <Timer size={16} weight="fill" />
                </DivTimer>
                <p>
                  Previsão de entrega <br />
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
              <div>
                <DivMoney>
                  <CurrencyDollar size={16} weight="fill" />
                </DivMoney>
                <p>
                  Pagamento na entrega <br />
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </DivOrderInfo>
          </section>
        </DivOrderInfoContainer>

        <img src={img} alt="" />
      </DivContainer>
    </>
  )
}
