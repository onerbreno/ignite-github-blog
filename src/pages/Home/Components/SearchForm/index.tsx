import { useFormContext } from 'react-hook-form'
import { SearchFormContainer, FormHeader } from './styles'
import { SearchFormInput } from '../..'

interface SearchFormProps {
  postsAmount: number
}
export function SearchForm({ postsAmount }: SearchFormProps) {
  const { register } = useFormContext<SearchFormInput>()

  return (
    <SearchFormContainer>
      <fieldset>
        <FormHeader>
          <legend>Publicações</legend>
          <span>
            {postsAmount} {postsAmount > 1 ? 'publicações' : 'publicação'}
          </span>
        </FormHeader>
        <label htmlFor="query">Buscar conteúdo</label>
        <input
          aria-label="Buscar conteúdo"
          type="text"
          placeholder="Buscar conteúdo"
          id="query"
          {...register('query')}
        />
      </fieldset>
    </SearchFormContainer>
  )
}
