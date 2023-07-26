import { formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateFormatter(date: string) {
  return formatDistanceToNow(parseISO(date), {
    addSuffix: true,
    locale: ptBR,
  })
}
