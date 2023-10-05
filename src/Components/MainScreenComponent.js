import CardMainScreen from './MainScreenCards';
import Title from './Title';
import MainCarousel from './MainCarousel';
import MainScreenLinks from './MainScreenLinks';
import { Container } from 'react-bootstrap';

function MainScreenComponent() {
  return (
    <>
      <MainCarousel />
      <Title text={'Try something new'} />
      <CardMainScreen />
      <Title text={'Explore the cuisines of different countries '} />
      <Container>
        <MainScreenLinks
          imgUrl={'./assets/france.jpg'}
          text={'French cuisine'}
        />
        <MainScreenLinks
          imgUrl={'./assets/greece.jpg'}
          text={'Greece cuisine'}
        />
        <MainScreenLinks imgUrl={'./assets/japan.jpg'} text={'Japan cuisine'} />
        <MainScreenLinks imgUrl={'./assets/italy.jpg'} text={'Italy cuisine'} />
        <MainScreenLinks
          imgUrl={'./assets/vietnam.jpg'}
          text={'Vietnam cuisine'}
        />
      </Container>
    </>
  );
}

export default MainScreenComponent;
