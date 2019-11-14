const generateOverride = (params = {}) => {
  let result = ''

  

  if (params.postimg && params.postimg !== '') {
    result += `
    #single .featured-image{background-image: url(${params.postimg});}
    `
  }
  if (params.postimg && params.postimg !== '') {
    result += `
    .cover{background-image: url(${params.yemaimg});}
    `
  }



  console.log('result', result)

  return result
}

module.exports = generateOverride