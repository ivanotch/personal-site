import React from 'react'

type CardProps = {
    image: string;
    title: string;
    description: string;
    tags: Array<string>;
};

const Card: React.FC<CardProps> = ({ image, title, description, tags }) => {
    return (
            <div className="mt-[0.6rem] card w-[20rem] bg-base-100 shadow-xl">
                <figure><img src={image} alt="picture" className='w-full h-[20rem] object-cover'/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        {tags.map((tag, index) => (
                            <div className="badge badge-outline" key={index}>{tag}</div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Card