import Vue from 'vue'
import Editor from '@/components/Editor'
import router from '@/router'

describe('Editor.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Editor)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('.editor h1').textContent)
      .to.equal('你好')
  })
})
