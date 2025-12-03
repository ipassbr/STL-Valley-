import { useState, useEffect } from "react"
import { EVENT_START_DATE, EVENT_TIMEZONE } from "@/config/site"

/**
 * Interface para o tempo restante
 */
export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number // milissegundos totais restantes
  isExpired: boolean // se o evento já passou
}

/**
 * Hook customizado para contagem regressiva até a data do evento
 *
 * Suporta timezone e trata edge cases como evento passado e diferenças de timezone do cliente
 *
 * @param targetDate - Data alvo para a contagem regressiva (padrão: EVENT_START_DATE)
 * @param updateInterval - Intervalo de atualização em milissegundos (padrão: 1000ms = 1 segundo)
 * @returns Objeto TimeLeft com dias, horas, minutos, segundos restantes
 *
 * @example
 * ```tsx
 * const timeLeft = useCountdown()
 *
 * return (
 *   <div>
 *     {timeLeft.isExpired ? (
 *       <p>O evento já começou!</p>
 *     ) : (
 *       <p>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
 *     )}
 *   </div>
 * )
 * ```
 */
export function useCountdown(
  targetDate: Date = EVENT_START_DATE,
  updateInterval: number = 1000
): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    // Função para calcular o tempo restante considerando timezone
    const calculateTimeLeftWithTimezone = (): TimeLeft => {
      return calculateTimeLeft(targetDate)
    }

    // Calcular imediatamente
    setTimeLeft(calculateTimeLeftWithTimezone())

    // Configurar intervalo de atualização
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeftWithTimezone())
    }, updateInterval)

    // Cleanup: limpar intervalo quando componente desmontar ou dependências mudarem
    return () => clearInterval(timer)
  }, [targetDate, updateInterval])

  return timeLeft
}

/**
 * Calcula o tempo restante até a data alvo
 *
 * @param targetDate - Data alvo
 * @returns Objeto TimeLeft com os valores calculados
 */
function calculateTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date()

  // Converter para o mesmo timezone para comparação precisa
  // Usar getTime() que retorna timestamp UTC, garantindo comparação correta
  const targetTime = targetDate.getTime()
  const nowTime = now.getTime()
  const difference = targetTime - nowTime

  // Se a diferença for negativa ou zero, o evento já passou
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0,
      isExpired: true,
    }
  }

  // Calcular unidades de tempo
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return {
    days,
    hours,
    minutes,
    seconds,
    total: difference,
    isExpired: false,
  }
}
