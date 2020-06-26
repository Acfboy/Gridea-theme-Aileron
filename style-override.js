const generateOverride = (params = {}) => {
  let result = ''

  result += `.site-header{ 
  		background: ${params.headcolor};
  		.menu-container{background:${params.headcolor};}
  	   }`
   result += `.main .right .id_card{ background: ${params.idcolor};} .main .right .noticecard{background: ${params.noticecolor};}`
   result += `article.post{ background: ${params.postback} !important;}`
   result += `.toccard{background: ${params.toccolor}!important;}`
  return result
}

module.exports = generateOverride
