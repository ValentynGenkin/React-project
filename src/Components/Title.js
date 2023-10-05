import { Container } from 'react-bootstrap';

function Title({ text }) {
  return (
    <Container>
      <h2 className="p-3 m-0">{text}</h2>
    </Container>
  );
}

export default Title;
