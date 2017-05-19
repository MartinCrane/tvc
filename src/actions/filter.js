export const updateFilter = (filter) => {
  return {
    type: "UPDATE_FILTER",
    payload: filter
  }
}

export function filterDisplay(x) {
  switch (x) {
    case "fAll":
      return this.props.portfolio
    case "fScoring":
      return this.props.portfolio.filter((title)=> title.directors !== null )
    case "fNarrative":
      return this.props.portfolio.filter((title)=> title.tags.indexOf('narrative') !== -1 )
    case "fDocumentary":
      return this.props.portfolio.filter((title)=> title.tags.indexOf('documentary') !== -1 )
    case "fCommercial":
      return this.props.portfolio.filter((title)=> title.tags.indexOf('commercial') !== -1 )
    case "fOriginalMusic":
      return this.props.portfolio.filter((title)=> title.tags.indexOf('originalMusic') !== -1 )
    case "fProduction":
      return this.props.portfolio.filter((title)=> title.tags.indexOf('production') !== -1)
    case "fMixing":
      return this.props.portfolio.filter((title)=> title.tags.indexOf('mixing') !== -1)
    case "fSongwriting":
      return this.props.portfolio.filter((title)=> title.author === 'Brazos' || title.author === 'Martin Crane')
    default:
      return this.props.portfolio
  }
}
