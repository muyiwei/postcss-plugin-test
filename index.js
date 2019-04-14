var postcss = require('postcss')

module.exports = postcss.plugin('postcss-test-plugin', function (opts) {
  opts = opts || {}

  // Work with options here

  return function (root, result) {
      
    // Transform CSS AST here
    root.walkRules(function(rule){
    	console.log(rule.selector)
    	rule.walkDecls(function(decl){
         
         console.log(decl.prop+" = "+decl.value)
    	})
    })
  }
})
