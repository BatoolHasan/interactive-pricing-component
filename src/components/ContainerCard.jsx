import ContainerPageviews from './ContainerPageviews';
import ContainerInfo from './ContainerInfo';

function ContainerCard() {


    return (
        <div className="container__card">
            <ContainerPageviews />
            <hr />
            <ContainerInfo />
        </div>
    );
}

export default ContainerCard;
