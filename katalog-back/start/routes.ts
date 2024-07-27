import router from '@adonisjs/core/services/router'
const resourcesController = () => import('#controllers/resources_controller')

router
  .group(() => {
    router.get('/resources', [resourcesController, 'index'])
    router.post('/resources', [resourcesController, 'store'])
    router.get('/resources/:id', [resourcesController, 'show'])
    router.put('/resources/:id', [resourcesController, 'update'])
    router.delete('/resources/:id', [resourcesController, 'destroy'])
  })
  .prefix('api/v1')
