import Vue from 'vue'
import BoxInput from '@/components/BoxInput'


describe('BoxInput.vue', () => {

  it('input a new item to boxInput', () => {
    // build component
    const Constructor = Vue.extend(BoxInput);
    const BoxInputComponent = new Constructor().$mount();

    // set input value
    BoxInputComponent.newItem = '春天';


    // assert list contains new item
    expect(BoxInputComponent.textOutput).to.contain('春天');
  })
})
