import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { DivContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <DivContainer>
        <Header />
        <Outlet />
      </DivContainer>
    </>
  )
}
