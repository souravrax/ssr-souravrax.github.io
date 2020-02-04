import Header from '../header/header.component';


export default (props) => (
    <div>
        <Header />
        {props.children}
    </div>
)