const generateOverride = (params = {}) => {
  let result = ''

  result += `.site-header{ 
  		background: ${params.headcolor};
  		.menu-container{background:${params.headcolor};}
  	   }`
   result += `.main .right .id_card{ background: ${params.idcolor};} .main .right .noticecard{background: ${params.noticecolor};}`
  return result
}

module.exports = generateOverride
