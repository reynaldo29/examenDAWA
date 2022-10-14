import { TestRouter,SongRouter, UserRouter,PlaylistRouter } from "../components";
import songRouter from "../components/songs/network";


// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [["/test", TestRouter],["/api/v1",songRouter],["/api/v1",UserRouter],["/api/v1",PlaylistRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
