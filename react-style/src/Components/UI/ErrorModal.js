import React from "react";
import Card from './Card';
import Button from './Button';
import Classes from './ErrorModal.module.css';

const ErrorModal = props => {
    return (
        <div>
        <div className={Classes.backdrop} onClick={props.onConfirm}/>
        <Card className={Classes.modal}>
            <header className={Classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={Classes.content}>
                <p>{props.message}</p>
            </div>
            <footer>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
}
export default ErrorModal;