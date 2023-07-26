import { SearchFormContainer, FormHeader } from './styles'

interface SearchFormProps {
  postsAmount: number
}
export function SearchForm({ postsAmount }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <fieldset>
        <FormHeader>
          <legend>Publicações</legend>
          <span>
            {postsAmount} {postsAmount > 1 ? 'publicações' : 'publicação'}
          </span>
        </FormHeader>
        <label htmlFor="search">Buscar conteúdo</label>
        <input
          aria-label="Buscar conteúdo"
          type="text"
          placeholder="Buscar conteúdo"
          name="search"
          id="search"
        />
      </fieldset>
    </SearchFormContainer>
  )
}
