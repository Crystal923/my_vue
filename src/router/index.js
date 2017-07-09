import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/components/Editor'
import VueEditor from '@/components/VueEditor'
import CkEditor from '@/components/CkEditor'
import Upload from '@/components/Upload'
import Https from '@/components/Https'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/editor/vue-editor'
    },
    {
      path: '/editor',
      name: '富文本编辑器',
      component: Editor,
      children: [
        {
          path: 'vue-editor',
          name: 'VueEditor',
          component: VueEditor
        },
        {
          path: 'ckeditor',
          name: 'CkEditor',
          component: CkEditor
        }
      ]
    },
    {
      path: '/upload',
      name: '文件上传',
      component: Upload
    },
    {
      path: '/https',
      name: '网络请求',
      component: Https
    }
  ]
})
