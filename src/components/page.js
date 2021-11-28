import React from 'react'


const Page = (props) => {
    const {title, header_img,
         short_description, class_image} = props

        return (
            <div className='page-header'>
                <h1 className='page-title'>{title}</h1>
                <hr className="hr-small"></hr>
                <span className="post-subheading">{short_description}</span>
                <img className={class_image} src={header_img} alt=''></img>

                
            </div>
        );
    }


export default Page