import React, { useState } from "react";

const SearchBar = ( {onFormSubmit} ) => {
  const [value, setValue] = useState('')

  const onInputChange = (event) => {
    setValue(event.target.value)
  }

  const FormSubmit = (event) => {
    event.preventDefault()
    onFormSubmit(value)
  }
    return (
      <div className="search-bar ui segment">
        <form onSubmit = { FormSubmit } className="ui form">
          <div className="field">
            <label>Video search</label>
            <input type="text" value = {value} onChange={ onInputChange }/>
          </div>
        </form>
      </div>
    )
}

export default SearchBar;