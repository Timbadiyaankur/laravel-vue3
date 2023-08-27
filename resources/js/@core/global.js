import jwtPlugin from '@/@core/plugins/jwt.plugin'
import apiPlugin from '@/@core/plugins/api.plugin'
import '@/@core/css/adminlte.min.css'

export default app => {
  app.use(jwtPlugin)
  app.use(apiPlugin)
}
