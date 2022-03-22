import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('emits an event with a user data payload', () => {
    const wrap = mount(LoginForm)
    const input = wrap.find('[data-testid="name-text"]')
    input.setValue('Erikson Chen')
    wrap.trigger('submit')

    const formSubbmitedCall = wrap.emitted('formSubmitted')
    expect(formSubbmitedCall).toHaveLength(1)

    const expectPlayload = { name: 'Erikson Chen' }
    expect(formSubbmitedCall[0][0]).toMatchObject(expectPlayload)
  })
})
