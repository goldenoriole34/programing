function isEmpty(obj) {
  for (let objKey in obj) {
    return false
  }
  return true;
}