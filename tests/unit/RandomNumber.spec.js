import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    const wrap = mount(RandomNumber)
    expect(wrap.html()).toContain('<span>0</span>')
  })

  test('If button is clicked, randomNumber should be between 1 and 10', async () => {
    const wrap = mount(RandomNumber)
    await wrap.find('button').trigger('click')
    const number = +wrap.find('span').text()
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(10)
  })

  test('If button is clicked, randomNumber should be between 200 and 300', async () => {
    const wrap = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300,
      },
    })
    await wrap.find('button').trigger('click')
    const number = +wrap.find('span').text()
    expect(number).toBeGreaterThanOrEqual(200)
    expect(number).toBeLessThanOrEqual(300)
  })
})
