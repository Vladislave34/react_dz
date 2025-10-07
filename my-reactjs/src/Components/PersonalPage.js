export default function PersonalPage(props) {
    const {
        name,
        phone,
        email,
        city,
        experience,
        skills,
        photo
    } = props;

    return (
        <div className="card_1">
            <div className="card_1-image">
                <img src={photo} alt={name} />
            </div>

            <div className="card_1-content">
                <h2>{name}</h2>
                <p><strong>Телефон:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Місто:</strong> {city}</p>
                <p><strong>Досвід роботи:</strong> {experience}</p>
                <p><strong>Навички:</strong> {skills}</p>
            </div>
        </div>
    );
}