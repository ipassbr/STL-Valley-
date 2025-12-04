/**
 * Configurações centralizadas do site STL Valley
 * Todas as datas e informações do evento devem ser definidas aqui
 */

/**
 * Data de início do evento (03 de junho de 2026, 00:00:00 horário de Brasília)
 * Timezone: America/Sao_Paulo (UTC-3)
 */
export const EVENT_START_DATE = new Date("2026-06-03T00:00:00-03:00")

/**
 * Data de fim do evento (07 de junho de 2026, 23:59:59 horário de Brasília)
 */
export const EVENT_END_DATE = new Date("2026-06-07T23:59:59-03:00")

/**
 * Data de check-in (03 de junho de 2026, 12:00:00 horário de Brasília)
 */
export const CHECK_IN_DATE = new Date("2026-06-03T12:00:00-03:00")

/**
 * Data de check-out (07 de junho de 2026, 14:00:00 horário de Brasília)
 */
export const CHECK_OUT_DATE = new Date("2026-06-07T14:00:00-03:00")

/**
 * Ano do evento
 */
export const EVENT_YEAR = 2026

/**
 * Período do evento formatado para exibição
 */
export const EVENT_PERIOD = "do dia 03 ao dia 07 de Junho de 2026"

/**
 * Período do evento formatado (versão curta)
 */
export const EVENT_PERIOD_SHORT = "do dia 03 ao dia 07 de Junho"

/**
 * Timezone do evento (America/Sao_Paulo)
 */
export const EVENT_TIMEZONE = "America/Sao_Paulo"

/**
 * Formata uma data para o formato brasileiro (DD/MM/YYYY)
 */
export function formatDateBR(date: Date): string {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

/**
 * Formata uma data e hora para o formato brasileiro (DD/MM/YYYY HH:mm)
 */
export function formatDateTimeBR(date: Date): string {
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: EVENT_TIMEZONE,
  })
}
