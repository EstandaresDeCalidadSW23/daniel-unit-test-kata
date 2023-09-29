const hello = require("../src/hello")


test("should return Hello Benja!", function() {
    // setup
    const name = "Benja"
    const expected = "Hello Benja!"
    
    // execute
    const result = hello(name)

    // validate
    expect(result).toEqual(expected)
})

it("should return Hello World!", () => {
    // setup
    const expected = "Hello World!"
    
    // execute
    const result = hello()

    // validate
    expect(result).toEqual(expected)
})

it("should return Hello Other Name!", () => {
    // setup
    const name = "Other Name"
    const expected = "Hello Other Name!"
    
    // execute
    const result = hello(name)

    // validate
    expect(result).toEqual(expected)
})