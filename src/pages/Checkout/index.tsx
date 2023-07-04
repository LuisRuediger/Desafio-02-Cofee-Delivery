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
import { CoffeeCardCheckout } from './components/CoffeeCardCheckout/index'
// import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newShippingFormSchema = z.object({
  cep: z
    .string()
    .min(8, 'O CEP precisa ter no mínimo 8 caracteres')
    .max(8, 'O CEP precisa ter no máximo 8 caracteres'),
  street: z.string().min(1, 'Este campo obrigatório'),
  number: z.number().min(1, 'Este campo obrigatório'),
  complement: z.string(),
  district: z.string().min(1, 'Este campo obrigatório'),
  city: z.string().min(1, 'Este campo obrigatório'),
  state: z
    .string()
    .min(2, 'Este campo precisa ter no mínimo 2 caracteres')
    .max(2, 'Este campo precisa ter no máximo 2 caracteres'),
})

type ShippingFormInputs = z.infer<typeof newShippingFormSchema>

export function Checkout() {
  const { register, handleSubmit, formState } = useForm<ShippingFormInputs>({
    resolver: zodResolver(newShippingFormSchema),
  })

  console.log(formState.errors)

  function handleSaveAddress(data: ShippingFormInputs) {
    console.log(data)
  }

  return (
    <>
      <DivContainer>
        <DivFormContainer className="container">
          <Title>Complete seu pedido</Title>

          <DivForm>
            <DivInfo>
              <div>
                <MapPinLine size={22} />
              </div>
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </DivInfo>

            <form id="shippingForm" onSubmit={handleSubmit(handleSaveAddress)}>
              <DivInputsContainer>
                <input
                  type="string"
                  className="cep"
                  placeholder="CEP"
                  {...register('cep')}
                />
                <input
                  type="text"
                  className="street"
                  placeholder="Rua"
                  {...register('street')}
                />
                <input
                  type="number"
                  className="number"
                  placeholder="Número"
                  {...register('number', { valueAsNumber: true })}
                />
                <input
                  type="{...register('')}text"
                  className="complement"
                  placeholder="Complemento (opcional)"
                  {...register('complement')}
                />
                <input
                  type="text"
                  className="district"
                  placeholder="Bairro"
                  {...register('district')}
                />
                <input
                  type="text"
                  className="city"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <input
                  type="text"
                  className="state"
                  placeholder="UF"
                  {...register('state')}
                />
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
          <div className="coffeeContainer">
            <CoffeeCardCheckout />
            <CoffeeCardCheckout />

            <div className="totalPayment">
              <div className="totalItems">
                <span>Total de itens</span>
                <span>R$ 29.70</span>
              </div>
              <div className="shipping">
                <span>Entrega</span>
                <span>R$ 3.50</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>R$ 33.20</span>
              </div>

              {/* <NavLink to="/success" title="success"> */}
              <button type="submit" form="shippingForm">
                Confirmar pedido
              </button>
              {/* </NavLink> */}
            </div>
          </div>
        </DivCoffeeSelectedContainer>
      </DivContainer>
    </>
  )
}
