import ReactDOM from 'react-dom';

import { Overlay } from './styles';

export default function Loarder() {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}
