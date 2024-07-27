import router from '@adonisjs/core/services/router'
const ElaasticResourcesController = () => import('#controllers/elaastic_resources_controller')

router
  .group(() => {
    router.get('/elaasticResources', [ElaasticResourcesController, 'index'])
    router.post('/elaasticResources', [ElaasticResourcesController, 'store'])
    router.get('/elaasticResources/:id', [ElaasticResourcesController, 'show'])
    router.put('/elaasticResources/:id', [ElaasticResourcesController, 'update'])
    router.delete('/elaasticResources/:id', [ElaasticResourcesController, 'destroy'])
  })
  .prefix('api/v1')
