<script lang="tsx">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import * as Icons from '@element-plus/icons-vue'

interface MenuItem {
  [key: string]: any
  // 导航的图标
  icon?: string
  // 导航的名字
  name: string
  // 导航的标识
  index: string
  // 导航的子菜单
  children?: MenuItem[]
}

export default defineComponent({
  props: {
    // 导航菜单的数据
    menuData: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: '',
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false,
    },
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name',
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index',
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon',
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children',
    },
  },
  setup(props, { attrs }) {
    const renderMenu = (menuData: MenuItem[]) => {
      return menuData.map((item: MenuItem) => {
        const Icon = (Icons as any)[item[props.icon]]

        // sub-menu
        const slots = {
          title: () => {
            return <>
              <Icon />
              <span>{item[props.name]}</span>
            </>
          },
        }

        // 递归渲染children
        if (item[props.children]?.length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          )
        }

        // 正常渲染普通的菜单
        return (
          <el-menu-item index={item[props.index]}>
            <Icon />
            <span>{item[props.name]}</span>
          </el-menu-item>
        )
      })
    }

    return () => (
      <el-menu
        class="n-menu"
        default-active={props.defaultActive}
        router={props.router}
        {...attrs}
      >
        {renderMenu(props.menuData)}
      </el-menu>
    )
  },
})
</script>
