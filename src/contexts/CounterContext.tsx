import { ReactNode, createContext, useState } from 'react'

interface CounterContextProviderProps {
  children: ReactNode
}

interface CounterContextType {
  counter: number
  handleDecreaseCounter: () => void
  handleIncreaseCounter: () => void
}

export const CounterContext = createContext({} as CounterContextType)

export function CounterContextProvider({
  children,
}: CounterContextProviderProps) {
  const [counter, setCounter] = useState(0)

  function handleIncreaseCounter() {
    setCounter((state) => state + 1)
  }

  function handleDecreaseCounter() {
    setCounter((state) => state - 1)
  }

  return (
    <CounterContext.Provider
      value={{
        counter,
        handleIncreaseCounter,
        handleDecreaseCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}
