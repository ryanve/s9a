!function(root) {
  function s9a(text) {
    return text.replace(word, "s9a")
  }
  var word = /\b(synesthesia|synaesthesia|sinestesia|synesthésie|synesth&eacute;sie)\b/gi
  typeof module != "undefined" && module.exports ? module.exports = s9a : root["s9a"] = s9a
}(this);
