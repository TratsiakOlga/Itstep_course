import Title from "./Title"
import Paragraph from "./Paragraph"

export default function Card({title, image, children}) {
    return (
        <div className="card">
            <img src={image.src} alt={image.alt} />
            <div className="card-content">
                <Title level={3} text={title} />
                <Paragraph>
                    {children}
                </Paragraph>
            </div>
        </div>
    )    
}