export default function Search (article, search_string) {
  if( article.title.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }
  if( article.summary.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }
  if( article.tag.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }
  if( article.domain.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }
  return false;
}
git 