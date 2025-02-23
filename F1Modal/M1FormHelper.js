
function makeObject(article_form) {

  // this is the data we will send to the server after validation
  // link, image, title, summary, tag, domain, _id, index
  const res = {};

  res.link = article_form?.link.value;
  res.image = article_form?.image.value;
  res.title = article_form?.title.value;
  res.summary = article_form?.summary.value;
  res.tag = article_form?.tag.value;
  res.domain = article_form?.domain.value;
  res._id = article_form?._id.value;
  res.index = article_form?.index.value;
  
  return res;
}

export default makeObject