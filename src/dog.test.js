import Dog from './dog'

test('Dog.bark', () => {
  const testDog = new Dog('test')
  expect(testDog.bark()).toBe('Wah wah, I am test')
})