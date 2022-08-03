import './Overlay.css';

function Overlay(children, overlayClick){
    <div className="Overlay" onClick={()=> overlayClick()}>
        {children}
    </div>
}

export default Overlay;