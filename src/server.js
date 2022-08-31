/* eslint-disable indent */
// Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.

const Hapi = require('@Hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                // eslint-disable-next-line no-multi-spaces
                origin: ['*']       // edge://flags/ -> enter this to edge and disable 'Block insecure private network requests'. Dont forget to reset before closing
            }
        }
    })

    server.route(routes)

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
