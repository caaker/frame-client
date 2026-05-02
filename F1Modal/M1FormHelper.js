
function makeObject(article_form) {

  // created by User
  const res = {};
  res.link = article_form?.link?.value;
  res.image = article_form?.image?.value;
  res.title = article_form?.title?.value;
  res.summary = article_form?.summary?.value;
  res.tag = article_form?.tag?.value;
  res.domain = article_form?.domain?.value;

  // created by MongoDB and used to identify article for edit / delete
  res._id = article_form?._id?.value;
  return res;
}

export default makeObject