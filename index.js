function introduction(name) {
    return `Hi, my name is ${name}.`
    //console.log(`My name is ${name}.`);
  }
  introduction("Aki")
 
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Aki", "JavaScript");

function introductionWithLanguageOptional(name, languagee = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${languagee}.`
}
//let languagee = "JavaScript";
introductionWithLanguageOptional("Gracie", "Matlab");