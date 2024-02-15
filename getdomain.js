function domainName(url){
  const matches = url.match(/(?:https?:\/\/)?(?:www\.)?(.*?)\./);
  return matches ? matches[1] : null;
}
