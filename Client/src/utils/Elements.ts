import 'element-plus/theme-chalk/index.css'
import { ElMenu } from "element-plus"; 

export default {
    install (app: any) {
        app.use(ElMenu)
    }
}