import { ContainerLoadingPage, SpinnerLoading } from "../styles/loadingPageStyle"
import logo from '../img/logoamazonas.png'

export const LoadingPage = () => {
  return (
    <ContainerLoadingPage>
      <div>
        <h1>AMAZONAS</h1>
        <img src={logo} alt='' />
      </div>


      <SpinnerLoading></SpinnerLoading>
    </ContainerLoadingPage>
  )
}