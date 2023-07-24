import { SearchFormContainer, FormHeader } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <fieldset>
        <FormHeader>
          <legend>Publicações</legend>
          <span>6 publicações</span>
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
