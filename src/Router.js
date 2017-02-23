import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import GenreSetup from './components/GenreSetup';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import AppSetup from './components/AppSetup';
import Welcome from './components/Welcome';
import Example from './components/Example';

// const RouterComponent = () => (
//   (
//     <Router sceneStyle={{ paddingTop: 0, backgroundColor: '#eee' }}>
//       <Scene key={'main'} hideNavBar>
//         <Scene
//           key={'example'}
//           component={Example}
//           title={'DEMO'}
//           navigationBarStyle={styles.navbarContainer}
//           titleStyle={styles.titleStyle}
//           initial
//         />
//       </Scene>
//     </Router>
//   )
// );

const RouterComponent = () => (
  (
    <Router sceneStyle={{ paddingTop: 0, backgroundColor: '#eee' }}>
      <Scene key={'main'}>
        <Scene
          key={'welcome'}
          component={Welcome}
          title={'Welcome'}
          navigationBarStyle={styles.navbarContainer}
          titleStyle={styles.titleStyle}
          initial
        />
      </Scene>
      <Scene key={'setup'} hideNavBar>
        <Scene
          key={'appSetup'}
          component={AppSetup}
          title={'Make your pick'}
          navigationBarStyle={styles.navbarContainer}
          titleStyle={styles.titleStyle}
          initial
        />
      </Scene>
      <Scene key={'app'}>
        <Scene
          key={'GenreSetup'}
          component={GenreSetup}
          title={'Make your pick'}
          navigationBarStyle={styles.navbarContainer}
          titleStyle={styles.titleStyle}
          initial
        />
        <Scene
          key={'byGenre'}
          component={MoviesList}
          title={'Make your pick'}
          navigationBarStyle={styles.navbarContainer}
          titleStyle={styles.titleStyle}
        />
        <Scene
          key={'movieDetail'}
          component={MovieDetail}
          title={'More...'}
          navigationBarStyle={styles.navbarContainer}
          titleStyle={styles.titleStyle}
        />
      </Scene>
    </Router>
  )
);

const styles = {
  navbarContainer: {
    flex: 1,
    backgroundColor: '#E57373',
  },
  titleStyle: {
    color: '#eee',
    fontSize: 20,
  },
};
export default RouterComponent;
