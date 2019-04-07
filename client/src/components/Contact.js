import React from 'react'
import { SocialIcon } from 'react-social-icons'


const Contact = () => {
    return (
        <div >
            Built by:
            
            <div className="links">
                <div className="linksto">
                    <h4>Pauline Makoma</h4>
                    <div className="icons">
                        <SocialIcon url="https://github.com/Pauline177" />
                        <SocialIcon url="https://www.linkedin.com/in/pauline-makoma" />
                    </div>

                </div>

                <div className="linksto">
                    <h4>Nicole Cedano</h4>
                    <div className="icons">
                        <SocialIcon url="https://github.com/nicole-cedano" />
                        <SocialIcon url="https://www.linkedin.com/in/nicolecedano/" />

                    </div>

                </div>

                <div className="linksto">
                    <h4>Jean Mizero</h4>
                    <div className="icons">
                        <SocialIcon url="https://github.com/jeanmizero" />
                        <SocialIcon url="https://www.linkedin.com/in/jean-mizero-728a3963/" />
                    </div>

                </div>
        
            </div>
            <div className="car-spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
    )
}

export default Contact