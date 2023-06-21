import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  DivCoffeeSelectedContainer,
  DivContainer,
  DivForm,
  DivFormContainer,
  DivInfo,
  DivInputsContainer,
  DivPaymentContainer,
  Title,
} from './styles'

export function Checkout() {
  return (
    <>
      <DivContainer>
        <DivFormContainer className="container">
          <Title>Complete seu pedido</Title>

          <DivForm>
            <form action="">
              <DivInfo>
                <div>
                  <MapPinLine size={22} />
                </div>
                <div>
                  <p>Endereço de Entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </DivInfo>

              <DivInputsContainer>
                <input type="text" className="cep" placeholder="CEP" />
                <input type="text" className="street" placeholder="Rua" />
                <input type="text" className="number" placeholder="Número" />
                <input
                  type="text"
                  className="complement"
                  placeholder="Complemento (opcional)"
                />
                <input type="text" className="district" placeholder="Bairro" />
                <input type="text" className="city" placeholder="Cidade" />
                <input type="text" className="state" placeholder="UF" />
              </DivInputsContainer>
            </form>
          </DivForm>

          <DivForm>
            <DivInfo>
              <div className="dolar">
                <CurrencyDollar size={22} />
              </div>
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </DivInfo>

            <DivPaymentContainer>
              <div className="credito">
                <CreditCard size={16} />
                <span>CARTÃO DE CRÉDITO</span>
              </div>
              <div className="debito">
                <Bank size={16} />
                <span>CARTÃO DE DÉBITO</span>
              </div>
              <div className="dinheito">
                <Money size={16} />
                <span>DINHEIRO</span>
              </div>
            </DivPaymentContainer>
          </DivForm>
        </DivFormContainer>

        <DivCoffeeSelectedContainer>
          <Title>Cafés selecionados</Title>
        </DivCoffeeSelectedContainer>
      </DivContainer>
    </>
  )
}
