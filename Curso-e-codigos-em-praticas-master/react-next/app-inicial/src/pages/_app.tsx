import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContadorProvider } from '@/data/ContadorContext'
import { CarrinhoProvider } from '@/data/CarrinhoContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
          <CarrinhoProvider>
            <ContadorProvider>
                <Component {...pageProps} />
            </ContadorProvider>
          </CarrinhoProvider>
         )
}
