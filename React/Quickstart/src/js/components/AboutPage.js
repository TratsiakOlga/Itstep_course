import Button from "./Button";

function AboutPage(){
    let content = {
        title: "About",
        text: "This is about our company page",
        button: "My button"
    }

    return(
        <>
        <h1>{content.title}</h1>
        <p>{content.text + "???"}</p>
        <Button startCount={3} btnClass="btn-info" step={3}/>
        </>
    );
          
}
    /*let styles = {
        textAlign: 'center',
        backgroundColor: 'pink'
    }*/

    
    /*return(
        <>
        <h1>{content.title}</h1>
        <p style={styles}>{content.text + "???"}</p>
        </>
    );

    /* Можно так:
    return(
        <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        </>
    );
    А можно так:
    Оба варианта одно и то же*/

export default AboutPage;