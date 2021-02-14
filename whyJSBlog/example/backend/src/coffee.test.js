const { coffeeMakesDevelopersHappySince } = require('./coffee')

describe("coffee", () => {
  test("coffeeMakesDevelopersHappySince", () => {
    expect(coffeeMakesDevelopersHappySince).toEqual({
      text: "COMPUTER EXISTS",
      color: "#5fb053",
    })
  })
})
