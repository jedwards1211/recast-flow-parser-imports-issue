const recast = require('recast')
const t = require('ast-types')
const {expect} = require('chai')

it('issue with recast, flow-parser and adding import specifiers', function() {
  const ast = recast.parse(
    `import { type foo } from 'foo';`,
    { parser: require('flow-parser') }
  )
  expect(recast.print(ast).code).to.equal(
    `import { type foo } from 'foo';`
  )

  const decl = ast.program.body[0]
  decl.specifiers.push(t.builders.importSpecifier(t.builders.identifier('bar')))

  expect(recast.print(ast).code).to.equal(
    `import { type foo, bar } from 'foo';`
  )
})

